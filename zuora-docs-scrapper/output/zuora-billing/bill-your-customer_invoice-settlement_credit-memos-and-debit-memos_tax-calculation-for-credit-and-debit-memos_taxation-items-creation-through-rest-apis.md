---
title: "Taxation items creation through REST APIs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos/taxation-items-creation-through-rest-apis"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:45.313Z"
---

# Taxation items creation through REST APIs

This reference explores creation of taxation items for credit and debit memos using REST API operations.

You can create taxation items for credit and debit memos through [Create taxation items for credit memo](https://developer.zuora.com/v1-api-reference/api/operation/POST_CM_TaxationItems/) and [Create taxation items for debit memo](https://developer.zuora.com/v1-api-reference/api/operation/POST_DM_TaxationItems/) operations with the following conditions. The taxation items will be appended to the draft memos.

| Scenario | Invoice in Tax Inclusive Mode | Invoice in Tax Exclusive Mode |
| --- | --- | --- |
| Memos that are generated from invoices | No | YesNote: If the invoice tax is calculated by the tax engines that are configured in Zuora, you are not allowed to append tax to the memo. |
| Memos that are generated from product rate plan charges | No | Yes |
| Memos that are generated from other ways, such as bill run | No | Yes |
