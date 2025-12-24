---
title: "Process discounts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/process-discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:21.348Z"
---

# Process discounts

Learn how Zuora's rating and billing engine determines the sequence for applying multiple discounts to subscription charges.

If multiple discounts can be applied to a subscription charge, Zuora's rating and billing engine (RBE) uses the following sequence to decide on which discount to use:

1.  Order by discount classes : The discount charge with a higher discount class is applied first. The discount charge without any discount class is applied in the end.
2.  If the discount charges have no discount class or have the same discount class, order by discount charge model types: Discount-Percentage > Discount-Fixed Amount
3.  If the discount charges have the same model type, order by the discount level: Rate Plan Level > Subscription Level > Account Level
4.  If the discount charges have the same model type and discount level, order by discount charge number: The smallest charge number is applied to the subscription charge.

    Generally speaking, RBE processes subscription charges in the following order:.

    RBE processes the rating of regular charges first, then it applies discounts and any prepayments, before calculating tax, and generating the invoice. By design, discount charges can only be applied to positive charge amounts. If a customer has multiple percentage discounts that can be applied, the discount will be compounded.
