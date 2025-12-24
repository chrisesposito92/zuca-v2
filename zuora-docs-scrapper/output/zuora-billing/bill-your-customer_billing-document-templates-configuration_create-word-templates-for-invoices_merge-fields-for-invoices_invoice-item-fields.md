---
title: "Invoice Item Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/invoice-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:25.338Z"
---

# Invoice Item Fields

Zuora supports multi-level nested tables for invoice items, allowing customization of invoice templates to display complex items with grouping and subtotal functions.

Zuora supports multi-level nested tables within the invoice items table.

If you enable [Unified Invoicing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/overview-of-unified-invoicing), the values of some Invoice Item fields depend on the source of the corresponding taxation item.

You can customize your invoice templates to display invoice items in nested tables. In nested tables, you can group and subtotal complex invoice items by any custom fields from the associated product rate plan charge or rate plan charge. For more information, see [Grouping and Subtotal Functions in Nested Tables](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables).

Advanced custom fields cannot be used with Word Template. Similarly, custom fields created using Object Manage cannot be utilized with Mail Merge Template.

| Merge Field | Subscription invoice Item | Invoice Item from ProductRatePlanCharge | Standalone invoice item |
| --- | --- | --- | --- |
| InvoiceItem.AccountName | The account name of the subscription ownerExample: Super Subscription Emporium | empty | empty |
| InvoiceItem.AccountNumber | The account number of the subscription ownerExample: A00010085This field cannot be translated. | empty | empty |
| InvoiceItem.ActualQuantity | The quantity of the units that the customer consumed during the billing period.Type: NumberExample: 4Note: Extra invoice items might be generated in the invoice to display the overage information. In such cases, this field returns the value, 0.For example, you provide a monthly service:$50 per month includes up to 500 minutes free talk each month.If the usage exceeds 500 minutes in a month period, pay overage $0.1 per minute.If your customer consumed 400 minutes in a month:The InvoiceItem.ActualQuantity field returned 400.No extra invoice item is generated because the usage does not exceed the included minutes.If your customer consumed 1000 minutes in a month:The InvoiceItem.ActualQuantity field returned 1000.An extra invoice item is generated to return the overage. The InvoiceItem.ActualQuantity field returned 0. | 0 | 0 |
| InvoiceItem.AmountWithoutTax | Example: $150.00 |  |  |
| InvoiceItem.ChargeAccountingCode | The accounting code of the invoice item.Example: A81291-OneTimeFees | The accounting code of the invoice item. | The accounting code of the invoice item. |
| InvoiceItem.ChargeDate | Example: 01/01/2009 |  |  |
| InvoiceItem.ChargeModel | Example: Per Unit Pricing | empty | empty |
| InvoiceItem.ChargeNumber | Example: C-000004This field cannot be translated. | empty | empty |
| InvoiceItem.ChargePeriod | Example: Month | empty | empty |
| InvoiceItem.ChargeType | Example: One-Time | empty | empty |
| InvoiceItem.Description | The charge description.Example: One Time Fee |  |  |
| InvoiceItem.DiscountAmount | The discount amount of the invoice item. You can use the TableFilter:HideDiscountItem merge field in invoice item tables with the existing grouping and sorting functionality to hide all discount items.Example : $-1.50 |  |  |
| InvoiceItem.DiscountTaxAmount | The discount tax amount of the invoice item. You can use the TableFilter:HideDiscountItem merge field in invoice item tables with the existing grouping and sorting functionality to hide all discount items.Example : $-0.50 |  |  |
| InvoiceItem.ExtendedPrice | Total item charge including taxes.Example: $162.00 |  |  |
| InvoiceItem.IsNew | Indicates whether the invoice item charges are displayed in the most recently posted invoice.Supported values are:true : The charge is not displayed in the most recently posted invoice.false : The charge is displayed in the most recently posted invoice.Example: true or false | false | false |
| InvoiceItem.ListPrice | Example: Tier / From / To / List Price / Price Format 1 / 1 / 15 / 15.30 / Flat Fee 2 / 16 / 18 / 35.00 / Flat Fee | empty | empty |
| InvoiceItem.ListPriceBase | List price base of the charge.Supported values are:Per MonthPer Billing PeriodPer Week | empty | empty |
| InvoiceItem.Name | Charge NameExample: Best Product Ever - Gold Edition: Activation Fee |  |  |
| InvoiceItem.ProductDescription | The item description in the product catalog.Example: Includes so many features | The description of the product associated with this invoice item. | empty |
| InvoiceItem.ProductName | The name of the product associated with this invoice item.Example: Best Product Ever | The name of the product associated with this invoice item. | empty |
| InvoiceItem.ProductRatePlanCharge.CustomField | The custom field of the product rate plan charge associated with this invoice item.Example : Comments about the product rate plan charge | The custom field of the product rate plan charge associated with this invoice item. | empty |
| InvoiceItem.Quantity | The quantity of units that the customer consumed during the billing period.Type: NumberExample: 3Note : For overage invoice items:If the customer consumed less than the included units of the charge during the billing periods, this field returns the actual quantity of the units that the customer consumed.If the customer consumed more than the included units of the charge during the billing periods, this field returns the included units of the charge.Extra invoice items might be generated in the invoice to display the overage information. In such cases, this field returns the overage quantity that the customer consumed.For example, you provide a monthly service:$50 per month includes up to 500 minutes free talk each month.If the usage exceeds 500 minutes in a month, pay overage $0.1 per minute.If your customer consumed 400 minutes in a month:The InvoiceItem.Quantity field returned 400.No extra invoice item is generated because the usage does not exceed the included minutes.If your customer consumed 1000 minutes in a month:The InvoiceItem.Quantity field returned 500.An extra invoice item is generated to return the overage. The InvoiceItem.Quantity field returned 500. |  |  |
| InvoiceItem.RatePlanCharge.CustomField | The custom field of the rate plan charge associated with this invoice item.Example : Comments about the rate plan charge |  |  |
| InvoiceItem.RatePlanDescription | Example: Gold Edition includes all features from the Silver Edition | empty | empty |
| InvoiceItem.RatePlanName | Example: Best Product Ever - Gold Edition | empty | empty |
| InvoiceItem.RevenueRecognitionCode | The revenue recognition accounting code on this invoice item, so the value is empty.SubscriptionComponent.Revrec.CodeExample: 1Year_Straightline | The revenue recognition accounting code on this invoice item.invoiceItem.RevRecCode | The revenue recognition accounting code on this invoice item.invoiceItem.RevRecCode |
| InvoiceItem.ServicePeriod | This field is a text field and is sorted in alphabetical order.Example: 01/31/2009-01/31/2009 |  |  |
| InvoiceItem.ServiceStartDate | Type: DateExample: 01/31/2009 |  |  |
| InvoiceItem.ServiceEndDate | Type: DateExample: 01/31/2009 |  |  |
| InvoiceItem.Sku | Example: SKU-18412This field cannot be translated. |  |  |
| InvoiceItem.SubscriptionNotes | Example: Notes about the Subscription | empty | empty |
| InvoiceItem.SubscriptionNumber | Example: 82419391339-ABCThis field cannot be translated. | empty | empty |
| InvoiceItem.TaxAmount | Subtotal of taxes associated with the invoice item. Only available to users of Zuora Tax.Example: $12.00 |  |  |
| InvoiceItem.UnitOfMeasure | Example: Each |  |  |
| InvoiceItem.UnitOfMeasureDisplayedAs | UOM Display NameExample: Each |  |  |
| InvoiceItem.UnitPrice | The unit price of the rate plan charge associated with the invoice item.The value format varies depending on the item type:Non-discount item: Amount. For example, $50.00Discount item: Percentage. For example, 50.00% | The unit price of the invoice item.The value format varies depending on the item type:Non-discount item: Amount. For example, $50.00Discount item: Percentage. For example, 50.00% | The unit price of the invoice item.The value format varies depending on the item type:Non-discount item: Amount. For example, $50.00Discount item: Percentage. For example, 50.00% |
| InvoiceItem.TaxCode | The tax code name that is mapped to the product charge.Example : California 2019 |  |  |
| InvoiceItem.CustomField | If the table requires to group invoice item data (containing a groupBy tag), the value is the custom field of subscription charge. Otherwise, the value is from the invoice item. Therefore, when the table requires to group invoice item data, the value is empty. | When it is not a group table, the value is the custom field of the invoice item. Otherwise, the value is empty. | When it is not a group table, the value is the custom field of the invoice item. Otherwise, the value is empty. |
| InvoiceItem.PurchaseOrderNumber | empty | The purchase order number that you provide for the invoice item. | The purchase order number that you provide for the invoice item. |
| InvoiceItem.ItemType | empty | The item type that you provide for the invoice item. | The item type that you provide for the invoice item. |
