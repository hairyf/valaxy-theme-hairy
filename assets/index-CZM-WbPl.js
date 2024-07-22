import{at as pe,au as j,av as be,P as ke,U as ne,aj as Ie,ak as te,d as fe,aw as se,ax as xe,ay as _e,R as we,S as he,az as ye,I as $,aA as Te,aB as Ee,i as L,an as re,ao as Ce,C as Ne,b as V,e as ie,j as f,w as E,h as w,M as b,f as n,a1 as oe,ag as Oe,g as W,X as O,af as ze,c as Z,F as le,aC as Le,aD as Se,aE as Re,aF as Ae,W as $e,aG as Me,aH as Xe,l as Be,aI as Fe,aJ as Ve,r as We,a9 as Ye,aK as De,T as Pe,as as H,aL as M,Z as He}from"./app-DoOrpxZc.js";var je=/\s/;function Ke(e){for(var i=e.length;i--&&je.test(e.charAt(i)););return i}var Ue=/^\s+/;function Ze(e){return e&&e.slice(0,Ke(e)+1).replace(Ue,"")}var ue=NaN,Ge=/^[-+]0x[0-9a-f]+$/i,Je=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,Qe=parseInt;function ce(e){if(typeof e=="number")return e;if(pe(e))return ue;if(j(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=j(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Ze(e);var l=Je.test(e);return l||qe.test(e)?Qe(e.slice(2),l?2:8):Ge.test(e)?ue:+e}var G=function(){return be.Date.now()},ea="Expected a function",aa=Math.max,na=Math.min;function ta(e,i,l){var m,r,k,C,t,h,y=0,X=!1,N=!1,I=!0;if(typeof e!="function")throw new TypeError(ea);i=ce(i)||0,j(l)&&(X=!!l.leading,N="maxWait"in l,k=N?aa(ce(l.maxWait)||0,i):k,I="trailing"in l?!!l.trailing:I);function v(o){var x=m,T=r;return m=r=void 0,y=o,C=e.apply(T,x),C}function S(o){return y=o,t=setTimeout(R,i),X?v(o):C}function c(o){var x=o-h,T=o-y,P=i-x;return N?na(P,k-T):P}function Y(o){var x=o-h,T=o-y;return h===void 0||x>=i||x<0||N&&T>=k}function R(){var o=G();if(Y(o))return B(o);t=setTimeout(R,c(o))}function B(o){return t=void 0,I&&m?v(o):(m=r=void 0,C)}function D(){t!==void 0&&clearTimeout(t),y=0,m=h=r=t=void 0}function K(){return t===void 0?C:B(G())}function F(){var o=G(),x=Y(o);if(m=arguments,r=this,h=o,x){if(t===void 0)return S(h);if(N)return clearTimeout(t),t=setTimeout(R,i),v(h)}return t===void 0&&(t=setTimeout(R,i)),C}return F.cancel=D,F.flush=K,F}var sa="Expected a function";function J(e,i,l){var m=!0,r=!0;if(typeof e!="function")throw new TypeError(sa);return j(l)&&(m="leading"in l?!!l.leading:m,r="trailing"in l?!!l.trailing:r),ta(e,i,{leading:m,maxWait:i,trailing:r})}const ra=e=>Object.keys(e),ia=ke({urlList:{type:ne(Array),default:()=>Ie([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:ne(String)}}),oa={close:()=>!0,switch:e=>te(e),rotate:e=>te(e)},la=["src","crossorigin"],ua=fe({name:"ElImageViewer"}),ca=fe({...ua,props:ia,emits:oa,setup(e,{expose:i,emit:l}){var m;const r=e,k={CONTAIN:{name:"contain",icon:se(xe)},ORIGINAL:{name:"original",icon:se(_e)}},{t:C}=we(),t=he("image-viewer"),{nextZIndex:h}=ye(),y=$(),X=$([]),N=Te(),I=$(!0),v=$(r.initialIndex),S=Ee(k.CONTAIN),c=$({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=$((m=r.zIndex)!=null?m:h()),R=L(()=>{const{urlList:a}=r;return a.length<=1}),B=L(()=>v.value===0),D=L(()=>v.value===r.urlList.length-1),K=L(()=>r.urlList[v.value]),F=L(()=>[t.e("btn"),t.e("prev"),t.is("disabled",!r.infinite&&B.value)]),o=L(()=>[t.e("btn"),t.e("next"),t.is("disabled",!r.infinite&&D.value)]),x=L(()=>{const{scale:a,deg:s,offsetX:u,offsetY:g,enableTransition:_}=c.value;let d=u/a,p=g/a;switch(s%360){case 90:case-270:[d,p]=[p,-d];break;case 180:case-180:[d,p]=[-d,-p];break;case 270:case-90:[d,p]=[-p,d];break}const A={transform:`scale(${a}) rotate(${s}deg) translate(${d}px, ${p}px)`,transition:_?"transform .3s":""};return S.value.name===k.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A});function T(){de(),l("close")}function P(){const a=J(u=>{switch(u.code){case M.esc:r.closeOnPressEscape&&T();break;case M.space:Q();break;case M.left:ee();break;case M.up:z("zoomIn");break;case M.right:ae();break;case M.down:z("zoomOut");break}}),s=J(u=>{const g=u.deltaY||u.deltaX;z(g<0?"zoomIn":"zoomOut",{zoomRate:r.zoomRate,enableTransition:!1})});N.run(()=>{H(document,"keydown",a),H(document,"wheel",s)})}function de(){N.stop()}function me(){I.value=!1}function ve(a){I.value=!1,a.target.alt=C("el.image.error")}function ge(a){if(I.value||a.button!==0||!y.value)return;c.value.enableTransition=!1;const{offsetX:s,offsetY:u}=c.value,g=a.pageX,_=a.pageY,d=J(A=>{c.value={...c.value,offsetX:s+A.pageX-g,offsetY:u+A.pageY-_}}),p=H(document,"mousemove",d);H(document,"mouseup",()=>{p()}),a.preventDefault()}function q(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function Q(){if(I.value)return;const a=ra(k),s=Object.values(k),u=S.value.name,_=(s.findIndex(d=>d.name===u)+1)%a.length;S.value=k[a[_]],q()}function U(a){const s=r.urlList.length;v.value=(a+s)%s}function ee(){B.value&&!r.infinite||U(v.value-1)}function ae(){D.value&&!r.infinite||U(v.value+1)}function z(a,s={}){if(I.value)return;const{minScale:u,maxScale:g}=r,{zoomRate:_,rotateDeg:d,enableTransition:p}={zoomRate:r.zoomRate,rotateDeg:90,enableTransition:!0,...s};switch(a){case"zoomOut":c.value.scale>u&&(c.value.scale=Number.parseFloat((c.value.scale/_).toFixed(3)));break;case"zoomIn":c.value.scale<g&&(c.value.scale=Number.parseFloat((c.value.scale*_).toFixed(3)));break;case"clockwise":c.value.deg+=d,l("rotate",c.value.deg);break;case"anticlockwise":c.value.deg-=d,l("rotate",c.value.deg);break}c.value.enableTransition=p}return re(K,()=>{Ce(()=>{const a=X.value[0];a!=null&&a.complete||(I.value=!0)})}),re(v,a=>{q(),l("switch",a)}),Ne(()=>{var a,s;P(),(s=(a=y.value)==null?void 0:a.focus)==null||s.call(a)}),i({setActiveItem:U}),(a,s)=>(V(),ie(De,{to:"body",disabled:!a.teleported},[f(Ye,{name:"viewer-fade",appear:""},{default:E(()=>[w("div",{ref_key:"wrapper",ref:y,tabindex:-1,class:b(n(t).e("wrapper")),style:oe({zIndex:Y.value})},[w("div",{class:b(n(t).e("mask")),onClick:s[0]||(s[0]=Oe(u=>a.hideOnClickModal&&T(),["self"]))},null,2),W(" CLOSE "),w("span",{class:b([n(t).e("btn"),n(t).e("close")]),onClick:T},[f(n(O),null,{default:E(()=>[f(n(ze))]),_:1})],2),W(" ARROW "),n(R)?W("v-if",!0):(V(),Z(le,{key:0},[w("span",{class:b(n(F)),onClick:ee},[f(n(O),null,{default:E(()=>[f(n(Le))]),_:1})],2),w("span",{class:b(n(o)),onClick:ae},[f(n(O),null,{default:E(()=>[f(n(Se))]),_:1})],2)],64)),W(" ACTIONS "),w("div",{class:b([n(t).e("btn"),n(t).e("actions")])},[w("div",{class:b(n(t).e("actions__inner"))},[f(n(O),{onClick:s[1]||(s[1]=u=>z("zoomOut"))},{default:E(()=>[f(n(Re))]),_:1}),f(n(O),{onClick:s[2]||(s[2]=u=>z("zoomIn"))},{default:E(()=>[f(n(Ae))]),_:1}),w("i",{class:b(n(t).e("actions__divider"))},null,2),f(n(O),{onClick:Q},{default:E(()=>[(V(),ie($e(n(S).icon)))]),_:1}),w("i",{class:b(n(t).e("actions__divider"))},null,2),f(n(O),{onClick:s[3]||(s[3]=u=>z("anticlockwise"))},{default:E(()=>[f(n(Me))]),_:1}),f(n(O),{onClick:s[4]||(s[4]=u=>z("clockwise"))},{default:E(()=>[f(n(Xe))]),_:1})],2)],2),W(" CANVAS "),w("div",{class:b(n(t).e("canvas"))},[(V(!0),Z(le,null,Be(a.urlList,(u,g)=>Fe((V(),Z("img",{ref_for:!0,ref:_=>X.value[g]=_,key:u,src:u,style:oe(n(x)),class:b(n(t).e("img")),crossorigin:a.crossorigin,onLoad:me,onError:ve,onMousedown:ge},null,46,la)),[[Ve,g===v.value]])),128))],2),We(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var fa=Pe(ca,[["__file","image-viewer.vue"]]);const ma=He(fa);export{ma as E,ia as i};
