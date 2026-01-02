---
title: "PUT VerifyPaymentMethods"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_VerifyPaymentMethods/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:04.457Z"
---

## Verify a payment method

Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.

Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.

If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.

Security**bearerAuth**

Request

##### path Parameters

| payment-method-idrequired | stringThe ID of the payment method to be verified. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| currencyCode | stringThe currency used for payment method authorization. |
| --- | --- |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts. |
| paymentGatewayName | stringThe name of the payment gateway instance.If Payment Gateway Routing is enabled:If this field is not specified, gateway routing rules will be invoked.If this field is specified, the specified gateway will be used to verify the payment.If Payment Gateway Routing is disabled:If this field is not specified, the default payment gateway will be used to verify the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant.If this field is specified, the specified gateway will be used to verify the payment. |
| securityCode | stringThe CVV or CVV2 security code for the credit card or debit card. To ensure PCI compliance, the value of this field is not stored and cannot be queried. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/payment-methods/{payment-method-id}/verify

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "securityCode": "737"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "paymentMethodId": "402890765d9ce329015da18034ee0057",

-   "success": true


}`
