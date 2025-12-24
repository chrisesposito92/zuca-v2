---
title: "Usage transaction management (Billing - Revenue Integration users)"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/usage-transaction-management-billing---revenue-integration-users"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:43.159Z"
---

# Usage transaction management (Billing - Revenue Integration users)

With Billing - Revenue Integration enabled, the usage transactions can be automatically synced and transferred from Zuora Billing to Zuora Revenue. The following features are involved to address different use cases for Billing - Revenue Integration users to manage usage transactions. For more information, see Sync usage data to Revenue .

| Feature name | Use case addressed |
| --- | --- |
| Usage Sync | If you enabled Billing - Revenue Integration, you will upload usage transactions and manage consumption subscriptions and orders with Zuora Billing. Then, the Usage Sync feature of Zuora Revenue will automatically sync and transfer the rated usage transactions into Zuora Revenue to trigger revenue recognition events and/or for usage tracking depending on the revenue recognition method.The Prepaid with Drawdown feature of Zuora Billing is also supported. |
| Consumption Upload | This feature provides the ability to manually upload usage transactions to trigger revenue recognition events and/or for usage tracking depending on the revenue recognition method.Use this feature as a flexible fail-safe alternative only when necessary. The best practice for Billing - Revenue Integration users is always to use the Usage Sync feature as the primary way.Note that there is no system validation to prevent duplicate data uploads for Billing - Revenue Integration environments. If the same usage transactions are both automatically synced and manually uploaded to Zuora Revenue, it will lead to over-accrual because both sets of data will be processed. |
