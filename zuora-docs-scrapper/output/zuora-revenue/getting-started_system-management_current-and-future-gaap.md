---
title: "Integration of current GAAP and future GAAP"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/current-and-future-gaap"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:26.656Z"
---

# Integration of current GAAP and future GAAP

Learn how to integrate data from current GAAP (ASC 605) to future GAAP (ASC 606) using Zuora Revenue's supported integration methods.

You can integrate your data from the current GAAP (ASC 605) to the future GAAP (ASC 606) when you work with different versions of Zuora Revenue's accounting principles (ASC 605 and ASC606). For more details on GAAP see, [Revenue Recognition](/zuora-revenue/advanced-revenue-operations/configuration-for-consumption-revenue-functionality) topic.

## Integration methods

The following integration methods are supported in Zuora Revenue:

-   Process Arrangement in cGAAP and interface Arrangement to fGAAP With this integration method, Zuora Revenue will process transactions under the current GAAP and then load transactions to the staging tables under the future GAAP with Revenue Contract ID and Arrangement ID stamped without the prefix. Except Sales Order and Invoice Deleted transactions, all transaction types are moved to the staging tables under the future GAAP. Revenue comparison is possible between the current GAAP and the future GAAP.
-   Interface Transactions to cGAAP and fGAAP stage With this integration method, when transactions are loaded to the staging tables under the current GAAP, the same transactions are loaded to the staging tables under the future GAAP. However, the Revenue Contract ID will not be stamped in the staging tables under the future GAAP.
