---
title: "POST EInvoicingServiceProvider"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_EInvoicingServiceProvider/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:57:19.006Z"
---

## Create an e-invoicing service provider

Creates an e-invoicing service provider.

**Note**: This operation is available only if you have the [E-Invoicing](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature in **Early Adopter** phase enabled.

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

| companyIdentifier | stringThe identifier of the company used to create a sender system ID, which serves to identify the system where the transactions are sent. |
| --- | --- |
| namerequired | string <= 100 charactersThe name of the e-invoicing service provider. |
| providerrequired | stringThe name of the e-invoicing service provider that can help you generate e-invoice files for billing documents.Enum: "Sovos" "PEPPOL" "Avalara" |
| test | booleanWhether the e-invoicing service provider's configuration is intended for testing.If you set this field to true, requests are directed to the testing integration endpoints.If you set this field to false, requests are directed to the production integration endpoints. |
| apiKey | stringThe API key is used to authenticate the e-invoicing service provider's requests. This field is required for configuring Sovos or Avalara as the service provider. |
| secretKey | stringThe secret key is used to authenticate the e-invoicing service provider's requests. This field is required for configuring Sovos or Avalara as the service provider. |
| use_certificate | booleanDefault: trueThis field is used to indicate whether the clientCertificate, clientCertificateType, and clientCertificatePassord fields need to be supplied in the request.Note: If the flag is true, the TLS endpoint config is enabled. If the flag is false, the Non-TLS config endpoint is enabled. A TLS certificate and password are no longer required for integration with Sovos. Zuora now uses token-based authentication for all supported countries, including India. |
| clientCertificate | string <byte>The client certificate is used to authenticate the e-invoicing service provider's requests, which should be in base64 encoded format. This field is required for configuring Sovos as the service provider. |
| clientCertificateType | stringDefault: "PKCS12"The client certificate type is used to specify the type of the client certificate. This field is required for configuring Sovos as the service provider. |
| clientCertificatePassword | string <password>The client certificate password is the password to protect the client certificate. This field is required for configuring Sovos as the service provider. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/einvoice/service-providers

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "name": "Sovos e-invoice service",

-   "provider": "Sovos",

-   "test": false,

-   "companyIdentifier": "CompanySample1",

-   "apiKey": "ApiKeySample",

-   "secretKey": "SecretKey",

-   "use_certificate": false,

-   "clientCertificate": "U3dhZ2dlciByb2Nrcw==",

-   "clientCertificateType": "PKCS12",

-   "clientCertificatePassword": "ClientCertificatePassword"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "4028948972a2bf990172bc9b27724eef",

-   "name": "Sovos e-invoice service",

-   "provider": "Sovos",

-   "serviceProviderNumber": "EISP-00000001",

-   "test": "false",

-   "companyIdentifier": "CompanySample1",

-   "apiKey": "SampleApiKey",

-   "use_certificate": false,

-   "clientCertificate": "U3dhZ2dlciByb2Nrcw==",

-   "clientCertificateType": "PKCS12"


}`
