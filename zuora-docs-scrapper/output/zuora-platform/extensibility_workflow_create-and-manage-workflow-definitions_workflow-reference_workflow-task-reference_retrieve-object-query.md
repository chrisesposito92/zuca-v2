---
title: "Retrieve: Object Query"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:03.866Z"
---

# Retrieve: Object Query

This reference explains the Retrieve: Object Query task.

This task returns a data array in real time from your Zuora data source based on the conditions you specify.

When you create an object query task, you need to select a data object to query data against, select the data fields that you want to return results for, and specify the conditions for filtering the data.

This task uses standard ZOQL for building queries.

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, the following objects are not available:

-   InvoicePayment

-   RefundInvoicePayment

-   InvoiceItemAdjustment

-   CreditBalanceAdjustment

-   InvoiceAdjustment

-   CreditMemo

-   DebitMemo


Note: For CreditMemo and DebitMemo objects, you can try using Query task or Callout task instead of the Object Query task.

## Difference between Export and Object Query

Both the export and object query tasks can be used for data retrieval.

The export task retrieves data asynchronously. It initiates the request and checks the status of the data retrieval process later. When the status indicates that all data is retrieved, it exports the data in a CSV file. The export task does not have a limit on the amount of data entries in the result. You can select multiple data objects (the main object and the pre-joined objects) to export data from. The export task uses Export ZOQL for building queries.

The object query task retrieves data synchronously. It initiates the request and waits for the data to be returned. The maximum amount of data entries in an object query task is 2000. You can only select one data object to query data from. The query task uses standard ZOQL for building queries.
