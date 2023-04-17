"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29213],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=i,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return o?n.createElement(f,r(r({ref:t},p),{},{components:o})):n.createElement(f,r({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},54055:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),i=(o(67294),o(3905));const a={},r="Bayesian Optimization",s={unversionedId:"datascience/bayesian-optimization",id:"datascience/bayesian-optimization",title:"Bayesian Optimization",description:"Optimization aims to locate the optimal set of parameters of interest across the whole domain through carefully allocating limited resources. For example, when searching for the car key at home before leaving for work in two minutes, we would naturally start with the most promising place where we would usually put the key. If it is not there, think for a little while about the possible locations and go to the next most promising place. This process iterates until the key is found. In this example, the policy is digesting the available information on previous searches and proposing the following promising location. The environment is the house itself, revealing if the key is placed at the proposed location upon each sampling.",source:"@site/docs/10-datascience/bayesian-optimization.md",sourceDirName:"10-datascience",slug:"/datascience/bayesian-optimization",permalink:"/docs/datascience/bayesian-optimization",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},l={},c=[],p={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bayesian-optimization"},"Bayesian Optimization"),(0,i.kt)("p",null,"Optimization aims to locate the optimal set of parameters of interest across the whole domain through carefully allocating limited resources. For example, when searching for the car key at home before leaving for work in two minutes, we would naturally start with the most promising place where we would usually put the key. If it is not there, think for a little while about the possible locations and go to the next most promising place. This process iterates until the key is found. In this example, the policy is digesting the available information on previous searches and proposing the following promising location. The environment is the house itself, revealing if the key is placed at the proposed location upon each sampling."),(0,i.kt)("p",null,"Following is an example objective function with the global maximum and its location marked with star. The goal of global optimization is to systematically reason about a series of sampling decisions so as to locate the global maximum as fast as possible:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/227536844-232bb35e-d1a9-4130-8f92-bb40609ffbe0.jpeg",alt:"527334_1_En_1_Fig2_HTML"})),(0,i.kt)("p",null,"Note that this is a nonconvex function, as is often the case in real-life functions we are optimizing. A nonconvex function means we could not resort to first-order gradient-based methods to reliably search for the global optimum since it will likely converge to a local optimum. This is also one of the advantages of Bayesian optimization compared with other gradient-based optimization procedures"))}m.isMDXComponent=!0}}]);