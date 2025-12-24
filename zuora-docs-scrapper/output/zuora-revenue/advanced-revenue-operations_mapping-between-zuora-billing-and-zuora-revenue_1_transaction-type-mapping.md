---
title: "Transaction type mapping"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/mapping-between-zuora-billing-and-zuora-revenue_1/transaction-type-mapping"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:41:14.451Z"
---

# Transaction type mapping

This document explains the mapping of Zuora Billing transactions to Zuora Revenue transaction types and highlights limitations for certain transactions.

With Billing - Revenue Integration enabled, Zuora Billing transactions of the invoice, subscription, amendment, credit memo, debit memo, and invoice item adjustment transaction types are mapped to their corresponding Zuora Revenue transaction types.

## Limitation

The following Zuora Billing transactions will be treated as standalone transactions without SO reference:

-   Credit memos created from charges

-   Credit memos created from invoices

-   Invoice Item Adjustment

-   Debit memos that are not generated through bill runs


## General Mapping

Mapping for some transaction types is straightforward and listed in the table below. For invoice item adjustment and credit memo generated through bill runs, more data points need to be considered to determine the mapping. The subsequent table provides more details about these two transaction types.

| Zuora Billing transaction type | Zuora Revenue transaction type |
| --- | --- |
| Subscription | SO |
| Amendment | SO (when the rate plan charge segment of the amendment is different from the original subscription)SO update (when the amendment has the same rate plan charge segment as the original subscription) |
| Invoice | INV |
| Debit Memo | INV |
| Credit Memo Created from Charges | INV |
| Credit Memo Created from Invoices | INV (for usage-based charges on Multi-Attribute Pricing charge models, High Water Mark Pricing charge models, and Pre-Rated Pricing charge models)CM-C (for invoice reversal)CM (for others) |
| Credit Memo Generated through Bill Run* | See the table below |
| Invoice Item Adjustment* | See the table below |

## Special Mapping

To determine the mapping for invoice item adjustment and credit memo generated from bill runs, the following data points are considered to determine the mapped transaction type in Zuora Revenue:

-   Charge model of the rate plan charge (RPC)
-   Subscription type
-   The positive/negative sign of the billed amount or/and the booking amount

| Zuora Billing transaction type | RPC charge model | Subscription type | Determination | Zuora Revenue transaction type |
| --- | --- | --- | --- | --- |
| Credit Memo Generated through Bill Run | Discount - Fixed Amount | Evergreen/Termed | The billed amount is a negative value. | INV |
| Discount - Fixed Amount | Evergreen/Termed | The billed amount is a positive value. | CM |  |
| Regular | Evergreen/Termed | The sign of the booking amount is the same as the sign of the billed amount. | INV |  |
| Regular | Evergreen/Termed | The sign of the booking amount is different from the sign of the billed amount. | CM |  |
| Discount-Percentage | Termed | The sign of the booking amount is the same as the sign of the billed amount. | INV |  |
| Discount-Percentage | Termed | The sign of the booking amount is different from the sign of the billed amount. | CM |  |
| Discount-Percentage | Evergreen | The sign of the applied RPC booking amount is the same as the sign of the billed amount. | CM |  |
| Discount-Percentage | Evergreen | The sign of the applied RPC booking amount is different from the billed amount. | INV |  |
| Invoice Item Adjustment | Discount - Fixed Amount | Evergreen/Termed | The billed amount is a negative value. | INV |
| Discount - Fixed Amount | Evergreen/Termed | The billed amount is a positive value. | CM-C |  |
| Regular | Evergreen/Termed | The sign of the booking amount is the same as the sign of the billed amount. | INV |  |
| Regular | Evergreen/Termed | The sign of the booking amount is different from the sign of the billed amount. | CM-C |  |
| Discount-Percentage | Termed | The sign of the booking amount is the same as the sign of the billed amount. | INV |  |
| Discount-Percentage | Termed | The sign of the booking amount is different from the sign of the billed amount. | CM-C |  |
| Discount-Percentage | Evergreen | The sign of the applied RPC booking amount is the same as the sign of the billed amount. | CM-C |  |
| Discount-Percentage | Evergreen | The sign of the applied RPC booking amount is different from the sign of the billed amount. | INV |  |

## Limitation

The following Zuora Billing transactions will be treated as standalone transactions without SO reference:

-   Credit memos created from charges
-   Credit memos created from invoices
-   Invoice Item Adjustment
-   Debit memos that are not generated through bill runs
