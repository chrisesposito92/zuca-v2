---
title: "Monitor sync and cleanup jobs in Salesforce"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/monitor-sync-and-cleanup-jobs-in-salesforce"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:16.670Z"
---

# Monitor sync and cleanup jobs in Salesforce

Learn how to monitor the progress and status of Zuora 360 sync and cleanup jobs in Salesforce using the Bulk API.

You can monitor the progress and status of Zuora 360 manual and scheduled synchronization jobs and sync cleanup jobs in Salesforce. The status is available within 7 days of sync submission and offered by the Bulk API that Turbo Sync uses. This gives you a view of the job progress and may help troubleshoot any problems.

1.  Navigate to user name > Setup > Administration Setup > Monitoring > Bulk Data Load Jobs .
2.  Currently running jobs are listed in the In Progress table, and completed jobs are listed in the Completed last 7 day table. ![Turbo Sync jobs in progress](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c8c24fd0-3284-4963-98b7-7e6c324232b3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM4YzI0ZmQwLTMyODQtNDk2My05OGI3LTdlNmMzMjQyMzJiMyIsImV4cCI6MTc2NjY4Nzk1NCwianRpIjoiMGI2M2VkZDE5YWVkNDc2OTk1MWExNTdkNTliNjhhN2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-oQytI9VbEsfx_0N5KRmgHnK4nvwbf-TUXfYNJFK_kQ) NOTE: Currently, manually started sync jobs are not available for you to monitor in Salesforce.
3.  Clicking a Job ID to see the detail information of the sync or cleanup job. To get detailed information about the job detail page, refer to the Salesforce help article, Viewing Bulk Data Load Job Details. ![Turbo Sync monitor job details](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9bbac6cb-63c9-4081-aae3-cbebdfadd842?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjliYmFjNmNiLTYzYzktNDA4MS1hYWUzLWNiZWJkZmFkZDg0MiIsImV4cCI6MTc2NjY4Nzk1NCwianRpIjoiNmI4Njk0MTc5MjA1NDNhNDhlM2YzM2M3N2QxNzQyYjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MB_u92q2ULgQvPs5TYd4F7lMLoK0Y74Z6j0H1qMxhhg)
