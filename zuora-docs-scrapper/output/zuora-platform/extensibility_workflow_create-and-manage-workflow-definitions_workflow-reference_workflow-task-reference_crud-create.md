---
title: "CRUD: Create"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/crud-create"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:56.168Z"
---

# CRUD: Create

This reference describes the CRUD: Create task.

The Create task creates a record of a Zuora object (such as product or subscription) in your tenant.

To find out the data objects available for create operations and the required fields for a data object, refer to the [API Reference](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTcreate/).

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is enabled, the following objects are not available for this task:

-   InvoicePayment

-   RefundInvoicePayment

-   InvoiceItemAdjustment

-   CreditBalanceAdjustment

-   InvoiceAdjustment


## Task Settings

You need to select a Zuora object from the list, add data fields, and specify values for the data fields. Required fields for common objects are auto-populated in the window.

## Limitation

The CRUD: Create task does not support processing objects in batches.
