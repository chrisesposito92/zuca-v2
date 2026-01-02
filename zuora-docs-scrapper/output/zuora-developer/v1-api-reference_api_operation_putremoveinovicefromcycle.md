---
title: "PutRemoveInoviceFromCycle"
url: "https://developer.zuora.com/v1-api-reference/api/operation/putRemoveInoviceFromCycle/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.657Z"
---

## Remove an invoice from retry cycle

Stops any active retry cycles associated with the invoice provided.

Security**basicAuth**

Request

##### path Parameters

| invoice_idrequired | stringID of an invoice. |
| --- | --- |

Responses

200

put/api/v1/payments/remove\_invoice\_from\_retry\_cycle/{invoice\_id}

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/remove\_invoice\_from\_retry\_cycle/{invoice\_id}'

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs have been removed from the retry cycle: [290, 291]"


}`
