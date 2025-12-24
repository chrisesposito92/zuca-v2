---
title: "Collect payment for consolidated invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/consolidated-invoices-generation-through-bill-runs/collect-payment-for-consolidated-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:36.655Z"
---

# Collect payment for consolidated invoices

Learn how to collect payment for consolidated invoices using the Zuora REST API by applying existing payments.

After the consolidated invoice is generated, you can collect payment for it.

You can use the Apply a payment operation to apply an existing payment to the consolidated invoice. You have to set the `invoiceId` field to the ID of the consolidated invoice in the request body.

To collect payment for a consolidated invoice through the Zuora REST API, perform the following steps:

1.  Determine the mandatory fields that you need for applying a payment to an invoice, including:

    -   Path parameter: `paymentId`

    -   Request field: `invoices` > `invoiceId`

    -   Request field: `invoices` > `amount`


2.  Use the Apply a payment operation to apply an existing payment to the consolidated invoice.

    The following sample API request applies an existing payment to a consolidated invoice.

    | Request | PUT /v1/payments/{paymentId}/apply |
    | --- | --- |
    | Request body | { "effectiveDate": "2021-03-01", "invoices": [ { "amount": 10.1, "invoiceId": "4028905f5a87c0ff015a87d3f8f10043", "items": [ { "amount": 10, "invoiceItemId": "4028905f5a87c0ff015a87d3f90c0045" }, { "amount": 0.1, "taxItemId": "4028905f5a87c0ff015a87d3f884003f" } ] } ] } |

    After the sample API request is submitted, the following sample API response is returned:

    | Request | PUT /v1/payments/{paymentId}/apply |
    | --- | --- |
    | Response body | { "id": "4028905f5a87c0ff015a87eb6b75007f", "number": "P-00000001", "status": "Processed", "type": "External", "accountId": "4028905f5a87c0ff015a87d25ae90025", "amount": 44.1, "appliedAmount": 44.1, "unappliedAmount": 0, "refundAmount": 0, "creditBalanceAmount": 0, "currency": "USD", "effectiveDate": "2021-03-01", "comment": "normal payment", "paymentMethodId": "402881e522cf4f9b0122cf5dc4020045", "paymentMethodSnapshotId": null, "authTransactionId": null, "bankIdentificationNumber": null, "gatewayId": null, "gatewayOrderId": null, "gatewayResponse": null, "gatewayResponseCode": null, "gatewayState": "NotSubmitted", "markedForSubmissionOn": null, "referenceId": null, "secondPaymentReferenceId": null, "softDescriptor": null, "softDescriptorPhone": null, "submittedOn": null, "settledOn": null, "cancelledOn": null, "createdDate": "2020-03-01 11:30:37", "createdById": "402881e522cf4f9b0122cf5d82860002", "updatedDate": "2020-03-01 13:56:15", "updatedById": "402881e522cf4f9b0122cf5d82860002", "financeInformation": { "bankAccountAccountingCode": null, "bankAccountAccountingCodeType": null, "unappliedPaymentAccountingCode": null, "unappliedPaymentAccountingCodeType": null, "transferredToAccounting": "No" }, "gatewayReconciliationStatus": null, "gatewayReconciliationReason": null, "payoutId": null, "success": true } |
