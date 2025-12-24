---
title: "Use case 2.3: Start dates of charge and discount are not aligned, fixed amount discount billing period is smaller than charge billing period"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/use-case-2.3-start-dates-of-charge-and-discount-are-not-aligned-fixed-amount-discount-billing-period-is-smaller-than-charge-billing-period"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:33.956Z"
---

# Use case 2.3: Start dates of charge and discount are not aligned, fixed amount discount billing period is smaller than charge billing period

This use case illustrates the scenario where the start dates of a charge and discount are not aligned, and the fixed amount discount billing period is smaller than the charge billing period. It examines the impact of the ApplyToBillingPeriodPartially checkbox on the discount calculations.

The diagram below shows that the start dates of a charge and discount are not aligned.

![use case 2.3.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d8b83b2a-b4d9-4a3c-adb1-72f27c99ebc1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ4YjgzYjJhLWI0ZDktNGEzYy1hZGIxLTcyZjI3Yzk5ZWJjMSIsImV4cCI6MTc2NjYzODE5NywianRpIjoiMmQ3MjQyM2FiMGQ1NDI1ZmEzMjNmMWRmNTMyM2UxYjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.aXo4lVpxy7OeojpCJhggKrAPmY8OOqVBnohTQV3p8d8)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not. For the fixed amount discounts 2.3.a and 2.3.b , the fixed amount discount billing period is smaller than the charge billing period.

| Number | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amount Discount Billing Period | Total Discount Amount | June | July | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.a | $15 | Unchecked | Month | -15 | 0 | 0 | 0 | -15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2.3.b | $15 | Checked | Month | -45 | -7.5 | -15 | -15 | -7.5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

For the 2.3.b fixed amount discount, June and September discount is the same - $7.5 = - $15/month (Fixed Amount Discount Billing Period) \* 15/30\*1 month, and July and August discount is the same - $15 = - $15/month (Fixed Amount Discount Billing Period) \* 1 month. The total discount is - $45.

## Charge billing period is shorter than discount duration
