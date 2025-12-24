---
title: "Use case 1.1: Start dates of charge and discount are aligned"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/use-case-1.1-start-dates-of-charge-and-discount-are-aligned"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:46.996Z"
---

# Use case 1.1: Start dates of charge and discount are aligned

This use case demonstrates the alignment of charge and discount start dates on 06/01/2023, highlighting the impact of the ApplyToBillingPeriodPartially checkbox on discount calculations.

The diagram below shows that the start dates of a charge and discount are aligned on 06/01/2023.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d6c2d4c8-7b1f-4dd2-ab06-a15585874345?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ2YzJkNGM4LTdiMWYtNGRkMi1hYjA2LWExNTU4NTg3NDM0NSIsImV4cCI6MTc2NjYzODE4NCwianRpIjoiY2RhZDdlNGRlMzUzNGJmNWEzMGM2MjcxMmQ3NTZlYmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.U_RyzjR91puZv9QqWV5dfwl8fJfrz_8gx19XIad_dBg)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not.

| No. | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amnt. Discount Billing Period | Total Discount Amnt. | Jun. | Jul. | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.a | 10% | Unchecked | N/A | -120 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 |
| 1.1.b | 10% | Checked | N/A | -30 | -10 | -10 | -10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1.1.c | $10 | Unchecked | Month | -10 | -10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1.1.d | $10 | Checked | Month | -30 | -10 | -10 | -10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

-   For the 1.1.b percentage discount, the total discount is - $30 = - $100/month \* 10% \* 3 months.

-   For the 1.1.d fixed amount discount, the total discount is - $30 = - $10/month (Fixed Amount Discount Billing Period) \* 3 months.
