---
title: "Import promotion codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/promo-codes/manage-promotion-codes/import-promotion-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:47:41.413Z"
---

# Import promotion codes

Learn how to import promotion codes into Zuora using a CSV file, including downloading templates and following specific steps to complete the import process.

Before importing promotion codes into Zuora, ensure that you have a valid CSV file that contains the promotion codes you need. Download either of the following templates and complete the CSV file with promotion code details as needed:

-   [Multi-use codes template](/zuora-platform/integration/integration-hub/promo-codes/manage-promotion-codes/export-multi-use-codes)

-   [Single-use codes template](/zuora-platform/integration/integration-hub/promo-codes/manage-promotion-codes/export-single-use-codes)


Subsequently, you can take the following steps to import promotion codes:

1.  Launch Promotion Codes from your Zuora tenant.
2.  Click the Background Jobs tab. All promotion code background jobs for all child campaigns are displayed in this tab.
3.  Expand the Actions dropdown list.

    -   To import multi-use promotion codes, select Import - Create Multi Use Promotions .

    -   To import single-use promotion codes, select Import - Create Single Use Codes .


4.  Click the Choose Files button and select the CSV file you want to upload.
5.  Click Create . The job is then displayed in the job list.

The Results column indicates whether the job has succeeded. If the import job succeeds, the imported promotion codes then become available for use within the app instance. If it failed, an output file that contains failure reasons will be automatically generated. You can locate the failed import job, click ![manage_icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d9acf018-325e-470a-9fa2-5da8841c479b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ5YWNmMDE4LTMyNWUtNDcwYS05ZmEyLTVkYTg4NDFjNDc5YiIsImV4cCI6MTc2NjY0MTY1OSwianRpIjoiYTJhMWVlNzgxNDUyNDJiNjkyZjE5ZGNjY2FjYjJmNWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5_gdC11ZvmE3-bi4ZCE5JFdM5UIU3lHOKF0KkbAbmNI) on the left, and select Show to find the output file for troubleshooting.
