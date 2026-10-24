var ut=Object.defineProperty;var ft=(n,e,t)=>e in n?ut(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var we=(n,e,t)=>ft(n,typeof e!="symbol"?e+"":e,t);import{c as $e,r as p,a as Ge,j as s,b as ie,o as R,aK as We,aL as Ve,u as Se,bt as pt}from"./index-Dp8wBnc0.js";import{H as je,D as qe,o as Ee,p as Le,q as ht,r as Xe,t as F,C as mt,v as O,x as _e,W as Ae,y as H,B as X,F as $,A as Ke,J as gt,K as ge,L as xt,R as vt,N as K,O as Ye,Q as Ze,S as Y,T as f,U as bt,V as yt,X as Me,Y as ze,Z as wt,_ as St,$ as jt,a0 as Et,a1 as te,a2 as ne,a3 as Lt,a4 as _t,a5 as At,a6 as Mt,a7 as zt,a8 as Ct,a9 as kt,M as Nt,k as Ut}from"./Mentor-DhnzlYD7.js";import{U as Je,X as Bt,Y as Ce,Z as me,_ as W,$ as Ot,a0 as xe,a1 as Qe,V as z,j as Rt,a2 as ke,a3 as Ne,a4 as et,a5 as Ft,a6 as V,a7 as Dt,a8 as It,a9 as Tt,u as k,e as Pt,aa as Ht,g as $t,ab as Gt,n as Wt,ac as Vt,s as tt,q as qt,r as Xt,M as Kt,t as Yt,E as Zt,d as nt,p as Jt,I as Qt,J as en,R as tn,K as nn,Q as sn}from"./useStageLayout-6OS9nyXc.js";import{C as se,u as on,B as le}from"./SpecNumber-CAGNGk-0.js";import"./LabBack-CAP6ZfeJ.js";/**
 * @license lucide-react v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st={name:"shapes",size:24,node:[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]};st.node;const an=$e(st);/**
 * @license lucide-react v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot={name:"sunset",size:24,node:[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};ot.node;const rn=$e(ot);function q(){return q=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)({}).hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},q.apply(null,arguments)}const at=Je>=125?"uv1":"uv2",Ue=new xe,Z=new z;class ve extends Bt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new Ce(e,3)),this.setAttribute("uv",new Ce(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,a=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),a.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const a=new me(t,6,1);return this.setAttribute("instanceStart",new W(a,3,0)),this.setAttribute("instanceEnd",new W(a,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let a;e instanceof Float32Array?a=e:Array.isArray(e)&&(a=new Float32Array(e));const o=new me(a,t*2,1);return this.setAttribute("instanceColorStart",new W(o,t,0)),this.setAttribute("instanceColorEnd",new W(o,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ot(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xe);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ue.setFromBufferAttribute(t),this.boundingBox.union(Ue))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qe),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let o=0;for(let i=0,d=e.count;i<d;i++)Z.fromBufferAttribute(e,i),o=Math.max(o,a.distanceToSquared(Z)),Z.fromBufferAttribute(t,i),o=Math.max(o,a.distanceToSquared(Z));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class it extends ve{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,a=new Float32Array(2*t);for(let o=0;o<t;o+=3)a[2*o]=e[o],a[2*o+1]=e[o+1],a[2*o+2]=e[o+2],a[2*o+3]=e[o+3],a[2*o+4]=e[o+4],a[2*o+5]=e[o+5];return super.setPositions(a),this}setColors(e,t=3){const a=e.length-t,o=new Float32Array(2*a);if(t===3)for(let i=0;i<a;i+=t)o[2*i]=e[i],o[2*i+1]=e[i+1],o[2*i+2]=e[i+2],o[2*i+3]=e[i+3],o[2*i+4]=e[i+4],o[2*i+5]=e[i+5];else for(let i=0;i<a;i+=t)o[2*i]=e[i],o[2*i+1]=e[i+1],o[2*i+2]=e[i+2],o[2*i+3]=e[i+3],o[2*i+4]=e[i+4],o[2*i+5]=e[i+5],o[2*i+6]=e[i+6],o[2*i+7]=e[i+7];return super.setColors(o,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class be extends Rt{constructor(e){super({type:"LineMaterial",uniforms:ke.clone(ke.merge([Ne.common,Ne.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Je>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const ce=new V,Be=new z,Oe=new z,S=new V,j=new V,N=new V,de=new z,ue=new It,E=new Dt,Re=new z,J=new xe,Q=new Qe,U=new V;let B,T;function Fe(n,e,t){return U.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),U.multiplyScalar(1/U.w),U.x=T/t.width,U.y=T/t.height,U.applyMatrix4(n.projectionMatrixInverse),U.multiplyScalar(1/U.w),Math.abs(Math.max(U.x,U.y))}function ln(n,e){const t=n.matrixWorld,a=n.geometry,o=a.attributes.instanceStart,i=a.attributes.instanceEnd,d=Math.min(a.instanceCount,o.count);for(let r=0,l=d;r<l;r++){E.start.fromBufferAttribute(o,r),E.end.fromBufferAttribute(i,r),E.applyMatrix4(t);const c=new z,y=new z;B.distanceSqToSegment(E.start,E.end,y,c),y.distanceTo(c)<T*.5&&e.push({point:y,pointOnLine:c,distance:B.origin.distanceTo(y),object:n,face:null,faceIndex:r,uv:null,[at]:null})}}function cn(n,e,t){const a=e.projectionMatrix,i=n.material.resolution,d=n.matrixWorld,r=n.geometry,l=r.attributes.instanceStart,c=r.attributes.instanceEnd,y=Math.min(r.instanceCount,l.count),b=-e.near;B.at(1,N),N.w=1,N.applyMatrix4(e.matrixWorldInverse),N.applyMatrix4(a),N.multiplyScalar(1/N.w),N.x*=i.x/2,N.y*=i.y/2,N.z=0,de.copy(N),ue.multiplyMatrices(e.matrixWorldInverse,d);for(let m=0,w=y;m<w;m++){if(S.fromBufferAttribute(l,m),j.fromBufferAttribute(c,m),S.w=1,j.w=1,S.applyMatrix4(ue),j.applyMatrix4(ue),S.z>b&&j.z>b)continue;if(S.z>b){const v=S.z-j.z,g=(S.z-b)/v;S.lerp(j,g)}else if(j.z>b){const v=j.z-S.z,g=(j.z-b)/v;j.lerp(S,g)}S.applyMatrix4(a),j.applyMatrix4(a),S.multiplyScalar(1/S.w),j.multiplyScalar(1/j.w),S.x*=i.x/2,S.y*=i.y/2,j.x*=i.x/2,j.y*=i.y/2,E.start.copy(S),E.start.z=0,E.end.copy(j),E.end.z=0;const A=E.closestPointToPointParameter(de,!0);E.at(A,Re);const C=Tt.lerp(S.z,j.z,A),x=C>=-1&&C<=1,M=de.distanceTo(Re)<T*.5;if(x&&M){E.start.fromBufferAttribute(l,m),E.end.fromBufferAttribute(c,m),E.start.applyMatrix4(d),E.end.applyMatrix4(d);const v=new z,g=new z;B.distanceSqToSegment(E.start,E.end,g,v),t.push({point:g,pointOnLine:v,distance:B.origin.distanceTo(g),object:n,face:null,faceIndex:m,uv:null,[at]:null})}}}class rt extends Ft{constructor(e=new ve,t=new be({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,a=e.attributes.instanceEnd,o=new Float32Array(2*t.count);for(let d=0,r=0,l=t.count;d<l;d++,r+=2)Be.fromBufferAttribute(t,d),Oe.fromBufferAttribute(a,d),o[r]=r===0?0:o[r-1],o[r+1]=o[r]+Be.distanceTo(Oe);const i=new me(o,2,1);return e.setAttribute("instanceDistanceStart",new W(i,1,0)),e.setAttribute("instanceDistanceEnd",new W(i,1,1)),this}raycast(e,t){const a=this.material.worldUnits,o=e.camera;o===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;B=e.ray;const d=this.matrixWorld,r=this.geometry,l=this.material;T=l.linewidth+i,r.boundingSphere===null&&r.computeBoundingSphere(),Q.copy(r.boundingSphere).applyMatrix4(d);let c;if(a)c=T*.5;else{const b=Math.max(o.near,Q.distanceToPoint(B.origin));c=Fe(o,b,l.resolution)}if(Q.radius+=c,B.intersectsSphere(Q)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),J.copy(r.boundingBox).applyMatrix4(d);let y;if(a)y=T*.5;else{const b=Math.max(o.near,J.distanceToPoint(B.origin));y=Fe(o,b,l.resolution)}J.expandByScalar(y),B.intersectsBox(J)!==!1&&(a?ln(this,t):cn(this,o,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ce),this.material.uniforms.resolution.value.set(ce.z,ce.w))}}class dn extends rt{constructor(e=new it,t=new be({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const un=p.forwardRef(function({points:e,color:t=16777215,vertexColors:a,linewidth:o,lineWidth:i,segments:d,dashed:r,...l},c){var y,b;const m=k(x=>x.size),w=p.useMemo(()=>d?new rt:new dn,[d]),[L]=p.useState(()=>new be),A=(a==null||(y=a[0])==null?void 0:y.length)===4?4:3,C=p.useMemo(()=>{const x=d?new ve:new it,M=e.map(v=>{const g=Array.isArray(v);return v instanceof z||v instanceof V?[v.x,v.y,v.z]:v instanceof et?[v.x,v.y,0]:g&&v.length===3?[v[0],v[1],v[2]]:g&&v.length===2?[v[0],v[1],0]:v});if(x.setPositions(M.flat()),a){t=16777215;const v=a.map(g=>g instanceof Pt?g.toArray():g);x.setColors(v.flat(),A)}return x},[e,d,a,A]);return p.useLayoutEffect(()=>{w.computeLineDistances()},[e,w]),p.useLayoutEffect(()=>{r?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[r,L]),p.useEffect(()=>()=>{C.dispose(),L.dispose()},[C]),p.createElement("primitive",q({object:w,ref:c},l),p.createElement("primitive",{object:C,attach:"geometry"}),p.createElement("primitive",q({object:L,attach:"material",color:t,vertexColors:!!a,resolution:[m.width,m.height],linewidth:(b=o??i)!==null&&b!==void 0?b:1,dashed:r,transparent:A===4},l)))}),lt=p.forwardRef(({threshold:n=15,geometry:e,...t},a)=>{const o=p.useRef(null);p.useImperativeHandle(a,()=>o.current,[]);const i=p.useMemo(()=>[0,0,0,1,0,0],[]),d=p.useRef(null),r=p.useRef(null);return p.useLayoutEffect(()=>{const l=o.current.parent,c=e??(l==null?void 0:l.geometry);if(!c||d.current===c&&r.current===n)return;d.current=c,r.current=n;const b=new Ht(c,n).attributes.position.array;o.current.geometry.setPositions(b),o.current.geometry.attributes.instanceStart.needsUpdate=!0,o.current.geometry.attributes.instanceEnd.needsUpdate=!0,o.current.computeLineDistances()}),p.createElement(un,q({segments:!0,points:i,ref:o,raycast:()=>null},t))}),D=["lens","angle","compose"],h=Ge(n=>({...qe,horizon:!0,look:je,blocking:!1,tab:"lens",subject:"loading",setSensor:e=>n(t=>t.sensor===e?t:{sensor:e}),setGrid:e=>n(t=>t.grid===e?t:{grid:e}),setFocal:e=>n(t=>{const a=Math.round(Le(e));return t.focal===a?t:{focal:a}}),setAngle:e=>n(t=>t.angle===e?t:{angle:e}),setRoll:e=>n(t=>{const a=Ee(e);return t.roll===a?t:{roll:a}}),setCompress:e=>n(t=>t.compress===e?t:{compress:e}),setHorizon:e=>n(t=>t.horizon===e?t:{horizon:e}),setBlocking:e=>n(t=>t.blocking===e?t:{blocking:e}),setTab:e=>n(t=>t.tab===e?t:{tab:e}),setSubject:e=>n(t=>t.subject===e?t:{subject:e}),setLook:e=>n(t=>{const a=ht(e);return t.look.yaw===a.yaw&&t.look.pitch===a.pitch?t:{look:a}}),take:e=>n({sensor:e.sensor,grid:e.grid,focal:Math.round(Le(e.focal)),angle:e.angle,roll:Ee(e.roll),compress:e.compress}),centre:()=>n({look:je})})),fe=qe,oe=Ge(()=>({focal:fe.focal,blend:Xe(fe.angle),follow:1,roll:fe.roll})),P=$t(),De="#e8e9ec",re="#1e2026",fn="#9a9ea8";function I({position:n,size:e}){return s.jsxs("mesh",{position:n,children:[s.jsx("boxGeometry",{args:e}),s.jsx("meshStandardMaterial",{color:"#f7f7f5",roughness:1}),s.jsx(lt,{color:re,threshold:15})]})}const ct="nefertiti";function dt({object:n,source:e}){return p.useEffect(()=>(h.getState().setSubject(e),()=>h.getState().setSubject("loading")),[e]),p.useEffect(()=>()=>Yt(n,e==="stand-in"),[n,e]),s.jsx("primitive",{object:n})}function Ie(){const n=p.useMemo(()=>tt(qt()),[]);return s.jsx(dt,{object:n,source:"stand-in"})}function pn({url:n}){const e=Xt(n,!1),t=p.useMemo(()=>tt(e.scene.clone(!0),Kt[ct]??0),[e]);return s.jsx(dt,{object:t,source:"file"})}class hn extends p.Component{constructor(){super(...arguments);we(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?this.props.fallback:this.props.children}}function mn(){const n=Wt(ct);return n?s.jsx(hn,{fallback:s.jsx(Ie,{}),children:s.jsx(p.Suspense,{fallback:null,children:s.jsx(pn,{url:n})})}):s.jsx(Ie,{})}function Te({radius:n,axis:e,y:t=0}){const a=p.useMemo(()=>{const o=Array.from({length:72},(i,d)=>{const r=d/72*Math.PI*2;return e==="y"?new z(Math.cos(r)*n,t,Math.sin(r)*n):new z(Math.cos(r)*n,t+Math.sin(r)*n,0)});return new Vt().setFromPoints(o)},[n,e,t]);return p.useEffect(()=>()=>a.dispose(),[a]),s.jsx("lineLoop",{geometry:a,children:s.jsx("lineBasicMaterial",{color:re})})}function Pe(n,e){n.dataset.forms=e}function gn(){const e=k(t=>t.gl.domElement);return p.useEffect(()=>(h.getState().setSubject("blocks"),Pe(e,"cube cylinder sphere"),()=>{h.getState().setSubject("loading"),Pe(e,"")}),[e]),s.jsxs("group",{"data-blocks":"true",children:[s.jsx(I,{position:[0,.1,0],size:[.42,.2,.24]}),s.jsxs("mesh",{position:[0,.28,0],children:[s.jsx("cylinderGeometry",{args:[.06,.065,.16,36]}),s.jsx("meshStandardMaterial",{color:"#f7f7f5",roughness:1}),s.jsx(lt,{color:re,threshold:15})]}),s.jsxs("group",{position:[0,Gt-.145-.015,0],children:[s.jsxs("mesh",{children:[s.jsx("sphereGeometry",{args:[.145,48,32]}),s.jsx("meshStandardMaterial",{color:"#f7f7f5",roughness:1})]}),s.jsx(Te,{radius:.145*1.004,axis:"y"}),s.jsx(Te,{radius:.145*1.004,axis:"z"})]})]})}function xn({blocking:n}){return s.jsxs("group",{position:[F.x,0,F.z],children:[s.jsx(I,{position:[0,F.height/2,0],size:[F.width,F.height,F.width]}),s.jsx("group",{position:[0,F.height,0],children:n?s.jsx(gn,{}):s.jsx(mn,{})})]})}const ee=ie.atelierFrame;function vn(){const n=k(t=>t.gl.domElement),e=k(t=>t.invalidate);return p.useEffect(()=>{const t=()=>e();return n.addEventListener("webglcontextrestored",t),()=>n.removeEventListener("webglcontextrestored",t)},[n,e]),null}function bn({onReady:n}){const e=p.useRef(!1);return nt(()=>{e.current||(e.current=!0,n())}),null}const He=Ke(vt);function yn({blocking:n}){return s.jsxs(s.Fragment,{children:[s.jsx("color",{attach:"background",args:[De]}),s.jsx("fog",{attach:"fog",args:[De,He.near,He.far]}),s.jsx("ambientLight",{intensity:.8}),s.jsx("directionalLight",{position:[5,10,4],intensity:2.1}),s.jsx("gridHelper",{args:[160,160,re,fn]}),mt.map(e=>s.jsxs("group",{children:[s.jsx(I,{position:[-_e,O.height/2,e],size:[O.width,O.height,O.width]}),s.jsx(I,{position:[_e,O.height/2,e],size:[O.width,O.height,O.width]})]},e)),s.jsx(I,{position:[-Ae,.6,-32],size:[.3,1.2,70]}),s.jsx(I,{position:[Ae,.6,-32],size:[.3,1.2,70]}),s.jsx(I,{position:[H.x,H.size/2,H.z],size:[H.size,H.size,H.size]}),s.jsxs("mesh",{position:[X.x,X.radius,X.z],children:[s.jsx("sphereGeometry",{args:[X.radius,32,24]}),s.jsx("meshStandardMaterial",{color:"#e9eaec",roughness:1})]}),s.jsx(xn,{blocking:n}),s.jsxs("mesh",{position:[$.x,$.height/2,$.z],children:[s.jsx("capsuleGeometry",{args:[$.radius,$.height-2*$.radius,6,20]}),s.jsx("meshStandardMaterial",{color:"#f5cd43",roughness:.9})]})]})}const pe=n=>n*Math.PI/180;function wn(n,e,t,a){return a?(n.focal=e.focal,n.blend=e.blend,n.follow=e.follow,n.roll=e.roll,!0):(n.focal=K(n.focal,e.focal,t,Y.focal,.05),n.blend=K(n.blend,e.blend,t,Y.angle,.003),n.follow=K(n.follow,e.follow,t,Y.follow,.003),n.roll=K(n.roll,e.roll,t,Y.roll,.05),n.focal===e.focal&&n.blend===e.blend&&n.follow===e.follow&&n.roll===e.roll)}function Sn(n,e,t,a,o,i){const d=ge(a.sensor,a.orientation,o.focal),r=Ye(o.focal,o.blend,o.follow);n.position.set(0,r.y,r.z),n.rotation.set(pe(r.pitch+a.look.pitch),-pe(a.look.yaw),pe(o.roll),"YXZ"),Jt(n,a.frame,a.size,d.down);const l=e.fog;if(l){const y=Ke(r.distance);l.near=y.near,l.far=y.far}const c=Ze({yaw:a.look.yaw,pitch:r.pitch+a.look.pitch},d,o.roll);t.dataset.sensor=a.sensor,t.dataset.fov=d.down.toFixed(2),t.dataset.fovAcross=d.across.toFixed(2),t.dataset.focal=o.focal.toFixed(1),t.dataset.focalGoal=String(a.goal.focal),t.dataset.angle=a.angle,t.dataset.blend=o.blend.toFixed(2),t.dataset.roll=o.roll.toFixed(1),t.dataset.follow=o.follow.toFixed(2),t.dataset.distance=r.distance.toFixed(2),t.dataset.camera=`${r.y.toFixed(2)} ${r.z.toFixed(2)} ${r.pitch.toFixed(1)}`,t.dataset.look=`${a.look.yaw.toFixed(1)} ${a.look.pitch.toFixed(1)}`,t.dataset.vp=`${c.x.toFixed(3)} ${c.y.toFixed(3)}`,t.dataset.arrived=String(i)}function jn(n,e,t){n.dataset.arrived=String(e.focal===t.focal&&e.blend===t.blend&&e.follow===t.follow&&e.roll===t.roll)}function En(n){const e=oe.getState();(e.focal!==n.focal||e.blend!==n.blend||e.follow!==n.follow||e.roll!==n.roll)&&oe.setState({...n})}function Ln({frame:n,orientation:e,still:t}){const a=k(x=>x.camera),o=k(x=>x.scene),i=k(x=>x.size),d=k(x=>x.invalidate),r=k(x=>x.gl.domElement),l=h(x=>x.sensor),c=h(x=>x.look),y=h(x=>x.focal),b=h(x=>x.angle),m=h(x=>x.roll),w=h(x=>x.compress),L=p.useRef({...oe.getState()}),A=p.useRef(null),C=p.useRef(t);return p.useLayoutEffect(()=>{A.current={frame:n,size:i,orientation:e,sensor:l,look:c,angle:b,goal:{focal:y,blend:Xe(b),follow:w?1:0,roll:m}},C.current=t,jn(r,L.current,A.current.goal),d()},[n,i,e,l,c,b,y,m,w,t,r,d]),p.useEffect(()=>P.subscribe(()=>d()),[d]),nt((x,M)=>{const v=A.current;if(!v)return;const g={...v,goal:{...v.goal,focal:P.get("focal")??v.goal.focal,roll:P.get("roll")??v.goal.roll}},ye=wn(L.current,g.goal,Math.min(M,.05),C.current);Sn(a,o,r,g,L.current,ye),En(L.current),ye||d()}),null}function he(n,e){n.dataset.grab=String(e)}function _n(n,e){n.setAttribute("role","img"),n.tabIndex=0,n.setAttribute("aria-label",e)}function An({frame:n,orientation:e}){const t=k(o=>o.gl.domElement),a=p.useRef({frame:n,orientation:e});return p.useEffect(()=>{a.current={frame:n,orientation:e}},[n,e]),p.useEffect(()=>{let o=null;const i=c=>{!c.isPrimary||c.button!==0||(o={id:c.pointerId,x:c.clientX,y:c.clientY},t.setPointerCapture(c.pointerId),he(t,!0))},d=c=>{if(!o||c.pointerId!==o.id)return;const{frame:y,orientation:b}=a.current,m=h.getState();m.setLook(gt(m.look,c.clientX-o.x,c.clientY-o.y,y,ge(m.sensor,b,m.focal))),o.x=c.clientX,o.y=c.clientY},r=c=>{!o||c.pointerId!==o.id||(o=null,he(t,!1))},l=c=>{if(c.ctrlKey||c.metaKey||c.altKey)return;const y=h.getState(),b=c.key==="ArrowLeft"?"left":c.key==="ArrowRight"?"right":c.key==="ArrowUp"?"up":c.key==="ArrowDown"?"down":null;if(b)y.setLook(xt(y.look,b,c.shiftKey?1:3));else if(c.key==="Home")y.centre();else return;c.preventDefault()};return he(t,!1),t.addEventListener("pointerdown",i),t.addEventListener("pointermove",d),t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("keydown",l),()=>{t.removeEventListener("pointerdown",i),t.removeEventListener("pointermove",d),t.removeEventListener("pointerup",r),t.removeEventListener("pointercancel",r),t.removeEventListener("keydown",l)}},[t]),null}function Mn(){const n=k(r=>r.gl.domElement),e=h(r=>r.sensor),t=h(r=>r.grid),a=h(r=>r.focal),o=h(r=>r.angle),i=h(r=>r.roll),d=h(r=>r.blocking);return p.useEffect(()=>_n(n,ee.canvas(ee.sensor[e],ee.gridNames[t],a,ee.angles[o],i,d)),[n,e,t,a,o,i,d]),null}function zn({frame:n,orientation:e,still:t,blocking:a,onReady:o}){return s.jsxs(Zt,{flat:!0,dpr:[1,2],frameloop:"demand",camera:{manual:!0,fov:38,near:.1,far:400,position:[0,1.6,-1.5]},gl:{antialias:!0,powerPreference:"high-performance"},style:{position:"absolute",inset:0,touchAction:"none",cursor:"grab"},children:[s.jsx(yn,{blocking:a}),s.jsx(Ln,{frame:n,orientation:e,still:t}),s.jsx(An,{frame:n,orientation:e}),s.jsx(vn,{}),s.jsx(Mn,{}),s.jsx(bn,{onReady:o})]})}const u=ie.atelierFrame;function ae({name:n,id:e,wide:t,children:a}){return s.jsxs("div",{className:`${f.group}${t?` ${f.wide}`:""}`,"data-testid":e,children:[s.jsx("span",{className:f.groupLabel,"aria-hidden":"true",children:n}),a]})}function Cn(){const n=h(l=>l.focal),e=h(l=>l.sensor),t=h(l=>l.compress),a=h(l=>l.setFocal),o=h(l=>l.setSensor),i=h(l=>l.setCompress),d=u.lensClass[ze(n,e)],r=l=>{o(l);const c=Math.round(Lt(n,_t(l).width));R(u.announce.sensor(u.sensor[l],te(ne(l)),c))};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${f.group} ${f.wide}`,"data-testid":"frame-focal",children:[s.jsx("span",{className:f.groupLabel,"aria-hidden":"true",children:u.focal.label}),s.jsx(We,{label:u.focal.slider,value:n,min:jt,max:St,step:1,warp:wt,format:l=>u.focal.value(Math.round(l),u.lensClass[ze(l,e)]),valueText:u.focal.valueText(n,d),editText:l=>String(Math.round(l)),onScrub:l=>P.set("focal",l),onChange:l=>{P.clear("focal"),a(l)},onStep:Ve,className:f.numberField,testId:"frame-focal-value"}),s.jsxs("div",{className:f.ends,"aria-hidden":"true",children:[s.jsx("span",{children:u.focal.min}),s.jsx("span",{children:u.focal.max})]})]}),s.jsx(ae,{name:u.sensorLabel,id:"frame-sensors",children:s.jsx(se,{label:u.sensorLabel,value:e,onChange:r,className:f.segment,itemClassName:f.tile,options:Et.map(l=>({value:l.id,label:`${u.sensor[l.id]}, изрязване ×${te(ne(l.id))}`,content:s.jsxs(s.Fragment,{children:[s.jsx("span",{children:u.sensor[l.id]}),s.jsx("small",{children:u.crop(te(ne(l.id)))})]})}))})}),s.jsx(ae,{name:u.perspective.label,id:"frame-perspective",children:s.jsx(se,{label:u.perspective.label,value:t?"compress":"zoom",onChange:l=>{i(l==="compress"),R(u.announce.compress(l==="compress"))},className:f.segment,itemClassName:f.tile,options:[{value:"compress",label:`${u.perspective.compress}, ${u.perspective.compressHint}`,content:s.jsxs(s.Fragment,{children:[s.jsx("span",{children:u.perspective.compress}),s.jsx("small",{children:u.perspective.compressHint})]})},{value:"zoom",label:`${u.perspective.zoom}, ${u.perspective.zoomHint}`,content:s.jsxs(s.Fragment,{children:[s.jsx("span",{children:u.perspective.zoom}),s.jsx("small",{children:u.perspective.zoomHint})]})}]})})]})}function kn(){const n=h(i=>i.angle),e=h(i=>i.roll),t=h(i=>i.setAngle),a=h(i=>i.setRoll),o={eye:u.angle.eyeHint,high:u.angle.highHint,low:u.angle.lowHint};return s.jsxs(s.Fragment,{children:[s.jsx(ae,{name:u.angle.label,id:"frame-angles",children:s.jsx(se,{label:u.angle.label,value:n,onChange:i=>{t(i),R(u.announce.angle(u.angles[i]))},className:f.segment,itemClassName:f.tile,options:yt.map(i=>({value:i,label:`${u.angles[i]}`,content:s.jsxs(s.Fragment,{children:[s.jsx("span",{children:u.angle[i]}),s.jsx("small",{children:o[i]})]})}))})}),s.jsxs("div",{className:`${f.group} ${f.wide}`,"data-testid":"frame-roll",children:[s.jsx("span",{className:f.groupLabel,"aria-hidden":"true",children:u.roll.label}),s.jsxs("div",{className:f.rollRow,children:[s.jsx(We,{label:u.roll.slider,value:e,min:-Me,max:Me,step:1,format:i=>u.roll.value(Math.round(i)),editText:i=>String(Math.round(i)),onScrub:i=>P.set("roll",i),onChange:i=>{P.clear("roll"),a(i)},onStep:Ve,className:f.numberField,testId:"frame-roll-value"}),s.jsx("button",{type:"button",className:f.reset,disabled:e===0,onClick:()=>{a(0),R(u.announce.roll(0))},"aria-label":u.roll.reset,title:u.roll.reset,"data-testid":"frame-roll-reset",children:"0°"})]}),s.jsxs("div",{className:f.ends,"aria-hidden":"true",children:[s.jsx("span",{children:u.roll.left}),s.jsx("span",{children:u.roll.right})]})]})]})}function Nn(){const n=h(t=>t.grid),e=h(t=>t.setGrid);return s.jsx(ae,{name:u.gridLabel,id:"frame-grids",children:s.jsx(se,{label:u.gridLabel,value:n,onChange:t=>{e(t),R(u.announce.grid(u.gridNames[t]))},className:f.segment,itemClassName:f.tile,options:bt.map(t=>({value:t,label:u.gridNames[t],content:s.jsx("span",{children:u.grid[t]})}))})})}const Un={lens:()=>s.jsx(Cn,{}),angle:()=>s.jsx(kn,{}),compose:()=>s.jsx(Nn,{})};function Bn({containerRef:n}){const e=h(o=>o.tab),t=h(o=>o.setTab),a=o=>{var l;const i=D.indexOf(e),d=D.length-1,r=o.key==="ArrowRight"?(i+1)%D.length:o.key==="ArrowLeft"?(i+d)%D.length:o.key==="Home"?0:o.key==="End"?d:-1;r<0||(o.preventDefault(),t(D[r]),(l=o.currentTarget.querySelectorAll('[role="tab"]')[r])==null||l.focus())};return s.jsxs("section",{ref:n,className:f.bar,"aria-label":u.barLabel,"data-testid":"frame-bar","data-tab":e,children:[s.jsx("div",{role:"tablist","aria-label":u.tabs.label,className:f.tabs,onKeyDown:a,children:D.map(o=>s.jsx("button",{type:"button",role:"tab",id:`frame-tab-${o}`,"aria-selected":e===o,"aria-controls":`frame-pane-${o}`,tabIndex:e===o?0:-1,className:f.tabButton,onClick:()=>t(o),"data-testid":`frame-tab-${o}`,children:u.tabs[o]},o))}),s.jsx("div",{className:f.panes,children:D.map(o=>s.jsx("div",{role:"tabpanel",id:`frame-pane-${o}`,"aria-labelledby":`frame-tab-${o}`,className:f.pane,"data-active":e===o,inert:e!==o,"data-testid":`frame-pane-${o}`,children:Un[o]()},o))})]})}const G=ie.atelierFrame;function On({rect:n,sensor:e,orientation:t,grid:a,horizon:o,look:i}){const d=oe(),r=ge(e,t,d.focal),l=Ye(d.focal,d.blend,d.follow),c=Ze({yaw:i.yaw,pitch:l.pitch+i.pitch},r,d.roll),y=ne(e),b=Math.round(d.roll),m=o?At(c.x*n.width,c.y*n.height,c.angle,n.width,n.height):null,w=m?m.x2-m.x1:0;return s.jsxs("div",{className:f.visor,"data-testid":"frame-visor","data-sensor":e,"data-grid":a,"data-orientation":t,style:{left:n.x,top:n.y,width:n.width,height:n.height},"aria-hidden":"true",children:[s.jsxs("div",{className:f.clip,children:[s.jsx(Mt,{grid:a,className:f.grid}),o&&s.jsxs(s.Fragment,{children:[m&&s.jsxs("svg",{className:f.horizonSvg,width:n.width,height:n.height,viewBox:`0 0 ${n.width} ${n.height}`,focusable:"false",children:[s.jsx("line",{x1:m.x1,y1:m.y1,x2:m.x2,y2:m.y2,className:f.horizonUnder}),s.jsx("line",{x1:m.x1,y1:m.y1,x2:m.x2,y2:m.y2,className:f.horizonOver,"data-testid":"frame-horizon","data-angle":c.angle})]}),m&&s.jsx("span",{className:f.horizonLabel,"data-end":w>=0?"right":"left",style:{left:w>=0?m.x2:m.x1,top:w>=0?m.y2:m.y1},children:G.horizon.line}),c.ahead&&s.jsx("span",{className:f.vp,style:{left:`${c.x*100}%`,top:`${c.y*100}%`},"data-testid":"frame-vp",children:s.jsx("i",{children:G.horizon.point})})]})]}),s.jsx("span",{className:`${f.corner} ${f.tl}`}),s.jsx("span",{className:`${f.corner} ${f.tr}`}),s.jsx("span",{className:`${f.corner} ${f.bl}`}),s.jsx("span",{className:`${f.corner} ${f.br}`}),s.jsxs("span",{className:f.hud,"data-testid":"frame-hud",children:[s.jsx("b",{children:G.hudTop(Math.round(d.focal),G.sensor[e],te(y))}),s.jsx("span",{children:G.hudBottom(Math.round(zt(d.focal,e)),Math.round(r.diagonal))}),b!==0&&s.jsx("span",{children:G.hudRoll(b)})]})]})}const _=ie.atelierFrame;function Hn(){const n=h(g=>g.sensor),e=h(g=>g.grid),t=h(g=>g.horizon),a=h(g=>g.look),o=h(g=>g.blocking),i=h(g=>g.subject),d=Ct(a),r=on(),l=p.useRef(null),c=p.useRef(null),y=p.useMemo(()=>Qt(),[]),[b,m]=p.useState(!1),w=y&&!b,[L,A]=p.useState(!1),C=p.useCallback(()=>A(!0),[]);p.useEffect(()=>(Se.setState({chromeHidden:!0}),()=>{Se.setState({chromeHidden:!1})}),[]),p.useEffect(()=>()=>h.getState().centre(),[]);const x=en(l,c,w),M=p.useMemo(()=>x?kt(x.box,x.insets,n):null,[x,n]),v=p.useMemo(()=>w?{can:!0,apply:g=>h.getState().take(g)}:{can:!1,reason:_.noWebgl,apply:()=>{}},[w]);return s.jsxs("div",{ref:l,className:f.stage,"data-dv":"frame","data-testid":"frame-stage","data-ready":L,"data-sensor":n,"data-grid":e,"data-horizon":t,"data-subject":i,"data-blocking":o,children:[w&&M&&s.jsx(tn,{onError:()=>m(!0),children:s.jsx(zn,{frame:M.rect,orientation:M.orientation,still:r,blocking:o,onReady:C})}),!w&&s.jsx("div",{className:f.noGl,"data-testid":"frame-no-webgl",children:s.jsx("p",{role:"alert",children:_.noWebgl})}),s.jsx("h1",{className:"visually-hidden",children:_.title}),w&&M&&s.jsx(On,{rect:M.rect,sensor:n,orientation:M.orientation,grid:e,horizon:t,look:a}),s.jsxs("div",{className:f.top,children:[s.jsxs("a",{className:`surface-glass ${f.back}`,href:"#/atelier","aria-label":_.back,"data-testid":"frame-back",children:[s.jsx(pt,{"aria-hidden":"true"}),s.jsx("span",{className:f.backLabel,"aria-hidden":"true",children:_.parent})]}),s.jsxs("div",{className:f.title,"aria-hidden":"true","data-testid":"frame-title",children:[s.jsx("b",{children:_.name}),s.jsx("i",{children:_.kind})]}),s.jsxs("div",{className:f.tools,children:[s.jsx(Nt,{volume:"proportion"}),w&&s.jsxs(s.Fragment,{children:[s.jsx(le,{icon:s.jsx(nn,{"aria-hidden":"true"}),label:_.centre,disabled:d,onClick:()=>{h.getState().centre(),R(_.centred)},testId:"frame-centre"}),s.jsx(le,{icon:s.jsx(an,{"aria-hidden":"true"}),label:_.blocking.label,pressed:o,onClick:()=>{const g=!h.getState().blocking;h.getState().setBlocking(g),R(_.announce.blocking(g))},testId:"frame-blocking"}),s.jsx(le,{icon:s.jsx(rn,{"aria-hidden":"true"}),label:_.horizon.label,pressed:t,onClick:()=>{const g=!h.getState().horizon;h.getState().setHorizon(g),R(_.announce.horizon(g))},testId:"frame-horizon-toggle"}),s.jsx(sn,{ids:i==="file"?["nefertiti"]:[]})]})]})]}),w&&s.jsx(Bn,{containerRef:c}),s.jsx(Ut,{proportion:v})]})}export{Hn as AtelierFrame,Hn as default};
