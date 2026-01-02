---
title: "POST PaymentMethodsDecryption"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_PaymentMethodsDecryption/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:03.970Z"
---

## Create an Apple Pay payment method

The decryption API endpoint can conditionally perform 4 tasks in one atomic call:

-   Decrypt Apple Pay Payment token
-   Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
-   Create a stored credential profile within the Apple Pay payment method
-   Process Payment on a specified Invoice (optional)

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

| accountID | stringThe ID of the customer account associated with this payment method. To create an orphan payment method that is not associated with any customer account, you can skip this field. As soon as the account information is available, associate the payment method with an account through the Update a payment method operation. |
| --- | --- |
| cardHolderInfo | object (CardHolderInfo)The container for the cardholder information.The cardholder name is required for credit card validation. It is strongly recommended to specify the nested cardHolderName field in this container. For more information, see cardHolderName.The required cardholder address fields vary by gateway. It is strongly recommended to review the gateway's documentation for the most accurate and up-to-date information. |
| integrationTyperequired | stringField to identify the token decryption type.Note: The only value at this time is ApplePay. |
| invoiceId | stringThe id of invoice this payment will apply to.Note: When processPayment is true, this field is required. Only one invoice can be paid; for scenarios where you want to pay for multiple invoices, set processPayment to false and call payment API separately. |
| merchantIDrequired | stringThe Merchant ID that was configured for use with Apple Pay in the Apple iOS Developer Center. |
| mitConsentAgreementSrc | stringThis field is only available for the following gateway integrations to create stored credential profiles within payment methods:Chase Paymentech Orbital GatewayCyberSource Payment API v2.0Stripe v2Vantiv (Now Worldpay)Worldpay 1.4Specify how the consent agreement has been established with the customer. The allowed value is External. It is required if the mitProfileAction field is specified. If you do not specify the mitProfileAction field, Zuora will automatically create a stored credential profile for the payment method, with the default value External set to this field.Value: "External" |
| mitProfileAction | stringThis field is only available for the following gateway integrations to create stored credential profiles within payment methods:Chase Paymentech Orbital GatewayCyberSource Payment API v2.0Stripe v2Vantiv (Now Worldpay)Worldpay 1.4Specify either of the following values in this field:Activate - Use this value if you are creating the stored credential profile after receiving the customer's consent.Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be Active. If the CIT does not succeed, Zuora will not create a stored credential profile.If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be Agreed.Persist - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be Active.If you do not specify this field, Zuora will automatically create a stored credential profile for the payment method, with the default value Activate set to this field.Enum: "Activate" "Persist" |
| mitProfileType | stringThis field is only available for the following gateway integrations to create stored credential profiles within payment methods:Chase Paymentech Orbital GatewayCyberSource Payment API v2.0Stripe v2Vantiv (Now Worldpay)Worldpay 1.4This field indicates the type of the stored credential profile to process recurring or unsecheduled transactions. It is required if the mitProfileAction field is specified. If you do not specify the mitProfileAction field, Zuora will automatically create a stored credential profile for the payment method, with the default value Recurring set to this field.Enum: "Recurring" "Unscheduled" |
| paymentGateway | stringThe label name of the gateway instance configured in Zuora that will be used for payment method validation and payment processing.When processPayment is true, this paymentGateway field is required.When processPayment is false or is not provided, the specified gateway instance will be used for payment method validation.Specify a valid gateway instance and it must support the Apple Pay payment method. If not specified, the default gateway of your Zuora customer account will be used. |
| paymentTokenrequired | objectThe payload with the Apple Pay token or payment data. |
| processPayment | booleanA boolean flag to control whether a payment should be processed after creating payment method. The payment amount will be equivalent to the amount the merchant supplied in the ApplePay session. Default is false.If this field is set to true, you must specify the paymentGateway field with the payment gateway instance name.If this field is set to false:You must select the Verify new credit card check box on the gateway instance settings page. Otherwise, the cryptogram will not be sent to the gateway.A separate subscribe or payment API call is required after this payment method creation call. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-methods/decryption

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountID": "402891a25a02e11c015a02f3c6100003",

-   "cardHolderInfo": {

    -   "cardHolderName": "Amy Lawrence",

    -   "addressLine1": "101 Redwood Shores Parkway",

    -   "city": "Redwood City",

    -   "country": "USA"


    },

-   "integrationType": "ApplePay",

-   "invoiceId": "INV000000005",

-   "merchantID": "merchant.US.com.zuora.services001",

-   "mitConsentAgreementSrc": "External",

-   "mitProfileAction": "Activate",

-   "mitProfileType": "Recurring",

-   "paymentGateway": "CyberSourceOPG",

-   "paymentToken": {

    -   "data": "xGc......JDxuYz1gug0KZRrGXJQ=",

    -   "header": {

        -   "ephemeralPublicKey": "MFkwEw......TMbLoojKBA==",

        -   "publicKeyHash": "HuLvfqvLon......9jEyX0w=",

        -   "transactionId": "abbadd18818baea1f37b40844c9e09afa9733b0eccb373905b811da43cf1753b"


        },

    -   "signature": "MIAGCSqGSIb......AEtrLSv7hE9gAAAAAAAA==",

    -   "version": "EC_v1"


    },

-   "processPayment": true


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "paymentMethodId": "2c92c8f83dcbd8b1013dcce1d6a600ce",

-   "success": true


}`
