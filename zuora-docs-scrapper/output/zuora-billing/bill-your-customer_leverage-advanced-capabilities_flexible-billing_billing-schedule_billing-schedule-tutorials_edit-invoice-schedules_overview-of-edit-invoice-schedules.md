---
title: "Overview of edit invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/edit-invoice-schedules/overview-of-edit-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:01.670Z"
---

# Overview of edit invoice schedules

The Billing Schedule feature allows you to edit invoice schedules and their items before they are fully processed to meet business requirements.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule is created and before it is fully processed, you can edit the invoice schedule and its schedule items to meet your business requirements.

If you update the run date of an invoice schedule item or delete an invoice schedule item, the next run date of the corresponding invoice schedule is automatically updated to the run date of the next pending invoice schedule item.

To edit an invoice schedule in Pending or Partially Processed status through the REST API, use the Update an invoice schedule operation.

## Prerequisite

You must have the Do Bill Runs For Multiple Accounts permission when editing invoice schedules. Otherwise, the auto-generation of bill runs for the invoice schedules will fail. See Billing Roles for more information.
