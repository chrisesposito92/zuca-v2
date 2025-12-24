---
title: "Payment transaction sync rules: NetSuite to Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync/payment-transaction-sync-rules-netsuite-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:31.848Z"
---

# Payment transaction sync rules: NetSuite to Zuora

Process that syncs NetSuite customer payments applied to one or more Zuora invoices to Zuora payments

This integration syncs records according to the following rules:

1.  NetSuite payment records are synced if they meet the following criteria:
    -   The related customer account must be synced (the Zuora Customer ID cannot be empty).
    -   The payment's Integration Status is not `Sync Complete`.
    -   The payment is fully applied (the Amount Remaining is 0).
    -   The Zuora Origin is not `ZUORA`.
    -   The payment must be applied only to an invoice. Connector does not support applications to a journal.
    -   The payment is applied to at least one invoice that came from Zuora (where transaction type is `invoice,`Zuora Type is `INVOICE`, and Zuora ID is not empty).If you are not using Netsuite connector to sync Zuora invoices to Netsuite. If you use Workflow to sync the Invoice and create a payment in Netsuite using those invoices, you must manually update the custom field Zuora Type to `INVOICE` if the payment is applied to invoices.
2.  The following validations are performed during the sync to ensure data integrity:
    -   The associated Zuora invoice has been synced (it has an IntegrationID).
    -   The NetSuite payment method matches a valid Zuora payment method.
3.  The following sync options are available for the Payment Sync Behaviour:
    -   If the Payment Sync Behaviour option is set to Sync New and Modified Records, the connector will pick up all the payments in NetSuite that satisfy the default query criteria and are beyond the cutover date. This option can be used when active payment applications and operations originate in NetSuite post creation and have to be transferred to Zuora.
    -   If the Payment Sync Behaviour option is set to Sync New Records Only, the connector will pick up only the new payments based on the \`Zuora Integration Status\` in NetSuite, along with those that meet the default query criteria. If the \`Zuora Integration Status\` is "Sync Complete," these payments are filtered out. This option is preferred for customers who do not operate on the NetSuite payments post-creation and also ensures quicker sync time due to reduced volume.
4.  The NetSuite payment's Integration Status is updated to `Creating Payment` to indicate the record is currently being synced and to assist with error recovery.
5.  If the NetSuite payment is applied to more than one Zuora invoice, the Zuora payment will also be applied to multiple invoices. This is done by creating a Zuora payment in `Draft` status, adding each invoice reference, then updating the payment status to `Processed`.
6.  If exclusiveTaxNoRounding or inclusiveTaxNoRounding permissions were enabled before activating Invoice settlement, the Billing Invoice total balance may differ from the total balance of Invoice Item/Taxation Item. This discrepancy could potentially result in failed payment synchronization.
7.  After creating the Zuora payment successfully, the new Zuora ID is written back to the NetSuite payment record and the Integration Status is set to `Sync Complete`.

## Sync notes

-   The NetSuite to Zuora Payments sync uses a different connection type to the rest of the connector and therefore requires that its credentials are set manually within Boomi. Contact [Zuora Global Support](http://support.zuora.com/) for access to Boomi and for instructions on how to implement these changes. The credentials submitted are the same OAuth credentials used to authenticate with Zuora so it is recommended to make note of those values when they are generated.
-   Once synced successfully, any additional changes to the NetSuite payment will not be synced, including cancellations and deletions. If you need to resync a payment, you must manually cancel the Zuora payment and clear the Integration Status and Zuora ID fields on the NetSuite payment.
