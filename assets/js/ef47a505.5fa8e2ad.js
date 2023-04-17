"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="AWS Lambda Function",c={unversionedId:"processing/aws-lambda",id:"processing/aws-lambda",title:"AWS Lambda Function",description:"Lambda Function",source:"@site/docs/03-processing/aws-lambda.md",sourceDirName:"03-processing",slug:"/processing/aws-lambda",permalink:"/docs/processing/aws-lambda",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: CSV to Parquet Transformation with Glue Studio",permalink:"/docs/processing/lab-csv-to-parquet-conversion/"},next:{title:"Snippets related to Lambda function",permalink:"/docs/processing/aws-lambda-snippets"}},l={},s=[{value:"Lambda Function",id:"lambda-function",level:2},{value:"Lambda Layer",id:"lambda-layer",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-lambda-function"},"AWS Lambda Function"),(0,r.kt)("h2",{id:"lambda-function"},"Lambda Function"),(0,r.kt)("p",null,"Watch this video: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iUIWG0h2D84"},"https://www.youtube.com/watch?v=iUIWG0h2D84")),(0,r.kt)("h2",{id:"lambda-layer"},"Lambda Layer"),(0,r.kt)("p",null,"AWS Lambda layers allow the Lambda functions to import additional code or data without including that additional code in the deployment package.\nA layer is a zip file that contains all the additional code. A layer can contain some third-party libraries, custom runtimes, or data, and you can refer to that layer from any lambda function."),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://aws.plainenglish.io/everything-you-need-to-know-about-aws-lambda-layers-bf1aea363289"},"this")," link to learn more about lambda layers."))}d.isMDXComponent=!0}}]);