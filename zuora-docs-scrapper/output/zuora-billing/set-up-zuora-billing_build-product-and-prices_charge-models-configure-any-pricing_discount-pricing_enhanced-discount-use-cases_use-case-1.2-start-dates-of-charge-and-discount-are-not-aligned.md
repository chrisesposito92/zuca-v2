---
title: "Use case 1.2: Start dates of charge and discount are not aligned"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/use-case-1.2-start-dates-of-charge-and-discount-are-not-aligned"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:49.422Z"
---

# Use case 1.2: Start dates of charge and discount are not aligned

This use case illustrates the impact of misaligned start dates for charges and discounts, highlighting differences when the ApplyToBillingPeriodPartially checkbox is checked or unchecked.

The diagram below shows that the start dates of a charge and discount are not aligned.

![use case 1.2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4ee11036-0372-4ab0-8ea3-d471ff47777c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRlZTExMDM2LTAzNzItNGFiMC04ZWEzLWQ0NzFmZjQ3Nzc3YyIsImV4cCI6MTc2NjYzODE4NywianRpIjoiOTkxNDk1NjE4OTMzNDZhNThkMjcyZGViOTAyZTM3ZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nWp42nfBH7s7puezZGVKIcNBmQTgWlsvFk0rWpfOyHE)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not.

| Number | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amount Discount Billing Period | Total Discount Amount | June | July | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.a | 10% | Unchecked | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1.2.b | 10% | Checked | N/A | -30 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | -10 | -10 | -10 |
| 1.2.c | $10 | Unchecked | Month | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1.2.d | $10 | Checked | Month | -30 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | -10 | -10 | -10 |

-   For the 1.2.b percentage discount, the total discount is - $30 = - $100/month \* 10% \* 3 months.

-   For the 1.2.d fixed amount discount, the total discount is - $30 = - $10/month (Fixed Amount Discount Billing Period) \* 3 months.
