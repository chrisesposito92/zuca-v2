---
title: "Fixed amount model and stacked discounts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/fixed-amount-model-and-stacked-discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:28.745Z"
---

# Fixed amount model and stacked discounts

Explains how stacked and non-stacked discount percentages are applied to a fixed amount rate plan charge, with examples and comparisons.

There is another example to show you how stacked and non-stacked discount percentages are applied to a fixed amount rate plan charge.

As shown in the following graphic, a recurring charge based on the Fixed Amount charge model is added to a product rate plan. Then, a stacked discount of 30% is applied to this charge, followed by a stacked discount of 20%.

![stacked-rp.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f10a47f0-e5ad-4468-90d9-5bfeeb7f4e4d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYxMGE0N2YwLWU1YWQtNDQ2OC05MGQ5LTViZmVlYjdmNGU0ZCIsImV4cCI6MTc2NjYzODE2NiwianRpIjoiMTQzMDU1ZDA4ODY3NGU4NGIxYTc3Y2QyNDVmNzQwNGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.cph0zK-1D6qZOeM14CgDNDTJs5DWxQbZOeWPl7fRZZE)

In contrast, another rate plan is created as follows. The only difference is that the discount of 30% and the discount of 20% are applied to the recurring fixed amount charge as non-stacked discounts.

![non-stacked-rp.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f62f57fd-c0b9-4a2d-b4d1-d16a65e27c2f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2MmY1N2ZkLWMwYjktNGEyZC1iNGQxLWQxNmE2NWUyN2MyZiIsImV4cCI6MTc2NjYzODE2NiwianRpIjoiMjc4ZGMyMWMwYzQ2NGQ4OGJlOWMxNGE5OTgwNTA0YmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.fNdwFq509-vD97XLOsBAxJlVT7fN2iYS4grHZEcjQso)

Two subscriptions are created to subscribe to the above two rate plan charges respectively. When the bill run is created for the two subscriptions, the invoice amount for one month is listed as follows.

| Rate plan name | Amount | Discount | Total |
| --- | --- | --- | --- |
| Stacked Discount Rate Plan | 100.00 | -50.00 = 100.00*(30%+20%) | 50.00 |
| Non-Stacked Discount Rate Plan | 100.00 | -44.00 = 100.00*30% + 70.00*20% | 56.00 |
