import{d as v,a as N,b as i,c as g,h as t,k as y,f as e,aM as V,p as B,r as Y,aY as D,i as I,u as R,D as E,x as G,e as m,w as r,j as n,t as _,N as M,F as S,l as W,g as h,aR as L,aS as P,aZ as U,aT as O,aU as Z,aV as q}from"./app-DoOrpxZc.js";import{a as f,r as z,_ as A}from"./HairyImageViewer.vue_vue_type_script_setup_true_lang-BqHSVePy.js";import{E as J}from"./index-DY63yZIR.js";import"./index-CZM-WbPl.js";const K={class:"mb-15"},Q=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),X={class:"flex items-center justify-end mt-2"},aa=t("div",{class:"i-ri-eye-fill mr-2"},null,-1),ea=["data-path"],ta=v({__name:"HairyPostFooter",setup(u){const a=N();return(c,o)=>(i(),g("div",K,[Q,t("div",X,[aa,y(" 阅读次数 "),t("span",{class:"waline-pageview-count mx-2","data-path":e(a).path},null,8,ea),y(" 次 ")])]))}}),sa=v({__name:"HairyImageGlobal",props:{row:{default:"auto"},col:{default:"auto"},gap:{default:10},justify:{default:"space-evenly"},align:{default:"initial"}},setup(u){const a=u;V(()=>({width:f(a.row),height:f(a.col),gap:f(a.gap),justify:a.justify,align:a.align}));function c(o){z(A,{urlList:[o],initialIndex:0})}return B("HairyImageGroup:preview",c),(o,s)=>Y(o.$slots,"default")}}),na={class:"flex gap-2"},oa={key:0,class:"tags flex-center gap-2 mt-2"},da=v({__name:"post",props:{header:{}},setup(u){const a=D(),c=I(()=>a.value.addons["valaxy-addon-waline"]),o=R(),s=E();function w(d){o.push(`/tags/${d}`)}return(d,ra)=>{const $=L,k=P,H=G("router-view"),b=sa,x=ta,C=U,T=O,j=Z,F=q;return i(),m(F,null,{default:r(()=>[n($),n(k,{title:e(s).title},{description:r(()=>{var l;return[t("div",na,[t("span",null,"发表于 "+_(e(M)(e(s).date).format("YYYY-MM-DD")),1),t("span",null,"本文字数 "+_(e(s).wordCount)+" 字",1),t("span",null,"阅读时长 "+_(e(s).readingTime)+" 分钟",1)]),(l=e(s).tags)!=null&&l.length?(i(),g("div",oa,[(i(!0),g(S,null,W(e(s).tags,p=>(i(),m(e(J),{key:p,class:"dark:bg-dark-50 cursor-pointer",onClick:ia=>w(p)},{default:r(()=>[y(_(d.$t(p,{},{missingWarn:!1})),1)]),_:2},1032,["onClick"]))),128))])):h("v-if",!0)]}),_:1},8,["title"]),n(T,null,{default:r(()=>{var l;return[n(b,null,{default:r(()=>[n(H)]),_:1}),(l=c.value.options)!=null&&l.pageview?(i(),m(x,{key:0})):h("v-if",!0)]}),slide:r(()=>[n(C)]),_:1}),n(j)]),_:1})}}});export{da as default};