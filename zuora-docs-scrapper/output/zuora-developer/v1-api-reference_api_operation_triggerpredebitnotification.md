---
title: "TriggerPreDebitNotification"
url: "https://developer.zuora.com/v1-api-reference/api/operation/triggerPreDebitNotification/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:05.312Z"
---

## Trigger a pre-debit notification

To support processing recurring UPI payments through Adyen Integration v2.0, a pre-debit notification for each posted invoice must be sent to the UPI users before collecting the recurring payments. Use this operation to send pre-debit notification requests to the gateway for invoices that meet the requirements. See [Implement UPI on Adyen Integration v2.0](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Supported_payment_gateways/Adyen_Payment_Gateway/I1_Implement_UPI_on_Adyen_Integration_v2.0#Recurring_payments_flow) for more information.

Before using this operation, ensure the following prerequisites are met:

-   [Support for UPI transactions on Adyen](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Supported_payment_gateways/Adyen_Payment_Gateway/I1_Implement_UPI_on_Adyen_Integration_v2.0) has been enabled. This is a feature that can be requested through the Specialized Payment Connections service at an additional cost.
-   Ensure the [conditions for triggering pre-debit notification requests](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Supported_payment_gateways/Adyen_Payment_Gateway/I1_Implement_UPI_on_Adyen_Integration_v2.0#Recurring_payments_flow) are met.

Security**bearerAuth**

Request

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

| invoiceKeyrequired | stringThe unique identifier for an invoice. It can be either a UUIDsuch as 2c92c8955bd63cc1015bd7c151af0000, or an invoice numbersuch as INV-0000001. |
| --- | --- |
| paymentGatewayId | stringThe ID of the payment gateway used to process the payment, such as 8ad08aef83d0c3000183d4b5a2d51933.If it is not provided, the ID of the default payment gateway is used. |
| paymentMethodId | stringThe ID of the payment method used for the payment, such as 4ad08aef83d0c30102183d4b5a2d51733.If it is not provided, the ID of the default payment method is used. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-gateways/pre-debit-notification

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "invoiceKey": "c2289d0a8d3af0f2018d3b2b1fd00000",

-   "paymentGatewayId": "80289d0a8d3af0f2018d3b1b8b800000",

-   "paymentMethodId": "40289d0a8d3af0f2018d3b2b1fd00000"


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

`{

-   "success": true,

-   "invoiceId": "c2289d0a8d3af0f2018d3b2b1fd00000",

-   "paymentMethodId": "40289d0a8d3af0f2018d3b2b1fd00000",

-   "gatewayId": "80289d0a8d3af0f2018d3b1b8b800000",

-   "gatewayType": "Adyen",

-   "gatewayVersion": "2",

-   "notificationReferenceId": "40289d0a8d3af0f2018d3b2b1fd00000",

-   "secondNotificationReferenceId": null,

-   "thirdNotificationReferenceId": null,

-   "extraParameters": null


}`
