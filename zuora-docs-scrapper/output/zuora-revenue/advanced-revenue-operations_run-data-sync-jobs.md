---
title: "Run Data Sync jobs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/run-data-sync-jobs"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:39.648Z"
---

# Run Data Sync jobs

The Data Sync job transfers Zuora Billing data to Zuora Revenue Pre-staging tables, allowing for configuration of entities, data objects, and filters.

The Data Sync job loads a specified range of Zuora Billing object data into Zuora Revenue Pre-staging tables.

To start the Data Sync job, you must select your Zuora Billing entity and data objects as the scope of a Data Sync job. Additional filters, such as a date range, can also be configured. The Data Sync job then uses [AQuA APINo Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/platform/aqua/topics/aggregate\_query\_api\_aqua.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/aqua/topics/aggregate_query_api_aqua.dita) in Stateless mode to load the specified Zuora Billing objects.

## Prerequisites

Ensure that you have run the RevPro3.0 Sync Object Mapping program. See [Schedule jobs](/zuora-revenue/month-end-process/reports/schedule-jobs) to learn how to run a program.

The RevPro3.0 Sync Object Mapping program sets up the standard fields necessary for the object mapping in Data Sync process. Specific to this program, you need to configure the following program parameters:

-   Entity Id : Enter your Zuora Entity Id.

-   Order Enabled : Enter `Y` if the Orders feature is enabled for the specified Zuora entity; otherwise, enter `N` .

-   Invoice Settle Enabled : Enter `Y` if the Invoice Settlement feature is enabled for the specified Zuora entity; otherwise, enter `N` .


## Configure and launch data sync jobs

Note:

The following procedure is applicable to versions that are prior to 37.002.02.00. If you are using version 37.002.02.00 or later, the UI has changed and the new Revenue Sync job is provided to replace the Data Sync job that is described here. To keep using the previous Data Sync job, navigate to Reports > Schedule Jobs to start the RevPro3.0 Data Sync Process program.

1.  Navigate to Data Interface > Data Sync. The Data Sync page is displayed.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9bb7e642-5834-4fc8-b48a-ff7110f9cdca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjliYjdlNjQyLTU4MzQtNGZjOC1iNDhhLWZmNzExMGY5Y2RjYSIsImV4cCI6MTc2NjYzNzQ1NywianRpIjoiZWIzYWYyYmU5MjZjNGUyYjlmMDdhM2RlOWUwMTViMjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.X-3_ChyYz9ZoFtHwVA5P4qBW9XhW4zfLN95MANjUDSA)

2.  If you want to view or manage field mappings before scheduling a Data Sync job, follow the instructions in Manage Data Sync field mapping.
3.  If you have multiple Zuora Billing entities, select an entity from the Entity dropdown list. Other settings are not editable until an entity is selected.
4.  In the Data Objects dropdown list, select the objects you want to sync from Zuora Billing. You can select All to load all applicable Zuora Billing objects into Zuora Revenue Pre-Staging tables.
5.  Complete other optional settings to filter data.
    -   From Date: Select the start date for the range of data that is synced.
    -   To Date: Select the end date for the range of data that is synced.
    -   Account: Enter the ID of the account from which you want to sync data.
    -   Subscription: Enter the ID of the subscription from which you want to sync data.
    -   Filter: Enter the additional [ZOQL filter statement](https://knowledgecenter.zuora.com/Zuora_Platform/Data/Z_Legacy_Query_Methods/ZOQL#Filter_Statements) to filter data that matches specific criteria.
6.  Click Launch Data Sync. If the Data Sync job is successfully submitted, the corresponding item is displayed in the Data Sync History table.

## Results

When the status for this job is updated to DATA SYNC - COMPLETED in the Status column of Data Sync History, it means the Zuora Billing data updated since the previous Data Sync job have been synced into Zuora Revenue Pre-Staging. The following table describes all possible status shown in the Status column:

| Status | Message | Description |
| --- | --- | --- |
| DATA SYNC - COMPLETED | All batches synced | The Data Sync job is completed for all objects. |
| DATA SYNC - ERROR | All batch(s) completed in Error. | The Data Sync job for one or multiple Billing objects failed. |
| Cancelled | Job terminated | The Data Sync job has been terminated by the user. |

If the status is in DATA SYNC - ERROR, hover over the job item and click to check the details about the error.

Submit a request to [Zuora Global Support](http://support.zuora.com/) if you need additional assistance with troubleshooting. If you need to exclude a field of the Billing object from the data sync, contact [Zuora Global Support](http://support.zuora.com/) to set the `IGNORE_SYNC` field to `X` in the object mapping.

## What to do next

After the job is completed without errors, you can run the Data Transformation job. See Run Data Transformation jobs.
