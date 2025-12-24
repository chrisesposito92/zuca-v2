---
title: "Cancel a delivery adjustment using the API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-adjustments/delivery-adjustment-cancelation/cancel-a-delivery-adjustment-using-the-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:53.391Z"
---

# Cancel a delivery adjustment using the API

Learn how to cancel a delivery adjustment using the API, ensuring the credit memo is posted and unapplied if necessary.

You can cancel a delivery adjustment only if the credit memo is posted and the entire credit memo amount has not been applied. Otherwise, you need to unapply the entire credit memo amount and ensure the credit memo status is still posted. For more information, see Unapply credit memos from invoices and debit memos .

To cancel a delivery adjustment, perform the following steps:

1.  Retrieve the credit memo number associated with the delivery adjustment through the Retrieve an adjustment operation, using the adjustment ID.
2.  Retrieve the credit memo through the Retrieve a credit memo operation, using the retrieved credit memo number, and verify the credit memo.
3.  Use the Cancel a delivery adjustment operation to cancel the delivery adjustment through the same adjustment ID.

    Note: The `debitMemoCustomFields` field in the following example is optional. It is used for specifying the custom fields of the debit memo that is generated during the cancellation of the adjustment. If you do not want to specify these custom fields, you must at least enter `{ }` in the request body.
    | Request | PUT /v1/adjustments/{adjustmentId}/cancel |
    | --- | --- |
    | Request Body | { "debitMemoCustomFields": { "someField__c": "string" } } |


After your operation, Zuora creates a debit memo whose amount equals the credit memo amount to write off the credit memo, and the result of the cancellation of the delivery adjustment depends on whether the debit memo generation succeeds, as follows:

-   If succeeded, the debit memo status changes to `Posted` . The entire amount of the credit memo is applied to the debit memo, and the credit memo balance changes to 0. Meanwhile, the delivery adjustment status changes to `Cancelled`.

-   If failed, the failure is returned in the response, and the delivery adjustment status remains unchanged, still as `Billed`.
