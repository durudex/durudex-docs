"use strict";(self.webpackChunkdurudex_docs=self.webpackChunkdurudex_docs||[]).push([[889],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={sidebar_position:1},l="\u2699\ufe0f Test API",s={unversionedId:"api/tests",id:"api/tests",title:"\u2699\ufe0f Test API",description:"You can use our test API for development, which gives the full functionality of the main API.",source:"@site/docs/dev/api/tests.md",sourceDirName:"api",slug:"/api/tests",permalink:"/dev/api/tests",editUrl:"https://github.com/durudex/durudex-docs/tree/main/docs/dev/api/tests.md",tags:[],version:"current",lastUpdatedBy:"Bogdan",lastUpdatedAt:1648849168,formattedLastUpdatedAt:"4/1/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc68\u200d\ud83c\udfed Development",permalink:"/dev/intro"}},p={},c=[{value:"Start",id:"start",level:2},{value:"Usage",id:"usage",level:2},{value:"Docker container",id:"docker-container",level:2},{value:"Samples of using container:",id:"samples-of-using-container",level:4},{value:"Incorrect input",id:"incorrect-input",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-test-api"},"\u2699\ufe0f Test API"),(0,o.kt)("p",null,"You can use our test API for development, which gives the full functionality of the main API."),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"To start you need to have Docker on your PC."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone repository.\ngit clone https://github.com/durudex/durudex-test-api.git\n\n# Change directory.\ncd durudex-test-api\n\n# Create environment file.\ntouch .env\n")),(0,o.kt)("p",null,"You need to edit ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file as shown here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"API_PORT=8000\n")),(0,o.kt)("p",null,"To start you need to enter this command in the terminal ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We use GraphQL to interact with the server. To go to the web query editor, you need to open this in your browser ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"localhost:8000")),"."),(0,o.kt)("p",null,"Sample request to check the work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  ping\n}\n")),(0,o.kt)("p",null,"Request to create an account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  signUp(input: {\n    username: "example",\n    email: "example@durudex.com"\n    password: "qwerty",\n    code: "111111"\n  })\n}\n')),(0,o.kt)("h2",{id:"docker-container"},"Docker container"),(0,o.kt)("p",null,"You can also use a ready-made docker container\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/v1def/durudex-test-api"},"v1def/durudex-test-api"),"."),(0,o.kt)("h4",{id:"samples-of-using-container"},"Samples of using container:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/durudex/durudex-test-api/tree/main/deploy"},"durudex/durudex-test-api"))),(0,o.kt)("h2",{id:"incorrect-input"},"Incorrect input"),(0,o.kt)("p",null,"If you need to get error from server, then you need to enter the following input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email - ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"mailto:false@false.false"},"false@false.false"))),(0,o.kt)("li",{parentName:"ul"},"Code - ",(0,o.kt)("strong",{parentName:"li"},"0")),(0,o.kt)("li",{parentName:"ul"},"Other - ",(0,o.kt)("strong",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Example of false input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  signIn(input: {\n    username: "false",\n    password: "false",\n  }) {\n    access\n    refresh\n  }\n}\n')))}m.isMDXComponent=!0}}]);