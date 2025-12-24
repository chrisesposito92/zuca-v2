---
title: "Credit memo item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-credit-memos/credit-memo-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:24.019Z"
---

# Credit memo item fields

This article provides guidance on building and customizing credit memo items in HTML templates, and details the mapping of fields between Word and HTML templates for credit memos.

To build a credit memo items table in the HTML template editor, you can drag the Credit Memo Details component into an HTML template, and then customize the predefined table according to your business demands. Additionally, you can also use the Configure data tables in HTML templates with more flexibility.

The following table lists the mapping for Credit Memo Item fields in Word templates and HTML templates for credit memos.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| CreditMemoItem.AppliedAmount | CreditMemoItem.AppliedToOthersAmount |
| CreditMemoItem.RefundedAmount | CreditMemoItem.BeAppliedByOthersAmount |
| CreditMemoItem.UnappliedAmount | CreditMemoItem.UnappliedAmount |
| CreditMemoItem.Sku | CreditMemoItem.Sku |
| CreditMemoItem.Name | CreditMemoItem.ChargeName |
| CreditMemoItem.ServicePeriod | {{CreditMemoItem.ServiceStartDate\|Localise}} - {{CreditMemoItem.ServiceEndDate\|Localise}} |
| CreditMemoItem.ServiceStartDate | {{CreditMemoItem.ServiceStartDate\|Localise}} |
| CreditMemoItem.ServiceEndDate | {{CreditMemoItem.ServiceEndDate\|Localise}} |
| CreditMemoItem.Quantity | CreditMemoItem.Quantity |
| CreditMemoItem.ExtendedPrice | {{#Wp_Eval}}{{AmountWithoutTax}}+{{TaxAmount}}\|Round(2)\|Localise{{/Wp_Eval}} |
| CreditMemoItem.UnitOfMeasure | CreditMemoItem.UnitOfMeasure |
| CreditMemoItem.UnitOfMeasureDisplayedAs | Currently unavailable |
| CreditMemoItem.SubscriptionNumber | CreditMemoItem.Subscription.Name |
| CreditMemoItem.ChargeNumber | CreditMemoItem.RatePlanCharge.ChargeNumber |
| CreditMemoItem.ChargeType | CreditMemoItem.RatePlanCharge.ChargeType |
| CreditMemoItem.ChargeModel | CreditMemoItem.RatePlanCharge.ChargeModel |
| CreditMemoItem.ChargePeriod | CreditMemoItem.RatePlanCharge.BillingPeriod |
| CreditMemoItem.ChargeAccountingCode | CreditMemoItem.RatePlanCharge.AccountingCode |
| CreditMemoItem.CustomField | CreditMemoItem.CustomField |
| CreditMemoItem.AccountName | CreditMemo.Account.Name |
| CreditMemoItem.AccountNumber | CreditMemo.Account.AccountNumber |
| CreditMemoItem.TaxAmount | {{CreditMemoItem.TaxAmount\|Round(2)\|Localise}} |
| CreditMemoItem.AmountWithoutTax | {{CreditMemoItem.AmountWithoutTax\|Round(2)\|Localise}} |
| CreditMemoItem.SubscriptionNotes | CreditMemoItem.Subscription.Notes |
| CreditMemoItem.ProductName | CreditMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Name |
| CreditMemoItem.ProductDescription | CreditMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Description |
| CreditMemoItem.ProductRatePlanCharge.CustomField | CreditMemoItem.RatePlanCharge.ProductRatePlanCharge.customFields |
| CreditMemoItem.RatePlanName | CreditMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Name |
| CreditMemoItem.RatePlanDescription | CreditMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Description |
| CreditMemoItem.RatePlanCharge.CustomField | CreditMemoItem.RatePlanCharge.customFields |
| CreditMemoItem.Description | CreditMemoItem.Description |
| CreditMemoItem.ReferredInvoiceItemSku | CreditMemoItem.InvoiceItem.SKUNote:The referred invoice item is only available when a credit memo is created from an invoice. |
| CreditMemoItem.ReferredInvoiceItemName | CreditMemoItem.InvoiceItem.ChargeName |
| CreditMemoItem.ReferredInvoiceItemDescription | CreditMemoItem.InvoiceItem.Description |
| CreditMemoItem.ReferredInvoiceItemServiceStartDate | CreditMemoItem.InvoiceItem.ServiceStartDate |
| CreditMemoItem.ReferredInvoiceItemServiceEndDate | CreditMemoItem.InvoiceItem.ServiceEndDate |
| CreditMemoItem.ReferredInvoiceItemQuantity | CreditMemoItem.InvoiceItem.Quantity |
| CreditMemoItem.ReferredInvoiceItemChargedate | CreditMemoItem.InvoiceItem.CreatedDate |
| CreditMemoItem.ReferredInvoiceItemUnitOfMeasure | CreditMemoItem.InvoiceItem.UOM |
| CreditMemoItem.ReferredInvoiceItemUnitOfMeasureDisplayedAs | Currently unavailable |
| CreditMemoItem.ReferredInvoiceItemExtended | {{#Wp_Eval}}{{ChargeAmount}} + {{TaxAmount}}{{/Wp_Eval}} |
| CreditMemoItem.ReferredInvoiceItemUnitPrice | CreditMemoItem.InvoiceItem.UnitPrice |
| CreditMemoItem.ReferredInvoiceItemTaxAmount | CreditMemoItem.InvoiceItem.TaxAmount |
| CreditMemoItem.ReferredInvoiceItemAmountWithoutTax | CreditMemoItem.InvoiceItem.ChargeAmount |
| CreditMemoItem.ReferredInvoiceItemServicePeriod | {{CreditMemoItem.InvoiceItem.ServiceStartDate\|Localise}} - {{CreditMemoItem.InvoiceItem.ServiceEndDate\|Localise}} |
| CreditMemoItem.ReferredInvoiceItemProductName | CreditMemoItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Name |
| CreditMemoItem.ReferredInvoiceItemProductDescription | CreditMemoItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Description |
| CreditMemoItem.UnitPrice | CreditMemoItem.UnitPrice |
