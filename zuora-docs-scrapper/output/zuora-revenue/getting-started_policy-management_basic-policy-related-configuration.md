---
title: "Basic policy-related configuration"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/basic-policy-related-configuration"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:51.554Z"
---

# Basic policy-related configuration

The basic policy-related configuration for Zuora Revenue includes RC grouping templates, POB templates and assignment rules, and SSP setup to ensure proper ASC 606 compliance.

The following policy related configuration is the minimum requirement for Zuora Revenue to perform the ASC 606 steps properly:

-   RC grouping templates The RC grouping templates determine how Zuora Revenue should group the incoming transaction lines into revenue contracts as required by ASC 606 Step 1. For information, see [Create RC grouping template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/using-the-pre-configured-rc-grouping-template/create-and-configure-an-rc) .
-   POB templates and POB assignment rules The POB templates and assignment rules determine how Zuora Revenue identifies performance obligations within each revenue contract as required by ASC 606 Step 2 and also define the revenue treatment for each performance obligation. For information, see [Performance obligation processing](/zuora-revenue/getting-started/policy-management/performance-obligations-processing) .
-   SSP The SSP setup determines how the transaction price is determined and allocated for each line in the revenue contract as required by ASC 606 Step 3 and 4. For information, see [SSP setup](/zuora-revenue/day-to-day-operation/ssp-setup) .

After these basic configurations, Zuora Revenue can perform revenue management based on the revenue events that are uploaded.

## Advanced policy-related configuration

Zuora Revenue also provides configurable rules and settings for you to tailor Zuora Revenue to your own revenue management policies, such as:

-   Contract modification (See [Contract modifications](/zuora-revenue/advanced-revenue-operations/contract-modifications) )
-   Variable consideration (See [Variable consideration processing](/zuora-revenue/day-to-day-operation/variable-consideration-processing) )
-   Revenue hods and transfer holds (See [Revenue holds and transfer holds](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds) )
-   Approval rules (See [Set up approval rules](/zuora-revenue/getting-started/policy-management/approval-rules) )
-   Revenue release based on MJE (See [Manual journal entries](/zuora-revenue/month-end-process/manual-journal-entries) )
