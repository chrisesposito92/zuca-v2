---
title: "Create destination GCS bucket"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage/create-destination-gcs-bucket"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:46.547Z"
---

# Create destination GCS bucket

Create destination GCS method

1.  Navigate to the Cloud Storage page.
2.  Click Create.
3.  Enter a bucket name > choose a region.

    Note:

    At the Choose how to control access to objects step, we recommend selecting Enforce public access prevention on this bucket.

    ![gcs-prevent-public-access-4.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5b77b2a9-2fbc-4f16-ab71-98f5a14698ca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjViNzdiMmE5LTJmYmMtNGYxNi1hYjcxLTk4ZjVhMTQ2OThjYSIsImV4cCI6MTc2NjY4NzU2NCwianRpIjoiNDBiZWUwOGQxMTNjNDNlMTg0YTAzZjg1NGMzMmM4MWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NRVGRYGWW9h_4cGXXPUUtuz5d93pQLaJzgBzsTSPLu0)

4.  After choosing your preferences for the remaining steps, click Create.
5.  On the Bucket details page for the bucket you created, select the Permissions tab and click Grant access.
6.  Grant access to the principal (Service Account) you created in [Step 1](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage/create-a-service-account) (this is the service account you created, not the service account from the prerequisite), and assign the Role: Storage Legacy Bucket Writer > click Save.

    ![gcp-storage-legacy-bucket-writer-5.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7d7470ff-509a-40d0-9abb-ebb31c1240d9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdkNzQ3MGZmLTUwOWEtNDBkMC05YWJiLWViYjMxYzEyNDBkOSIsImV4cCI6MTc2NjY4NzU2NCwianRpIjoiMGY3Y2JlZTJiOWRjNDY1YzllMzEyMTMzN2U5ZjJhYmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.stZ36w_7RDfr4B-x_DY30a4VqqgN2SXbfXoGRM67ILs)
