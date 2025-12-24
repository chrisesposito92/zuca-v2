---
title: "Apply late fees to accounts with overdue invoices process flow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/apply-late-fees-to-accounts-with-overdue-invoices-process-flow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:21.656Z"
---

# Apply late fees to accounts with overdue invoices process flow

In this tutorial, we'll use a workflow template to apply a $5 late fee to the subscription for each account that has an invoice overdue for more than 5 days.

It can be a tedious and error-prone process to apply late fees to multiple accounts with overdue invoices. Normally you need to complete these tasks every time you need to apply late fees:

1.  Find out invoices that are overdue for a certain amount of days.

2.  For each qualified invoice:

    1.  Locate the subscription.

    2.  Add an amendment to the subscription. This amendment adds the late-fee rate plan to the subscription.

    3.  Notify the account about the late fee charge in the upcoming invoice.


Zuora Workflow provides a template that automates the whole process. The full name of this template is Apply Late Fee to all Subscriptions for Accounts > 10 Days Overdue Limit 1. It is one of the many pre-installed workflows on every tenant.

Note:

Zuora recommends that you perform the tasks in this tutorial in the Sandbox environment to avoid changes to production data when you are still testing the workflow.

When the workflow has been tested and is ready for actual use, create a copy of the workflow in the Production environment. For details, see [Export and import a workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/export-and-import-a-workflow)

The process steps include:

1.  [Create a rate plan for late fees](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/create-a-rate-plan-for-late-fees)

2.  [Configure the task parameters of the workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/configure-task-parameters-of-the-workflow)

3.  [Configure the workflow to run on a schedule](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/configure-the-workflow-to-run-on-a-schedule)
