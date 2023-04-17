"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52432],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="Global Historical Climatology Network Daily Data Pipeline",l={unversionedId:"capstones/climate/README",id:"capstones/climate/README",title:"Global Historical Climatology Network Daily Data Pipeline",description:"Objective",source:"@site/docs/12-capstones/climate/README.md",sourceDirName:"12-capstones/climate",slug:"/capstones/climate/",permalink:"/docs/capstones/climate/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Problem statement",id:"problem-statement",level:2},{value:"Main objective",id:"main-objective",level:2},{value:"Dataset description",id:"dataset-description",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Technologies",id:"technologies",level:3},{value:"Repository organization",id:"repository-organization",level:3},{value:"Results",id:"results",level:2},{value:"Setup and running",id:"setup-and-running",level:2},{value:"Setup",id:"setup",level:3},{value:"Run pipelines",id:"run-pipelines",level:3},{value:"Improvements (ToDo)",id:"improvements-todo",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-historical-climatology-network-daily-data-pipeline"},"Global Historical Climatology Network Daily Data Pipeline"),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"To build a global historical climatology network data pipeline that runs daily"),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215285541-61bbd070-3a73-4d58-84ce-ad68f980566c.jpg",alt:null})),(0,r.kt)("h2",{id:"problem-statement"},"Problem statement"),(0,r.kt)("p",null,"Global historical weather data is large, collected from year 1763 until today. There are over 160K weather stations across the world, each of them generating several observations on a daily basis. This sum up a total of more than 1.75B observations.",(0,r.kt)("br",{parentName:"p"}),"\n","The data is also not ready to perform analytics tasks over the entire dataset or those requiring geolocation information.\nAll that information has to be processed (ELT) to enable analytics tasks using information from several years, locations, observation date and type ans so on."),(0,r.kt)("p",null,"As an example:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Max daily temperature in France (over all territory) in 1992."),(0,r.kt)("li",{parentName:"ul"},"Plot a comparison of the main daily minimum temperature by year between NewYork and Miami."),(0,r.kt)("li",{parentName:"ul"},"Overall ten hottest days in Madrid.")),(0,r.kt)("p",null,"It is advisable that joins and aggregations will be needed for such kind of analysis."),(0,r.kt)("h2",{id:"main-objective"},"Main objective"),(0,r.kt)("p",null,"Develop the data infrastructure including data pipeline and dashboard for users to perform advanced analytics tasks on the global historical weather data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a dataset."),(0,r.kt)("li",{parentName:"ul"},"Create a pipeline for processing this dataset and putting it to a data-lake."),(0,r.kt)("li",{parentName:"ul"},"Create a pipeline for moving the data from the lake to a data warehouse."),(0,r.kt)("li",{parentName:"ul"},"Transform the data in the data warehouse: prepare it for the dashboard."),(0,r.kt)("li",{parentName:"ul"},"Create a dashboard.")),(0,r.kt)("h2",{id:"dataset-description"},"Dataset description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOAA Global Historical Climatology Network Daily (GHCN-D)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/open-data-docs/tree/main/docs/noaa/noaa-ghcn"},"Global Historical Climatology Network - Daily")," is a dataset from NOAA that contains daily observations over global land areas (e.g. TMAX, SNOW...). It contains station-based observations from land-based stations worldwide. It is updated daily. The data is in CSV format. Each file corresponds to a year from 1763 to present and is named as such.",(0,r.kt)("br",{parentName:"p"}),"\n","Each file contains all weather observations from all the stations for all days in that year.",(0,r.kt)("br",{parentName:"p"}),"\n","Data description of the stations and countries, including geolocation, are available in a separate files.  "),(0,r.kt)("p",null,"Information of all stations is stored in a specific file.\nFile format examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://noaa-ghcn-pds.s3.amazonaws.com/csv.gz/1788.csv.gz"},"http://noaa-ghcn-pds.s3.amazonaws.com/csv.gz/1788.csv.gz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://noaa-ghcn-pds.s3.amazonaws.com/csv.gz/1788.csv"},"http://noaa-ghcn-pds.s3.amazonaws.com/csv.gz/1788.csv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://noaa-ghcn-pds.s3.amazonaws.com/ghcnd-stations.txt"},"http://noaa-ghcn-pds.s3.amazonaws.com/ghcnd-stations.txt"))),(0,r.kt)("p",null,"Observation format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ID = 11 character station identification code"),(0,r.kt)("li",{parentName:"ul"},"YEAR/MONTH/DAY = 8 character date in YYYYMMDD format (e.g. 19860529 = May 29, 1986)"),(0,r.kt)("li",{parentName:"ul"},"ELEMENT = 4 character indicator of element type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PRCP = Precipitation (tenths of mm)"),(0,r.kt)("li",{parentName:"ul"},"SNOW = Snowfall (mm)"),(0,r.kt)("li",{parentName:"ul"},"SNWD = Snow depth (mm)"),(0,r.kt)("li",{parentName:"ul"},"TMAX = Maximum temperature (tenths of degrees C)"),(0,r.kt)("li",{parentName:"ul"},"TMIN = Minimum temperature (tenths of degrees C)"))),(0,r.kt)("li",{parentName:"ul"},"DATA VALUE = 5 character data value for ELEMENT "),(0,r.kt)("li",{parentName:"ul"},"M-FLAG = 1 character Measurement Flag "),(0,r.kt)("li",{parentName:"ul"},"Q-FLAG = 1 character Quality Flag "),(0,r.kt)("li",{parentName:"ul"},"S-FLAG = 1 character Source Flag "),(0,r.kt)("li",{parentName:"ul"},"OBS-TIME = 4-character time of observation in hour-minute format (i.e. 0700 =7:00 am")),(0,r.kt)("p",null,"Format of ghcnd-stations.txt  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variable   Columns   Type"),(0,r.kt)("li",{parentName:"ul"},"ID            1-11   Character"),(0,r.kt)("li",{parentName:"ul"},"LATITUDE     13-20   Real"),(0,r.kt)("li",{parentName:"ul"},"LONGITUDE    22-30   Real"),(0,r.kt)("li",{parentName:"ul"},"ELEVATION    32-37   Real"),(0,r.kt)("li",{parentName:"ul"},"STATE        39-40   Character"),(0,r.kt)("li",{parentName:"ul"},"NAME         42-71   Character"),(0,r.kt)("li",{parentName:"ul"},"GSN FLAG     73-75   Character"),(0,r.kt)("li",{parentName:"ul"},"HCN/CRN FLAG 77-79   Character"),(0,r.kt)("li",{parentName:"ul"},"WMO ID       81-85   Character")),(0,r.kt)("p",null,"Format of ghcnd-countries.txt  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variable   Columns   Type"),(0,r.kt)("li",{parentName:"ul"},"CODE          1-2    Character"),(0,r.kt)("li",{parentName:"ul"},"NAME         4-50    Character")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("h3",{id:"technologies"},"Technologies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud: GCP"),(0,r.kt)("li",{parentName:"ul"},"Infrastructure as code (IaC): Terraform"),(0,r.kt)("li",{parentName:"ul"},"Workflow orchestration: Airflow (ingestion pipeline and transformation pipeline)"),(0,r.kt)("li",{parentName:"ul"},"Data Warehouse: BigQuery"),(0,r.kt)("li",{parentName:"ul"},"Data Lake: GCS"),(0,r.kt)("li",{parentName:"ul"},"Batch processing/Transformations: dbt cloud or DataProc/Spark (transformation pipeline)"),(0,r.kt)("li",{parentName:"ul"},"Stream processing: None"),(0,r.kt)("li",{parentName:"ul"},"Dashboard: Google Data Studio")),(0,r.kt)("h3",{id:"repository-organization"},"Repository organization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\\airflow: airflow files (docker-compose.yaml, Dockerfile, requirements, dags folder, etc.).  "),(0,r.kt)("li",{parentName:"ul"},"\\assets: pictures.  "),(0,r.kt)("li",{parentName:"ul"},"\\dbt: dbt files (dbt_project.yml, models, etc.).  "),(0,r.kt)("li",{parentName:"ul"},"\\spark: python program for data transformation (option b).  "),(0,r.kt)("li",{parentName:"ul"},"\\terraform: terraform files for the definition of the infrastructure to deploy.  "),(0,r.kt)("li",{parentName:"ul"},"\\README.md: this document.  "),(0,r.kt)("li",{parentName:"ul"},"\\setup.sh: script to configure the pipeline to run.  "),(0,r.kt)("li",{parentName:"ul"},"\\setup_dbt.md: instructions to configure dbt cloud account.  "),(0,r.kt)("li",{parentName:"ul"},"\\setup_gcp.md: instructions to configure cgp account.  "),(0,r.kt)("li",{parentName:"ul"},"\\setup_vm.md: instructions to setup the VM in GCP.  ")),(0,r.kt)("p",null,"In order to save space and costs, the range of years to be processed can be configured."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Infrastructure as code:"),"  "),(0,r.kt)("p",null,"  Use Terraform to create a bucket GCS and dataset in BQ  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ghcdn_raw bucket to store parquet files."),(0,r.kt)("li",{parentName:"ul"},"dhcdn dataset for the ingestion into BigQuery."),(0,r.kt)("li",{parentName:"ul"},"dbt_xxxx dataset for dbt cloud development environment."),(0,r.kt)("li",{parentName:"ul"},"production dataset for dbt cloud production environment. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Orchestration:"),"  "),(0,r.kt)("p",null,"  Use Airflow to orchestrate data ingestion and transformation (dbt) pipelines. Orchestration of dbt cloud job with airflow requires access to API (either trial or team or enterprise plans). If you do not have access to API, it is possible ro run dbt cloud job manually."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data ingestion:"),"  "),(0,r.kt)("p",null,"  Use Airflow to get data from AWS bucket to CGS and then to BigQuery (regular, non external tables).",(0,r.kt)("br",{parentName:"p"}),"\n","Although it is possible to use BigQuery external tables (linked to parquet files in GCS) to perform transformations, these may be slower than regular tables. Also, optimization of queries over external tables would require partitioning of parquet files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dag ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_gcs_other_datasets_dag")," to ingest stations and countries data only once.  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"stations and countries are txt files, so need to be transformed to csv and then to parquet files.  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dag ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_gcs_past_years_dag")," to ingest observations from last years (until 2021) on a yearly basis with catchup.  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This dag can be run only one, since these observations will likely not change anymore.  "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dag ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_gcs_current_year_dag")," to ingest observations from current year on a daily basis (catchup of only one day):  "),(0,r.kt)("p",{parentName:"li"},"To accelerate queries and data processing, each table of year (with observations) has been partitioned by date of observation (so 365 partitions in each table for specific year) and clustered by station.\nOriginal date type string from cvs is transformed to date type in order to be able to partition by time.  "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transformations (option A):"),"  "),(0,r.kt)("p",null,"  Use dbt cloud to perform unions, joins and aggregations on BQ.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Staging (materialized=view):  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stations and countries: Create staged model from stations and countries tables in Big Query.  "),(0,r.kt)("li",{parentName:"ul"},"The output will be ",(0,r.kt)("inlineCode",{parentName:"li"},"stg_stations")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stg_countries")," models.",(0,r.kt)("br",{parentName:"li"}),"In the stations model, extract country_code field from the station id field.  "),(0,r.kt)("li",{parentName:"ul"},"Observations:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Option 1 (discarded). Create staged model (view) for each year.\nThe number of years may be too large. There is a one to one restriction model-table in dbt. So it is pointless to have such a large number of models. "),(0,r.kt)("li",{parentName:"ul"},"Option 2: Create a fact_observations model that will loop through all BigQuery year tables, transforms them and union all together.",(0,r.kt)("br",{parentName:"li"}),"Transformation for each year table:\nObservations with q_flag (quality flag) are discarded.\nEach row will have all observations for an specific day from a station. This will save space and will perform better.\nIn case of several observations (by a single station) of the same type in the same day, observations are averaged.\ntmax and tmin observations are converted to degree. Max and min temperatures outside the range (-70,+70) are discarded.",(0,r.kt)("br",{parentName:"li"}),"The transformation is implemented as a macro (process_year_table).",(0,r.kt)("br",{parentName:"li"}),"The output will be a model (",(0,r.kt)("inlineCode",{parentName:"li"},"stg_years_unioned"),") with all years tables transformed and unioned.  "))))),(0,r.kt)("li",{parentName:"ul"},"Core (materialized=table):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fact_observations")," materialized model by joining ",(0,r.kt)("inlineCode",{parentName:"li"},"stg_years_unioned")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"stg_stations")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stg_country")," models. Generated table will be partitioned by date (year) and clustered by country_code and station id. This will provide enough performance since it is advisable that the date field will be the most used while partitions will be big enough (e.g. >1GB from 1960), and country and station id will provide geolocation dimension."),(0,r.kt)("li",{parentName:"ul"},"In addition, a ",(0,r.kt)("inlineCode",{parentName:"li"},"fact_observations_yearly")," model has been created. This model averages the daily observations over each year,e.g. tmax for 2002 is the average over all daily max temperature observations made during 2002. This will save costs and increment performance in those queries made on a yearly basis.  "))),(0,r.kt)("li",{parentName:"ul"},"Job:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For the convenient creation of the production dataset, a job ",(0,r.kt)("inlineCode",{parentName:"li"},"dbt build")," will be created."),(0,r.kt)("li",{parentName:"ul"},"This job can be run manually from dbt cloud or through airflow dag ",(0,r.kt)("inlineCode",{parentName:"li"},"data_transformation_dbt_job"),", which will run on a daily basis.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transformations (option B):"),"  "),(0,r.kt)("p",null,"  In order to compare different solutions for the transformation stage, option A uses DataProc (managed solution of Spark&Hadoop) to perform the same transformations of those of option A, but reading directly from the Google Cloud bucket the parquet files.",(0,r.kt)("br",{parentName:"p"}),"\n","The output will be tables ",(0,r.kt)("inlineCode",{parentName:"p"},"fact_observations_spark")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fact_observations_spark_yearly")," in Big Query. In order to control cost and resources in DataProc, a DataProc cluster is created and deleted in each dag execution.",(0,r.kt)("br",{parentName:"p"}),"\n","This solution will be orchestrated by Airflow with the ",(0,r.kt)("inlineCode",{parentName:"p"},"data_transformation_dataproc_spark_job")," dag which will perform the following tasks:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_dataproc_cluster_task"),": At least, 2 nodes, 16GB, 4 vCores each one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upload_main_to_gcs_task"),": DataProc will get the main program to execute for the job from Google Cloud Storage, so we will upload it in our bucket. The main program is a ",(0,r.kt)("inlineCode",{parentName:"li"},"python-pyspark")," program located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"spark")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"submit_dataproc_spark_job_task"),": A job is submitted to DataProc cluster in order to execute our main program.",(0,r.kt)("br",{parentName:"li"}),"The main program processes each year in a loop. The operations are the same than those in option a, however, in order to avoid join operations, append mode is used when writing data to BigQuery tables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delete_dataproc_cluster_task"),": Delete the cluster in order to avoid unnecessary costs. ",(0,r.kt)("strong",{parentName:"li"},"Warning!")," Dataproc uses temporal buckets to store internal data, once the cluster is deleted, it is possible that these buckets are not deleted, so check you google cloud storage.    ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard:"),"  "),(0,r.kt)("p",null,"  Connect Google Data Studio to BQ dataset and design dashboard  "),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dashboard")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215285535-3cf5a01c-b67d-4aa8-8a48-e2aee12df7a2.PNG",alt:null})),(0,r.kt)("p",null,"Note: Record counts depends on the years configured.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Other dataset ingestion pipeline (stations and countries)")," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215285537-7547eaf3-e8c9-41b8-9a93-dc2994ab0c9c.PNG",alt:"other datasets ingestion pipeline"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Past years ingestion pipeline")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215285539-4af520d6-948a-4d74-9d1c-223341cad0b3.PNG",alt:"past years ingestion pipeline"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transformation pipeline (option A - dbt cloud)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215285549-cb5b6712-8236-48a0-a1c5-d786c5e3d2b2.PNG",alt:"Transformation pipeline A"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transformation pipeline (option B - DataProc)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215285547-2f37ffdc-81d9-4c94-adb2-a79cf185809e.PNG",alt:"Transformation pipeline B"})),(0,r.kt)("h2",{id:"setup-and-running"},"Setup and running"),(0,r.kt)("p",null,"Terraform and Airflow will run in a VM in Google Cloud. Airflow will run as docker containers.\nFor data transformation:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Option a: Dbt cloud will be used to perform data transformation pipeline.  "),(0,r.kt)("li",{parentName:"ul"},"Option b: Dataproc cluster will be used to run a pyspark jop.  ")),(0,r.kt)("p",null,"Your gcp account will be used and, unless you have google's welcome credit, it will have some cost.\nYour dbt cloud account will be used. Developer account is free. However, if you wish to orchestrate it with Airflow, you will need access to dbt API which is only available during free trial and for team and enterprise plans.  "),(0,r.kt)("p",null,"If you wish to install the required tools in your own machine instead of in the VM, the instructions in ",(0,r.kt)("inlineCode",{parentName:"p"},"setup_gcp.md")," will be a good starting point."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Note: This setup is not mean to be for production environment. More specific service account roles should be implemented as well as changing default passwords (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo passwd")," in your VM to create the root password since VMs in GCE does not provide a password for root user)."),(0,r.kt)("p",null,"Follow the following steps in the same order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Google Cloud Platform account and project:",(0,r.kt)("br",{parentName:"li"}),"Follow the instructions in ",(0,r.kt)("inlineCode",{parentName:"li"},"setup_gcp.md"),"  "),(0,r.kt)("li",{parentName:"ol"},"Virtual Machine in Google Cloud Compute Engine:",(0,r.kt)("br",{parentName:"li"}),"Follow the instructions in ",(0,r.kt)("inlineCode",{parentName:"li"},"setup_vm.md")),(0,r.kt)("li",{parentName:"ol"},"dbt cloud account:",(0,r.kt)("br",{parentName:"li"}),"Follow the instructions in ",(0,r.kt)("inlineCode",{parentName:"li"},"setup_dbt.md"))),(0,r.kt)("h3",{id:"run-pipelines"},"Run pipelines"),(0,r.kt)("p",null,"Note: If you run pipelines in your own machine, 16GB or RAM are needed",(0,r.kt)("br",{parentName:"p"}),"\n","In case you have 8GB, modify the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"max_active_runs")," to 1 in ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_bq_past_years_dag.py"),"  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the VM, go to the directory ghcn-d and edit the parameters in setup.sh\nIf you wish to orchestrate dbt cloud from airflow, complete the dbt vars section"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"source setup.sh")," to apply the configuration"),(0,r.kt)("li",{parentName:"ol"},"Terraform",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd terraform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terraform init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terraform plan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"terraform apply")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yes")))),(0,r.kt)("li",{parentName:"ol"},"Airflow",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd ..")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd airflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up airflow-init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up")),(0,r.kt)("li",{parentName:"ul"},"Open browser. Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080")," "),(0,r.kt)("li",{parentName:"ul"},"Log in with ",(0,r.kt)("inlineCode",{parentName:"li"},"user:pass"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"airflow:airflow"),"  "),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"data_ingestion_ghcn_other_datasets")),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"data_ingestion_past_years"),". This will ingest data from START_YEAR until 2021. This may take long."),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("inlineCode",{parentName:"li"},"data_ingestion_current_year")," for current year (2022), after ",(0,r.kt)("inlineCode",{parentName:"li"},"data_ingestion_past_years")," finishes (otherwise too much memory will be used)  "))),(0,r.kt)("li",{parentName:"ol"},"Transformation  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Option a: dbt cloud",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"fact_observations")," table will be generated in the ",(0,r.kt)("inlineCode",{parentName:"li"},"production")," dataset. You have two options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a) Run ",(0,r.kt)("inlineCode",{parentName:"li"},"data_transformation_dbt_job")," from Airflow. Please not that you have to setup env vars in ",(0,r.kt)("inlineCode",{parentName:"li"},"setup.sh")," (DBT VARS SECTION). Also do not forget to edit the job in order to set the starting and end years for the job execution.  "),(0,r.kt)("li",{parentName:"ul"},"b) Run ",(0,r.kt)("inlineCode",{parentName:"li"},"dbt build")," from jobs menu in dbt cloud."))),(0,r.kt)("li",{parentName:"ul"},"Option b: Dataproc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fact_observations_spark")," table will be generated in the ",(0,r.kt)("inlineCode",{parentName:"li"},"production")," dataset. Run ",(0,r.kt)("inlineCode",{parentName:"li"},"data_transformation_dataproc_spark_job")," from Airflow. Please not that you have to setup env vars in setup.sh accordingly."))))),(0,r.kt)("li",{parentName:"ol"},"Google Data Studio",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in datastudio.google.com"),(0,r.kt)("li",{parentName:"ul"},"Create Data Source -> BigQuery"),(0,r.kt)("li",{parentName:"ul"},"Select project, dataset and table: ghcn-d -> ghcnd -> fact_observations -> Connect"),(0,r.kt)("li",{parentName:"ul"},"Create Report -> Add to report"),(0,r.kt)("li",{parentName:"ul"},"Make you own report.")))),(0,r.kt)("h2",{id:"improvements-todo"},"Improvements (ToDo)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strike",null,"Local solution with postgres: ingestion and dbt~~ - Launch docker container with postgres server (done) - Create database with Terraform (done) - Create network to connect to airflow executors (done) - Create dags for ingestions (done) - Install and run local dbt with docker (done)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Orchestrate dbt local through airflow. By including dbtcore in airflow executor?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Documentation in dbt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CI/CD in dbt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Parametrize local postgres dag solution better."),(0,r.kt)("li",{parentName:"ul"},"Parametrize terraform to support local or cloud solutions."),(0,r.kt)("li",{parentName:"ul"},"Modify setup_vm script to download bq and cgs connectors."),(0,r.kt)("li",{parentName:"ul"},"Modify Terraform to create VM with script to setup docker and so on. Terraform may be run in a small instance or locally."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Project documentation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Explain local (windows) and cloud solutions.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"Update documentation to include setup_vm."),"  "),(0,r.kt)("li",{parentName:"ul"},"Update documentation to support local windows setup.bat project.  "),(0,r.kt)("li",{parentName:"ul"},"Generate documentation for setup local windows machine applications.  "),(0,r.kt)("li",{parentName:"ul"},"Generate documentation for local solution.  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Local postgres db in a separate container. "),(0,r.kt)("li",{parentName:"ul"},"dbt core installation and usage to run transformation pipelines."),(0,r.kt)("li",{parentName:"ul"},"setup.bat to setup project vars in Windows"),(0,r.kt)("li",{parentName:"ul"},"Launch local postgres."),(0,r.kt)("li",{parentName:"ul"},"Airflow accessing to local network created by local postgres."),(0,r.kt)("li",{parentName:"ul"},"Specific dags for local ingestions."),(0,r.kt)("li",{parentName:"ul"},"Run airflow dags "),(0,r.kt)("li",{parentName:"ul"},"Run dbt core command (manually)"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Custom dashboard with BQ client for python. (bq api use) or postgresql client for python."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Develop Django app for this dashboard."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check cloud solutions from other providers (AWS)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"E.g. Check AWS batch to run AWS batch job from a docker image. Airflow orchestrates the job, but the job is executed by AWS. E.g. Ingestion pipeline with all tasks in a single python program?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improvements"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Find a solution to better process all years from 1760.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create huge external table, or regular table from parquet files. Then process it in a single model everything."),(0,r.kt)("li",{parentName:"ul"},"Fix in dbt with incremental model or even better, dynamic models."),(0,r.kt)("li",{parentName:"ul"},"Or just large number of models materialized and unioned in the last stage (the problem with views and final materialized model is that it is too large query or too complex to process). Delete temporal tables. Alternative: Do not union, but create bq table from *tables directly in bq, but calling from dbt."))),(0,r.kt)("li",{parentName:"ul"},"Fix spark/dataproc problems and improve performance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add clustering by id in spark when generating fact table (works by country_code, not by id \xbf...?)"),(0,r.kt)("li",{parentName:"ul"},"Fix spark running locally out of memory (java heap). Even with 2022 year!!!"),(0,r.kt)("li",{parentName:"ul"},"Fix spark can not partition yearly fact table by date"),(0,r.kt)("li",{parentName:"ul"},"Check why Dataproc buckets are not deleted after cluster deletion."),(0,r.kt)("li",{parentName:"ul"},"Check low CPU usage in DataProc clusters."))),(0,r.kt)("li",{parentName:"ul"},"dbt local postgres",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dbt does not set primary key to materialized tables. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dbt-labs/postgres"},"https://github.com/dbt-labs/postgres"),"  "),(0,r.kt)("li",{parentName:"ul"},"If then else in dbt macros are not standarized. Works with BQ but it is different for PG. Fix it. The same happens with date_trunc function.  "),(0,r.kt)("li",{parentName:"ul"},"Improve the performance of postgres",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Partition."),(0,r.kt)("li",{parentName:"ul"},"Clustering."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"Implement create or replace table when creating tables.")),(0,r.kt)("li",{parentName:"ul"},"The definition of the sources in dbt macros is written in code, and not parametrized as models. This causes differences for BQ and PG. Form instance, ' vs \" and date_trunc. "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cost analysis (europe-west6)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BigQuery.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Active storage $0.025 per GB per month. The first 10 GB is free each month."),(0,r.kt)("li",{parentName:"ul"},"Queries (on-demand)\t$7.00 per TB. The first 1 TB per month is free.    "))),(0,r.kt)("li",{parentName:"ul"},"GCS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"$0.026 per GB per month. First 5GB is free each month."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bugs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check setup_vm.sh if the creation of the bin directory is correct."),(0,r.kt)("li",{parentName:"ul"},"stations source text file has wmo_id. This field shopud be integer type")))))}m.isMDXComponent=!0}}]);