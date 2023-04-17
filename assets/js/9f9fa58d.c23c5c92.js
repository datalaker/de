"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22461],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return t?n.createElement(g,r(r({ref:a},p),{},{components:t})):n.createElement(g,r({ref:a},p))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62842:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(87462),o=(t(67294),t(3905));const i={},r="Amazon Sagemaker",s={unversionedId:"datascience/sagemaker/README",id:"datascience/sagemaker/README",title:"Amazon Sagemaker",description:"Amazon SageMaker helps data scientists and developers to prepare, build, train, and deploy machine learning models quickly by bringing together a broad set of purpose-built capabilities. In this demo, learn about how SageMaker can accelerate machine learning development by way of an example where we build the perfect musical playlist tailored to a user's tastes.",source:"@site/docs/10-datascience/sagemaker/README.md",sourceDirName:"10-datascience/sagemaker",slug:"/datascience/sagemaker/",permalink:"/docs/datascience/sagemaker/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},l={},m=[{value:"Lab: AWS Sagemaker In-depth",id:"lab-aws-sagemaker-in-depth",level:2},{value:"Lab: Managing Machine Learning Workflows and Deployments",id:"lab-managing-machine-learning-workflows-and-deployments",level:2},{value:"Lab: Music Recommendation using Amazon SageMaker",id:"lab-music-recommendation-using-amazon-sagemaker",level:2},{value:"Lab: Automate medical diagnosis using Amazon SageMaker",id:"lab-automate-medical-diagnosis-using-amazon-sagemaker",level:2},{value:"Lab: End-to-end workflow for auto claims fraud detection using Amazon SageMaker",id:"lab-end-to-end-workflow-for-auto-claims-fraud-detection-using-amazon-sagemaker",level:2},{value:"Lab: Customer Churn Prediction with XGBoost",id:"lab-customer-churn-prediction-with-xgboost",level:2},{value:"Lab: Recommendation Engine for E-Commerce Sales",id:"lab-recommendation-engine-for-e-commerce-sales",level:2},{value:"Solution",id:"solution",level:2}],p={toc:m};function c(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amazon-sagemaker"},"Amazon Sagemaker"),(0,o.kt)("p",null,"Amazon SageMaker helps data scientists and developers to prepare, build, train, and deploy machine learning models quickly by bringing together a broad set of purpose-built capabilities. In this demo, learn about how SageMaker can accelerate machine learning development by way of an example where we build the perfect musical playlist tailored to a user's tastes."),(0,o.kt)("iframe",{width:"100%",height:"480",src:"https://www.youtube.com/embed/Qv_Tr_BCFCQ",title:"Introduction to Amazon SageMaker",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"lab-aws-sagemaker-in-depth"},"Lab: AWS Sagemaker In-depth"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import Data into the S3 Data Lake"),(0,o.kt)("li",{parentName:"ol"},"Query the Amazon S3 Data Lake with Amazon Athena"),(0,o.kt)("li",{parentName:"ol"},"Query Data with AWS Data Wrangler"),(0,o.kt)("li",{parentName:"ol"},"Dive Deep into the Dataset with Athena and SageMaker"),(0,o.kt)("li",{parentName:"ol"},"Convert Raw Text to BERT Features using Hugging Face and TensorFlow"),(0,o.kt)("li",{parentName:"ol"},"Add Features to SageMaker Feature Store"),(0,o.kt)("li",{parentName:"ol"},"Create Experiment and Process Data"),(0,o.kt)("li",{parentName:"ol"},"Query The Feature Store"),(0,o.kt)("li",{parentName:"ol"},"Show the Experiment Tracking Lineage"),(0,o.kt)("li",{parentName:"ol"},"Show Lineage Artifacts For Our Processing Job"),(0,o.kt)("li",{parentName:"ol"},"Fine-Tuning a BERT Model and Create a Text Classifier"),(0,o.kt)("li",{parentName:"ol"},"Specify Manual Hyper-Parameters"),(0,o.kt)("li",{parentName:"ol"},"Load Pretrained BERT Model"),(0,o.kt)("li",{parentName:"ol"},"Setup Hyper-Parameters for Classification Layer"),(0,o.kt)("li",{parentName:"ol"},"Evaluate Model with Amazon SageMaker Processing Jobs and Scikit-Learn"),(0,o.kt)("li",{parentName:"ol"},"Detect Model Bias using smclarify"),(0,o.kt)("li",{parentName:"ol"},"Perform A/B Test using REST Endpoints")),(0,o.kt)("h2",{id:"lab-managing-machine-learning-workflows-and-deployments"},"Lab: Managing Machine Learning Workflows and Deployments"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/224300324-ca77de3c-0adf-4ed0-ac7e-26e15d8e901d.png",alt:"workflow-arch"})),(0,o.kt)("p",null,"We will cover the following recipes in this lab:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Working with Hugging Face models"),(0,o.kt)("li",{parentName:"ol"},"Preparing the prerequisites of a multi-model endpoint deployment"),(0,o.kt)("li",{parentName:"ol"},"Hosting multiple models with multi-model endpoints"),(0,o.kt)("li",{parentName:"ol"},"Setting up A/B testing on multiple models with production variants"),(0,o.kt)("li",{parentName:"ol"},"Preparing the Step Functions execution role"),(0,o.kt)("li",{parentName:"ol"},"Managing ML workflows with AWS Step Functions and the Data Science SDK"),(0,o.kt)("li",{parentName:"ol"},"Managing ML workflows with SageMaker Pipelines")),(0,o.kt)("h2",{id:"lab-music-recommendation-using-amazon-sagemaker"},"Lab: Music Recommendation using Amazon SageMaker"),(0,o.kt)("p",null,"Creating the perfect personalized musical playlist with Amazon SageMaker."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/224300316-8e1b0bd0-a78d-4efd-9389-e86e43713dad.png",alt:"musicrec-arch"})),(0,o.kt)("h2",{id:"lab-automate-medical-diagnosis-using-amazon-sagemaker"},"Lab: Automate medical diagnosis using Amazon SageMaker"),(0,o.kt)("p",null,"Detecting cancer cells by analyzing medical images using computer vision with Amazon SageMaker."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/224300300-b99fcfb5-d527-4811-aeaf-4d44d3ad3979.png",alt:"medical-diagnosis-output"})),(0,o.kt)("h2",{id:"lab-end-to-end-workflow-for-auto-claims-fraud-detection-using-amazon-sagemaker"},"Lab: End-to-end workflow for auto claims fraud detection using Amazon SageMaker"),(0,o.kt)("p",null,"The purpose of this end-to-end example is to demonstrate how to prepare, train, and deploy a model that detects auto insurance claims."),(0,o.kt)("p",null,'"Auto insurance fraud ranges from misrepresenting facts on insurance applications and inflating insurance claims to staging accidents and submitting claim forms for injuries or damage that never occurred, to false reports of stolen vehicles. Fraud accounted for between 15 percent and 17 percent of total claims payments for auto insurance bodily injury in 2012, according to an Insurance Research Council (IRC) study. The study estimated that between $5.6 billion and $7.7 billion was fraudulently added to paid claims for auto insurance bodily injury payments in 2012, compared with a range of $4.3 billion to $5.8 billion in 2002. " source: Insurance Information Institute'),(0,o.kt)("p",null,'In this example, we will use an auto insurance domain to detect claims that are possibly fraudulent. more precisely we address the use-case: "what is the likelihood that a given auto claim is fraudulent?" , and explore the technical solution.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/224300286-6e98a323-e4b7-46fc-9c6f-9bda8bd1abef.png",alt:"frauddetect-arch"})),(0,o.kt)("h2",{id:"lab-customer-churn-prediction-with-xgboost"},"Lab: Customer Churn Prediction with XGBoost"),(0,o.kt)("p",null,"Using Gradient Boosted Trees to Predict Mobile Customer Departure"),(0,o.kt)("p",null,"Losing customers is costly for any business. Identifying unhappy customers early on gives you a chance to offer them incentives to stay. This notebook describes using machine learning (ML) for the automated identification of unhappy customers, also known as customer churn prediction. ML models rarely give perfect predictions though, so this notebook is also about how to incorporate the relative costs of prediction mistakes when determining the financial outcome of using ML."),(0,o.kt)("p",null,"We use a familiar example of churn: leaving a mobile phone operator. Seems like one can always find fault with their provider du jour! And if the provider knows that a customer is thinking of leaving, it can offer timely incentives - such as a phone upgrade or perhaps having a new feature activated \u2013 and the customer may stick around. Incentives are often much more cost-effective than losing and reacquiring a customer."),(0,o.kt)("h2",{id:"lab-recommendation-engine-for-e-commerce-sales"},"Lab: Recommendation Engine for E-Commerce Sales"),(0,o.kt)("p",null,"This lab gives an overview of techniques and services offer by SageMaker to build and deploy a personalized recommendation engine."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/Managing_Machine_Learning_Workflows_and_Deployments.ipynb"},"Managing Machine Learning Workflows and Deployments")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/Music_Recommendation_using_Amazon_SageMaker.ipynb"},"Music Recommendation using Amazon SageMaker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/How_to_automate_medical_diagnosis_using_Amazon_SageMaker.ipynb"},"How to automate medical diagnosis using Amazon SageMaker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/End_to_end_workflow_for_auto_claims_fraud_detection_using_Amazon_SageMaker.ipynb"},"End-to-end workflow for auto claims fraud detection using Amazon SageMaker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/SageMaker_3cases.ipynb"},"Customer Churn Prediction with XGBoost")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/Recommendation_Engine_for_E_Commerce_Sales.ipynb"},"Recommendation Engine for E-Commerce Sales")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/aws-sagemaker-indepth.ipynb"},"AWS Sagemaker In-depth")),(0,o.kt)("li",{parentName:"ol"},"AWS Innovate, AI/ML Edition, EMEA (February 2021)"),(0,o.kt)("li",{parentName:"ol"},"Various demos on SageMaker Studio ","[ https://www.youtube.com/playlist?list=PLJgojBtbsuc0MjdtpJPo4g4PL8mMsd2nK ]"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/Managing_Machine_Learning_Workflows_and_Deployments.ipynb"},"Managing Machine Learning Workflows and Deployments")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/Music_Recommendation_using_Amazon_SageMaker.ipynb"},"Music Recommendation using Amazon SageMaker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/How_to_automate_medical_diagnosis_using_Amazon_SageMaker.ipynb"},"How to automate medical diagnosis using Amazon SageMaker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/End_to_end_workflow_for_auto_claims_fraud_detection_using_Amazon_SageMaker.ipynb"},"End-to-end workflow for auto claims fraud detection using Amazon SageMaker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/SageMaker_3cases.ipynb"},"Customer Churn Prediction with XGBoost")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/Recommendation_Engine_for_E_Commerce_Sales.ipynb"},"Recommendation Engine for E-Commerce Sales")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nbviewer.org/github/sparsh-ai/notebooks/blob/main/aws-sagemaker-indepth.ipynb"},"AWS Sagemaker In-depth"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# install tree command (helpful in printing folder structures)\napt-get install tree\n\n# setup AWS cli\nmkdir -p ~/.aws && cp /content/drive/MyDrive/AWS/d01_admin/* ~/.aws\nchmod 600 ~/.aws/credentials\npip install awscli\n\n# install boto3 and sagemaker\npip install boto3\npip install sagemaker\n\n# install dependencies\npip install pyathena\npip install awswrangler\npip install smclarify\npip install sagemaker-experiments\npip install sagemaker-tensorflow\npip install smclarify\n\n# install nlp libs\npip install transformers\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import boto3\nimport sagemaker\nimport re\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport io\nimport os\nimport sys\nimport time\nimport json\nfrom sagemaker.estimator import Estimator\n\n### global variables\nrole = "sagemakerRole"\nbase_job_prefix = "sklearn-housing"\ntraining_instance_type = "ml.m5.xlarge"\n\n### setup sagemaker session\nsess = sagemaker.Session()\nbucket = sess.default_bucket()\nregion = boto3.Session().region_name\naccount_id = boto3.client("sts").get_caller_identity().get("Account")\nrole_arn = "arn:aws:iam::{}:role/{}".format(account_id, role)\nsm = boto3.Session().client(service_name="sagemaker", region_name=region)\ns3 = boto3.Session().client(service_name="s3", region_name=region)\n')))}c.isMDXComponent=!0}}]);