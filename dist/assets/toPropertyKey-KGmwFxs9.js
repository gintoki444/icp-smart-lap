import{h as v,E as g,c as h,w as d,s as c,T as b,a as m,i as p}from"./emotion-element-f0de968e.browser.esm-xSVEHtue.js";import{r as f}from"./index-Bq0BSIrC.js";var y=function(e,r){var a=arguments;if(r==null||!v.call(r,"css"))return f.createElement.apply(void 0,a);var i=a.length,s=new Array(i);s[0]=g,s[1]=h(e,r);for(var n=2;n<i;n++)s[n]=a[n];return f.createElement.apply(null,s)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(y||(y={}));var A=d(function(t,e){var r=t.styles,a=c([r],void 0,f.useContext(b)),i=f.useRef();return m(function(){var s=e.key+"-global",n=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),l=!1,o=document.querySelector('style[data-emotion="'+s+" "+a.name+'"]');return e.sheet.tags.length&&(n.before=e.sheet.tags[0]),o!==null&&(l=!0,o.setAttribute("data-emotion",s),n.hydrate([o])),i.current=[n,l],function(){n.flush()}},[e]),m(function(){var s=i.current,n=s[0],l=s[1];if(l){s[1]=!1;return}if(a.next!==void 0&&p(e,a.next,!0),n.tags.length){var o=n.tags[n.tags.length-1].nextElementSibling;n.before=o,n.flush()}e.insert("",a,n,!1)},[e,a.name]),null});function S(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return c(e)}function P(){var t=S.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}function j(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(t)}function E(t,e){if(u(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var a=r.call(t,e);if(u(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function C(t){var e=E(t,"string");return u(e)=="symbol"?e:e+""}export{A as G,j as _,u as a,S as c,y as j,P as k,C as t};
