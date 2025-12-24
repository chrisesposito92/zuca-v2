---
title: "Logic: Response Formatter"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-response-formatter"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:40.506Z"
---

# Logic: Response Formatter

This reference describes the Logic: Response Formatter task.

The response formatter task can only be used as the final task in a workflow that is designed to be run in the [synchronous mode](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/get-started-with-workflow/run-a-workflow-in-responsive-mode). It transforms the data from the preceding task to a format that is accepted by the downstream system for better integration with Zuora.

Note: The response formatter task is in Limited Availability. If you wish to have access to the task, submit a request at [Zuora Global Support](https://support.zuora.com/).

You can select Liquid or JSONata as the processor for the data transformation.

For example, if the previous task returns the following payload and you only need the invoice data to be passed to your system.

{ "Account": { "Id": "$AccountId", "Name": "Created After Custom Field", "Batch": "Batch1", "CrmId": null, "Currency": "USD", "SalesRepName": null, "AccountNumber": "$AccountNo", "AdditionalEmailAddresses": null }, "Invoice": { "Id": "$InvoiceId", "Amount": 19.73, "Status": "Posted", "Balance": 9.73, "DueDate": "2017-10-31", "InvoiceDate": "2017-10-01", "InvoiceNumber": "$InvoiceNumber" }, "Workflow": { "LastRunDate": "2018-03-18", "ExecutionDate": "2018-03-18", "LastRunDateTime": "2018-03-18T18:26:54", "WorkflowRunUser": "$RunUser", "ExecutionDateTime": "2018-03-18T18:29:36" } }

You can use the following code to extract the invoice data:

For Liquid:

{{Data.Invoice | to\_json}}

For JSONata:

Invoice
