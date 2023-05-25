"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}require("react-icons/im");var o,a,i=r(e),s=n(t);function c(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e,t){if(!1===e||null==e)throw new Error(t)}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function d(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function m(e,t,n,r){let o;void 0===r&&(r=!1),"string"==typeof e?o=f(e):(o=u({},e),l(!o.pathname||!o.pathname.includes("?"),h("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),h("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),h("#","search","hash",o)));let a,i=""===e||""===o.pathname,s=i?"/":o.pathname;if(r||null==s)a=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?f(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:g(r),hash:y(o)}}(o,a),p=s&&"/"!==s&&s.endsWith("/"),d=(i||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!p&&!d||(c.pathname+="/"),c}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(o||(o={})),function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(a||(a={}));const v=e=>e.join("/").replace(/\/\/+/g,"/"),g=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",y=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const b="function"==typeof Object.is?Object.is:
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:N,useEffect:w,useLayoutEffect:E,useDebugValue:O}=i;let R=!1,D=!1;function S(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!b(n,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in i&&i.useSyncExternalStore;const x=i.createContext(null);"production"!==process.env.NODE_ENV&&(x.displayName="DataRouter");const C=i.createContext(null);"production"!==process.env.NODE_ENV&&(C.displayName="DataRouterState");const L=i.createContext(null);"production"!==process.env.NODE_ENV&&(L.displayName="Await");const j=i.createContext(null);"production"!==process.env.NODE_ENV&&(j.displayName="Navigation");const _=i.createContext(null);"production"!==process.env.NODE_ENV&&(_.displayName="Location");const A=i.createContext({outlet:null,matches:[]});"production"!==process.env.NODE_ENV&&(A.displayName="Route");const U=i.createContext(null);function P(){return null!=i.useContext(_)}function V(){return P()||("production"!==process.env.NODE_ENV?l(!1,"useLocation() may be used only in the context of a <Router> component."):l(!1)),i.useContext(_).location}function k(){P()||("production"!==process.env.NODE_ENV?l(!1,"useNavigate() may be used only in the context of a <Router> component."):l(!1));let{basename:e,navigator:t}=i.useContext(j),{matches:n}=i.useContext(A),{pathname:r}=V(),o=JSON.stringify(d(n).map((e=>e.pathnameBase))),a=i.useRef(!1);return i.useEffect((()=>{a.current=!0})),i.useCallback((function(n,i){if(void 0===i&&(i={}),"production"!==process.env.NODE_ENV&&function(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}(a.current,"You should call navigate() in a React.useEffect(), not when your component is first rendered."),!a.current)return;if("number"==typeof n)return void t.go(n);let s=m(n,JSON.parse(o),r,"path"===i.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:v([e,s.pathname])),(i.replace?t.replace:t.push)(s,i.state,i)}),[e,t,o,r])}function W(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=i.useContext(A),{pathname:o}=V(),a=JSON.stringify(d(r).map((e=>e.pathnameBase)));return i.useMemo((()=>m(e,JSON.parse(a),o,"path"===n)),[e,a,o,n])}var F,T,B;
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}"production"!==process.env.NODE_ENV&&(U.displayName="RouteError"),function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(F||(F={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(T||(T={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(B||(B={})),new Promise((()=>{}));const K="get",M="application/x-www-form-urlencoded";function J(e){return null!=e&&"string"==typeof e.tagName}function q(e,t,n){let r,o,a,i;if(J(s=e)&&"form"===s.tagName.toLowerCase()){let s=n.submissionTrigger;r=n.method||e.getAttribute("method")||K,o=n.action||e.getAttribute("action")||t,a=n.encType||e.getAttribute("enctype")||M,i=new FormData(e),s&&s.name&&i.append(s.name,s.value)}else if(function(e){return J(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return J(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let s=e.form;if(null==s)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');r=n.method||e.getAttribute("formmethod")||s.getAttribute("method")||K,o=n.action||e.getAttribute("formaction")||s.getAttribute("action")||t,a=n.encType||e.getAttribute("formenctype")||s.getAttribute("enctype")||M,i=new FormData(s),e.name&&i.append(e.name,e.value)}else{if(J(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(r=n.method||K,o=n.action||t,a=n.encType||M,e instanceof FormData)i=e;else if(i=new FormData,e instanceof URLSearchParams)for(let[t,n]of e)i.append(t,n);else if(null!=e)for(let t of Object.keys(e))i.append(t,e[t])}var s;let{protocol:c,host:u}=window.location;return{url:new URL(o,c+"//"+u),method:r.toLowerCase(),encType:a,formData:i}}const H=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Y=["aria-current","caseSensitive","className","end","style","to","children"],$=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];process.env.NODE_ENV;const G="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Q=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=i.forwardRef((function(e,t){let n,{onClick:r,relative:o,reloadDocument:a,replace:s,state:c,target:u,to:f,preventScrollReset:h}=e,d=z(e,H),{basename:m}=i.useContext(j),g=!1;if("string"==typeof f&&Q.test(f)&&(n=f,G)){let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}(t.pathname,m);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:g=!0}let y=function(e,t){let{relative:n}=void 0===t?{}:t;P()||("production"!==process.env.NODE_ENV?l(!1,"useHref() may be used only in the context of a <Router> component."):l(!1));let{basename:r,navigator:o}=i.useContext(j),{hash:a,pathname:s,search:c}=W(e,{relative:n}),u=s;return"/"!==r&&(u="/"===s?r:v([r,s])),o.createHref({pathname:u,search:c,hash:a})}(f,{relative:o}),b=function(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:s}=void 0===t?{}:t,c=k(),u=V(),l=W(e,{relative:s});return i.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:p(u)===p(l);c(e,{replace:n,state:o,preventScrollReset:a,relative:s})}}),[u,c,l,r,o,n,e,a,s])}(f,{replace:s,state:c,target:u,preventScrollReset:h,relative:o});return i.createElement("a",I({},d,{href:n||y,onClick:g||a?r:function(e){r&&r(e),e.defaultPrevented||b(e)},ref:t,target:u}))}));"production"!==process.env.NODE_ENV&&(X.displayName="Link");const Z=i.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:o="",end:a=!1,style:s,to:c,children:u}=e,l=z(e,Y),p=W(c,{relative:l.relative}),f=V(),h=i.useContext(C),{navigator:d}=i.useContext(j),m=d.encodeLocation?d.encodeLocation(p).pathname:p.pathname,v=f.pathname,g=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(v=v.toLowerCase(),g=g?g.toLowerCase():null,m=m.toLowerCase());let y,b=v===m||!a&&v.startsWith(m)&&"/"===v.charAt(m.length),N=null!=g&&(g===m||!a&&g.startsWith(m)&&"/"===g.charAt(m.length)),w=b?n:void 0;y="function"==typeof o?o({isActive:b,isPending:N}):[o,b?"active":null,N?"pending":null].filter(Boolean).join(" ");let E="function"==typeof s?s({isActive:b,isPending:N}):s;return i.createElement(X,I({},l,{"aria-current":w,className:y,ref:t,style:E,to:c}),"function"==typeof u?u({isActive:b,isPending:N}):u)}));"production"!==process.env.NODE_ENV&&(Z.displayName="NavLink");const ee=i.forwardRef(((e,t)=>i.createElement(te,I({},e,{ref:t}))));"production"!==process.env.NODE_ENV&&(ee.displayName="Form");const te=i.forwardRef(((e,t)=>{let{reloadDocument:n,replace:r,method:o=K,action:a,onSubmit:s,fetcherKey:c,routeId:u,relative:p,preventScrollReset:f}=e,h=z(e,$),d=function(e,t){let{router:n}=function(e){let t=i.useContext(x);return t||("production"!==process.env.NODE_ENV?l(!1,function(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}(e)):l(!1)),t}(ne.UseSubmitImpl),r=ae();return i.useCallback((function(o,a){if(void 0===a&&(a={}),"undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:i,encType:s,formData:c,url:u}=q(o,r,a),p=u.pathname+u.search,f={replace:a.replace,preventScrollReset:a.preventScrollReset,formData:c,formMethod:i,formEncType:s};e?(null==t&&("production"!==process.env.NODE_ENV?l(!1,"No routeId available for useFetcher()"):l(!1)),n.fetch(e,t,p,f)):n.navigate(p,f)}),[r,n,e,t])}(c,u),m="get"===o.toLowerCase()?"get":"post",v=ae(a,{relative:p});return i.createElement("form",I({ref:t,method:m,action:v,onSubmit:n?s:e=>{if(s&&s(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=(null==t?void 0:t.getAttribute("formmethod"))||o;d(t||e.currentTarget,{method:n,replace:r,relative:p,preventScrollReset:f})}},h))}));var ne,re,oe;function ae(e,t){let{relative:n}=void 0===t?{}:t,{basename:r}=i.useContext(j),o=i.useContext(A);o||("production"!==process.env.NODE_ENV?l(!1,"useFormAction must be used inside a RouteContext"):l(!1));let[a]=o.matches.slice(-1),s=I({},W(e||".",{relative:n})),c=V();if(null==e&&(s.search=c.search,s.hash=c.hash,a.route.index)){let e=new URLSearchParams(s.search);e.delete("index"),s.search=e.toString()?"?"+e.toString():""}return e&&"."!==e||!a.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(s.pathname="/"===s.pathname?r:v([r,s.pathname])),p(s)}"production"!==process.env.NODE_ENV&&(te.displayName="FormImpl"),process.env.NODE_ENV,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(ne||(ne={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(re||(re={})),s.default(X)(oe||(oe=c(["\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  span {\n    color: ",";\n    text-transform: uppercase;\n  }\n"],["\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  span {\n    color: ",";\n    text-transform: uppercase;\n  }\n"])),(function(e){return e.theme.fontSizes.large}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.accent}));var ie,se=s.default.div(ie||(ie=c(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n \n  a {\n    color: ",";\n    transition: color 0.3s;\n    &:hover {\n      color: ",";\n    }\n  }  \n"],["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ",";\n \n  a {\n    color: ",";\n    transition: color 0.3s;\n    &:hover {\n      color: ",";\n    }\n  }  \n"])),(function(e){return e.theme.spacing(5)}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.accent}));exports.SocialLinksWrapper=se;
//# sourceMappingURL=index.js.map
