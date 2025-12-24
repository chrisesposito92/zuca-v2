---
title: "Google Cloud Storage staging bucket configuration for Zuora Connector for Generic ClickHouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/set-up-zuora-connector-for-generic-clickhouse/set-up-staging-bucket/google-cloud-storage-staging-bucket-configuration-for-zuora-connector-for-generic-clickhouse"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:47.875Z"
---

# Google Cloud Storage staging bucket configuration for Zuora Connector for Generic ClickHouse

Google Cloud Storage stage bucket configuration

Some sources or destinations without built-in staging resources require a staging bucket to efficiently transfer or ingest data.

Step 1: Create a service account

1.  In the GCP console, navigate to the IAM & Admin menu.
2.  Click the Service Accounts tab.
3.  Click Create service account at the top of the menu.
4.  Name the service account that will be used to transfer data into Cloud Storage and click Create and Continue. You may continue through the following steps without assigning any roles, and in the final step, click Done.

Step 2: Create staging bucket

5.  Navigate to the Cloud Storage page.
6.  Click Create.
7.  Enter a bucket name, choose a region.
8.  After choosing your preferences for the remaining steps, click Create. (If presented with a warning, you may enforce public access prevention)
9.  On the Bucket details page for the bucket you created, select the Permissions tab, and click Grant access.
10.  Grant access to the principal (Service Account) you created in Step 1, and assign the Roles: Storage Object Creator and Storage Object Viewer.
11.  Click Save.

     ![Grant access](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2ddb40a9-76db-49dd-9c41-dfc1c6ef8c25?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJkZGI0MGE5LTc2ZGItNDlkZC05YzQxLWRmYzFjNmVmOGMyNSIsImV4cCI6MTc2NjY4NzUwNSwianRpIjoiYzY1NjA1NDZmMTg2NDRiZTk3YzhiOGQ2N2MwMWI4ODMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-fu2mngKKGmBBvqccSilijDhEQQ2-GsM-GB0J0rMRgo)


Step 3: Generate HMAC key

An HMAC key is a type of credential and can be associated with a service account or a user account to access Google Cloud Storage.

12.  Navigate to the Cloud Storage page.
13.  Click the Settings tab on the left side menu.
14.  In the Interoperability tab, click the Create a key for a Service Account button.
15.  Select the Service Account created in Step 1, and click Create key. Make a note of the Access key and Secret.

     ![HMAC key generation](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/71e1b947-db0d-4277-a3fb-0e78f95bf1f9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxZTFiOTQ3LWRiMGQtNDI3Ny1hM2ZiLTBlNzhmOTViZjFmOSIsImV4cCI6MTc2NjY4NzUwNSwianRpIjoiNzM1N2MxZWMzNzgzNDc4ZGIwNDRlOTE1NDdmMGQ4ZjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rzH7HRS2zuxWqBWZBm9b-NiomogSjk_91rvFCt_DdyA)

     Use this configured GCS staging bucket during the connection of your preferred data source or destination.

     Note:

     Depending on the connection method, you may need to refer to the following field name mappings:

     -   Bucket Access ID: your HMAC Access Key.
     -   Bucket Secret Key: your HMAC Secret.
