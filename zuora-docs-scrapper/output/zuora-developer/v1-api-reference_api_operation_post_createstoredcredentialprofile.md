---
title: "POST CreateStoredCredentialProfile"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateStoredCredentialProfile/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:57.301Z"
---

## Create a stored credential profile

Creates a stored credential profile within a payment method.

The stored credential profile represents a consent agreement that you have established with a customer. When you use the payment method in a transaction, Zuora may include information from the stored credential profile to inform the payment processor that the transaction is related to your pre-existing consent agreement with the customer.

Security**bearerAuth**

Request

##### path Parameters

| payment-method-idrequired | stringID of a payment method. |
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

| action | stringSpecifies how Zuora activates the stored credential profile. Only applicable if you set the status field to Active.Activate (default) - Use this value if you are creating the stored credential profile after receiving the customer's consent.Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be Active. If the CIT does not succeed, Zuora will not create a stored credential profile.If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be Agreed.Persist - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be Active.Enum: "Activate" "Persist" |
| --- | --- |
| agreedOn | string <date>The date on which the profile is agreed. The date format is yyyy-mm-dd. |
| authGateway | stringSpecifies the ID of the payment gateway that Zuora will use when activating the stored credential profile. |
| cardSecurityCode | stringThe security code of the credit card. |
| consentAgreementRef | string <= 128 charactersSpecifies your reference for the consent agreement that you have established with the customer. |
| consentAgreementSrcrequired | stringSpecifies how the consent agreement has been established with the customer. The allowed value is External.Value: "External" |
| networkTransactionId | string <= 128 charactersThe ID of a network transaction. Only applicable if you set the action field to Persist. |
| statusrequired | stringSpecifies the status of the stored credential profile.Active - Use this value if you are creating the stored credential profile after receiving the customer's consent, or if the stored credential profile represents a stored credential profile in an external system.You can use the action field to specify how Zuora activates the stored credential profile.Agreed - Use this value if you are migrating the payment method to the stored credential transaction framework.In this case, Zuora will not send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile.Enum: "Agreed" "Active" |
| typerequired | stringIndicates the type of the stored credential profile to process recurring or unsecheduled transactions.Enum: "Recurring" "Unscheduled" |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-methods/{payment-method-id}/profiles

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "authGateway": "4028905f5702783601570291e14c0015",

-   "consentAgreementRef": "ACCT1338AgreementV1.pdf",

-   "consentAgreementSrc": "External",

-   "status": "Active",

-   "type": "Recurring"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "number": 3,

-   "paymentMethodId": "402881836953a3c7016953aec290000d",

-   "success": true


}`
