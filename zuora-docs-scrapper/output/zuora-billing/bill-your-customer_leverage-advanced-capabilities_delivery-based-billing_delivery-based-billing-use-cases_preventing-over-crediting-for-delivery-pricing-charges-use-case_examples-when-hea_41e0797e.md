---
title: "Example 1A: Create delivery adjustments when ad hoc credit memos exist"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/examples-when-header-and-item-level-is-selected/example-1a-create-delivery-adjustments-when-ad-hoc-credit-memos-exist"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:16.571Z"
---

# Example 1A: Create delivery adjustments when ad hoc credit memos exist

This reference explains how to manage delivery adjustments and prevent credit amounts from exceeding invoice amounts when ad hoc credit memos are present.

This example uses the [example invoice and delivery pricing charges](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/example-invoice-and-subscriptions) to explain how to prevent exceeded credit when the Header and Item-level option is selected.

The Header and Item-level option is selected. Therefore, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for each invoice item.

Two credit memos exist for the delivery pricing charge 1 and invoice item 1.

The following table lists the change in the Available to credit amount of invoice item 1.

| Credit Memo | Source | Credit memo item | Credit amount | Available to credit amount of invoice item 1 |
| --- | --- | --- | --- | --- |
| CM 1 | Creating an Ad hoc credit memo | Credit memo item 1 | $40 | $2 = $42 - $40 |
| CM 2 | Creating a delivery adjustment and specifying the adjustment period as follows:Start Date: 2023-08-07End Date: 2023-08-07 | Credit memo item 1 | $1.75The delivery adjustment period is one day, and the charge price per day is $1.75. Therefore, $1.75 credit memo is generated. | $0.25 = $2 - $1.75 |

Because the Header and Item-level option is selected, Zuora uses the item amount $42 of invoice item 1in the validation.

Suppose you want to create the second delivery adjustment for the delivery pricing charge 1, and the start date and end date of the second delivery adjustment are both 2023-08-08. The third CM3 with a credit amount of $1.75 tends to be generated due to the second delivery adjustment. The total credit memo amount will be CM1 + CM2 + CM3 = 43.5, which exceeds the item amount $42 of invoice item 1. In this case, Zuora will prevent you from creating the second delivery adjustment.

In other words, after CM1 and CM2 are generated, the Available to credit amount is only $0.25. You cannot make CM3 of $1.75 exceeding $0.25.
