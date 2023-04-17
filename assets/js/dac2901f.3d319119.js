"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,u=m["".concat(s,".").concat(b)]||m[b]||d[b]||o;return r?a.createElement(u,l(l({ref:t},c),{},{components:r})):a.createElement(u,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},l="Lab: ETL with bash script",i={unversionedId:"storage/lab-postgres-bash-etl/README",id:"storage/lab-postgres-bash-etl/README",title:"Lab: ETL with bash script",description:"Objective",source:"@site/docs/02-storage/lab-postgres-bash-etl/README.md",sourceDirName:"02-storage/lab-postgres-bash-etl",slug:"/storage/lab-postgres-bash-etl/",permalink:"/docs/storage/lab-postgres-bash-etl/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681539985,formattedLastUpdatedAt:"Apr 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Getting Started with Postgres",permalink:"/docs/storage/lab-postgres-getting-started/"},next:{title:"Lab: Postgres Crime Reports",permalink:"/docs/storage/lab-postgres-crime-reports/"}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Activity",id:"activity",level:2},{value:"Assignment",id:"assignment",level:2},{value:"Problem",id:"problem",level:3},{value:"Notebooks",id:"notebooks",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lab-etl-with-bash-script"},"Lab: ETL with bash script"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"In this lab, you will use bash shell commands to extract, transform and load data"),(0,n.kt)("h2",{id:"activity"},"Activity"),(0,n.kt)("p",null,"After completing this lab you will be able to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Extract data from a delimited file."),(0,n.kt)("li",{parentName:"ol"},"Transform text data."),(0,n.kt)("li",{parentName:"ol"},"Load data into a database using shell commands.")),(0,n.kt)("h2",{id:"assignment"},"Assignment"),(0,n.kt)("h3",{id:"problem"},"Problem"),(0,n.kt)("p",null,"Copy the data in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"web-server-access-log.txt.gz")," to the table 'access_log' in the PostgreSQL database 'postgres'."),(0,n.kt)("p",null,"The following are the columns and their data types in the file:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"timestamp")," - TIMESTAMP"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"latitude")," - float"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"longitude")," - float"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"visitorid")," - char(37)")),(0,n.kt)("p",null,"and two more columns: ",(0,n.kt)("inlineCode",{parentName:"p"},"accessed_from_mobile")," (boolean) and ",(0,n.kt)("inlineCode",{parentName:"p"},"browser_code")," (int)"),(0,n.kt)("p",null,"The columns which we need to copy to the table are the first four coumns."),(0,n.kt)("p",null,"NOTE: The file comes with a header. So use the 'HEADER' option in the 'COPY' command."),(0,n.kt)("h2",{id:"notebooks"},"Notebooks"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/02-storage/lab-postgres-bash-etl/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}d.isMDXComponent=!0}}]);