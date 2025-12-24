---
title: "How discounts work with prorated credits"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/fixed-amount-discount-model-prorations"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:34.081Z"
---

# How discounts work with prorated credits

Explains how discounts and prorated credits are applied in Zuora, depending on the discount charge model.

As with discounts, how Zuora applies prorated credits depends on the discount charge model.

1.  Create a subscription with a normal recurring charge. Billing period : Annual, which is August 20, 2023 to August 20, 2024
2.  Add a discount charge on August 23, 2023. Billing period: Annual Amount: $120
3.  Trigger a bill run.

## Percentage discount model

Consider the following scenario:

-   One-year subscription with a $1,000 regular charge and a 50% discount.

-   Service period is from 2021/04/01 to 2022/03/31.


On the invoice generated on 2021/03/09 for the service period of from 2021/04/01 to 2022/03/31:

-   Regular charge is $1,000

-   Discount charge is -$500 = -$1000 \* 50%


Later the rate plan is removed effective 2021/05/01. On the invoice generated on 2021/04/09, a line item called "Proration Credit" for the service period of 2021/05/01 – 2022/03/31 appears with the following breakdown:

-   Proration credit for the regular charge: - $916.67 = rounding -($1000/12 \* 11)

-   Proration credit for the discount charge: $458.33 = $500 - ($1000 - $916.67) \* 50%


### Percentage discount model (unRounded regular amount)

The current percentage discount amount calculation is based on the rounded regular charge amount, the rounded amount that is shown in the invoice item.

You can calculate the percentage discount amount based on the unRouned regular charge amount. If you want to have access to the unrounded model, submit a request at [Zuora Global Support](http://support.zuora.com/).

Example scenario:

-   Currency: USD

-   Bill cycle day: 1st of the month

-   Billing period: monthly

-   Charge start date: June 21, 2018

-   Percentage discount charge: 52.26131%


For the proration period June 21, 2018, to June 30, 2018, the recurring charge is calculated as:

round (3980\*10/30) = 1326.67

If the percentage discount rating uses the unRounded regular amount, then the discount charge applies the discount amount as follows:

round (3980\*10/30\*52.26131%) = 693.33

If the percentage discount rating does not use the unRounded regular amount, then the discount charge applies the discount amount as follows:

round (1326.67\*52.26131%) = 693.34

#### Discount credit calculation

For discount credit, if the percentage discount rating uses the unRounded regular amount, the discount credit amount is calculated based on the unRounded regular credit amount.

Consider the following scenario:

Charge start date: June 21, 2018

Billing proration period: June 21, 2018 to June 30, 2018

Subscription cancellation date: June 27, 2018

Regular charge is credited as `3980*4/30 = 530.67`

Discount charge is credited as, round(3980\*4/30\*52.26131%) = 277.33

##### Fixed amount discount model (Coupon)

If a prorated credit is triggered on a charge with a fixed-amount discount, by default Zuora applies as much of the credit as possible towards the original net amount (the original charge amount minus the fixed amount discount). Alternatively, Zuora also supports prorating the discount through the "Credit for Prorated Discounts (Fixed-amount Discount Charge Only)" billing rule.

See Credit for prorated discounts for more information.

###### Fixed amount discount model (prorations)

For prorated calculation, the discount amount is calculated based on the number of full months, including the prorated days. If you want to have access to the prorated behavior, submit a request at [Zuora Global Support](http://support.zuora.com/).

The proration was calculated as follows, previously:

Formula: Discount amount = `amount_per_month * number_of_full_month`

Example: Discount amount = `(120/12) * 11`

The following example shows the calculation of the discount amount using proration.

Consider the following scenario:

1.  Create a subscription with a normal recurring charge.

    Billing period: Annual, which is August 20, 2023 to August 20, 2024

2.  Add a discount charge on August 23, 2023.

    Billing period: Annual

    Amount: $120

3.  Trigger a bill run.


Billing rule is as follows:

-   Proration recurring charge: False

-   Proration date: By month first

-   Proration period: 30 days


The proration is calculated as follows:

Discount amount = `amount per month*(number of full months+prorated days/30 days)`

which is,

`($120/12)*(11+(days between August 23, 2023 and September 20, 2023)/30)`
