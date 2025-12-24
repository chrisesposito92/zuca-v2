---
title: "Process a large number of refunds"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/process-a-large-number-of-refunds"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:41.972Z"
---

# Process a large number of refunds

Learn how to process a large number of refunds using Workflow.

If you need to regularly process a large number of refunds, you can create a workflow to automate the processing logic. In this tutorial, we'll create a workflow to process refunds based on an uploaded list of invoices.

## Exported JSON of the workflow

You can create a copy of the workflow that we introduce in this topic by copying the JSON code in [bulk\_refund\_processing.json](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a96192d5-d066-46df-aef3-5698249b0055?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5NjE5MmQ1LWQwNjYtNDZkZi1hZWYzLTU2OTgyNDliMDA1NSIsImV4cCI6MTc2NjY0MDc2MCwianRpIjoiY2RmZjc0MzMxNmVlNDVjZjg5YzU4MTIwNTIzNTVhMTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qBiUgTbMXAxZkg1b-3MAsW9pPZFtYZ4PmtZOKgLqZMw&response-content-disposition=attachment%3B+filename%3D%22bulk_refund_processing.json%22) and paste it into a blank workflow. Alternatively, you can create a blank workflow and manually add in tasks and configure the settings based on the information in this article.

To learn about how to create a copy of a workflow, see [Create a copy of a Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/export-and-import-a-workflow).

## Prerequisites

-   We assume that you have the list of invoices that you want to refund. The list of invoice IDs and corresponding refund comments are saved into a CSV file.

-   Because we'll use credit memos to process refunds, you need to enable Invoice Settlement for this workflow to run successfully.


## Workflow overview

To start, you need to define an input field for the uploaded file using the following settings.

-   Object: Files

-   Field Name: InvoiceRefund. If you use a different field name, you need to revise the conditions in the queries.

-   Required: Yes

-   Datatype: File-Field


![Bulk refund processing workflow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/654ef8cf-4be8-4271-9c37-2db470544dc0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1NGVmOGNmLTRiZTgtNDI3MS05YzM3LTJkYjQ3MDU0NGRjMCIsImV4cCI6MTc2NjY0MDc2MCwianRpIjoiZTg5OTk0MjdkNDQ2NDM1MGE2YWRkZjhlZDUwZTIxYWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EdIn44sgxQ63X_VNQNvRJ1FF6LYzxhv3XdVF65FOad8)

The workflow consists of 10 tasks. Callout tasks are used to process operations that are related to credit memos.

1.  [Iterate](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-iterate): Iterates the uploaded CSV file of invoices.

2.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): Retrieves Account ID, Amount, Balance, Invoice ID, Invoice Number, and Payment Amount from the Invoice object.

3.  Query: Retrieves Default Payment Method ID from the Account object based on the account ID retrieved in task 2.

4.  Query: Retrieves Payment Method Name from the PaymentMethod object based on the default payment ID retrieved in task 3.

5.  Query: Retrieves Invoice ID, Charge Amount, and Charge ID from the Invoice Item object based on the invoice ID obtained in task 2.

6.  [Callout](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout): Creates a credit memo based on the data obtained from tasks 2 and 5.

7.  Callout: Posts the credit memo that is created in task 6.

8.  Callout: If task 7 succeeds, refunds the credit memo using the data retrieved in tasks 2, 3, and 7.

9.  [If](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-if): If task 7 fails, verifies if the credit memo is still in Draft status by checking the error code returned from task 7.

10.  Callout: If the credit memo is in Draft status, cancels the credit memo.


## Configurations

Please view detailed task configurations in your copy of the workflow. You can customize the settings.

-   If the effective date of the credit memo is not the day when the workflow is run, you can change the value of the effectiveDate to a specific date in the body of the create credit memo task (task 6).

-   If the input field name or the data structure of your CSV file is different, you need to modify the liquid statements in the conditions of the query tasks. For example, we use the following condition in task 2 to find corresponding invoice data. InvoiceNumber = '{{Data.InvoiceRefund.Invoice.InvoiceNumber}}' If your input field for the file is 'Refund' and 'InvoiceNumber' (not Invoice.InvoiceNumber) is the field name in your CSV file, then you need to use this condition instead. InvoiceNumber = '{{Data.Refund.InvoiceNumber}}' This also applies to the refund comment field that is used in the refund credit memo task (task 8).
