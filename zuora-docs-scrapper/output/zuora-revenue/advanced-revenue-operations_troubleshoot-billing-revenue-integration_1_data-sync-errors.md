---
title: "Data Sync errors"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/troubleshoot-billing---revenue-integration_1/data-sync-errors"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:00.505Z"
---

# Data Sync errors

Overview of errors that can occur when submitting or running a Data Sync job.

The following two types of errors can occur for the Data Sync job:

-   Errors when submitting the job

-   Errors when running the job


## Errors when submitting a job

You might encounter the following error while submitting the Data Sync job from the UI:

| Error message | Description |
| --- | --- |
| Error Submitting Aqua Job | This error usually happens because the AQuA job cannot be submitted due to the sandbox refreshing. |

## Errors when running the job

The Data Sync jobs completed with a status of `DATA SYNC - WARNING` or `DATA SYNC - ERROR` indicate that all or some Data Sync objects are not successfully synced. You can hover over the job item and click the JE details icon. to check the error details.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f494faee-d442-4d23-889e-d8f6c605aff7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY0OTRmYWVlLWQ0NDItNGQyMy04ODllLWQ4ZjZjNjA1YWZmNyIsImV4cCI6MTc2NjYzNzcxOCwianRpIjoiOTFiMDY3OGQ0OTA3NDY3ZGI3MGJlMWYzNDg1NzliNTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.SPKvGO6Kv2nHKtsmFJIY1X1uKjRqhl0GFEEAJGWX43c)

The following table describes all possible error messages:

| Error message | Description |
| --- | --- |
| ERROR - FILE DOES NOT EXIST IN DB DIRECTORY | The directory profile is not configured correctly during the environment set up. |
| ERROR IN DATA LOAD | The files from Zuora Billing cannot be loaded into the Data Sync table. |
| ERROR - OBJECT NAME NOT DEFINED | The definition for the object name does not exist. |
| ERROR - OBJECT MAPPING NOT DEFINED | The object mapping definition does not exist. |
| ERROR - RECORD COUNT MISMATCH | The record count of the AQuA job does not match the number of records inserted into the Data Sync table. |
| ERROR IN DATA LOAD | Data in the AQuA file cannot be loaded into the Data Sync table. This error usually happens for columns like Description and Invoice Comments where the number of characters exceeds the character limit of the corresponding column in the Data Sync table. |
| ERROR - IN EXT TABLE CREATION | Data in the AQuA file could not be loaded into the Data Sync table due to the tablespace issue in the database. |
| FAILED - ZERO DOLLAR LINES CLEANUP | This error occurs for the DiscountContractualValues Data Sync object only. The $0 clean up program failed due to the PGA memory issue. |
| WARNING - ORG VALUE NOT DEFINED FOR THIS ENTITY. SUBMIT TERM GENERATION PROGRAM MANUALLY. | This error occurs for the Subscription Term Number generation program only. The environment is not correctly set up. |
| WARNING - NO RECORD TO SYNC | No record is available for sync within the specified date range from Zuora Billing. |
