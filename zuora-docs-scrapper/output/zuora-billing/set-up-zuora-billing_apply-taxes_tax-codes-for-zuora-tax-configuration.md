---
title: "Tax codes for Zuora Tax configuration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/tax-codes-for-zuora-tax-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:37.609Z"
---

# Tax codes for Zuora Tax configuration

This topic covers information about how tax codes in Zuora Tax configuration are used to apply specific tax rules and rates to charges, and how they relate to products.

A tax code is used to identify which tax rules and rates to apply to a specific charge.

There is a one-to-many relationship between tax codes and products. For example, a tax code can be “Apparel,” and that can map to hundreds of product SKUs for various clothing in various sizes and colors.

For many companies, a single tax code, such as “Internet Service,” is applicable to all products. Zuora Billing has the ability to store multiple Tax Codes in the system.
Note: See Add a Tax Code for Zuora Tax for instructions. Once you have successfully imported a tax rate file, the tax code will be activated automatically.

## Tax Code Fields

| Field | Required? | Description |
| --- | --- | --- |
| Tax Code Name | Yes | This is used to identify the tax code and is mapped to the product charge. |
| Accounting Code | No | This accounting code is associated to the taxes in the export:Invoice Details ExportCredit Taxation Item Details Export (This feature is in Limited Availability .)Debit Taxation Item Details Export (This feature is in Limited Availability .) |
| Description | No | This field is available from:Invoice PDFInvoice Details ExportCredit Taxation Item Details Export (This feature is in Limited Availability.)Debit Taxation Item Details Export (This feature is in Limited Availability.) |
