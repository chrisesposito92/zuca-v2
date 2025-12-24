---
title: "Overview of ramp deals"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ramp-deals"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:38.558Z"
---

# Overview of ramp deals

A ramp deal is a set of time-based periods where products or pricing can change. You initially set up a ramp deal, and then you make ongoing updates to the set of time-based periods where prices can change. Zuora Revenue can recognize the revenue for the ramp deals only if the ramp deal is created in certain ways.

If the ramp deals are created in the following ways and then collected in Zuora Revenue, Zuora Revenue can recognize the revenue for the ramp deals. Instead of the normal relative allocation, Zuora Revenue will perform ramp allocation for the ramp deals, which can result in more accurate revenue being allocated for the ramp deal line.

-   Ramp deals are created in Salesforce via Zuora Quotes and synced to Zuora Billing
-   Ramp deals are created via Zuora Orders in Zuora Billing

Here is an example to help you understand the concept of ramp deals in Zuora Revenue. A subscription S-1 is created in Zuora Billing with the recurring flat fee charge C-1. This is a ramp subscription and contains three intervals (charge segments). The price for each internal is as follows:

| Charge Segment # | Price | Start date | End date |
| --- | --- | --- | --- |
| 1 | $1000 | 2019/01/01 | 2020/01/01 |
| 2 | $2000 | 2020/01/01 | 2021/01/01 |
| 3 | $3000 | 2021/01/01 | 2022/01/01 |

In Zuora Revenue, these charge segments are treated as different sales order (SO) lines and will be recognized separately. It means $1000 will be recognized for the year 2019, $2000 for the year 2020, and $3000 for the year 2021. However, customers have the choice to recognize them as ramp deals, which means the revenue can be recognized in this way: $2000 for the year 2019, $2000 for the year 2020, and $2000 for the year 2021.
