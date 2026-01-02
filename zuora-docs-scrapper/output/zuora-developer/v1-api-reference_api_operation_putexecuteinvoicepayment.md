---
title: "PutExecuteInvoicePayment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/putExecuteInvoicePayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:42.930Z"
---

## Execute the invoice payment

For all active retry cycles associated with an invoice, schedules the next payment retry attempt to occur in the next hourly payment processor run.

Security**basicAuth**

Request

##### path Parameters

| invoice_idrequired | stringID of an invoice. |
| --- | --- |

Responses

200

put/api/v1/payments/execute\_invoice\_payment/{invoice\_id}

Request samples

-   cURL

Copy

curl \-i \-X PUT \\
  \-u <username\>:<password\> \\
  'https://payment-retry.apps.zuora.com/api/v1/payments/execute\_invoice\_payment/{invoice\_id}'

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payments with the following IDs enqueued for processing: [290, 291]"


}`
