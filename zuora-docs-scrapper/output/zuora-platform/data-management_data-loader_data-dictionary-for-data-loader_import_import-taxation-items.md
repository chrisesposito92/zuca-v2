---
title: "Import taxation items"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/import-taxation-items"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:45.764Z"
---

# Import taxation items

This reference document lists the fields associated with the Import Taxation Items data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Invoice Item Id* | The ID of the specific invoice item that the taxation information applies to. Character limit: 32 Values: a valid invoice item ID | string |
| Jurisdiction* | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. Character limit: 32 Values: a string of 32 characterrs or fewer | string |
| Name* | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices. Character limit: 128 Values: a string of 128 characters or fewer | string |
| Tax Amount* | The amount of the tax applied to the charge. Character limit: 16 Values: a decimal value | number <double> |
| Tax Date* | The date that the tax is applied to the charge, in yyyy-mm-dd format. Character limit: 29 | string <date> |
| Tax Rate* | The tax rate applied to the charge. Character limit: 16 Values: a valid decimal value | number <double> |
| Tax Rate Type* | The type of the tax rate applied to the charge. Character limit: 10 Values: Percentage, FlatFee | string |
| Accounting Code | The Chart of Accounts | string |
| Exempt Amount | The calculated tax amount excluded due to the exemption. Character limit: 16 Values: a decimal value | number <double> |
| Location Code | The identifier for the location based on the value of the TaxCode field. Character limit: 32 Values: automatically generated | string |
| Tax Code | The tax code identifies which tax rules and tax rates to apply to a specific charge. Character limit: 32 Values: a string of 32 characters or fewer | string |
| Tax Code Description | The description for the tax code. Character limit: 255 Values: a string of 255 characters or fewer | string |
| Tax Rate Description | The description of the tax rate. Character limit: 255 Values: a string of 255 characters or fewer | string |
