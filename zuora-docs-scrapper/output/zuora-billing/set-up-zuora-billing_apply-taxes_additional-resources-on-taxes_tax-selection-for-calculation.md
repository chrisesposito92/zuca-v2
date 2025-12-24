---
title: "Tax Selection for Calculation"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-selection-for-calculation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:02.554Z"
---

# Tax Selection for Calculation

Zuora allows selection of tax rates for product purchases or refunds during subscription updates, supporting scenarios like tax rate changes, amendments, and taxability adjustments.

## Overview

Zuora offers the ability to select the tax rate for additional product purchases or refunds resulting from the updates on your subscriptions, such as upselling, early renewal, and cancellation.

With the Apply new tax rate for additional units purchased and old tax rate for returns? billing rule, you can select the tax rate being applied in the following scenarios:

-   Tax rates are changed within a billed period during the lifecycle of subscriptions.

-   Changes are made to active subscriptions by creating amendments or orders.


-   Taxability is changed to product rate plan charges (for example, from not taxable to taxable). (If you find this scenario fits your business needs, contact [Zuora Global Support](http://support.zuora.com/) to enable this enhancement).

When this billing rule is set to Yes , and the tax rate or taxability is changed:

-   If you increase the price or quantity for the same product in the same billing period, the customer will be charged for the increased amount at the NEW tax rate.

-   If you decrease the price or quantity for the same product in the same billing period, the customer will be charged for the decreased amount at the OLD tax rate.


## Supported operations

This feature supports billing operations for one amendment or order before billing, such as updates in the product quantity, price, or the product rate plan charge taxability.
