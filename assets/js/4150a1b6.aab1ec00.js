"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l="Postgres Pagila",i={unversionedId:"data-modeling/lab-dvd-rental-datamodel/README",id:"data-modeling/lab-dvd-rental-datamodel/README",title:"Postgres Pagila",description:"Objective",source:"@site/docs/04-data-modeling/lab-dvd-rental-datamodel/README.md",sourceDirName:"04-data-modeling/lab-dvd-rental-datamodel",slug:"/data-modeling/lab-dvd-rental-datamodel/",permalink:"/docs/data-modeling/lab-dvd-rental-datamodel/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},s={},c=[{value:"Objective",id:"objective",level:2},{value:"Introduction",id:"introduction",level:2},{value:"3NF Schema",id:"3nf-schema",level:2},{value:"Star Schema",id:"star-schema",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgres-pagila"},"Postgres Pagila"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"Create a star schema from 3NF schema on DVD rental Pagila dataset"),(0,n.kt)("p",null,"Build a Postgres data model of Pagila dataset"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Pagila is a dataset representing a DVD rental store (remember those?!), containing information about films (like title, category, actresses), rental stores (like address, staff members, customers) and rentals, where a customer rents a film from a store through its staff."),(0,n.kt)("p",null,"With all these relational information, Pagila is a perfect fit to play around with PostgreSQL and the SQL language."),(0,n.kt)("p",null,"In this lab, we will use this Pagila dataset to build a data model in Postgres."),(0,n.kt)("h2",{id:"3nf-schema"},"3NF Schema"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/211511428-e9fb7f88-aabb-4e8a-810c-5e6b69f301b4.png",alt:null})),(0,n.kt)("h2",{id:"star-schema"},"Star Schema"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/211511442-3a579b9f-3cf9-453d-be80-c44a1349d69d.png",alt:null})))}u.isMDXComponent=!0}}]);