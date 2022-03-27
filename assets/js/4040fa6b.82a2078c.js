"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2802],{4137:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7749:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",slug:"/"},c=void 0,p={unversionedId:"introduction",id:"version-26.5/introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",source:"@site/versioned_docs/version-26.5/introduction.md",sourceDirName:".",slug:"/",permalink:"/ts-jest/docs/26.5/",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/introduction.md",tags:[],version:"26.5",frontMatter:{id:"introduction",title:"Introduction",description:"A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.",slug:"/"},sidebar:"version-26.5-docs",next:{title:"Processing flow",permalink:"/ts-jest/docs/26.5/processing"}},u={},l=[],d={toc:l};function m(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," is a Jest ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/next/code-transformation#writing-custom-transformers"},"transformer")," with source map support that lets you use Jest to test projects written in TypeScript."),(0,i.kt)("p",null,"It supports all features of TypeScript including type-checking. ",(0,i.kt)("a",{parentName:"p",href:"babel7-or-ts"},"Read more about Babel7 + ",(0,i.kt)("inlineCode",{parentName:"a"},"preset-typescript")," ",(0,i.kt)("strong",{parentName:"a"},"vs")," TypeScript (and ",(0,i.kt)("inlineCode",{parentName:"a"},"ts-jest"),")"),"."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are not doing semantic versioning and ",(0,i.kt)("inlineCode",{parentName:"p"},"23.10")," is a re-write, run ",(0,i.kt)("inlineCode",{parentName:"p"},'npm i -D ts-jest@"<23.10.0"')," to go back to the previous version"))))}m.isMDXComponent=!0}}]);