---
title: "Credit Memo transaction sync rules: Standard"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora/credit-memo-transaction-sync-rules-standard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:12.876Z"
---

# Credit Memo transaction sync rules: Standard

Process that syncs NetSuite credit memos to Zuora invoice item adjustments of type credit

This process syncs NetSuite credit memos to Zuora invoice item adjustments of type `credit`.

This integration syncs records according to the following rules:

1.  NetSuite credit memo records are synced if they meet the following criteria:
    -   The related customer account must be synced (the Zuora Customer ID cannot be empty).
    -   The credit memo's Integration Status is not `Sync Complete`.
    -   The credit memo is fully applied (the Amount Remaining is 0).
    -   The credit memo's Zuora Type is empty (to exclude records synced from Zuora negative invoices and invoice item adjustment credits).
    -   The credit memo is applied to exactly one Zuora invoice (where the transaction type is `invoice` and Zuora Type is `INVOICE`).
2.  The following validations are performed during the sync to ensure data integrity:
    -   The credit memo is applied to exactly one Zuora Invoice (where the transaction type is `invoice` and Zuora Type is `INVOICE`). The credit memo can be applied to other non-Zuora invoices or refunded, but can only reference a single invoice that came from Zuora.
3.  The NetSuite credit memo's Integration Status is updated to `Creating Invoice Adjustment` to indicate that the record is currently being synced and to assist with error recovery.
4.  A Zuora invoice item adjustment of type `credit` is created.
5.  Upon successful creation of the Zuora invoice item adjustment, the new Zuora ID is written to the NetSuite credit memo and the Integration Status is set to `Sync Complete`.

## Transaction sync notes

Once synced successfully, additional changes to the NetSuite credit memo will not be synced, including cancellations and deletions. If you need to resync a credit memo, you must manually cancel the Zuora invoice item adjustment and clear the Integration Status and Zuora ID fields on the NetSuite credit memo.

## Loading multiple credit memos to the same invoice

If a credit memo or invoice item adjustment is made to the same invoice in NetSuite and Zuora, it will work only if the total amount is less than the open invoice balance (the invoice amount less any payments).

The credit memo or invoice item adjustment that is loaded last will fail, and will be logged in the activity logs. You must take corrective action to resolve the issue.

## Credit Memo transaction sync flow: Standard

![credit_memo_standard.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/34bd46da-c034-4c88-b7ec-bf8b6c504681?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM0YmQ0NmRhLWMwMzQtNGM4OC1iN2VjLWJmOGI2YzUwNDY4MSIsImV4cCI6MTc2NjY0MTgxMCwianRpIjoiNjlmMDY0MGM2ZTBlNDBkYTliZTk5NDNhY2EwNTAwZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QA-Gnh3eQz64gubhOCFd8F_KWzW6MUq2j_J4v8jHkcg)
