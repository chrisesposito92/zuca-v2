---
title: "Chargebacks: Write off invoices and cancel subscriptions"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/chargebacks-write-off-invoices-and-cancel-subscriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:31.634Z"
---

# Chargebacks: Write off invoices and cancel subscriptions

Learn how to use Workflow templates to write off invoices and cancel subscriptions.

When chargebacks occur, you may want to write off the invoices and cancel the associated subscriptions. You can use a workflow template to automate the process.

## Available template

Payments > Chargebacks -> Write Off Invoices + Cancel Subscription

## Workflow overview

This workflow consists of six tasks:

1.  [Export](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export): Exports invoices that have chargebacks and positive balances from the Refund Invoice Payment object.

2.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates unique invoices.

3.  [WriteOff](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-writeoff): Writes off the invoices. This task outputs Invoice Item data and appends the data to the workflow payload.

4.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query) : Retrieves the associated subscriptions that are still active.

5.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates unique subscriptions.

6.  [Cancel](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/amendments-cancel): Cancels the subscriptions.


## Configurations

-   If you want the workflow to regularly write off invoices and cancel subscriptions for chargebacks, configure a schedule for the workflow in the settings.

-   If you want to add a notification task (Email or SMS) at the end of the workflow, you need to select necessary BillToContact fields in the Fields tab of the export task.

-   For the second iterate task, ensure that the following settings are used. If any of the settings cannot be configured, remove the iterate task and create a new iterate task.

    -   Object: Subscription

    -   Iteration Type: Unique-Field

    -   Selected Field: Id

-   You can modify specific settings in the write-off and cancel tasks.


## Customizations

You may want to add a notification task ([Email](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email) or [SMS](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notification-sms)) at the end of the workflow to notify accounts of the changes.
