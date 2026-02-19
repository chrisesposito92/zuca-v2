---
title: "SSP calculation based on formulas"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ssp-calculation-based-on-formulas"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:09.480Z"
---

# SSP calculation based on formulas

Automatically calculate SSP in Zuora Revenue using formulas and filters on transaction lines.

For Zuora Revenue to automatically determine SSP for your goods and services, you can define formulas and apply the formula to appropriate transaction lines.

For steps on how to apply a formula to eligible transaction lines, see [here](/zuora-revenue/day-to-day-operation/ssp-calculation-based-on-formulas/apply-an-ssp-formula-to-eligible-transaction-lines).

After the formula is defined in the SSP template, Zuora Revenue first applies the filter rules (if defined) to identify eligible transaction lines, and then applies the defined formula to calculate the SSP.

## What to do next

Optionally, you can assign the defined SSP template to an existing RC grouping template. So that the SSP rules can be applied to the related revenue contracts. To do it, edit the RC grouping template and select this SSP template in the SSP Hierarchy tab. For more information, see [Create RC Grouping Template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template).

## Example

Base on the formula definition and filters defined in the following SSP template, the formula, Ext List Price\*50/100, is applied to the transaction lines that fall into the support product category.

![ssp-formula-definition.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/89d46da0-3434-4f63-8040-fae8dc397306?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg5ZDQ2ZGEwLTM0MzQtNGY2My04MDQwLWZhZThkYzM5NzMwNiIsImV4cCI6MTc3MTU1ODc0NCwianRpIjoiNTZiNmI5MzM2YjFiNDAzYTg2N2JlMTFhMjQzZTRlOTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.R8s4gBUjVp7HwKLV0F9GUH67FZerHcsvStBWDxjdjSw)

![ssp-formula-filters.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dfaca720-f745-4662-ba3d-d3d3e4170fb7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmYWNhNzIwLWY3NDUtNDY2Mi1iYTNkLWQzZDNlNDE3MGZiNyIsImV4cCI6MTc3MTU1ODc0NCwianRpIjoiZjkwNTEyNTYyYzA4NDk0YmFjMDUxZGI2MWI1ZWM5NTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Gc5A8lb1fRGU106kzN4-64rHSyyGqF0n-L67-h7GXSE)
