---
title: "Credit Memo Item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-credit-memos/credit-memo-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:54.009Z"
---

# Credit Memo Item fields

Learn about the Credit Memo Item fields

Zuora supports multi-level nested tables within the credit memo items table.

If you enable Unified Invoicing , the values of some Debit Memo Item fields depend on the source of the corresponding debit memo item.

You can customize your credit memo templates to display credit memo items in nested tables. In nested tables, you can group and subtotal complex credit memo items by any custom fields from the associated product rate plan charge or rate plan charge. You can customize your credit memo templates to display credit memo items in nested tables. In nested tables, you can group and subtotal complex credit memo items by any custom fields from the associated product rate plan charge or rate plan charge.

| Merge Field | Memo items from subscription invoice items | Memo items from invoice items with ProductRatePlanCharge | Memo items from standalone invoice items |
| --- | --- | --- | --- |
| CreditMemoItem.AppliedAmount | The amount of this credit memo item that is applied to invoices and debit memos.Example: $43 |  |  |
| CreditMemoItem.RefundedAmount | The amount of this credit memo item that is refunded to your customer. Example: $69 |  |  |
| CreditMemoItem.UnappliedAmount | The amount of this credit memo item that is not applied to.Example: $304.50 |  |  |
| CreditMemoItem.Sku | Unique SKU for the product associated with this credit memo item.Example: SKU-00000006 |  |  |
| CreditMemoItem.Name | Name of this credit memo item.Example: Best Product Ever - Gold Edition: Activation Fee |  |  |
| CreditMemoItem.ServicePeriod | The service period of this credit memo item.When the TableSort:CreditMemoItem.ServicePeriod field is used for sorting, data is sorted by alphabet.Example: 01/01/2019-01/31/2029 |  |  |
| CreditMemoItem.ServiceStartDate | Start date of the service period for this credit memo item. If the charge is a one-time fee, this is the date of that charge.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/01/2019 |  |  |
| CreditMemoItem.ServiceEndDate | End date of the service period for this credit memo item, such as the last day of the service period.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example: 01/31/2029 | Might be empty | Might be empty |
| CreditMemoItem.Quantity | Quantity of this credit memo item in the configured unit of measure for the charge.Example: 2 |  |  |
| CreditMemoItem.ExtendedPrice | Total item charge including taxes.Example: $162 |  |  |
| CreditMemoItem.UnitOfMeasure | The unit of measure for this credit memo item.Example: Each |  |  |
| CreditMemoItem.UnitOfMeasureDisplayedAs | The display name of the unit of measure.Example: Each |  |  |
| CreditMemoItem.SubscriptionNumber | The subscription number associated with this credit memo item.Example: A-S00000026 | empty | empty |
| CreditMemoItem.ChargeNumber | The charge number associated with this credit memo item.Example: C-00000033 | empty | empty |
| CreditMemoItem.ChargeType | The type of the charge associated with this credit memo item.Example: One-Time | The charge type of the product rate plan charge associated with this debit memo item. | empty |
| CreditMemoItem.ChargeModel | The charge model associated with this credit memo item.Example : Per Unit Pricing | The charge model of the product rate plan charge associated with this debit memo item. | empty |
| CreditMemoItem.ChargePeriod | The charge period associated with this credit memo item.Example : Month | empty | empty |
| CreditMemoItem.ChargeAccountingCode | The accounting code of the charge associated with this credit memo item.Example : A81291-OneTimeFees |  |  |
| DebitMemoItem.CustomField | The customer field of this credit memo item. |  |  |
| CreditMemoItem.AccountName | The name of the invoice owner account associated with the credit memo item.Example : Super Subscription Emporium |  |  |
| CreditMemoItem.AccountNumber | The account number of the invoice owner account associated with the credit memo item.Example : A00000019 |  |  |
| CreditMemoItem.TaxAmount | The tax amount of this credit memo item.Example : $60 |  |  |
| CreditMemoItem.AmountWithoutTax | The total amount of this credit memo item without tax.Example : $60 |  |  |
| CreditMemoItem.SubscriptionNotes | The notes of the subscription associated with this credit memo item.Example : Notes about the Subscription |  |  |
| CreditMemoItem.ProductName | The name of the product associated with this credit memo item.Example : Best Product Ever | The name of the product associated with this credit memo item. | empty |
| CreditMemoItem.ProductDescription | The description of the product associated with this credit memo item.Example : Includes so many features | The description of the product associated with this credit memo item. | empty |
| CreditMemoItem.ProductRatePlanCharge.CustomField | The custom field of the product rate plan charge associated with this credit memo item.Example : Comments about the product rate plan charge | The custom field of the product rate plan charge associated with this credit memo item. | empty |
| CreditMemoItem.RatePlanName | The rate plan name of the charge associated with this credit memo item.Example : Best Product Ever - Gold Edition | The name of the product rate plan associated with this credit memo item. | empty |
| CreditMemoItem.RatePlanDescription | The rate plan description of the charge associated with this credit memo item.Example : Gold Edition includes all features from the Silver Edition | The description of the product rate plan associated with this credit memo item. | empty |
| CreditMemoItem.RatePlanCharge.CustomField | The custom field of the rate plan charge associated with this credit memo item.Example : Comments about the rate plan charge | empty | empty |
| CreditMemoItem.Description | The description of this credit memo item.Example : One Time Fee |  |  |
| CreditMemoItem.ReferredInvoiceItemSku | Unique SKU for the product associated with the invoice item. The invoice item associated with this credit memo item.Example : SKU-00000006 |  |  |
| CreditMemoItem.ReferredInvoiceItemName | The name of the invoice item associated with this credit memo item.Example : Best Product Ever - Gold Edition: Activation Fee |  |  |
| CreditMemoItem.ReferredInvoiceItemDescription | The description of the charge associated with the invoice item. The invoice item associated with this credit memo item.Example : One Time Fee |  |  |
| CreditMemoItem.ReferredInvoiceItemServiceStartDate | Start date of the service period for the invoice item. The invoice item associated with this credit memo item.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example : 01/01/2019 |  |  |
| CreditMemoItem.ReferredInvoiceItemServiceEndDate | End date of the service period for the invoice item. The invoice item associated with this credit memo item.This merge field is formatted based on the locale in the customer's communication profile. You can change it in the memo template.Example : 01/01/2029 |  |  |
| CreditMemoItem.ReferredInvoiceItemQuantity | Quantity of the invoice item in the configured unit of measure for the charge. The invoice item associated with this credit memo item.Example : 3 |  |  |
| CreditMemoItem.ReferredInvoiceItemChargedate | The date and time when the invoice item is created. The invoice item associated with this credit memo item.Example : 2019-05-28T18:34:49.643+08:00 |  |  |
| CreditMemoItem.ReferredInvoiceItemUnitOfMeasure | The unit of measure for the invoice item. The invoice item associated with this credit memo item.Example : Each |  |  |
| CreditMemoItem.ReferredInvoiceItemUnitOfMeasureDisplayedAs | The display name of the unit of measure for the invoice item. The invoice item associated with this credit memo item.Example: Each |  |  |
| CreditMemoItem.ReferredInvoiceItemExtended | Total item charge including taxes for the invoice item. The invoice item associated with this credit memo item.Example: $162 |  |  |
| CreditMemoItem.ReferredInvoiceItemUnitPrice | The unit price of the charge associated with the invoice item. The invoice item associated with this credit memo item.Example: $10 |  |  |
| CreditMemoItem.ReferredInvoiceItemTaxAmount | The tax amount of the invoice item associated with this credit memo item.Example: $110 |  |  |
| CreditMemoItem.ReferredInvoiceItemAmountWithoutTax | The tax amount of the invoice item without tax. The invoice item associated with this credit memo item.Example: $100 |  |  |
| CreditMemoItem.ReferredInvoiceItemServicePeriod | The service period of the invoice item associated with this credit memo item.Example: 01/01/2019-01/31/2029 |  |  |
| CreditMemoItem.ReferredInvoiceItemProductName | Product name associated with the invoice item. The invoice item associated with this credit memo item.Example: Best Product Ever | The product name associated with the invoice item. The invoice item is associated with this credit memo item. | empty |
| CreditMemoItem.ReferredInvoiceItemProductDescription | Product description associated with the invoice item. The invoice item associated with this credit memo item.Example: Gold Edition includes all features from the Silver Edition | The product description associated with the invoice item. The invoice item is associated with this credit memo item. | empty |
| CreditMemoItem.UnitPrice | The unit price of the charge associated with the credit memo item.Example: $10 |  |  |
