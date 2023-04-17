"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68493],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?i.createElement(h,s(s({ref:t},p),{},{components:a})):i.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={},s="Lab: Real Time Apache Log Analytics with Kinesis",o={unversionedId:"processing/lab-kinesis-apache-logs/README",id:"processing/lab-kinesis-apache-logs/README",title:"Lab: Real Time Apache Log Analytics with Kinesis",description:"Objective",source:"@site/docs/03-processing/lab-kinesis-apache-logs/README.md",sourceDirName:"03-processing/lab-kinesis-apache-logs",slug:"/processing/lab-kinesis-apache-logs/",permalink:"/docs/processing/lab-kinesis-apache-logs/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Amazon Kinesis",permalink:"/docs/processing/aws-kinesis"},next:{title:"Lab: Real-Time Clickstream Anomaly Detection with Kinesis",permalink:"/docs/processing/lab-kinesis-clickstream-anomaly/"}},l={},c=[{value:"Objective",id:"objective",level:2},{value:"Direct PUT Pipeline",id:"direct-put-pipeline",level:2},{value:"Send via Kinesis Data Streams",id:"send-via-kinesis-data-streams",level:2},{value:"Anomaly Detection with Kinesis and Glue Jobs",id:"anomaly-detection-with-kinesis-and-glue-jobs",level:2},{value:"Log analytics with Kinesis Firehose",id:"log-analytics-with-kinesis-firehose",level:2},{value:"Streaming ETL using Kinesis Firehose",id:"streaming-etl-using-kinesis-firehose",level:2},{value:"Optimize data streaming for storage and performance",id:"optimize-data-streaming-for-storage-and-performance",level:2},{value:"Files",id:"files",level:2},{value:"Notebooks",id:"notebooks",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lab-real-time-apache-log-analytics-with-kinesis"},"Lab: Real Time Apache Log Analytics with Kinesis"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"Build ETL pipelines with Kinesis processing Apache Logs data"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214810555-c3637a3c-7391-4076-892e-437e3219810c.png",alt:null})),(0,n.kt)("h2",{id:"direct-put-pipeline"},"Direct PUT Pipeline"),(0,n.kt)("p",null,"Direct PUT is a method to send data directly from the clients to Kinesis Data Firehose. In this part, you'll create a Firehose Delivery Stream and will use a script to send data to Firehose with Direct PUT using AWS SDK for Python (boto3). Firehose receives the records and delivers them to S3 into a configured bucket/folder and partitions the incoming records based on the their arrival date and time."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the Kinesis Firehose Delivery Stream"),(0,n.kt)("li",{parentName:"ol"},"Send the data using Boto3 ",(0,n.kt)("inlineCode",{parentName:"li"},"firehose")," client"),(0,n.kt)("li",{parentName:"ol"},"Check the ingested data in S3")),(0,n.kt)("h2",{id:"send-via-kinesis-data-streams"},"Send via Kinesis Data Streams"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create Kinesis Data Stream"),(0,n.kt)("li",{parentName:"ol"},"Create Firehose Delivery Stream"),(0,n.kt)("li",{parentName:"ol"},"Set up Amazon Kinesis Data Generator"),(0,n.kt)("li",{parentName:"ol"},"Check the ingested data in S3")),(0,n.kt)("h2",{id:"anomaly-detection-with-kinesis-and-glue-jobs"},"Anomaly Detection with Kinesis and Glue Jobs"),(0,n.kt)("p",null,"In this module, you will learn how to ingest, process, and consume streaming data using AWS serverless services such as Kinesis Data Streams, Glue, S3, and Athena. To simulate the data streaming input, we will use Kinesis Data Generator (KDG)."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214810281-014f57ff-ed16-4bf5-89b7-2c473e583aaf.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the Infra by using ",(0,n.kt)("inlineCode",{parentName:"li"},"./KinesisGlueETL/template.yml")," template"),(0,n.kt)("li",{parentName:"ol"},"Set up the Kinesis Stream"),(0,n.kt)("li",{parentName:"ol"},"Create table for Kinesis stream source in the glue data catalog"),(0,n.kt)("li",{parentName:"ol"},"Create and trigger the glue streaming job"),(0,n.kt)("li",{parentName:"ol"},"Trigger the streaming data from KDG"),(0,n.kt)("li",{parentName:"ol"},"Verify the glue stream Job"),(0,n.kt)("li",{parentName:"ol"},"Create Glue crawler for the transformed data"),(0,n.kt)("li",{parentName:"ol"},"Trigger the abnormal transaction data from KDG"),(0,n.kt)("li",{parentName:"ol"},"Detect abnormal transactions using Ad-hoc query from Athena")),(0,n.kt)("h2",{id:"log-analytics-with-kinesis-firehose"},"Log analytics with Kinesis Firehose"),(0,n.kt)("p",null,"Log analytics is a use case that allows you to analyze log data from websites, mobile devices, servers, sensors, and more for a wide variety of applications such as security event monitoring, digital marketing, application monitoring, fraud detection, ad tech, gaming, and IoT. In this lab, you will learn how to ingest and deliver Apache logs to Amazon S3 using Amazon Kinesis Data Firehose without managing any infrastructure. You can then use Amazon Athena to query log files to understand access patterns and web site performance issues."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214810320-b27f4355-6f05-4f31-8b1c-4ef8a7b31983.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the Infra by using ",(0,n.kt)("inlineCode",{parentName:"li"},"./LogAnalyticsFirehose/template.yml")," template"),(0,n.kt)("li",{parentName:"ol"},"Send Apache access logs to Kinesis Firehose"),(0,n.kt)("li",{parentName:"ol"},"Check the ingested data in S3"),(0,n.kt)("li",{parentName:"ol"},"Analyze the data in Athena")),(0,n.kt)("h2",{id:"streaming-etl-using-kinesis-firehose"},"Streaming ETL using Kinesis Firehose"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214810237-e3dc797d-4924-4e6c-b55c-6d66e7f89914.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the Infra by using ",(0,n.kt)("inlineCode",{parentName:"li"},"./FirehoseKinesisStreamETL/template.yml")," template"),(0,n.kt)("li",{parentName:"ol"},"Send Apache access logs to Kinesis Firehose"),(0,n.kt)("li",{parentName:"ol"},"Check the transformed data in S3"),(0,n.kt)("li",{parentName:"ol"},"Analyze the data in Athena")),(0,n.kt)("h2",{id:"optimize-data-streaming-for-storage-and-performance"},"Optimize data streaming for storage and performance"),(0,n.kt)("p",null,"While Apache access logs can provide insights into web applicaton usage, analyzing log files can be challenging considering the volume of data that a busy web application can generate. The queries you run on JSON data will become slower with the increasing data volumes. We can address this issue by converting the JSON input data into Apache Parquet or Apache ORC . Parquet and ORC are columnar data formats that save space and enable faster queries compared to row-oriented formats like JSON. Amazon Kinesis Data Firehose can convert the format of your input data from JSON to Apache Parquet or Apache ORC before storing the data in Amazon S3."),(0,n.kt)("p",null,"In this module, we will show you how you can convert the incoming tab delimited files into JSON using AWS Lambda function and then use record format conversion feature of Firehose to covert the JSON data into Parquet format before sending it to S3. We will use AWS Glue to store metadata. Finally, we query Parquet formatted data using Amazon Athena."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214810344-9c52a0b6-a254-4738-8850-098dd767f68e.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the Infra by using ",(0,n.kt)("inlineCode",{parentName:"li"},"./FirehoseKinesisStreamETLParquet/template.yml")," template"),(0,n.kt)("li",{parentName:"ol"},"Send Apache access logs to Kinesis Firehose"),(0,n.kt)("li",{parentName:"ol"},"Check the ingested data in S3"),(0,n.kt)("li",{parentName:"ol"},"Run the Crawler"),(0,n.kt)("li",{parentName:"ol"},"Analyze the Glue table"),(0,n.kt)("li",{parentName:"ol"},"Querying Real Time Data")),(0,n.kt)("h2",{id:"files"},"Files"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-kinesis-apache-logs/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [8.1K]  01-sa-kinesis-data-firehose.ipynb\n\u251c\u2500\u2500 [3.5K]  02-sa-kinesis-streaming-etl.ipynb\n\u251c\u2500\u2500 [4.4K]  03-sa-kinesis-log-analytics.ipynb\n\u251c\u2500\u2500 [4.2K]  04-sa-kinesis-etl-optimized.ipynb\n\u251c\u2500\u2500 [ 16K]  05-sa-kinesis-etl-glue.ipynb\n\u251c\u2500\u2500 [ 11K]  FirehoseKinesisStreamETL\n\u2502   \u251c\u2500\u2500 [6.1K]  datagen.yml\n\u2502   \u2514\u2500\u2500 [4.6K]  template.yml\n\u251c\u2500\u2500 [ 23K]  FirehoseKinesisStreamETLParquet\n\u2502   \u251c\u2500\u2500 [6.1K]  datagen.yml\n\u2502   \u251c\u2500\u2500 [8.1K]  template-ref.yml\n\u2502   \u2514\u2500\u2500 [8.2K]  template-sparsh.yml\n\u251c\u2500\u2500 [ 18K]  KinesisGlueETL\n\u2502   \u2514\u2500\u2500 [ 18K]  template.yml\n\u251c\u2500\u2500 [8.1K]  LogAnalyticsFirehose\n\u2502   \u251c\u2500\u2500 [6.1K]  datagen.yml\n\u2502   \u2514\u2500\u2500 [1.9K]  template.yml\n\u251c\u2500\u2500 [1.1K]  Makefile\n\u2514\u2500\u2500 [4.7K]  README.md\n\n 102K used in 4 directories, 15 files\n")),(0,n.kt)("h2",{id:"notebooks"},"Notebooks"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/03-processing/lab-kinesis-apache-logs/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}m.isMDXComponent=!0}}]);