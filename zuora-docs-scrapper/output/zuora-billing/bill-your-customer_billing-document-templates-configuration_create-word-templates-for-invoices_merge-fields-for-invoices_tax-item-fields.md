---
title: "Tax Item Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/tax-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:40.680Z"
---

# Tax Item Fields

Zuora supports the customization of invoice templates to display tax items in nested tables, allowing for grouping and subtotaling by merge or custom fields.

Zuora supports multi-level nested tables within the tax items table.

You can customize your invoice templates to display tax items in nested tables. In nested tables, you can group and subtotal complex tax items by any supported merge fields or custom fields. For more information, see Grouping and Subtotal Functions in Nested Tables .

Note:

Advanced custom fields cannot be used with Word Template. Similarly, custom fields created using Object Manage cannot be utilized with Mail Merge Template.

If you enable Unified Invoicing , the values of some Tax Item fields depend on the source of the corresponding taxation item.

Note:

These fields are available only if you have enabled one of the [tax automation](/zuora-billing/set-up-zuora-billing/apply-taxes/overview-of-zuora-tax) options in Zuora.

| Merge Field | Sort Order | Description | Invoice Item from ProductRatePlanCharge | Standalone invoice item |
| --- | --- | --- | --- | --- |
| TaxItem.AmountWithoutTax |  | Subtotal of all charges without any taxes.Example: $12.80 |  |  |
| TaxItem.ChargeDescription |  | The description of the charge (in the Product Catalog) that is related to the taxation.Example: One Time Fee | empty | empty |
| TaxItem.ChargeName |  | The name of the charge (in the Product Catalog) that is related to the taxation.Example: Best Product Ever - Gold Edition: Activation Fee | empty | empty |
| TaxItem.ChargePeriod |  | The period of the charge (in the Product Catalog) that is related to the taxation.Example: Month | empty | empty |
| TaxItem.ProductDescription |  | The description of the product (in the Product Catalog) related to taxation.Example: Includes so many features | The description of the product (in the Product Catalog) related to taxation. | empty |
| TaxItem.ProductName | 3 | The name of the product (in the Product Catalog) related to taxation.Example: Best Product Ever | The name of the product (in the Product Catalog) related to taxation. | empty |
| TaxItem.ProductSKU |  | The SKU number of the product (in the Product Catalog) related to taxation.Example: SKU-18412This field cannot be translated. | The SKU number of the product (in the Product Catalog) related to taxation.This field cannot be translated. | empty |
| TaxItem.RatePlanDescription |  | The description of the product rate plan (in the Product Catalog) that is related to taxation.Example: Gold Edition includes all features from the Silver Edition | empty | empty |
| TaxItem.RatePlanName | 4 | The pricing plan (in the Product Catalog) related to the taxation.Example: Best Product Ever - Gold Edition | empty | empty |
| TaxItem.SubscriptionNotes |  | The notes of the subscription that is related to the taxation.Example: Notes about the Subscription | empty | empty |
| TaxItem.SubscriptionNumber | 2 | The subscription number that is related to the taxation.Example: 82419391339-ABCThis field cannot be translated. | empty | empty |
| TaxItem.TaxAccountingCode |  | This accounting code is associated to the taxes in the Invoice Details Export.Example : 12987113-Tax |  |  |
| TaxItem.TaxAmount |  | The amount of the tax applied to the charge.Example: $12.00 |  |  |
| TaxItem.TaxCode |  | The tax code identifies which tax rules and tax rates to apply to a specific charge. See Tax codes setup. Values: a string of 32 characters or fewerExample: TaxCode1000 |  |  |
| TaxItem.TaxCodeDescription |  | The description of the tax code. Values: a string of 255 characters or fewerExample: This tax code is used for testing. |  |  |
| TaxItem.TaxItemDate | 1 | The date that the tax is applied to the charge. Values: a valid date formatted MM/dd/yyyyExample: 01/01/2009 |  |  |
| TaxItem.TaxJurisdiction |  | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.Example: County |  |  |
| TaxItem.TaxLocationCode |  | The identifier for the location based on the value of the TaxCode field. Values: automatically generatedExample: 131301 |  |  |
| TaxItem.TaxName |  | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices. Values: a string of 128 characters or fewerExample: Sales Tax |  |  |
| TaxItem.TaxRate |  | The tax rate applied to the charge. Values: a valid decimal valueExample: 0.08 |  |  |
| TaxItem.TaxRateDescription |  | The description of the tax rate.Example: State: 0.06 |  |  |
| TaxItem.TaxRateType |  | The type of the tax rate applied to the charge. Values: Percentage , FlatFeeExample: Percentage |  |  |
