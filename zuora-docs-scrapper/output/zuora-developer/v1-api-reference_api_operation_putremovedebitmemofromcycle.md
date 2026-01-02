---
title: "PutRemoveDebitMemoFromCycle"
url: "https://developer.zuora.com/v1-api-reference/api/operation/putRemoveDebitMemoFromCycle/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:09.045Z"
---

## Remove a debit memo from retry cycle

Stops any active retry cycles associated with the debit memo provided.

Security**basicAuth**

Request

##### path Parameters

| debit_memo_idrequired | stringID of a debit memo. |
| --- | --- |

Responses

200

put/api/v1/payments/remove\_debit\_memo\_from\_retry\_cycle/{debit\_memo\_id}

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/remove\_debit\_memo\_from\_retry\_cycle/{debit\_memo\_id}'

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs have been removed from the retry cycle: [301]"


}`
