---
title: "Refund Invoice Payment: Zuora__RefundInvoicePayment__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-account-and-related-objects/refund-invoice-payment-zuora__refundinvoicepayment__c"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:13.630Z"
---

# Refund Invoice Payment: Zuora\_\_RefundInvoicePayment\_\_c

This reference topic details the field mapping between the Zuora Refund Invoice Payment object and related Salesforce objects, highlighting the synchronization of fields in the Zuora Connector for Salesforce CRM.

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Refund Invoice Payment | Zuora__RefundInvoicePayment__c |  |  |  |
|  | Refund |  | Zuora__Refund__c |  |
|  | Refund Amount |  | Zuora__RefundAmount__c |  |
|  | Invoice Payment |  | Zuora__InvoicePayment__c |  |
|  | Unique External Id |  | Zuora__EXT_ID__c |  |
| The Zuora__RefundInvoicePayment__c object represents the relationship object between Refund and InvoicePayment. A refund can be associated with multiple payments for invoices, and multiple refunds can be made for one payment for invoices. This relation is left empty for credit balance refunds. The above fields of Zuora Refund Invoice Payment are synced in Zuora Connector for Salesforce CRM. |  |  |  |  |
