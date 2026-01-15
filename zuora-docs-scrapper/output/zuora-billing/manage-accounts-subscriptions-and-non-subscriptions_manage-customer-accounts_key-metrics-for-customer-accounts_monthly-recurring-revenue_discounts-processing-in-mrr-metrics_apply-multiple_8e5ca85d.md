---
title: "Apply multiple discount charges to one regular charge process flow"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/discounts-processing-in-mrr-metrics/apply-multiple-discount-charges-to-one-regular-charge-process-flow"
product: "zuora-billing"
scraped_at: "2026-01-15T21:55:38.581Z"
---

# Apply multiple discount charges to one regular charge process flow

This task topic explains how to apply multiple discount charges to a regular charge by following a specific sequence of discount classes, model types, and levels.

In the MRR calculation, if more than one discount charge can be applied to a regular charge, the sequence below is used to decide which discount goes first:

1.  Order by discount classes: The discount charge with the discount class in a higher application order is applied before those with discount classes in lower application orders. The discount charge without any discount class is applied in the end.

2.  If the discounts have no discount class or have the same discount class, order them by discount charge model types: Discount-Percentage > Discount-Fixed Amount

3.  If the discounts have the same model type, for example, all the discounts have the Discount-Percentage or Discount-Fixed Amount type, order them by discount levels: Rate Plan Level > Subscription Level > Account Level

4.  If the discounts have the same model type and discount level, for example, all the discounts have the Discount-Percentage type and can be applied to the Rate Plan Level, order them by discount charge number: The smallest charge number is applied to the subscription charge.


See the example in Apply both a fixed-amount and percentage discount charges to one regular charge . See more information in Processing discounts .
