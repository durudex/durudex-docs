"use strict";(self.webpackChunkdurudex_docs=self.webpackChunkdurudex_docs||[]).push([[889],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:2,title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API."},l="\u2699\ufe0f Test API",s={unversionedId:"api/tests",id:"api/tests",title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API.",source:"@site/docs/dev/api/tests.md",sourceDirName:"api",slug:"/api/tests",permalink:"/dev/api/tests",editUrl:"https://github.com/durudex/durudex-docs/tree/main/docs/dev/api/tests.md",tags:[],version:"current",lastUpdatedBy:"V1def",lastUpdatedAt:1654201430,formattedLastUpdatedAt:"6/2/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd5 Introduction",permalink:"/dev/api/intro"},next:{title:"\ud83d\ude42 User",permalink:"/dev/api/user"}},c={},p=[{value:"Complete solution",id:"complete-solution",level:2},{value:"Start",id:"start",level:2},{value:"Usage",id:"usage",level:2},{value:"Docker container",id:"docker-container",level:2},{value:"Samples of using container:",id:"samples-of-using-container",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-test-api"},"\u2699\ufe0f Test API"),(0,a.kt)("p",null,"You can use our test API for development, which gives the full functionality of the main API.\nThe data returned to you by the server is not real. The data will be different each time with the same requests."),(0,a.kt)("h2",{id:"complete-solution"},"Complete solution"),(0,a.kt)("p",null,"If you don't need or don't want to run a test API on your computer. Then you can use our ready-made solution - ",(0,a.kt)("a",{parentName:"p",href:"https://api.dev.durudex.com"},"https://api.dev.durudex.com"),"."),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"To start you need to have Docker on your PC."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone repository.\ngit clone https://github.com/durudex/durudex-test-api.git\n\n# Change directory.\ncd durudex-test-api\n\n# Create environment file.\ntouch .env\n")),(0,a.kt)("p",null,"You need to edit ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file as shown here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env"},"API_PORT=8000\n")),(0,a.kt)("p",null,"To start you need to enter this command in the terminal ",(0,a.kt)("inlineCode",{parentName:"p"},"make"),". Now you can open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000"},"localhost:8000"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We use GraphQL for server interaction. You can use query editors for test queries. If you need a direct link for queries, add ",(0,a.kt)("inlineCode",{parentName:"p"},"/query")," to the main link."),(0,a.kt)("p",null,"Request to create an account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  signUp(input: {\n    username: "example",\n    email: "example@durudex.com"\n    password: "qwerty",\n    code: "111111"\n  })\n}\n')),(0,a.kt)("h2",{id:"docker-container"},"Docker container"),(0,a.kt)("p",null,"You can also use a ready-made docker container\n",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/durudex/durudex-test-api"},"durudex/durudex-test-api"),"."),(0,a.kt)("h4",{id:"samples-of-using-container"},"Samples of using container:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/durudex/durudex-test-api/tree/main/deploy"},"durudex/durudex-test-api"))))}m.isMDXComponent=!0}}]);