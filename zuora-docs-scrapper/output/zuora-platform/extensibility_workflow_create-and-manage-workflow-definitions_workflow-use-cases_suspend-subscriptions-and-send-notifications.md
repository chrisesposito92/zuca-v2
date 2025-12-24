---
title: "Suspend subscriptions and send notifications"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/suspend-subscriptions-and-send-notifications"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:43.961Z"
---

# Suspend subscriptions and send notifications

Learn how to suspend subscriptions and send notifications using Workflow.

For unpaid invoices, you may want to suspend the subscriptions and inform subscribers about the changes via text messages or emails. When you receive the payments later, you can resume their subscriptions.

In this topic, we'll cover the workflow for suspending subscriptions and sending notifications. You can also find another use case in [Resuming subscriptions that were previously suspended](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/resume-subscriptions-and-send-notifications).

## Available templates

Collections > Suspend Subscriptions Tied to Unpaid Invoices > 10 Days Limit 1

## Workflow overview

Our workflow will be based on the template. We'll have an additional SMS task.

1.  [Export](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export): Exports subscriptions that are tied to unpaid invoices.

2.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates unique subscriptions.

3.  Suspend: Suspends qualified subscriptions individually.

4.  [SMS](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notification-sms) or [Email](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email): For each subscription, sends a text message or an email about the subscription status change.


## Configurations

-   In the export task, select Mobile Phone from the SoldToContact object if you want to use SMS for notifications. If you want to send notifications via emails, select Work Email instead.

-   Modify the query in the Conditions tab of the export task as necessary. The default query looks for invoices that are overdue for more than 10 days and returns only one result. You need to remove "Limit 1" from the query so that it returns all qualified results. Change 10 to another number that you want to use as the standard for suspending subscriptions.

-   Review the settings in the Suspend task and make necessary changes.

-   Add an SMS or Email task after the Suspend task using the On Success condition. In the task configuration window, select SoldToContact.MobileNumber or SoldToContact.WorkEmail from the list and enter the message you want to send to subscribers. You can use merge fields (for example, Data.Subscription.Id) in the message or email.
