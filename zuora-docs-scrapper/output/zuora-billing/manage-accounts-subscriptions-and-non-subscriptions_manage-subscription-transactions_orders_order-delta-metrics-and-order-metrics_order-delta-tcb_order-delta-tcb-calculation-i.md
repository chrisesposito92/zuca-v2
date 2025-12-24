---
title: "Order Delta TCB Calculation I"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-tcb/order-delta-tcb-calculation-i"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:06.814Z"
---

# Order Delta TCB Calculation I

This document explains the calculation of Order Delta Tcb for Rate Plan Charges and Order Line Items in Zuora, highlighting the methodology, potential discrepancies, and examples of proration and discount application.

When calculating Order Delta Tcb for Rate Plan Charges, Zuora compares the differences in Tcb between the subscription version before and after the order is placed.

For Order Line Items, the delta Tcb grossAmount equals the grossAmount of the associated order line item.

Tcb for a Rate Plan Charge is the base for calculating Order Delta Tcb. Rate Plan Charge Tcb is calculated with the following methodology:

Note:

Discrepancies might exist between TCB and the actual invoice amount. TCB is rated at the time of booking, while the invoice amount is rated at the time of billing. As the rating time is different, several factors can lead to a discrepancy in the rated value, including but not limited to the following:

-   Difference in the rounding result caused by the difference in discount applying sequence or bill run scope

-   Change of billing rules

-   Change of customer account bill cycle day (BCD)


For more scenarios when discrepancies might exist between TCB and the invoice amount, see the scenarios that cause the booking and billing variances for CCV.

Zuora split the RatePlanCharges into multiple segments based on the billing period settings on the rate plan charge. For example, if a rate plan charge starts from 2021-01-01 till 2021-04-01, and the billing cycle is configured as monthly and starts on the 1st. With price being $20 per billing period, the Tcb for the charge is calculated as $60 = $20 per billing period \* 3 periods from 2021-01-01 to 2021-04-01.

![Order Delta Tcb](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/73289b2a-0301-48f3-8082-db77a82312b7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjczMjg5YjJhLTAzMDEtNDhmMy04MDgyLWRiNzdhODIzMTJiNyIsImV4cCI6MTc2NjY0MDM2NSwianRpIjoiMTM0YTZiYzRkY2EzNGYzM2IyOTcxMTVhMmNjZDU0NjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IO6XuixiEW56qD_xiYOaHbPF6F07xoDKOJVzvqeBWpk)

With the same rate plan charge, if the bill cycle day is 16th, the charge will be splitted into two full billing periods and a partial billing period in the beginning, and one in the end.

![Order Delta Tcb2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d027b642-3b3f-4784-9c1f-683049685198?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQwMjdiNjQyLTNiM2YtNDc4NC05YzFmLTY4MzA0OTY4NTE5OCIsImV4cCI6MTc2NjY0MDM2NSwianRpIjoiMGIxMmNkZTQzNjNkNGUxNjhlMjU0OWI0YzNhNmM5ZDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1oouRVovx9LZWEVGvez0yb6BoUsqabWseRI843ukX2E)

Zuora honors the proration rules to calculate the TCB for the partial periods.

When applying discounts, Zuora tries to split the charges by billing periods and will apply discounts to those periods whose start date falls into the duration of the discount charge.

![Order Delta Tcb3.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c1be0804-c307-44ec-a10d-97cb6607301f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMxYmUwODA0LWMzMDctNDRlYy1hMTBkLTk3Y2I2NjA3MzAxZiIsImV4cCI6MTc2NjY0MDM2NSwianRpIjoiY2Y3ZGU5YTM1Njg3NDQyNGE1NWU4MjQ4NjAwNDUxYmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.P8NtoY5WpleZzonuDGfIDpjfjTgkLuXxp2eE9LKYtQk)

Example 1

For example, suppose that you have subscribed a customer to 10 units of your product for 12 months, with a monthly billing period and a list price of $5.00 per unit per month. Then you renew the subscription for another 3 months. Billing Period is monthly and aligned with the charge start date.

The delta of Tcb before and after the Order is $50 per month for an additional 3 months and therefore OrderDeltaTcb = $150 from 2022-01-01 to 2022-03-31.

![Order Delta Tcb4.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4231b6b5-5125-47e0-9900-daf54dbda18b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQyMzFiNmI1LTUxMjUtNDdlMC05OTAwLWRhZjU0ZGJkYTE4YiIsImV4cCI6MTc2NjY0MDM2NSwianRpIjoiZjQ1ZmJiYzA1MDE1NDQ1NThmYTQ5YjU4NmE2NzM5OTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CRgYSeJ20RyiV-wUV5U4Hq-_1NOFo3NBLXI6ev0Uqho)

Order Delta Tcb for this example will be:

| StartDate | EndDate | RatePanChargeId | OrderLineItemId | GrossAmount | NetAmount |
| --- | --- | --- | --- | --- | --- |
| 2022-01-01 | 2022-04-01 | 4028fc827a0e48c1017a0e58b9330014(for RPC-1) | null | $150 | $150 |

See Object and Fields for more details about the fields on this object.
