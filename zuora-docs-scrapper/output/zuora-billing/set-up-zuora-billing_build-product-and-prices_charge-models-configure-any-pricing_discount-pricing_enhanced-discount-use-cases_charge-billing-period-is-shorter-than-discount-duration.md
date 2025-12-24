---
title: "Charge billing period is shorter than discount duration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/charge-billing-period-is-shorter-than-discount-duration"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:35.897Z"
---

# Charge billing period is shorter than discount duration

This use case illustrates the impact of non-aligned start dates for charges and discounts, highlighting differences when the ApplyToBillingPeriodPartially checkbox is checked or unchecked.

## Use case 3.1: Start dates of charge and discount are not aligned, percentage discount

The diagram below shows that the start dates of a charge and discount are not aligned.![use case](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dfadab01-51b3-42b3-a881-62d665f16abd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmYWRhYjAxLTUxYjMtNDJiMy1hODgxLTYyZDY2NWYxNmFiZCIsImV4cCI6MTc2NjYzODY1NCwianRpIjoiMDVjOTM3MjM0YzJmNGY4YmJlNTA1NWQ0ZDJjMTVlMTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7PFc1LSLzrZrzpXQOsoveZnH6V3rTjwLpp50mBGVJJ8)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not.

| Number | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amount Discount Billing Period | Total Discount Amount | June | July | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.a | 10% | Unchecked | N/A | -10 | 0 | -10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3.1.b | 10% | Checked | N/A | -15 | -5 | -10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

For the 3.1.b percentage discount, June discount is -$5=-$100/month \* 10% \* 15/30\*1 month and July discount is -$10=-$100/month \* 10% \* 1 month. The total discount is -$15.
