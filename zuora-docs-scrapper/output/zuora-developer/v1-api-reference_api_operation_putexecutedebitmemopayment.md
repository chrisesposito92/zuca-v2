---
title: "PutExecuteDebitMemoPayment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/putExecuteDebitMemoPayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:43.613Z"
---

## Execute the debit memo payment

For all active retry cycles associated with a debit memo, schedules the next payment retry attempt to occur in the next hourly payment processor run.

Security**basicAuth**

Request

##### path Parameters

| debit_memo_idrequired | stringID of a debit memo. |
| --- | --- |

Responses

200

put/api/v1/payments/execute\_debit\_memo\_payment/{debit\_memo\_id}

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/execute\_debit\_memo\_payment/{debit\_memo\_id}'

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs enqueued for processing: [300]"


}`
