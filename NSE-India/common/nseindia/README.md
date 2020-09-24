# NSEIndia
Three nseindia projects are provided here.
 * Config - create and manage config for Edge
 * API - create and manage API deployment for Edge
 * Sharedflows - create and manage Sharedflows for Edge

## Config
```
/nseindia/config/
```

This project demonstrates the creation and management of Apigee Edge Config and performs the following steps in sequence.
  - Creates Caches
  - Creates Target servers
  - Creates Virtual Hosts (needs truststores and keyRef's setup using ManagementUI)
  - Creates API products
  - Creates Developers
  - Creates Developer Apps

To use, edit /nseindia/config/pom.xml, and update org and env elements in all profiles to point to your Apigee org, env. You can add more profiles corresponding to each env in your org.

      <apigee.org>nse-non-prod</apigee.org>
      <apigee.env>dev</apigee.env>

To run the plugin and use edge.json jump to samples project `cd /nseindia/config/` and run 

`mvn install -Pdev -Dusername=<apigee-username> -Dpassword=<apigee-password> -Dapigee.config.options=create|updated` -Dapigee.config.dir=resources/edge`

  ```
   *Config.options
  	- none   - No action (default)
	- clean – This will delete the last deployed revision in an environment
	- create - Create when not found. Pre-existing config is NOT updated even if it is different.
	- update - Update when found; create when not found, updates individual entries for kvms. Refreshes all config to reflect edge.json.
	- delete - Delete all config listed in edge.json.
	- sync   - Delete and recreate.
  ```


## API Deployment

Create and deploy API
```
/nseindia/gateway/{garage}
```

This project demonstrates use of apigee-config-maven-plugin and [apigee-deploy-maven-plugin]. The project performs the following steps in sequence. This sequence is inherent to the platform and is managed using the sequencing of goals in pom.xml
  - Configure API
  - Deploy API  (from deploy plugin)

To use, edit nseindia/gateway/shared-pom.xml, and update org and env elements in all profiles to point to your Apigee org, env. You can add more profiles corresponding to each env in your org.

      <apigee.org>nse-non-prod</apigee.org>
      <apigee.env>dev</apigee.env>

To run jump to project `cd /nseindia/gateway/{garage}` and run 

`mvn install -Pdev -Dusername=<apigee-username> -Dpassword=<apigee-password> -Dapigee.config.options=create|update`


## Shareflows Deployment

Create and deploy Shareflows
```
/nseindia/sharedflows/
```

To use, edit nseindia/sharedflows/shared-pom.xml, and update org and env elements in all profiles to point to your Apigee org, env. You can add more profiles corresponding to each env in your org.

      <apigee.org>nse-non-prod</apigee.org>
      <apigee.env>dev</apigee.env>

To run jump to project `cd /nseindia/sharedflows/{sharedflow-directory}` and run 

`mvn install -Pdev -Dusername=<apigee-username> -Dpassword=<apigee-password> -Dapigee.config.options=create|update`
