---
title: "Taxation item"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/taxation-item"
product: "zuora-platform"
scraped_at: "2026-02-20T17:37:23.288Z"
---

# Taxation item

This reference document lists all the fields associated with the Taxation Item Data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Create | Description |
| --- | --- | --- | --- | --- |
| Taxation Item | Invoice Item Id* | String | Required to create a taxation item | The ID of the specific invoice item that the taxation information applies to. Character limit: 32 Values: a valid invoice item ID |
| Taxation Item | Jurisdiction* | String | Required to create a taxation item | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. Character limit: 32 Values: a String of 32 characters or fewer |
| Taxation Item | Name* | String | Required to create a taxation item | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices. Character limit: 128 Values: a String of 128 characters or fewer |
| Taxation Item | Tax Amount* | Number <double> | Required to create a taxation item | The amount of the tax applied to the charge. Character limit: 16 Values: a decimal value |
| Taxation Item | Tax Date* | String <date> | Required to create a taxation item | The date that the tax is applied to the charge, in yyyy-mm-dd format. Character limit: 29 |
| Taxation Item | Tax Rate* | Number <double> | Required to create a taxation item | The tax rate applied to the charge. Character limit: 16 Values: a valid decimal value |
| Taxation Item | Tax Rate Type* | String | Required to create a taxation item | The type of the tax rate applied to the charge. Character limit: 10 Values: Percentage, FlatFee |
| Taxation Item | Accounting Code | String | Optional | The Chart of Accounts |
| Taxation Item | Exempt Amount | Number <double> | Optional | The calculated tax amount excluded due to the exemption. Character limit: 16 Values: a decimal value |
| Taxation Item | Location Code | String | Optional | The identifier for the location based on the value of the TaxCode field. Character limit: 32 Values: automatically generated |
| Taxation Item | Tax Code | String | Optional | The tax code identifies which tax rules and tax rates to apply to a specific charge. Character limit: 32 Values: a String of 32 characters or fewer |
| Taxation Item | Tax Code Description | String | Optional | The description for the tax code. Character limit: 255 Values: a String of 255 characters or fewer |
| Taxation Item | Tax Rate Description | String | Optional | The description of the tax rate. Character limit: 255 Values: a String of 255 characters or fewer |
