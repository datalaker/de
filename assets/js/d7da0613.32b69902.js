"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},i="Steps of Building Data Models",s={unversionedId:"data-modeling/data-modeling-steps",id:"data-modeling/data-modeling-steps",title:"Steps of Building Data Models",description:"Gathering requirements",source:"@site/docs/04-data-modeling/data-modeling-steps.md",sourceDirName:"04-data-modeling",slug:"/data-modeling/data-modeling-steps",permalink:"/docs/data-modeling/data-modeling-steps",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Data Vault Modeling",permalink:"/docs/data-modeling/data-vault-modeling"},next:{title:"Designing SCDs",permalink:"/docs/data-modeling/designing-scd"}},l={},u=[{value:"Gathering requirements",id:"gathering-requirements",level:2},{value:"Exploration",id:"exploration",level:2},{value:"Modeling",id:"modeling",level:2},{value:"Data storage",id:"data-storage",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"steps-of-building-data-models"},"Steps of Building Data Models"),(0,r.kt)("h2",{id:"gathering-requirements"},"Gathering requirements"),(0,r.kt)("p",null,"Before designing the warehouse table(s), you should always clearly define the end objectives."),(0,r.kt)("p",null,"Some questions you need answered/explored are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What does this data represent and why is it needed?"),(0,r.kt)("li",{parentName:"ul"},"Who is the end-user of the table(s)?"),(0,r.kt)("li",{parentName:"ul"},"What is the business process that generates this data? How is this data generated?"),(0,r.kt)("li",{parentName:"ul"},"A few (>= 3) different example queries that the end-user is expected to run?"),(0,r.kt)("li",{parentName:"ul"},"What is the expected number of read queries per minute?"),(0,r.kt)("li",{parentName:"ul"},"What is an acceptable query execution time for reading from the table(s)?"),(0,r.kt)("li",{parentName:"ul"},"What is the expected number of daily records?"),(0,r.kt)("li",{parentName:"ul"},"What is the general date range (and/or other) filters for the read queries?"),(0,r.kt)("li",{parentName:"ul"},"What is the historical range of data that needs to be available for querying?")),(0,r.kt)("p",null,"Answers to these questions will determine how you model and transform the data."),(0,r.kt)("h2",{id:"exploration"},"Exploration"),(0,r.kt)("p",null,"The next step is to explore the data, check for any data issues, validate assumptions, approximate data size growth, validate business rules, check for missing/duplicate rows on joins, etc"),(0,r.kt)("p",null,"You will need to load the raw data into your data warehouse. There are multiple ways to ingest data into a data warehouse. For exploration, dump the data into a cloud storage system and use a COPY INTO command to load raw data into your data warehouse."),(0,r.kt)("p",null,"Some points you need answered/explored are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Data schema checks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are data types consistent with the columns?"),(0,r.kt)("li",{parentName:"ul"},"Are column names consistent?")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Data quality checks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Were all the records in the raw file loaded into the raw table? Use wc -l input_data_file.csv to count the number of lines in the input data."),(0,r.kt)("li",{parentName:"ul"},"Check for absence of column values such as NULL, null, 'null', '', N/A, etc"),(0,r.kt)("li",{parentName:"ul"},"Do any of the column values have a field delimiter within them? Most data warehouses have options to handle these, e.g. quote_character, FIELD_OPTIONALLY_ENCLOSED_BY.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Validate business assumptions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you join this data with other business-relevant tables, do you get unexpected duplicates or missing rows? If so, why?"),(0,r.kt)("li",{parentName:"ul"},"If you aggregate by some id and aggregate numeric columns in a fact table, are the aggregates accurate? Or does it cause doubles/undercounting? If so, how can you prevent it?"),(0,r.kt)("li",{parentName:"ul"},"Does the number of rows per day (and/or other business entities) show clear patterns? (including seasonality)"),(0,r.kt)("li",{parentName:"ul"},"Do all the tables have a unique id?"),(0,r.kt)("li",{parentName:"ul"},"For every business entity table (aka dimension), is there a table that records every update made to that table?"),(0,r.kt)("li",{parentName:"ul"},"Be aware of values with specific meaning. E.g. sometimes -9999 (or similar) can be used to denote NULL or other values.")),(0,r.kt)("p",null,"This will be an ongoing process. Since the data generation process upstream can change, you may find additional data issues, etc."),(0,r.kt)("h2",{id:"modeling"},"Modeling"),(0,r.kt)("p",null,"With knowledge of the requirement and data issues, you are all set to model the end-user table(s). The standard approach is to have fact and dimension table(s). This type of data modeling has the advantage of being able to answer most queries. The downside is that this may require multiple joins, and can be a lot of work to manage."),(0,r.kt)("p",null,"Note:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dimensional/Data modeling always uses the concepts of facts (measures), and dimensions (context). Facts are typically (but not always) numeric values that can be aggregated, and dimensions are groups of hierarchies and descriptors that define the facts. For example, sales amount is a fact; timestamp, product, register#, store#, etc. are elements of dimensions. Dimensional models are built by business process area, e.g. store sales, inventory, claims, etc. Because the different business process areas share some but not all dimensions, efficiency in design, operation, and consistency, is achieved using conformed dimensions, i.e. using one copy of the shared dimension across subject areas.")),(0,r.kt)("p",null,"Some points you need answered/explored are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Naming conventions: Each company has its standard naming convention. If you don\u2019t, make sure to establish this standard. (e.g. naming standard)."),(0,r.kt)("li",{parentName:"ul"},"Slowly changing dimensions: Most business entity tables (aka dimensions) have attributes that change over time. Consider creating an SCD2 table to capture historical changes."),(0,r.kt)("li",{parentName:"ul"},"In-correct aggregates: Running aggregates on any numeric values of the fact table(s) should not produce duplicate/inaccurate results. This is usually a result of having the data representing different columns in one column."),(0,r.kt)("li",{parentName:"ul"},"Pre-aggregating data: At times, the expected query pattern requires data to be rolled up to a higher granularity. In these cases, if your read time is longer than the requirement, you may want to pre-aggregate your data on a set schedule. Pre-aggregating the data will allow \u201cread queries\u201d to be much faster but introduces the additional overhead of creating, scheduling, and maintaining a data pipeline."),(0,r.kt)("li",{parentName:"ul"},"Flat tables: Although the Kimball Model is very popular, it can get tedious for the end-user to query and join multiple tables. A way for the data team to provide a clean interface for the end-user is to create a wide flat table (or view). A flat table is a table with all the facts and dimensional columns. The end-user does not need to worry about joining multiple tables and can concentrate on analyzing the data.")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In a flat table, if some dimensional attributes change over time, then running a group-by query on those may produce inaccurate results. You can circumvent this by having 2 tables/views one with point-in-time dimensional attributes and the other with the most recent dimensional attribute.")),(0,r.kt)("h2",{id:"data-storage"},"Data storage"),(0,r.kt)("p",null,"Storing data in the right format can significantly impact your query performance. When modeling your end-user tables, make sure to consider the impact of data storage on read-type queries."),(0,r.kt)("p",null,"It\u2019s crucial to understand the following concepts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Partitioning: Partitioning/Clustering, can significantly reduce the amount of data scanned and hence reduce the cost."),(0,r.kt)("li",{parentName:"ul"},"Storage formats: Such as Parquet, or ORC formats can significantly reduce data size and speed up transformations."),(0,r.kt)("li",{parentName:"ul"},"Sorting: Sorting can also reduce the amount of data to be read and make transformations efficient."),(0,r.kt)("li",{parentName:"ul"},"Cloud storage: External tables allow for data to be stored in a cloud storage system and read when necessary.")),(0,r.kt)("p",null,"Every data warehouse has different naming/implementation/caveats concerning the above, e.g. Snowflake automatically does most of these are for you, while Redshift requires a more hands on approach."))}c.isMDXComponent=!0}}]);