---
title: "Use case 2.2: Start dates of charge and discount are not aligned"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/use-case-2.2-start-dates-of-charge-and-discount-are-not-aligned"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:57.034Z"
---

# Use case 2.2: Start dates of charge and discount are not aligned

This use case illustrates the impact of non-aligned start dates for charges and discounts, highlighting differences when the ApplyToBillingPeriodPartially checkbox is checked or not.

The diagram below shows that the start dates of a charge and discount are not aligned.

![use case 2.2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/68a45c26-a3b2-4381-b545-854fe397ae4d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY4YTQ1YzI2LWEzYjItNDM4MS1iNTQ1LTg1NGZlMzk3YWU0ZCIsImV4cCI6MTc2NjYzODE5NSwianRpIjoiYjIwZGM2MzRlZDYyNDhmNGJhMjE0YTdjMWJjMmQyNzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nd7XfykmLEqPydC8kXhOQtlKNRasV1V2w9w3XC2gKmg)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not.

For the fixed amount discounts 2.2.c and 2.2.d , the fixed amount discount billing period equals the charge billing period.

| Number | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amount Discount Billing Period | Total Discount Amount | June | July | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.a | 10% | Unchecked | N/A | -10 | 0 | -10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2.2.b | 10% | Checked | N/A | -9.84 | -5 | -4.84 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2.2.c | $15 | Unchecked | Month | -15 | 0 | -15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2.2.d | $15 | Checked | Month | -14.76 | -7.5 | -7.26 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

-   For the 2.2.b percentage discount, June discount is - $5=- $100/month \* 10% \* 15/30\*1 month and July discount is - $4.84= - $100/month \* 10% \* 15/31\*1 month. The total discount amount is - $9.84.

-   For the 2.2.d fixed amount discount, June discount is - $7.5=- $15/month (Fixed Amount Discount Billing Period) \* 15/30\*1 month and July discount is -$7.26 = - $15/month (Fixed Amount Discount Billing Period) \* 15/31\*1 month. The total discount amount is - $14.76.
