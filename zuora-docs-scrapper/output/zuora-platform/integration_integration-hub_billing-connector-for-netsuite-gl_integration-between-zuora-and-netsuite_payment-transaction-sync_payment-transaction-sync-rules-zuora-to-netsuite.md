---
title: "Payment transaction sync rules: Zuora to NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync/payment-transaction-sync-rules-zuora-to-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:28.785Z"
---

# Payment transaction sync rules: Zuora to NetSuite

Process that syncs Zuora payments to NetSuite customer payments

This integration syncs records according to the following rules:

1.  Zuora Payment records are synced if they meet the following criteria:
    -   The related customer account option Sync To NetSuite is not set or set to `Yes`.
    -   The Status is `Processed`.
    -   The Transferred to Accounting status is `No`, `Error`, or `Processing`.
    -   The Effective Date is greater than or equal to the Payment Cutover Date (if the value is specified in the NetSuite Connector Advanced Settings).
    -   The integration status field in the account must be "Sync Complete" enabled.
2.  The following validations are performed during the sync to ensure data integrity:
    -   The Zuora payment method matches a valid NetSuite payment method. See [Reconcile Data Between Zuora and NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/reconcile-data-between-zuora-and-netsuite) for more information.
    -   The associated Zuora invoices have been synced (they have an IntegrationId).
    -   If populated, the associated Zuora account's NetSuite location matches a valid NetSuite location.
    -   If populated, the associated Zuora account's NetSuite class matches a valid NetSuite class.
    -   If populated, the associated Zuora account's NetSuite department matches a valid NetSuite department.
3.  The Zuora payment's Integration Status is updated to `Creating Payment` and Transferred to Accounting is updated to `Processing` to indicate the record is currently being synced and to assist with error recovery.
4.  If the Zuora payment is applied to more than one invoice, the NetSuite payment will also be applied to multiple invoices.
5.  Upon successful creation of the NetSuite payment, the new NetSuite internal ID is written back to the Zuora payment record, the Integration Status is set to `Sync Complete`, and Transferred to Accounting is set to `Yes`.

## Sync notes

-   Once synced successfully, no further changes to the Zuora payment will be synced, including cancellations. If you need to resync a payment, you can manually delete the NetSuite payment and set the Zuora payment's Transferred to Accounting to `No`. However, if a payment is voided or canceled before it is picked up by the sync, the payment will be ignored.
-   Transferred to Accounting values of `Null` in the API will appear as `No` in the Zuora UI.
-   See [NetSuite Classifications](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/netsuite-classifications) for information about how classifications are mapped for NetSuite transaction header and details.
-   Credit card data is not transferred.
-   Unapplied Payments in Zuora will not sync to NetSuite while in an unapplied state unless the record has already been synced while having an application against it.
-   With Invoice Settlement enabled, if a payment is synced to NetSuite successfully, then the payment will not be synced again when transferring to another customer account or recording as unassigned.

## Deposit-to account information

The Deposit-To account is where the payment amount will be placed. This is determined by the Deposit-To account configured on the referenced payment method within NetSuite. NetSuite Connector does not use the Accounting Code field on the Zuora payment method.

## Payment transaction sync flow: Zuora to NetSuite

![overview_payment_txn.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e564d2c2-3ae0-43ca-9f2a-d6c41c5b39d2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU1NjRkMmMyLTNhZTAtNDNjYS05ZjJhLWQ2YzQxYzViMzlkMiIsImV4cCI6MTc2NjY0MTc2NiwianRpIjoiOWQ0ZTdmMTU5MGUwNGRhODgwZmM2ZDA2NTk0NmFlYTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CmQC8vHzBPNgk8ZbK6KJjI-Igrpwh53YzeDmEqVW6vM)
