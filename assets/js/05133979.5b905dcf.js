"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={},l="Sequential Recommendation with the Modern Data Stack",i={unversionedId:"orchestration/modern-data-stack/lab-metaflow-snowflake/README",id:"orchestration/modern-data-stack/lab-metaflow-snowflake/README",title:"Sequential Recommendation with the Modern Data Stack",description:"As a use case, we pick a popular RecSys challenge, session-based recommendation",source:"@site/docs/06-orchestration/modern-data-stack/lab-metaflow-snowflake/README.md",sourceDirName:"06-orchestration/modern-data-stack/lab-metaflow-snowflake",slug:"/orchestration/modern-data-stack/lab-metaflow-snowflake/",permalink:"/docs/orchestration/modern-data-stack/lab-metaflow-snowflake/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},s={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Virtual env",id:"virtual-env",level:3},{value:"Load data into Snowflake",id:"load-data-into-snowflake",level:3},{value:"dbt",id:"dbt",level:3},{value:"How to run (a.k.a. the whole enchilada)",id:"how-to-run-aka-the-whole-enchilada",level:2},{value:"Run the flow",id:"run-the-flow",level:3},{value:"Results",id:"results",level:3},{value:"BONUS: RecList and Metaflow cards",id:"bonus-reclist-and-metaflow-cards",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sequential-recommendation-with-the-modern-data-stack"},"Sequential Recommendation with the Modern Data Stack"),(0,o.kt)("p",null,"As a use case, we pick a popular RecSys challenge, session-based recommendation: given the interactions between a shopper and some products in a browsing session, can we train a model to predic what the next interaction will be? The flow is powered by our open-source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coveooss/SIGIR-ecom-data-challenge"},"Coveo Data Challenge dataset")," - as model, we train a vanilla LSTM, a model just complex enough to make good use of cloud computing. At a quick glance, this is what we are building:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904864-f96be41c-7e02-497c-845b-6ec9a36b6bc0.jpg",alt:"The post-modern stack"})),(0,o.kt)("p",null,"As usual, we show a working, end-to-end, real-world flow: while you can run it locally with few thousands sessions to get the basics, we suggest you to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX_SESSIONS")," variable to appreciate how well the stack scales - with no code changes - as millions of events are pushed to the warehouse."),(0,o.kt)("p",null,"For an in-depth explanation of the philosophy behind the approach, please check the companion ",(0,o.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/the-post-modern-stack-993ec3b044c1"},"blog post"),", and the previous episodes / repos in ",(0,o.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/tagged/mlops-without-much-ops"},"the series"),". "),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"The code is a self-contained recommender project; however, since we leverage best-in-class tools, some preliminary setup is required. Please make sure the requirements are satisfied, depending on what you wish to run - roughly in order of ascending complexity:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The basics: Metaflow, Snowflake and dbt")),(0,o.kt)("p",null,"A Snowflake account is needed to host the data, and a working Metaflow + dbt setup is needed to run the flow; we ",(0,o.kt)("em",{parentName:"p"},"strongly")," suggest to run ",(0,o.kt)("inlineCode",{parentName:"p"},"Metaflow on AWS")," (as it is the intended setup), but with some minor modifications you should be able to run the flow with a local store as well. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Snowflake account"),": ",(0,o.kt)("a",{parentName:"li",href:"https://signup.snowflake.com"},"sign-up for a free trial"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"AWS account"),": ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/free/"},"sign-up for a free AWS account"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Metaflow on AWS"),": ",(0,o.kt)("a",{parentName:"li",href:"https://docs.metaflow.org/metaflow-on-aws"},"follow the setup guide"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"dbt core setup"),": on top of installing the open source package (already included in the ",(0,o.kt)("inlineCode",{parentName:"li"},"requirements.txt"),"), you need to point dbt to your Snowflake instance with the proper ",(0,o.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/dbt-cli/configure-your-profile"},"dbt_profile"),", Make sure the SCHEMA there matches with what is specified in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file (",(0,o.kt)("inlineCode",{parentName:"li"},"SF_SCHEMA"),").")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Adding experiment tracking")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Comet ML"),": ",(0,o.kt)("a",{parentName:"li",href:"https://www.comet.ml/signup"},"sign-up for free")," and get an api key. If you don't want experiment tracking, make sure to comment out the Comet specific parts in the ",(0,o.kt)("inlineCode",{parentName:"li"},"train_model")," step.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Adding PaaS deployment")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"SageMaker setup"),": To deploy the model as a PaaS solution using SageMaker, the ",(0,o.kt)("inlineCode",{parentName:"li"},"IAM_SAGEMAKER_ROLE")," parameter in the flow needs to contain a suitable IAM ROLE to deploy an endpoint and access the s3 bucket where Metaflow is storing the model artifact; if you don't wish to deploy your model, run the flow with ",(0,o.kt)("inlineCode",{parentName:"li"},"SAGEMAKER_DEPLOY=0")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Adding dbt cloud")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"dbt cloud account"),": ",(0,o.kt)("a",{parentName:"li",href:"https://www.getdbt.com/signup"},"sign-up for free")," and get an api key. If you don't wish to use dbt cloud but just the local setup,set ",(0,o.kt)("inlineCode",{parentName:"li"},"DBT_CLOUD=0")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"virtual-env"},"Virtual env"),(0,o.kt)("p",null,"Setup a virtual environment with the project dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"python -m venv venv")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source venv/bin/activate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pip install -r requirements.txt"))),(0,o.kt)("p",null,"NOTE: the current version of RecList has some old dependencies which may results in some (harmless) pip conflicts - conflicts will disappear with the new version, coming out soon."),(0,o.kt)("p",null,"Create a local version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"local.env")," file named only ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," (do ",(0,o.kt)("em",{parentName:"p"},"not")," commit it!), and make sure to fill its values properly:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"VARIABLE"),(0,o.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:null},"MEANING"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_USER"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake user name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_PWD"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake password")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_ACCOUNT"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_DB"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_SCHEMA"),(0,o.kt)("td",{parentName:"tr",align:null},"string (suggested: POST_MODERN_DATA_STACK)"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake schema for raw and transformed data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_TABLE"),(0,o.kt)("td",{parentName:"tr",align:null},"string (COVEO_DATASET_RAW)"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake table for raw data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SF_ROLE"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Snowflake role to run SQL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"APPLICATION_API_KEY"),(0,o.kt)("td",{parentName:"tr",align:null},"uuid (474d1224-e231-42ed-9fc9-058c2a8347a5)"),(0,o.kt)("td",{parentName:"tr",align:null},"Organization id to simulate a SaaS company")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MAX_SESSIONS"),(0,o.kt)("td",{parentName:"tr",align:null},"int (1000)"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of raw sessions to load into Snowflake (try first running the project locally with a small number)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EN_BATCH"),(0,o.kt)("td",{parentName:"tr",align:null},"0-1 (0)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable/disable cloud computing for @batch steps in Metaflow (try first running the project locally)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COMET_API_KEY"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Comet ML api key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBT_CLOUD"),(0,o.kt)("td",{parentName:"tr",align:null},"0-1 (0)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable/disable running dbt on the cloud")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SAGEMAKER_DEPLOY"),(0,o.kt)("td",{parentName:"tr",align:null},"0-1 (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable/disable deploying the model artifact to a Sagemaker endpoint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBT_ACCOUNT_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"dbt cloud account id (you can find it in the dbt cloud URL)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBT_PROJECT_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"dbt cloud project id  (you can find it in the dbt cloud URL)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBT_JOB_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"dbt cloud job id (you can find it in the dbt cloud URL)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DBT_API_KEY"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"dbt cloud api key")))),(0,o.kt)("h3",{id:"load-data-into-snowflake"},"Load data into Snowflake"),(0,o.kt)("p",null,"Original datasets are from the Coveo SIGIR Data Challenge. To save you from downloading the original data dump and dealing with large text files, we re-used the abstraction over the data provided by RecList. If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"upload_to_snowflake.py")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," folder from your laptop as a one-off script, the program will download the Data Challenge dataset and dump it to a Snowflake table that simulates the ",(0,o.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/the-modern-data-pattern-d34d42216c81"},"append-only log pattern"),". This allows us to use dbt and Metaflow to run a realistic ELT and ML code over real-world data."),(0,o.kt)("p",null,"Once you run the script, check your Snowflake for the new schema/table:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904863-10c4a912-73e3-4ec9-b7c7-3c9c2de4d63d.png",alt:"Raw table in Snowflake"})),(0,o.kt)("p",null,"If you wish to see how a data ingestion pipeline works (i.e. an endpoint streaming into Snowflake real-time, individual events, instead of a bulk upload), we open-sourced a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jacopotagliabue/paas-data-ingestion"},"serverless pipeline")," as well."),(0,o.kt)("h3",{id:"dbt"},"dbt"),(0,o.kt)("p",null,"While we will run dbt code as part of Metaflow, it is good practice to try and see if everything works from a stand-alone setup first. To run and test the dbt transformations, just ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt")," folder and run ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt run --vars '{SF_SCHEMA: POST_MODERN_DATA_STACK, SF_TABLE: COVEO_DATASET_RAW}'"),", where the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"variables")," reflect the content of your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file  (you can also run ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt test"),", if you like)."),(0,o.kt)("p",null,"Once you run dbt, check your Snowflake for the views:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904836-1b0948bd-5c07-434e-a9e4-ed47da98f6fd.png",alt:"Views in Snowflake"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DBT_CLOUD")," variable (see above) controls whether transformations are run from ",(0,o.kt)("em",{parentName:"p"},"within the flow folder"),", or from a dbt cloud account, by using dbt API to trigger the transformation on the cloud platform. If you want to leverage dbt cloud, make sure to manually ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/dbt-cloud/cloud-quickstart#create-a-new-job"},"create a job")," on the platform, and then configure the relevant variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. In our tests, we used the exact same ",(0,o.kt)("inlineCode",{parentName:"p"},".sql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," files that you find in this repository:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904853-8b030e6a-7eca-4a05-9bd3-6c051e595f71.png",alt:null})),(0,o.kt)("p",null,"Please note that instead of having a local dbt folder, you could have your dbt code in a Github repo and then either clone it using Github APIs at runtime, or import it in dbt cloud and use the platform to run the code base."),(0,o.kt)("h2",{id:"how-to-run-aka-the-whole-enchilada"},"How to run (a.k.a. the whole enchilada)"),(0,o.kt)("h3",{id:"run-the-flow"},"Run the flow"),(0,o.kt)("p",null,"Once the above setup steps are completed, you can run the flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cd into the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," folder;"),(0,o.kt)("li",{parentName:"ul"},"run the flow with ",(0,o.kt)("inlineCode",{parentName:"li"},'METAFLOW_PROFILE=metaflow AWS_PROFILE=tooso AWS_DEFAULT_REGION=us-west-2 python my_dbt_flow.py --package-suffixes ".py" run --max-workers 4'),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"METAFLOW_PROFILE")," is needed to select a specific Metaflow config (you can omit it, if you're using the default), ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_PROFILE")," is needed to select a specific AWS config that runs the flow and it's related AWS infrastructure (you can omit it, if you're using the default), and ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_DEFAULT_REGION")," is needed to specify the target AWS region (you can omit it, if you've it already specified in your local AWS PROFILE and you do not wish to change it);"),(0,o.kt)("li",{parentName:"ul"},"visualize the performance card with ",(0,o.kt)("inlineCode",{parentName:"li"},"METAFLOW_PROFILE=metaflow AWS_PROFILE=tooso AWS_DEFAULT_REGION=us-west-2 python my_dbt_flow.py card view test_model --id recCard")," (see below for an intro to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jacopotagliabue/reclist"},"RecList"),").")),(0,o.kt)("h3",{id:"results"},"Results"),(0,o.kt)("p",null,"If you run the fully-featured flow (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"SAGEMAKER_DEPLOY=1"),") with the recommended setup, you will end up with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an up-to-date view in Snowflake, leveraging dbt to make raw data ready for machine learning; "),(0,o.kt)("li",{parentName:"ul"},"versioned datasets and model artifacts in your AWS, accessible through the standard ",(0,o.kt)("a",{parentName:"li",href:"https://docs.metaflow.org/metaflow/client"},"Metaflow client API"),";"),(0,o.kt)("li",{parentName:"ul"},"a Comet dashboard for experiment tracking of the deep learning model, displaying training stats;"),(0,o.kt)("li",{parentName:"ul"},"a versioned Metaflow card containing (some of) the tests run with RecList (see below);"),(0,o.kt)("li",{parentName:"ul"},"finally, a DL-based, sequential recommender system serving predictions in real-time using SageMaker for inference.")),(0,o.kt)("p",null,"If you log in into your AWS SageMaker interface, you should find the new endpoint for next event prediction available for inference:"),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904840-4fc64958-bf3c-476f-854b-e1fe82604d1b.png",alt:"aws sagemaker UI"})),(0,o.kt)("p",null,"If you run the flow with dbt cloud, you will also find the dbt run in the history section on the cloud platform, easily identifiable through the flow id and user. "),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904858-962297b8-4b31-420e-97c0-b53a0a9e03d0.png",alt:"dbt run history"})),(0,o.kt)("h3",{id:"bonus-reclist-and-metaflow-cards"},"BONUS: RecList and Metaflow cards"),(0,o.kt)("p",null,"The project includes a (stub of a) custom ",(0,o.kt)("a",{parentName:"p",href:"https://outerbounds.com/blog/integrating-pythonic-visual-reports-into-ml-pipelines/"},"DAG card")," showing how the model is performing according to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jacopotagliabue/reclist"},"RecList"),", our open-source framework for behavioral testing. We could devote an ",(0,o.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/ndcg-is-not-all-you-need-24eb6d2f1227"},"article")," / ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2111.09963"},"paper")," just to this (as we actually did recently!); you can visualize it with ",(0,o.kt)("inlineCode",{parentName:"p"},"METAFLOW_PROFILE=metaflow AWS_PROFILE=tooso AWS_DEFAULT_REGION=us-west-2 python my_dbt_flow.py card view test_model --id recCard")," at the end of your run. No matter how small, we wanted to include the card/test as a reminder of ",(0,o.kt)("em",{parentName:"p"},"how important is to understand model behavior before deployment"),". Cards are a natural UI to display some of the RecList information: since readable, shareable (self-)documentation is crucial for production, RecList new major release will include out-of-the-box support for visualization and reporting tools: reach out if you're interested!"),(0,o.kt)("p",null,"As a ",(0,o.kt)("em",{parentName:"p"},"bonus")," bonus feature (thanks Valay for the snippet!), ",(0,o.kt)("em",{parentName:"p"},"only when running with the dbt core setup"),", the (not-production-ready) function ",(0,o.kt)("inlineCode",{parentName:"p"},"get_dag_from_manifest")," will read the local manifest file and produce a dictionary compatible with Metaflow Card API. If you type ",(0,o.kt)("inlineCode",{parentName:"p"},"METAFLOW_PROFILE=metaflow AWS_PROFILE=tooso AWS_DEFAULT_REGION=us-west-2 python my_dbt_flow.py card view run_transformation --id dbtCard")," at the end of a successful run, you should see a card displaying the dbt card ",(0,o.kt)("em",{parentName:"p"},"as a Metaflow card"),", as in the image below:"),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214904847-62dad743-5f3a-4bb9-8a9d-33e121747dd1.png",alt:"dbt card on Metaflow"})),(0,o.kt)("p",null," We leave to the reader (and / or to future iterations) to explore how to combine dbt, RecList and other info into a custom, well-designed card!"),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Of course, the post-modern stack can be further expanded or improved in many ways. Without presumption of completeness, these are some ideas to start:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on the dataOps side, we could include some data quality checks, either by improving our dbt setup, or by introducing additional tooling: at ",(0,o.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/hagakure-for-mlops-the-four-pillars-of-ml-at-reasonable-scale-5a09bd073da"},"reasonable scale")," the greater marginal value is typically to be found in better data, as compared to better models;"),(0,o.kt)("li",{parentName:"ul"},"on the MLOps side, we barely scratched the surface: one side, we kept the modeling simple and avoid any tuning, which is however very easy to do using Metaflow built-in parallelization abilities; on the other, you may decide to complicate the flow with other tools, improve on serving etc. (e.g. the proposal ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jacopotagliabue/you-dont-need-a-bigger-boat"},"here"),"). Swapping in-and-out different tools with similar functionalities should be easy: in a previous work, we ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/jacopotagliabue/you-dont-need-a-bigger-boat/blob/main/local_flow/rec/src/utils.py"},"abstracted away experiment tracking")," and allow users to pick ",(0,o.kt)("a",{parentName:"li",href:"https://neptune.ai/"},"Neptune")," as an alternative SaaS platform. Similar considerations apply to this use case as well;"),(0,o.kt)("li",{parentName:"ul"},"a proper RecList for this flow is yet to be developed, as the current proposal is nothing more than a stub showing how easy it is to run a devoted test suite when needed: you can augment the simple suite we prepared, improve the visualization on cards or both - since RecList roadmap is quickly progressing, we expect a deeper integration and a whole new set of functionalities to be announced soon. Stay tuned for our next iteration on this!")),(0,o.kt)("p",null,"Is this the ",(0,o.kt)("em",{parentName:"p"},"only")," way to run dbt in Metaflow? Of course not - in particular, you could think of writing a small wrapper around a flow and a dbt-core project that creates individual Metaflow steps corresponding to individual dbt steps, pretty much like suggested ",(0,o.kt)("a",{parentName:"p",href:"https://www.astronomer.io/blog/airflow-dbt-1/"},"here")," for another orchestrator. But this is surely a story for another repo / time ;-)"))}u.isMDXComponent=!0}}]);