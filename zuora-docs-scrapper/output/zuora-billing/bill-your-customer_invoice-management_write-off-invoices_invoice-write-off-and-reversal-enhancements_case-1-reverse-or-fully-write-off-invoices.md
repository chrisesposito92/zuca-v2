---
title: "Case 1: Reverse or fully write off invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-and-reversal-enhancements/case-1-reverse-or-fully-write-off-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:47.071Z"
---

# Case 1: Reverse or fully write off invoices

This topic outlines the process for reversing or fully writing off unpaid invoices, detailing the original invoice items and the generation of credit memos before and after enhancements.

You want to reverse or write off an invoice that is not paid. The invoice originally with the total amount of $430 contained two invoice items, and each item has a positive amount.

The original invoice has the following details:

| Invoice Item | Charge Name | Charge Model | Quantity | Unit Price | Charge Amount | UOM | Balance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | Charge 1 | Per Unit Pricing | 10 | $33 | $330.00 | Each | $330.00 |
| Invoice item 2 | Charge 2 | Flat Fee Pricing | 1 | $100 | $100.00 | / | $100.00 |

In this use case, before the enhancement is made, a credit memo is generated during invoice write-off or reversal with the following quantity and unit price information:

-   The value of the Quantity field of the credit memo items is 1 in the generated credit memo.
-   The value of the Unit Price field is calculated based on the formula: Unit Price = Amount Without Tax / Quantity.

The generated credit memo has the following details:

| Credit Memo Item | Charge Name | Charge Model | Quantity | Unit Price | Amount Without Tax | UOM | Unapplied Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | Charge 1 | Per Unit Pricing | 1 | $-330 | $330 | Each | $0 |
| Credit memo item 2 | Charge 2 | Flat Fee Pricing | 1 | $-100 | $100 | / | $0 |

After the enhancement is introduced, a credit memo is generated during invoice write-off or reversal with both the Quantity and Unit Price fields duplicated from the corresponding invoice items of the original invoice.

The generated credit memo has the following details:
| Credit Memo Item | Charge Name | Charge Name | Quantity | Unit Price | Amount Without Tax | UOM | Unapplied Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | Charge 1 | Per Unit Pricing | 10 | $-33 | $330 | Each | $0 |
| Credit memo item 2 | Charge 2 | Flat Fee | 1 | $-100 | $100 | / | $0 |
