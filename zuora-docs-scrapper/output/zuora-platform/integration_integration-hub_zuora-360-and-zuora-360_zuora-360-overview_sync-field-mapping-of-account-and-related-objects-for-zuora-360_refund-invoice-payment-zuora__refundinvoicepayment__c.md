---
title: "Refund Invoice Payment: Zuora__RefundInvoicePayment__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/sync-field-mapping-of-account-and-related-objects-for-zuora-360/refund-invoice-payment-zuora__refundinvoicepayment__c"
product: "zuora-platform"
scraped_at: "2025-12-24T18:37:33.553Z"
---

# Refund Invoice Payment: Zuora\_\_RefundInvoicePayment\_\_c

The Zuora\_\_RefundInvoicePayment\_\_c object links refunds to invoice payments, allowing multiple associations and supporting credit balance refunds.

The Zuora\_\_RefundInvoicePayment\_\_c object represents the relationship object between Refund and InvoicePayment. A refund can be associated with multiple payments for invoices, and multiple refunds can be made for one payment for invoices. This relation is left empty for credit balance refunds.

The following fields of Zuora Refund Invoice Payment are synced in Zuora 360+.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Refund Invoice Payment | Zuora__RefundInvoicePayment__c |  |  |  |
|  | Refund |  | Zuora__Refund__c |  |
|  | Refund Amount |  | Zuora__RefundAmount__c |  |
|  | Invoice Payment |  | Zuora__InvoicePayment__c |  |
|  | Unique External Id |  | Zuora__EXT_ID__c |  |
