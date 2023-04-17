"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={},o="Twitter Sentiment Realtime",s={unversionedId:"capstones/other/twitter-sentiment-realtime/README",id:"capstones/other/twitter-sentiment-realtime/README",title:"Twitter Sentiment Realtime",description:"Objective",source:"@site/docs/12-capstones/other/twitter-sentiment-realtime/README.md",sourceDirName:"12-capstones/other/twitter-sentiment-realtime",slug:"/capstones/other/twitter-sentiment-realtime/",permalink:"/docs/capstones/other/twitter-sentiment-realtime/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},c={},l=[{value:"Objective",id:"objective",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Solution",id:"solution",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twitter-sentiment-realtime"},"Twitter Sentiment Realtime"),(0,i.kt)("h2",{id:"objective"},"Objective"),(0,i.kt)("p",null,"Real-time Pipeline for pulling data from twitter, estimating sentiment and showing on dashboard"),(0,i.kt)("p",null,"The source is twitter and the main result to display on the dashboard is the sentiment analysis of a list of stocks. The final dashboard looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215313939-dec9faf8-5b85-40bd-aed7-817915aceff5.png",alt:"dashboard"})),(0,i.kt)("p",null,"The heatmap indicates the sentiment analysis for each stock. The map indicates headquarters' location with the corresponding sentiment."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215313933-59ecdf1e-ebec-451f-aa0b-5382309ae835.png",alt:"arch"})),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 [ 201]  DockerfileA\n\u251c\u2500\u2500 [ 536]  DockerfileAW\n\u251c\u2500\u2500 [1.7K]  DockerfileB\n\u251c\u2500\u2500 [ 293]  DockerfileK\n\u251c\u2500\u2500 [ 262]  DockerfileS\n\u251c\u2500\u2500 [2.7K]  airflow\n\u2502   \u2514\u2500\u2500 [2.6K]  dags\n\u2502       \u2514\u2500\u2500 [2.6K]  orchestrator.py\n\u251c\u2500\u2500 [6.1K]  beam\n\u2502   \u251c\u2500\u2500 [1.6K]  Dockerfile\n\u2502   \u2514\u2500\u2500 [4.4K]  dataflow\n\u2502       \u251c\u2500\u2500 [ 119]  requirements.txt\n\u2502       \u2514\u2500\u2500 [4.1K]  transform.py\n\u251c\u2500\u2500 [5.2K]  docker-compose.yml\n\u251c\u2500\u2500 [ 799]  README.md\n\u251c\u2500\u2500 [  77]  requirements_airflow.txt\n\u251c\u2500\u2500 [  63]  requirements_kafka.txt\n\u251c\u2500\u2500 [  94]  requirements_spark.txt\n\u251c\u2500\u2500 [6.0K]  spark\n\u2502   \u251c\u2500\u2500 [ 631]  bigquery.py\n\u2502   \u251c\u2500\u2500 [2.7K]  consumer.py\n\u2502   \u251c\u2500\u2500 [ 760]  publisher.py\n\u2502   \u2514\u2500\u2500 [1.8K]  utils.py\n\u2514\u2500\u2500 [5.1K]  terraform\n    \u251c\u2500\u2500 [3.9K]  main.tf\n    \u2514\u2500\u2500 [1.1K]  variables.tf\n\n  73K used in 7 directories, 22 files\n")))}u.isMDXComponent=!0}}]);