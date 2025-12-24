---
title: "Example 2B: Create ad hoc credit memos after subscription cancellation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/examples-when-header-level-only-is-selected/example-2b-create-ad-hoc-credit-memos-after-subscription-cancellation"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:24.897Z"
---

# Example 2B: Create ad hoc credit memos after subscription cancellation

This document explains how to create ad hoc credit memos after subscription cancellation, ensuring the total credit amount does not exceed the total invoice amount when the "Header-level only" option is selected.

This example uses the above [example invoice and delivery pricing charges](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/example-invoice-and-subscriptions) to explain how to prevent exceeded credit when the Header-level only option is selected.

The Header-level only option is selected. Therefore, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for the whole invoice.

One credit memo exists for the delivery pricing charge 1 and invoice item 1.

The following table lists the change in the Total available to credit amount of the whole invoice.

| Credit Memo | Source | Credit memo item | Credit amount | Total available to credit amount of the whole invoice |
| --- | --- | --- | --- | --- |
| CM 1 | Cancelling subscription and specifying the cancellation date as follows:Cancellation policy: Specific DateCancellation effective date: 21/08/2023 | Credit memo item 1 | $21From the subscription term start date 07/08/2023 to the cancellation effective date 21/08/2023, two weeks passed, and the charge price is $21 = $1.75(unit price)*6(weekdays)*2(week). | $63 = $84 - $21 |

Because the Header-level only option is selected, Zuora uses the total invoice amount of $84 of the whole invoice in the validation.

Zuora's behaviors also depend on the setting of another billing rule Include billing engine credits in total available credit as follows:

-   If this billing rule is set to Yes, Zuora counts both the billing engine-generated credit memos and credit memos generated from other sources in the Total Available To Credit amount of the whole invoice. Compared with Example 2A, suppose you want to create an ad hoc credit memo CM2 with a credit amount of $30. After the subscription cancellation, the Total available to credit amount changes to $63. In this case, Zuora allows you to issue the second credit memo CM2 of $30. In other words, you can issue a credit memo of $63 or less.
-   If this billing rule is set to No, Zuora does not take into account the billing engine-generated credit memos in over-crediting validation. The Total available to credit amount is still $84. In this case, Zuora allows you to issue the second credit memo CM2 of $30.
