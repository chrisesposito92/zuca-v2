---
title: "Collect data for Billing-Revenue Integration"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/collect-data-for-billing-revenue-integration"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:34.349Z"
---

# Collect data for Billing-Revenue Integration

This guide explains how to collect transaction data into Zuora Revenue using Data Collection jobs, either automatically with the Instant On feature or manually, based on RC grouping templates.

After Zuora Billing data is transformed into transaction lines in Revenue staging tables, you can collect transaction data into Zuora Revenue. Then, Zuora Revenue can group the collected transaction lines into the revenue contract (RC) based on the RC grouping templates that are defined. The Data Collection job is provided for this purpose. There are multiple ways to run Data Collection jobs in Zuora Revenue:

-   Enable the Instant On feature to configure the Data Collection job to run automatically after the Revenue Sync job completes. However, a limitation of this way is that only one RC grouping template can be selected as the default and be used by the automated Data Collection job. If you have the business need to collect transaction data based on different RC grouping templates, you must manually run or schedule the job for the non-default RC grouping templates.
-   Manually start the Data Collection job whenever needed. Alternatively, you can schedule this job to run automatically on a regular basis.

## Prerequisite

The Data Collection job is run for the RC batch, which is created based on the RC grouping template. Before creating the RC batch and starting a Data Collection job, the RC grouping templates must be defined in Zuora Revenue. If you want to use the Instant On feature for automated Data Collection jobs, make sure one RC grouping template is configured as the default in Zuora Revenue. For more information, see [Create RC grouping template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template).

## Run Data Collection jobs with instant On enabled

The Instant On feature is available only for Billing - Revenue Integration environments. To use the Instant On feature and automatically start Data Collection jobs, the following configuration is required:

-   The AUTO\_REVENUESYNC profile is set to Yes.
-   The AUTO\_REVENUE\_SYNC lookup is appropriately defined for the RevenueSync\_FromDate, RevenueSync\_Duration, and ROLE\_ID lookup codes. In addition, the Auto Collect lookup code is set to Yes.

When the configuration is done, the Data Collection job will automatically start after completing the automated Revenue Sync. The Data Collection job will be run based on the default RC grouping template.

## Manually run Data Collection jobs

If the Instant On feature is not applicable or if this feature is used only to start automated Revenue Sync jobs, you have to run or schedule the Data Collection job manually.

Similar to collecting data from other integrated upstream systems, you must create an RC batch before collecting data. Perform the following steps to schedule the Data Collection job:

1.  [Create an RC batch](/zuora-revenue/getting-started/policy-management/rc-grouping-template/using-the-pre-configured-rc-grouping-template/create-and-configure-an-rc).
2.  [Schedule the Data Collection job](/zuora-revenue/advanced-revenue-operations/collect-data-for-billing-revenue-integration).

## Create RC batch

Complete the following steps to create an RC batch for Billing - Revenue Integration:

1.  In the Zuora Revenue UI, navigate to Workbench > Revenue Contracts.
2.  Click the left pointing arrow icon to open the side menu and click Batches.
3.  Click the '+' icon to create a new revenue contract batch.
4.  In the Definition tab, complete the batch configuration.
    1.  Select the defined RC grouping template from the Copy From Template dropdown list. To add new options to this dropdown list, navigate to Policies > RC Grouping Templates to create new templates.
    2.  In the Batch Name field, enter the name for this batch.
    3.  Click the save icon to save the template.
5.  (Optional) In the Filters tab, specify the filter conditions displayed based on the selected batch template. You can also click the '+' icon to add a new filter condition. For example, if you select Group By Subscription as the template, you can specify the following conditions:
6.  Click the save icon to save the configuration, then close the window. Subsequently, the created batch is displayed in the RC batch table with a unique batch ID. This ID is required when scheduling the Data Collection job.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cc85f585-c6f4-40e4-9357-6016ba6d791e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNjODVmNTg1LWM2ZjQtNDBlNC05MzU3LTYwMTZiYTZkNzkxZSIsImV4cCI6MTc2NjYzNzQ1MiwianRpIjoiNTRiYzY1MWIyZmJhNDYxNjliZjM2YzY3NGE0ODJkMjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PPEp_nLVZUThbN2JzbXyBoTiR0L7nvSDmmRmDhLjVRA)

7.  (Optional): To run a one-off Data Collection job, complete the following steps:

    1.  Hover over the created batch item and click the Collect Data icon .
    2.  In the Confirm Collect Data dialog, click OK. If the request is successfully submitted, the data for this batch will then be collected.

    After the Data Collection job completes, the status for this batch is updated to DATA COLLECTED.

## Schedule Data Collection job

You should run the Data Collection job on a daily basis so that issues can be captured and resolved early. Therefore, you might have to schedule the Data Collection job to run at the end of every day.

See [Schedule jobs](/zuora-revenue/month-end-process/reports/schedule-jobs) to understand how to schedule a job and what each configuration field stands for. The following points are specific to the Data Collection job:

-   In the Schedule Program tab, select RevPro3.0 Data Collection from the Program Name dropdown list.
-   In the Program Parameters tab:
    -   Enter the batch ID of the created RC batch in the Value column for the BATCH ID parameter. For example, enter`10017`.
    -   Enter `COLLECT DATA` in the Value column for the TYPE parameter.

Note that duplicate records might exist in Staging. The Data Collection job will remove duplicate lines during the collection process.

After the Data Collection job completes, the status for the scheduled Data Transformation job is updated to Completed on the Schedule Jobs page.

To view all collected transaction lines, complete the following steps:

1.  Navigate to Workbench > Revenue Contracts.
2.  Click the left pointing arrow icon to open the side menu and click Batches.
3.  Hover over the RC batch you collected and click the Review Data icon (grid icon).
4.  For each RC line, hover over it and click the Review RC icon (magnifying lens icon) to view the corresponding RC details.
