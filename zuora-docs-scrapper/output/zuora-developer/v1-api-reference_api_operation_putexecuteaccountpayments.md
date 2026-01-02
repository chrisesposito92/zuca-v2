---
title: "PutExecuteAccountPayments"
url: "https://developer.zuora.com/v1-api-reference/api/operation/putExecuteAccountPayments/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:43.849Z"
---

## Execute the account payments

For all active retry cycles associated with an account, schedules the next payment retry attempt to occur in the next hourly payment processor run.

Security**basicAuth**

Request

##### path Parameters

| account_idrequired | stringID of an account. |
| --- | --- |

Responses

200

put/api/v1/payments/execute\_account\_payments/{account\_id}

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/execute\_account\_payments/{account\_id}'

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs enqueued for processing: [310, 311, 312]"


}`
