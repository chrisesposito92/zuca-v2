---
title: "AuthorizePaymentMethod"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/authorizePaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:45:10.174Z"
---

## Create a payment authorization

Verifies a payment method and block the amount of fund that will be used for payment.

Security**bearerAuth**

Request

##### path Parameters

| payment_method_idrequired | stringPayment Method Id |
| --- | --- |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |

##### Request Body schema: application/json
required

| account_id | stringA customer account identifier. Either account_id or account_number is required. |
| --- | --- |
| account_number | stringA Human-readable customer account identifier. Either account_id or account_number is required. |
| amountrequired | numberAmount to be authorized. |
| gateway_id | stringIdentifier of the payment gateway that Zuora will use to authorize the payments that are made with this payment method. If you do not set this field, Zuora will use one of the following payment gateways instead: The default payment gateway of the customer account that owns the payment method, if the payment method is associated with a customer account or the default payment gateway of your Zuora tenant. |
| gateway_options | objectA hash containing gateway-specific parameters. |
| gateway_order_idrequired | stringA merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead. Gateways check duplicates on the gateway order ID to ensure that the merchant do not accidentally enter the same transaction twice. This ID can also be used to do reconciliation and tie the payment to a natural key in external systems. The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems. When you create a payment for capturing the authorized funds, it is highly recommended to pass in the gateway_order_id that you used when authorizing the funds by using the Create authorization operation, together with the authorization_id field. |
| statement_descriptor | stringA payment gateway-specific field used by Orbital, Vantiv and Verifi. |
| statement_descriptor_phone | stringA payment gateway-specific field used by Orbital, Vantiv and Verifi. |
| mandate | object (AuthorizationMandate) |

Responses

200

Default Response

400

Bad Request

401

Unauthorized

404

Not Found

405

Method Not Allowed

429

Too Many Requests

500

Internal Server Error

502

Bad Gateway

503

Service Unavailable

504

Gateway Timeout

post/payment\_methods/{payment\_method\_id}/authorize

Request samples

-   Payload
-   cURL
-   Java
-   Node

application/json

Copy

`{

-   "amount": 200,

-   "gateway_order_id": "2c92c0f86a8dd422016a941ee0d82c7f",

-   "account_id": "8ad08ccf8437067601843a7af4e75ac8"


}`

Response samples

-   200
-   400
-   401
-   404
-   405
-   429
-   500
-   502
-   503
-   504

5 more4295005025035045 more

application/json

Copy

`{

-   "auth_transaction_id": "string",

-   "gateway_order_id": "string",

-   "state": "approved"


}`
