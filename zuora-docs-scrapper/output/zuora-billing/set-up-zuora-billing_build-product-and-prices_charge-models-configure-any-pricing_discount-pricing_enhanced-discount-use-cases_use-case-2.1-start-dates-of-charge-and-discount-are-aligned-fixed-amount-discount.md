---
title: "Use case 2.1: Start dates of charge and discount are aligned, fixed amount discount"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/use-case-2.1-start-dates-of-charge-and-discount-are-aligned-fixed-amount-discount"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:54.427Z"
---

# Use case 2.1: Start dates of charge and discount are aligned, fixed amount discount

The start dates of a charge and discount are aligned, and the impact of the ApplyToBillingPeriodPartially checkbox on the discount is analyzed in this use case.

The diagram below shows that the start dates of a charge and discount are aligned on 06/01/2023.

![use case 2.1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f6cc0e99-c571-45ec-afcd-c4183faf47c4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2Y2MwZTk5LWM1NzEtNDVlYy1hZmNkLWM0MTgzZmFmNDdjNCIsImV4cCI6MTc2NjYzODE5MiwianRpIjoiZmFjYzExNDMyYmY3NDAxOGJjZTMzMmZjYWFhNmZlZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.fORVtqhLUHqWBw7RTZzzWXThfti5GkuQEaRU05RoRJY)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not.

| Number | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amount Discount Billing Period | Total Discount Amount | June | July | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.a | $15 | Unchecked | Quarter | -15 | -15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2.1.b | $15 | Checked | Quarter | -60 | -15 | 0 | 0 | -15 | 0 | 0 | -15 | 0 | 0 | -15 | 0 | 0 |

For the 2.1.b fixed amount discount, the total discount - $60 = - $15/quarter (Fixed Amount Discount Billing Period) \* 4 quarters. The charge price of the first month in each quarter completely offsets the discount in that quarter.
