---
title: "Resume subscriptions and send notifications"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/resume-subscriptions-and-send-notifications"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:46.740Z"
---

# Resume subscriptions and send notifications

Learn how to resume subscriptions and send notifications using Workflow.

After you receive the payments, you can resume subscriptions that are previously suspended. You can use Workflow to automate the process of resuming subscriptions and sending notifications. If this is a frequent use case for you, you can configure the designed workflow to run on a regular basis.

In this topic, we'll cover the workflow for resuming subscriptions and sending notifications. You can also find the workflow use case for [suspending subscriptions and sending notifications](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/suspend-subscriptions-and-send-notifications).

## Available templates

Collections > Resume Subscription for Accounts with Zero Balance Limit 1

## Workflow overview

The workflow consists of four tasks.

-   [Export](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export): Exports subscriptions that are in Suspended status even though the invoices have been paid off.

-   [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates subscriptions.

-   Resume: Resumes subscriptions individually.

-   [SMS](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notification-sms) or [Email](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email): For each subscription, sends a text message or an email to inform the subscriber about the subscription status change.


## Configurations

-   In the export task, select Mobile Phone from the SoldToContact object if you want to use SMS for notifications. If you want to send notifications via emails, select Work Email instead.

-   Modify the query in the Conditions tab of the export task as necessary. The default query returns only one result. You need to remove "Limit 1" from the query so that it returns all qualified results.

-   Review the settings in the Resume task and make necessary changes.

-   Add an SMS or Email task after the Resume task using the On Success condition. In the task configuration window, select SoldToContact.MobileNumber for SMS or SoldToContact.WorkEmail for email, and enter the message you want to send to subscribers. You can use merge fields (for example, Data.Subscription.Id) in the message.
