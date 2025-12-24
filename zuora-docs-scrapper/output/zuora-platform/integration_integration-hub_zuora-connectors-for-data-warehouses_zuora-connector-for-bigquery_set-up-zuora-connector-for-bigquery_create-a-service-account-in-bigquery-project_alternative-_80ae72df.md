---
title: "Alternative authentication method: Grant direct access to service account"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/create-a-service-account-in-bigquery-project/alternative-authentication-method-grant-direct-access-to-service-account"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:46.584Z"
---

# Alternative authentication method: Grant direct access to service account

Grant direct access to service account

Role-based authentication is the preferred authentication mode for BigQuery based on GCP recommendations. However, providing a service account key to directly log-in to the created service account is an alternative authentication method that you can use.

1.  Back in the Service accounts menu, click the Actions dropdown next to the newly created service account and click Manage keys.

    ![gcp-manage-service-account-keys-5.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/188ffcd8-51b9-499f-9ac6-f7a965476e44?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE4OGZmY2Q4LTUxYjktNDk5Zi05YWM2LWY3YTk2NTQ3NmU0NCIsImV4cCI6MTc2NjY4NzQ0NCwianRpIjoiZDEzNzhlZTZjMWI0NDcwYjgzMDVkMGMzZTk1ZmE4MzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Wp6QgVoSqowm9rSCRi_wBfZoeoSnmCdOS1dBPoD4ESY)

2.  Click Add key > Create new key.

    ![gcp-create-new-key-6.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/35af6c9e-b1d9-4866-9cb3-66b8982bd842?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM1YWY2YzllLWIxZDktNDg2Ni05Y2IzLTY2Yjg5ODJiZDg0MiIsImV4cCI6MTc2NjY4NzQ0NCwianRpIjoiNzEzNDRjYTIzMzA4NGI2MTk5NWVjYTI2YWRmZTRkM2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xkLj7LX8cqOQa1JCpQ1NTT3n6ZEW3xI_aKlZnYewcAE)

3.  Select the JSON Key type and click Create. Make note of the key that is generated.
