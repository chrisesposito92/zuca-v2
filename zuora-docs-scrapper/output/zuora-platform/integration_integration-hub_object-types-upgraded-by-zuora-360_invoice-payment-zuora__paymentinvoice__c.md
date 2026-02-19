---
title: "Invoice Payment: Zuora__PaymentInvoice__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/object-types-upgraded-by-zuora-360/invoice-payment-zuora__paymentinvoice__c"
product: "zuora-platform"
scraped_at: "2026-02-19T03:35:48.648Z"
---

# Invoice Payment: Zuora\_\_PaymentInvoice\_\_c

An Invoice Payment links a payment to an invoice, detailing the amount applied. The Zuora\_\_PaymentInvoice\_\_c object connects to both Payment and Invoice objects.

The following table lists the Zuora and Salesforce fields.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| InvoicePayment | Zuora__PaymentInvoice__c |  |  |  |
|  | Applied Amoount |  | Zuora__ ApplyAmount__c |  |
|  | Unique External Id |  | Zuora__EXT_ID__c |  |
|  | Invoice |  | Zuora__ Invoice__c | The latest version of the connector, Zuora connectors for Salesforce CRM, no longer supports these fields. Please refer to the below tables:PaymentInvoicePaymentPart |
| The latest version of the connector, Zuora connectors for Salesforce CRM, no longer supports these fields. Please refer to the below tables:PaymentInvoicePaymentPart | Payment |  | Zuora__ Payment__c | Holds a master/detail reference to the Payment object. |
|  | Refund Amount |  | Zuora__ RefundAmount__c |  |
