"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={},s="Interpreting a Spark DAG",i={unversionedId:"foundations/basics/spark-dag",id:"foundations/basics/spark-dag",title:"Interpreting a Spark DAG",description:"A DAG is just a regular graph with nodes and edges but with no cycles or loops. In order to understand a Spark DAG, we first have to understand where a DAG comes into the picture during the execution of a Spark job.",source:"@site/docs/01-foundations/basics/spark-dag.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/spark-dag",permalink:"/docs/foundations/basics/spark-dag",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Hadoop vs Spark",permalink:"/docs/foundations/basics/hadoop-vs-spark"},next:{title:"Spark RDDs",permalink:"/docs/foundations/basics/rdd"}},p={},l=[],c={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interpreting-a-spark-dag"},"Interpreting a Spark DAG"),(0,n.kt)("p",null,"A DAG is just a regular graph with nodes and edges but with no cycles or loops. In order to understand a Spark DAG, we first have to understand where a DAG comes into the picture during the execution of a Spark job."),(0,n.kt)("p",null,"When a user submits a Spark job, the Spark driver first identifies all the tasks involved in accomplishing the job. It then figures out which of these tasks can be run in parallel and which tasks depend on other tasks. Based on this information, it converts the Spark job into a graph of tasks. The nodes at the same level indicate jobs that can be run in parallel, and the nodes at different levels indicate tasks that need to be run after the previous nodes. This graph is acyclic, as denoted by ",(0,n.kt)("em",{parentName:"p"},"A")," in DAG. This DAG is then converted into a physical execution plan. In the physical execution plan, nodes that are at the same level are segregated into stages. Once all the tasks and stages are complete, the Spark job is termed as completed."),(0,n.kt)("p",null,"Let's look at what a DAG looks like. You can access a Spark DAG from the Spark UI. Just click on any of the job links and then click on the ",(0,n.kt)("strong",{parentName:"p"},"DAG Visualization")," link."),(0,n.kt)("p",null,"Here is a DAG for a simple word count problem:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218313245-4835191c-3363-48ec-a246-97b85b434a52.jpg",alt:"B17525_13_024"})),(0,n.kt)("p",null,"In the first stage, we see that the word count has three steps and a reduce step in the next stage. Ignore the stage numbers, as Spark assigns consecutive numbers for all jobs that are run in that Spark session. So, if you have run any other job before this job, the number gets sequentially incremented. Here is some further information about each task:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"textFile")," task corresponds to the reading of the file from the storage."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"flatMap")," task corresponds to the splitting of the words."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"map")," task corresponds to the formation of (",(0,n.kt)("strong",{parentName:"li"},"word"),", ",(0,n.kt)("strong",{parentName:"li"},"1"),") pairs."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"reduceByKey")," task corresponds to the aggregation of all the (word, 1) pairs together to get the sum of each distinct word.")),(0,n.kt)("p",null,"You can get more details about each step by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Stage")," boxes. Here is an example of a detailed view of ",(0,n.kt)("strong",{parentName:"p"},"Stage 12")," from the previous screenshot:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/218313250-cb765fa4-f16f-4cbe-aaf1-16233287c00c.jpg",alt:"B17525_13_025"})),(0,n.kt)("p",null,"The main advantage of learning to read Spark DAGs is that they help you identify bottlenecks in your Spark queries. You can identify how much data movement is happening between stages (also known as ",(0,n.kt)("strong",{parentName:"p"},"data shuffle"),"), if there are too many sequential stages, if there are slow stages in the critical path, and so on."),(0,n.kt)("p",null,"You can learn more about Spark DAGs here: ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/3.0.0/web-ui.html"},"https://spark.apache.org/docs/3.0.0/web-ui.html"),"."))}u.isMDXComponent=!0}}]);