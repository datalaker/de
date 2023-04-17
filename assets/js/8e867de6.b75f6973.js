"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96268],{3905:(I,g,A)=>{A.d(g,{Zo:()=>d,kt:()=>b});var C=A(67294);function i(I,g,A){return g in I?Object.defineProperty(I,g,{value:A,enumerable:!0,configurable:!0,writable:!0}):I[g]=A,I}function e(I,g){var A=Object.keys(I);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(I);g&&(C=C.filter((function(g){return Object.getOwnPropertyDescriptor(I,g).enumerable}))),A.push.apply(A,C)}return A}function l(I){for(var g=1;g<arguments.length;g++){var A=null!=arguments[g]?arguments[g]:{};g%2?e(Object(A),!0).forEach((function(g){i(I,g,A[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(A)):e(Object(A)).forEach((function(g){Object.defineProperty(I,g,Object.getOwnPropertyDescriptor(A,g))}))}return I}function a(I,g){if(null==I)return{};var A,C,i=function(I,g){if(null==I)return{};var A,C,i={},e=Object.keys(I);for(C=0;C<e.length;C++)A=e[C],g.indexOf(A)>=0||(i[A]=I[A]);return i}(I,g);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(I);for(C=0;C<e.length;C++)A=e[C],g.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(I,A)&&(i[A]=I[A])}return i}var n=C.createContext({}),t=function(I){var g=C.useContext(n),A=g;return I&&(A="function"==typeof I?I(g):l(l({},g),I)),A},d=function(I){var g=t(I.components);return C.createElement(n.Provider,{value:g},I.children)},s={inlineCode:"code",wrapper:function(I){var g=I.children;return C.createElement(C.Fragment,{},g)}},c=C.forwardRef((function(I,g){var A=I.components,i=I.mdxType,e=I.originalType,n=I.parentName,d=a(I,["components","mdxType","originalType","parentName"]),c=t(A),b=i,m=c["".concat(n,".").concat(b)]||c[b]||s[b]||e;return A?C.createElement(m,l(l({ref:g},d),{},{components:A})):C.createElement(m,l({ref:g},d))}));function b(I,g){var A=arguments,i=g&&g.mdxType;if("string"==typeof I||i){var e=A.length,l=new Array(e);l[0]=c;var a={};for(var n in g)hasOwnProperty.call(g,n)&&(a[n]=g[n]);a.originalType=I,a.mdxType="string"==typeof I?I:i,l[1]=a;for(var t=2;t<e;t++)l[t]=A[t];return C.createElement.apply(null,l)}return C.createElement.apply(null,A)}c.displayName="MDXCreateElement"},97297:(I,g,A)=>{A.r(g),A.d(g,{assets:()=>n,contentTitle:()=>l,default:()=>s,frontMatter:()=>e,metadata:()=>a,toc:()=>t});var C=A(87462),i=(A(67294),A(3905));const e={},l="Lab: Simple Data Pipeline with HDInsight",a={unversionedId:"processing/lab-azure-hdinsight-simple-data-processing/README",id:"processing/lab-azure-hdinsight-simple-data-processing/README",title:"Lab: Simple Data Pipeline with HDInsight",description:"Pre-requisites",source:"@site/docs/03-processing/lab-azure-hdinsight-simple-data-processing/README.md",sourceDirName:"03-processing/lab-azure-hdinsight-simple-data-processing",slug:"/processing/lab-azure-hdinsight-simple-data-processing/",permalink:"/docs/processing/lab-azure-hdinsight-simple-data-processing/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Running Apache Spark jobs on Cloud Dataproc",permalink:"/docs/processing/lab-gcp-dataproc/"},next:{title:"Azure Synapse Analytics",permalink:"/docs/processing/azure-synapse-analytics"}},n={},t=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"SQL Queries",id:"sql-queries",level:2},{value:"SQL Server Table",id:"sql-server-table",level:3},{value:"Hive Tables and Query",id:"hive-tables-and-query",level:3},{value:"Hive Query to save data back to Gen 2 storage",id:"hive-query-to-save-data-back-to-gen-2-storage",level:3},{value:"Sqoop commands",id:"sqoop-commands",level:3}],d={toc:t};function s(I){let{components:g,...e}=I;return(0,i.kt)("wrapper",(0,C.Z)({},d,e,{components:g,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-simple-data-pipeline-with-hdinsight"},"Lab: Simple Data Pipeline with HDInsight"),(0,i.kt)("p",null,(0,i.kt)("img",{src:A(98213).Z,width:"441",height:"161"})),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Azure account"),(0,i.kt)("li",{parentName:"ol"},"Gen2 Storage in azure"),(0,i.kt)("li",{parentName:"ol"},"HDInsight Hadoop Cluster in azure"),(0,i.kt)("li",{parentName:"ol"},"SQL server in azure")),(0,i.kt)("h2",{id:"sql-queries"},"SQL Queries"),(0,i.kt)("h3",{id:"sql-server-table"},"SQL Server Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [dbo].[delays](\n[origin_city_name] [nvarchar](50) NOT NULL,\n[weather_delay] float,\nCONSTRAINT [PK_delays] PRIMARY KEY CLUSTERED\n([origin_city_name] ASC))\nGO\n\nSELECT * FROM information_schema.tables\nGO\n")),(0,i.kt)("h3",{id:"hive-tables-and-query"},"Hive Tables and Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE flightdelay_raw;\n\nCREATE EXTERNAL TABLE flightdelay_raw(\n    YEAR string,\n    FL_DATE string,\n    UNIQUE_CARRIER string,\n    CARRIER string,\n    FL_NUM string,\n    ORIGIN_AIRPORT_ID string,\n    ORIGIN string,\n    ORIGIN_CITY_NAME string,\n    ORIGIN_CITY_NAME_TEMP string,\n    ORIGIN_STATE_ABR string,\n    DEST_AIRPORT_ID string,\n    DEST string,\n    DEST_CITY_NAME string,\n    DEST_CITY_NAME_TEMP string,\n    DEST_STATE_ABR string,\n    DEP_DELAY_NEW float,\n    ARR_DELAY_NEW float,\n    CARRIER_DELAY float,\n    WEATHER_DELAY float,\n    NAS_DELAY float,\n    SECURITY_DELAY float,\n    LATE_AIRCRAFT_DELAY float)\n-- The following lines describe the format and location of the file\nROW FORMAT DELIMITED FIELDS TERMINATED BY ','\nLINES TERMINATED BY '\\n'\nSTORED AS TEXTFILE\nLOCATION '/demo/FlightDelayData/InputData';\n\n\nDROP TABLE flightdelay;\n\nCREATE TABLE flightdelay AS\nSELECT YEAR AS year,\n    FL_DATE AS flight_date,\n    substring(UNIQUE_CARRIER, 2, length(UNIQUE_CARRIER) -1) AS unique_carrier,\n    substring(CARRIER, 2, length(CARRIER) -1) AS carrier,\n    substring(FL_NUM, 2, length(FL_NUM) -1) AS flight_num,\n    ORIGIN_AIRPORT_ID AS origin_airport_id,\n    substring(ORIGIN, 2, length(ORIGIN) -1) AS origin_airport_code,\n    substring(ORIGIN_CITY_NAME, 2) AS origin_city_name,\n    substring(ORIGIN_STATE_ABR, 2, length(ORIGIN_STATE_ABR) -1)  AS origin_state_abr,\n    DEST_AIRPORT_ID AS dest_airport_id,\n    substring(DEST, 2, length(DEST) -1) AS dest_airport_code,\n    substring(DEST_CITY_NAME,2) AS dest_city_name,\n    substring(DEST_STATE_ABR, 2, length(DEST_STATE_ABR) -1) AS dest_state_abr,\n    DEP_DELAY_NEW AS dep_delay_new,\n    ARR_DELAY_NEW AS arr_delay_new,\n    CARRIER_DELAY AS carrier_delay,\n    WEATHER_DELAY AS weather_delay,\n    NAS_DELAY AS nas_delay,\n    SECURITY_DELAY AS security_delay,\n    LATE_AIRCRAFT_DELAY AS late_aircraft_delay\nFROM flightdelay_raw;\n")),(0,i.kt)("h3",{id:"hive-query-to-save-data-back-to-gen-2-storage"},"Hive Query to save data back to Gen 2 storage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE DIRECTORY '/tutorials/flightdelays/output'\nROW FORMAT DELIMITED FIELDS TERMINATED BY ','\nSELECT regexp_replace(origin_city_name, '''', ''),\n    avg(weather_delay)\nFROM delays\nWHERE weather_delay IS NOT NULL\nGROUP BY origin_city_name;\n")),(0,i.kt)("h3",{id:"sqoop-commands"},"Sqoop commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"// SSH and Sqoop export\nssh eshantssh@clustername108-ssh.azurehdinsight.net\n\nsqoop list-databases --connect jdbc:sqlserver://dbs108.database.windows.net:1433 --username eshant -P\n\nsqoop export --connect 'jdbc:sqlserver://dbs108.database.windows.net:1433;database=db108' --username eshant -P --table 'delays' --export-dir '/demo/FlightDelayData/OutputData' --fields-terminated-by ',' -m 1\n")))}s.isMDXComponent=!0},98213:(I,g,A)=>{A.d(g,{Z:()=>C});const C="data:image/svg+xml;base64,PHN2ZyBob3N0PSI2NWJkNzExNDRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0NDFweCIgaGVpZ2h0PSIxNjFweCIgdmlld0JveD0iLTAuNSAtMC41IDQ0MSAxNjEiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7UXcyQ2lxSXF4N2hOaU9WUXhmbXYmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7elpiUmJwc3dGSWFmSnZlQUU1TGNMdW5hU3B1MENYVzdkdUVNckJxYjJTYVFQZjFzT0lSUXA5T2thZEFiWXY4K3hqNS9QaCt6SW9leXZWZTBLajdMRFBncUNySjJSWTZyS05yc2lYMDY0ZHdMNnlqdWhWeXhySmZDVVVqWUwwQXhRTFZtR2VoSm9KR1NHMVpOeFZRS0FhbVphRlFwMlV6RGZrZytYYldpT2E0WWpFS1NVZzVlMkhlV21hSlhkOUYyMUIrQTVjV3djaGp2KzVHU0RzSDRZbDNRVERaWEVybGJrWU9TMHZTdHNqMEFkOTROdnZUelByNHhldG1ZQW1IK1pzSzZuM0Npdk1iY2NGL21QQ1FMbWMwZHUwSUsrL09oTUNXM3ZkQTIrM0FYOCtZT1VOS3lWaWxHNFNxR3Fod3dpbHl5dDlTQUxNR29zdzFSd0tsaHArbmJLZjUvK1NWdVRORTJNTXZiR1VkZXhrOFZselN6MmlINTVtaGdObFVIbEgwY3FhR2N2cmgrWXFSeVdFVEJQUWpmSlNWcmtZRmJJN0N1TkFVemtGUzB5N2V4WitDV2FTZFFCdG8vMitZYmdoUFdDQkNlb0IxMm14SEhjR0NzdUVJeER2N2R3WGdaWm9qUHpHWW1ab2lYOFdOWlNXVmNDYk9FRExROEhCK0Y3cnkycFlmWDJvQ3lyVm96a2J0UnR5UEwwZGRQaThNVEJjdlJzMXVHbm8xUHozWW1lalpleGwrVVRFSHJFUjhtWHVIekRxRWg4WExRREJmLzNOUnNmV3IyTTFHejlUSk9hTWNDSXZOTTA1ZWg4UFEza2pVRHI2aDNSa280SnlwN3o3Y25QRXY2cDVTVmc2QzlVYnU3RXhab1VLZXVhQnY2ekpjMzhuV2QvcDlHMnU3NDJkbU5YWDI3azd2ZiZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPgogICAgPGRlZnMvPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTSAxMjAgMzAgTCAxNTMuNjMgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz4KICAgICAgICA8cGF0aCBkPSJNIDE1OC44OCAzMCBMIDE1MS44OCAzMy41IEwgMTUzLjYzIDMwIEwgMTUxLjg4IDI2LjUgWiIgZmlsbD0icmdiKDAsIDAsIDApIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPgogICAgICAgICAgICA8c3dpdGNoPgogICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogMXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIENTViBmaWxlIHRvIERhdGFsYWtlIFN0b3JhZ2UgR2VuMgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iNjAiIHk9IjM0IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICAgICAgICAgICAgICAgICAgVXBsb2FkIENTViBmaWxlIHRvIEQuLi4KICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgPC9zd2l0Y2g+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0gMjgwIDMwIEwgMzEzLjYzIDMwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+CiAgICAgICAgPHBhdGggZD0iTSAzMTguODggMzAgTCAzMTEuODggMzMuNSBMIDMxMy42MyAzMCBMIDMxMS44OCAyNi41IFoiIGZpbGw9InJnYigwLCAwLCAwKSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxyZWN0IHg9IjE2MCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPgogICAgICAgICAgICA8c3dpdGNoPgogICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAzMHB4OyBtYXJnaW4tbGVmdDogMTYxcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZGF0YSB0byBIREluc2lnaHQgY2x1c3RlciB1c2luZyBIaXZlIFNRTAogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iMjIwIiB5PSIzNCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgICAgIEltcG9ydCBkYXRhIHRvIEhESW5zLi4uCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNIDM4MCA2MCBMIDM4MCA5My42MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0gMzgwIDk4Ljg4IEwgMzc2LjUgOTEuODggTCAzODAgOTMuNjMgTCAzODMuNSA5MS44OCBaIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj4KICAgICAgICAgICAgPHN3aXRjaD4KICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMzBweDsgbWFyZ2luLWxlZnQ6IDMyMXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2VzcyBkYXRhIGluIEhESW5zaWdodCB1c2luZyBIaXZlIFNRTAogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iMzgwIiB5PSIzNCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgICAgIFByb2Nlc3MgZGF0YSBpbiBIREluLi4uCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNIDMyMCAxMzAgTCAyODYuMzcgMTMwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+CiAgICAgICAgPHBhdGggZD0iTSAyODEuMTIgMTMwIEwgMjg4LjEyIDEyNi41IEwgMjg2LjM3IDEzMCBMIDI4OC4xMiAxMzMuNSBaIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIzMjAiIHk9IjEwMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPgogICAgICAgICAgICA8c3dpdGNoPgogICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMzBweDsgbWFyZ2luLWxlZnQ6IDMyMXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBkYXRhIGJhY2sgdG8gR2VuMiBzdG9yYWdlCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIzODAiIHk9IjEzNCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgICAgIFNhdmUgZGF0YSBiYWNrIHRvIEdlLi4uCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cmVjdCB4PSIxNjAiIHk9IjEwMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0icmdiKDI1NSwgMjU1LCAyNTUpIiBzdHJva2U9InJnYigwLCAwLCAwKSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPgogICAgICAgICAgICA8c3dpdGNoPgogICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMzBweDsgbWFyZ2luLWxlZnQ6IDE2MXB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNpbmcgc3Fvb3AgZXhwb3J0IGRhdGEgdG8gU1FMIHNlcnZlciB0YWJsZQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iMjIwIiB5PSIxMzQiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4KICAgICAgICAgICAgICAgICAgICBVc2luZyBzcW9vcCBleHBvcnQgZC4uLgogICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICA8L3N3aXRjaD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8c3dpdGNoPgogICAgICAgIDxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPgogICAgICAgIDxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPgogICAgICAgICAgICAgICAgVGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXkKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvYT4KICAgIDwvc3dpdGNoPgo8L3N2Zz4="}}]);