---
title: "Taxation item update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/taxation-item-update"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:31.921Z"
---

# Taxation item update

This reference article lists all the fields associated with the Taxation Item Data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Id* | The unique ID of a taxation item. | string |
| Exempt Amount | The calculated tax amount excluded due to the exemption. | number <double> |
| Jurisdiction | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. | string |
| Location Code | The identifier for the location based on the value of the taxCode field. | string |
| Name | The name of the taxation item to be updated. | string |
| Tax Amount | The amount of the tax applied to the credit or debit memo. | number <double> |
| Tax Code | The tax code identifies which tax rules and tax rates to apply to a specific credit or debit memo. | string |
| Tax Code Description | The description of the tax code. | string |
| Tax Date | The date when the tax is applied to the credit or debit memo. | string <date> |
| Tax Rate | The tax rate applied to the credit or debit memo. | number <double> |
| Tax Rate Description | The description of the tax rate. | string |
| Tax Rate Type | The type of the tax rate applied to the credit or debit memo. Enum: "Percentage" "FlatFee" | string |
| Finance Information On Account Accounting Code | The accounting code that maps to an on account in your accounting system. | string [ 0 .. 100 ] characters |
| Finance Information Sales Tax Payable Accounting Code | The accounting code for the sales taxes payable | string [ 0 .. 100 ] characters |
