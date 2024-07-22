import{_ as u}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-CTckcwnM.js";import{_ as f}from"./HairyImage.vue_vue_type_script_setup_true_lang-RXfoNeOt.js";import{b as h,e as _,w as e,f as g,a as $,p as i,j as r,g as b,r as o,h as t,k as p}from"./app-DoOrpxZc.js";import"./index-CZM-WbPl.js";const v=t("p",null,"如果使用音量踏板功能，需要连接表情踏板，要么连接到 REMOTE 上，要么连接到 KPA 背后的 Switch/Pedal 开关/踏板插孔上。",-1),P=t("p",null,"按 System 按钮，翻页到对应的踏板页面，这里将踏板连接到了 REMOTE 上的 3 号孔，所以我们翻到 Padal 3 上。",-1),K=t("p",null,"将 Mode 设置为 Pedal Type 1，适用于所有标准的表情踏板，将 Function 设置为 Volume Pedal（音量踏板）现在，可以通过连接的表情踏板控制所有音色的音量。",-1),k=t("p",null,"可以单独为每一个音色的音量踏板设置两个参数，按下 RIG 按钮，然后使用 PAGE 按钮转到音量踏板设置页面。",-1),y=t("ul",null,[t("li",null,[p("Range 参数设置踏板扫动覆盖的跨度，中间没有效果，设置负值时，踏板的作用类似于常规音量的踏板，设置为正值时，就将音量踏板变成了推子踏板。 "),t("ul",null,[t("li",null,"设置为 -5 时，踏板在脚跟的位置没有任何信号。"),t("li",null,"设置为 -2 时，踏板在脚跟的位置还有 60% 的音量，可以利用这个设置切换节奏和 solo 时的音量。"),t("li",null,"设置为 5 时，踏板在脚跟的位置没有任何信号，推满音量可提高 24dB。")])])],-1),S=t("p",null,"可以为每个音色单独设置，但如果喜欢全局设置，请按软按钮 1，将音量踏板锁定，这样就对每个音色生效了。",-1),A=t("p",null,"通过踏板在信号链中不同的位置，可以影响音色的表现。",-1),O=t("ul",null,[t("li",null,[p("Location 参数确定音量踏板在信号链中的位置，可选项：Off、Input、Pre Stack、Post Stack、Output "),t("ul",null,[t("li",null,"设置为 Post Stack，则音量踏板位于 Stack 后，在效果之前（将音量踏板作为主音量踏板，不影响单块A-D、失真、延迟混响）"),t("li",null,"设置为 Output，则位于信号链的末端（不影响单块A-D、失真，而延迟混响会被切断）")])])],-1),w={__name:"volume-boost-pedal",setup(T,{expose:c}){const s=JSON.parse('{"title":"Kemper（KPA）音量&推子踏板","description":"","frontmatter":{"title":"Kemper（KPA）音量&推子踏板","date":"2023-02-14T14:00:00.000Z","categories":["Music","Kemper"],"tags":["Kemper"]},"headers":[],"relativePath":"pages/posts/music/kpa/volume-boost-pedal.md","path":"/home/runner/work/valaxy-theme-hairy/valaxy-theme-hairy/demo/pages/posts/music/kpa/volume-boost-pedal.md","lastUpdated":1721661304000}'),m=$(),n=s.frontmatter||{};return m.meta.frontmatter=Object.assign(m.meta.frontmatter||{},s.frontmatter||{}),i("pageData",s),i("valaxy:frontmatter",n),globalThis.$frontmatter=n,c({frontmatter:{title:"Kemper（KPA）音量&推子踏板",date:"2023-02-14T14:00:00.000Z",categories:["Music","Kemper"],tags:["Kemper"]}}),(a,V)=>{const l=f,d=u;return h(),_(d,{frontmatter:g(n)},{"main-content-md":e(()=>[v,r(l,{src:"https://pic.imgdb.cn/item/63eb3309f144a010072c5429.jpg"}),P,K,k,b(" more "),r(l,{src:"https://pic.imgdb.cn/item/63eb33eaf144a010072e22a0.jpg"}),y,S,r(l,{src:"https://pic.imgdb.cn/item/63eb35bcf144a0100731f35d.jpg"}),A,O]),"main-header":e(()=>[o(a.$slots,"main-header")]),"main-header-after":e(()=>[o(a.$slots,"main-header-after")]),"main-nav":e(()=>[o(a.$slots,"main-nav")]),"main-content":e(()=>[o(a.$slots,"main-content")]),"main-content-after":e(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(a.$slots,"main-nav-after")]),comment:e(()=>[o(a.$slots,"comment")]),footer:e(()=>[o(a.$slots,"footer")]),aside:e(()=>[o(a.$slots,"aside")]),"aside-custom":e(()=>[o(a.$slots,"aside-custom")]),default:e(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{w as default};