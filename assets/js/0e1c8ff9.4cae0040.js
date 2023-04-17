"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51812],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},i="Lab: Redshift Slowly Changing Dimension",l={unversionedId:"storage/lab-redshift-scd-2",id:"storage/lab-redshift-scd-2",title:"Lab: Redshift Slowly Changing Dimension",description:"Data loading into a SCD table involves a first-time bulk data loading, referred to as the initial data load. This is followed by continuous or regular data loading, referred to as an incremental data load, to keep the records up to date with changes in the source tables.",source:"@site/docs/02-storage/lab-redshift-scd-2.md",sourceDirName:"02-storage",slug:"/storage/lab-redshift-scd-2",permalink:"/docs/storage/lab-redshift-scd-2",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681583434,formattedLastUpdatedAt:"Apr 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Implement a slowly changing dimension in Redshift",permalink:"/docs/storage/lab-redshift-scd"},next:{title:"Lab: Redshift Ongoing Load - ELT",permalink:"/docs/storage/lab-redshift-ongoing-load-elt"}},s={},d=[],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-redshift-slowly-changing-dimension"},"Lab: Redshift Slowly Changing Dimension"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/02-storage/lab-redshift-scd-2/main.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:null}))),(0,r.kt)("p",null,"Data loading into a SCD table involves a first-time bulk data loading, referred to as the ",(0,r.kt)("em",{parentName:"p"},"initial data load"),". This is followed by continuous or regular data loading, referred to as an ",(0,r.kt)("em",{parentName:"p"},"incremental data load"),", to keep the records up to date with changes in the source tables."),(0,r.kt)("p",null,"To demonstrate the solution, we walk through the following steps for initial data load (1\u20137) and incremental data load (8\u201312):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Land the source data files in an Amazon S3 location, using one subfolder per source table."),(0,r.kt)("li",{parentName:"ol"},"Use an ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/glue"},"AWS Glue")," crawler to parse the data files and register tables in the AWS Glue Data Catalog."),(0,r.kt)("li",{parentName:"ol"},"Create an external schema in Amazon Redshift to point to the AWS Glue database containing these tables."),(0,r.kt)("li",{parentName:"ol"},"In Amazon Redshift, create one view per source table to fetch the latest version of the record for each primary key (",(0,r.kt)("inlineCode",{parentName:"li"},"customer_id"),") value."),(0,r.kt)("li",{parentName:"ol"},"Create the ",(0,r.kt)("inlineCode",{parentName:"li"},"dim_customer")," table in Amazon Redshift, which contains attributes from all relevant source tables."),(0,r.kt)("li",{parentName:"ol"},"Create a view in Amazon Redshift joining the source table views from Step 4 to project the attributes modeled in the dimension table."),(0,r.kt)("li",{parentName:"ol"},"Populate the initial data from the view created in Step 6 into the ",(0,r.kt)("inlineCode",{parentName:"li"},"dim_customer")," table, generating ",(0,r.kt)("inlineCode",{parentName:"li"},"customer_sk"),"."),(0,r.kt)("li",{parentName:"ol"},"Land the incremental data files for each source table in their respective Amazon S3 location."),(0,r.kt)("li",{parentName:"ol"},"In Amazon Redshift, create a temporary table to accommodate the change-only records."),(0,r.kt)("li",{parentName:"ol"},"Join the view from Step 6 and ",(0,r.kt)("inlineCode",{parentName:"li"},"dim_customer")," and identify change records comparing the combined hash value of attributes. Populate the change records into the temporary table with an ",(0,r.kt)("inlineCode",{parentName:"li"},"I"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"U"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"D")," indicator."),(0,r.kt)("li",{parentName:"ol"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"rec_exp_dt")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"dim_customer")," for all ",(0,r.kt)("inlineCode",{parentName:"li"},"U")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"D")," records from the temporary table."),(0,r.kt)("li",{parentName:"ol"},"Insert records into ",(0,r.kt)("inlineCode",{parentName:"li"},"dim_customer"),", querying all ",(0,r.kt)("inlineCode",{parentName:"li"},"I")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"U")," records from the temporary table.")))}p.isMDXComponent=!0}}]);