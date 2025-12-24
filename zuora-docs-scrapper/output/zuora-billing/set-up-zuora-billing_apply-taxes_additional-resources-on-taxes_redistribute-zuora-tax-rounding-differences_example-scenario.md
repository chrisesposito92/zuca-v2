---
title: "Example scenario"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/redistribute-zuora-tax-rounding-differences/example-scenario"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:40.761Z"
---

# Example scenario

This article describes a scenario involving US tax-inclusive invoices with tax rounding and redistribution rules applied.

Imagine a scenario where:

-   A US tax-inclusive invoice contains two invoice items with the same tax rate, tax code, and tax name.

-   The currency of the invoice is USD and the default tax rounding rule is used, so the tax amount is rounded to two decimal places.

-   The Redistribute Zuora Tax rounding differences billing rule is set to Yes, and the grouping rule for the US is set to "grouping taxation items that have the same tax code, tax name, and tax rate".


In this case, the tax rounding difference redistribution is as listed in the following table.

| Invoice/ Invoice item | Amount with tax | Tax rate | Tax amount after rounding | Tax amount after redistribution |
| --- | --- | --- | --- | --- |
| Invoice item 1 | $30 | 0.08 | $2.22 | $2.22 |
| Invoice item 2 | $50 | 0.08 | $3.70 | $3.71 |
| Item-level total | $80 |  | $5.92 | $5.93 |
| Group-level total | $80 |  | $5.93 | $5.93 |
| Tax rounding difference that is redistributed | $0.01 |  |  |  |
