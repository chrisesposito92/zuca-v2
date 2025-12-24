---
title: "Invoice Item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/invoice-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:03.548Z"
---

# Invoice Item fields

This document provides guidance on building and customizing invoice items tables in HTML templates, and lists the mapping of Invoice Item fields between Word and HTML invoice templates.

To build an invoice items table in HTML template editor, you can drag the Charge Details component into an HTML template, and then customize the predefined table according to your business demands. Additionally, you can also use the Configure data tables in HTML templates with more flexibility.

The following table lists the mapping for Invoice Item fields in Word invoice templates and HTML invoice templates.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| InvoiceItem.AccountName | InvoiceItem.Subscription.Account.Name |
| InvoiceItem.AccountNumber | InvoiceItem.Subscription.Account.AccountNumber |
| InvoiceItem.ActualQuantity | Currently unavailable |
| InvoiceItem.AmountWithoutTax | InvoiceItem.ChargeAmount |
| InvoiceItem.ChargeAccountingCode | InvoiceItem.AccountingCode |
| InvoiceItem.ChargeDate | InvoiceItem.ChargeDate |
| InvoiceItem.ChargeModel | InvoiceItem.RatePlanCharge.ChargeModel |
| InvoiceItem.ChargeNumber | InvoiceItem.RatePlanCharge.ChargeNumber |
| InvoiceItem.ChargePeriod | InvoiceItem.RatePlanCharge.BillingPeriod |
| InvoiceItem.ChargeType | InvoiceItem.RatePlanCharge.ChargeType |
| InvoiceItem.Description | InvoiceItem.Description |
| InvoiceItem.DiscountAmount | {{#InvoiceItems\|FilterByValue(ProcessingType,NE,1)}} {{Cmd_Assign(RegularItemId,Id)}} {{InvoiceItems\|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)\|Sum(ChargeAmount)}} {{/InvoiceItems\|FilterByValue(ProcessingType,NE,1)}} |
| InvoiceItem.DiscountTaxAmount | {{#InvoiceItems\|FilterByValue(ProcessingType,NE,1)}} {{Cmd_Assign(RegularItemId,Id)}} {{InvoiceItems\|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)\|Sum(TaxAmount)}} {{/InvoiceItems\|FilterByValue(ProcessingType,NE,1)}} |
| InvoiceItem.ExtendedPrice | {{#Wp_Eval}}{{ChargeAmount}} + {{TaxAmount}}{{/Wp_Eval}} |
| InvoiceItem.IsNew | Currently unavailable |
| InvoiceItem.ListPrice | Currently unavailable |
| InvoiceItem.ListPriceBase | InvoiceItem.RatePlanCharge.ListPriceBase |
| InvoiceItem.Name | InvoiceItem.ChargeName |
| InvoiceItem.ProductDescription | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Description |
| InvoiceItem.ProductName | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Name |
| InvoiceItem.ProductRatePlanCharge.CustomField | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.CustomField |
| InvoiceItem.Quantity | InvoiceItem.Quantity |
| InvoiceItem.RatePlanCharge.CustomField | InvoiceItem.RatePlanCharge.CustomField |
| InvoiceItem.RatePlanDescription | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Description |
| InvoiceItem.RatePlanName | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Name |
| InvoiceItem.RevenueRecognitionCode | InvoiceItem.RecognizedRevenueAccountingCode.Name |
| InvoiceItem.ServicePeriod | {{ServiceStartDate\|Localise}} - {{ServiceEndDate\|Localise}} |
| InvoiceItem.ServiceStartDate | InvoiceItem.ServiceStartDate |
| InvoiceItem.ServiceEndDate | InvoiceItem.ServiceEndDate |
| InvoiceItem.Sku | InvoiceItem.SKU |
| InvoiceItem.SubscriptionNotes | InvoiceItem.Subscription.Notes |
| InvoiceItem.SubscriptionNumber | InvoiceItem.Subscription.Name |
| InvoiceItem.TaxAmount | InvoiceItem.TaxAmount |
| InvoiceItem.UnitOfMeasure | InvoiceItem.UOM |
| InvoiceItem.UnitOfMeasureDisplayedAs | Currently unavailable |
| InvoiceItem.UnitPrice | InvoiceItem.UnitPrice |
| InvoiceItem.TaxCode | InvoiceItem.TaxCode |
| InvoiceItem.CustomField | InvoiceItem.CustomField |
| InvoiceItem.PurchaseOrderNumber | InvoiceItem.PurchaseOrderNumber |
| InvoiceItem.ItemType | InvoiceItem.ItemType |
