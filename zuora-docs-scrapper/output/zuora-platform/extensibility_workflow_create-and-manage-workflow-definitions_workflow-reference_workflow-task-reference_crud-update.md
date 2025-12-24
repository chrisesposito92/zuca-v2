---
title: "CRUD: Update"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/crud-update"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:58.859Z"
---

# CRUD: Update

This reference describes the CRUD: Update task.

The update task updates certain data fields for one or multiple existing records of a Zuora object in your tenant.

To learn about the data objects available for update operations, see the [API Reference](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTupdate/).

If Invoice Settlement is enabled, the following objects are not available for this task:

-   InvoicePayment

-   RefundInvoicePayment

-   InvoiceItemAdjustment

-   CreditBalanceAdjustment

-   InvoiceAdjustment


## Task settings

You need to select the Zuora object that you want to update and specify the ID of the object.

You also need to select the data fields you want to update and specify the desired values or settings for the data fields.

If you want to update multiple records of a Zuora object, you can use an iterate task to iterate the records in data payload, and add an update task subsequent to the iterate task to update the records one by one. Alternatively, you can use the callout task to call the [Update an object](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTupdate/) operation. Multiple records of the same object can be updated in a single callout.
