import{n as b}from"./assets/vendor-342e672c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const u={cart:document.querySelector("#task-list"),form:document.querySelector("#task-form"),mainTitle:document.createElement("h3"),clearButton:document.createElement("button")};function i(t){return JSON.parse(localStorage.getItem(t))||[]}function m(t,e){localStorage.setItem(t,JSON.stringify(e))}function h(t,e){const n={id:e,name:t},o=i("cart");o.push(n),m("cart",o)}const{cart:L}=u;function f(t,e){const n=document.createElement("li");setTimeout(()=>{n.classList.toggle("rendered")},250),n.textContent=t;const o=document.createElement("button");console.log(e),o.setAttribute("type","button"),o.setAttribute("data-id",e),o.textContent="Видалити",n.appendChild(o),L.appendChild(n)}function C(t){const n=i("cart").filter(o=>o.id!==t);m("cart",n)}const{cart:p}=u;p.addEventListener("click",E);function E(t){t.target.nodeName==="BUTTON"&&(console.log(t.target.dataset.id),C(t.target.dataset.id),p.removeChild(t.target.parentElement))}const{cart:d,clearButton:s,form:a,mainTitle:g}=u;function y(){if(!i("cart").length){d.innerHTML="";return}d.innerHTML="",i("cart").forEach(e=>f(e.name,e.id))}function v(){localStorage.removeItem("cart"),y()}g.textContent="Мій кошик:";a.before(g);s.classList.add("js-clear-button");s.setAttribute("type","button");s.textContent="Очистити кошик";a.append(s);a.addEventListener("submit",t=>{if(t.preventDefault(),!a.elements.taskName.value.trim()){a.reset();return}const e=b(),n=a.elements.taskName.value.trim();h(n,e),f(n,e),a.reset()});s.addEventListener("click",v);y();
//# sourceMappingURL=commonHelpers.js.map
