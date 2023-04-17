"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},o="Batch vs Incremental Data Processing",c={unversionedId:"foundations/basics/batch-vs-incremental",id:"foundations/basics/batch-vs-incremental",title:"Batch vs Incremental Data Processing",description:"The idea behind incremental processing is quite simple. Incremental processing extends the semantics of processing streaming data to batch processing pipelines by processing only new data each run and then incrementally updating the new results. This unlocks great cost savings due to much shorter batch pipelines as well as data freshness speedups due to being able to run them much more frequently as well.",source:"@site/docs/01-foundations/basics/batch-vs-incremental.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/batch-vs-incremental",permalink:"/docs/foundations/basics/batch-vs-incremental",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Big Data",permalink:"/docs/foundations/basics/big-data"},next:{title:"Data Contract",permalink:"/docs/foundations/basics/data-contract"}},i={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"batch-vs-incremental-data-processing"},"Batch vs Incremental Data Processing"),(0,a.kt)("p",null,"The idea behind incremental processing is quite simple. Incremental processing extends the semantics of processing streaming data to batch processing pipelines by processing only new data each run and then incrementally updating the new results. This unlocks great cost savings due to much shorter batch pipelines as well as data freshness speedups due to being able to run them much more frequently as well. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc53 Case Study: ",(0,a.kt)("a",{href:"https://www.uber.com/en-IN/blog/ubers-lakehouse-architecture/",target:"_blank"},"Setting Uber\u2019s Transactional Data Lake in Motion with Incremental ETL Using Apache Hudi"))))}u.isMDXComponent=!0}}]);