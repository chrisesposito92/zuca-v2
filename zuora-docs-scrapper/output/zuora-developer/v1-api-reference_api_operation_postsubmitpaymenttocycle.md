---
title: "PostSubmitPaymentToCycle"
url: "https://developer.zuora.com/v1-api-reference/api/operation/postSubmitPaymentToCycle/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:09.130Z"
---

## Submit a payment to retry cycle

This API request submits a failed payment to the Configurable Payment Retry retry cycle. The request adds the failed payment to the existing CPR retry cycle. If no CPR retry cycle exists, this request creates a new one and adds the failed payment.

Security**basicAuth**

Request

##### Request Body schema: application/json

| payment_id | stringID of a failed payment. |
| --- | --- |

Responses

200

post/api/v1/payments/submit\_failed\_payment

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "payment_id": "2c92c0867849d42301784bc9ce806c31"


}`

Response samples

-   200

application/json

Copy

`{

-   "success": true,

-   "message": "Payment entered into retry process"


}`
