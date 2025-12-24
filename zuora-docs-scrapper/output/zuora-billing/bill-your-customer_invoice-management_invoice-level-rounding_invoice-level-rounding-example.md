---
title: "Invoice-level rounding example"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-level-rounding/invoice-level-rounding-example"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:22.685Z"
---

# Invoice-level rounding example

This document provides an example of how the invoice-level rounding feature adjusts invoice totals by rounding to the nearest specified increment.

The following example is used to explain how the invoice-level rounding feature works.

1.  You work with currencies that do not round to the nearest cent (for example, Swiss francs are typically rounded to the nearest 5 cents). In the Customize Currencies billing setting, you set Rounding Increment to 0.05 , and Rounding Mode to Up.


Before the invoice-level rounding feature is enabled, you generate an invoice with the following 2 invoice items from a bill run.

|  | Net Amount | Tax | Processing Type |
| --- | --- | --- | --- |
| Invoice Item 1 | 1 | 0.11 | Charge |
| Invoice Item 2 | 1.01 | 0 | Charge |
| Invoice Total Amount | 2.12 (1+0.11+1.01+0) |  |  |

After the invoice-level rounding feature is enabled, while each invoice item is still rounded with the default 0.01 increment, the invoice total amount is rounded from 2.12 to 2.15. As a result, a 0.03 rounding invoice item is created. See the following table for details.
|  | Net Amount | Tax | Processing Type |
| --- | --- | --- | --- |
| Invoice Item 1 | 1 | 0.11 | Charge |
| Invoice Item 2 | 1.01 | 0 | Charge |
| Invoice Item 3 | 0.03 | 0 | Rounding |
| Invoice Total Amount | 2.15 (1+0.11+1.01+0+0.03+0) |  |  |
