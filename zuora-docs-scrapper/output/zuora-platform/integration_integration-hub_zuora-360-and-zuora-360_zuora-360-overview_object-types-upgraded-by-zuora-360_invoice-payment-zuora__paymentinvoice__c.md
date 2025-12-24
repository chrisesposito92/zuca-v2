---
title: "Invoice Payment: Zuora__PaymentInvoice__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/object-types-upgraded-by-zuora-360/invoice-payment-zuora__paymentinvoice__c"
product: "zuora-platform"
scraped_at: "2025-12-24T18:36:06.093Z"
---

# Invoice Payment: Zuora\_\_PaymentInvoice\_\_c

This reference topic details the synchronization of Zuora Invoice Payment fields in Zuora 360+, highlighting the use of the Payment Part object when the Invoice Settlement feature is enabled.

With the Invoice Settlement feature enabled, the Payment Part object is not available for sync. Instead this object that joins the Invoice and Payment objects is synced.

## Zuora Invoice Payment Fields Synced in Zuora 360+

The following fields of Zuora Invoice Payment are synced in Zuora 360+.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Invoice Payment | Zuora__PaymentInvoice__c |  |  |
|  | Amount |  | Zuora__ApplyAmount__c |
|  | Invoice |  | Zuora__Invoice__c |
|  | Payment |  | Zuora__Payment__c |
|  | Refund Amount |  | Zuora__RefundAmount__c |
|  | ID |  | Zuora__EXT_ID__c |
