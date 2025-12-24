---
title: "View sync results"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/installation/manage-objects-and-sync-results-for-zuora-360/view-sync-results"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:48.857Z"
---

# View sync results

Learn how to view the sync results in the Zuora application.

To view sync results:

1.  In the Zuora application, click the down arrow next to your user name.
2.  Select Settings > Commerce .
3.  Click Data Connect to display the OBJECTS TO RETRY page. ![ObjectsToRetryPage.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b57e17e2-298d-421a-96db-69c5f39fdae5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI1N2UxN2UyLTI5OGQtNDIxYS05NmRiLTY5YzVmMzlmZGFlNSIsImV4cCI6MTc2NjY4NzYyNywianRpIjoiZjg3Njc3NTJmZWUxNDkwM2FlY2JiYTI0MjU3MTJiYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zW6UGR2ZaDl-7tAEDhOdTYyRscNm78UnYbRXnYH4Vk4) On the page above, you can view the list of records that are unsuccessfully synced.
4.  View the complete error message for a certain failure record by hovering your mouse over the specific error message. Three categories of error codes are available as shown in the following reference table:

    | Error Code | Description |
    | --- | --- |
    | DACO-01 | Known SFDC Exception |
    | DACO-02 | Missing CRM ID |
    | DACO-98 | Unknown Response from Salesforce API |
    | DACO-99 | Unknown Exception |
