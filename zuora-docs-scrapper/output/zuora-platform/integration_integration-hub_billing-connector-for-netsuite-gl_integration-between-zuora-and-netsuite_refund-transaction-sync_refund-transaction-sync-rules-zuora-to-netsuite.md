---
title: "Refund transaction sync rules: Zuora to NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync/refund-transaction-sync-rules-zuora-to-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:48.143Z"
---

# Refund transaction sync rules: Zuora to NetSuite

Process that syncs Zuora payment refunds (as opposed to credit balance refunds) to NetSuite customer refunds

This process syncs Zuora payment refunds (as opposed to credit balance refunds) to NetSuite customer refunds. This is a two-step sync. First, it updates the existing NetSuite payment to "unapply" the amount applied to the original invoices (which reopens the invoices' balance). Then it creates a new NetSuite customer refund to refund that payment's open balance. This prevents the NetSuite payment's open balance from being applied to another transaction.

This integration syncs records according to the following rules:

1.  Zuora payment refund records are synced if they meet the following criteria:
    -   The related customer account Sync To NetSuite is set to `Yes` or is empty.
    -   The Status is `Posted`.
    -   The Transferred to Accounting is either `No`, `Error`, or `Processing`.
    -   The Refund Date is greater than or equal to the Refund Cutover Date (if specified in the NetSuite Connector Advanced Settings).
2.  The following validations are performed during the sync to ensure data integrity:
    -   The Zuora payment method matches a valid NetSuite payment method. See [Reconcile Data Between Zuora and NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/reconcile-data-between-zuora-and-netsuite) for more information.
    -   The associated Zuora payment has been synced (it has an IntegrationId).
    -   If populated, the associated Zuora account's NetSuite Location matches a valid NetSuite location.
    -   If populated, the associated Zuora account's NetSuite Class matches a valid NetSuite class.
    -   If populated, the associated Zuora account's NetSuite Department matches a valid NetSuite department.
3.  The Zuora payment's Integration Status is updated to `Updating Payment` and Transferred to Accounting updated to `Processing` to indicate that the record is currently being synced and to assist with error recovery.
4.  Update the referenced NetSuite payment to unapply the given amount from its invoice (or multiple invoices). This results in an unapplied balance for that NetSuite payment.
5.  The Zuora payment's Integration Status is updated to `Creating Refund` to indicate the record is currently being synced and to assist with error recovery.
6.  Create a new NetSuite customer refund and references that NetSuite payment. This refunds the payment's unapplied balance.
7.  Upon successful creation of the NetSuite refund, the new NetSuite internal ID is written back to the Zuora refund record, the Integration Status is set to `Sync Complete` and Transferred to Accounting is set to `Yes`.

## Sync notes

-   Once synced successfully, changes to the Zuora refund will not be synced, including cancellations. If you need to resync a refund, you must manually delete the NetSuite refund, reapply the original payment amounts, and set the Zuora refund's Transferred to Accounting to `No`. If a refund is voided or canceled before it is picked up by the sync, the refund will be ignored.
-   Transferred to Accounting values of `Null` in the API will appear as `No` in the Zuora UI.
-   See [NetSuite Classifications](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/netsuite-classifications) for information about how classifications are mapped for NetSuite transaction header and details.

## Refund transaction sync flow: Zuora to NetSuite

![overview_refund_txn.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ae2ec177-d35e-4675-bef2-b6863f3dc3c4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFlMmVjMTc3LWQzNWUtNDY3NS1iZWYyLWI2ODYzZjNkYzNjNCIsImV4cCI6MTc2NjY0MTc4NiwianRpIjoiMmM0Njc5NzdkZmE2NGZiOGE5ZThjOTcxMTljNzAzZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CSWMf8D_oZTOiGDiymmrh-q9ZM0PbGoSUlnSddk0k9s)
