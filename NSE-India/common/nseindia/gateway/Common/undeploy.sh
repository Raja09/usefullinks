#!/bin/bash

#set -xv

api_name=Common
org_name=nse-non-prod
env_name=dev

current_deployment_info=$(curl -X GET -u username:password "https://api.enterprise.apigee.com/v1/o/$org_name/e/$env_name/apis/$api_name/deployments")

rev_num=$(jq -r .revision[0].name <<< "${current_deployment_info}" ) 
#env_name=$(jq -r .environment <<< "${current_deployment_info}" ) 
#api_name=$(jq -r .name <<< "${current_deployment_info}" ) 
#org_name=$(jq -r .organization <<< "${current_deployment_info}" )


#declare -r hardcoding_stable_revision=20
# declare -r num1=1
# pre_rev=$(expr "$rev_num" - "$num1")


echo $rev_num
echo $api_name
echo $org_name
echo $env_name
# echo $pre_rev
echo ${stable_revision}


echo "WARNING: Test failed, undeploying and deleting revision $rev_num"

# Undeploying API Proxy
curl -X DELETE -u username:password  "https://api.enterprise.apigee.com/v1/o/$org_name/e/$env_name/apis/$api_name/revisions/$rev_num/deployments"

# Delete the API proxy
curl -X DELETE -u username:password   "https://api.enterprise.apigee.com/v1/o/$org_name/e/$env_name/apis/$api_name/revisions/$rev_num"

if [ "$stable_revision" != "null" ]
then
	echo "WARNING: Test failed, reverting from $rev_num to ${stable_revision}"
	 
	curl -X POST -u username:password -H "Content-Type: application/x-www-form-urlencoded" "https://api.enterprise.apigee.com/v1/o/$org_name/e/$env_name/apis/$api_name/revisions/$stable_revision/deployments"
fi 