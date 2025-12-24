---
title: "Example 1B: Create delivery adjustments when ad hoc credit memos exist"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/examples-when-header-level-only-is-selected/example-1b-create-delivery-adjustments-when-ad-hoc-credit-memos-exist"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:21.604Z"
---

# Example 1B: Create delivery adjustments when ad hoc credit memos exist

This example demonstrates how to manage delivery adjustments and prevent credit amounts from exceeding the total invoice amount when ad hoc credit memos exist.

This example uses the above [example invoice and delivery pricing charges](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/example-invoice-and-subscriptions) to explain how to prevent exceeded credit when the Header-level only option is selected.

The Header-level only option is selected. Therefore, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for the whole invoice.

Two credit memos exist for the delivery pricing charge 1 and invoice item 1.

The following table lists the change in the Total available to credit amount of the whole invoice.

| Credit Memo | Source | Credit memo item | Credit amount | Total available to credit amount of whole invoice |
| --- | --- | --- | --- | --- |
| CM 1 | Creating an Ad hoc credit memo | Credit memo item 1 | $40 | $44 = $84 - $40 |
| CM 2 | Creating a delivery adjustment and specifying the adjustment period as follows:Start Date: 2023-08-07End Date: 2023-08-07 | Credit memo item 1 | $1.75The delivery adjustment period is one day and the charge price per day is $1.75, therefore $1.75 credit memo is generated. | $42.25 = $44 - $1.75 |

Because Header-level only option is selected, Zuora uses the total invoice amount of $84 of the whole invoice in the validation.

Compared with Example 1A, suppose you want to create the second delivery adjustment for the delivery pricing charge 1, and the start date and end date of the second delivery adjustment are both 2023-08-08. The third CM3 with a credit amount of $1.75 tends to be generated due to the second delivery adjustment. The total credit memo amount will be CM1 + CM2 + CM3 = 43.5, which doesn't exceed the total invoice amount of $84 of the whole invoice. In this case, Zuora allows you to create the second delivery adjustment.

In other words, after CM1 and CM2 are generated, the Total available to credit amount of the whole invoice is $42.25. You can make CM3 of $1.75 because it is smaller than $42.25.
