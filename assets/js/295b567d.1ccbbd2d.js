"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[154],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],c={id:"migration",title:"Migration from <=23.10"},s=void 0,l={unversionedId:"migration",id:"migration",title:"Migration from <=23.10",description:"You can use the config:migrate tool of ts-jest CLI if you're coming from an older version to help you migrate your Jest configuration.",source:"@site/docs/migration.md",sourceDirName:".",slug:"/migration",permalink:"/ts-jest/docs/next/migration",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/migration.md",tags:[],version:"current",frontMatter:{id:"migration",title:"Migration from <=23.10"},sidebar:"docs",previous:{title:"Babel7 or TypeScript",permalink:"/ts-jest/docs/next/babel7-or-ts"},next:{title:"Debugging ts-jest",permalink:"/ts-jest/docs/next/debugging"}},u={},p=[{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"NPM",id:"npm-1",level:3},{value:"Yarn",id:"yarn-1",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"config:migrate")," tool of ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," CLI if you're coming from an older version to help you migrate your Jest configuration."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you're using ",(0,a.kt)("inlineCode",{parentName:"em"},"jest.config.js"),":")),(0,a.kt)("h3",{id:"npm"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:migrate jest.config.js\n")),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:migrate jest.config.js\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you're using ",(0,a.kt)("inlineCode",{parentName:"em"},"jest")," config property of ",(0,a.kt)("inlineCode",{parentName:"em"},"package.json"),":")),(0,a.kt)("h3",{id:"npm-1"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:migrate package.json\n")),(0,a.kt)("h3",{id:"yarn-1"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:migrate package.json\n")))}f.isMDXComponent=!0}}]);