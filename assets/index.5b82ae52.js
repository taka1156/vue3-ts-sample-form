import{d as e,c as t,a as o,w as r,F as n,b as s,r as a,o as l,e as u,f as i,g as d}from"./vendor.83af6463.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),n(u)},onload(){o(self[t].moduleMap[a]),n(u)}});document.head.appendChild(u)})),self[t].moduleMap={}}}("/assets/");var m=e({name:"App"});const c=o("img",{src:"/assets/logo.03d6d6da.png",alt:"Vue logo"},null,-1),p={id:"nav"},f=s("Help"),_=s(" | "),h=s("About");let v;m.render=function(e,s,u,i,d,m){const v=a("router-link"),L=a("router-view");return l(),t(n,null,[c,o("div",p,[o(v,{to:"/"},{default:r((()=>[f])),_:1}),_,o(v,{to:"/about"},{default:r((()=>[h])),_:1})]),o(L)],64)};const L={},b=function(e,t){if(!t)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in L)return;L[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":v,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},E=[{path:"/",name:"Home",component:()=>b((()=>__import__("./Home.6e8a1035.js")),["/assets/Home.6e8a1035.js","/assets/Home.e222bba6.css","/assets/vendor.83af6463.js"])},{path:"/about",name:"About",component:()=>b((()=>__import__("./About.35699fd2.js")),["/assets/About.35699fd2.js","/assets/About.255c8fa5.css","/assets/vendor.83af6463.js"])}],w=u({history:i(),routes:E});d(m).use(w).mount("#app");
