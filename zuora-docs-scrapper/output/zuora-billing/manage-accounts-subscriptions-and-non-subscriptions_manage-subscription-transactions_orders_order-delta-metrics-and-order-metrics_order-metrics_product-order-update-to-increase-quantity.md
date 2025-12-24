---
title: "Product order update to increase quantity"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-metrics/product-order-update-to-increase-quantity"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:56.138Z"
---

# Product order update to increase quantity

This topic details the process of updating a product order to increase quantity and the resulting order metrics, including Order Quantity, MRR, TCB, TCV, and ELP, calculated for the period from April to December 2018.

This example assumes that the customer's bill cycle day is set to the 1st of the month.

On 4/1/2018, you use an Update Product order action to increase the quantity to 13. Zuora then creates the following order metrics:

| Order Metric | Start Date | End Date | Value | Calculation |
| --- | --- | --- | --- | --- |
| Order Quantity | 4/1/2018 | 12/31/2018 | 3 | Change in number of units |
| Order Mrr | 4/1/2018 | 12/31/2018 | 15.00 | Value of Order Quantity × list price (5.00) |
| Order Tcb | 4/1/2018 | 12/31/2018 | 135.00 | Apr-Dec: 9 months × Value of Order Mrr |
| Order Tcv | 4/1/2018 | 12/31/2018 | 135.00 | Apr-Dec: 9 months × Value of Order Mrr |
| Order Elp | 4/1/2018 | 12/31/2018 | 216.00 | Apr-Dec: 9 months × Value of Order Quantity × original list price (8.00) |
