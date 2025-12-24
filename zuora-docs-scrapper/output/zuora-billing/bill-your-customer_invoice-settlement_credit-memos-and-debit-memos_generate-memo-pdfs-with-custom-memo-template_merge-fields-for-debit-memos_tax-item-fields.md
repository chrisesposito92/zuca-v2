---
title: "Tax Item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-debit-memos/tax-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:14.644Z"
---

# Tax Item fields

Learn about the Tax Item fields.

Zuora supports multi-level nested tables within the tax items table.

You can customize your debit memo templates to display tax items in nested tables. In nested tables, you can group and subtotal complex tax items by any supported merge fields or custom fields. For more information, see Grouping and Subtotal Functions in Nested Tables .

If you enable Unified Invoicing , the values of some Tax Item fields depend on the source of the corresponding taxation item.

Note:

These fields are available only if you have enabled one of the tax automation options in Zuora.

| Merge field | Subscription invoice item | Invoice Item from ProductRatePlanCharge | Standalone invoice item |
| --- | --- | --- | --- |
| TaxItem.AmountWithoutTax | Subtotal of all charges without any taxes.Example: $12.80 |  |  |
| TaxItem.ChargeDescription | The description of the charge (in the Product Catalog) that is related to the taxation.Example: One Time Fee | empty | empty |
| TaxItem.ChargeName | The name of the charge (in the Product Catalog) that is related to the taxation.Example: Best Product Ever - Gold Edition: Activation Fee | empty | empty |
| TaxItem.ChargePeriod | The period of the charge (in the Product Catalog) that is related to the taxation.Example: Month | empty | empty |
| TaxItem.ProductDescription | The description of the product (in the Product Catalog) of the subscription charge that is related to the taxation.Example: Includes so many featuresIf the memo item is created from a product rate plan charge, the value of this field is empty.If the memo item is created from an invoice item, the value of this field is from the product associated with the invoice item.If the memo item is created from a billing engine, the value of this field is from the product associated with the subscription component. | The description of the corresponding product (in the Product Catalog) that is related to the taxation.Example: Includes so many features | empty |
| TaxItem.ProductName | The product name of the subscription charge related to the taxation.Example: Best Product EverIf the memo item is created from a product rate plan charge, the value of this field is empty.If the memo item is created from an invoice item, the value of this field is from the product associated with the invoice item.If the memo item is created from a billing engine, the value of this field is from the product associated with the subscription component. | The name of the corresponding product (in the Product Catalog) that is related to the taxation.Example: Best Product Ever | empty |
| TaxItem.ProductSKU | The product SKU number (in the Product Catalog) of the subscription charge that is related to the taxation.Example: SKU-18412This field cannot be translated.If the memo item is created from a product rate plan charge, the value of this field is empty.If the memo item is created from an invoice item, the value of this field is from the product associated with the invoice item.If the memo item is created from a billing engine, the value of this field is from the product associated with the subscription component. | The SKU number of the corresponding product (in the Product Catalog) that is related to the taxation.Example: SKU-18410This field cannot be translated. | empty |
| TaxItem.RatePlanDescription | The description of the product rate plan (in the Product Catalog) of the subscription charge that is related to taxation.Example: Gold Edition includes all features from the Silver Edition | empty | empty |
| TaxItem.RatePlanName | The pricing plan (in the Product Catalog) of the subscription charge related to the taxation.Example: Best Product Ever - Gold Edition | empty | empty |
| TaxItem.SubscriptionNotes | The notes of the subscription that is related to the taxation.Example: Notes about the Subscription | empty | empty |
| TaxItem.SubscriptionNumber | The subscription number that is related to the taxation.Example: 82419391339-ABCThis field cannot be translated. | empty | empty |
| TaxItem.TaxAccountingCode | This accounting code is associated to the taxes in the Invoice Details Export.Example: 12987113-Tax |  |  |
| TaxItem.TaxAmount | The amount of the tax applied to the charge.Example: $12.00 |  |  |
| TaxItem.TaxCode | The tax code identifies which tax rules and tax rates to apply to a specific charge. See Set Up Taxation Codes . Values: a string of 32 characters or fewerExample : TaxCode1000 |  |  |
| TaxItem.TaxCodeDescription | The description of the tax code. Values: a string of 255 characters or fewerExample: This tax code is used for testing. |  |  |
| TaxItem.TaxItemDate | The date that the tax is applied to the charge. Values: a valid date formatted MM/dd/yyyyExample : 01/01/2009 |  |  |
| TaxItem.TaxJurisdiction | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.Example: County |  |  |
| TaxItem.TaxLocationCode | The identifier for the location based on the value of the TaxCode field. Values: automatically generatedExample: 131301 |  |  |
| TaxItem.TaxName | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices. Values: a string of 128 characters or fewerExample: Sales Tax |  |  |
| TaxItem.TaxRate | The tax rate applied to the charge. Values: a valid decimal valueExample : 0.08 |  |  |
| TaxItem.TaxRateDescription | The description of the tax rate.Example: State: 0.06 |  |  |
| TaxItem.TaxRateType | The type of the tax rate applied to the charge. Values: Percentage, FlatFeeExample : Percentage |  |  |
