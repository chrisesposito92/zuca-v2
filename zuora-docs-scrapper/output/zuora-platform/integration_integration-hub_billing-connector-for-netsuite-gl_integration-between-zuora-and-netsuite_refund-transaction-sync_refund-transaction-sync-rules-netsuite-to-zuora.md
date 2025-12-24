---
title: "Refund transaction sync rules: NetSuite to Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync/refund-transaction-sync-rules-netsuite-to-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:51.234Z"
---

# Refund transaction sync rules: NetSuite to Zuora

Process syncs refunds made to standalone credit memos in NetSuite

This process syncs refunds made to standalone credit memos in NetSuite. NetSuite Connector will create one Zuora refund for each NetSuite credit memo.

There is a special procedure you must follow to create a NetSuite refund that you wish to sync to Zuora:

1.  Within NetSuite, create a new credit memo for the given customer account.

2.  On the Items tab, add one or more Items with amounts, as appropriate.

    Note:

    Do not apply the credit memo to an invoice.

3.  On the Zuora Refund tab, select Create Zuora Refund and select the Zuora Refund Payment Reference that you want to refund against.

4.  Create a new customer refund that references the new credit memo. The amount of the refund must match the full amount of the referenced credit memo. Do not reference any other transactions on this refund.


If a NetSuite payment was applied to multiple invoices, NetSuite Connector will not sync partial refunds associated with payments applied to multiple invoices. You must sync partial refunds manually.

This integration syncs records according to the following rules:

1.  NetSuite customer refund records are synced if they meet the following criteria:
    -   The related customer account must be synced (the Zuora Customer ID cannot be empty).
    -   The refund's Integration Status is not `Sync Complete`.
    -   The refund is fully applied (the Amount Remaining is 0)
    -   The applied credit memo's Create Zuora Refund is enabled.
2.  The following validations are performed during the sync to ensure data integrity:
    -   The refund is applied only to a single credit memo (the one created specifically for the Zuora refund).
    -   The applied credit memo has a valid Zuora payment selected.
    -   The refund amount is less than or equal to the amount of the referenced payment amount.
3.  The NetSuite refund's Integration Status is updated to `Creating Refund` to indicate that the record is currently being synced and to assist with error recovery.
4.  The Zuora refund is created.
5.  Upon successful creation of the Zuora refund, the new Zuora ID is written back to the NetSuite refund record and the Integration Status for both the NetSuite refund and credit memo are set to `Sync Complete`.

## Sync notes

Once synced successfully, additional changes to the NetSuite refund will be not synced, including cancellations. If you need to resync a refund, you must manually cancel the Zuora refund and clear the Integration Status and Zuora ID fields on the NetSuite refund.

## Refund transaction sync flow: NetSuite to Zuora

![refund_netsuite_to_zuora.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/546ebef2-5920-45c8-8fa4-cc8de31a2a7d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0NmViZWYyLTU5MjAtNDVjOC04ZmE0LWNjOGRlMzFhMmE3ZCIsImV4cCI6MTc2NjY0MTc4OSwianRpIjoiMDNmNjM4ZWJiOGYzNDdlN2E0ZThjZGZhYzQwMTQ0ZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NTdL-y4OA6S02L6tl0CbS6cHQYFXa9JzO-M9s5gppwk)
