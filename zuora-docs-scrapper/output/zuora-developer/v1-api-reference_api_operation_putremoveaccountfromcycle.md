---
title: "PutRemoveAccountFromCycle"
url: "https://developer.zuora.com/v1-api-reference/api/operation/putRemoveAccountFromCycle/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.959Z"
---

## Remove an account from retry cycle

Stops any active retry cycles associated with the account provided.

Security**basicAuth**

Request

##### path Parameters

| account_idrequired | stringID of an account. |
| --- | --- |

Responses

200

put/api/v1/payments/remove\_account\_from\_retry\_cycle/{account\_id}

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/remove\_account\_from\_retry\_cycle/{account\_id}'

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs have been removed from the retry cycle: [310, 311, 312]"


}`
