"use strict";(self.webpackChunkdurudex_docs=self.webpackChunkdurudex_docs||[]).push([[453],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9421:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:1,title:"\ud83d\udcd5 Introduction",description:"Here is the basic information for working with the Durudex API."},u="\ud83d\udcd5 Introduction",c={unversionedId:"api/intro",id:"api/intro",title:"\ud83d\udcd5 Introduction",description:"Here is the basic information for working with the Durudex API.",source:"@site/docs/dev/api/intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/dev/api/intro",editUrl:"https://github.com/durudex/durudex-docs/tree/main/docs/dev/api/intro.md",tags:[],version:"current",lastUpdatedBy:"V1def",lastUpdatedAt:1658683856,formattedLastUpdatedAt:"7/24/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\udcd5 Introduction",description:"Here is the basic information for working with the Durudex API."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc68\u200d\ud83c\udfed Development",permalink:"/dev/intro"},next:{title:"\u2699\ufe0f Test API",permalink:"/dev/api/tests"}},l={},p=[{value:"Errors",id:"errors",level:2},{value:"Error codes",id:"error-codes",level:2},{value:"Complexity",id:"complexity",level:2}],d={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-introduction"},"\ud83d\udcd5 Introduction"),(0,i.kt)("p",null,"Here is the basic information for working with the Durudex API."),(0,i.kt)("h2",{id:"errors"},"Errors"),(0,i.kt)("p",null,"API requests can return various errors. This is done about incorrect server queries or errors."),(0,i.kt)("p",null,"Example of an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Error Message",\n      "extensions": {\n        "code": "ERROR_CODE"\n      }\n    }\n  ],\n  "data": null\n}\n')),(0,i.kt)("h2",{id:"error-codes"},"Error codes"),(0,i.kt)("p",null,"The following error codes may be returned to you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=codes.json",title:"codes.json"},'{\n  "SERVER_ERROR": "Server error",\n  "INTERNAL_SERVER_ERROR": "Internal server error",\n  "INVALID_ARGUMENT": "Invalid argument",\n  "NOT_FOUND": "Not found",\n  "ALREADY_EXISTS": "Already exists",\n  "COMPLEXITY_LIMIT_EXCEEDED": "Request complexity level exceeded"\n}\n')),(0,i.kt)("h2",{id:"complexity"},"Complexity"),(0,i.kt)("p",null,"When sending heavy requests to the API, the server may return a ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEXITY_LIMIT_EXCEEDED")," error. This means that\nthe query complexity exceeds the specified limit and you need to simplify the query."),(0,i.kt)("p",null,"Example of an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "operation has complexity 1000, which exceeds the limit of 500",\n      "extensions": {\n        "code": "COMPLEXITY_LIMIT_EXCEEDED"\n      }\n    }\n  ],\n  "data": null\n}\n')))}f.isMDXComponent=!0}}]);