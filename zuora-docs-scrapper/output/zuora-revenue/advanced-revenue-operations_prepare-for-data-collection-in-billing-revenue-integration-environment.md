---
title: "Prepare for data collection in Billing - Revenue Integration environment"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/prepare-for-data-collection-in-billing---revenue-integration-environment"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:29.316Z"
---

# Prepare for data collection in Billing - Revenue Integration environment

Learn how to prepare the Billing - Revenue Integration environment for data collection, including data sync and transformation processes, and the necessary steps for different software versions.

As explained in [Billing - Revenue Integration infrastructure overview](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration-infrastructure-overview), data sync and data transformation are required for Zuora Billing data before they can be collected into Zuora Revenue for revenue processing.

To prepare the Billing - Revenue Integration environment and the Zuora Billing data for the Zuora Revenue data collection, there are two ways illustrated in the following diagram. ![OTR-integration-workflow.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f36c54a4-62d5-416c-bf31-21ea346daa5d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYzNmM1NGE0LTYyZDUtNDE2Yy1iZjMxLTIxZWEzNDZkYWE1ZCIsImV4cCI6MTc2NjYzNzQ0NywianRpIjoiNmVmNWZhNDBmYjliNGM1NmFkYmE3MDFlMmI1YjYwZDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WP-f-WO68GxDSBIXAxV8dPsLLVzK-zs9c5-lU67Ayo4)

At the beginning of the workflow, the RevPro3.0 Automate Datasync Setups Process needs to be started. This program reads the settings from Zuora Billing and configures some profiles in Zuora Revenue accordingly. For more information, see [Sync Zuora Billing settings to Zuora Revenue](/zuora-revenue/advanced-revenue-operations/sync-zuora-billing-settings-to-zuora-revenue).

-   Beginning from version 37.006.00.00, this integration workflow is simplified by eliminating the need to schedule any data sync jobs. After the one-off program completes and one-off configuration is done in the system, data can be synced automatically from Zuora Billing to Zuora Revenue.

-   Beginning from version 37.002.02.00 until 37.006.00.00, the Revenue Data Sync job is provided to replace both the Data Sync and Data Transformation jobs in previous versions. After field mapping and transaction templates are set up in Zuora Revenue, the Revenue Sync job can be started on-demand or on a regular basis. For more information, see [Run Revenue Sync jobs](/zuora-revenue/advanced-revenue-operations/run-revenue-sync-jobs).

-   Before version 37.002.02.00, you need to start the Data Sync and Data Transformation jobs sequentially. There are also some prerequisites for running these two jobs. For example, the RevPro3.0 Sync Object Mapping program is a prerequisite for the Data Sync job. Before the Data Transformation job is started, transaction templates must be created appropriately on the File Upload > Transactions/Cost page. For more information, see [Run Data Sync jobs](/zuora-revenue/advanced-revenue-operations/run-data-sync-jobs) and Run Data Transformation jobs.


After Zuora Billing data is all in place in Zuora Revenue staging tables, it is time to start the Data Collection job, which triggers revenue processing. The Data Collection job is recommended to run on a daily basis so any upstream data issue can be captured early. For more information, see [Collect data for Billing - Revenue Integration.](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration)
