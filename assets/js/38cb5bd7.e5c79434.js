"use strict";(self.webpackChunkdurudex_docs=self.webpackChunkdurudex_docs||[]).push([[73],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:4,title:"\ud83d\udcc4 Post",description:"Here is interesting information about working with posts in our API."},p="\ud83d\udcc4 Post",l={unversionedId:"api/post",id:"api/post",title:"\ud83d\udcc4 Post",description:"Here is interesting information about working with posts in our API.",source:"@site/docs/dev/api/post.md",sourceDirName:"api",slug:"/api/post",permalink:"/dev/api/post",editUrl:"https://github.com/durudex/durudex-docs/tree/main/docs/dev/api/post.md",tags:[],version:"current",lastUpdatedBy:"V1def",lastUpdatedAt:1658246832,formattedLastUpdatedAt:"7/19/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83d\udcc4 Post",description:"Here is interesting information about working with posts in our API."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude42 User",permalink:"/dev/api/user"}},s={},c=[{value:"Create",id:"create",level:2},{value:"Delete",id:"delete",level:2},{value:"Update",id:"update",level:2},{value:"Get",id:"get",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-post"},"\ud83d\udcc4 Post"),(0,a.kt)("p",null,"Here is interesting information about working with posts in our API."),(0,a.kt)("h2",{id:"create"},"Create"),(0,a.kt)("p",null,"You need to be authorized to create a new post. You will also need the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Text - The main text of your post.")),(0,a.kt)("p",null,"Request to create a new post:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createPost(input: {text: "Hello Durudex!"})\n}\n')),(0,a.kt)("h2",{id:"delete"},"Delete"),(0,a.kt)("p",null,"You need to be authorized to delete your post."),(0,a.kt)("p",null,"Request to delete a post:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  deletePost(id: "post-id")\n}\n')),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"You need to be authorized to update your post."),(0,a.kt)("p",null,"Request to update a post:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  updatePost(input: {\n    id: "post-id",\n    text: "Durudex to the moon"\n  })\n}\n')),(0,a.kt)("h2",{id:"get"},"Get"),(0,a.kt)("p",null,"Request to get a post using id:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  post(id: "post-id") {\n    text\n    createdAt\n    author {\n      id\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);