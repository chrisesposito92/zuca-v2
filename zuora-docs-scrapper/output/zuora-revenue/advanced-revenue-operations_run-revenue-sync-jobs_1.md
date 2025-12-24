---
title: "Run Revenue Sync jobs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/run-revenue-sync-jobs_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:41:40.131Z"
---

# Run Revenue Sync jobs

The Revenue Sync job, introduced in version 37.002.02.00, replaces previous jobs by loading and transforming Zuora Billing data into Zuora Revenue fields. It can be run daily, either automatically with the Instant On feature or manually.

Beginning from version 37.002.02.00, the Revenue Sync job is introduced to replace the previous Data Sync job and Data Transformation job. The Revenue Sync job loads a specified range of Zuora Billing object data and then transforms the data to Zuora Revenue fields in the Line Staging tables. It combines the previous Data Sync and Data Transformation jobs into a single one.

We recommend that you run Revenue Sync jobs on a daily basis. There are multiple ways to run the Revenue Sync job:

-   With the Instant On feature, which is delivered as an enhancement delivered in 37.007.00.00, the Revenue Sync job can automatically run based on the system configuration with this feature enabled.
-   If you do not enable the Instant On feature, you can manually start the Revenue Sync job whenever needed. Alternatively, you can schedule this job to automatically run on a regular basis.

## Prerequisites

Before the Revenue Sync job can be started for the first time, the field mapping definitions and transaction mapping templates must be present in Zuora Revenue. You need to complete the following configurations only once. Then, the Revenue Sync job can be run on a regular basis.

1.  Define the field mapping to sync Zuora Billing data to Zuora Revenue pre-staging table. For more information, see [Manage field mapping between Zuora Billing and Zuora Revenue](/zuora-revenue/advanced-revenue-operations/mapping-between-zuora-billing-and-zuora-revenue)
2.  Create transaction templates for supported transaction types so that Zuora Revenue can transform data in pre-staging tables into transaction lines. For more information, see [Create transaction templates](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration).
