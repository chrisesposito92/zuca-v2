---
title: "Payment transaction sync rules: NetSuite to Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled/payment-transaction-sync-rules-netsuite-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:25.852Z"
---

# Payment transaction sync rules: NetSuite to Zuora

Process that syncs NetSuite customer payments to Zuora payments

This integration syncs records according to the following rules:

1.  NetSuite payment records are synced if they meet the following criteria:
    -   The related customer account must be synced (the Zuora Customer ID cannot be empty).
    -   The payment must be applied to at least one invoice or debit memo that came from Zuora (where transaction type is `invoice` and Zuora ID is not empty), or fully unapplied (the Amount Remaining is greater than 0 and Amount Paid is 0).
    -   The Zuora Origin is not `ZUORA`.
    -   If the payment is fully applied, it must be applied to at least one invoice or debit memo that came from Zuora (where transaction type is `invoice` and Zuora ID is not empty).
    -   The Zuora Sync Updates field is `Yes`.
2.  The following validations are performed during the sync to ensure data integrity:
    -   The associated Zuora invoice or debit memo has been synced (it has an Integration ID), if there is one.
    -   The NetSuite payment method matches a valid Zuora payment method.
    -   The payment must be applied only to an invoice. The connector does not support applications to a journal.
3.  The Billing Netsuite connector now gives you the ability to configure the new Payment Sync Behaviour custom fieldto process data based on the following preferences:

    -   Sync New and Modified Records - The connector will process all the payments in Netsuite that satisfy the query criteria and are beyond the cutover date. This option can be used when there are active payment applications and operations originating in NetSuite that have to be transferred to Zuora.

    -   Sync New Records Only - The connector will process only new payments based on the Zuora Integration Status in Netsuite with data that meets the default query criteria. The payments are filtered out if the \`Zuora Integration Status\` is in 'Sync Complete' status. This option is recommended if you do not operate on the NetSuite payments post-creation. This also ensures quicker sync time due to reduced volume.

        Note:

        -   This custom field is currently unavailable in the Zuora UI. Submit a request to [Zuora Global Support](http://support.zuora.com/) to enable this field.

        -   The Sync New and Modified Records field value is enabled by default.


4.  The NetSuite payment's Integration Status is updated to `Creating Payment` to indicate the record is currently being synced and to assist with error recovery.

5.  If the NetSuite payment is applied to more than one Zuora invoice or debit memo, the Zuora payment will also be applied to multiple invoices and/or debit memos.

6.  After creating the Zuora payment successfully, the new Zuora ID is written back to the NetSuite payment record and the Integration Status is set to `Sync Complete`.


## Sync notes

-   With Invoice Settlement enabled, you can apply, unapply, or transfer a payment. After a payment is synced successfully, changes will continue to sync so long as the Effective Date is greater than or equal to the Payment Cutover Date if the value is specified in the NetSuite Connector Advanced Settings.
-   If you need to resync a payment, you must manually cancel the Zuora payment and clear the Integration Status and Zuora ID fields on the NetSuite payment.
-   The NetSuite to Zuora Payments sync uses a different connection type to the rest of the connector and therefore requires that its credentials are set manually within Boomi. Contact [Zuora Global Support](http://support.zuora.com/) for access to Boomi and for instructions on how to implement these changes. The credentials submitted are the same OAuth credentials used to authenticate with Zuora so it is recommended to make note of those values when they are generated.
