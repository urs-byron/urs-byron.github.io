import{g as Cn,R as at,j as u,r as Q,i as Ce}from"./index-DU7XbXWh.js";function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(n),!0).forEach(function(a){O(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(e)}function Pn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function En(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function jn(e,t,n){return t&&En(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e,t){return In(e)||Ln(e,t)||Ut(e,t)||Mn()}function de(e){return Tn(e)||_n(e)||Ut(e)||Rn()}function Tn(e){if(Array.isArray(e))return Ue(e)}function In(e){if(Array.isArray(e))return e}function _n(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ln(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ut(e,t){if(e){if(typeof e=="string")return Ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ue(e,t)}}function Ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Rn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ht=function(){},it={},Xt={},Ht=null,Bt={mark:ht,measure:ht};try{typeof window<"u"&&(it=window),typeof document<"u"&&(Xt=document),typeof MutationObserver<"u"&&(Ht=MutationObserver),typeof performance<"u"&&(Bt=performance)}catch{}var zn=it.navigator||{},yt=zn.userAgent,xt=yt===void 0?"":yt,Y=it,y=Xt,kt=Ht,be=Bt;Y.document;var z=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Gt=~xt.indexOf("MSIE")||~xt.indexOf("Trident/"),ge,he,ye,xe,ke,L="___FONT_AWESOME___",Xe=16,qt="fa",Vt="svg-inline--fa",q="data-fa-i2svg",He="data-fa-pseudo-element",Fn="data-fa-pseudo-element-pending",ot="data-prefix",st="data-icon",wt="fontawesome-i2svg",Dn="async",$n=["HTML","HEAD","STYLE","SCRIPT"],Qt=function(){try{return!0}catch{return!1}}(),h="classic",k="sharp",lt=[h,k];function ve(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[h]}})}var se=ve((ge={},O(ge,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(ge,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ge)),le=ve((he={},O(he,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(he,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),he)),fe=ve((ye={},O(ye,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(ye,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ye)),Yn=ve((xe={},O(xe,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(xe,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xe)),Wn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Jt="fa-layers-text",Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xn=ve((ke={},O(ke,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(ke,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ke)),Kt=[1,2,3,4,5,6,7,8,9,10],Hn=Kt.concat([11,12,13,14,15,16,17,18,19,20]),Bn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ce=new Set;Object.keys(le[h]).map(ce.add.bind(ce));Object.keys(le[k]).map(ce.add.bind(ce));var Gn=[].concat(lt,de(ce),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Kt.map(function(e){return"".concat(e,"x")})).concat(Hn.map(function(e){return"w-".concat(e)})),ie=Y.FontAwesomeConfig||{};function qn(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(y&&typeof y.querySelector=="function"){var Qn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qn.forEach(function(e){var t=rt(e,2),n=t[0],a=t[1],r=Vn(qn(n));r!=null&&(ie[a]=r)})}var Zt={styleDefault:"solid",familyDefault:"classic",cssPrefix:qt,replacementClass:Vt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ie.familyPrefix&&(ie.cssPrefix=ie.familyPrefix);var te=m(m({},Zt),ie);te.autoReplaceSvg||(te.observeMutations=!1);var v={};Object.keys(Zt).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){te[e]=n,oe.forEach(function(a){return a(v)})},get:function(){return te[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){te.cssPrefix=t,oe.forEach(function(n){return n(v)})},get:function(){return te.cssPrefix}});Y.FontAwesomeConfig=v;var oe=[];function Jn(e){return oe.push(e),function(){oe.splice(oe.indexOf(e),1)}}var D=Xe,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kn(e){if(!(!e||!z)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=y.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),e}}var Zn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ue(){for(var e=12,t="";e-- >0;)t+=Zn[Math.random()*62|0];return t}function ae(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ft(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function en(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ea(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(en(e[n]),'" ')},"").trim()}function Ie(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ct(e){return e.size!==_.size||e.x!==_.x||e.y!==_.y||e.rotate!==_.rotate||e.flipX||e.flipY}function ta(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function na(e){var t=e.transform,n=e.width,a=n===void 0?Xe:n,r=e.height,i=r===void 0?Xe:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Gt?l+="translate(".concat(t.x/D-a/2,"em, ").concat(t.y/D-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/D,"em), calc(-50% + ").concat(t.y/D,"em)) "):l+="translate(".concat(t.x/D,"em, ").concat(t.y/D,"em) "),l+="scale(".concat(t.size/D*(t.flipX?-1:1),", ").concat(t.size/D*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function tn(){var e=qt,t=Vt,n=v.cssPrefix,a=v.replacementClass,r=aa;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var At=!1;function Fe(){v.autoAddCss&&!At&&(Kn(tn()),At=!0)}var ra={mixout:function(){return{dom:{css:tn,insertCss:Fe}}},hooks:function(){return{beforeDOMElementCreation:function(){Fe()},beforeI2svg:function(){Fe()}}}},R=Y||{};R[L]||(R[L]={});R[L].styles||(R[L].styles={});R[L].hooks||(R[L].hooks={});R[L].shims||(R[L].shims=[]);var I=R[L],nn=[],ia=function e(){y.removeEventListener("DOMContentLoaded",e),Ee=1,nn.map(function(t){return t()})},Ee=!1;z&&(Ee=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Ee||y.addEventListener("DOMContentLoaded",ia));function oa(e){z&&(Ee?setTimeout(e,0):nn.push(e))}function pe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?en(e):"<".concat(t," ").concat(ea(a),">").concat(i.map(pe).join(""),"</").concat(t,">")}function St(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var De=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=n,l,f,c;for(a===void 0?(l=1,c=t[i[0]]):(l=0,c=a);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function sa(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Be(e){var t=sa(e);return t.length===1?t[0].toString(16):null}function la(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Nt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ge(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Nt(t);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(e,Nt(t)):I.styles[e]=m(m({},I.styles[e]||{}),i),e==="fas"&&Ge("fa",t)}var we,Ae,Se,J=I.styles,fa=I.shims,ca=(we={},O(we,h,Object.values(fe[h])),O(we,k,Object.values(fe[k])),we),ut=null,an={},rn={},on={},sn={},ln={},ua=(Ae={},O(Ae,h,Object.keys(se[h])),O(Ae,k,Object.keys(se[k])),Ae);function ma(e){return~Gn.indexOf(e)}function da(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!ma(r)?r:null}var fn=function(){var t=function(i){return De(J,function(o,s,l){return o[l]=De(s,i,{}),o},{})};an=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),rn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ln=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in J||v.autoFetchSvg,a=De(fa,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});on=a.names,sn=a.unicodes,ut=_e(v.styleDefault,{family:v.familyDefault})};Jn(function(e){ut=_e(e.styleDefault,{family:v.familyDefault})});fn();function mt(e,t){return(an[e]||{})[t]}function va(e,t){return(rn[e]||{})[t]}function G(e,t){return(ln[e]||{})[t]}function cn(e){return on[e]||{prefix:null,iconName:null}}function pa(e){var t=sn[e],n=mt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return ut}var dt=function(){return{prefix:null,iconName:null,rest:[]}};function _e(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?h:n,r=se[a][e],i=le[a][e]||le[a][r],o=e in I.styles?e:null;return i||o||null}var Ot=(Se={},O(Se,h,Object.keys(fe[h])),O(Se,k,Object.keys(fe[k])),Se);function Le(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},O(t,h,"".concat(v.cssPrefix,"-").concat(h)),O(t,k,"".concat(v.cssPrefix,"-").concat(k)),t),o=null,s=h;(e.includes(i[h])||e.some(function(f){return Ot[h].includes(f)}))&&(s=h),(e.includes(i[k])||e.some(function(f){return Ot[k].includes(f)}))&&(s=k);var l=e.reduce(function(f,c){var d=da(v.cssPrefix,c);if(J[c]?(c=ca[s].includes(c)?Yn[s][c]:c,o=c,f.prefix=c):ua[s].indexOf(c)>-1?(o=c,f.prefix=_e(c,{family:s})):d?f.iconName=d:c!==v.replacementClass&&c!==i[h]&&c!==i[k]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var p=o==="fa"?cn(f.iconName):{},g=G(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!J.far&&J.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},dt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===k&&(J.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=W()||"fas"),l}var ba=function(){function e(){Pn(this,e),this.definitions={}}return jn(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Ge(s,o[s]);var l=fe[h][s];l&&Ge(l,o[s]),fn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),Ct=[],K={},ee={},ga=Object.keys(ee);function ha(e,t){var n=t.mixoutsTo;return Ct=e,K={},Object.keys(ee).forEach(function(a){ga.indexOf(a)===-1&&delete ee[a]}),Ct.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Pe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(ee)}),n}function qe(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=K[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=K[e]||[];r.forEach(function(i){i.apply(null,n)})}function M(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ee[e]?ee[e].apply(null,t):void 0}function Ve(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||W();if(t)return t=G(n,t)||t,St(un.definitions,n,t)||St(I.styles,n,t)}var un=new ba,ya=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,V("noAuto")},xa={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(V("beforeI2svg",t),M("pseudoElements2svg",t),M("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,oa(function(){wa({autoReplaceSvgRoot:n}),V("watch",t)})}},ka={icon:function(t){if(t===null)return null;if(Pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:G(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=_e(t[0]);return{prefix:a,iconName:G(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Wn))){var r=Le(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:G(i,t)||t}}}},T={noAuto:ya,config:v,dom:xa,parse:ka,library:un,findIconDefinition:Ve,toHtml:pe},wa=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?y:n;(Object.keys(I.styles).length>0||v.autoFetchSvg)&&z&&v.autoReplaceSvg&&T.dom.i2svg({node:a})};function Re(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return pe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var a=y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Aa(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ct(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=Ie(m(m({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Sa(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function vt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,w=a.found?a:n,P=w.width,A=w.height,E=r==="fak",S=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),N={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(A)})},j=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/A*16*.0625,"em")}:{};g&&(N.attributes[q]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||ue())},children:[l]}),delete N.attributes.title);var C=m(m({},N),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:m(m({},j),d.styles)}),X=a.found&&n.found?M("generateAbstractMask",C)||{children:[],attributes:{}}:M("generateAbstractIcon",C)||{children:[],attributes:{}},H=X.children,ze=X.attributes;return C.children=H,C.attributes=ze,s?Sa(C):Aa(C)}function Pt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[q]="");var c=m({},o.styles);ct(r)&&(c.transform=na({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var d=Ie(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Na(e){var t=e.content,n=e.title,a=e.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ie(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $e=I.styles;function Qe(e){var t=e[0],n=e[1],a=e.slice(4),r=rt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Oa={found:!1,width:512,height:512};function Ca(e,t){!Qt&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=W()),new Promise(function(a,r){if(M("missingIconAbstract"),n==="fa"){var i=cn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$e[t]&&$e[t][e]){var o=$e[t][e];return a(Qe(o))}Ca(e,t),a(m(m({},Oa),{},{icon:v.showMissingIcons&&e?M("missingIconAbstract")||{}:{}}))})}var Et=function(){},Ke=v.measurePerformance&&be&&be.mark&&be.measure?be:{mark:Et,measure:Et},re='FA "6.5.1"',Pa=function(t){return Ke.mark("".concat(re," ").concat(t," begins")),function(){return mn(t)}},mn=function(t){Ke.mark("".concat(re," ").concat(t," ends")),Ke.measure("".concat(re," ").concat(t),"".concat(re," ").concat(t," begins"),"".concat(re," ").concat(t," ends"))},pt={begin:Pa,end:mn},Ne=function(){};function jt(e){var t=e.getAttribute?e.getAttribute(q):null;return typeof t=="string"}function Ea(e){var t=e.getAttribute?e.getAttribute(ot):null,n=e.getAttribute?e.getAttribute(st):null;return t&&n}function ja(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Ta(){if(v.autoReplaceSvg===!0)return Oe.replace;var e=Oe[v.autoReplaceSvg];return e||Oe.replace}function Ia(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function _a(e){return y.createElement(e)}function dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Ia:_a:n;if(typeof e=="string")return y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(dn(o,{ceFn:a}))}),r}function La(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Oe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(dn(r),n)}),n.getAttribute(q)===null&&v.keepOriginalSource){var a=y.createComment(La(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~ft(n).indexOf(v.replacementClass))return Oe.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pe(s)}).join(`
`);n.setAttribute(q,""),n.innerHTML=o}};function Tt(e){e()}function vn(e,t){var n=typeof t=="function"?t:Ne;if(e.length===0)n();else{var a=Tt;v.mutateApproach===Dn&&(a=Y.requestAnimationFrame||Tt),a(function(){var r=Ta(),i=pt.begin("mutate");e.map(r),i(),n()})}}var bt=!1;function pn(){bt=!0}function Ze(){bt=!1}var je=null;function It(e){if(kt&&v.observeMutations){var t=e.treeCallback,n=t===void 0?Ne:t,a=e.nodeCallback,r=a===void 0?Ne:a,i=e.pseudoElementsCallback,o=i===void 0?Ne:i,s=e.observeMutationsRoot,l=s===void 0?y:s;je=new kt(function(f){if(!bt){var c=W();ae(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!jt(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&jt(d.target)&&~Bn.indexOf(d.attributeName))if(d.attributeName==="class"&&Ea(d.target)){var p=Le(ft(d.target)),g=p.prefix,w=p.iconName;d.target.setAttribute(ot,g||c),w&&d.target.setAttribute(st,w)}else ja(d.target)&&r(d.target)})}}),z&&je.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ra(){je&&je.disconnect()}function Ma(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function za(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Le(ft(e));return r.prefix||(r.prefix=W()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=va(r.prefix,e.innerText)||mt(r.prefix,Be(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Fa(e){var t=ae(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||ue()):(t["aria-hidden"]="true",t.focusable="false")),t}function Da(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=za(e),a=n.iconName,r=n.prefix,i=n.rest,o=Fa(e),s=qe("parseNodeAttributes",{},e),l=t.styleParser?Ma(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var $a=I.styles;function bn(e){var t=v.autoReplaceSvg==="nest"?_t(e,{styleParser:!1}):_t(e);return~t.extra.classes.indexOf(Jt)?M("generateLayersText",e,t):M("generateSvgReplacementMutation",e,t)}var U=new Set;lt.map(function(e){U.add("fa-".concat(e))});Object.keys(se[h]).map(U.add.bind(U));Object.keys(se[k]).map(U.add.bind(U));U=de(U);function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=y.documentElement.classList,a=function(d){return n.add("".concat(wt,"-").concat(d))},r=function(d){return n.remove("".concat(wt,"-").concat(d))},i=v.autoFetchSvg?U:lt.map(function(c){return"fa-".concat(c)}).concat(Object.keys($a));i.includes("fa")||i.push("fa");var o=[".".concat(Jt,":not([").concat(q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ae(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=pt.begin("onTree"),f=s.reduce(function(c,d){try{var p=bn(d);p&&c.push(p)}catch(g){Qt||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){vn(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bn(e).then(function(n){n&&vn([n],t)})}function Wa(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Ve(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Ve(r||{})),e(a,m(m({},n),{},{mask:r}))}}var Ua=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?_:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,w=g===void 0?null:g,P=n.classes,A=P===void 0?[]:P,E=n.attributes,S=E===void 0?{}:E,N=n.styles,j=N===void 0?{}:N;if(t){var C=t.prefix,X=t.iconName,H=t.icon;return Re(m({type:"icon"},t),function(){return V("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(p?S["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(w||ue()):(S["aria-hidden"]="true",S.focusable="false")),vt({icons:{main:Qe(H),mask:l?Qe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:X,transform:m(m({},_),r),symbol:o,title:p,maskId:c,titleId:w,extra:{attributes:S,styles:j,classes:A}})})}},Xa={mixout:function(){return{icon:Wa(Ua)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lt,n.nodeCallback=Ya,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?y:a,i=n.callback,o=i===void 0?function(){}:i;return Lt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,c=a.mask,d=a.maskId,p=a.extra;return new Promise(function(g,w){Promise.all([Je(r,s),c.iconName?Je(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var A=rt(P,2),E=A[0],S=A[1];g([n,vt({icons:{main:E,mask:S},prefix:s,iconName:r,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ie(s);l.length>0&&(r.style=l);var f;return ct(o)&&(f=M("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Ha={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Re({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(de(i)).join(" ")},children:o}]})}}}},Ba={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,c=a.styles,d=c===void 0?{}:c;return Re({type:"counter",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),Na({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(de(s))}})})}}}},Ga={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?_:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,c=a.attributes,d=c===void 0?{}:c,p=a.styles,g=p===void 0?{}:p;return Re({type:"text",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),Pt({content:n,transform:m(m({},_),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(v.cssPrefix,"-layers-text")].concat(de(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Gt){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pt({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},qa=new RegExp('"',"ug"),Rt=[1105920,1112319];function Va(e){var t=e.replace(qa,""),n=la(t,0),a=n>=Rt[0]&&n<=Rt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Be(r?t[0]:t),isSecondary:a||r}}function Mt(e,t){var n="".concat(Fn).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=ae(e.children),o=i.filter(function(H){return H.getAttribute(He)===t})[0],s=Y.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Un),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?k:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?le[p][l[2].toLowerCase()]:Xn[p][f],w=Va(d),P=w.value,A=w.isSecondary,E=l[0].startsWith("FontAwesome"),S=mt(g,P),N=S;if(E){var j=pa(P);j.iconName&&j.prefix&&(S=j.iconName,g=j.prefix)}if(S&&!A&&(!o||o.getAttribute(ot)!==g||o.getAttribute(st)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var C=Da(),X=C.extra;X.attributes[He]=t,Je(S,g).then(function(H){var ze=vt(m(m({},C),{},{icons:{main:H,mask:dt()},prefix:g,iconName:N,extra:X,watchable:!0})),F=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=ze.map(function(On){return pe(On)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Qa(e){return Promise.all([Mt(e,"::before"),Mt(e,"::after")])}function Ja(e){return e.parentNode!==document.head&&!~$n.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(He)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zt(e){if(z)return new Promise(function(t,n){var a=ae(e.querySelectorAll("*")).filter(Ja).map(Qa),r=pt.begin("searchPseudoElements");pn(),Promise.all(a).then(function(){r(),Ze(),t()}).catch(function(){r(),Ze(),n()})})}var Ka={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?y:a;v.searchPseudoElements&&zt(r)}}},Ft=!1,Za={mixout:function(){return{dom:{unwatch:function(){pn(),Ft=!0}}}},hooks:function(){return{bootstrap:function(){It(qe("mutationObserverCallbacks",{}))},noAuto:function(){Ra()},watch:function(n){var a=n.observeMutationsRoot;Ft?Ze():It(qe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Dt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},er={mixout:function(){return{parse:{transform:function(n){return Dt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Dt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),g.path)}]}]}}}},Ye={x:0,y:0,width:"100%",height:"100%"};function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function tr(e){return e.tag==="g"?e.children:[e]}var nr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Le(r.split(" ").map(function(o){return o.trim()})):dt();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=ta({transform:l,containerWidth:d,iconWidth:f}),w={tag:"rect",attributes:m(m({},Ye),{},{fill:"white"})},P=c.children?{children:c.children.map($t)}:{},A={tag:"g",attributes:m({},g.inner),children:[$t(m({tag:c.tag,attributes:m(m({},c.attributes),g.path)},P))]},E={tag:"g",attributes:m({},g.outer),children:[A]},S="mask-".concat(s||ue()),N="clip-".concat(s||ue()),j={tag:"mask",attributes:m(m({},Ye),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,E]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:tr(p)},j]};return a.push(C,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(S,")")},Ye)}),{children:a,attributes:r}}}},ar={provides:function(t){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},rr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},ir=[ra,Xa,Ha,Ba,Ga,Ka,Za,er,nr,ar,rr];ha(ir,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var et=T.parse;T.findIconDefinition;T.toHtml;var or=T.icon;T.layer;T.text;T.counter;var gn={exports:{}},sr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lr=sr,fr=lr;function hn(){}function yn(){}yn.resetWarningCache=hn;var cr=function(){function e(a,r,i,o,s,l){if(l!==fr){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:yn,resetWarningCache:hn};return n.PropTypes=n,n};gn.exports=cr();var ur=gn.exports;const b=Cn(ur);function Yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yt(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Te(e){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function dr(e,t){if(e==null)return{};var n=mr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function tt(e){return vr(e)||pr(e)||br(e)||gr()}function vr(e){if(Array.isArray(e))return nt(e)}function pr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function br(e,t){if(e){if(typeof e=="string")return nt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(e,t)}}function nt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function gr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,g=e.inverse,w=e.border,P=e.listItem,A=e.flip,E=e.size,S=e.rotation,N=e.pull,j=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":w,"fa-li":P,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},Z(t,"fa-".concat(E),typeof E<"u"&&E!==null),Z(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),Z(t,"fa-pull-".concat(N),typeof N<"u"&&N!==null),Z(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map(function(C){return j[C]?C:null}).filter(function(C){return C})}function yr(e){return e=e-0,e===e}function xn(e){return yr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var xr=["style"];function kr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function wr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=xn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[kr(r)]=i:t[r]=i,t},{})}function kn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return kn(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=wr(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[xn(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=dr(n,xr);return r.attrs.style=$($({},r.attrs.style),o),e.apply(void 0,[t.tag,$($({},r.attrs),s)].concat(tt(a)))}var wn=!1;try{wn=!0}catch{}function Ar(){if(!wn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wt(e){if(e&&Te(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(et.icon)return et.icon(e);if(e===null)return null;if(e&&Te(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function We(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}var ne=at.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=Wt(n),c=We("classes",[].concat(tt(hr(e)),tt(i.split(" ")))),d=We("transform",typeof e.transform=="string"?et.transform(e.transform):e.transform),p=We("mask",Wt(a)),g=or(f,$($($($({},c),d),p),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!g)return Ar("Could not find icon",f),null;var w=g.abstract,P={ref:t};return Object.keys(e).forEach(function(A){ne.defaultProps.hasOwnProperty(A)||(P[A]=e[A])}),Sr(w[0],P)});ne.displayName="FontAwesomeIcon";ne.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};ne.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Sr=kn.bind(null,at.createElement),Nr={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Or={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Cr={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Pr={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};function Me({head:e,className:t,children:n}){return u.jsxs("section",{className:`${t} tile-group`,children:[u.jsx("h3",{children:e}),u.jsx("div",{className:"tiles",children:n})]})}const An=(e,t,n)=>()=>{var i,o;const a=(i=e.current)==null?void 0:i.querySelector(`.${t}`),r=(o=e.current)==null?void 0:o.querySelector(`.${n}`);a!=null?(a==null||a.classList.add("move-up"),setTimeout(()=>{var s,l;a==null||a.classList.remove(t),((s=a==null?void 0:a.previousElementSibling)==null?void 0:s.previousElementSibling)!=null?(l=a==null?void 0:a.previousElementSibling)==null||l.classList.add(t):a==null||a.classList.add(n)},1e3)):r!=null&&(r==null||r.classList.add("move-down"),setTimeout(()=>{var s,l;r==null||r.classList.remove(n),(r==null?void 0:r.nextElementSibling)!=null?(s=r==null?void 0:r.nextElementSibling)==null||s.classList.add(n):(r==null||r.classList.add(t),(l=e.current)==null||l.childNodes.forEach(f=>f.classList.remove("move-up","move-down")))},1e3))};function Sn({type:e,imageSet:t,color:n="white",className:a,bgSize:r="cover"}){const i=Q.useRef(null),o="top";return t.length>1&&setInterval(An(i,o,"bottom"),15e3),u.jsx("div",{className:`image-set-${e} ${a}`,style:{color:n},children:u.jsx("ul",{ref:i,children:t.map(({id:l,url:f,description:c},d)=>u.jsx("li",{className:`${d===t.length-1?o:""}`,title:c,style:{backgroundImage:`url(${f})`,backgroundSize:r},children:u.jsx("p",{children:c})},l))})})}function x({type:e,icon:t,label:n,color:a="white",bgColor:r,className:i,href:o}){return u.jsxs("div",{className:`icon-rect-${e} ${i}`,style:{backgroundColor:r,color:a},title:n,children:[o==null?u.jsx("figure",{children:Ce[t]}):u.jsx("a",{"aria-label":`${t} Link`,href:o,target:"_blank",rel:"noreferrer",children:Ce[t]}),e!=="badge"&&u.jsx("figcaption",{children:n})]})}function me({type:e,icon:t,info:n,bgColor:a,color:r="white",className:i}){return u.jsxs("div",{className:`information-${e} ${i}`,style:{backgroundColor:a,color:r},children:[u.jsx("section",{children:n.map(o=>at.createElement(o[1],{key:o[0]},o[2]))}),Ce[t]]})}function Er(){return u.jsxs(Me,{head:"Contact Me",className:"about-me",children:[u.jsx(Sn,{type:"wide",imageSet:[{id:"2sdsd",url:"https://static.wikia.nocookie.net/386fb1d4-61e3-4be6-a6a2-05ba11177b76",description:"Pichu"},{id:"sddd",url:"https://static.wikia.nocookie.net/f42e409a-ea17-44cb-ad84-816b51e96334",description:"Bulbasaur"},{id:"etrg",url:"https://static.wikia.nocookie.net/c7c39e03-6feb-4c66-bba4-09783b7e5bc3",description:"Pikachu"}],className:"about-me-image-set"}),u.jsx(me,{type:"wide",icon:"FullStack",bgColor:"#00ADD0",info:[["mark-0","mark","Full Stack Developer"],["br-0","br",null],["p-1","p","Typescript | React.js | Node.js |  Jest"],["p-2","p","Amazon Web Services"]],className:"about-me-info"}),u.jsx(x,{type:"badge",icon:"Linkedin",label:"Linkedin",bgColor:"#0077b5",className:"about-me-linkedin",href:"https://www.linkedin.com/in/urs-byron/"}),u.jsx(x,{type:"badge",icon:"Google",label:"Google",bgColor:"#34a853",className:"about-me-google",href:"https://mail.google.com/mail/u/0/?to=bmlursua@gmail.com&su=Career Opportunity&fs=1&tf=cm"}),u.jsx(x,{type:"badge",icon:"Viber",label:"Viber",bgColor:"#7360f2",className:"about-me-viber",href:"viber://chat?number=09194982789"}),u.jsx(x,{type:"badge",icon:"Mail",label:"Outlook",bgColor:"#50d9ff",className:"about-me-mail",href:"mailto:bmlursua@gmail.com"})]})}function Nn({type:e,newsSet:t,bgColor:n,color:a="white",className:r}){const i=Q.useRef(null),o="top";return t.length>1&&setInterval(An(i,o,"bottom"),15e3),u.jsx("div",{className:`news-set-${e} ${r}`,style:{color:a},children:u.jsx("ul",{ref:i,children:t.map(({id:l,src:f,figureImgSrc:c,icon:d,title:p,description:g},w)=>u.jsx("li",{className:`${w===t.length-1?o:""}`,children:u.jsx("article",{style:{backgroundImage:`url(${c})`},children:u.jsxs("header",{style:{backgroundColor:n},children:[u.jsx("span",{children:Ce[d]}),u.jsxs("a",{href:f,target:"_blank",rel:"noreferrer",children:[u.jsx("em",{children:p}),u.jsx("br",{}),u.jsx("p",{children:g})]})]})})},l))})})}function jr(){return u.jsxs(Me,{head:"Experience",className:"exp",children:[u.jsx(me,{type:"wide",icon:"Acquiro",bgColor:"black",className:"exp-info-2023",info:[["1","mark","Backend Developer"],["2","br",null],["3","p","2023 - NOW @ Acquiro Sol. & Tech"]]}),u.jsx(me,{type:"wide",icon:"Acquiro",bgColor:"#8545fc",info:[["be-2023-1","p","Developed performant Node.js servers using clean and Domain Driven Design."],["br-0","br",null],["be-2023-2","p","Designed robust data models and secure querying and storing operations for reliant database use with PostgreSQL and DynamoDB/ElectroDB."],["br-1","br",null],["be-2023-3","p","Created dynamic and reusable React, Redux, and Sass client-side components."],["br-2","br",null],["be-2023-4","p","Led client-side API handling for various front-end applications with Tanstack Query."],["br-3","br",null],["be-2023-5","p","Mentored new software developers, providing guidance on best practices, code reviews, and project workflows, resulting in faster and improved team productivity."]],className:"exp-info"}),u.jsx(Nn,{type:"wide",newsSet:[{id:"Asticom Strive Awards",src:"https://www.facebook.com/share/v/15gGbiraw2/",figureImgSrc:"https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/448671802_10226024441018963_6491267303883679482_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdkvgQTKl3NaoA5J5yk6xs84QWeHLQFQjzhBZ4ctAVCH9PyHfyQQeFt9nSSnewAuqqrTtNBueOjDafWt6H3T-f&_nc_ohc=nWCtWGWginYQ7kNvgF8LYAL&_nc_oc=AdiDe1kLCxcJ9g7ON6rYyMmz37WDMiUPlNjGpGZHcY1uePXqXXYXcNp5Hq7os0qj_u8&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=AcbioTCEpOr6ycgrZYyyUjq&oh=00_AYCQ4j90BDkone1scmJSw69y20JIYA3fFlr12z4ubK2_nw&oe=67A632A0",icon:"Facebook",title:"Asticom Strive Awards 2024",description:"NXT as Innovation of the Year"}],bgColor:"#1877f2",className:"exp-news-set"})]})}function Tr(){return u.jsxs(Me,{head:"Projects",className:"projects",children:[u.jsx(x,{type:"full",icon:"NXT",label:"NXT",bgColor:"#013763",className:"tech-stack-nxt",href:"https://www.nxt.com.ph/"}),u.jsx(Nn,{type:"wide",newsSet:[{id:"NXT-1",src:"https://www.nxt.com.ph/pricing",figureImgSrc:"https://i.ibb.co/JjMcL7qd/NXT3.jpg",icon:"NXT",title:"NXT Live",description:"Subscription Pricing"},{id:"NXT-2",src:"https://www.nxt.com.ph/",figureImgSrc:"https://i.ibb.co/JRZ5BC42/NXT2.jpg",icon:"NXT",title:"NXT Live",description:"Job Search"},{id:"NXT-3",src:"https://www.nxt.com.ph/faq",figureImgSrc:"https://i.ibb.co/zWTvm266/NXT1.jpg",icon:"NXT",title:"NXT Live",description:"FAQs"}],bgColor:"#013763",className:"project-nxt-news-set"}),u.jsx(me,{type:"wide",icon:"NXT",bgColor:"#9E1716",info:[["be-2023-1","p","Designed a user management feature for handling concurrent applicant operations."],["br-0","br",null],["be-2023-2","p","Developed a subscription system for efficiently servicing 100+ subscriptors, handling and recording orders, transactions, plans, and expirations."],["br-1","br",null],["be-2023-3","p","Led the development of secure proxy servers for third party vendors resources"]],className:"project-nxt-info"}),u.jsx(x,{type:"badge",icon:"AWS",label:"AWS",bgColor:"#252f3e",className:"project-nxt-aws"}),u.jsx(x,{type:"badge",icon:"React",label:"React.js",bgColor:"#61dafb",className:"project-nxt-react"}),u.jsx(x,{type:"badge",icon:"Node",label:"Node.js",bgColor:"#83cd29",className:"project-nxt-node"}),u.jsx(x,{type:"badge",icon:"PostgresSQL",label:"PostgresSQL",bgColor:"#336791",className:"project-nxt-postgresql"}),u.jsx(x,{type:"full",icon:"HCP",label:"HCP",bgColor:"#3A0CA3",className:"project-hcp-iconrect"}),u.jsx(Sn,{type:"wide",imageSet:[{id:"HCP1",url:"https://i.ibb.co/Q7SSWYM4/LoginP.jpg",description:"Login Page"}],bgSize:"cover",className:"project-hcp-image-set"}),u.jsx(me,{type:"wide",icon:"HCP",bgColor:"#B81B6C",info:[["be-2023-1","p","Planned and implemented user authentication and authorization using AWS Cognito and Google OAuth APIs, along with related security protocols."]],className:"project-hcp-info"})]})}function Ir(){return u.jsxs(Me,{head:"Tech Stack",className:"tech-stack",children:[u.jsx(x,{type:"full",icon:"Node",label:"Node.js",bgColor:"#83cd29",className:"tech-stack-node"}),u.jsx(x,{type:"badge",icon:"Express",label:"Express.js",bgColor:"black",className:"tech-stack-express"}),u.jsx(x,{type:"badge",icon:"Jest",label:"Jest",bgColor:"#99425b",className:"tech-stack-jest"}),u.jsx(x,{type:"badge",icon:"PostgresSQL",label:"PostgresSQL",bgColor:"#336791",className:"tech-stack-pg"}),u.jsx(x,{type:"badge",icon:"Swagger",label:"Swagger",bgColor:"#85ea2d",className:"tech-stack-swagger"}),u.jsx(x,{type:"full",icon:"React",label:"React.js",bgColor:"#61dafb",className:"tech-stack-react"}),u.jsx(x,{type:"badge",icon:"Sass",label:"Sass",bgColor:"#cb6699",className:"tech-stack-sass"}),u.jsx(x,{type:"badge",icon:"Redux",label:"Redux",bgColor:"#764abc",className:"tech-stack-redux"}),u.jsx(x,{type:"badge",icon:"ReactQuery",label:"ReactQuery",bgColor:"#764abc",className:"tech-stack-react-query"}),u.jsx(x,{type:"badge",icon:"Vite",label:"Vite",bgColor:"#764abc",className:"tech-stack-vite"}),u.jsx(x,{type:"full",icon:"AWS",label:"AWS",bgColor:"#252f3e",className:"tech-stack-aws"}),u.jsx(x,{type:"full",icon:"TypeScript",label:"TypeScript",bgColor:"#007acc",className:"tech-stack-typescript"})]})}function Lr(){const[e,t]=Q.useState(!1),[n,a]=Q.useState(!1),r=Q.useRef(null),i=Q.useRef(null);function o(){const{scrollLeft:l}=r.current;l===0?t(!1):l+r.current.getBoundingClientRect().width>=i.current.getBoundingClientRect().width&&t(!0)}function s(){const{scrollTop:l}=r.current;l===0?a(!1):l+r.current.getBoundingClientRect().height>=i.current.getBoundingClientRect().height&&a(!0)}return u.jsxs(u.Fragment,{children:[u.jsx("div",{ref:r,className:"tile-groups-container",onScroll:()=>{o(),s()},children:u.jsxs("div",{ref:i,className:"tile-groups",children:[u.jsx(Er,{}),u.jsx(Ir,{}),u.jsx(jr,{}),u.jsx(Tr,{})]})}),u.jsx("button",{"aria-label":"Container X Mover button",className:"tile-groups-container-mover mover-x",type:"button",onClick:()=>{r.current.scrollLeft+=e?-100:100,o()},title:`Move ${e?"left":"right"}`,children:u.jsx(ne,{icon:e?Or:Nr})}),u.jsx("button",{"aria-label":"Container Mover button",className:"tile-groups-container-mover mover-y",type:"button",onClick:()=>{r.current.scrollTop+=n?-100:100,s()},title:`Move ${n?"up":"down"}`,children:u.jsx(ne,{icon:n?Pr:Cr})})]})}export{Lr as default};
