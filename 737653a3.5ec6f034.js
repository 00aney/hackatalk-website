(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return r?i.a.createElement(b,c(c({ref:t},u),{},{components:r})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},102:function(e,t,r){"use strict";var n=r(0),i=r(20);t.a=function(){const e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},104:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(102),i=r(106);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(n)return t+r;const a=!r.startsWith(t)?t+r.replace(/^\//,""):r;return o?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},106:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),o=(r(0),r(101)),a=r(104),c={id:"overview",title:"Overview",sidebar_label:"Overview"},s={unversionedId:"client/overview",id:"client/overview",isDocsHomePage:!1,title:"Overview",description:"Diagrams",source:"@site/docs/client/overview.md",permalink:"/docs/client/overview",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Pagination",permalink:"/docs/development/pagination"},next:{title:"Installation",permalink:"/docs/client/installation"}},u=[{value:"Diagrams",id:"diagrams",children:[{value:"Root: index.js",id:"root-indexjs",children:[]},{value:"src/App.tsx",id:"srcapptsx",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"diagrams"},"Diagrams"),Object(o.b)("p",null,"These diagrams are for those who want to understand how this project operates at a glance."),Object(o.b)("h3",{id:"root-indexjs"},"Root: index.js"),Object(o.b)("img",{src:Object(a.a)("diagrams/client_index.drawio.svg"),alt:"hackatalk client index.js diagram"}),Object(o.b)("h3",{id:"srcapptsx"},"src/App.tsx"),Object(o.b)("img",{src:Object(a.a)("diagrams/client_src_app.drawio.svg"),alt:"hackatalk client's root(src/App.tsx) diagram"}))}p.isMDXComponent=!0}}]);