---
title: "Configure the workflow to run on a schedule"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/configure-the-workflow-to-run-on-a-schedule"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:29.231Z"
---

# Configure the workflow to run on a schedule

Learn how to configure the workflow to run on a schedule for the Apply late fees tutorial.

This task is only necessary if you want to apply the same amount of late fee for each subscription in the subsequent billing cycles.

1.  Go to the Settings tab of the workflow.
2.  In the Workflow Triggers section, select Scheduled .
3.  Configure the schedule with the scheduler. The schedule should be aligned with your billing cycle. If your billing cycle is monthly, then the schedule should also be monthly.
