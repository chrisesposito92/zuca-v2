---
title: "Debit memo item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-debit-memos/debit-memo-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:42.199Z"
---

# Debit memo item fields

This article provides guidance on building and customizing a debit memo items table in HTML templates, and includes a mapping of Debit Memo Item fields between Word and HTML templates.

To build a debit memo items table in the HTML template editor, you can drag the Debit Memo Details component into an HTML template, and then customize the predefined table according to your business demands. Additionally, you can also use the Configure data tables in HTML templates with more flexibility.

The following table lists the mapping for Debit Memo Item fields in Word templates and HTML templates for debit memos.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| DebitMemoItem.PaidAmount | DebitMemoItem.BeAppliedByOthersAmount |
| DebitMemoItem.TaxAmount | DebitMemo.TaxAmount |
| DebitMemoItem.AmountWithoutTax | DebitMemoItem.AmountWithoutTax |
| DebitMemoItem.Sku | DebitMemoItem.Sku |
| DebitMemoItem.Name | DebitMemoItem.ChargeName |
| DebitMemoItem.ServicePeriod | {{DebitMemoItem.ServiceStartDate\|Localise}} - {{DebitMemoItem.ServiceEndDate\|Localise}} |
| DebitMemoItem.ServiceStartDate | {{DebitMemoItem.ServiceStartDate\|Localise}} |
| DebitMemoItem.ServiceEndDate | {{DebitMemoItem.ServiceEndDate\|Localise}} |
| DebitMemoItem.Quantity | DebitMemoItem.Quantity |
| DebitMemoItem.ExtendedPrice | {{#Wp_Eval}}{{AmountWithoutTax}}+{{TaxAmount}}\|Round(2)\|Localise{{/Wp_Eval}} |
| DebitMemoItem.UnitOfMeasure | DebitMemoItem.UnitOfMeasure |
| DebitMemoItem.UnitOfMeasureDisplayedAs | Currently unavailable |
| DebitMemoItem.SubscriptionNumber | DebitMemoItem.Subscription.Name |
| DebitMemoItem.ChargeNumber | DebitMemoItem.RatePlanCharge.ChargeNumber |
| DebitMemoItem.ChargeType | DebitMemoItem.RatePlanCharge.ChargeType |
| DebitMemoItem.ChargeModel | DebitMemoItem.RatePlanCharge.ChargeModel |
| DebitMemoItem.ChargePeriod | DebitMemoItem.RatePlanCharge.BillingPeriod |
| DebitMemoItem.ChargeAccountingCode | DebitMemoItem.RatePlanCharge.AccountingCode |
| DebitMemoItem.CustomField | DebitMemoItem.CustomField |
| DebitMemoItem.AccountName | DebitMemo.Account.Name |
| DebitMemoItem.AccountNumber | DebitMemo.Account.AccountNumber |
| DebitMemoItem.TaxAmount | {{DebitMemoItem.TaxAmount\|Round(2)\|Localise}} |
| DebitMemoItem.AmountWithoutTax | {{DebitMemoItem.AmountWithoutTax\|Round(2)\|Localise}} |
| DebitMemoItem.SubscriptionNotes | DebitMemoItem.Subscription.Notes |
| DebitMemoItem.ProductName | DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Name |
| DebitMemoItem.ProductDescription | RatePlanCharge.RatePlanCharge.RatePlan.ProductRatePlan.Product.Description |
| DebitMemoItem.ProductRatePlanCharge.CustomField | DebitMemoItem.RatePlanCharge.ProductRatePlanCharge.customFields |
| DebitMemoItem.RatePlanName | DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Name |
| DebitMemoItem.RatePlanDescription | DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Description |
| DebitMemoItem.RatePlanCharge.CustomField | DebitMemoItem.RatePlanCharge.customFields |
| DebitMemoItem.Description | DebitMemoItem.Description |
| DebitMemoItem.ReferredInvoiceItemSku | DebitMemoItem.InvoiceItem.SKUNote:The referred invoice item is only available when a debit memo is created from an invoice. |
| DebitMemoItem.ReferredInvoiceItemName | DebitMemoItem.InvoiceItem.ChargeName |
| DebitMemoItem.ReferredInvoiceItemDescription | DebitMemoItem.InvoiceItem.Description |
| DebitMemoItem.ReferredInvoiceItemServiceStartDate | DebitMemoItem.InvoiceItem.ServiceStartDate |
| DebitMemoItem.ReferredInvoiceItemServiceEndDate | DebitMemoItem.InvoiceItem.ServiceEndDate |
| DebitMemoItem.ReferredInvoiceItemQuantity | DebitMemoItem.InvoiceItem.Quantity |
| DebitMemoItem.ReferredInvoiceItemChargedate | DebitMemoItem.InvoiceItem.CreatedDate |
| DebitMemoItem.ReferredInvoiceItemUnitOfMeasure | DebitMemoItem.InvoiceItem.UOM |
| DebitMemoItem.ReferredInvoiceItemUnitOfMeasureDisplayedAs | Currently unavailable |
| DebitMemoItem.ReferredInvoiceItemExtended | {{#Wp_Eval}}{{DebitMemoItem.InvoiceItem.ChargeAmount}} + {{DebitMemoItem.InvoiceItem.TaxAmount}}\|Round(2)\|Localise{{/Wp_Eval}} |
| DebitMemoItem.ReferredInvoiceItemUnitPrice | DebitMemoItem.InvoiceItem.UnitPrice |
| DebitMemoItem.ReferredInvoiceItemTaxAmount | DebitMemoItem.InvoiceItem.TaxAmount |
| DebitMemoItem.ReferredInvoiceItemAmountWithoutTax | DebitMemoItem.InvoiceItem.ChargeAmount |
| DebitMemoItem.ReferredInvoiceItemServicePeriod | {{DebitMemoItem.InvoiceItem.ServiceStartDate\|Localise}} - {{DebitMemoItem.InvoiceItem.ServiceEndDate\|Localise}} |
| DebitMemoItem.ReferredInvoiceItemProductName | DebitMemoItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Name |
| DebitMemoItem.ReferredInvoiceItemProductDescription | DebitMemoItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Description |
| DebitMemoItem.UnitPrice | DebitMemoItem.UnitPrice |
