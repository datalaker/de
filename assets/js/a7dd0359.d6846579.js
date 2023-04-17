"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=m(a),u=o,p=h["".concat(l,".").concat(u)]||h[u]||c[u]||r;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<r;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),o=(a(67294),a(3905));const r={},s="Inmon versus the Kimball data model",i={unversionedId:"data-modeling/inmon-vs-kimball",id:"data-modeling/inmon-vs-kimball",title:"Inmon versus the Kimball data model",description:"If you look at the internet, there will be many references to data modeling, but two of the most famous\xa0approaches are the\xa0Inmon\xa0method (data-driven) and the\xa0Kimball\xa0method (user-driven).",source:"@site/docs/04-data-modeling/inmon-vs-kimball.md",sourceDirName:"04-data-modeling",slug:"/data-modeling/inmon-vs-kimball",permalink:"/docs/data-modeling/inmon-vs-kimball",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"SQL Data Modeling",permalink:"/docs/data-modeling/sql-data-modeling"},next:{title:"Stages of Data Modeling",permalink:"/docs/data-modeling/data-modeling-stages"}},l={},m=[],d={toc:m};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inmon-versus-the-kimball-data-model"},"Inmon versus the Kimball data model"),(0,o.kt)("p",null,"If you look at the internet, there will be many references to data modeling, but two of the most famous\xa0approaches are the\xa0",(0,o.kt)("strong",{parentName:"p"},"Inmon"),"\xa0method (data-driven) and the\xa0",(0,o.kt)("strong",{parentName:"p"},"Kimball"),"\xa0method (user-driven)."),(0,o.kt)("p",null,"We will\xa0take a quick look at these methods, but we won't spend much time or go into too much detail in this note since there are so many details to explain\xa0regarding the framework. I suggest\xa0you do some more in-depth research from other resources regarding these two methods to better understand the step-by-step approaches and the frameworks. What we want to learn from them are the differences and the thinking processes behind them."),(0,o.kt)("p",null,"At a very high level, the Inmon method focuses on building a central data warehouse or single source of truth. To achieve that, the data model must be highly normalized to the lowest level, so the data can be highly consistent. The Inmon data model follows a top-down approach, which means the data warehouse is built as the central data source for all the downstream data marts, sometimes referred to as the\xa0",(0,o.kt)("strong",{parentName:"p"},"Enterprise Data Warehouse"),". The\xa0downstream data marts need to follow the rules from the data warehouse, as in this figure. Imagine the gray boxes are tables.\xa0"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542336-5dc33337-2996-4feb-abc7-89b178c9ec9d.jpg",alt:"B16851_03_41"})),(0,o.kt)("p",null,"Compared to the Inmon method, the Kimball method focuses on answering user questions\xa0and follows a bottom-up approach. This method keeps end user questions in mind and uses the questions as a basis to\xa0build necessary tables. The goal is to ease end user accessibility and provide a high level of performance improvement."),(0,o.kt)("p",null,"The tables may contain the entity's basic information and its measurements. This is what are\xa0now known as fact and dimension tables. A\xa0",(0,o.kt)("strong",{parentName:"p"},"fact table"),"\xa0is a collection of\xa0measurements or metrics in a predefined granularity. A\xa0",(0,o.kt)("strong",{parentName:"p"},"dimension table"),"\xa0is a collection of entity attributes that support the fact tables. This collection of fact and dimension tables will later be the data warehouse.\xa0"),(0,o.kt)("p",null,"Here is an example of a fact table. The fact table has two measurements that measure customers in daily granularity:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542340-a84d6156-e7ed-49d8-b97a-85644f3de1f9.jpg",alt:"B16851_03_42"})),(0,o.kt)("p",null,"Here is an example of a dimension table with\xa0",(0,o.kt)("strong",{parentName:"p"},"Customer ID"),"\xa0as the primary key and the attributes:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542343-d63c8ffc-d3b7-4409-99c1-788025412491.jpg",alt:"B16851_03_43"})),(0,o.kt)("p",null,"As you\xa0can see from the examples, the facts\xa0and dimension tables are different. So how do they relate together as a data model?"),(0,o.kt)("p",null,"One of the most well-known data models for the Kimball method is the star schema. The star schema follows the fact and dimension table relations. There is a rule of thumb regarding the star schema that a dimension table can't have parent tables, which means the dimension is a denormalized table. Check the following diagram, which provides a high-level illustration of a data warehouse using the Kimball approach. Imagine that all the gray boxes are tables:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542344-c9fcd477-c631-451c-b0f9-ed8b17b731dc.jpg",alt:"B16851_03_44"})),(0,o.kt)("p",null,"The pros\xa0and cons of both methods\xa0are summarized as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/219542350-d8a15c63-644d-4dac-8032-3c321258265b.jpg",alt:"B16851_03_45"})),(0,o.kt)("p",null,"Use the table comparison as your reference when deciding between the Inmon or Kimball methods. This is usually not a straightforward and quick decision to make. It's a difficult decision because choosing one of them means your entire organization needs to commit to the data model for the long term. An experienced data modeler is usually the best person to decide this."))}c.isMDXComponent=!0}}]);