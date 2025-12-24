---
title: "SSP calculation based on formulas"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ssp-calculation-based-on-formulas"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:17.911Z"
---

# SSP calculation based on formulas

Automatically calculate SSP in Zuora Revenue using formulas and filters on transaction lines.

For Zuora Revenue to automatically determine SSP for your goods and services, you can define formulas and apply the formula to appropriate transaction lines.

For steps on how to apply a formula to eligible transaction lines, see [here](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/D_Day_to_day_operation/topics/apply_a_formula_to_eligible_transaction_lines.dita).

After the formula is defined in the SSP template, Zuora Revenue first applies the filter rules (if defined) to identify eligible transaction lines, and then applies the defined formula to calculate the SSP.

## What to do next

Optionally, you can assign the defined SSP template to an existing RC grouping template. So that the SSP rules can be applied to the related revenue contracts. To do it, edit the RC grouping template and select this SSP template in the SSP Hierarchy tab. For more information, see [Create RC Grouping Template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template).

## Example

Base on the formula definition and filters defined in the following SSP template, the formula, Ext List Price\*50/100, is applied to the transaction lines that fall into the support product category.

![ssp-formula-definition.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/89d46da0-3434-4f63-8040-fae8dc397306?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg5ZDQ2ZGEwLTM0MzQtNGY2My04MDQwLWZhZThkYzM5NzMwNiIsImV4cCI6MTc2NjYzNzA3NiwianRpIjoiYjhlOTFjN2ExYWVmNDBkMTg1NzAxMjgxM2Y0NmVmMDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8k6rEGS9mKGIT5XVyVzr-7pkJ7ud-VZLt_13zNo047A)

![ssp-formula-filters.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dfaca720-f745-4662-ba3d-d3d3e4170fb7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmYWNhNzIwLWY3NDUtNDY2Mi1iYTNkLWQzZDNlNDE3MGZiNyIsImV4cCI6MTc2NjYzNzA3NiwianRpIjoiMzY1NDE1ZTY4ZmZhNGM0MmE5NTc3Njk1NGVkMjQ3Y2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Lk3bR5afgrcuMKNKcC0P-2Hnrw7r6Yf6Tv8ALuHWATQ)
