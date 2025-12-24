---
title: "Tax calculation for credit and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:37.719Z"
---

# Tax calculation for credit and debit memos

Explore how to manage tax calculations for credit and debit memos in Zuora, including automatic tax calculation options, tax modes, and conditions for tax recalculation.

When you [create a credit or debit memo from an invoice](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos/create-a-credit-or-debit-memo-from-an-invoice), you can select whether to allow Zuora to calculate tax automatically for the memo.

-   If the Tax Auto Calculation checkbox is selected, you can't manually set the credit amount for tax. However, you can only credit back the tax item even if this checkbox is selected, no matter for external tax engine or Z-tax.

-   If the Tax Auto Calculation checkbox is not selected, Zuora won't automatically calculate taxes in the memo. Instead, you need to set the credit amount for tax manually.


When Tax Auto Calculation works with the Do not send $0 items to external tax engine for tax calculation billing rule:

-   If the Tax Auto Calculation checkbox is selected and the Do not send $0 items to external tax engine for tax calculation billing rule is Yes, the $0 items will NOT be sent to the external tax engine.

-   If the Tax Auto Calculation checkbox is selected and the Do not send $0 items to external tax engine for tax calculation billing rule is No, the $0 items will be sent to the external tax engine.


## Two tax modes of memo items

When you create memos from invoices through the Zuora UI or Zuora REST API, you can specify whether to include tax in the credit or debit amount for each memo item. It will determine the tax mode of the memo item, either tax inclusive or tax exclusive.

If you [create memos from invoices through the Zuora UI](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos/create-a-credit-or-debit-memo-from-an-invoice), you can use the Tax-Included column to switch the tax mode of memo items from tax exclusive mode to tax inclusive mode. The default mode is tax exclusive, meaning that the credit or debit amount does not include tax.

If you create memos from invoices through the Zuora REST API, you can use the `taxMode` field of the [Create credit memo from invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromInvoice/) or [Create debit memo from invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromInvoice/) operation in the request body to specify the tax mode of memo items. The default value is `TaxExclusive`, meaning that the value of the `amount` field does not include tax.

To know about scenarios of using tax inclusive mode when creating memos, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos/scenarios-of-using-tax-inclusive-mode-when-creating-memos).

For information on tax calculation when creating memos, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos/tax-calculation-when-creating-memos).

To know about taxation items creation through REST APIs, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos/taxation-items-creation-through-rest-apis).

## Tax recalculation when updating memos

When you update the amount of a memo item, the memo tax will be recalculated under the following conditions:

-   The memo is created from a product rate plan charge and you use Avalara to calculate the tax.

-   The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.


The memo tax recalculation will not be triggered due to memos cannot be updated under the following conditions:

-   The memo is created from an invoice and the invoice is in tax inclusive mode.

-   The memo is created from a product rate plan charge and the invoice is in tax inclusive mode.

-   The memo is created in other ways, such as bill run or REST API.


## Tax calculation with discount charges

The behavior will be affected by how you set the Create credit memos mirroring invoice items billing rule. for more detailed examples.
