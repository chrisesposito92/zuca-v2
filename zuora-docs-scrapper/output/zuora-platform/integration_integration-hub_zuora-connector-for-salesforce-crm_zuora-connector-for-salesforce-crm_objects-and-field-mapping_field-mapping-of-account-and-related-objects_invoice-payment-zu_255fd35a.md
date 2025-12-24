---
title: "Invoice Payment: Zuora__PaymentInvoice__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-account-and-related-objects/invoice-payment-zuora__paymentinvoice__c"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:10.583Z"
---

# Invoice Payment: Zuora\_\_PaymentInvoice\_\_c

The Invoice Payment mechanism links payments to invoices, detailing the application of payment amounts. The Zuora\_\_PaymentInvoice\_\_c object maintains relationships with both Payment and Invoice objects.

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| InvoicePayment | Zuora__PaymentInvoice__c |  |  |  |
|  | Applied Amoount |  | Zuora__ ApplyAmount__c |  |
|  | Unique External Id |  | Zuora__EXT_ID__c |  |
|  | Invoice |  | Zuora__ Invoice__c | Holds a lookup reference to the Invoice object. |
|  | Payment |  | Zuora__ Payment__c | Holds a master/detail reference to the Payment object. |
|  | Refund Amount |  | Zuora__ RefundAmount__c |  |
| An Invoice Payment is a mechanism to tie a payment to an invoice and indicate how much of the payment to apply to the invoice. The Zuora__PaymentInvoice__c object has a master-detail relationship to the Payment object and a lookup relationship to the Invoice object. |  |  |  |  |
