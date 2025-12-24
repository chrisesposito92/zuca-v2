---
title: "Debit Memo Item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-debit-memos/debit-memo-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:12.052Z"
---

# Debit Memo Item fields

Learn about the Debit Memo Item fields

Zuora supports multi-level nested tables within the debit memo items table.

If you enable Unified Invoicing , the values of some Debit Memo Item fields depend on the source of the corresponding debit memo item.

You can customize your debit memo templates to display debit memo items in nested tables. In nested tables, you can group and subtotal complex debit memo items by any custom fields from the associated product rate plan charge or rate plan charge. For more information, see Grouping and Subtotal Functions in Nested Tables .

| Merge field | Memo items from subscription invoice items | Memo items from invoice items with ProductRatePlanCharge | Memo items from standalone invoice items |
| --- | --- | --- | --- |
| DebitMemoItem.PaidAmount | The amount of debit memo item that your customer has already paid for.Example: $60 |  |  |
| DebitMemoItem.TaxAmount | The tax amount of this debit memo item.Example: $60 |  |  |
| DebitMemoItem.AmountWithoutTax | The total amount of this debit memo item without tax.Example: $60 |  |  |
| DebitMemoItem.Sku | Unique SKU for the product associated with this debit memo item.Example: SKU-00000006 |  |  |
| DebitMemoItem.Name | Name of this debit memo item.Example: Best Product Ever - Gold Edition: Activation Fee |  |  |
| DebitMemoItem.ServicePeriod | The service period of this debit memo item.Example: 01/01/2019-01/31/2029 |  |  |
| DebitMemoItem.ServiceStartDate | Start date of the service period for this debit memo item. If the charge is a one-time fee, this is the date of that charge.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/01/2019 |  |  |
| DebitMemoItem.ServiceEndDate | End date of the service period for this debit memo item, such as the last day of the service period.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/31/2029 | Might be empty | Might be empty |
| DebitMemoItem.Quantity | Quantity of this debit memo item in the configured unit of measure for the charge.Example: 2 |  |  |
| DebitMemoItem.ExtendedPrice | Total item charge including taxes.Example: $162 |  |  |
| DebitMemoItem.UnitOfMeasure | The unit of measure for this debit memo item.Example: Each |  |  |
| DebitMemoItem.UnitOfMeasureDisplayedAs | The display name of the unit of measure.Example: Each |  |  |
| DebitMemoItem.SubscriptionNumber | The subscription number associated with this debit memo item.Example: A-S00000026 | empty | empty |
| DebitMemoItem.ChargeNumber | The charge number associated with this debit memo item.Example: C-00000033 | empty | empty |
| DebitMemoItem.ChargeType | The charge type of the product rate plan charge associated with this debit memo item.Example: One-Time | The charge type of the product rate plan charge associated with this debit memo item. | empty |
| DebitMemoItem.ChargeModel | The charge model of the product rate plan charge associated with this debit memo item.Example: Per Unit Pricing | The charge model of the product rate plan charge associated with this debit memo item. | empty |
| DebitMemoItem.ChargePeriod | The charge period associated with this debit memo item.Example: Month | empty | empty |
| DebitMemoItem.ChargeAccountingCode | The accounting code of the charge associated with this debit memo item.Example: A81291-OneTimeFees |  |  |
| DebitMemoItem.CustomField | The customer field of this debit memo item. |  |  |
| DebitMemoItem.AccountName | The name of the account associated with this debit memo item.Example : Super Subscription Emporium |  |  |
| DebitMemoItem.AccountNumber | The account number associated with this debit memo item.Example: A00000019 |  |  |
| DebitMemoItem.SubscriptionNotes | The notes of the subscription associated with this debit memo item.Example : Notes about the Subscription |  |  |
| DebitMemoItem.ProductName | The name of the product associated with this debit memo item.Example: Best Product Eve | The name of the product associated with this debit memo item. | empty |
| DebitMemoItem.ProductDescription | The description of the product associated with this debit memo item.Example: Includes so many feature | The description of the product associated with this debit memo item. | empty |
| DebitMemoItem.ProductRatePlanCharge.CustomField | The custom field of the product rate plan charge associated with this debit memo item.Example: Comments about the product rate plan charge | The custom field of the product rate plan charge associated with this debit memo item. | empty |
| DebitMemoItem.RatePlanName | The name of the product rate plan associated with this debit memo item.Example: Best Product Ever - Gold Edition | The name of the product rate plan associated with this debit memo item. | empty |
| DebitMemoItem.RatePlanDescription | The description of the product rate plan associated with this debit memo item.Example: Gold Edition includes all features from the Silver Edition | The description of the product rate plan associated with this debit memo item. | empty |
| DebitMemoItem.RatePlanCharge.CustomField | The custom field of the rate plan charge associated with this debit memo item.Example: Comments about the rate plan charge | empty | empty |
| DebitMemoItem.Description | The description of this debit memo item.Example: One Time Fee |  |  |
| DebitMemoItem.ReferredInvoiceItemSku | Unique SKU for the product associated with the invoice item. The invoice item is associated with this debit memo item.Example: SKU-00000006 |  |  |
| DebitMemoItem.ReferredInvoiceItemName | The name of the invoice item associated with this debit memo item.Example: Best Product Ever - Gold Edition: Activation Fee |  |  |
| DebitMemoItem.ReferredInvoiceItemDescription | The description of the charge associated with the invoice item. The invoice item is associated with this debit memo item.Example: One Time Fee |  |  |
| DebitMemoItem.ReferredInvoiceItemServiceStartDate | Start date of the service period for the invoice item. The invoice item is associated with this debit memo item.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/01/2019 |  |  |
| DebitMemoItem.ReferredInvoiceItemServiceEndDate | End date of the service period for the invoice item. The invoice item is associated with this debit memo item.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/01/2029 |  |  |
| DebitMemoItem.ReferredInvoiceItemQuantity | Quantity of the invoice item in the configured unit of measure for the charge. The invoice item is associated with this debit memo item.Example: 3 |  |  |
| DebitMemoItem.ReferredInvoiceItemChargedate | The date and time when the invoice item is created. The invoice item is associated with this debit memo item.Example: 2019-05-28T18:34:49.643+08:00 |  |  |
| DebitMemoItem.ReferredInvoiceItemUnitOfMeasure | The unit of measure for the invoice item. The invoice item is associated with this debit memo item.Example: Each |  |  |
| DebitMemoItem.ReferredInvoiceItemUnitOfMeasureDisplayedAs | The display name of the unit of measure for the invoice item. The invoice item is associated with this debit memo item.Example: Each |  |  |
| DebitMemoItem.ReferredInvoiceItemExtended | Total item charge including taxes for the invoice item. The invoice item is associated with this debit memo item.Example: $162 |  |  |
| DebitMemoItem.ReferredInvoiceItemUnitPrice | The unit price of the charge associated with the invoice item. The invoice item is associated with this debit memo item.Example: $10 |  |  |
| DebitMemoItem.ReferredInvoiceItemTaxAmount | The tax amount of the invoice item associated with this debit memo item.Example: $110 |  |  |
| DebitMemoItem.ReferredInvoiceItemAmountWithoutTax | The tax amount of the invoice item without tax. The invoice item is associated with this debit memo item.Example: $100 |  |  |
| DebitMemoItem.ReferredInvoiceItemServicePeriod | The service period of the invoice item associated with this debit memo item.Example: 01/01/2019-01/31/2029 |  |  |
| DebitMemoItem.ReferredInvoiceItemProductName | The product name associated with the invoice item. The invoice item is associated with this debit memo item.Example: Best Product Ever | The product name associated with the invoice item. The invoice item is associated with this debit memo item. | empty |
| DebitMemoItem.ReferredInvoiceItemProductDescription | The product description associated with the invoice item. The invoice item is associated with this debit memo item.Example: Gold Edition includes all features from the Silver Edition | The product description associated with the invoice item. The invoice item is associated with this debit memo item. | empty |
| DebitMemoItem.UnitPrice | The unit price of the charge associated with the debit memo item.Example: $10 |  |  |
