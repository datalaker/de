"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=s,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const i={},o="Sparkify Music Company Data Model in Postgres",r={unversionedId:"data-modeling/lab-sparkify-data-model-postgres/README",id:"data-modeling/lab-sparkify-data-model-postgres/README",title:"Sparkify Music Company Data Model in Postgres",description:"In this, we will model the data with Postgres and build an ETL pipeline using Python. The fact and dimension tables for a star database schema for a particular analytic focus is defined, and an ETL pipeline that transfers data from files in two local directories into these tables in Postgres using Python and SQL was developed.",source:"@site/docs/04-data-modeling/lab-sparkify-data-model-postgres/README.md",sourceDirName:"04-data-modeling/lab-sparkify-data-model-postgres",slug:"/data-modeling/lab-sparkify-data-model-postgres/",permalink:"/docs/data-modeling/lab-sparkify-data-model-postgres/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},l={},d=[{value:"Songs dataset",id:"songs-dataset",level:2},{value:"Logs dataset",id:"logs-dataset",level:2},{value:"Quality",id:"quality",level:2},{value:"Tidiness",id:"tidiness",level:2},{value:"Database Schema Design - Entity Relation Diagram (ERD)",id:"database-schema-design---entity-relation-diagram-erd",level:2},{value:"3NF to Dimensional Data Model",id:"3nf-to-dimensional-data-model",level:2},{value:"Process Flow",id:"process-flow",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sparkify-music-company-data-model-in-postgres"},"Sparkify Music Company Data Model in Postgres"),(0,s.kt)("p",null,"In this, we will model the data with Postgres and build an ETL pipeline using Python. The fact and dimension tables for a star database schema for a particular analytic focus is defined, and an ETL pipeline that transfers data from files in two local directories into these tables in Postgres using Python and SQL was developed."),(0,s.kt)("p",null,"A startup called Sparkify wants to analyze the data they've been collecting on songs and user activity on their new music streaming application. The analytics team is particularly interested in understanding what songs users are listening to. Currently, they don't have an easy way to query their data, which resides in a directory of JSON logs on user activity on the application, as well as a directory with JSON meta-data on the songs in their application."),(0,s.kt)("p",null,"They'd like a data engineer to create a Postgres database with tables designed to optimize queries on song play analysis. The role of this project is to create a database schema and ETL pipeline for this analysis."),(0,s.kt)("p",null,"We will model the data with Postgres and build an ETL pipeline using Python. The fact and dimension tables for a star database schema for a particular analytic focus is defined, and an ETL pipeline that transfers data from files in two local directories into these tables in Postgres using Python and SQL was developed."),(0,s.kt)("h2",{id:"songs-dataset"},"Songs dataset"),(0,s.kt)("p",null,"Songs dataset is a subset of\xa0",(0,s.kt)("a",{parentName:"p",href:"http://millionsongdataset.com/"},"Million Song Dataset"),". Each file in the dataset is in JSON format and contains meta-data about a song and the artist of that song."),(0,s.kt)("p",null,"Sample record:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"num_songs": 1, "artist_id": "ARJIE2Y1187B994AB7", "artist_latitude": null, "artist_longitude": null, "artist_location": "", "artist_name": "Line Renaud", "song_id": "SOUPIRU12A6D4FA1E1", "title": "Der Kleine Dompfaff", "duration": 152.92036, "year": 0}\n')),(0,s.kt)("h2",{id:"logs-dataset"},"Logs dataset"),(0,s.kt)("p",null,"Logs dataset is generated by\xa0",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Interana/eventsim"},"Event Simulator"),". These log files in JSON format simulate activity logs from a music streaming application based on specified configurations."),(0,s.kt)("p",null,"Sample record:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"artist": null, "auth": "Logged In", "firstName": "Walter", "gender": "M", "itemInSession": 0, "lastName": "Frye", "length": null, "level": "free", "location": "San Francisco-Oakland-Hayward, CA", "method": "GET","page": "Home", "registration": 1540919166796.0, "sessionId": 38, "song": null, "status": 200, "ts": 1541105830796, "userAgent": "\\"Mozilla\\/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/36.0.1985.143 Safari\\/537.36\\"", "userId": "39"}\n')),(0,s.kt)("h2",{id:"quality"},"Quality"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"LogDataset : userID - Found users with empty string '', firstName as None"),(0,s.kt)("li",{parentName:"ol"},"LogDataset : Major of the artist_id & song_id is null"),(0,s.kt)("li",{parentName:"ol"},"Artists table doesn't have list of all the artists found in log"),(0,s.kt)("li",{parentName:"ol"},"Songs table doesn't have all the songs found in log"),(0,s.kt)("li",{parentName:"ol"},"LogDataset : Logs are ordered by timestamp, so they need to be sorted. This enables latest user level to be updated in the users table")),(0,s.kt)("h2",{id:"tidiness"},"Tidiness"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"LogDataset : ts : timestamp column as int64 needs to converted to timestamp"),(0,s.kt)("li",{parentName:"ol"},"SongPlays table : Add new column songplay_id as serial ( auto-increment )"),(0,s.kt)("li",{parentName:"ol"},"user : table : Adding column ts"),(0,s.kt)("li",{parentName:"ol"},"songplays : table : Adding columns itemInSession, song, artist")),(0,s.kt)("h2",{id:"database-schema-design---entity-relation-diagram-erd"},"Database Schema Design - Entity Relation Diagram (ERD)"),(0,s.kt)("p",null,"The Star Database Schema used for data modeling in this ETL pipeline. There is one fact table containing all the metrics (facts) associated to each event (user actions), and four dimensions tables, containing associated information such as user name, artist name, song meta-data etc. This model enables to search the database schema with the minimum number of\xa0",(0,s.kt)("em",{parentName:"p"},"SQL JOIN"),"s possible and enable fast read queries. The amount of data we need to analyze is not big enough to require big data solutions or NoSQL databases."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/215310998-b894e4b2-b6ba-4a2d-a84b-531e67a32cbc.png",alt:"data_schema"})),(0,s.kt)("h2",{id:"3nf-to-dimensional-data-model"},"3NF to Dimensional Data Model"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(55504).Z,width:"801",height:"751"})),(0,s.kt)("h2",{id:"process-flow"},"Process Flow"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7449).Z,width:"761",height:"541"})))}p.isMDXComponent=!0},55504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/datamodel.drawio-ede0f9734cd23575b86e2ff69953be68.svg"},7449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/process-flow.drawio-ddb531c9632343d10d10a3ef79771412.svg"}}]);