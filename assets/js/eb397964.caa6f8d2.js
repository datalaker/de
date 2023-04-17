"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43181],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>p});var i=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),c=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),p=n,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return t?i.createElement(h,s(s({ref:a},u),{},{components:t})):i.createElement(h,s({ref:a},u))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93298:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(87462),n=(t(67294),t(3905));const r={},s="Databricks Case Studies",o={unversionedId:"system-design/databricks-case-studies",id:"system-design/databricks-case-studies",title:"Databricks Case Studies",description:"Data teams across the world are using Databricks to solve the toughest data problems. Every Databricks success story brings a unique set of challenges and new learning for architects and data professionals. Databricks can be used as a transformation layer, a real-time streaming engine, or a solution for machine learning and advanced analytics. In this note, we will look at several real-world case study examples and learn how Databricks is used to help drive innovation across various industries around the world.",source:"@site/docs/system-design/databricks-case-studies.md",sourceDirName:"system-design",slug:"/system-design/databricks-case-studies",permalink:"/docs/system-design/databricks-case-studies",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"System Design Examples",permalink:"/docs/system-design/examples"},next:{title:"Cloud Computing Basics",permalink:"/docs/foundations/cloud/cloud-basics"}},l={},c=[{value:"Learning case studies from the manufacturing industry",id:"learning-case-studies-from-the-manufacturing-industry",level:2},{value:"Case study 1 -- leading automobile manufacturing company",id:"case-study-1----leading-automobile-manufacturing-company",level:3},{value:"Case study 2 -- international automobile manufacturing giant",id:"case-study-2----international-automobile-manufacturing-giant",level:3},{value:"Case study 3 -- graph search in a chemical corporate firm",id:"case-study-3----graph-search-in-a-chemical-corporate-firm",level:3},{value:"Case study 4 -- real-time loyalty engine for a leading medical equipment manufacturer",id:"case-study-4----real-time-loyalty-engine-for-a-leading-medical-equipment-manufacturer",level:3},{value:"Learning case studies from the media and entertainment industry",id:"learning-case-studies-from-the-media-and-entertainment-industry",level:2},{value:"Case study 5 -- HD Insights to Databricks migration for a media giant",id:"case-study-5----hd-insights-to-databricks-migration-for-a-media-giant",level:3},{value:"Learning case studies from the retail and FMCG industry",id:"learning-case-studies-from-the-retail-and-fmcg-industry",level:2},{value:"Case study 6 -- real-time analytics using IoT Hub for a retail giant",id:"case-study-6----real-time-analytics-using-iot-hub-for-a-retail-giant",level:3},{value:"Learning case studies from the pharmaceutical industry",id:"learning-case-studies-from-the-pharmaceutical-industry",level:2},{value:"Case study 7 -- pricing analytics for a pharmaceutical company",id:"case-study-7----pricing-analytics-for-a-pharmaceutical-company",level:3},{value:"Learning case studies from the e-commerce industry",id:"learning-case-studies-from-the-e-commerce-industry",level:2},{value:"Case study 8 -- migrating interactive analytical apps from Redshift to Postgres",id:"case-study-8----migrating-interactive-analytical-apps-from-redshift-to-postgres",level:3},{value:"Learning case studies from the logistics and supply chain industry",id:"learning-case-studies-from-the-logistics-and-supply-chain-industry",level:2},{value:"Case study 9 -- accelerating intelligent insights with tailored big data analytics",id:"case-study-9----accelerating-intelligent-insights-with-tailored-big-data-analytics",level:3},{value:"Summary",id:"summary",level:2}],u={toc:c};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"databricks-case-studies"},"Databricks Case Studies"),(0,n.kt)("p",null,"Data teams across the world are using Databricks to solve the toughest data problems. Every Databricks success story brings a unique set of challenges and new learning for architects and data professionals. Databricks can be used as a transformation layer, a real-time streaming engine, or a solution for machine learning and advanced analytics. In this note, we will look at several real-world case study examples and learn how Databricks is used to help drive innovation across various industries around the world."),(0,n.kt)("p",null,"In this note, we will learn about use cases from the following industries:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learning case studies from the manufacturing industry"),(0,n.kt)("li",{parentName:"ul"},"Learning case studies from the media and entertainment industry"),(0,n.kt)("li",{parentName:"ul"},"Learning case studies from the retail and FMCG industry"),(0,n.kt)("li",{parentName:"ul"},"Learning case studies from the pharmaceutical industry"),(0,n.kt)("li",{parentName:"ul"},"Learning case studies from the e-commerce industry"),(0,n.kt)("li",{parentName:"ul"},"Learning case studies from the logistics and supply chain industry")),(0,n.kt)("p",null,"Let's begin with the case studies from the manufacturing industry."),(0,n.kt)("h2",{id:"learning-case-studies-from-the-manufacturing-industry"},"Learning case studies from the manufacturing industry"),(0,n.kt)("p",null,"Data and statistical\xa0analysis help manufacturing organizations make accurate decisions and streamline processes. This makes manufacturing processes become more efficient and prevents unwanted losses for the organizations."),(0,n.kt)("h3",{id:"case-study-1----leading-automobile-manufacturing-company"},"Case study 1 -- leading automobile manufacturing company"),(0,n.kt)("p",null,"An organization was\xa0looking for a cloud-scale analytics platform to support growing\xa0",(0,n.kt)("strong",{parentName:"p"},"online analytical processing"),"\xa0(",(0,n.kt)("strong",{parentName:"p"},"OLAP"),") requirements, a modernized visualization capability to support business intelligence needs, and advanced\xa0analytical and\xa0",(0,n.kt)("strong",{parentName:"p"},"artificial intelligence"),"\xa0(",(0,n.kt)("strong",{parentName:"p"},"AI"),") solutions for existing data."),(0,n.kt)("p",null,"The proposed solution architecture was as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data from the Oracle database and flat files was extracted using Azure Data Factory and loaded into Azure Data Lake."),(0,n.kt)("li",{parentName:"ul"},"Azure Databricks was used to transform the historical data. Then, the data would be loaded into the Azure Synapse Data Warehouse."),(0,n.kt)("li",{parentName:"ul"},"A lead scoring system was built using Azure Databricks for predictive analytics."),(0,n.kt)("li",{parentName:"ul"},"Data modeling was performed in Power BI, and several reports and dashboards were built using the historical and predicted data.")),(0,n.kt)("p",null,"The solution\xa0architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824377-b7ed8bff-881f-4a64-b264-68e33b9c887e.jpg",alt:"B17782_08_01"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the leading automobile manufacturing company"),(0,n.kt)("p",null,"Next, we will learn about another automobile manufacturing case study."),(0,n.kt)("h3",{id:"case-study-2----international-automobile-manufacturing-giant"},"Case study 2 -- international automobile manufacturing giant"),(0,n.kt)("p",null,"A automobile manufacturing giant faced several challenges in its data journey. They were previously using an on-premises SQL Server that had performance limitations, leading to access to refreshed data being reduced. Other significant issues that were faced by the organization included scalability issues, the absence of real-time data analytics, lower utilization of Power BI premium features, and limited self-service analytics. The proposed solution architecture was as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data from\xa0Microsoft Dynamics 365 and the on-premises database was pushed to Azure Data Lake."),(0,n.kt)("li",{parentName:"ul"},"Azure Databricks was used for parallel and in-memory data cleaning and massaging."),(0,n.kt)("li",{parentName:"ul"},"A data model was\xa0built using\xa0",(0,n.kt)("strong",{parentName:"li"},"Azure Synapse Analytics"),", thereby helping to access data with minimal data preparation activities and an efficient mechanism to manage large volumes of data."),(0,n.kt)("li",{parentName:"ul"},"Power BI reports and dashboards were built on top of the data in Azure Synapse Analytics.")),(0,n.kt)("p",null,"The solution architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824387-1adf3ad4-a827-4e2c-9284-9ca4d5a99812.jpg",alt:"B17782_08_02"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the international automobile manufacturing giant"),(0,n.kt)("p",null,"Next, we will learn about a chemical corporate case study."),(0,n.kt)("h3",{id:"case-study-3----graph-search-in-a-chemical-corporate-firm"},"Case study 3 -- graph search in a chemical corporate firm"),(0,n.kt)("p",null,"A chemical\xa0corporate firm was having an issue with the chemical composition of mixtures and products and their test results. They were also struggling with the sales data of a particular chemical. The scenario was focused on querying data and information for a UK-based firm that stores production data in various stages and forms that have complex parent-child relationships. The major task was to create metadata and relationships in the data so that it could be queried using a graph database, without utilizing much of its compute power, as well within the time constraint of 5 seconds. The proposed solution architecture was as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The data from CSV files and the real-time feed from Azure Event Hubs were imported, cleaned, and transformed using Azure Databricks."),(0,n.kt)("li",{parentName:"ul"},"After forming relationships and transforming data into graphs in Azure Databricks, data was pushed into Azure Cosmos DB."),(0,n.kt)("li",{parentName:"ul"},'The data was queried using the Gremlin API of Azure Cosmos Graph and questions such as "',(0,n.kt)("em",{parentName:"li"},"In the last 3 years, who did we sell materials to and in what quantity?"),'" and "',(0,n.kt)("em",{parentName:"li"},"What products contain chemical X or its derived chemical and in what quantity?"),'" were answered.'),(0,n.kt)("li",{parentName:"ul"},"Power BI was used to visualize this real-time streaming data for recording and information scoring purposes.")),(0,n.kt)("p",null,"The solution architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824391-abf2761f-b9b8-41d3-9210-afaa13cc7519.jpg",alt:"B17782_08_03_new"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the chemical corporate firm"),(0,n.kt)("p",null,"Next, we will learn\xa0about a case study from a leading medical equipment manufacturer."),(0,n.kt)("h3",{id:"case-study-4----real-time-loyalty-engine-for-a-leading-medical-equipment-manufacturer"},"Case study 4 -- real-time loyalty engine for a leading medical equipment manufacturer"),(0,n.kt)("p",null,"This case study is about capturing customer behaviors and calculating loyalty points and tiers for a customer in near-real time. There were about five different sources of data where these behaviors were tracked that needed to be pulled into\xa0",(0,n.kt)("strong",{parentName:"p"},"Azure Data Lake"),"\xa0in real time, calculations\xa0done and stored (history tracking enabled), and then the calculated information (summary and details) was passed to a data hub (Cosmos DB) that would eventually be consumed by the presentation layer."),(0,n.kt)("p",null,"The idea was to deliver this on the Azure platform with Azure Databricks being the real-time processing engine. Currently, the engine is live with one source of behavior -- that is,\xa0",(0,n.kt)("em",{parentName:"p"},"Salesforce"),"\xa0-- where the real-time orders get processed based on the rule criteria where the points are allocated. The engine is highly configurable, which means that adding a new source, rule, or behavior will not affect the code or need any code changes. The in-memory rule parser was designed to parse any rule criteria over the incoming data efficiently."),(0,n.kt)("p",null,"The solution\xa0architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824400-9b17cc14-a5bf-4aa5-8ada-0f80dd02b554.jpg",alt:"B17782_08_04_new"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the leading medical equipment manufacturer"),(0,n.kt)("p",null,"Next, we will learn about a case study from the media and entertainment industry."),(0,n.kt)("h2",{id:"learning-case-studies-from-the-media-and-entertainment-industry"},"Learning case studies from the media and entertainment industry"),(0,n.kt)("p",null,"Data plays a\xa0crucial role for media and entertainment organizations as it helps them understand viewer behavior and identify the true market value of the content being shared. This helps in improving the quality of content being delivered and at the same time opens up new monetization avenues for the production houses."),(0,n.kt)("h3",{id:"case-study-5----hd-insights-to-databricks-migration-for-a-media-giant"},"Case study 5 -- HD Insights to Databricks migration for a media giant"),(0,n.kt)("p",null,"In this case study, the prime requirement of the organization was processing and number crunching datasets that were 2-3 TB in size every day. This was required to perform analytics on on-demand advertising video service's user data to generate reports and dashboards for the marketing team. Also, the organization was not able to automate\xa0the\xa0",(0,n.kt)("strong",{parentName:"p"},"extract, transform, and load"),"\xa0(",(0,n.kt)("strong",{parentName:"p"},"ETL"),") process of their web and mobile platform viewer's data. This ETL process was being executed using Azure HD Insights. Moreover, managing HD Insights was an operational overhead. Besides this, they were also interested in performance and cost optimization for their ETL jobs."),(0,n.kt)("p",null,"Migrating ETL workloads from HD Insights to Azure Databricks helped reduce costs by 26%. Azure Databricks, being a fully managed service, eliminated the operational overhead of managing the platform, therefore increasing productivity. Databricks' seamless integration with the Azure ecosystem helped in automating the processes using Azure Data Factory."),(0,n.kt)("p",null,"Caching data within Delta Lake helped to provide the much-needed acceleration of queries. Also, managing Spark clusters with auto-scaling and decoupling compute and storage helped to simplify the organization's infrastructure and further optimize operational costs. The migration from Hadoop to Databricks delivered significant value by reducing the cost of failure, increasing processing speeds, and simplifying data exploration for ad hoc analytics."),(0,n.kt)("p",null,"The complete customer success story can be read here:\xa0",(0,n.kt)("a",{parentName:"p",href:"https://databricks.com/customers/viacom18"},"https://databricks.com/customers/viacom18"),". The solution architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824404-a378658b-688a-41bf-a18b-9781f76e0912.jpg",alt:"B17782_08_05"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the media giant"),(0,n.kt)("p",null,"Next, we will\xa0learn about a case study from the retail and FMCG industry."),(0,n.kt)("h2",{id:"learning-case-studies-from-the-retail-and-fmcg-industry"},"Learning case studies from the retail and FMCG industry"),(0,n.kt)("p",null,"Data is more\xa0important than ever for the retail and FMCG industry. It can be very helpful for maintaining a lean inventory. In addition, data is critical for optimizing the prices of products on demand. Also, a data-driven approach can boost relationships with business partners, thereby helping to smoothen the supply chain."),(0,n.kt)("h3",{id:"case-study-6----real-time-analytics-using-iot-hub-for-a-retail-giant"},"Case study 6 -- real-time analytics using IoT Hub for a retail giant"),(0,n.kt)("p",null,"An organization wanted to build an end-to-end solution wherein edge devices gathered metrics at a certain frequency from all the instruments on the floor shop. These metrics were to be utilized to conduct edge analytics for real-time issues. Thereon, the data would be pushed to a cloud platform where near-real-time data transformations would be done and delivered to a dashboard for visualization. The same data would be persisted for batch processing and leveraged machine learning to gain insights."),(0,n.kt)("p",null,"The proposed solution architecture was as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Three devices (three metrics per device) were integrated with Azure\xa0",(0,n.kt)("strong",{parentName:"li"},"IoT Hub"),"\xa0to get the real-time device telemetry data into the Azure cloud."),(0,n.kt)("li",{parentName:"ul"},"From IoT Hub, the data points were consumed by Azure Databricks to perform real-time transformation and to prepare useful insights."),(0,n.kt)("li",{parentName:"ul"},"The transformed data was pushed to Power BI for live dashboard generation and to enable attentiveness when the data changed beyond the configured limits (Alert Mechanism).")),(0,n.kt)("p",null,"The solution\xa0architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824414-d3b2e6d3-eadb-4105-ac54-5ac314122ffb.jpg",alt:"B17782_08_06_new"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the retail giant"),(0,n.kt)("p",null,"Next, we will learn about a case study from the pharmaceutical industry."),(0,n.kt)("h2",{id:"learning-case-studies-from-the-pharmaceutical-industry"},"Learning case studies from the pharmaceutical industry"),(0,n.kt)("p",null,"Data analytics\xa0and AI in the pharmaceutical industry play a crucial role in optimizing clinical trials, analyzing patients' behavior, improving logistics, and reducing costs."),(0,n.kt)("h3",{id:"case-study-7----pricing-analytics-for-a-pharmaceutical-company"},"Case study 7 -- pricing analytics for a pharmaceutical company"),(0,n.kt)("p",null,"The organization required a pricing decision support framework to get insights on gross margin increment based on historical events, the prioritization of SKUs, review indicators, and more. The framework was to be designed in a way so that the smart machine learning models could be transferred and scaled to retain the quality and depth of the information gathered."),(0,n.kt)("p",null,"A pricing decision framework was developed using machine learning on Azure Databricks, which helped to predict the SKU that should go for pricing review. The system was also capable of predicting the next month's volume, which helped in deciding the correct price for a specific SKU."),(0,n.kt)("p",null,"The solution architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824419-9925777b-be4a-43c9-b00a-bc014a248c50.jpg",alt:"B17782_08_07"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the pharmaceutical company"),(0,n.kt)("p",null,"Next, we will learn about a case study from the e-commerce industry."),(0,n.kt)("h2",{id:"learning-case-studies-from-the-e-commerce-industry"},"Learning case studies from the e-commerce industry"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Big data analytics"),"\xa0in the\xa0e-commerce industry\xa0helps businesses understand consumer purchase patterns, improve user experience, and increase revenue."),(0,n.kt)("h3",{id:"case-study-8----migrating-interactive-analytical-apps-from-redshift-to-postgres"},"Case study 8 -- migrating interactive analytical apps from Redshift to Postgres"),(0,n.kt)("p",null,"An organization in the e-commerce space was using AWS Redshift as their data warehouse and Databricks as their ETL engine. The setup was deployed across different data centers in\xa0different\xa0regions on\xa0",(0,n.kt)("strong",{parentName:"p"},"Amazon Web Services"),"\xa0(",(0,n.kt)("strong",{parentName:"p"},"AWS"),") and\xa0",(0,n.kt)("strong",{parentName:"p"},"Google Cloud Platform"),"\xa0(",(0,n.kt)("strong",{parentName:"p"},"GCP"),"). They were also running into performance bottlenecks and were incurring egress costs unnecessarily. The data was growing faster than the compute required to process that data. AWS Redshift was unable to independently scale storage and compute. Hence, the organization decided to migrate its data and analytics landscape to Azure."),(0,n.kt)("p",null,"AWS Redshift's data was migrated to Azure Database for PostgreSQL Hyperscale (Citus). Citus is an open source extension to Postgres. It transforms Postgres into a distributed database where data can be sharded or partitioned across multiple nodes of the server. The migration effort was minimal as Redshift is also based on PostgreSQL. It took about 2 weeks to migrate from Redshift to Hyperscale (Citus). The highlights of the migration were as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"600 tables were migrated. Over 500 of them were distributed across the worker nodes of Postgres Hyperscale (Citus)."),(0,n.kt)("li",{parentName:"ul"},"Nearly 80% of the queries were dropped in, with no modifications."),(0,n.kt)("li",{parentName:"ul"},"Almost 200 Databricks jobs were dropped in, with minimal changes. This is because Redshift uses the same JDBC driver that Azure Database does for PostgreSQL Hyperscale (Citus).")),(0,n.kt)("p",null,"The complete customer success story can be read here:\xa0",(0,n.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/azure-database-for-postgresql/migrating-interactive-analytics-apps-from-redshift-to-postgres/ba-p/1825730"},"https://techcommunity.microsoft.com/t5/azure-database-for-postgresql/migrating-interactive-analytics-apps-from-redshift-to-postgres/ba-p/1825730"),". The solution architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824428-2b4e039a-359a-4e1a-9254-840e821a6bd0.jpg",alt:"B17782_08_08"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the pharmaceutical company"),(0,n.kt)("p",null,"Next, we will\xa0learn about a case study from the logistics and supply chain industry."),(0,n.kt)("h2",{id:"learning-case-studies-from-the-logistics-and-supply-chain-industry"},"Learning case studies from the logistics and supply chain industry"),(0,n.kt)("p",null,"Data analytics\xa0and machine learning play a crucial role in the functioning of the logistics and supply chain industry. Data can help reduce inefficiencies in the supply chain processes and optimize deliveries at the same time. Machine learning and predictive analytics help in better planning, procurement, and consumer fulfillment."),(0,n.kt)("h3",{id:"case-study-9----accelerating-intelligent-insights-with-tailored-big-data-analytics"},"Case study 9 -- accelerating intelligent insights with tailored big data analytics"),(0,n.kt)("p",null,"An organization wanted to create an end-to-end data warehousing platform on Azure. Their original process involved manually collecting data from siloed sources and creating necessary reports from it. There was a need to integrate all the data sources and implement a single source of truth, which would be on the Azure cloud. The proposed solution architecture was as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full load and incremental data pipelines were developed using Azure Data Factory to ingest data into Azure Synapse (data warehouse). Azure Synapse also allows you to build pipelines, just like Azure Data Factory. Refer to the following link for differences between the two:\xa0",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/data-integration/concepts-data-factory-differences"},"https://docs.microsoft.com/en-us/azure/synapse-analytics/data-integration/concepts-data-factory-differences"),"."),(0,n.kt)("li",{parentName:"ul"},"Data was\xa0loaded in\xa0",(0,n.kt)("strong",{parentName:"li"},"Azure Data Lake Storage"),"\xa0(",(0,n.kt)("strong",{parentName:"li"},"ADLS"),") for big data transformations and analytics in Azure\xa0Databricks."),(0,n.kt)("li",{parentName:"ul"},"The data lake was mounted on Azure Databricks for complex transformations and advanced use cases such as machine learning."),(0,n.kt)("li",{parentName:"ul"},"The modeling that was done on the synapse layer included creating optimized views and tables that implemented business logic."),(0,n.kt)("li",{parentName:"ul"},"Data modeling on Azure Analysis Services included defining relationships and creating the\xa0columns, measures, and tables necessary for Power BI's\xa0",(0,n.kt)("strong",{parentName:"li"},"key performance indicators"),"\xa0(",(0,n.kt)("strong",{parentName:"li"},"KPIs"),")."),(0,n.kt)("li",{parentName:"ul"},"Cubes were created on Azure Analysis Services to ensure that data was refreshed quicker for Power BI reports. The reports were also created for a multi-lingual interface.")),(0,n.kt)("p",null,"The solution architecture is depicted in the following diagram:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218824436-00d08e7f-9b37-4a3a-9e30-ca1c2fbc2480.jpg",alt:"B17782_08_09_new"})),(0,n.kt)("p",null,"Figure -- Solution architecture diagram for the logistics and supply chain company"),(0,n.kt)("p",null,"This brings us\xa0to the end of the case studies. To learn about more Databricks success stories, check out the official page:\xa0",(0,n.kt)("a",{parentName:"p",href:"https://databricks.com/customers"},"https://databricks.com/customers"),"."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"In this note, we learned about several Databricks case studies, ranging from manufacturing and media to logistics and the supply chain. All these solution architectures have employed Databricks in different ways. Irrespective of its role in an organization's data journey, Databricks has always emerged as a game-changer in the world of big data analytics."))}d.isMDXComponent=!0}}]);