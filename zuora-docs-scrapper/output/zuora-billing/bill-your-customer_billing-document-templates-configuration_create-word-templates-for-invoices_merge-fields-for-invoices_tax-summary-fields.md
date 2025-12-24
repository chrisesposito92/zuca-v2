---
title: "Tax Summary Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/tax-summary-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:37.021Z"
---

# Tax Summary Fields

This reference details the fields available for tax summaries in Zuora, including descriptions and examples of each field.

Note:

These fields are available only if you have enabled one of the [tax automation](/zuora-billing/set-up-zuora-billing/apply-taxes/overview-of-zuora-tax) options in Zuora.

| Merge Field | Description | Sort Order |
| --- | --- | --- |
| TaxSummary.AmountWithoutTax | Subtotal of all charges without any taxes.Example: $12.80Note: If multiple taxes with different jurisdictions are associated with the same invoice item, the value will include these tax amounts in the sum. |  |
| TaxSummary.TaxExtendedAmount | Summary of all taxes by unique combination of Tax Name, Tax Rate and Tax Rate Type.Type: NumberExample: $12.80 |  |
| TaxSummary.TaxName | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices. Values: a string of 128 characters or fewerExample: Sales Tax | 1 |
| TaxSummary.TaxRate | The tax rate applied to the charge. Values: a valid decimal valueExample: 0.08 | 2 |
| TaxSummary.TaxRateType | The type of the tax rate applied to the charge. Values: Percentage , FlatFeeExample: Percentage | 3 |
