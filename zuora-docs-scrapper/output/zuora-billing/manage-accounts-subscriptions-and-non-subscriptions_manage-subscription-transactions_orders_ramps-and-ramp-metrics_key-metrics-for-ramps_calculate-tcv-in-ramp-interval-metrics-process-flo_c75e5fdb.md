---
title: "TCV in Ramp Interval Metrics II"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/key-metrics-for-ramps/calculate-tcv-in-ramp-interval-metrics-process-flow/tcv-in-ramp-interval-metrics-ii"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:38.323Z"
---

# TCV in Ramp Interval Metrics II

This example illustrates the TCV in Ramp Interval Metrics for Subscription Version 2, highlighting the amendments made by Order 2, including updated charge segments and their respective TCV metrics.

Example 2:

The following example shows the TCV in Ramp Interval Metrics for Subscription Version 2 created by Order 2 in the sample subscription . The subscription is amended by Order 2 with the price of Charge 1 updated to $20/month from 2023/01/01 to the term end date. The calculation steps are skipped as the calculation logic is the same as that of Example 1.

The TCV metrics of Charge 1 and Charge 2 in Order 2 are illustrated in the following diagram.

![Ramp metrics- TCV in Order 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7b3de0fd-63f4-4599-8c85-4c8e5ba2911c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdiM2RlMGZkLTYzZjQtNDU5OS04Yzg1LTRjOGU1YmEyOTExYyIsImV4cCI6MTc2NjY0MDUxNiwianRpIjoiYjE5NWMyZmNhYjI1NGY0YWEwNWUxMWI5MmVmYzQ4ZGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.aK5BIcmFQ9jQ93gH_vn4ZdR6DhZX_Wovhu1evwCKyCc)

The TCV in the Ramp Interval Metrics for Charge 1 and Charge 2 in Order 2 is as in the following table. In this example, Charge 1 (the recurring charge) has three charge segments: Charge Segment 1 from 2021/1/1 to 2021/10/31, Charge Segment 2 from 2021/11/1 to 2022/12/31, and Charge Segment 3 from 2023/1/1 to 2023/12/31. Charge 2 (the one-time charge) has only one charge segment. See Segmented rate plan charges for more information about charge segments.

| Order | Interval | Charge Segment | Start Date | End Date | Gross TCV | Discount TCV | Net TCV |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Order 2 | Interval 1 | Charge 1 > Segment 1 | 2021/1/1 | 2021/10/31 | 50 | 0 | 50 |
| Charge 1 > Segment 2 | 2021/11/1 | 2021/12/31 | 20 | 0 | 20 |  |  |
| Charge 2 | 2021/1/1 | 2021/1/1 | 15 | 0 | 15 |  |  |
| Interval 2 | Charge 1 > Segment 2 | 2022/1/1 | 2022/12/31 | 60+60=120 | 0+(-6)=(-6) | 60+54=114 |  |
| Interval 3 | Charge 1 > Segment 3 | 2023/1/1 | 2023/12/31 | 120+120=240 | (-12)+0=(-12) | 108+120=228 |  |
