"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49555],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75608:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i="Deltalake",l={unversionedId:"storage/deltalake",id:"storage/deltalake",title:"Deltalake",description:"An open format storage layer for your lakehouses",source:"@site/docs/02-storage/deltalake.md",sourceDirName:"02-storage",slug:"/storage/deltalake",permalink:"/docs/storage/deltalake",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Data Lakehouses",permalink:"/docs/storage/data-lakehouses"},next:{title:"Apache Hudi",permalink:"/docs/storage/apache-hudi"}},s={},c=[{value:"Why an ACID Delta Lake",id:"why-an-acid-delta-lake",level:3},{value:"Seperation of Compute and Storage Layer",id:"seperation-of-compute-and-storage-layer",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deltalake"},"Deltalake"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An open format storage layer for your lakehouses")),(0,r.kt)("p",null,"Delta Lake  is an open source storage layer that enables building a Lakehouse architecture on top of data lakes. It provides functionalities to data in the data lake that only exist in data warehouses. When combined with cloud storage, Databricks and Delta Lake lead to the formation of a Lakehouse. A Lakehouse simply provides the best of both worlds \u2013 data lakes and data warehouses. In today's world, a Lakehouse provides the same set of capabilities as a traditional data warehouse and at a much lower cost. This is made possible due to cheap cloud storage such as Azure Data Lake/S3, Spark as the processing engine, and data being stored in the Delta Lake format."),(0,r.kt)("p",null,"Delta Lake guarantees data atomicity, consistency, isolation, and durability in the lake. In short, a Delta Lake is ACID compliant. In addition to providing ACID transactions, scalable metadata handling, and more, Delta Lake runs on an existing data lake and is compatible with Apache Spark APIs. Delta Lake also offers unifies streaming and batch data processing on top of existing data lakes, such as S3 and HDFS."),(0,r.kt)("p",null,"There are a few methods of getting started with Delta Lake. Databricks offers notebooks along with compatible Apache Spark APIs to create and manage Delta Lakes."),(0,r.kt)("p",null,"Specifically, Delta Lake offers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ACID transactions on Spark: Serializable isolation levels ensure that readers never see inconsistent data."),(0,r.kt)("li",{parentName:"ul"},"Scalable metadata handling: Leverages Spark distributed processing power to handle all the metadata for petabyte-scale tables with billions of files at ease."),(0,r.kt)("li",{parentName:"ul"},"Streaming and batch unification: A table in Delta Lake is a batch table as well as a streaming source and sink. Streaming data ingest, batch historic backfill, interactive queries all just work out of the box."),(0,r.kt)("li",{parentName:"ul"},"Schema enforcement: Automatically handles schema variations to prevent insertion of bad records during ingestion."),(0,r.kt)("li",{parentName:"ul"},"Time travel: Data versioning enables rollbacks, full historical audit trails, and reproducible machine learning experiments."),(0,r.kt)("li",{parentName:"ul"},"Upserts and deletes: Supports merge, update and delete operations to enable complex use cases like change-data-capture, slowly-changing-dimension (SCD) operations, streaming upserts, and so on.")),(0,r.kt)("p",null,"An open-source storage format that brings ACID transactions to Apache Spark\u2122 and big data workloads."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open format"),": Stored as Parquet format in blob storage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ACID Transactions"),": Ensures data integrity and read consistency with complex, concurrent data pipelines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Schema Enforcement and Evolution"),": Ensures data cleanliness by blocking writes with unexpected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Audit History"),": History of all the operations that happened in the table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Time Travel"),": Query previous versions of the table by time or version number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deletes and upserts"),": Supports deleting and upserting into tables with programmatic APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalable Metadata management"),": Able to handle millions of files are scaling the metadata operations with Spark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unified Batch and Streaming Source and Sink"),": A table in Delta Lake is both a batch table, as well as a streaming source and sink. Streaming data ingest, batch historic backfill, and interactive queries all just work out of the box.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.databricks.com/wp-content/uploads/2022/06/db-247-blog-img-3.png",alt:null})),(0,r.kt)("p",null,"Watch these videos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yumysN3XwbQ"},"https://www.youtube.com/watch?v=yumysN3XwbQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PftRBoqjhZM"},"https://www.youtube.com/watch?v=PftRBoqjhZM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BMO90DI82Dc"},"https://www.youtube.com/watch?v=BMO90DI82Dc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=H5nMHhlh5N0"},"https://www.youtube.com/watch?v=H5nMHhlh5N0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fApTba65Dnk"},"https://www.youtube.com/watch?v=fApTba65Dnk"))),(0,r.kt)("h3",{id:"why-an-acid-delta-lake"},"Why an ACID Delta Lake"),(0,r.kt)("p",null,"There are many advantages to introducing Delta Lake into a modern cloud data architecture. Traditionally, data lakes and Apache Spark are not ACID compliant. Delta Lake introduces this ACID compliance to solve many the following\xa0ACID compliance issues:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Atomicity"),":\xa0",(0,r.kt)("em",{parentName:"li"},"Write either all data or nothing"),". Apache Spark\xa0",(0,r.kt)("em",{parentName:"li"},"save modes"),"\xa0do not utilize any locking and are not atomic. With this, a failed job may leave an incomplete file and may corrupt data. Additionally, a failing job may remove the old file and corrupt the new file. While this seems concerning, Spark does have built-in data frame writer APIs that are not atomic but behave so for append operations. This however does come with performance overhead for use with cloud storage. The currently available Apache Spark save modes include ErrorIfExists, Append, Overwrite, and Ignore."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Consistency"),":\xa0",(0,r.kt)("em",{parentName:"li"},"Data is always in a valid state"),". If the Spark API writer deletes an old file and creates a new one and the operation is not transactional, then there will always be a period of time when the file does not exist between the deletion of the old file and creation of the new. In that scenario, if the overwrite operation fails, this will result in data loss of the old file. Additionally, the new file may not be created. This is a typical Spark overwrite operation issue related to consistency."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Isolation"),":\xa0",(0,r.kt)("em",{parentName:"li"},"Multiple transactions occur independently without interference"),". This means that when writing to a dataset, other concurrent reads or writes on the same dataset should not be impacted by the write operation. Typical transactional databases offer multiple isolation levels, such as read uncommitted, read committed, repeatable read, snapshot, and serializable. While Spark has task- and job-level commits, since it lacks atomicity, it does not have isolation types."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Durability"),":\xa0",(0,r.kt)("em",{parentName:"li"},"Committed data is never lost."),"\xa0When Spark does not correctly implement a commit, then it overwrites all the great durability features offered by cloud storage options and either corrupts and/or loses the data. This violates data\xa0durability.")),(0,r.kt)("h3",{id:"seperation-of-compute-and-storage-layer"},"Seperation of Compute and Storage Layer"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/213930654-e49a4550-0e1d-42e2-9813-344e7728cfec.png",alt:"Evolution from cloud data warehouses to cloud data lakehouses (courtesy of Tomer Shiran)"})))}d.isMDXComponent=!0}}]);