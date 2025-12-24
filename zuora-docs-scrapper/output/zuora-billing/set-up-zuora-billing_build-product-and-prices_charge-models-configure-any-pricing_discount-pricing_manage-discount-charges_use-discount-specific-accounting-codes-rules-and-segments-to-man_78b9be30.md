---
title: "Use discount-specific accounting codes, rules, and segments to manage revenue"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-discount-charges/use-discount-specific-accounting-codes-rules-and-segments-to-manage-revenue"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:48.998Z"
---

# Use discount-specific accounting codes, rules, and segments to manage revenue

Learn how to manage revenue using discount-specific accounting codes, rules, and segments, and understand the impact of selecting or not selecting the relevant checkbox in the Finance section.

If you select the Use discount specific accounting codes, rule and segment to manage revenue checkbox under the Finance section, additional configurations are displayed.

-   When the Use discount specific accounting codes, rule and segment to manage revenue checkbox is selected, the discount will use the revenue recognition rule and accounting codes that you configure on the screen shown above.

-   When the checkbox is not selected, the discount will use the accounting codes and revenue recognition rule of the charge that the discount is being applied to.


The segment values that the discount uses depend on how you have configured the Discount segment value setting located in .

See Additional configurations for more information.

As an example, let's say that you have a rate plan that contains a flat fee charge ("Monthly Service Fee") and a discount charge ("Coffee Discount"). You have not selected the Use discount specific accounting codes, rule and segment to manage revenue checkbox.

When the Coffee Discount is applied to the Monthly Service Fee, the resulting discount invoice item will automatically use the same accounting codes, revenue recognition rule, and segment values as the Monthly Service Fee.

Note:

There is a limitation of 100 years maximum between the EffectiveStartDate and TermEndDate of termed subscriptions when using DiscountMetrics.
