---
title: "POST CreatePaymentSession"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreatePaymentSession/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:27.236Z"
---

## Create a payment session

Use this operation to create a payment session on your server side. The response contains a token for the payment session data.

In addition to the required `accountId` and `currency` fields, you can specify the following fields to define the payment flow mode as one of the following:

-   Create and save a payment method:
    -   `processPayment`: `false`
    -   `storePaymentMethod`: `true`
    -   `amount`
-   Process a one-time payment without saving the payment method:
    -   `processPayment`: `true`
    -   `storePaymentMethod`: `false`
    -   `amount` or `invoices` + `amount`
-   Process the first payment and save the payment method for subsequent recurring payments:
    -   `processPayment`: `true`
    -   `storePaymentMethod`: `true`
    -   `amount` or `invoices` + `amount`

For more information, see the following articles:

-   [Payment Form Implementation Guide](https://developer.zuora.com/docs/get-started/tutorials/payment-form/)
-   [Set up a payment method through JavaScript SDK integration](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B1_Define_Payment_Methods#Set_up_a_payment_method_through_JavaScript_SDK_integration)
-   [Set up Alipay payment methods with Zuora JavaScript SDK](https://knowledgecenter.zuora.com/Zuora_Payments/Manage_payment_gateway_integrations_and_payment_methods/Set_up_payment_gateway_integrations/Alipay_Payment_Gateway/Set_up_Alipay_payment_methods_with_Zuora_JavaScript_SDK)

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

##### Request Body schema: application/json
required

| accountId | stringThe ID of the customer account in Zuora that is associated with this payment method.This field is required when processPayment is set to true. It is optional when processPayment is set to false. |
| --- | --- |
| amountrequired | numberIf processPayment is true, it is the amount of the payment. If invoices is specified, the value of amount must be the current total balances of the specified invoices.If processPayment is false, it is the authorization amount for the payment method. |
| authAmount | numberThe authorization amount for the payment method. Specify a value greater than 0.Note: This field is being deprecated. It is recommended to use the amount field. |
| currencyrequired | stringThe currency of the payment in the format of the three-character ISO currency code. |
| gatewayOptions | object (GatewayOptions)The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts. |
| paymentGateway | stringThe ID of the payment gateway instance configured in Zuora that will process the payment, such as e884322ab8c711edab030242ac120004.If Payment Gateway Routing is enabled:If this field is not specified, gateway routing rules will be invoked.If this field is specified, the specified gateway will be used to process the payment.If Payment Gateway Routing is disabled:If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant.If this field is specified, the specified gateway will be used to process the payment. |
| processPaymentrequired | booleanIndicate whether a payment should be processed after creating the payment method.If this field is set to true, you must specify either the amount field or the invoices and amount fields.If this field is set to false, you must specify the amount field. |
| storePaymentMethod | booleanDefault: truetrue indicates that the payment method will be stored in Zuora and will be used in subsequent recurring payments.false indicates that the payment method will not be stored in Zuora. End-customers need to be brought back on-session to authenticate the payment. |
| invoices | Array of objectsThe array of invoices that a payment applies to. All the specified invoices will be fully paid. The value of the amount field must be the current total balances of the specified invoices.Here is an example:"invoices": [   {     "invoiceNumber": "INV00001274"   },   {     "invoiceNumber": "INV00001278"   } ] |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/web-payments/sessions

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "currency": "USD",

-   "accountId": "402882e98d3a964b018d3a9c99ef0167",

-   "processPayment": true,

-   "storePaymentMethod": true,

-   "paymentGateway": "402883827d097a28017d09b41f690261",

-   "invoices": [

    -   {

        -   "invoiceNumber": "INV00001274"


        },

    -   {

        -   "invoiceNumber": "INV00001278"


        }


    ],

-   "amount": 100


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "token": "LTljuuLaDQnHxeVpWaX6zq2xY2FJ6sSE"


}`
