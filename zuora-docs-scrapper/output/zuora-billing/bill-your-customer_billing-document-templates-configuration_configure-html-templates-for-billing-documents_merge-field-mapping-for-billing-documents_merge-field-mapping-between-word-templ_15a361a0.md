---
title: "Usage Lines (Items) fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/usage-lines-items-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:12.865Z"
---

# Usage Lines (Items) fields

This document provides a mapping of Usage Lines (Items) fields between Word invoice templates and HTML invoice templates.

The following table lists the mapping for Usage Lines (Items) fields in Word invoice templates and HTML invoice templates.

| Merge field in Word template | Equivalent in HTML template |
| --- | --- |
| Usage.ChargeAccountingCode | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge |
| Usage.ChargeDescription | InvoiceItem.ProcessedUsage.Usage.RatePlanCharge.Description |
| Usage.ChargeName | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.Name |
| Usage.ChargeNumber | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ChargeNumber |
| Usage.Date | InvoiceItem.ProcessedUsages.Usage.StartDateTime |
| Usage.ProductChargeDescription | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ProductRatePlanCharge.Description |
| Usage.ProductDescription | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Description |
| Usage.ProductName | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Name |
| Usage.ProductSKU | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.SKU |
| Usage.Quantity | InvoiceItem.ProcessedUsages.Usage.Quantity |
| Usage.RatePlanDescription | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Description |
| Usage.RatePlanName | InvoiceItem.ProcessedUsages.Usage.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Name |
| Usage.RatingAmount | InvoiceItem.ProcessedUsages.Amount |
| Usage.RevenueRecognitionCode | InvoiceItem.ProcessedUsages.InvoiceItem.RecognizedRevenueAccountingCode.Name |
| Usage.SubscriptionNotes | InvoiceItem.ProcessedUsages.Usage.Subscription.Notes |
| Usage.SubscriptionNumber | InvoiceItem.ProcessedUsages.Usage.Subscription.Name |
| Usage.UOM | InvoiceItem.ProcessedUsages.Usage.UOM |
| Usage.UOMDisplayedAs | Currently unavailable |
| Usage.AccountNumber | InvoiceItem.ProcessedUsages.Usage.AccountNumber |
