---
title: "Manual: Approval - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/manual-approval/manual-approval---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-20T17:50:36.543Z"
---

# Manual: Approval - Task settings

Use this reference to understand the task settings of the Manual: Approval task.

After you enter the task name, configure the following tabs:

-   [Delivery](#reference-8115__workflow-approval-delivery)

-   [Approvers](#reference-8115__workflow-approval-approvers)


After the workflow is successfully run, you can approve or reject the workflow in any of the following methods:

-   You can open the workflow run history and approve or reject the workflow task. For more information, see [Approve or reject approval tasks in Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/approve-or-reject-approval-tasks-in-workflow).

-   You can approve the workflow task from the email you receive after configuring the email ID in the Approvers tab.


## Delivery tab

In the Delivery tab, you can select the mode to send the approval notification, such as Zuora Inbox , Email , Slack , Webex , or Teams . You can also click the Also Send to Zuora Inbox toggle icon to send the notification to the Zuora Inbox and add an approval note in the Approval Note (Optional) field.

-   Zuora Inbox \- Allows you to manage approvals in one dedicated UI interface as opposed to several different locations in the Workflow application.

-   Email - Allows managing approval trigger requests directly through email. Under the Body section, you must include the Approval and Reject field tags in the body of the email. Approval and reject tags are the icon with links enabling you to approve or reject the workflow in the email you receive.

-   Slack , Webex , and Teams - Sends approval requests through the collaboration tools.


![Delivery tab of Approval task](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d7a2a0c6-4cb7-41cf-bb33-026a0ed59b0a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ3YTJhMGM2LTRjYjctNDFjZi1iYjMzLTAyNmEwZWQ1OWIwYSIsImV4cCI6MTc3MTY5NjIyOSwianRpIjoiNzExZDZkNzE4ZjQ5NDRmMGEzZjM5MjhmOGU1MzZlMjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.cW0tZU5SJWKV9-tr9O0WpT_sjQhuicIXrfJVM4vj9WQ)

## Approvers tab

The Approvers tab enables you to specify the usernames and emails of the approvers.

You can add one or multiple approvers' usernames and emails manually or by uploading CSV files.
