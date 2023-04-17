"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="CTE (Common Table Expressions)",s={unversionedId:"foundations/language/sql/cte",id:"foundations/language/sql/cte",title:"CTE (Common Table Expressions)",description:"A common table expression is a named temporary result set that exists only within the execution scope of a single SQL statement e.g.,SELECT,\xa0INSERT,\xa0UPDATE, or\xa0DELETE.",source:"@site/docs/01-foundations/language/sql/cte.md",sourceDirName:"01-foundations/language/sql",slug:"/foundations/language/sql/cte",permalink:"/docs/foundations/language/sql/cte",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681451444,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/foundations/language/sql/commands/"},next:{title:"Subquery",permalink:"/docs/foundations/language/sql/subquery"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cte-common-table-expressions"},"CTE (Common Table Expressions)"),(0,r.kt)("p",null,"A common table expression is a named temporary result set that exists only within the execution scope of a single SQL statement e.g.,",(0,r.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-select-statement-query-data.aspx"},(0,r.kt)("inlineCode",{parentName:"a"},"SELECT")),",\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-insert-statement.aspx"},(0,r.kt)("inlineCode",{parentName:"a"},"INSERT")),",\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-update-data.aspx"},(0,r.kt)("inlineCode",{parentName:"a"},"UPDATE")),", or\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-delete-statement.aspx"},(0,r.kt)("inlineCode",{parentName:"a"},"DELETE")),"."),(0,r.kt)("p",null,"Similar to a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-derived-table/"},"derived table"),", a CTE is not stored as an object and last only during the execution of a query. A Common Table Expression (CTE) is the result set of a query which exists temporarily and for use only within the context of a larger query. Much like a derived table, the result of a CTE is not stored and exists only for the duration of the query."),(0,r.kt)("p",null,"CTEs, like database views and derived tables, enable users to more easily write and maintain complex queries via increased readability and simplification. This reduction in complexity is achieved by deconstructing ordinarily complex queries into simple blocks to be used, and reused if necessary, in rewriting the query. Example use cases include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Needing to reference a derived table multiple times in a single query"),(0,r.kt)("li",{parentName:"ul"},"An alternative to creating a view in the database"),(0,r.kt)("li",{parentName:"ul"},"Performing the same calculation multiple times over across multiple query components")),(0,r.kt)("p",null,"Unlike a derived table, a CTE can be self-referencing (a\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.mysqltutorial.org/mysql-recursive-cte/"},"recursive CTE"),") or can be referenced multiple times in the same query. In addition, a CTE provides better readability and performance in comparison with a derived table."),(0,r.kt)("p",null,"The structure of a CTE includes the name, an optional column list, and a query that defines the CTE. After the CTE is defined, you can use it as a view in a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),", or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE VIEW"),"\xa0statement."),(0,r.kt)("p",null,"The following illustrates the basic syntax of a CTE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"WITH cte_name (column_list) AS (\n    query\n) \nSELECT * FROM cte_name;\n")))}c.isMDXComponent=!0}}]);