---
title: "POST RSASignatures"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_RSASignatures/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:13.547Z"
---

## Generate an RSA signature

The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. The POST rsa\_signatures call generates and returns the required digital signature and token for a Payment Pages 2.0 form. You need to pass the generated signature to your client for it to access Payment Pages 2.0.

This REST service should be used only when you implement Payment Pages 2.0.

**Note:** To avoid potential credit card fraud attacks, you should secure your Payment Pages from being accessed by fraudulent users before you issue client-side digital signatures and tokens. See [Manage Token Issuance](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Manage_Token_Issuance) for more information.

**Troubleshooting tip:** After you use this operation to generate an RSA signature, if `signature` returns `null` but `token` is successfully returned, please limit the number of the fields in your request to make sure that the maximum length supported by the RSA signature algorithm is not exceeded. The calculation of the request length is determined by the number of the parameters, and the length of each of the parameter name and its value.

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

| IBAN | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| --- | --- |
| accountId | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| authorizationAmount | numberAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| bankBranchCode | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| bankCheckDigit | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| bankCity | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| bankPostalCode | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| bankStreetName | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| bankStreetNumber | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| businessIdentificationCode | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| cityBlackList | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| cityWhiteList | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| currency | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| deviceSessionId | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| gatewayName | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| id | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| key | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| locale | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| maxConsecutivePaymentFailures | integerAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| methodrequired | stringThe type of the request. Set it to POST. |
| pageIdrequired | stringThe page id of your Payment Pages 2.0 form. Click Show Page Id next to the Payment Page name in the Hosted Page List to retrieve the page id. |
| param_gwOptions_[*option*] | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| param_supportedTypes | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| passthrough[1,2,3,4,5] | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details.Note: Although up to 15 passthrough parameters can be supported when passing in your client parameters, only the first 5 parameters are used for signature generation and validation. |
| paymentGateway | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| paymentRetryWindow | integerAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| pmId | stringAn optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| signature | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| signatureType | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| style | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| submitEnabled | booleanAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| tenantId | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| token | stringAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |
| urirequired | stringThe URL that the Payment Page will be served from.For US Cloud 1 Production environment: Use https://na.zuora.com/apps/PublicHostedPageLite.doFor US Cloud 1 Sandbox environment: Use https://sandbox.na.zuora.com/apps/PublicHostedPageLite.doFor US Cloud 2 Production environment: Use https://www.zuora.com/apps/PublicHostedPageLite.doFor US Cloud 2 API Sandbox environment: Use https://apisandbox.zuora.com/apps/PublicHostedPageLite.doFor US Central Sandbox environment: Use https://test.zuora.com/apps/PublicHostedPageLite.doFor EU Cloud Production environment: Use https://eu.zuora.com/apps/PublicHostedPageLite.doFor EU Cloud Sandbox environment: Use https://sandbox.eu.zuora.com/apps/PublicHostedPageLite.doFor EU Central Sandbox environment: Use https://test.eu.zuora.com/apps/PublicHostedPageLite.do |
| useDefaultRetryRule | booleanAn optional client parameter that can be used for validating client-side HPM parameters. See Client parameters for Payment Pages 2.0 and Validate client-side HPM parameters for details. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/rsa-signatures

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "method": "POST",

-   "pageId": "2c92c0f855e2b4630155ec9e6a1b6eec",

-   "uri": "[https://apisandbox.zuora.com/apps/PublicHostedPageLite.do](https://apisandbox.zuora.com/apps/PublicHostedPageLite.do)"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmWRFTwxQOqaG4JDZSQF/NJWvCDoSXm3TYilNzoN8nBbuvhKa7SZBBS+VP6rFqcbIU38Fu+Rf09vqyYOxuasPJe7yhqeOiStWB/aCPLhwXBeKt37L/qkwpNOKb1FETtUgrc+UjbtT0pnl55wCfi+Ik//X5SQi0B+c0ei1DQv99qmPJJErrhnBtdxeaWAT0EYAo42AOQ5cp0UWDY6OdOYL6+RyFOUFIs1yEgtfg4VMMSpSOKBOhYclQYuSC7nBF5Cc18ydtzsBpf7l49gCLTFzG45NCDAocada8KihFNpGXbauV9V4EPRD4lofaXdsXJ5Tw8/+KCsrUlvIQI3vcEv9LQIDAQAB",

-   "signature": "VpCAFL2hHC2irxbhWYGLJmdBigjARsCStwHZiQ78z5LyVuBCFr2lkie0db/7E8n38MXaq12Ng5As5Qj+9Nhz6RBsSEWLod7c7hvwNI28OcgBZtcV/wscbWU69EP/+/XrQnF3ZUbHbqmcmhE8C/zNnc2zvHckfArroDW2HxxmATfMJS0xKUm5TrHi4tiILZVMYY1KIUqQTyuXV6uRWYzkqMkFkZDNCxSxf0XwzuBI/VOgTCmFZb0c3+bk/q6+7d/azFCrrg8C3dquCNJRfUeaBou+SLUa4TW3hV4rGd2zpvSrD/425x4qFNGV6JQ7wvIleIdrXU4qbh9nCmYoApMODA==",

-   "success": true,

-   "tenantId": "12270",

-   "token": "E2BJEle7YrAlw93SjkaKthTmzMvXF341"


}`
