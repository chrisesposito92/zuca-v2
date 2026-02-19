---
title: "Invoice Payment : Zuora__PaymentInvoice__c(Account)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-account-and-related-objects-for-zuora-360/invoice-payment--zuora__paymentinvoice__caccount"
product: "zuora-platform"
scraped_at: "2026-02-19T03:36:38.168Z"
---

# Invoice Payment : Zuora\_\_PaymentInvoice\_\_c(Account)

An Invoice Payment is a mechanism to tie a payment to an invoice and indicate how much of the payment to apply to the invoice. The Zuora\_\_PaymentInvoice\_\_c object has a master-detail relationship to the Payment object and a lookup relationship to the Invoice object.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| InvoicePayment | Zuora__PaymentInvoice__c |  |  |  |
|  | Applied Amoount |  | Zuora__ ApplyAmount__c |  |
|  | Unique External Id |  | Zuora__EXT_ID__c |  |
|  | Invoice |  | Zuora__ Invoice__c | The latest version of the connector, Zuora connectors for Salesforce CRM, no longer supports these fields. Please refer to the below tables:PaymentInvoicePaymentPart |
| The latest version of the connector, Zuora connectors for Salesforce CRM, no longer supports these fields. Please refer to the below tables:PaymentInvoicePaymentPart | Payment |  | Zuora__ Payment__c | Holds a master/detail reference to the Payment object. |
|  | Refund Amount |  | Zuora__ RefundAmount__c |  |
