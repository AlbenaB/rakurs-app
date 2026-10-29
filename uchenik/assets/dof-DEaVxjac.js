var x=Object.defineProperty;var g=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>g(r,typeof e!="symbol"?e+"":e,t);import{l as b,as as w,j as l,W as c,h as T,aH as h,f as d,w as P,B as k,F as v}from"./react-three-fiber.esm-9y0BSqF5.js";import{k as S,l as z,m as D,P as y,n as A}from"./dof-DkcupwbD.js";const p=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,m=`
  #include <packing>
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 uTexel;
  uniform float uNear;
  uniform float uFar;
  uniform float uLens;
  uniform float uFocus;
  uniform float uPxPerMm;
  uniform float uMaxR;
  uniform float uExposure;
  varying vec2 vUv;

  float distanceOf(float z) {
    return -perspectiveDepthToViewZ(z, uNear, uFar) * 1000.0;
  }

  float distanceAt(vec2 uv) {
    return distanceOf(texture2D(tDepth, uv).x);
  }

  // NeutralToneMapping of three.js (Khronos PBR Neutral), with the exposure of the canvas
  vec3 neutral(vec3 colour) {
    const float START = 0.8 - 0.04;
    const float DESATURATION = 0.15;
    colour *= uExposure;
    float x = min(colour.r, min(colour.g, colour.b));
    float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
    colour -= offset;
    float peak = max(colour.r, max(colour.g, colour.b));
    if (peak < START) return colour;
    float d = 1.0 - START;
    float newPeak = 1.0 - d * d / (peak + d - START);
    colour *= newPeak / peak;
    float g = 1.0 - 1.0 / (DESATURATION * (peak - newPeak) + 1.0);
    return mix(colour, vec3(newPeak), g);
  }

  // a point as the screen shows it: a surface tone-mapped, the ground of the room (nothing drawn: the depth is cleared to 1) as it is
  vec3 lookOf(vec2 uv, float z) {
    vec3 c = texture2D(tColor, uv).rgb;
    return z >= 1.0 ? c : neutral(c);
  }

  // half of the circle: c (mm on the sensor) = f² / (N (S − f)) · |d − S| / d, in pixels of the scene target, never wider than the widest that the pass draws
  float radiusAt(float d) {
    float c = uLens * abs(d - uFocus) / max(d, 1.0);
    return min(0.5 * c * uPxPerMm, uMaxR);
  }
`,M=`
  ${m}
  uniform vec2 uDisc[SAMPLES];

  // interleaved gradient noise (Jimenez 2014): a different turn of the spiral for every pixel, without a texture
  float ign(vec2 p) {
    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
  }

  void main() {
    float z0 = texture2D(tDepth, vUv).x;
    float d0 = distanceOf(z0);
    float r0 = radiusAt(d0);
    vec3 sum = lookOf(vUv, z0);
    float total = 1.0;
    if (r0 > 0.25) {
      float a = ign(gl_FragCoord.xy) * 6.2831853;
      float ca = cos(a);
      float sa = sin(a);
      for (int i = 0; i < SAMPLES; i++) {
        vec2 p = uDisc[i];
        vec2 o = vec2(ca * p.x - sa * p.y, sa * p.x + ca * p.y) * r0;
        vec2 uv = vUv + o * uTexel;
        float z = texture2D(tDepth, uv).x;
        float d = distanceOf(z);
        float w = 1.0;
        if (d < d0) {
          // gatherWeight of engine/dof.ts: a nearer point adds only as far as its own circle reaches the pixel
          float t = clamp((radiusAt(d) - length(o) + 1.0) * 0.5, 0.0, 1.0);
          w = t * t * (3.0 - 2.0 * t);
        }
        sum += lookOf(uv, z) * w;
        total += w;
      }
    }
    gl_FragColor = vec4(sum / total, 1.0);
  }
`,R=`
  ${m}
  uniform sampler2D tBlur;
  uniform vec2 uBlurTexel;
  uniform float uBlur;
  uniform float uPeak;
  uniform float uPeakLimit;
  uniform float uPeakStep;

  const vec3 PEAK = vec3(1.0, 0.03, 0.03);

  // the brightness of the finished picture as the eye has it, 0–1 (a gamma of about 2): sharp where it is in focus, the gather where it is blurred (one bilinear read: the
  // peaking looks for edges, not for grain). The edges are looked for in what the screen shows, as a camera does it
  float bright(vec2 uv, float z, float d) {
    vec3 c = lookOf(uv, z);
    if (uBlur > 0.5) c = mix(c, texture2D(tBlur, uv).rgb, smoothstep(0.5, 1.5, 2.0 * radiusAt(d)));
    return sqrt(clamp(dot(c, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0));
  }

  // the pixel in the middle of the Sobel: its distance and its brightness
  float d0;
  float b0;

  // a neighbour of the Sobel. An edge belongs to the nearer of its two sides (it is the outline of what stands in front): a nearer neighbour that is out of focus is the edge of a
  // blurred thing in front of the plane of focus — it is not lit, so it counts as the middle. The outline of a sharp bust over a blurred ground is lit; the edge of a blurred bust
  // over a column in focus is not
  float tap(vec2 uv) {
    float z = texture2D(tDepth, uv).x;
    float d = distanceOf(z);
    if (d < d0 && 2.0 * radiusAt(d) >= uPeakLimit) return b0;
    return bright(uv, z, d);
  }

  // the gradient of the brightness of the sharp picture (Sobel), 0 on a flat field and 1 on a step from black to white
  float edgeAt(vec2 uv, float z) {
    d0 = distanceOf(z);
    b0 = bright(uv, z, d0);
    vec2 e = uTexel * uPeakStep;
    float tl = tap(uv + vec2(-e.x, e.y));
    float t = tap(uv + vec2(0.0, e.y));
    float tr = tap(uv + e);
    float l = tap(uv - vec2(e.x, 0.0));
    float r = tap(uv + vec2(e.x, 0.0));
    float bl = tap(uv - e);
    float b = tap(uv - vec2(0.0, e.y));
    float br = tap(uv + vec2(e.x, -e.y));
    float gx = (tr + 2.0 * r + br) - (tl + 2.0 * l + bl);
    float gy = (tl + 2.0 * t + tr) - (bl + 2.0 * b + br);
    return length(vec2(gx, gy)) * 0.25;
  }

  void main() {
    float z = texture2D(tDepth, vUv).x;
    vec3 sharp = lookOf(vUv, z);
    float circle = 2.0 * radiusAt(distanceOf(z));
    vec3 colour = sharp;
    if (uBlur > 0.5) {
      // four bilinear reads round the pixel (a small tent): the grain of the turned spiral is smoothed, and a half-size gather is drawn up without its steps
      vec2 h = 0.5 * uBlurTexel;
      vec3 blurred = 0.25 * (texture2D(tBlur, vUv + vec2(-h.x, -h.y)).rgb + texture2D(tBlur, vUv + vec2(h.x, -h.y)).rgb + texture2D(tBlur, vUv + vec2(-h.x, h.y)).rgb + texture2D(tBlur, vUv + h).rgb);
      colour = mix(sharp, blurred, smoothstep(0.5, 1.5, circle));
    }
    gl_FragColor = vec4(colour, 1.0);
    if (uPeak > 0.5 && circle < uPeakLimit) {
      float k = smoothstep(PEAK_THRESHOLD, PEAK_THRESHOLD * 2.0, edgeAt(vUv, z));
      gl_FragColor.rgb = mix(gl_FragColor.rgb, PEAK, k);
    }
    #include <colorspace_fragment>
  }
`;function E(r){const e=r>>10&31,t=r&1023,o=e===0?t*2**-24:e===31?1/0:(1+t/1024)*2**(e-15);return r&32768?-o:o}function B(){const r=new k;return r.setAttribute("position",new v([-1,-1,0,3,-1,0,-1,3,0],3)),r.setAttribute("uv",new v([0,0,2,0,0,2],2)),r}const U=r=>r.extensions.has("EXT_color_buffer_float")||r.extensions.has("EXT_color_buffer_half_float");class C{constructor(e){u(this,"quality");u(this,"scene");u(this,"blur");u(this,"gather");u(this,"compose");u(this,"quad");u(this,"screen",new b);u(this,"flat",new w(-1,1,1,-1,0,1));u(this,"size",new l);u(this,"blurSize",new l);this.quality=e,this.scene=new c(1,1,{type:h,depthTexture:new T(1,1),samples:e.scale===1?4:0}),this.blur=new c(1,1,{type:h,depthBuffer:!1});const t=()=>({tColor:{value:this.scene.texture},tDepth:{value:this.scene.depthTexture},uTexel:{value:new l(1,1)},uNear:{value:.1},uFar:{value:40},uLens:{value:0},uFocus:{value:1850},uPxPerMm:{value:1},uMaxR:{value:20},uExposure:{value:1}});this.gather=new d({vertexShader:p,fragmentShader:M,defines:{SAMPLES:e.samples},uniforms:{...t(),uDisc:{value:D(e.samples).map(([o,a])=>new l(o,a))}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.compose=new d({vertexShader:p,fragmentShader:R,defines:{PEAK_THRESHOLD:y.toFixed(3)},uniforms:{...t(),tBlur:{value:this.blur.texture},uBlurTexel:{value:new l(1,1)},uBlur:{value:0},uPeak:{value:0},uPeakLimit:{value:1},uPeakStep:{value:1}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.quad=new P(B(),this.compose),this.quad.frustumCulled=!1,this.screen.add(this.quad)}fit(e){const t=e.getDrawingBufferSize(this.size),o=e.getPixelRatio(),a=this.quality.scale*Math.min(1,1.5/Math.max(1,o)),s=Math.max(1,Math.round(t.x*a)),n=Math.max(1,Math.round(t.y*a));(this.scene.width!==t.x||this.scene.height!==t.y)&&this.scene.setSize(t.x,t.y),(this.blur.width!==s||this.blur.height!==n)&&this.blur.setSize(s,n),this.blurSize.set(s,n)}set(e,t,o,a){for(const n of[this.gather,this.compose]){const i=n.uniforms;i.uTexel.value.set(1/this.size.x,1/this.size.y),i.uNear.value=e.near,i.uFar.value=e.far,i.uLens.value=A(t.focal,t.aperture,t.focus),i.uFocus.value=t.focus*1e3,i.uPxPerMm.value=t.frameShort*o/24,i.uMaxR.value=t.maxBlur*o/2,i.uExposure.value=a}const s=this.compose.uniforms;s.uBlurTexel.value.set(1/this.blurSize.x,1/this.blurSize.y),s.uBlur.value=t.blur?1:0,s.uPeak.value=t.peak?1:0,s.uPeakLimit.value=t.peakLimit*o,s.uPeakStep.value=Math.max(1,Math.round(o))}draw(e,t,o,a){if(!a.blur&&!a.peak){e.setRenderTarget(null),e.render(t,o);return}this.fit(e),this.set(o,a,e.getPixelRatio(),e.toneMappingExposure);const s=e.getRenderTarget();e.setRenderTarget(this.scene),e.render(t,o),a.blur&&(this.quad.material=this.gather,e.setRenderTarget(this.blur),e.render(this.screen,this.flat)),this.quad.material=this.compose,e.setRenderTarget(null),e.render(this.screen,this.flat),s&&e.setRenderTarget(s)}probe(e,t,o,a=8){const s=new Uint16Array(a*a*4);e.readRenderTargetPixels(this.scene,t,o,a,a,s);const n=[0,0,0];for(let i=0;i<s.length;i+=4)for(let f=0;f<3;f++)n[f]+=E(s[i+f]);return{rgb:n.map(i=>i/(a*a)),size:[this.size.x,this.size.y]}}dispose(){var e;(e=this.scene.depthTexture)==null||e.dispose(),this.scene.dispose(),this.blur.dispose(),this.gather.dispose(),this.compose.dispose(),this.quad.geometry.dispose()}}function O(r){var o;const e=navigator,t=a=>typeof a=="number"&&Number.isFinite(a)&&a>0?a:null;return{coarse:typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,narrow:window.innerWidth<768,cores:t(e.hardwareConcurrency),memoryGb:t(e.deviceMemory),saveData:((o=e.connection)==null?void 0:o.saveData)===!0,still:r}}const H=r=>S(O(r),z(window.location.search));export{C as D,U as c,H as d};
