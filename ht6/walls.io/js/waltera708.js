"use strict";!(function(){var t=function(t){return t.getBoundingClientRect().top},e=function(t){var e=getComputedStyle(t).paddingTop;return parseInt(e,10)||0},n=function(t){t.addEventListener("click",(function(){return t.play()})),Modernizr.on("videoautoplay",(function(e){e&&setTimeout((function(){return t.play()}),7e3)}))},r=document.querySelector(".socialwall_container"),o=document.querySelector(".walter-wrapper"),u=(function(n){return t(n)+e(n)})(r),i=(function(t){return t.getBoundingClientRect().left})(r);o.style.top=u+"px",o.style.paddingRight=i+"px",o.style.paddingBottom=i+"px";var c=document.querySelector(".walter-video");c.readyState>=c.HAVE_ENOUGH_DATA?n(c):c.addEventListener("canplay",(function(){return n(c)}))})();