---
title: "POST CancelAuthorization"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CancelAuthorization/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:14.302Z"
---

## Cancel authorization

Allows you to cancel an authorization. For gateway integrations that support this operation, see [Delayed Capture](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DB_Delayed_Capture).

Security**bearerAuth**

Request

##### path Parameters

| payment-method-idrequired | stringThe unique ID of the payment method where the authorization is cancelled. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| accountId | stringThe ID of the customer account. |
| --- | --- |
| accountNumber | stringThe number of the customer account. |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts. |
| gatewayOrderIdrequired | stringThe order ID for the specific gateway.The specified order ID will be used in transaction authorization. If you specify an empty value for this field, Zuora will generate an ID and you will have to associate this ID with your order ID by yourself if needed. It is recommended to specify an ID for this field. |
| paymentGatewayId | string or nullThe ID of the payment gateway instance.If this field is specified and it is a Worldline Global Collect gateway, the specified gateway is used.If this field is not specified or is not a Worldline Global Collect gateway, the cancellation operation uses the payment gateway originally used for the authorization. |
| transactionIdrequired | stringThe ID of the transaction. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-methods/{payment-method-id}/voidAuthorize

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "accountId": "402881e861bd8a7e0161c6a453750026",

-   "gatewayOrderId": "A001",

-   "transactionId": "5205213224866613203009"


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

`{

-   "gatewayOrderId": "A001",

-   "resultCode": 0,

-   "resultMessage": "Request ID: 5231719060426316203012",

-   "success": true,

-   "transactionId": "5231719060426316203012"


}`
