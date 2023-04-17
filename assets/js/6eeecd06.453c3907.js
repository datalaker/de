"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={},i="Project: Data Pipeline with Databricks PySpark and Superset",s={unversionedId:"processing/databricks/project-databricks-superset/README",id:"processing/databricks/project-databricks-superset/README",title:"Project: Data Pipeline with Databricks PySpark and Superset",description:"Put on your data engineer hat! In this project, you\u2019ll build a modern, cloud-based, three-layer data Lakehouse. First, you\u2019ll set up your workspace on the Databricks platform, leveraging important Databricks features, before pushing the data into the first two layers of the data lake. Next, using Apache Spark, you\u2019ll build the third layer, used to serve insights to different end-users. Then, you\u2019ll use Delta Lake to turn your existing data lake into a Lakehouse. Finally, you\u2019ll deliver an infrastructure that allows your end-users to perform specific queries, using Apache Superset, and build dashboards on top of the existing data. When you\u2019re done with the projects in this series, you\u2019ll have a complete big data pipeline for a cloud-based data lake\u2014and you\u2019ll understand why the three-layer architecture is so popular.",source:"@site/docs/03-processing/databricks/project-databricks-superset/README.md",sourceDirName:"03-processing/databricks/project-databricks-superset",slug:"/processing/databricks/project-databricks-superset/",permalink:"/docs/processing/databricks/project-databricks-superset/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681583434,formattedLastUpdatedAt:"Apr 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Project: BedBricks",permalink:"/docs/processing/databricks/project-bedbricks/"},next:{title:"Amazon EMR",permalink:"/docs/processing/aws-emr"}},l={},u=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"Setup Preset Account",id:"setup-preset-account",level:2},{value:"From Data Lake to Lakehouse",id:"from-data-lake-to-lakehouse",level:2},{value:"Data Ingestion and Cleaning",id:"data-ingestion-and-cleaning",level:2},{value:"Data Manipulation",id:"data-manipulation",level:2},{value:"Interactive Superset Dashboard",id:"interactive-superset-dashboard",level:2},{value:"Preset Connection String",id:"preset-connection-string",level:3},{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-data-pipeline-with-databricks-pyspark-and-superset"},"Project: Data Pipeline with Databricks PySpark and Superset"),(0,n.kt)("p",null,"Put on your data engineer hat! In this project, you\u2019ll build a modern, cloud-based, three-layer data Lakehouse. First, you\u2019ll set up your workspace on the Databricks platform, leveraging important Databricks features, before pushing the data into the first two layers of the data lake. Next, using Apache Spark, you\u2019ll build the third layer, used to serve insights to different end-users. Then, you\u2019ll use Delta Lake to turn your existing data lake into a Lakehouse. Finally, you\u2019ll deliver an infrastructure that allows your end-users to perform specific queries, using Apache Superset, and build dashboards on top of the existing data. When you\u2019re done with the projects in this series, you\u2019ll have a complete big data pipeline for a cloud-based data lake\u2014and you\u2019ll understand why the three-layer architecture is so popular."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214515854-6d030a57-6acb-4a0a-8d5b-2577adf6ea79.png",alt:"overview1"})),(0,n.kt)("p",null,"You\u2019ll use your data engineering skills to offer your company\u2019s analytics team the necessary tools to analyze external data provided by the World Bank and monitor the change in CO2 emissions from cars sold within the EU. To do so, you\u2019ll first retrieve different datasets from external sources, ingest them into your company\u2019s lakehouse (which you as the data engineer will need to build), and then perform data quality operations on them before offering them to the analytics team in the most efficient format and with the necessary tools to explore the data."),(0,n.kt)("p",null,"Throughout the series, you will get the chance to work on most of the tasks that characterize the work of a data engineer, using Apache Spark (the world\u2019s most widely used distributed processing framework) and Delta Lake (one of the most promising and sophisticated open table formats) to build a cloud-based data lakehouse. The end product will be a fully functioning big data pipeline that processes data and pushes it into the different layers of a three-layer data lake. The data will then feed two different interactive dashboards that are running on Apache Superset, the acclaimed open-source BI platform."),(0,n.kt)("h2",{id:"what-youll-build"},"What you'll build"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You\u2019ll build a modern, cloud-based, three-layer data Lakehouse"),(0,n.kt)("li",{parentName:"ul"},"First, you\u2019ll set up your workspace on the Databricks platform, leveraging important Databricks features, before pushing the data into the first two layers of the data lake"),(0,n.kt)("li",{parentName:"ul"},"Next, using Apache Spark, you\u2019ll build the third layer, used to serve insights to different end-users"),(0,n.kt)("li",{parentName:"ul"},"Then, you\u2019ll use Delta Lake to turn your existing data lake into a Lakehouse"),(0,n.kt)("li",{parentName:"ul"},"Finally, you\u2019ll deliver an infrastructure that allows your end-users to perform specific queries, using Apache Superset, and build dashboards on top of the existing data")),(0,n.kt)("h2",{id:"what-youll-learn"},"What you'll learn"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You\u2019ll have a complete big data pipeline for a cloud-based data lake\u2014and you\u2019ll understand why the three-layer architecture is so popular"),(0,n.kt)("li",{parentName:"ul"},"You will get the chance to work on most of the tasks that characterize the work of a data engineer, using Apache Spark (the world\u2019s most widely used distributed processing framework) and Delta Lake (one of the most promising and sophisticated open table formats) to build a cloud-based data lakehouse"),(0,n.kt)("li",{parentName:"ul"},"The end product will be a fully functioning big data pipeline that processes data and pushes it into the different layers of a three-layer data lake"),(0,n.kt)("li",{parentName:"ul"},"The data will then feed two different interactive dashboards that are running on Apache Superset, the acclaimed open-source BI platform")),(0,n.kt)("h2",{id:"setup-preset-account"},"Setup Preset Account"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://preset.io/"},"https://preset.io/")," and Click on \u201cStart for free\u201d button at the top-right corner. Follow the instructions to create a free account there. You can skip the database connection part, we will connect to the database later."),(0,n.kt)("h2",{id:"from-data-lake-to-lakehouse"},"From Data Lake to Lakehouse"),(0,n.kt)("p",null,"In this part, you will use Delta Lake, an open table format and the cornerstone of Databricks\u2019 lakehouse design, to turn our existing data lake into a lakehouse. You will transform the existing tables into Delta tables, explore the features that Delta Lake offers, and witness firsthand how it handles the scenarios and potential issues previously mentioned."),(0,n.kt)("h2",{id:"data-ingestion-and-cleaning"},"Data Ingestion and Cleaning"),(0,n.kt)("p",null,"Imagine you\u2019re a data engineer working at an enterprise. In this part, you\u2019ll be creating clusters and notebooks, interacting with the Databricks File System (DBFS), and leveraging important Databricks features. You\u2019ll also gain first-hand experience with Apache Spark\u2014the world\u2019s most widely used distributed processing framework\u2014on tasks like reading the input data in CSV and JSON format, filtering, and writing the data to the data lake\u2019s curated layer on DBFS."),(0,n.kt)("h2",{id:"data-manipulation"},"Data Manipulation"),(0,n.kt)("p",null,"Step into the role of a data engineer working at an enterprise. Your task is to build a data lake\u2019s serving layer and ensure that business queries run on it in a matter of seconds. You\u2019ll start with reading cleansed data that\u2019s already sitting in the curated layer. Then you\u2019ll transform it, enrich it, aggregate it, and denormalize it using Apache Spark. When you\u2019re finished, you\u2019ll have multiple output tables that make up the serving layer of the data lake."),(0,n.kt)("h2",{id:"interactive-superset-dashboard"},"Interactive Superset Dashboard"),(0,n.kt)("p",null,"At this point, following the work of the first three projects, we have a fully functioning modern\xa0",(0,n.kt)("em",{parentName:"p"},"lakehouse"),"\xa0that\u2019s ready to be queried to generate insights from its data. Our end users want to leverage this data for two different use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Analytics:"),"\xa0This consists of analyzing data aggregates over a long period of time to discover trends and actionable strategic insights and perform an in-depth analysis of historical data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operations/Monitoring:"),"\xa0This consists of analyzing recently ingested data to immediately detect issues or anomalies and monitor the health of our business in real time.")),(0,n.kt)("p",null,"As a data engineer, you\u2019re expected to deliver the necessary infrastructure to perform such queries and build dashboards on top of the existing data. In this project, you will use Preset, the SaaS platform that offers a managed version of Apache Superset, to run queries on the lakehouse (via a Databricks cluster) and build two separate dashboards for our use cases."),(0,n.kt)("p",null,"One of the main advantages of the lakehouse design is that we can rely on it for a wide range of needs and scenarios, including the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both analytical and operational queries can be performed directly on the lakehouse. Unlike the older data lake design, where we had to maintain data warehouses and data marts on top of the data lake for efficient interactive queries, the lakehouse can be queried directly for various types of use cases thanks to the performance optimizations provided by Delta Lake."),(0,n.kt)("li",{parentName:"ul"},"Delta tables can be used for both batch and streaming ingestion. This means that the same table on our lakehouse can be leveraged for analytical and operational queries.")),(0,n.kt)("p",null,"Throughout the project, you will leverage these characteristics of the lakehouse to query it directly and generate insights from its data."),(0,n.kt)("h3",{id:"preset-connection-string"},"Preset Connection String"),(0,n.kt)("h2",{id:"step-1"},"Step 1"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214515864-0ce1315e-c390-4b55-a613-4e862aa27d04.png",alt:"preset-setup-1"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"databricks+pyhive://sprsag%[40gmail.com](http://40gmail.com/):XXXXXXXXXX@community.cloud.databricks.com:443/")),(0,n.kt)("h2",{id:"step-2"},"Step 2"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214515871-0d98f065-dcbc-4c7f-b7f4-dc72e1dee789.png",alt:"preset-setup-2"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{"connect_args":{"http_path":"sql/protocolv1/o/1524843318812788/0720-154817-fsgnxh2u"}}')))}p.isMDXComponent=!0}}]);