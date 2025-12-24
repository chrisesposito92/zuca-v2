---
title: "Use case 3.2: Start dates of charge and discount are not aligned, fixed amount discount"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/use-case-3.2-start-dates-of-charge-and-discount-are-not-aligned-fixed-amount-discount"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:39.002Z"
---

# Use case 3.2: Start dates of charge and discount are not aligned, fixed amount discount

This use case illustrates the scenario where the start dates of a charge and discount are not aligned, focusing on fixed amount discounts and the impact of the ApplyToBillingPeriodPartially option.

The diagram below shows that the start dates of a charge and discount are not aligned.

![use case 3.2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d7a4b145-1d71-4c5d-93db-70fc62a56034?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ3YTRiMTQ1LTFkNzEtNGM1ZC05M2RiLTcwZmM2MmE1NjAzNCIsImV4cCI6MTc2NjYzODY1NiwianRpIjoiYjliYjdhNjU1NGYyNGE0ZTlkNTkyNWFhYWZkNDA5OTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.KBDPn-PKS_vGRe76e9KCUd19vgMw9-JS9dOM0mNNER4)

The table below shows the differences when the ApplyToBillingPeriodPartially checkbox is checked or not. For the fixed amount discounts 3.2.a and 3.2.b , the fixed amount discount billing period equals the charge billing period.

| Number | Discount Rate | ApplyToBillingPeriodPartially | Fixed Amount Discount Billing Period | Total Discount Amount | June | July | Aug. | Sep. | Oct. | Nov. | Dec. | Jan. | Feb. | Mar. | Apr. | May |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.a | $10 | Unchecked | Month | -110 | 0 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 |
| 3.2.b | $10 | Checked | Month | -115 | -5 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 | -10 |

For the 3.2.b fixed amount discount, the total discount is - $10/month (Fixed Amount Discount Billing Period) \* 11.5 months.
