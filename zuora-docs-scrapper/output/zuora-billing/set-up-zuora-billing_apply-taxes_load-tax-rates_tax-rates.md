---
title: "Tax rates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/load-tax-rates/tax-rates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:45.154Z"
---

# Tax rates

Zuora Billing supports up to three independent taxes per charge, with options for FlatFee or Percentage types.

Zuora Billing allows up to three independent taxes to apply to a single charge.

Each tax can have a type of FlatFee or Percentage. If you use Percentage, store the tax rate as a decimal value. For example, 7% should be entered as .07.

Percentages are applied to the charge amount. This means that a negative percentage will be created if the charge is negative. However, FlatFee taxes are applied as positive values, regardless of whether the charge is negative or positive.

The tax rates are not compounded. Each tax will be applied independently to the charge. For example, if a charge is $10 and Tax 1 is .07 and Tax 2 is .01, Tax 1 will be calculated to .70 and Tax 2 will be calculated to .10

## Tax rate fields

| Field | Required? | Description |
| --- | --- | --- |
| n-Tax Rate | Yes | Any value, including whole numbers and decimal numbers. For Percentage, specify the decimal value. For Flat Fee, you can specify any numeric value. |
| n-Tax Rate Type | Yes | Specify FlatFee or Percentage . |
| n-Tax Name | Yes | Specify any name. The tax rates will be grouped and displayed by name on the invoice. |
| n-Tax Jurisdiction | No | Optional string value to help with reporting. Typically, this value is State, County, City, etc. You can also use this field to segment GL. |
| n-Tax Location Code | No | Optional string value to help with reporting. Typically, this value is a numeric that identifies the specific city. You can also use this field to segment GL. |
| n-Tax Rate Description | No | Optional string value to help with reporting. This can be the breakdown of the components of the tax that can be parsed outside of Zuora Billing or a GL segment value. |
