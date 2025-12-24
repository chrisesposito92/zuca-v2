---
title: "Alternative authentication method: HMAC Access Key and Secret"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage/create-a-service-account/alternative-authentication-method-hmac-access-key-and-secret"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:43.248Z"
---

# Alternative authentication method: HMAC Access Key and Secret

Alternative authenticated method

Role based authentication is the preferred authentication mode for Google Cloud Storage based on GCP recommendations, however, HMAC Access Key ID & Secret Access Key is an alternative authentication method that can be used if preferred. An HMAC key is a type of credential and can be associated with a service account or a user account to access Google Cloud Storage.

1.  Navigate to the Cloud Storage page.
2.  Click the Settings tab on the left side menu.
3.  Navigate to the Interoperability tab and click the Create a key for a Service Account button.

    ![gcs-bucket-settings-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2e1c705d-567a-48bc-abaa-ae28d4b9db11?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJlMWM3MDVkLTU2N2EtNDhiYy1hYmFhLWFlMjhkNGI5ZGIxMSIsImV4cCI6MTc2NjY4NzU2MCwianRpIjoiMjRmMzllY2ViNDI5NDRlYjhkMTQ3Y2QwODY3MDEzNzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.npMDSej7aVA8ed5SdyRj6JBE7ryGfRKu5s4AnNcpUfM)

4.  Select the Service Account created in [Step 1](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage/create-a-service-account), and click Create key.

    ![gcs-select-service-account-hmac-3.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a7814cfd-756d-443d-8f4c-570dba1c841f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE3ODE0Y2ZkLTc1NmQtNDQzZC04ZjRjLTU3MGRiYTFjODQxZiIsImV4cCI6MTc2NjY4NzU2MCwianRpIjoiZDdhNWViOTRkZDRkNGM0MGE4ZjNmYTRkODA0MTI2MDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.spV5S9P_XFeGkFBUE8SvCxDltUGo29bX6HqWtWairvE)

5.  Make a note of the Access key and Secret.
