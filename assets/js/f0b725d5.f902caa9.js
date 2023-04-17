"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="Lab: Incremental Data Loading in Azure Data Factory",l={unversionedId:"orchestration/azure-data-factory/lab-adf-incremental-loading/README",id:"orchestration/azure-data-factory/lab-adf-incremental-loading/README",title:"Lab: Incremental Data Loading in Azure Data Factory",description:"There are different ways in which we can design incremental loading using ADF. Based on the type of data source, we can have different techniques to implement incremental loading. Some of them are listed here:",source:"@site/docs/06-orchestration/azure-data-factory/lab-adf-incremental-loading/README.md",sourceDirName:"06-orchestration/azure-data-factory/lab-adf-incremental-loading",slug:"/orchestration/azure-data-factory/lab-adf-incremental-loading/",permalink:"/docs/orchestration/azure-data-factory/lab-adf-incremental-loading/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Azure Data Factory",permalink:"/docs/orchestration/azure-data-factory/"},next:{title:"Lab: Azure Data Factory and Synapse Analytics",permalink:"/docs/orchestration/azure-data-factory/lab-batch-processing-solution/"}},s={},p=[{value:"Using Watermarks",id:"using-watermarks",level:2},{value:"Using File timestamps",id:"using-file-timestamps",level:2},{value:"Using File partitions and folder structures",id:"using-file-partitions-and-folder-structures",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-incremental-data-loading-in-azure-data-factory"},"Lab: Incremental Data Loading in Azure Data Factory"),(0,r.kt)("p",null,"There are different ways in which we can design incremental loading using ADF. Based on the type of data source, we can have different techniques to implement incremental loading. Some of them are listed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using watermarks"),"---If the data source is a database or relational table-based system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using file timestamps"),"---If the source is a filesystem or blob storage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using partition data"),"---If the source is partitioned based on time"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using folder structure"),"---If the source is divided based on time")),(0,r.kt)("h2",{id:"using-watermarks"},"Using Watermarks"),(0,r.kt)("p",null,"Let's look at how we can implement a watermark design with ADF using Azure SQL as a source. Let's assume we have a simple table named ",(0,r.kt)("strong",{parentName:"p"},"FactTrips")," that needs to be incrementally loaded into an Azure SQL table. Proceed as follows:"),(0,r.kt)("p",null,"STEP 1 - Select the ",(0,r.kt)("strong",{parentName:"p"},"Azure SQL")," service from the Azure dashboard and create a new Azure SQL instance if you don't already have one. Create a simple ",(0,r.kt)("strong",{parentName:"p"},"FactTrips")," table and insert some dummy values into it using the ",(0,r.kt)("strong",{parentName:"p"},"Query editor")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS  [dbo].[FactTrips];\n\nCREATE TABLE FactTrips (\n[TripID] INT,\n[CustomerID] INT,\n[LastModifiedTime] DATETIME2\n);\n\nINSERT INTO [dbo].[FactTrips] VALUES (100, 200, CURRENT_TIMESTAMP);\nINSERT INTO [dbo].[FactTrips] VALUES (101, 201, CURRENT_TIMESTAMP);\nINSERT INTO [dbo].[FactTrips] VALUES (102, 202, CURRENT_TIMESTAMP);\n\nSELECT * FROM [dbo].[FactTrips];\n")),(0,r.kt)("p",null,"STEP 2 - Create a watermark table, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- A simple watermark table with just the table name and the last update value.\nDROP TABLE WatermarkTable;\nCREATE TABLE WatermarkTable\n(\n  [TableName] VARCHAR(100),\n  [WatermarkValue] DATETIME,\n);\n\nINSERT INTO [dbo].[WatermarkTable] VALUES ('FactTrips', CURRENT_TIMESTAMP);\nSELECT * FROM WatermarkTable;\nGO\n")),(0,r.kt)("p",null,"STEP 3 - Create a stored procedure to automatically update the watermark table whenever there is new data. You can either update the Watermark table manually or create a stored procedure and execute it everytime there is an update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- manual method\nUPDATE [dbo].[WatermarkTable]\nSET [WatermarkValue] = CURRENT_TIMESTAMP\nWHERE [TableName] = 'FactTrips';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- stored procedure to update the watermark whenever there is an update to the FactTable\nDROP PROCEDURE uspUpdateWatermark\nGO\n\nCREATE PROCEDURE [dbo].uspUpdateWatermark @LastModifiedtime DATETIME, @TableName VARCHAR(100)\nAS\nBEGIN\nUPDATE [dbo].[WatermarkTable] SET [WatermarkValue] = @LastModifiedtime WHERE [TableName] = @TableName\nEND\nGO\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Executing the stored procedure\nDECLARE @timestamp AS DATETIME = CURRENT_TIMESTAMP;\nEXECUTE uspUpdateWatermark @LastModifiedtime=@timestamp, @TableName='FactTrips';\n\nSELECT * FROM WatermarkTable;\n")),(0,r.kt)("p",null,"STEP 4 - Now, on the ADF side, we need to create a new pipeline for finding the delta between the old and new watermarks and then initiate an incremental copy. From the Pipeline page in ADF, create two Lookup activities. They can be found at Activities -> General -> Lookup."),(0,r.kt)("p",null,"STEP 5 - Configure the first one to look up the previous watermark table entry. The Watermark dataset has been configured to point to the Azure WatermarkTable. Configure the next Lookup activity to look at the latest file modified time in the source table, which in our case would be the FactTrips table."),(0,r.kt)("p",null,"You will have to enter the following query in the Query textbox under the Settings tab:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MAX(LastModifiedTime) AS NewWatermarkValue FROM FactTrips;\n")),(0,r.kt)("p",null,"STEP 6 - Finally, add a new Copy activity from Activities -> Move and Transform -> Copy Data and configure it as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM FactTrips WHERE\nLastModifiedTime > '@{activity('PreviousWatermark').output.firstRow.WatermarkValue}'\nAND\nLastModifiedTime <= '@{activity('NewWatermark').output.firstRow.WatermarkValue}';\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218293910-fbfd64a1-7397-4eab-af54-2fc2a072d1c4.jpg",alt:"Figure_4 20"})),(0,r.kt)("p",null,"STEP 7 - Save (publish) the preceding pipeline and set up a scheduled trigger using the Add Trigger button in the Pipeline screen. Now, every time there are changes to the FactTrips table, it will get copied into our destination table at regular intervals."),(0,r.kt)("h2",{id:"using-file-timestamps"},"Using File timestamps"),(0,r.kt)("p",null,"There's another\xa0technique available to incrementally load only the new files from a source to a destination: ADF's\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy Data tool"),"\xa0functionality. This tool provides an option to scan the files at the\xa0source based on the\xa0",(0,r.kt)("strong",{parentName:"p"},"LastModifiedDate"),"\xa0attribute. So, all we need to do is to specify the source and destination folders and select the\xa0",(0,r.kt)("strong",{parentName:"p"},"Incremental load: LastModifiedDate"),"\xa0option for the\xa0",(0,r.kt)("strong",{parentName:"p"},"File loading behavior"),"\xa0field."),(0,r.kt)("p",null,"You can launch the\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy Data tool"),"\xa0functionality from the ADF main screen, as shown in the following screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781801816069/files/image/Figure_4.21.jpg",alt:"Figure 4.20 -- ADF Copy Data tool launch screen\n"})),(0,r.kt)("p",null,"Once you click\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy Data tool"),", it launches a wizard screen where you can specify the incremental load details, as illustrated in the following screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781801816069/files/image/Figure_4.22_-_Select_Tumbling_Window_for_Incremental_load_based_on_File_Modified_Time.jpg",alt:"Figure 4.21 -- Selecting Tumbling window for incremental load based on file modified time\n"})),(0,r.kt)("p",null,"NOTE"),(0,r.kt)("p",null,"In the\xa0",(0,r.kt)("strong",{parentName:"p"},"Properties"),"\xa0tab shown in the previous screenshot, you need to select\xa0",(0,r.kt)("strong",{parentName:"p"},"Tumbling window"),"\xa0for the\xa0",(0,r.kt)("strong",{parentName:"p"},"Task Cadence or task schedule"),"\xa0setting; otherwise, the incremental load option won't show up."),(0,r.kt)("p",null,"In\xa0the\xa0",(0,r.kt)("strong",{parentName:"p"},"Source"),"\xa0window, select\xa0the\xa0",(0,r.kt)("strong",{parentName:"p"},"Incremental load: LastModified Date"),"\xa0option, as shown in the following screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781801816069/files/image/Figure_4.23_-_ADF_Incremental_Load_with_File_Modified_Date_Timestamps.jpg",alt:"Figure 4.22 -- ADF incremental load option with LastModifiedDate timestamps\n"})),(0,r.kt)("p",null,"Fill in the\xa0rest of the fields and\xa0select\xa0",(0,r.kt)("strong",{parentName:"p"},"Next"),"\xa0at the\xa0",(0,r.kt)("strong",{parentName:"p"},"Summary"),"\xa0screen to create an incremental copy pipeline using file modified dates."),(0,r.kt)("p",null,"Let's next learn how to do incremental copying using folder structures."),(0,r.kt)("h2",{id:"using-file-partitions-and-folder-structures"},"Using File partitions and folder structures"),(0,r.kt)("p",null,"For both the options\xa0of file partitioning and\xa0data organized in\xa0date-based folder structures, we\xa0can use the ADF\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy Data tool"),"\xa0functionality to perform incremental loading. The files and folders in\xa0both approaches\xa0will have a similar folder\xa0hierarchy based on date/time. Let's assume that our input data is landing in a date-structured folder, as shown here:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"New York/Trips/In/2022/01/01")),(0,r.kt)("p",null,"Let's try to incrementally upload this data to another location in the blob storage on a regular basis. ADF's\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy Data tool"),"\xa0has support for incremental copying for files and folders that are partitioned using date/time. Similar to how we instantiated a\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy")," activity in the previous section for the incremental copy based on file modified date timestamps, we need to instantiate the\xa0",(0,r.kt)("strong",{parentName:"p"},"Copy Data tool"),"\xa0functionality with the\xa0",(0,r.kt)("strong",{parentName:"p"},"File Loading behavior"),"\xa0field set to\xa0",(0,r.kt)("strong",{parentName:"p"},"Incremental load: time-partitioned folder/file names"),". In this screen, once you start typing the input format using date variables such as\xa0",(0,r.kt)("strong",{parentName:"p"},"{year}/{month}/{day}"),", the\xa0",(0,r.kt)("strong",{parentName:"p"},"Options"),"\xa0section expands to show the year format, month format, and day format fields. You can select your preferred folder structure format using the dropdowns and complete the rest of the flow. The following screenshot shows an example of this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781801816069/files/image/Figure_4.24_-_ADF_Incremental_Load_with_time_partitioned_folders.jpg",alt:"Figure 4.23 -- ADF incremental load option with time-partitioned folders\n"})),(0,r.kt)("p",null,"Once you review\xa0the details\xa0and click\xa0",(0,r.kt)("strong",{parentName:"p"},"Next"),"\xa0on the\xa0",(0,r.kt)("strong",{parentName:"p"},"Summary"),"\xa0screen, the incremental\xa0pipeline for partitioned data/folder structures will get deployed."),(0,r.kt)("p",null,"We have now learned three different methods to perform incremental copying."))}c.isMDXComponent=!0}}]);