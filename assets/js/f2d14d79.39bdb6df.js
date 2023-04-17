"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?o.createElement(m,s(s({ref:t},l),{},{components:r})):o.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},s="Azure Data Ingestion",i={unversionedId:"foundations/cloud/azure-data-ingestion",id:"foundations/cloud/azure-data-ingestion",title:"Azure Data Ingestion",description:"This is the process of getting\xa0all the raw data into the data lake. Data from various\xa0sources lands in the raw zone of the data lake. Based on where the data is coming from, such as on-premise systems, other cloud systems, and so on, we could use different ingestion tools. Let's look at some of the options available in Azure:",source:"@site/docs/01-foundations/cloud/azure-data-ingestion.md",sourceDirName:"01-foundations/cloud",slug:"/foundations/cloud/azure-data-ingestion",permalink:"/docs/foundations/cloud/azure-data-ingestion",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681451444,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Azure Basics",permalink:"/docs/foundations/cloud/azure-basics"},next:{title:"Azure Batch Processing",permalink:"/docs/foundations/cloud/azure-batch-processing"}},u={},c=[],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-data-ingestion"},"Azure Data Ingestion"),(0,n.kt)("p",null,"This is the process of getting\xa0all the raw data into the data lake. Data from various\xa0sources lands in the raw zone of the data lake. Based on where the data is coming from, such as on-premise systems, other cloud systems, and so on, we could use different ingestion tools. Let's look at some of the options available in Azure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure Data Factory"),"\xa0-- It provides data ingestion\xa0support from hundreds of data sources, and even from other clouds such as AWS, GCP, Oracle, and so on."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure Copy"),"\xa0(",(0,n.kt)("strong",{parentName:"li"},"AzCopy"),") -- This is a command-line tool that can be used to copy data over the internet\xa0and is ideally suited for smaller data sizes (preferably in the 10--15 TB range). You can learn\xa0more about AzCopy here:\xa0",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10%0D"},"https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure ExpressRoute"),"\xa0-- If you need a secure way to transfer data into Azure, then use ExpressRoute. It routes\xa0your data through dedicated private connections to Azure instead of the public internet. This is also the preferred option if you want to have a dedicated pipeline with a faster data transfer speed. You can learn\xa0more about Azure ExpressRoute here:\xa0",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/expressroute/expressroute-introduction%0D"},"https://docs.microsoft.com/en-us/azure/expressroute/expressroute-introduction."))))}d.isMDXComponent=!0}}]);