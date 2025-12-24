---
title: "Enable preventing over-crediting"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:25.141Z"
---

# Enable preventing over-crediting

You can enable the Available to credit validation for credit memos billing setting to prevent your total credit amount from exceeding the total amount of the whole invoice or the amount of an invoice item. The prevent over-crediting validation and prevention applies to all charge models.

The credit amount may be sourced from the following credit memos:

-   Ad hoc credit memos that are created for invoices. See [Credit memos and debit memos](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/overview-of-credit-memos-and-debit-memos) .

-   Credit memos that are automatically generated from delivery adjustment creation. The delivery adjustments are only available to the Delivery Pricing charge model.

-   Credit memos that are automatically generated from the billing engine, for example, due to subscription cancellation , product removal , suspension and resumption , and so on.


When creating ad hoc credit memos or delivery adjustments after the billing engine generates credit memos, you can also set a billing rule Include billing engine credits in total available credit to Yes or No to take into account the existing billing engine-generated credit memos in the over-crediting validation and prevention or not.

Note:

When ad hoc credit memos or credit memos due to delivery adjustment creation already exist, if you want to cancel, suspend, resume a subscription, or remove a product, neither billing settings take effect.

For more information on enabling preventing over-crediting, see these topics:

-   [Enable validating total credit amount of credit memos](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/enable-validating-total-credit-amount-of-credit-memos)

-   [Enable or disable counting existing billing engine-generated credit memos](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/enable-or-disable-counting-existing-billing-engine-generated-credit-memos)

-   [Example 1: Create ad hoc credit memos after subscription cancellation](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/example-1-create-ad-hoc-credit-memos-after-subscription-cancellation)

-   [Example 2: Cancel a subscription when ad hoc credit memos exist](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/example-2-cancel-a-subscription-when-ad-hoc-credit-memos-exist)

-   [Example 3-5: Preventing over-crediting for tax](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/example-3-5-preventing-over-crediting-for-tax)
