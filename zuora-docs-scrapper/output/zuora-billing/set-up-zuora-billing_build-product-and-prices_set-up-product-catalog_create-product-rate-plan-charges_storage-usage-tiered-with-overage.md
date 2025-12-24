---
title: "Storage (usage, tiered with overage)"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/storage-usage-tiered-with-overage"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:19.983Z"
---

# Storage (usage, tiered with overage)

Explains usage-based charges for file storage, focusing on tiered pricing with overage costs for storage beyond included units.

Usage-based charges are used to track resources that are metered and charged based on an amount consumed. In this example, a rate plan charge is set up for file storage with a minimum included storage units of 500 gigabytes (this is the amount of the included units) and an overage price for any storage used beyond the included units. The price for storage is based on tiered pricing in which charges vary progressively as the volume of storage units purchased increases. In this example, the final tier is considered overage.

## Tiered with overage example

The following is an example of what a tiered pricing table might look like with an overage price:

| Tier | From | To | List Price | Price Format |
| --- | --- | --- | --- | --- |
| 1 | 1 | 500 | 0 | Per Unit |
| 2 | 500 | 1000 | .10 | Per Unit |
| 3 | 1000 | 3000 | .08 | Per Unit |
| 4 | 3000 | 10000 | .06 | Per Unit |
| Overage Price | .15 | USD | Per Unit Thereafter |  |
