"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),l=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?s.createElement(f,o(o({ref:t},u),{},{components:n})):s.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const a={},o="AWS Commands",c={unversionedId:"foundations/cloud/aws-commands",id:"foundations/cloud/aws-commands",title:"AWS Commands",description:"",source:"@site/docs/01-foundations/cloud/aws-commands.md",sourceDirName:"01-foundations/cloud",slug:"/foundations/cloud/aws-commands",permalink:"/docs/foundations/cloud/aws-commands",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681451444,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{},sidebar:"docs",previous:{title:"AWS Container Services",permalink:"/docs/foundations/cloud/aws-containers"},next:{title:"Lab: AWS Account Setup",permalink:"/docs/foundations/cloud/lab-aws-setup/"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-commands"},"AWS Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Makefile"},'install:\n    pip install awscli\n\nsetup:\n    aws configure\n\nsts-identity:\n    aws sts get-caller-identity\n\nsecret_manager_get_values:\n    aws secretsmanager get-secret-value --secret-id wysde --query SecretString --output text\n\ns3_create_bucket:\n    TS=$(date +%s)\n    aws s3api create-bucket --bucket <bucket-name>-$TS --region us-east-1\n\ncreate_policy:\n    aws iam create-policy --policy-name <policy-name> --policy-document file://<file-name>.json\n\ncreate_role:\n    aws iam create-role --role-name <role-name> --assume-role-policy-document file://role-trust.json\n\nattach_policy_to_role:\n    aws iam attach-role-policy --policy-arn <> --role-name <>\n\niam_keys_rotation:\n    aws iam list-users\n    aws iam list-access-keys --user-name jan31\n    aws iam create-access-key --user-name jan31\n    aws iam update-access-key --access-key-id <> --status Inactive --user-name jan31\n    aws iam delete-access-key --access-key-id <> --user-name jan31\n\ncreate-redshift-cluster:\n# Use the following command to create a two-node dc2.large cluster with the minimal set of parameters of cluster-identifier (any unique identifier for the cluster), node-type/number-of-nodes and the master user credentials. Replace $MasterUserPassword in the following command with a password of your choice. The password must be 8-64 characters long and must contain at least one uppercase letter, one lowercase letter, and one number. You can use any printable ASCII character except /, "", or, or @:\n    aws redshift create-cluster --node-type dc2.large --number-of-nodes 2 --master-username adminuser --master-user-password $MasterUserPassword --cluster-identifier myredshiftcluster\n# It will take a few minutes to create the cluster. You can monitor the status of the cluster creation process using the following command:\n    aws redshift describe-clusters --cluster-identifier myredshiftcluster\n# Note that "ClusterStatus": "available" indicates that the cluster is ready for use and that you can connect to it using the "Address": "myredshiftcluster.abcdefghijk.eu-west-1.redshift.amazonaws.com" endpoint. The cluster is now ready. Now, you use an ODBC/JDBC to connect to the Amazon Redshift cluster.\n\nec2_port_routing:\n    sudo iptables -t nat -L\n    sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080\n    sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8080\n    sudo iptables -t nat -D PREROUTING 1 # to remove\n    iptables -P INPUT ACCEPT\n    iptables -P OUTPUT ACCEPT\n    iptables -P FORWARD ACCEPT\n    iptables -F\n\nget_ssl_cert:\n    sudo snap install core; sudo snap refresh core\n    sudo apt-get remove certbot\n    sudo snap install --classic certbot\n    sudo ln -s /snap/bin/certbot /usr/bin/certbot\n    sudo certbot certonly --standalone\n\nec2_login_ssh:\n    chmod 400 sparsh.pem\n    sudo chown -R ubuntu /home/ubuntu\n    ssh -i "sparsh.pem" ubuntu@ec2-111-11-11-111.compute-1.amazonaws.com\n\nsecretsmanager_python:\n    #!/usr/bin/python\n    import boto3\n    import json\n    def get_secret(secret_name, region_name="us-east-1"):\n        session = boto3.session.Session()\n        client = session.client(\n            service_name=\'secretsmanager\',\n            region_name=region_name)\n        get_secret_value_response = client.get_secret_value(SecretId=secret_name)\n        get_secret_value_response = json.loads(get_secret_value_response[\'SecretString\'])\n        return get_secret_value_response\n\nsecretsmanager_python_postgres:\n    import pandas as pd\n    import psycopg2\n    import boto3\n    import json\n    from sqlalchemy import create_engine\n    from sqlalchemy import text\n\n    def get_secret(secret_name=\'wysde\'):\n        region_name = "us-east-1"\n        session = boto3.session.Session()\n        client = session.client(\n            service_name=\'secretsmanager\',\n            region_name=region_name)\n        get_secret_value_response = client.get_secret_value(SecretId=secret_name)\n        get_secret_value_response = json.loads(get_secret_value_response[\'SecretString\'])\n        return get_secret_value_response\n\n    secret_vals = get_secret()\n\n    postgres_endpoint = secret_vals[\'RDS_POSTGRES_HOST\']\n    postgres_user = secret_vals[\'RDS_POSTGRES_USERNAME\']\n    postgres_pass = secret_vals[\'RDS_POSTGRES_PASSWORD\']\n    port = secret_vals[\'RDS_POSTGRES_PORT\']\n    dbname = "postgres"\n\n    engine_string = "postgresql+psycopg2://%s:%s@%s:%s/%s" \\\n    % (postgres_user, postgres_pass, postgres_endpoint, port, dbname)\n    engine = create_engine(engine_string)\n\n    query = """\n    SELECT *\n    FROM pg_catalog.pg_tables\n    WHERE schemaname != \'pg_catalog\' AND \n        schemaname != \'information_schema\';\n    """\n    df = pd.read_sql_query(text(query), engine)\n')))}p.isMDXComponent=!0}}]);