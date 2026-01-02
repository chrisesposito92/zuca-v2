---
title: "PostExecutePayments"
url: "https://developer.zuora.com/v1-api-reference/api/operation/postExecutePayments/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.474Z"
---

## Execute payments

For all active retry cycles associated with the invoice, debit memo, and/or account IDs provided, schedules the next payment retry attempt to occur in the next hourly payment processor run.

Security**basicAuth**

Request

##### Request Body schema: application/json

| account_ids | Array of stringsIDs of accounts. |
| --- | --- |
| debit_memo_ids | Array of stringsIDs of debit memos. |
| invoice_ids | Array of stringsIDs of invoices. |

Responses

200

post/api/v1/payments/execute\_payments

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "account_ids": [

    -   "2c92c0f96bd69165016bdcbf55ad5e62"


    ],

-   "invoice_ids": [

    -   "2c92c0fa7853052701785a38c6622473",

    -   "2c92c0fa7849b40a01784bc5de0f760f"


    ],

-   "debit_memo_ids": [

    -   "2c92c0fa7853052701785a38f3bb267f"


    ]


}`

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs enqueued for processing: [100, 101, 110, 111, 121]"


}`
