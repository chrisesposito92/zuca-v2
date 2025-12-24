---
title: "Example 2A: Create ad hoc credit memos after subscription cancellation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/examples-when-header-and-item-level-is-selected/example-2a-create-ad-hoc-credit-memos-after-subscription-cancellation"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:19.883Z"
---

# Example 2A: Create ad hoc credit memos after subscription cancellation

This reference explains how to create ad hoc credit memos after subscription cancellation, ensuring the credit amount does not exceed the invoice amount when the Header and Item-level option is selected.

This example uses the [example invoice and delivery pricing charges](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/example-invoice-and-subscriptions) to explain how to prevent exceeded credit when the Header and Item-level option is selected.

The Header and Item-level option is selected. Therefore, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for each invoice item.

One credit memo exists for the delivery pricing charge 1 and invoice item 1.

The following table lists the change in the Available to credit amount of invoice item 1.

| Credit Memo | Source | Credit memo item | Credit amount | Available to credit amount of invoice item 1 |
| --- | --- | --- | --- | --- |
| CM 1 | Cancelling subscription and specifying the cancellation date as follows:Cancellation policy: Specific DateCancellation effective date: 21/08/2023 | Credit memo item 1 | $21From the subscription term start date 07/08/2023 to the cancellation effective date 21/08/2023, two weeks passed, and the charge price is $21 = $1.75(unit price)*6(weekdays)*2(week). | $21 = $42 - $21 |

Because the Header and Item-level option is selected, Zuora uses the item amount $42 of invoice item 1in the validation.

Zuora's behaviors also depend on the setting of another billing rule Include billing engine credits in total available credit as follows:

-   If this billing rule is set to Yes, Zuora counts both the billing engine-generated credit memos and credit memos generated from other sources in the Available to Credit amount of an invoice item. Suppose you want to create an ad hoc credit memo CM2 with a credit amount of $30. After the subscription cancellation, the Available to Credit amount changes to $21. In this case, Zuora does not allow you to issue the second credit memo CM2 of $30. In other words, you can only issue a credit memo of $21 or less.
-   If this billing rule is set to No, Zuora does not take into account the billing engine-generated credit memos in over-crediting validation. Suppose you want to create an ad hoc credit memo CM2 with a credit amount of $30. The Available to Credit amount is still $42. In this case, Zuora allows you to issue the second credit memo CM2 of $30.
