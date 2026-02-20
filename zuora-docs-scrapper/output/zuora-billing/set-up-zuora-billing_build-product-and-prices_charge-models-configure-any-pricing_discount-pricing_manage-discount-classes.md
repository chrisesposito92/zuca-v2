---
title: "Manage discount classes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-discount-classes"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:39.419Z"
---

# Manage discount classes

Learn how to manage discount classes to control the sequence and priority of discount product rate plan charges.

The discount class defines the sequence in which discount product rate plan charges are applied. You can manage discount classes to manage the sequence in which these discount charges are applied. Discount charges that do not have a discount class are applied after discount charges that do have a discount class.

When multiple discount product rate plan charges apply to the same product rate plan charge, the discount charge with a discount class in a higher priority is applied first. The discount charge without any discount class is applied at the end.

In the discount class table, the discount class at the top has the highest priority, and the discount charge with the discount class is applied first. The one at the bottom has the lowest priority, and the discount charge with the discount class is applied at the end.
