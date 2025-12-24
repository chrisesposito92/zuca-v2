---
title: "Notify accounts about overdue invoices"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/notify-accounts-about-overdue-invoices"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:36.970Z"
---

# Notify accounts about overdue invoices

Learn how to notify accounts about overdue invoices using Workflow.

If you need to give formal notices to accounts about their overdue invoices, you can use the workflow template Invoice 30 Days Past Due, Account Summary.

We'll describe the functions of the tasks and settings you can customize in this article.

![Workflow invoice 30 days past due template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/651c4fb8-74d4-4935-b157-080a8b2b42f7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1MWM0ZmI4LTc0ZDQtNDkzNS1iMTU3LTA4MGE4YjJiNDJmNyIsImV4cCI6MTc2NjY0MDc1NSwianRpIjoiNmE3YjliOWNiZjAwNGI4OGFkM2UxZjk0MDA5NzI0MGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6_X9NflhU-yvfvthtk_X_NkFZzMXVZZHLxsm9pEvcP4)

## Configurations

1.  [Export](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export): Exports Invoice and Account data that is related to invoices that are overdue for more than 30 days. BillToContact data is retrieved to be used in the email task. The results are sorted in descending order based on the invoice due dates.

2.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Because an account can have multiple overdue invoices, this task iterates unique accounts.

3.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): For each qualified account, this task obtains real-time data about overdue invoices.

4.  [Email](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email): For each qualified account, send an email to the BillToContact.WorkEmail and BillToContact.PersonalEmail about the overdue invoices. The body of the email includes information about each invoice and the total account balance.


## Configurations

-   If you want to send notifications to SoldToContact as well, you need to select the SoldToContact fields in the Fields tab of the export task. You can change 30 to any positive number that suits your requirements in the Conditions tab.

-   You may want to make the following changes to the email task.

    -   Modify "From (Name)" and "Subject", add or modify send-to, BCC and CC emails in the Address tab.

    -   Modify "Your Rep at 000-000-000" near the end of the message to the person in your organization who is handling questions and their number.

    -   Deselect Disable Editor to preview the message.

    -   If you do not want to attach invoices, deselect Attach Invoices to Email in the Attachment tab.

    -   When you are ready to use the workflow in production data, deselect Preview Only in the Address tab.
