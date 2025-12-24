---
title: "Credit Memo transaction sync rules: Negative balance"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora/credit-memo-transaction-sync-rules-negative-balance"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:14.914Z"
---

# Credit Memo transaction sync rules: Negative balance

Process syncs NetSuite credit memos that came from negative Zuora invoices to Zuora invoice item adjustments

This process syncs NetSuite credit memos that came from negative Zuora invoices to Zuora invoice item adjustments. Once a "negative invoice" credit memo has been fully applied (to other Zuora invoices, non-Zuora invoices, or refunded), one or more invoice adjustments are made in Zuora to close out the invoice balances:

-   One invoice item adjustment charge-type is created for the full amount of the credit memo and applied to the original Zuora negative invoice.
-   For each Zuora invoice the credit memo was applied to, a separate invoice item adjustment credit-type is created and applied to that original Zuora invoice.

This integration syncs records according to the following rules:

1.  NetSuite credit memo records are synced if they meet the following criteria:
    -   The related customer account must be synced (the Zuora Customer ID cannot be empty).
    -   The credit memo's integration status is not `Sync Complete`.
    -   The credit memo is fully applied (the Amount Remaining is 0).
    -   The credit memo's Zuora Type is `NEGATIVE_INVOICE`.
2.  The following validations are performed during the sync to ensure data integrity:
    -   The credit memo has been applied to at least one transaction (any type and not necessarily one that originated from Zuora).
3.  The NetSuite credit memo's Integration Status is updated to `Creating Invoice Adjustment` to indicate that the record is currently being synced and to assist with error recovery.
4.  A Zuora invoice item adjustment of type `charge` is created for the total amount of the credit memo and applied to the original negative invoice in Zuora.
5.  For each Zuora invoice the credit memo was applied to (which can be zero or more credit memos), a separate Zuora invoice item adjustment of type `credit` is created for the specific applied-to amount and applied to that invoice in Zuora.
6.  Upon successful creation of all the Zuora invoice item adjustments, the new Zuora IDs are written to the NetSuite credit memo and the Integration Status is set to `Sync Complete`.

## Transaction sync notes

Once synced successfully, changes to the NetSuite credit memo will not be synced, including cancellations and deletions. If you need to resync a credit memo, you must manually cancel the Zuora invoice item adjustments and clear the Integration Status and Zuora ID fields on the NetSuite credit memo.

## Credit Memo sync flow: Negative balance

![credit_memo_negative.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3a19d2bc-2577-4fef-8b19-8597dd6efe04?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNhMTlkMmJjLTI1NzctNGZlZi04YjE5LTg1OTdkZDZlZmUwNCIsImV4cCI6MTc2NjY0MTgxMywianRpIjoiODUwNmFiNWY3NDVlNDFkNjhjN2YwZmUwYzNkZGFmOWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.02Ib9w7I_E6Gybs5oq9QC0as4o8RwU5Zpu-ZGzq0ZXw)
