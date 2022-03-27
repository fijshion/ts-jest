"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6708],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1050:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],p={id:"paths-mapping",title:"Paths mapping"},s=void 0,c={unversionedId:"getting-started/paths-mapping",id:"version-27.0/getting-started/paths-mapping",title:"Paths mapping",description:'If you use "baseUrl" and "paths" options in your tsconfig file, you should make sure the "moduleNameMapper" option in your Jest config is setup accordingly.',source:"@site/versioned_docs/version-27.0/getting-started/paths-mapping.md",sourceDirName:"getting-started",slug:"/getting-started/paths-mapping",permalink:"/ts-jest/docs/27.0/getting-started/paths-mapping",editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/paths-mapping.md",tags:[],version:"27.0",frontMatter:{id:"paths-mapping",title:"Paths mapping"},sidebar:"version-27.0-docs",previous:{title:"Options",permalink:"/ts-jest/docs/27.0/getting-started/options"},next:{title:"Version checking",permalink:"/ts-jest/docs/27.0/getting-started/version-checking"}},l={},u=[{value:"Example",id:"example",level:3},{value:"TypeScript config",id:"typescript-config",level:4},{value:"Jest config (without helper)",id:"jest-config-without-helper",level:4},{value:"Jest config (with helper)",id:"jest-config-with-helper",level:4}],m={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you use ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html"},'"baseUrl" and "paths" options')," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," file, you should make sure the ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring"},'"moduleNameMapper"')," option in your Jest config is setup accordingly."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," provides a helper to transform the mapping from ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," to Jest config format, but it needs the ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," version of the config file."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"typescript-config"},"TypeScript config"),(0,i.kt)("p",null,"With the below config in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@App/*": ["src/*"],\n      "lib/*": ["common/*"]\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"jest-config-without-helper"},"Jest config (without helper)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  moduleNameMapper: {\n    '^@App/(.*)$': '<rootDir>/src/$1',\n    '^lib/(.*)$': '<rootDir>/common/$1',\n  },\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "moduleNameMapper": {\n      "^@App/(.*)$": "<rootDir>/src/$1",\n      "^lib/(.*)$": "<rootDir>/common/$1"\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"jest-config-with-helper"},"Jest config (with helper)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nconst { pathsToModuleNameMapper } = require('ts-jest/utils')\n// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file\n// which contains the path mapping (ie the `compilerOptions.paths` option):\nconst { compilerOptions } = require('./tsconfig')\n\nmodule.exports = {\n  // [...]\n  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),\n}\n")))}g.isMDXComponent=!0}}]);