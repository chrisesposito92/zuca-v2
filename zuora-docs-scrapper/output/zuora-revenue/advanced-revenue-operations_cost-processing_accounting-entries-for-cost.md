---
title: "Accounting entries for cost"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/cost-processing/accounting-entries-for-cost"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:57.056Z"
---

# Accounting entries for cost

Learn how accounting entries for cost are created based on cost type configuration, including revenue release alignment and liability entry settings.

The accounting entries are created based on the setup of each cost type. If the cost type is configured to follow the revenue release, the percentage of the cost release is equal to the percentage of the revenue release. A cost type can also be configured to be recognized independently from revenue.

The Liability Entry toggle switch in the cost type definition determines whether the one-sided or two-sided initial entry is to be created for the cost type.

-   If the Liability Entry switch is toggled to Yes , the two-sided initial entry is created and posted to the upstream system.

-   If the Liability Entry switch is toggled to No , the one-sided initial entry is created with the Interfaced Flag being Y , which means the cost entry is already created in the upstream system.


When the cost is created in the upstream system, Zuora Revenue debits the specified balance sheet account for the defined cost type. Depending on whether the two-sided entry is to be created, Zuora Revenue might also credit the specified income statement account. At the time of cost recognition, Zuora Revenue debits the specified income statement account and credits the balance sheet account for the defined cost type.

## One-sided initial entry example

For example, a cost type is created with the following settings:

-   Balance Sheet: Deferred Cost
-   Income Statement: Recognize Cost
-   Liability Entry: No

At the time of capitalization, Zuora Revenue debits the balance sheet account for the defined cost type. The accounting entries of the cost type look like the following. X in the table indicates an amount is incurred for that account type.

| Account type | Debit | Credit |
| --- | --- | --- |
| Deferred Cost | X |  |

At the time of cost recognition, Zuora Revenue debits the income statement account and credits the balance sheet account. The accounting entries look like the following:

| Account type | Debit | Credit |
| --- | --- | --- |
| Deferred Cost |  | X |
| Recognize Cost | X |  |

## Two-sided initial entry example

A cost type is created with the following settings:

-   Balance Sheet: Commission Accrued
-   Liability Account: Commission Payable
-   Income Statement: Commission Expenses
-   Liability Entry: Yes

At the time of capitalization, Zuora Revenue debits the balance sheet account type and credits the liability account type specified in the accounting setup. The accounting entries of this cost type look like the following. X in the table indicates an amount is incurred for that account type.

| Account type | Debit | Credit |
| --- | --- | --- |
| Commission Accrued | X |  |
| Commission Payable |  | X |

At the time of cost recognition, Zuora Revenue credits the balance sheet account and debits the income statement account. The accounting entries look like the following:

| Account type | Debit | Credit |
| --- | --- | --- |
| Commission Accrued |  | X |
| Commission Expenses | X |  |
