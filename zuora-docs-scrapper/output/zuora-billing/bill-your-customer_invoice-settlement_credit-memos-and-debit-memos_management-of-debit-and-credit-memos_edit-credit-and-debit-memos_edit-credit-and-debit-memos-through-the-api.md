---
title: "Edit credit and debit memos through the API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/edit-credit-and-debit-memos/edit-credit-and-debit-memos-through-the-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:22.676Z"
---

# Edit credit and debit memos through the API

Learn how to edit credit and debit memos through the API

To edit a credit or debit memo commonly, see [Update a credit memo](https://www.zuora.com/developer/api-references/api/operation/PUT_UpdateCreditMemo) and [Update a debit memo](https://www.zuora.com/developer/api-references/api/operation/PUT_DebitMemo).

This section specifically introduces how to create and delete a credit memo item when editing a draft standalone credit memo. The operations on draft standalone debit memos are similar.

## Create and add credit memo items of draft standalone credit memos

To create and add a credit memo item to a draft standalone credit memo based on an existing product rate plan charge through the "Update a credit memo" operation, perform the following steps:

1.  Determine the mandatory fields that you need for creating and adding a credit memo item, including:
    -   Path parameter: `creditMemoKey`
    -   Request fields:
        -   `amount`
        -   `productRatePlanChargeId`
2.  Use the "Update a credit memo" operation to create and add a credit memo item to a draft standalone credit memo.

| Request | PUT /v1/credit-memos/{creditMemoKey} |
| --- | --- |
| Request body | { "items": [ { "amount": 10, "productRatePlanChargeId": "8ad097b4909708e001909b41bb085d38" } ] } |

## Delete credit memo items of draft standalone credit memos

To delete a credit memo item of a draft standalone credit memo through the "Update a credit memo" operation, perform the following steps:

1.  Determine the mandatory fields that you need for deleting a credit memo item, including:
    -   Path parameter: `creditMemoKey`
    -   Request fields:
        -   `id`
        -   `delete`
2.  Use the "Update a credit memo" operation to delete a credit memo item from a draft standalone credit memo.

The following sample API request deletes a credit memo item from a draft standalone credit memo:

| Request | PUT /v1/credit-memos/{creditMemoKey} |
| --- | --- |
| Request body | { "items": [ { "id": "8ad097b4909708e001909b41bb085d38", "delete": true } ] } |
