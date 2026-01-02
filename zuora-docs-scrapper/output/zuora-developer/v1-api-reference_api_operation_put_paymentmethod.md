---
title: "PUT PaymentMethod"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentMethod/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:04.031Z"
---

## Update a payment method

This operation allows you to update an existing payment method.

The following fields in the request body can be updated for any payment method types:

-   `maxConsecutivePaymentFailures`
-   `paymentRetryWindow`
-   `useDefaultRetryRule`

The following fields in the request body can be updated for any payment method types except for Credit Card Reference Transaction payment methods:

-   `authGateway`
-   `accountHolderInfo`
-   `gatewayOptions`
-   `ipAddress`
-   Custom fields

The following fields in the request body can be updated only for Credit Card payment methods:

-   `expirationMonth`
-   `expirationYear`
-   `securityCode`

The following field in the request body can be updated for Credit Card, Credit Card Reference Transaction, ACH, and Bank Transfer payment methods:

-   `mandateInfo`

Security**bearerAuth**

Request

##### path Parameters

| payment-method-idrequired | stringUnique ID of the payment method to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| accountHolderInfo | object (accountHolderInfo)The account holder information. This field is not supported in updating Credit Card Reference Transaction payment methods. |
| --- | --- |
| accountKey | stringThe customer account ID such as 2x92c0f859b0480f0159d3a4a6ee5bb6 or the customer account number such as A02855638.Note: You can use this field to associate an orphan payment method with a customer account. If a payment method is already associated with a customer account, you cannot change the associated payment method through this operation. You cannot remove the previous account ID and leave this field empty, either. |
| authGateway | stringSpecifies the ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method. This field is not supported in updating Credit Card Reference Transaction payment methods.If Payment Gateway Routing is enabled:If this field is not specified, gateway routing rules will be invoked.If this field is specified, the specified gateway will be used to update the payment.If Payment Gateway Routing is disabled:If this field is not specified, the default payment gateway will be used to update the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant.If this field is specified, the specified gateway will be used to update the payment. |
| currencyCode | stringThe currency used for payment method authorization. |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.This field is not supported in updating Credit Card Reference Transaction payment methods. |
| ipAddress | stringThe IPv4 or IPv6 information of the user when the payment method is created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, Zuora directly passes it to gateways.If the IP address length is beyond 45 characters, a validation error occurs.For validating SEPA payment methods on Stripe v2, this field is required. |
| mandateInfo | objectThe mandate information for the Credit Card, Credit Card Reference Transaction, ACH, or Bank Transfer payment method. |
| processingOptions | objectThe container for payment method processing options. |
| maxConsecutivePaymentFailures | integer or null [ 1 .. 100 ]The maximum number of payment failures allowed for this payment method.This field is only applicable if useDefaultRetryRule is set to false. |
| paymentRetryWindow | integer or null [ 1 .. 1000 ]The retry interval in hours.This field is only applicable if useDefaultRetryRule is set to false. |
| useDefaultRetryRule | booleanSpecifies whether to apply the default retry rule configured for your tenant in the Zuora Payments settings:To use the default retry rule, specify true.To use the custom retry rule specific to this payment method, specify false. |
| expirationMonth | integerOne or two digits expiration month (1-12). |
| expirationYear | integerFour-digit expiration year. |
| securityCode | stringOptional. It is the CVV or CVV2 security code specific for the credit card or debit card. To ensure PCI compliance, this value is not stored and cannot be queried.If securityCode code is not passed in the request payload, this operation only updates related fields in the payload. It does not validate the payment method through the gateway.If securityCode is passed in the request payload, this operation retrieves the credit card information from payload and validates them through the gateway. |
| property name*additional property | anyCustom fields of the payment method. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information.Custom fields are not supported in updating Credit Card Reference Transaction payment methods. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/payment-methods/{payment-method-id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "securityCode": "331"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "2c92c0f86c99b4eb016cae1ee301728f",

-   "success": true


}`
