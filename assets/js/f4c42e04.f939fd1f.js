"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="ETL Docker",i={unversionedId:"devops/containers/lab-assignment-etl-docker/README",id:"devops/containers/lab-assignment-etl-docker/README",title:"ETL Docker",description:"Objective",source:"@site/docs/07-devops/containers/lab-assignment-etl-docker/README.md",sourceDirName:"07-devops/containers/lab-assignment-etl-docker",slug:"/devops/containers/lab-assignment-etl-docker/",permalink:"/docs/devops/containers/lab-assignment-etl-docker/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Problem",id:"problem",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Examples",id:"examples",level:3},{value:"Instructions",id:"instructions",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etl-docker"},"ETL Docker"),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"Data Transformation and Containerization"),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"An address provider returns addresses only with concatenated street names and numbers. Our own system on the other hand has separate fields for street name and street number."),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("p",null,"string of address"),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("p",null,"string of street and string of street-number as JSON object"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write a simple program that does the task for the most simple cases, e.g."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Winterallee 3"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Winterallee", "housenumber": "3"}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Musterstrasse 45"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Musterstrasse", "housenumber": "45"}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Blaufeldweg 123B"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Blaufeldweg", "housenumber": "123B"}')))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Consider more complicated cases"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Am B\xe4chle 23"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Am B\xe4chle", "housenumber": "23"}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Auf der Vogelwiese 23 b"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Auf der Vogelwiese", "housenumber": "23 b"}')))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Consider other countries (complex cases)"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"4, rue de la revolution"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "rue de la revolution", "housenumber": "4"}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"200 Broadway Av"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Broadway Av", "housenumber": "200"}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Calle Aduana, 29"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Calle Aduana", "housenumber": "29"}')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'"Calle 39 No 1540"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'{"street": "Calle 39", "housenumber": "No 1540"}'))))),(0,a.kt)("h3",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"When choosing your approach of implementation, please keep following things in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"While we will try to evaluate all code that you share, keep in mind that we will feel most comfortable with the tools we know:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Python"),(0,a.kt)("li",{parentName:"ul"},"Pandas"),(0,a.kt)("li",{parentName:"ul"},"PySpark"),(0,a.kt)("li",{parentName:"ul"},"SQL"))),(0,a.kt)("li",{parentName:"ul"},"We prefer quality over speed. It does not only matter if your solution yields correct results, but we will also take a close look on your overall project structure, the tools used, test coverage, documentation, etc.")))}m.isMDXComponent=!0}}]);