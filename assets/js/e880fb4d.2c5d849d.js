"use strict";(self.webpackChunkdurudex_docs=self.webpackChunkdurudex_docs||[]).push([[889],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={sidebar_position:2,title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API."},s="\u2699\ufe0f Test API",l={unversionedId:"api/tests",id:"api/tests",title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API.",source:"@site/docs/dev/api/tests.md",sourceDirName:"api",slug:"/api/tests",permalink:"/dev/api/tests",editUrl:"https://github.com/durudex/durudex-docs/tree/main/docs/dev/api/tests.md",tags:[],version:"current",lastUpdatedBy:"V1def",lastUpdatedAt:1658683856,formattedLastUpdatedAt:"7/24/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd5 Introduction",permalink:"/dev/api/intro"},next:{title:"\ud83d\ude42 User",permalink:"/dev/api/user"}},c={},d=[{value:"Complete solution",id:"complete-solution",level:2},{value:"Start",id:"start",level:2},{value:"Usage",id:"usage",level:2},{value:"Docker container",id:"docker-container",level:2},{value:"Samples of using container:",id:"samples-of-using-container",level:4},{value:"Configuration",id:"configuration",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-test-api"},"\u2699\ufe0f Test API"),(0,o.kt)("p",null,"You can use our test API for development, which gives the full functionality of the main API.\nThe data returned to you by the server is not real. The data will be different each time with the same requests."),(0,o.kt)("h2",{id:"complete-solution"},"Complete solution"),(0,o.kt)("p",null,"If you don't need or don't want to run a test API on your computer. Then you can use our ready-made solution - ",(0,o.kt)("a",{parentName:"p",href:"https://api.dev.durudex.com"},"https://api.dev.durudex.com"),"."),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"To start you need to have Docker on your PC."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone repository.\ngit clone https://github.com/durudex/durudex-test-api.git\n\n# Change directory.\ncd durudex-test-api\n\n# Create environment file.\ntouch .env\n")),(0,o.kt)("p",null,"You need to edit ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file as shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"# Debug mode.\nDEBUG=false\n\n# Config variables:\nCONFIG_PATH=configs/main\n\n# Auth variables:\nJWT_SIGNING_KEY=\n")),(0,o.kt)("p",null,"To start you need to enter this command in the terminal ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),". Now you can open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},"localhost:8000"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We use GraphQL for server interaction. You can use query editors for test queries. If you need a direct link for queries, add ",(0,o.kt)("inlineCode",{parentName:"p"},"/query")," to the main link."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A direct link to the API only accepts POST requests."))),(0,o.kt)("h2",{id:"docker-container"},"Docker container"),(0,o.kt)("p",null,"You can also use a ready-made docker container\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/durudex/durudex-test-api"},"durudex/durudex-test-api"),"."),(0,o.kt)("h4",{id:"samples-of-using-container"},"Samples of using container:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/durudex/durudex-test-api/tree/main/deploy"},"durudex/durudex-test-api"))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To configure the test API, you need to go to ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/")," and create or edit an existing one\nconfiguration file."),(0,o.kt)("p",null,"An example of a configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=main.yml",title:"main.yml"},'http:\n  host: "api.test.durudex.com"\n  port: 8000\n  name: "Durudex Test API"\n\nauth:\n  ttl: 15m # JWT access token ttl\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To change the configuration file, you need to change ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG_PATH=you-path")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."))))}m.isMDXComponent=!0}}]);