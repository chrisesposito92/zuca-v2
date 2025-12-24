---
title: "Merge Fields Supported in IF Fields on invoice tempaltes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-supported-in-if-fields-on-invoice-tempaltes"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:19.254Z"
---

# Merge Fields Supported in IF Fields on invoice tempaltes

Explore the supported merge fields for use in IF fields on invoice templates, detailing the types of information that can be conditionally displayed.

The table below lists the supported merge fields. The Can be Used to Conditionally Display... column specifies the type of information that an IF field can hide or display when the corresponding merge field is used in its test condition.

See Conditional Logic (IF Fields) for information about IF fields, examples of their usage, and the types of information they can display.

Note: Merge fields not listed in the table below may still work in IF fields, but Zuora does not officially support them.

| Merge Field | Can be Used to Conditionally Display... |
| --- | --- |
| Account.Autopay | Text, merge fields, tables |
| Account.NewBalance | Text, merge fields, tables |
| Account.Currency | Text, merge fields, tables |
| Account.DefaultPaymentMethod | Text, merge fields, tables |
| BillToContact.Address1 | Text, merge fields, tables |
| BillToContact.Address2 | Text, merge fields, tables |
| BillToContact.Country | Text, merge fields, tables |
| BillToContact.PostalCode | Text, merge fields, tables |
| BillToContact.State | Text, merge fields, tables |
| SoldToContact.Address1 | Text, merge fields, tables |
| SoldToContact.Address2 | Text, merge fields, tables |
| SoldToContact.Country | Text, merge fields, tables |
| SoldToContact.PostalCode | Text, merge fields, tables |
| SoldToContact.State | Text, merge fields, tables |
| Invoice.AmountWithoutTax | Text, merge fields, tables |
| Invoice.Balance | Text, merge fields, tables |
| Invoice.CreditBalanceAdjustmentAmount | Text, merge fields, tables |
| Invoice.Discount | Text, merge fields, tables |
| Invoice.DueDate | Text, merge fields, tables |
| Invoice.InvoiceDate | Text, merge fields, tables |
| Invoice.PaymentAmount | Text, merge fields, tables |
| Invoice.Tax | Text, merge fields, tables |
| Invoice.Total | Text, merge fields, tables |
| Invoice.RefundAmount | Text, merge fields, tables |
| Invoice.TotalUsageChargeAmount | Text, merge fields, tables |
| InvoiceItem.AmountWithoutTax | Text, merge fields |
| InvoiceItem.ChargeDate | Text, merge fields |
| InvoiceItem.ChargeType | Text, merge fields |
| InvoiceItem.ExtendedPrice | Text, merge fields |
| InvoiceItem.Quantity | Text, merge fields |
| InvoiceItem.Name | Text, merge fields |
| InvoiceItem.ProductName | Text, merge fields |
| InvoiceItem.RatePlanName | Text, merge fields |
| InvoiceItem.ServicePeriod | Text, merge fields |
| InvoiceItem.TaxAmount | Text, merge fields |
| InvoiceItem.UnitOfMeasureDisplayedAs | Text, merge fields |
| Subscription.Autorenew | Text, merge fields |
| Subscription.AmountWithoutTax | Text, merge fields |
| Subscription.ExtendedPrice | Text, merge fields |
| Subscription.Product.Name | Text, merge fields |
| Subscription.RatePlan.Name | Text, merge fields |
| Subscription.TaxAmount | Text, merge fields |
| UsageSummary.AmountWithoutTax | Text, merge fields |
| UsageSummary.ChargeName | Text, merge fields |
| UsageSummary.ExtendedPrice | Text, merge fields |
| UsageSummary.ProductName | Text, merge fields |
| UsageSummary.RatePlanName | Text, merge fields |
| UsageSummary.TaxAmount | Text, merge fields |
| UsageSummary.UOMDisplayedAs | Text, merge fields |
| UsageSummary.UsagePeriod | Text, merge fields |
| Usage.ChargeName | Text, merge fields |
| Usage.ChargeNumber | Text, merge fields |
| TaxSummary.TaxName | Text, merge fields |
| TaxSummary.TaxRate | Text, merge fields |
| TaxSummary.TaxRateType | Text, merge fields |
| TaxItem.ChargeName | Text, merge fields |
| TaxItem.TaxCode | Text, merge fields |
| TaxItem.TaxRate | Text, merge fields |
| TaxItem.TaxRateType | Text, merge fields |
| Transaction.TransactionType | Text, merge fields |
| AdjustmentTable.Size | Text, merge fields, tables |
| InvoiceItemTable.Size | Text, merge fields, tables |
| PaymentTable.Size | Text, merge fields, tables |
| SubscriptionTable.Size | Text, merge fields, tables |
| TaxItemTable.Size | Text, merge fields, tables |
| TaxSummaryTable.Size | Text, merge fields, tables |
| TransactionTable.Size | Text, merge fields, tables |
| UsageSummaryTable.Size | Text, merge fields, tables |
| UsageTable.Size | Text, merge fields, tables |
