(()=>{"use strict";var n,e,t,r,o,a,i,s,c,d,l,u,p,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  scroll-behavior: smooth;\n}\nbody {\n  background: gray;\n}\n.logo {\n  cursor: pointer;\n}\n.btn {\n  padding: 7px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.buttons {\n  padding-left: 10;\n}\n.signUp {\n  color: blue;\n  border: 2px solid blue;\n  transform-origin: left;\n}\n.signIn {\n  background-color: blue;\n  color: white;\n  border: 2px solid blue;\n  margin-left: 10px;\n}\n\n.signIn:hover {\n  background-color: white;\n  color: blue;\n  transition: background-color 200ms ease-in-out;\n  border: 2px solid blue;\n}\n.signUp:hover {\n  background-color: blue;\n  color: white;\n  border: 2px solid blue;\n  transition: background-color 200ms ease-in-out;\n}\n\n.nav-bar-element {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  background-color: #fff;\n  padding: 0 20vw;\n}\n.menuContainer {\n  display: flex;\n  height: 60px;\n}\n.menu {\n  cursor: pointer;\n  margin: 20px 30px;\n}\n.menu:hover {\n  margin: 0;\n  padding: 20px 30px;\n}\n\n.menu:hover > .drop {\n  transform: translateY(200px);\n}\n\n.drop {\n  position: absolute;\n  left: 0;\n  top: -140px;\n  width: 100vw;\n  transition: transform 200ms ease-in-out;\n  z-index: -1;\n}\n\n.drop .drop-menu {\n  display: flex;\n  background-color: white;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  cursor: auto;\n}\n.drop-menu li {\n  list-style: none;\n  font-weight: normal;\n  display: flex;\n}\n.drop-menu ul li:hover {\n  color: blue;\n  cursor: pointer;\n}\n.drop-menu ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 200px;\n  height: 170px;\n  margin: 20px;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),s=v.n(i),c=v(216),d=v.n(c),l=v(589),u=v.n(l),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const n=document.querySelector("body"),e=document.createElement("div");e.classList.add("nav-bar-element");const t=document.createElement("h1");t.innerText="Logo",t.classList.add("logo");const r=document.createElement("button");r.classList.add("btn","signUp"),r.innerText="Sign Up";const o=document.createElement("button");o.classList.add("btn","signIn"),o.innerText="Sign In";const a=document.createElement("div");a.classList.add("buttons"),a.appendChild(r),a.appendChild(o);const i=document.createElement("div");i.classList.add("menuContainer"),e.appendChild(t);let s=0;for(;s<4;){const n=document.createElement("div");n.classList.add("drop");const e=document.createElement("div");e.classList.add("menu"),e.innerText=`Menu ${s}`;const t=document.createElement("div");t.classList.add("drop-menu");let r=0;for(;r<3;){const n=document.createElement("ul");let e=0;for(;e<4;){const t=document.createElement("li");t.innerText=`Menu ${s}`,n.appendChild(t),e++}t.appendChild(n),r++}n.appendChild(t),e.appendChild(n),i.appendChild(e),s++}e.appendChild(i),e.appendChild(a),n.appendChild(e)}()})();