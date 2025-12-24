---
title: "Billing: Bill Run"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-bill-run"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:52.740Z"
---

# Billing: Bill Run

This reference describes the Billing: Bill Run task.

The bill run task in Workflow creates a bill run in one of the three modes:

-   Ad-hoc - Creates a one-time bill run for a group of accounts. You can filter the accounts by bill cycle days.

-   Single Account - Creates a one-time bill run for a single account.

-   Replicate Existing Bill Run - Replicates an existing bill run.


To learn more about bill runs, see [Bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/overview-of-bill-runs) and [Create bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation).

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, the bill run task can create credit memos.
