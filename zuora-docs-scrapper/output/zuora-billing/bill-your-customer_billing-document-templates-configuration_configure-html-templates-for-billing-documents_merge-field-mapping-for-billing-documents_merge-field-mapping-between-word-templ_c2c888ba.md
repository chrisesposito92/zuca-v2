---
title: "Tax item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/tax-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:18.898Z"
---

# Tax item fields

This document provides a mapping of Tax Item fields between Word and HTML invoice templates, and guides on configuring taxation details tables in HTML templates.

To build a taxation details table in the HTML template editor, follow the procedure described in How to configure taxation details tables in HTML invoice templates.

The following table lists the mapping for Tax Item fields in Word invoice templates and HTML invoice templates.

| Merge field in Word template | Equivalent in HTML template |
| --- | --- |
| TaxItem.AmountWithoutTax | TaxationItem.InvoiceItem.ChargeAmount |
| TaxItem.ChargeDescription | TaxationItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.Description |
| TaxItem.ChargeName | TaxationItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.Name |
| TaxItem.ChargePeriod | TaxationItem.InvoiceItem.RatePlanCharge.ProductRatePlanCharge.BillingPeriod |
| TaxItem.ProductDescription | TaxationItem.InvoiceItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Description |
| TaxItem.ProductName | TaxationItem.InvoiceItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Name |
| TaxItem.ProductSKU | TaxationItem.InvoiceItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Product.SKU |
| TaxItem.RatePlanDescription | TaxationItem.InvoiceItem.RatePlanCharge.RatePlan.ProductRatePlan.Description |
| TaxItem.RatePlanName | TaxationItem.InvoiceItem.RatePlanCharge.RatePlan.ProductRatePlan.Name |
| TaxItem.SubscriptionNotes | TaxationItem.Subscription.Notes |
| TaxItem.SubscriptionNumber | TaxationItem.Subscription.Name |
| TaxItem.TaxAccountingCode | TaxationItem.TaxAccountingCode |
| TaxItem.TaxAmount | TaxationItem.TaxAmount |
| TaxItem.TaxCode | TaxationItem.TaxCode |
| TaxItem.TaxItemDate | TaxationItem.ChargeDate |
| TaxItem.TaxJurisdiction | TaxationItem.Jurisdiction |
| TaxItem.TaxLocationCode | TaxationItem.LocationCode |
| TaxItem.TaxName | TaxationItem.Name |
| TaxItem.TaxRate | TaxationItem.TaxRate |
| TaxItem.TaxRateDescription | TaxationItem.TaxRateDescription |
| TaxItem.TaxRateType | TaxationItem.TaxRateType |
