---
title: "Billing: Invoice Generate"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-invoice-generate"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:57.735Z"
---

# Billing: Invoice Generate

This reference explains the Billing: Invoice Generate task.

The invoice generate task generates an invoice for a specified account. If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, credit memos can be generated as well.

This task is equivalent to the single account mode of the bill run task.

You need to have an upstream task to retrieve the accounts that you want to generate billing document for. If you need to generate billing document for multiple accounts, you need to add an iterate task and place the generate invoice task after the For Each condition.
