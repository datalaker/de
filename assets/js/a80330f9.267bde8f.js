"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39870],{3905:(a,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>u});var r=e(67294);function l(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function n(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){l(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function i(a,t){if(null==a)return{};var e,r,l=function(a,t){if(null==a)return{};var e,r,l={},o=Object.keys(a);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(l[e]=a[e]);return l}(a,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(l[e]=a[e])}return l}var s=r.createContext({}),c=function(a){var t=r.useContext(s),e=t;return a&&(e="function"==typeof a?a(t):n(n({},t),a)),e},p=function(a){var t=c(a.components);return r.createElement(s.Provider,{value:t},a.children)},d={inlineCode:"code",wrapper:function(a){var t=a.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(a,t){var e=a.components,l=a.mdxType,o=a.originalType,s=a.parentName,p=i(a,["components","mdxType","originalType","parentName"]),k=c(e),u=l,b=k["".concat(s,".").concat(u)]||k[u]||d[u]||o;return e?r.createElement(b,n(n({ref:t},p),{},{components:e})):r.createElement(b,n({ref:t},p))}));function u(a,t){var e=arguments,l=t&&t.mdxType;if("string"==typeof a||l){var o=e.length,n=new Array(o);n[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=a,i.mdxType="string"==typeof a?a:l,n[1]=i;for(var c=2;c<o;c++)n[c]=e[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},48517:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=e(87462),l=(e(67294),e(3905));const o={},n="Lab: Pyspark Basics",i={unversionedId:"foundations/language/pyspark/lab-pyspark-basics/index",id:"foundations/language/pyspark/lab-pyspark-basics/index",title:"Lab: Pyspark Basics",description:"In this lab, we will use the power of PySpark to perform various activities in databricks environment.",source:"@site/docs/01-foundations/language/pyspark/lab-pyspark-basics/index.md",sourceDirName:"01-foundations/language/pyspark/lab-pyspark-basics",slug:"/foundations/language/pyspark/lab-pyspark-basics/",permalink:"/docs/foundations/language/pyspark/lab-pyspark-basics/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681539985,formattedLastUpdatedAt:"Apr 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"PySpark vs Pandas",permalink:"/docs/foundations/language/pyspark/pyspark-vs-pandas"},next:{title:"Lab: Connect AWS to PySpark and build an ETL pipeline",permalink:"/docs/processing/databricks/lab-databricks-pyspark-s3/"}},s={},c=[{value:"Electricity Data processing with PySpark",id:"electricity-data-processing-with-pyspark",level:2},{value:"Read and follow these articles",id:"read-and-follow-these-articles",level:3},{value:"Code",id:"code",level:3},{value:"Pyspark Databricks ETL",id:"pyspark-databricks-etl",level:2},{value:"Sales Orders PySpark",id:"sales-orders-pyspark",level:2},{value:"Databricks Deltalake",id:"databricks-deltalake",level:2}],p={toc:c};function d(a){let{components:t,...o}=a;return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lab-pyspark-basics"},"Lab: Pyspark Basics"),(0,l.kt)("p",null,"In this lab, we will use the power of PySpark to perform various activities in databricks environment."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/3716027562706644/4695044765152887/latest.html"},"M&M Counts")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1448249936481974/4695044765152887/latest.html"},"San Francisco Fire Calls")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1448249936482029/4695044765152887/latest.html"},"SQL on US Flights Dataset")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1448249936482069/4695044765152887/latest.html"},"Spark Data Sources")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1448249936482145/4695044765152887/latest.html"},"Spark SQL & UDFs")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1579681995515196/4695044765152887/latest.html"},"File Formats")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1579681995515243/4695044765152887/latest.html"},"Delta Lake")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1579681995515304/4695044765152887/latest.html"},"Taxi Trip Analysis")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/3114720643048633/4695044765152887/latest.html"},"Movielens Data Analysis")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/3114720643048660/4695044765152887/latest.html"},"MapReduce Practice")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/3114720643048669/4695044765152887/latest.html"},"Data Wrangling with Spark")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1729220346146661/4695044765152887/latest.html"},"Data Lake Schema on Read")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/310144235288371/4695044765152887/latest.html"},"Python vs PySpark")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1473168627488941/4695044765152887/latest.html"},"Weather Forecast Analysis")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/3961935502928289/4695044765152887/latest.html"},"Candy Sales analysis with PySpark"))),(0,l.kt)("h2",{id:"electricity-data-processing-with-pyspark"},"Electricity Data processing with PySpark"),(0,l.kt)("h3",{id:"read-and-follow-these-articles"},"Read and follow these articles"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://ownyourdata.ai/wp/data-processing-with-spark-intro/"},"https://ownyourdata.ai/wp/data-processing-with-spark-intro/")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://ownyourdata.ai/wp/data-processing-with-spark-data-catalog/"},"https://ownyourdata.ai/wp/data-processing-with-spark-data-catalog/")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://ownyourdata.ai/wp/data-processing-with-spark-schema-evolution/"},"https://ownyourdata.ai/wp/data-processing-with-spark-schema-evolution/")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://ownyourdata.ai/wp/data-analysis-electricity-consumption-data/"},"https://ownyourdata.ai/wp/data-analysis-electricity-consumption-data/"))),(0,l.kt)("h3",{id:"code"},"Code"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/acirtep/ginlong-data-processing-spark#ginlong-data-processing-spark"},"https://github.com/acirtep/ginlong-data-processing-spark#ginlong-data-processing-spark")),(0,l.kt)("h2",{id:"pyspark-databricks-etl"},"Pyspark Databricks ETL"),(0,l.kt)("p",null,"Objective: Building an ETL Pipeline with databricks Pyspark and AWS S3"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214513989-fca32e57-e8a7-40c2-a871-a9498b5e4745.svg",alt:"arch drawio"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1729220346146695/4695044765152887/latest.html"},"Notebook")),(0,l.kt)("h2",{id:"sales-orders-pyspark"},"Sales Orders PySpark"),(0,l.kt)("p",null,"In this notebook, you'll use Spark in Databricks to explore data in files. One of the core ways in which you work with data in Spark is to load data into a ",(0,l.kt)("strong",{parentName:"p"},"Dataframe")," object, and then query, filter, and manipulate the dataframe to explore the data it contains."),(0,l.kt)("p",null,"We first download the sales order data and then move it to dbfs file system. Then we load the data into Pyspark dataframe and then apply schema. And then we apply pyspark functions like filter and groupby. "),(0,l.kt)("p",null,"After this, we explore Spark SQL and then plot the charts using matplotlib and seaborn libraries."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/3208697936837428/1828594820839020/4695044765152887/latest.html"},"Notebook")),(0,l.kt)("h2",{id:"databricks-deltalake"},"Databricks Deltalake"),(0,l.kt)("p",null,"Objective: Explore how to use Delta Lake in a Databricks Spark cluster"),(0,l.kt)("p",null,"Delta Lake is an open source project to build a transactional data storage layer for Spark on top of a data lake. Delta Lake adds support for relational semantics for both batch and streaming data operations, and enables the creation of a Lakehouse architecture in which Apache Spark can be used to process and query data in tables that are based on underlying files in the data lake."),(0,l.kt)("p",null,"This lab will take approximately 40 minutes to complete."),(0,l.kt)("p",null,"In this lab, we are exploring various features of deltalake (a lakehouse) that we generally do not get in datalake."),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:e(54483).Z},"Notebook")))}d.isMDXComponent=!0},54483:(a,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/files/databricks-deltalake-3a875d2f7a94ca6b3c2de33aab4c8ab8.dbc"}}]);