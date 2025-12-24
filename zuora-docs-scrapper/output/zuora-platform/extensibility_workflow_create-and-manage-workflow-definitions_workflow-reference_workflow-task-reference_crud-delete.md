---
title: "CRUD: Delete"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/crud-delete"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:01.136Z"
---

# CRUD: Delete

This reference describes the CRUD: Delete task.

The delete task deletes an existing record of a Zuora object from your tenant.

To learn about the objects available for delete operations, see the [API Reference](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTdelete/).

If Invoice Settlement is enabled, the following objects are not available for this task.

-   InvoicePayment

-   RefundInvoicePayment

-   InvoiceItemAdjustment

-   CreditBalanceAdjustment

-   InvoiceAdjustment


## Task settings

You need to select the Zuora object that you want to delete, and specify the data field to identify the record.

For example, if you want to delete a subscription, you need to first select Subscription from the object list, and then select Subscription.Id from the Id list. If Subscription.Id is not available in the list, you need to include subscription data in the payload by using an Export or Query task, direct file input, or via callouts.

If you want to delete multiple records of a Zuora object, you can use an iterate task to iterate the records in data payload, and add a delete task subsequent to the iterate task to delete the records on by one. Alternatively, you can use the callout task to call the [Delete an object](https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTdelete/) operation. Multiple records of the same object can be deleted in a single callout.

## Limitation

The CRUD: Delete task does not support processing objects in batches.
