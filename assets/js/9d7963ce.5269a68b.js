"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||n;return a?i.createElement(m,o(o({ref:t},d),{},{components:a})):i.createElement(m,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const n={},o="Ultimate Data Science Take Home Challenge Sample",s={unversionedId:"datascience/challenges/Ultimate-data-science-take-home-challenge-sample/README",id:"datascience/challenges/Ultimate-data-science-take-home-challenge-sample/README",title:"Ultimate Data Science Take Home Challenge Sample",description:"A practice challenge for the DS interview process",source:"@site/docs/10-datascience/challenges/Ultimate-data-science-take-home-challenge-sample/README.md",sourceDirName:"10-datascience/challenges/Ultimate-data-science-take-home-challenge-sample",slug:"/datascience/challenges/Ultimate-data-science-take-home-challenge-sample/",permalink:"/docs/datascience/challenges/Ultimate-data-science-take-home-challenge-sample/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{}},l={},c=[{value:"Part 1 \u2011 Exploratory data analysis",id:"part-1--exploratory-data-analysis",level:2},{value:"Part 2 \u2011 Experiment and metrics design",id:"part-2--experiment-and-metrics-design",level:2},{value:"1. Key Metric of Success",id:"1-key-metric-of-success",level:3},{value:"2. Experimental Design",id:"2-experimental-design",level:3},{value:"Implementation",id:"implementation",level:4},{value:"Testing",id:"testing",level:4},{value:"3. Recommendations",id:"3-recommendations",level:3},{value:"Other Considerations",id:"other-considerations",level:4},{value:"Part 3 \u2011 Predictive modeling",id:"part-3--predictive-modeling",level:2},{value:"Data description",id:"data-description",level:3}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ultimate-data-science-take-home-challenge-sample"},"Ultimate Data Science Take Home Challenge Sample"),(0,r.kt)("p",null,"A practice challenge for the DS interview process"),(0,r.kt)("h2",{id:"part-1--exploratory-data-analysis"},"Part 1 \u2011 Exploratory data analysis"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/olsenben/Ultimate-data-science-take-home-challenge-sample/blob/master/Pt-1-ultimate-data-science-challenge.ipynb"},"Part 1 - EDA")),(0,r.kt)("p",null,"The attached logins.json file contains (simulated) timestamps of user logins in a particular geographic location. Aggregate these login counts based on 15minute time intervals, and visualize and describe the resulting time series of login counts in ways that best characterize the underlying patterns of the demand. Please report/illustrate important features of the demand, such as daily cycles. If there are data quality issues, please report them."),(0,r.kt)("h2",{id:"part-2--experiment-and-metrics-design"},"Part 2 \u2011 Experiment and metrics design"),(0,r.kt)("p",null,"The neighboring cities of Gotham and Metropolis have complementary circadian rhythms: on weekdays, Ultimate Gotham is most active at night, and Ultimate Metropolis is most active during the day. On weekends, there is reasonable activity in both cities."),(0,r.kt)("p",null,"However, a toll bridge, with a two way toll, between the two cities causes driver partners to tend to be exclusive to each city. The Ultimate managers of city operations for the two cities have proposed an experiment to encourage driver partners to be available in both cities, by reimbursing all toll costs.\nWhat would you choose as the key measure of success of this experiment in encouraging driver partners to serve both cities, and why would you choose this metric?\nDescribe a practical experiment you would design to compare the effectiveness of the proposed change in relation to the key measure of success. Please provide details on:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"how you will implement the experiment"),(0,r.kt)("li",{parentName:"ol"},"what statistical test(s) you will conduct to verify the significance of the observation"),(0,r.kt)("li",{parentName:"ol"},"how you would interpret the results and provide recommendations to the city operations team along with any caveats.")),(0,r.kt)("h3",{id:"1-key-metric-of-success"},"1. Key Metric of Success"),(0,r.kt)("p",null,"To measure the success of the experiment, there must be a metric which accurately captures the tendency of a driver to serve one city exclusively over the other. An easy way to do this would be to count the number of times a driver crosses the toll bridge in a direction away from the city the driver tends to serve most often. However, since the reimbursement program has not started yet I can\u2019t assume that that data is available (it would be apparent in the reimbursement records, but would not separate drivers into a before and after group). In the assumed absence of this information, another metric can be designed which draws on geographical information that can be safely assumed to be available if properly collected: the starting and ending location of each trip. Using this information, the tendency for a driver to serve one city exclusively can be quantified by means of a ratio:"),(0,r.kt)("p",null,"Exclusivity ratio - measure of tendency to serve one city exclusively"),(0,r.kt)("p",null,"Let X represent the city in which a driver has the most trips that start and end in that city."),(0,r.kt)("p",null,"Let Y represent the city in which a driver has the least trips that start and end in that city."),(0,r.kt)("p",null,"A = number of trips that start and end in X city"),(0,r.kt)("p",null,"B = number of trips that start in X city and end in Y city"),(0,r.kt)("p",null,"C = number of trips that start in Y city and end in X city"),(0,r.kt)("p",null,"D = number of trips that start and end in Y city"),(0,r.kt)("p",null,"Exclusivity ratio = (A)/(A + B + C + D)"),(0,r.kt)("p",null,"An exclusivity ratio of 1 indicates that a driver favors X city exclusively, while a ratio of .5 would indicate that a driver favors X city 50% of the time, and a ratio of .25 would indicate that they are equally likely to accept each of the 4 types of trips (A, B, C, and D). The variables must remain constant for the entire experiment. "),(0,r.kt)("h3",{id:"2-experimental-design"},"2. Experimental Design"),(0,r.kt)("h4",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"The hypothesis of this experiment is that the exclusivity ratio of drivers will be reduced after the reimbursement program is introduced. Drivers must have their discrete variables for X, Y, A, B, C, and D encoded using data-wrangling and feature engineering. Once this is done, the exclusivity ratio for each driver can be calculated. Next, drivers should be be subsetted into a testing group and a control group (weighting according to which city drivers are exclusive to must be controlled in order to ensure a representative control group). Next the reimbursement program can be implemented for the testing group. At its conclusion, the exclusivity ratio for the drivers must be calculated again using the same constant variables for the testing and control group. "),(0,r.kt)("h4",{id:"testing"},"Testing"),(0,r.kt)("p",null,"To test the null-hypothesis, we must assume that any difference in the mean of the ratio before and the ratio after are due to random chance. Testing the null-hypothesis should be as simple as comparing the before and after ratios of both the testing group and control group with a two-way z-test to compare the means of the group, provided that all results for all groups are normally distributed (in the event that they are not, a non-parametric test should be utilized instead according to the distribution and standard deviation of the samples). "),(0,r.kt)("h3",{id:"3-recommendations"},"3. Recommendations"),(0,r.kt)("p",null,"A statistically significant decrease in the ratio of the testing group will indicate that the experiment was successful, and would support the idea that reimbursing toll can encourage drivers against serving one city exclusively. For the control group, a statistically significant decrease in the ratio would indicate that there is another variable uncontrolled for, and that the experiment cannot be conclusively considered to be successful in terms of reimbursing for toll. No change in either may indicate that there is a stronger variable than the toll bridge at work affecting the exclusivity of the drivers."),(0,r.kt)("h4",{id:"other-considerations"},"Other Considerations"),(0,r.kt)("p",null,"Since it is know that the cities have different circadian rhythms, it would be prudent to take into consideration the time of day of a trip, and apply a weighting system against the exclusivity ratio depending on the time of day and which city. This is because there may be a tendency of a driver to prefer driving during the day or night, which would directly influence which city they serve, especially during the weekdays (since weekends show relatively similar activity, they would be excluded from this weighting system). In other words, if a driver is exclusive to one city, but only drives during that city's most active times anyways (and not the other cities active hours), then the fact that the driver is exclusive should be downplayed. In the event that the null hypothesis is accepted, this is the first variable I would investigate (luckily it can be calculated after the fact and does not require extra data collection, provided that the time of the trips is recorded). "),(0,r.kt)("h2",{id:"part-3--predictive-modeling"},"Part 3 \u2011 Predictive modeling"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/olsenben/Ultimate-data-science-take-home-challenge-sample/blob/master/Pt-3-ultimate-data-science-challenge.ipynb"},"Part 3 - Modeling")),(0,r.kt)("p",null,"Ultimate is interested in predicting rider retention. To help explore this question, we have\nprovided a sample dataset of a cohort of users who signed up for an Ultimate account in\nJanuary 2014. The data was pulled several months later; we consider a user retained if they\nwere \u201cactive\u201d (i.e. took a trip) in the preceding 30 days.\nWe would like you to use this data set to help understand what factors are the best predictors\nfor retention, and offer suggestions to operationalize those insights to help Ultimate.\nThe data is in the attached file ultimate_data_challenge.json. See below for a detailed\ndescription of the dataset. Please include any code you wrote for the analysis and delete the\ndataset when you have finished with the challenge."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Perform any cleaning, exploratory analysis, and/or visualizations to use the provided\ndata for this analysis (a few sentences/plots describing your approach will suffice). What\nfraction of the observed users were retained?"),(0,r.kt)("li",{parentName:"ol"},"Build a predictive model to help Ultimate determine whether or not a user will be active\nin their 6th month on the system. Discuss why you chose your approach, what\nalternatives you considered, and any concerns you have. How valid is your model?\nInclude any key indicators of model performance."),(0,r.kt)("li",{parentName:"ol"},"Briefly discuss how Ultimate might leverage the insights gained from the model to\nimprove its longterm\nrider retention (again, a few sentences will suffice).")),(0,r.kt)("h3",{id:"data-description"},"Data description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"city: city this user signed up in"),(0,r.kt)("li",{parentName:"ul"},"phone: primary device for this user"),(0,r.kt)("li",{parentName:"ul"},"signup_date: date of account registration; in the form \u2018YYYY MM DD\u2019"),(0,r.kt)("li",{parentName:"ul"},"last_trip_date: the last time this user completed a trip; in the form \u2018YYYY MM DD\u2019"),(0,r.kt)("li",{parentName:"ul"},"avg_dist: the average distance in miles per trip taken in the first 30 days after signup"),(0,r.kt)("li",{parentName:"ul"},"avg_rating_by_driver: the rider\u2019s average rating over all of their trips"),(0,r.kt)("li",{parentName:"ul"},"avg_rating_of_driver: the rider\u2019s average rating of their drivers over all of their trips"),(0,r.kt)("li",{parentName:"ul"},"surge_pct: the percent of trips taken with surge multiplier > 1"),(0,r.kt)("li",{parentName:"ul"},"avg_surge: The average surge multiplier over all of this user\u2019s trips"),(0,r.kt)("li",{parentName:"ul"},"trips_in_first_30_days: the number of trips this user took in the first 30 days after\nsigning up"),(0,r.kt)("li",{parentName:"ul"},"ultimate_black_user: TRUE if the user took an Ultimate Black in their first 30 days;\nFALSE otherwise"),(0,r.kt)("li",{parentName:"ul"},"weekday_pct: the percent of the user\u2019s trips occurring during a weekday")))}h.isMDXComponent=!0}}]);