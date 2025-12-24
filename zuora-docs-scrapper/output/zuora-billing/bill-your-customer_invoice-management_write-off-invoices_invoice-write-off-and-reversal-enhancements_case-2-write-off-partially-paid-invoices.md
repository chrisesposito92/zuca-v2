---
title: "Case 2: Write off partially paid invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-and-reversal-enhancements/case-2-write-off-partially-paid-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:49.715Z"
---

# Case 2: Write off partially paid invoices

This reference topic explains the process of writing off partially paid invoices, including the application of partial payments and the generation of credit memos.

You want to write off an invoice that is partially paid. The invoice originally with the total amount of $430 contains two invoice items, and each item has a positive amount. Later, you apply a payment with the total amount of $150 to the invoice.

The original invoice has the following details:

| Invoice Item | Charge Name | Charge Model | Quantity | Unit Price | Charge Amount | UOM | Balance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | Charge 1 | Per Unit Pricing | 10 | $33 | $330.00 | Each | $330.00 |
| Invoice item 2 | Charge 2 | Flat Fee Pricing | 1 | $100 | $100.00 | $100.00 |  |

After the payment is applied to the invoice, including $100 applied to invoice item 1 and $50 to invoice item 2, the invoice details are as follows:
| Invoice Item | Charge Name | Charge Model | Quantity | Unit Price | Charge Amount | UOM | Balance | Payment Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | Charge 1 | Per Unit Pricing | 10 | 33 | $330 | Each | $230 | $100 |
| Invoice item 2 | Charge 2 | Flat Fee Pricing | 1 | 100 | $100 | / | $50 | $50 |

In this use case, before the enhancement is made, a credit memo is generated during invoice write-off with the following quantity and unit price information:

-   The value of the Quantity field of the credit memo items is 1 in the generated credit memo.
-   The value of the Unit Price field is calculated based on the formula: Unit Price = Amount Without Tax / Quantity.

The generated credit memo has the following details:

| Credit Memo Item | Charge Name | Charge Model | Quantity | Unit Price | Amount Without Tax | UOM | Unapplied Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | Charge 1 | Per Unit Pricing | 1 | $-230 | $230 | Each | $0 |
| Credit memo item 2 | Charge 2 | Flat Fee Pricing | 1 | $-50 | $50 | / | $0 |

After the enhancement is introduced, a credit memo is generated during invoice write-off with both the Quantity and Unit Price fields duplicated from the corresponding invoice items of the original invoice.

The generated credit memo has the following details:
| Credit Memo Item | Charge Name | Charge Name | Quantity | Unit Price | Amount Without Tax | UOM | Unapplied Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | Charge 1 | Per Unit Pricing | 10 | $-33 | $230 | Each | $0 |
| Credit memo item 2 | Charge 2 | Flat Fee | 1 | $-100 | $50 | / | $0 |
