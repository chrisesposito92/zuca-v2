---
title: "Redistribute Zuora Tax rounding differences"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/redistribute-zuora-tax-rounding-differences"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:38.273Z"
---

# Redistribute Zuora Tax rounding differences

Learn how to manage tax rounding differences in Zuora using Avalara AvaTax, OneSource Determination, or Zuora Tax for accurate billing.

## Overview

You can choose whether to redistribute the tax rounding differences between the group level and item level when you use Avalara AvaTax for Communications app, OneSource Determination app, or Zuora Tax for tax calculation. To access this feature, click your username at the top right and navigate to , then change the Redistribute Zuora Tax rounding differences setting. This setting is set to No, by default, indicating that Zuora does not redistribute the tax rounding differences between the group level and item level.

If this billing rule is set to Yes, invoice items in one invoice are grouped based on the tax code, tax name, and tax rate. You can specify different rules on how the taxation items are grouped on invoices for different countries. The total tax amount is calculated at the group level and the item level. Note that each discount is counted as an invoice item in the calculation.

The tax rounding differences between the group level and item level are redistributed to the corresponding items.
