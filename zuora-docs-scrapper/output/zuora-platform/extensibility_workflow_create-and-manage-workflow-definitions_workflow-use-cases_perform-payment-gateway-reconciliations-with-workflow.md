---
title: "Perform payment gateway reconciliations with Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/perform-payment-gateway-reconciliations-with-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:39.558Z"
---

# Perform payment gateway reconciliations with Workflow

Learn how to perform payment gateway reconciliation using Workflow.

If you want to perform payment gateway reconciliation on your own, instead of using the gateway reconciliation feature in Zuora, you can create a workflow to automate the process. In this topic, we'll show you how to create a workflow for payment gateway reconciliation.

## Workflow overview

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9316c770-4285-4952-964e-94d5c83b0d79?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkzMTZjNzcwLTQyODUtNDk1Mi05NjRlLTk0ZDVjODNiMGQ3OSIsImV4cCI6MTc2NjY0MDc1NywianRpIjoiZjJmMWVmZWJjMDY5NDkzZTg2ODg2ZjVkMTFjM2VjZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rsu0PUid6NGS--ly-B-dOSaY2Oe7N9iwDtXol0Nv2wM)

The workflow consists of 9 tasks.

1.  [Export](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export): Exports unsettled payments older than X days.

2.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates records in the report.

3.  [Object Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): For each record, retrieves the corresponding payment ID in Zuora. The transaction ID in the record is expected to match a reference ID in the payment object.

4.  [If](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-if): For each record, determines whether the corresponding payment is retrieved.

5.  [Case](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-case): If the payment is retrieved, defines three cases for the three payment statuses and adds one additional case for the else condition. If a reason code does not meet any of the three cases, then an email will be sent to people who should know about it.

6.  [Gateway reconciliation](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/payment-gateway-reconciliation): Two reconciliation tasks for two actions (Settle and Reject). For Reject actions, refunds will be created and the refund objects will be returned in the responses.

7.  [Callout](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout): If the result is false, send a callout notification to notify about the discrepancy.


## Configurations

-   In the download task, use the post-processing options (rename or delete) to avoid a file from being processed twice. See [Download: SFTP](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/download-sftp-download) for details.

-   The gateway reconciliation report should contain a data field that represents different gateway response codes. In the case task, the cases should be defined based on different values of this data field. For example, if the data field for response codes is RecordType, you can specify this data field in the case definition: `{{Data.Download.RecordType}}` The values for the three cases should exactly match the values of the data field.

-   In the email task, you can configure the template to include the merge field for the transaction ID or reference ID of the record, to help people determine the reason for the failure or mismatch.

-   Configure the workflow to run at the same frequency (for example, daily) as the gateway reconciliation reports.


## Customizations

-   The gateway reconciliation report can also be from a direct file input.

-   If the gateway responses are in groups and each group starts with the same character combination (for example, ST for the Settled group), you can use regular expressions to associate a group with a reconciliation action. For example, you can use `[ST].+` to refer to all response codes that start with ST.
