---
title: "Product mid-interval updates on ramp deals addition"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/product-mid-interval-updates-on-ramp-deals-addition"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:13.774Z"
---

# Product mid-interval updates on ramp deals addition

This tutorial guides you through updating a product mid-interval on a 3-year ramp deal with varying annual charges.

This tutorial demonstrates how to update a product on a ramp deal by creating an order. Specifically, this sample demonstrates how to add a product mid-interval update on a ramp deal. See Which product fields can I update? for the product fields you can update.

In this tutorial, you will update a 3-year ramp deal that contains an annual recurring rate plan charge with different a price for each of its three Ramp Intervals.

-   Interval 1 start date: 2020/07/01, end date: 2021/06/30, charge price: $1000/year

-   Interval 2 start date: 2021/07/01, end date: 2022/06/30, charge price: $1200/year

-   Interval 3 start date: 2022/07/01, end date: 2023/06/30, charge price: $1400/year


You will update the product price to $1300/year from the middle of the second Interval (2022/01/01) to the end of the second Interval (2022/06/30).
