(()=>{var e={656:()=>{const e=document.querySelectorAll("#modalContent, #modalNotes, #modalAddNote"),o=document.querySelectorAll("#openModalContent, #openModalNotes, #openModalAddNote"),t=document.querySelector("#modalLoading"),l=document.querySelectorAll(".modal-heading__close");for(let t=0;t<e.length;t++)o[t]&&o[t].addEventListener("click",(()=>{e[t].classList.remove("modal--hidden"),document.body.style.overflow="hidden"}));t&&(t.classList.remove("modal--hidden"),setTimeout((()=>{t.classList.add("modal--hidden")}),3e3));for(let e of l)e.onclick=function(){modalContent.classList.add("modal--hidden"),modalNotes.classList.add("modal--hidden"),modalAddNote.classList.add("modal--hidden"),modalDictionary.classList.add("modal--hidden")};document.querySelector(".burger-menu");const n=document.querySelectorAll(".header-nav__burger-button");let c=!1;for(let e of n){const o=document.querySelector(".burger-menu");e.onclick=function(){c=!c,c?(document.body.style.overflow="hidden",o.classList.add("burger-menu--active")):(document.body.style.overflow="",o.classList.remove("burger-menu--active"))}}const d=document.querySelector(".base-button-hidden");let s=!1;d&&(d.onclick=function(){s=!s,s?document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullScreen&&document.body.webkitRequestFullScreen():document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()});const r=document.querySelectorAll(".description-block-control__add");let a=!1;for(let e of r)e.onclick=function(o){if(a=!a,a){o.preventDefault(),e.style.display="none";const t=document.querySelectorAll(".description-block-control__remove");for(let e of t)e.style.display="flex"}else{o.preventDefault(),e.style.display="block";const t=document.querySelectorAll(".description-block-control__remove");for(let e of t)e.style.display="flex"}};const i=document.getElementById("popupButton"),u=document.getElementById("popup");i&&(i.onclick=function(){window.innerWidth<=480?(console.log("boobs",u),u.classList.add("popup--mobile"),console.log("boobs",u.classList)):"none"===u.style.display||""===u.style.display?u.style.display="block":u.style.display="none"});const m=document.querySelectorAll(".base-button.white");let y="light";m[1]&&m[1].addEventListener("click",(()=>{const e=document.querySelectorAll(".header--blue, .header--blue-nav__button, .reader, .reader-navigation__back, .reader-navigation__book-name, .reader-control, .base-button.white, .base-button, .footer");for(let o of e)o.style.transition="all 600ms";if("light"==y){y="dark",console.log(y),m[1].children[0].src="../src/img/icons/moon.svg";for(let o of e)o.classList.add("dark")}else if("dark"==y){y="sepia",console.log(y),m[1].children[0].src="../src/img/icons/sepia.svg";for(let o of e)o.classList.remove("dark"),o.classList.add("sepia")}else if("sepia"==y){y="light",console.log(y),m[1].children[0].src="../src/img/icons/sun.svg";for(let o of e)o.classList.remove("sepia")}}))}},o={};function t(l){var n=o[l];if(void 0!==n)return n.exports;var c=o[l]={exports:{}};return e[l](c,c.exports,t),c.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";t(656)})()})();