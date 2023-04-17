"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16272],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return t?n.createElement(g,o(o({ref:a},c),{},{components:t})):n.createElement(g,o({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=u;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<s;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25533:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const s={},o="Data Engineering Basics",r={unversionedId:"foundations/basics/de-basics",id:"foundations/basics/de-basics",title:"Data Engineering Basics",description:"What is Data Engineering?",source:"@site/docs/01-foundations/basics/de-basics.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/de-basics",permalink:"/docs/foundations/basics/de-basics",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Data Pipelines",permalink:"/docs/foundations/basics/data-pipelines"}},l={},d=[{value:"What is Data Engineering?",id:"what-is-data-engineering",level:2},{value:"How It Works?",id:"how-it-works",level:2},{value:"Landscape",id:"landscape",level:2},{value:"Role of a Data Engineer",id:"role-of-a-data-engineer",level:2},{value:"Skills You Need",id:"skills-you-need",level:2},{value:"Key Concepts",id:"key-concepts",level:2}],c={toc:d};function p(e){let{components:a,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-engineering-basics"},"Data Engineering Basics"),(0,i.kt)("h2",{id:"what-is-data-engineering"},"What is Data Engineering?"),(0,i.kt)("p",null,"There are tons of definitions but you have to stick to one and understand it deeply. Here is one such good definition:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/213917818-65a2146a-5eb3-4818-861f-5bad0155b8d0.svg",alt:null})),(0,i.kt)("p",null,"Data engineers have a key role in a modern data organization. It is a multidisciplinary role, so it needs knowledge of programming, data transformation, and mathematics, among other areas. To support these important activities, there are several open source and cloud tools to help data engineers perform their day-to-day operations."),(0,i.kt)("p",null,"The following are some\xa0examples of tasks that are the responsibility of the data engineer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Developing data ingestion pipelines"),(0,i.kt)("li",{parentName:"ul"},"Setting connectivity standards in data sources with proper security and latency"),(0,i.kt)("li",{parentName:"ul"},"Maintaining data pipelines creating scripts for data structures with versioning control"),(0,i.kt)("li",{parentName:"ul"},"Applying modern data exploration languages and libraries to generate insights"),(0,i.kt)("li",{parentName:"ul"},"Supporting database administrators in the necessary analytical database maintenance routines"),(0,i.kt)("li",{parentName:"ul"},"Modeling and implementing data consumption structures aligned with the business area needs"),(0,i.kt)("li",{parentName:"ul"},"Supporting the automation of data analysis processes, model creation, and databases (DataOps)")),(0,i.kt)("h2",{id:"how-it-works"},"How It Works?"),(0,i.kt)("p",null,"Make sure you watch this short 15-mins video, as it explains a lot of concepts with great examples:"),(0,i.kt)("iframe",{width:"80%",height:"280",src:"https://www.youtube.com/embed/qWru-b6m030",title:"How Data Engineering Works",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"landscape"},"Landscape"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(43226).Z,width:"742",height:"561"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For more info - ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/bFC1MBijB-c"},"https://youtu.be/bFC1MBijB-c"))),(0,i.kt)("h2",{id:"role-of-a-data-engineer"},"Role of a Data Engineer"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/213917822-612d86ce-85f9-4565-8f3c-47405ae57e4c.svg",alt:"img"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Big Data Engineers design and build complex data pipelines and have expert knowledge in coding using Python, etc. These professionals collaborate and work closely with data scientists to run the code using various tools such as the Hadoop ecosystem, etc."),(0,i.kt)("li",{parentName:"ul"},"Data Architects are typically the database administrators and are responsible for data management. These professionals have in-depth knowledge in databases, and they also help in business operations."),(0,i.kt)("li",{parentName:"ul"},"Business Intelligence Engineers are skilled in data warehousing and create dimension models for loading data for large scale enterprise reporting solutions. These professionals are experts in using ELT tools and SQL."),(0,i.kt)("li",{parentName:"ul"},"Data Warehouse Engineers are responsible for looking after the ETL processes, performance administration, dimensional design, etc. These professionals take care of the full back-end development and dimensional design of the table structure."),(0,i.kt)("li",{parentName:"ul"},"Technical Architects design and define the overall structure of a system with an aim to improve the business of an organization. The job role of these professionals involves breaking large projects into manageable pieces.")),(0,i.kt)("h2",{id:"skills-you-need"},"Skills You Need"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"SQL")," - Querying data using SQL is an essential skill for anyone who works with data. Listed as one of the top technologies on data engineer job listings, SQL is a standardized programming language used to manage relational databases (not exclusively) and perform various operations on the data in them. Data Engineering using Spark SQL."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Python Programming")," - As a data engineer you'll be writing a lot of code to handle various business cases such as ETLs, data pipelines, etc. The de facto standard language for data engineering is Python (not to be confused with R or nim that are used for data science, they have no use in data engineering). Python helps data engineers to build efficient data pipelines as many data engineering tools use Python in the backend. Moreover, various tools in the market are compatible with Python and allow data engineers to integrate them into their everyday tasks by simply learning Python."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cloud Computing")," - Data engineers are expected to be able to process and handle data efficiently. Many companies prefer the cloud solutions to the on-premise ones. Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services. Data engineers need to meet various requirements to build data pipelines. This is where AWS data engineering tools come into the scenario. AWS data engineering tools make it easier for data engineers to build AWS data pipelines, manage data transfer, and ensure efficient data storage."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Shell Scripting")," - Unix machines are used everywhere these days and as a data engineer, they are something we interact with every single day. Understanding common shell tools and how to use them to manipulate data will increase your flexibility and speed when dealing with day to day data activities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Relational and NoSQL Databases")," - RDBMS are the basic building blocks for any application data. A data engineer should know how to design and architect their structures, and learn about concepts that are related to them. NoSQL is a term for any non-relational database model: key-value, document, column, graph, and more. A basic acquaintance is required, but going deeper into any model depends on the job. Column databases are a kind of nosql databases. They deserve their own section as they are essential for the data engineer as working with Big Data online (as opposed to offline batching) usually requires a columnar back-end."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Data Lakes and Warehouses")," - Understand the concepts behind data warehouses and familiarize youself with common data warehouse solutions. Also make yourself famliar with data lakes and lakehouse concepts like medallion architecture and delta format."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"OLAP Data Modeling")," - OLAP (analytical) databases (used in data warehouses) data modeling concepts, modeling the data correctly is essential for a functioning data warehouse."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Batch and Stream Data Processing")," - Batch Data processing using Python, SQL and Spark. Everyone should know how it works, but going deep into the details and operations are recommended only if necessary. Stream Data Processing is the data processing on the fly. Suggested to get a good grasp of the subject and then dive deep into a specific tool like Kafka, Spark, Flink, etc."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Pipeline / Workflow Management")," - Data engineers should have experience with data pipeline and ETL (extract, transform, load) tools, such as Apache NiFi, Apache Kafka, Apache Airflow, Talend etc. These tools are used to build data pipelines that collect, store, and process data. Airflow is considered to be the defacto standard, but any understanding of DAGs - directed acyclical graphs for tasks will be good."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Spark and Distributed Computing")," - Data engineers should understand distributed systems, such as how data is stored and processed across multiple machines. This knowledge is essential for designing and implementing big data systems that can handle large amounts of data.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Soft skills")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Strong analytical and problem-solving skills: Data engineers should have strong analytical and problem-solving skills, as they are responsible for designing and implementing data pipelines, troubleshooting issues, and ensuring data quality."),(0,i.kt)("li",{parentName:"ol"},"Understanding of data governance and security: Data engineers should be familiar with the best practices and how to implement them in the data pipeline, such as data encryption, access control, and data masking."),(0,i.kt)("li",{parentName:"ol"},"Strong communication and collaboration skills: Data engineers often work with cross-functional teams and must be able to communicate effectively with data scientists, analysts, internal and external customers and other stakeholders.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Other Skills")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Developer tools - Git, VSCode and Jupyter Notebook"),(0,i.kt)("li",{parentName:"ol"},"DevOps - Infra as Code, Container Orchestration, API Management, CICD Pipelines"),(0,i.kt)("li",{parentName:"ol"},"Basic ML/AI Skills - Machine Learning Basics, NLP & Computer Vision, Recommender Systems, MLOps Pipelines")),(0,i.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Data Warehousing:\xa0The process of collecting, storing, and managing large sets of data in a central repository for reporting and analysis. Data warehousing allows organizations to store and access large amounts of data in a structured and efficient manner. This enables users to easily query and extract insights from the data, and it also supports the creation of data-driven reports and dashboards."),(0,i.kt)("li",{parentName:"ol"},"Data Modeling:\xa0The process of designing and creating a conceptual representation of data and its relationships, typically using diagrams or other tools. Data modeling is an important step in the data warehousing process, as it helps to ensure that data is stored in a logical and consistent manner. This makes it easier for users to understand and navigate the data, and it also supports the creation of efficient data queries."),(0,i.kt)("li",{parentName:"ol"},"Data Integration:\xa0The process of combining data from different sources into a single, unified view. Data integration is a critical step in the data warehousing process, as it allows organizations to combine data from different systems and sources into a single repository. This enables users to access and analyze data from multiple sources in a single location, and it also supports the creation of data-driven reports and dashboards."),(0,i.kt)("li",{parentName:"ol"},"Data Pipelines:\xa0The process of creating a series of steps to automatically extract, transform, and load data from one system to another. Data pipelines are an essential component of data warehousing and integration, as they automate the process of moving data from one system to another. This reduces the need for manual data entry and improves the accuracy and efficiency of data processing."),(0,i.kt)("li",{parentName:"ol"},"Data Quality:\xa0The process of ensuring that data is accurate, complete, and relevant, and that it meets the needs of the users and systems that rely on it. Data quality is a critical consideration for data engineers, as it helps to ensure that data is usable and valuable for decision making. This includes tasks such as data validation, data cleaning, and data standardization."),(0,i.kt)("li",{parentName:"ol"},"Data Governance:\xa0The process of creating policies and procedures to manage data throughout its lifecycle, including data security and compliance. Data governance is an important consideration for data engineers, as it helps to ensure that data is used and stored in a secure and compliant manner. This includes tasks such as data security, data privacy, and data compliance."),(0,i.kt)("li",{parentName:"ol"},"Data Processing:\xa0The process of applying algorithms and other methods to extract insights and value from data. Data processing is a critical step in the data warehousing process, as it allows organizations to extract insights and value from their data. This includes tasks such as data analysis, data mining, and machine learning."),(0,i.kt)("li",{parentName:"ol"},"Data Visualization:\xa0The process of creating graphical representations of data to help users understand and explore the data. Data visualization is an important step in the data warehousing process, as it allows users to easily explore and understand their data. This includes creating charts, graphs, and other visualizations that make it easy to see patterns and trends in the data.")))}p.isMDXComponent=!0},43226:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/bigpicture.drawio-27a9320d9ac6c4ba9a252071c1d2eb8d.svg"}}]);