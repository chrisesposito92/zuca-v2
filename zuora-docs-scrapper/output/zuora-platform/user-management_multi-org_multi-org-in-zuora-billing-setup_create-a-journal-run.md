---
title: "Create a journal run"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-setup/create-a-journal-run"
product: "zuora-platform"
scraped_at: "2026-02-20T17:47:18.388Z"
---

# Create a journal run

Learn how to create a journal run by selecting an organizational unit, closing accounting periods, and managing transactions in a multi-org environment.

Users can select an org unit that they can access for creating the journal entries for transactions within that org unit. Each org. unit in a multi-org environment transacts as an individual business unit. Therefore, users must create individual accounting periods for each organizational unit. When a new org. unit is created within the org hierarchy, an open-ended accounting period is automatically created for each new org unit. Users can later create an accounting period for the org unit based on their access permission.

Create a journal run after closing the accounting period to include all the transactions.

-   Create a Journal Runs Follow the steps mentioned in [Create a Journal Runs](/accounts-receivable/finance/summary-journal-entries/journal-runs/create-a-journal-run).

-   From the Org Picker, choose the org unit to create the journal run.


![Org Picker for journal run](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/616e7ec5-239e-4525-ac6c-d6866e839d23?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYxNmU3ZWM1LTIzOWUtNDUyNS1hYzZjLWQ2ODY2ZTgzOWQyMyIsImV4cCI6MTc3MTY5NjAzNSwianRpIjoiYWM1N2NkOWRlN2FjNDNhN2JlMDJjZmM3MzE0NzRkODIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.C7WFAZKFZP2YMn-_CJfhe1-KiU2YoaKlvO1lSndIZQU)

Note:

The following transaction types are not supported when Multi-Org is enabled. If you need Journal Run reports for these transaction types, ensure you run the Journal Run before enabling Multi-Org.

| Transaction Category | Transaction Type |
| --- | --- |
| Billing | Invoice Item Adjustment (Invoice)Invoice Item Adjustment (Tax)Invoice Adjustment (Invoice Adjustment transaction is deprecated on Production.)Credit Balance Adjustment (Applied from Credit Balance)Credit Balance Adjustment (Transferred to Credit Balance) |
| Cash | Electronic Credit Balance PaymentExternal Credit Balance PaymentElectronic Credit Balance RefundExternal Credit Balance Refund |
