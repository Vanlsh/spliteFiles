import{n as p}from"./assets/vendor-342e672c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const g={cart:document.querySelector("#task-list"),form:document.querySelector("#task-form"),mainTitle:document.createElement("h3"),clearButton:document.createElement("button")};function s(r){return JSON.parse(localStorage.getItem(r))||[]}function y(r,t){localStorage.setItem(r,JSON.stringify(t))}function L(r){const t={id:p(),name:r},o=s("cart");o.push(t),y("cart",o)}const{cart:l,clearButton:i,form:a,mainTitle:d}=g;function b(r){localStorage.setItem("cart",JSON.stringify(s("cart").filter(t=>t.id!==r)))}function m(r){const t=document.createElement("li");setTimeout(()=>{t.classList.toggle("rendered")},250),t.textContent=r;const o=document.createElement("button");o.setAttribute("type","button"),o.setAttribute("data-id",`${s("cart").findLast(c=>c.name===r).id}`),o.textContent="Видалити",o.addEventListener("click",c=>{t.classList.toggle("rendered"),setTimeout(()=>{b(c.target.dataset.id),l.removeChild(c.target.parentElement)},160)}),t.appendChild(o),l.appendChild(t)}function f(){if(!s("cart").length){l.innerHTML="";return}l.innerHTML="",s("cart").forEach(t=>m(t.name))}function h(){localStorage.removeItem("cart"),f()}d.textContent="Мій кошик:";a.before(d);i.classList.add("js-clear-button");i.setAttribute("type","button");i.textContent="Очистити кошик";a.append(i);a.addEventListener("submit",r=>{if(r.preventDefault(),!a.elements.taskName.value.trim()){a.reset();return}const t=a.elements.taskName.value.trim();L(t),m(t),a.reset()});i.addEventListener("click",h);f();
//# sourceMappingURL=commonHelpers.js.map
