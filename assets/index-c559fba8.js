(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const h="/mocking-spongebob/assets/badge-github-94909932.svg",p="/mocking-spongebob/assets/mocking-spongebob-cce133b5.jpg";async function w(o){const t=new Image;return t.src=o,await new Promise((r,n)=>{t.addEventListener("load",()=>r()),t.addEventListener("error",()=>n())}),t}function g(o){return o.trim().split(`
`).map(t=>t.trim())}function x(o){let t=1;return o.map(r=>[...r].map(n=>/^\s$/.test(n)?n:t===0?(t=1,n.toUpperCase()):(t=0,n.toLowerCase())).join(""))}function d(o,t){const r=t.getContext("2d");r.font=`bold ${o}px Dejavu Sans, Arial, sans-serif`,r.strokeStyle="black",r.fillStyle="white",r.lineWidth=o*.075}const b=300,y=50;function S(o,t){const r=t.getContext("2d"),n=o.reduce((s,a)=>a.length>s.length?a:s,"");let e=b;d(e,t);let i=r.measureText(n);for(;i.width>t.width&&e>y;)console.log(e),e=e-10,d(e,t),i=r.measureText(n);return e}function L(o,t,r,n){const e=n.getContext("2d"),i=e.measureText(o),s=n.width/2-i.width/2,a=r*(t+1);e.strokeText(o,s,a),e.fillText(o,s,a)}function P(o,t,r){const n=r.getContext("2d"),e=S(o,r);n.clearRect(0,0,r.width,r.height),n.drawImage(t,0,0),d(e,r),o.forEach((i,s)=>L(i,s,e,r))}function T(o,t){o=(Array.isArray(o)?o.join(`
`):o).trim();const r={};o.length>0&&o!==t.placeholder&&(r.text=o);const n=new URL(window.location.href);n.search=new URLSearchParams(r).toString(),window.history.replaceState({},document.title,n.toString())}function v(){const t=(new URLSearchParams(window.location.search).get("text")||"").trim();return{text:t.length>0?t:void 0}}function f(o,t,r,n){const e=g(o);P(x(e),t,r),T(e,n)}document.querySelector("#app").innerHTML=`
  <canvas id="canvas" title="right click to copy or save"></canvas>
  <textarea name="textarea" id="textarea" placeholder="write something…" tabindex="0" cols="30" rows="10"></textarea>
  <footer>
    <a href="https://github.com/simbo/mocking-spongebob">
      <img src="${h}" alt="simbo/mocking-spongebob" />
    </a>
  </footer>
`;const l=await w(p),u=document.querySelector("#canvas"),c=document.querySelector("#textarea");u.width=l.width;u.height=l.height;c.addEventListener("keyup",()=>f(c.value,l,u,c));const m=v();m.text&&(c.value=g(m.text).join(`
`));f(c.value.length>0?c.value:c.placeholder,l,u,c);
//# sourceMappingURL=index-c559fba8.js.map