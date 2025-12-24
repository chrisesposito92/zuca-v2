---
title: "Tax calculation when creating memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos/tax-calculation-when-creating-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:43.030Z"
---

# Tax calculation when creating memos

This reference details the conditions under which tax calculations are supported for credit and debit memos, including those generated from invoices, product rate plan charges, and other methods.

The following tables show the supported (Yes) and unsupported (No) conditions of tax calculation when creating credit and debit memos.

Credit and debit memos that are generated from invoices:

| Tax Engine | Invoice in Tax Inclusive Mode | Invoice in Tax Exclusive Mode |
| --- | --- | --- |
| Zuora Tax | YesNote: Memo tax is calculated based on the default tax exclusive mode by default. There might be differences between invoice tax amount and memo tax amount because of the rounding. If this happens, try switching to the tax inclusive mode to calculate memo tax. | YesNote: Support the Percentage tax type only. We do not support the Flat Fee type. |
| Avalara | Yes |  |
| Connect | Yes |  |

Credit and debit memos that are generated from product rate plan charges:

| Tax Engine | Invoice in Tax Inclusive Mode | Invoice in Tax Exclusive Mode |
| --- | --- | --- |
| Zuora Tax | YesNote: Support the Percentage tax type only. We do not support the Flat Fee type. | YesNote: Support the Percentage tax type only. We do not support the Flat Fee type. |
| Avalara | Yes | Yes |
| Connect | Yes | Yes |

Credit memos that are generated from other ways, such as bill run or REST API:

| Tax Engine | Invoice in Tax Inclusive Mode | Invoice in Tax Exclusive Mode |
| --- | --- | --- |
| Zuora Tax | YesNote: Support the Percentage tax type only. We do not support the Flat Fee type. | YesNote: Support the Percentage tax type only. We do not support the Flat Fee type. |
| Avalara | Yes | Yes |
| Connect | Bill Run: NoOther ways via REST API (Except generating memos from invoices and product rate plan charges): Yes | Bill Run: NoOther ways via REST API (Except generating memos from invoices and product rate plan charges): Yes |
