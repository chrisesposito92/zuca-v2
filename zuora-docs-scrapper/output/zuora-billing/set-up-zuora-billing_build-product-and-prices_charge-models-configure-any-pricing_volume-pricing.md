---
title: "Volume pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/volume-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:08.953Z"
---

# Volume pricing

Volume pricing models determine charges based on the quantity purchased, using a tiered pricing structure.

With a volume pricing charge model, the price to be charged is based on the volume purchased. When setting up a volume charge model, a price table is used to define the pricing for each range of volumes, as well as the pricing rule to apply if the customer purchases a quantity that falls within the range of that tier. Each tier is defined by a starting unit, an ending unit, a list price, and a price format (which can be either flat fee or per unit).

For example, if the user purchases anywhere from 0-50 licenses, they will be charged per unit price of $120 (5 units x $120 per unit = $600) . However, if the user purchases anywhere from 51 – 100 units, they will be charged a per unit price of $100 (60 units x $100 per unit = $6000).

Volume pricing models can be used with one-time, recurring, or usage charges.

Note:

Note that the system UI supports only 16 digits, including those after the decimal, for all the tier pricing rates mentioned in the above example. If you want the system to support more than 16 digits (if your pricing has more than 16 decimal places), use the [API](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlanCharge/) to create/update the charges.
