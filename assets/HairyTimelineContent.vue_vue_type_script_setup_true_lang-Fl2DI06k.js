import{d as f,u as c,b as l,c as g,h as a,t as n,f as r,N as h,e as k,w as y,k as C,O as p,g as v,F as $,n as _}from"./app-DoOrpxZc.js";function B(t){var s=t==null?0:t.length;return s?t[s-1]:void 0}const N={class:"mb-1 text-size-3.5 mt-1.5 flex items-center"},Y={class:"mr-2.2 dark:text-gray-500 text-gray-400"},w=f({__name:"HairyTimelineContent",props:{post:{},format:{default:"YYYY-MM-DD"}},setup(t){const s=c();function u(e=[]){s.push({path:`/categories/${p(e).join("/")}`})}return(e,o)=>{var i;const m=_;return l(),g($,null,[a("div",N,[a("div",Y,n(r(h)(e.post.date).format(e.format)),1),(i=e.post.categories)!=null&&i.length?(l(),k(m,{key:0,bordered:"",type:"white",onClick:o[0]||(o[0]=d=>u(e.post.categories))},{default:y(()=>[C(n(e.$t(r(B)(r(p)(e.post.categories))||"",{},{missingWarn:!1})),1)]),_:1})):v("v-if",!0)]),a("a",{class:"cursor-pointer text-size-4",onClick:o[1]||(o[1]=d=>e.$router.push(e.post.path||""))},n(e.post.title),1)],64)}}});export{w as _};
