---
title: "Retrieve: AQuA Query"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-aqua-query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:45.871Z"
---

# Retrieve: AQuA Query

This reference describes the Retrieve: AQuA Query task.

This task exports data from your Zuora data source as the result of executing AQuA queries and based on the conditions you define. The exported data is saved in a CSV file and available for use by subsequent tasks. This task does not work with the iterate task.

To create an AQuA query task, select the data object and fields to retrieve and add the fields to the aggregation list. You can reorder the fields in the list and assign the aggregation function.

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, the following objects are not available:

-   InvoicePayment

-   RefundInvoicePayment

-   InvoiceItemAdjustment

-   CreditBalanceAdjustment

-   InvoiceAdjustment


## Difference between Export and Query

Both the export and query tasks can be used for data retrieval.

The export task, such as this Retrieve: AQuA Query task, retrieves data asynchronously. It initiates the request and checks the status of the data retrieval process later. When the status indicates that all data is retrieved, it exports the data in a CSV file. The export task does not have a limit on the amount of data entries in the result. You can select multiple data objects to export data from.

The query task retrieves data synchronously. It initiates the request and waits for the data to be returned. The maximum amount of data entries in a query task is 2000. You can only select one data object to query data from.

If your workflow requires synchronous data retrieval or runs multiple times per minute, consider using the [Object Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query) task. Frequent export requests may degrade the performance significantly.
