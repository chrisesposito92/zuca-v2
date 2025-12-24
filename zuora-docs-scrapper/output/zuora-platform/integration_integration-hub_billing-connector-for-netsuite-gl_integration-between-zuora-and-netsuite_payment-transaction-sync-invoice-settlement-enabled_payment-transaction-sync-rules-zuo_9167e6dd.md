---
title: "Payment transaction sync rules: Zuora to NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled/payment-transaction-sync-rules-zuora-to-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:23.210Z"
---

# Payment transaction sync rules: Zuora to NetSuite

Process that syncs Zuora payments to NetSuite customer payments

This integration syncs records according to the following rules:

1.  Zuora Payment records are synced if they meet the following criteria:
    -   The related customer account option Sync To NetSuite is not set or set to `Yes`.
    -   The Status is `Processed`.
    -   The Transferred to Accounting status is `No`, `Error`, or `Processing`.
    -   The Effective Date is greater than or equal to the Payment Cutover Date (if the value is specified in the NetSuite Connector Advanced Settings).
2.  The following validations are performed during the sync to ensure data integrity:
    -   The Zuora payment method matches a valid NetSuite payment method. See [Reconcile Data Between Zuora and NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/reconcile-data-between-zuora-and-netsuite) for more information.
    -   The associated Zuora invoices have been synced (they have an IntegrationId).
    -   If populated, the associated Zuora account's NetSuite location matches a valid NetSuite location.
    -   If populated, the associated Zuora account's NetSuite class matches a valid NetSuite class.
    -   If populated, the associated Zuora account's NetSuite department matches a valid NetSuite department.
3.  The Zuora payment's Integration Status is updated to `Creating Payment` and Transferred to Accounting is updated to `Processing` to indicate the record is currently being synced and to assist with error recovery.
4.  If the Zuora payment is applied to more than one invoice or debit memo, the NetSuite payment will also be applied to multiple invoices and/or debit memos.
5.  Upon successful creation of the NetSuite payment, the new NetSuite internal ID is written back to the Zuora payment record, the Integration Status is set to `Sync Complete`, and Transferred to Accounting is set to `Yes`.

## Sync notes

-   With Invoice Settlement enabled, you can apply, unapply, or transfer a payment. After a payment is synced successfully, Transferred to Accounting will be set to `Yes`. To sync changes on this payment record, you must update the Transferred to Accounting value to `No`.
-   Transferred to Accounting value of `Null` in the API will appear as `No` in the Zuora UI.
-   See NetSuite Classifications for information about how classifications are mapped for NetSuite transaction header and details.
-   Credit card data is not transferred.
-   Unapplied Payments in Zuora will not sync to NetSuite while in an unapplied state unless the record has already been synced while having an application against it.
-   The payment is applied to at least one invoice from Zuora (where the transaction type is an `invoice`, Zuora Type is `INVOICE`, and Zuora ID is not empty).
-   The Zuora invoices will not sync with Netsuite if you do not use the Netsuite connector. If you use Workflow to sync the invoice and create a payment in Netsuite using those invoices, you must manually update the custom Zuora Type to `INVOICE` if the payment is applied to invoices.

## Deposit-to account information

The Deposit-To account is where the payment amount will be placed. This is determined by the Deposit-To account configured on the referenced payment method within NetSuite. NetSuite Connector does not use the Accounting Code field on the Zuora payment method.
