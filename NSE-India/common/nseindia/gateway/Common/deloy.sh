#!/bin/bash

environment=dev
apigee-user-name=wipro_rdirisam@nse.co.in
apigee-password=2012##Laashya

echo "Info: Common Api proxy bundle deploying in $environment"

if [ $environment == "dev" ]
then
	mvn install -Pdev -Dusername=$apigee-user-name -Dpassword=$apigee-password -Dorg=$apigee-organizaiton
elif [ $environment == "uat" ]
then
	mvn install -Puat -Dusername=$apigee-user-name -Dpassword=$apigee-password -Dorg=$apigee-organizaiton
elif [ $environment == "sit" ]
then
	mvn install -Psit -Dusername=$apigee-user-name -Dpassword=$apigee-password -Dorg=$apigee-organizaiton
else
	echo "Info: The unsuccessful condition for the $environment environment"
fi 