---
title: "Tax item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-debit-memos/tax-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:45.339Z"
---

# Tax item fields

This article provides a mapping of Tax Item fields between Word templates and HTML templates for debit memos, along with instructions for configuring taxation details tables.

To build a taxation details table in the HTML template editor, follow the procedure described in How to configure taxation details tables in HTML templates .

The following table lists the mapping for Tax Item fields in Word templates and HTML templates for debit memos.

| Merge field in Word template | Equivalent in HTML template |
| --- | --- |
| TaxItem.AmountWithoutTax | DebitTaxationItem.DebitMemoItem.AmountWithoutTax |
| TaxItem.ChargeDescription | DebitTaxationItem.DebitMemoItem.RatePlanCharge.ProductRatePlanCharge.Description |
| TaxItem.ChargeName | DebitTaxationItem.DebitMemoItem.RatePlanCharge.ProductRatePlanCharge.Name |
| TaxItem.ChargePeriod | DebitTaxationItem.DebitMemoItem.RatePlanCharge.ProductRatePlanCharge.BillingPeriod |
| TaxItem.ProductDescription | DebitTaxationItem.DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Description |
| TaxItem.ProductName | DebitTaxationItem.DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Name |
| TaxItem.ProductSKU | DebitTaxationItem.DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Product.Product.SKU |
| TaxItem.RatePlanDescription | DebitTaxationItem.DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Description |
| TaxItem.RatePlanName | DebitTaxationItem.DebitMemoItem.RatePlanCharge.RatePlan.ProductRatePlan.Name |
| TaxItem.SubscriptionNotes | DebitTaxationItem.DebitMemoItem.Subscription.Notes |
| TaxItem.SubscriptionNumber | DebitTaxationItem.DebitMemoItem.Subscription.Name |
| TaxItem.TaxAccountingCode | DebitTaxationItem.AccountingCode |
| TaxItem.TaxAmount | DebitTaxationItem.TaxAmount |
| TaxItem.TaxCode | DebitTaxationItem.TaxCode |
| TaxItem.TaxItemDate | DebitTaxationItem.TaxDate |
| TaxItem.TaxJurisdiction | DebitTaxationItem.Jurisdiction |
| TaxItem.TaxLocationCode | DebitTaxationItem.LocationCode |
| TaxItem.TaxName | DebitTaxationItem.Name |
| TaxItem.TaxRate | DebitTaxationItem.TaxRate |
| TaxItem.TaxRateDescription | DebitTaxationItem.TaxRateDescription |
| TaxItem.TaxRateType | DebitTaxationItem.TaxRateType |
