"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},o="BigQuery Commandline",i={unversionedId:"storage/lab-bigquery-commandline/README",id:"storage/lab-bigquery-commandline/README",title:"BigQuery Commandline",description:"Objective",source:"@site/docs/02-storage/lab-bigquery-commandline/README.md",sourceDirName:"02-storage/lab-bigquery-commandline",slug:"/storage/lab-bigquery-commandline/",permalink:"/docs/storage/lab-bigquery-commandline/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},u={},p=[{value:"Objective",id:"objective",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Examine a table",id:"examine-a-table",level:3},{value:"Run the help command",id:"run-the-help-command",level:3},{value:"Run a query",id:"run-a-query",level:3},{value:"Create a new table",id:"create-a-new-table",level:3},{value:"Run queries",id:"run-queries",level:3},{value:"Clean up",id:"clean-up",level:3}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bigquery-commandline"},"BigQuery Commandline"),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"Bigquery basics command line operations"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"examine-a-table"},"Examine a table"),(0,r.kt)("p",null,"BigQuery offers a number of\xa0",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/public-data#sample_tables"},"sample tables"),"\xa0that you can run queries against. In this lab, you'll run queries against the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"shakespeare"),"\xa0table, which contains an entry for every word in every play."),(0,r.kt)("p",null,"To examine the schema of the Shakespeare table in the samples dataset, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq show bigquery-public-data:samples.shakespeare\n")),(0,r.kt)("p",null,"In this command you're doing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bq"),"\xa0to invoke the BigQuery command line tool"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show"),"\xa0is the action"),(0,r.kt)("li",{parentName:"ul"},"Then you're listing the name of the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"project:public dataset.table"),"\xa0in BigQuery that you want to see.")),(0,r.kt)("h3",{id:"run-the-help-command"},"Run the help command"),(0,r.kt)("p",null,"When you include a command name with the help commands, you get information about that specific command."),(0,r.kt)("p",null,"For example, the following call to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq help"),"\xa0retrieves information about the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"query"),"\xa0command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq help query\n")),(0,r.kt)("p",null,"To see a list of all of the commands\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq"),"\xa0uses, run just\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq help"),"."),(0,r.kt)("h3",{id:"run-a-query"},"Run a query"),(0,r.kt)("p",null,"Now you'll run a query to see how many times the substring \"raisin\" appears in Shakespeare's works."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To run a query, run the command\xa0",(0,r.kt)("inlineCode",{parentName:"li"},'bq query "[SQL_STATEMENT]"'),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Escape any quotation marks inside the ","[SQL_STATEMENT]"," with a \\ mark, or"),(0,r.kt)("li",{parentName:"ul"},'Use a different quotation mark type than the surrounding marks ("versus").'))),(0,r.kt)("li",{parentName:"ol"},'Run the following standard SQL query in Cloud Shell to count the number of times that the substring "raisin" appears in all of Shakespeare\'s works:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq query --use_legacy_sql=false\\\n'SELECT\n   word,\n   SUM(word_count) AS count\n FROM\n   `bigquery-public-data`.samples.shakespeare\n WHERE\n   word LIKE \"%raisin%\"\n GROUP BY\n   word'\n")),(0,r.kt)("p",null,"In this command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--use_legacy_sql=false"),"\xa0makes standard SQL the default query syntax.")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"word"),(0,r.kt)("th",{parentName:"tr",align:null},"count"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"praising"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Praising"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"raising"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dispraising"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dispraisingly"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"raisins"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"The table demonstrates that although the actual word\xa0raisin\xa0doesn't appear, the letters appear in order in several of Shakespeare's works."),(0,r.kt)("p",null,"If you search for a word that isn't in Shakespeare's works, no results are returned."),(0,r.kt)("p",null,'Run the following search for "huzzah", returns no matches:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"bq query --use_legacy_sql=false \\\n'SELECT\n   word\n FROM\n   `bigquery-public-data`.samples.shakespeare\n WHERE\n   word = \"huzzah\"'\n")),(0,r.kt)("h3",{id:"create-a-new-table"},"Create a new table"),(0,r.kt)("p",null,"Now create your own table. Every table is stored inside a dataset. A\xa0",(0,r.kt)("em",{parentName:"p"},"dataset"),"\xa0is a group of resources, such as tables and views."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a new dataset")),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq ls"),"\xa0command to list any existing datasets in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq ls\n")),(0,r.kt)("p",null,"You will be brought back to the command line since there aren't any datasets in your project yet."),(0,r.kt)("p",null,"Run\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq ls"),"\xa0and the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery-public-data"),"\xa0Project ID to list the datasets in that specific project, followed by a colon (:):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq ls bigquery-public-data:\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"           datasetId\n -----------------------------\n  austin_311\n  austin_bikeshare\n  austin_crime\n  austin_incidents\n  austin_waste\n  baseball\n  bitcoin_blockchain\n  bls\n  census_bureau_construction\n  census_bureau_international\n  census_bureau_usa\n  census_utility\n  chicago_crime\n  ...\n")),(0,r.kt)("p",null,"Now create a dataset. A dataset name can be up to 1,024 characters long, and consist of A-Z, a-z, 0-9, and the underscore, but it cannot start with a number or underscore, or have spaces."),(0,r.kt)("p",null,"Use the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq mk"),"\xa0command to create a new dataset named\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"babynames"),"\xa0in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq mk babynames\n")),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dataset 'qwiklabs-gcp-ba3466847fe3cec0:babynames' successfully created.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a new dataset (name: babynames)")),(0,r.kt)("p",null,"Run\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq ls"),"\xa0to confirm that the dataset now appears as part of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq ls\n")),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," datasetId\n -------------\n babynames\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upload the dataset")),(0,r.kt)("p",null,"Before you can build the table, you need to add the dataset to your project. The custom data file you'll use contains approximately 7 MB of data about popular baby names, provided by the US Social Security Administration."),(0,r.kt)("p",null,"Run this command to add the\xa0",(0,r.kt)("a",{parentName:"p",href:"http://www.ssa.gov/OACT/babynames/names.zip"},"baby names zip file"),"\xa0to your project, using the URL for the data file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -LO http://www.ssa.gov/OACT/babynames/names.zip\n")),(0,r.kt)("p",null,"List the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls\n")),(0,r.kt)("p",null,"You can see the name of the file added to your project."),(0,r.kt)("p",null,"Now unzip the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"unzip names.zip\n")),(0,r.kt)("p",null,"That's a pretty big list of text files! List the files again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq load"),"\xa0command creates or updates a table and loads data in a single step."),(0,r.kt)("p",null,"You will use the bq load command to load your source file into a new table called names2010 in the babynames dataset you just created. By default, this runs synchronously, and will take a few seconds to complete."),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq load"),"\xa0arguments you'll be running are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"datasetID: babynames\ntableID: names2010\nsource: yob2010.txt\nschema: name:string,gender:string,count:integer\n")),(0,r.kt)("p",null,"Create your table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq load babynames.names2010 yob2010.txt name:string,gender:string,count:integer\n")),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Waiting on job_4f0c0878f6184119abfdae05f5194e65 ... (35s) Current status: DONE\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Load the data into a new table")),(0,r.kt)("p",null,"Run\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq ls"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"babynames"),"\xa0to confirm that the table now appears in your dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq ls babynames\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  tableId    Type\n ----------- -------\n  names2010   TABLE\n")),(0,r.kt)("p",null,"Run\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"bq show"),"\xa0and your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dataset.table"),"\xa0to see the schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq show babynames.names2010\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   Last modified         Schema         Total Rows   Total Bytes     Expiration      Time Partitioning   Clustered Fields   Labels\n ----------------- ------------------- ------------ ------------- ----------------- ------------------- ------------------ --------\n  13 Aug 14:37:34   |- name: string     34073        654482        12 Oct 14:37:34\n                    |- gender: string\n                    |- count: integer\n")),(0,r.kt)("p",null,"Note:\xa0By default, when you load data, BigQuery expects UTF-8 encoded data. If you have data that is in ISO-8859-1 (or Latin-1) encoding and are having problems with your loaded data, you can tell BigQuery to treat your data as Latin-1 explicitly, using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"-E"),"\xa0flag. Learn more about Character Encodings from the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/loading-data"},"Introduction to loading data guide"),"."),(0,r.kt)("h3",{id:"run-queries"},"Run queries"),(0,r.kt)("p",null,"Now you're ready to query the data and return some interesting results."),(0,r.kt)("p",null,"Run the following command to return the top 5 most popular girls names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq query \"SELECT name,count FROM babynames.names2010 WHERE gender = 'F' ORDER BY count DESC LIMIT 5\"\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Waiting on job_58c0f5ca52764ef1902eba611b71c651 ... (0s) Current status: DONE\n+----------+-------+\n|   name   | count |\n+----------+-------+\n| Isabella | 22913 |\n| Sophia   | 20643 |\n| Emma     | 17345 |\n| Olivia   | 17028 |\n| Ava      | 15433 |\n+----------+-------+\n")),(0,r.kt)("p",null,"Run the following command to see the top 5 most unusual boys names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq query \"SELECT name,count FROM babynames.names2010 WHERE gender = 'M' ORDER BY count ASC LIMIT 5\"\n")),(0,r.kt)("p",null,"Note:\xa0The minimum count is 5 because the source data omits names with fewer than 5 occurrences."),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Waiting on job_556ba2e5aad340a7b2818c3e3280b7a3 ... (1s) Current status: DONE\n+----------+-------+\n|   name   | count |\n+----------+-------+\n| Aaqib    |     5 |\n| Aaidan   |     5 |\n| Aadhavan |     5 |\n| Aarian   |     5 |\n| Aamarion |     5 |\n+----------+-------+\n")),(0,r.kt)("h3",{id:"clean-up"},"Clean up"),(0,r.kt)("p",null,"Run the bq rm command to remove the babynames dataset with the -r flag to delete all tables in the dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bq rm -r babynames\n")),(0,r.kt)("p",null,"Confirm the delete command by typing Y."))}d.isMDXComponent=!0}}]);