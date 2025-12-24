---
title: "Supported fields the invoice template"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/custom-fields-display-on-the-invoice/supported-fields-the-invoice-template"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:18.107Z"
---

# Supported fields the invoice template

Explore the support for custom fields in Region fields within invoice templates, highlighting limitations with TableSort functionality.

The following table lists which Region fields support custom fields in the invoice template.

Note: [Group and subtotal in nested tables](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables) is the only way you can sort by custom fields. For other cases, custom fields are not supported when using `TableSort`.

| Invoice PDF tables (Region fields) | Custom fields in UI | Sample tag |
| --- | --- | --- |
| Account | Account | <<Account.ReasonCode__c>> |
| BillToContact | Contact | <<BillToContact.ReasonCode__c>> |
| SoldToContact | Contact | <<SoldToContact.ReasonCode__c>> |
| Invoice | Invoice | <<Invoice.ReasonCode__c>> |
| InvoiceItem | InvoiceDetail | <<InvoiceItem.ReasonCode__c>> |
| Subscription | Subscription | <<Subscription.ReasonCode__c>> |
| UsageSummary | Not Supported | N/A |
| Usage | Usages | <<Usage.ReasonCode__c>> |
| TaxSummary | Not Supported | N/A |
| TaxItem | Not Supported | N/A |
| Transaction | InvoiceInvoice AdjustmentRefundPaymentInvoice Item Adjustment | <<Transaction.Mapping: InvoiceAdjustment.ReasonCode__c, InvoiceItemAdjustment.ReasonCode__c,Invoice.ReasonCode__c, Payment.ReasonCode__c,Refund.ReasonCode__c>> |
| PreviousTransaction | InvoiceInvoice AdjustmentRefundPaymentInvoice Item Adjustment | <<Transaction.Mapping: InvoiceAdjustment.ReasonCode__c, InvoiceItemAdjustment.ReasonCode__c,Invoice.ReasonCode__c, Payment.ReasonCode__c,Refund.ReasonCode__c >> |
| OpenInvoice | Invoice | <<Invoice.ReasonCode__c>> |
