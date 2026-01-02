---
title: "POST CreateEInvoiceFileTemplate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateEInvoiceFileTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:07.127Z"
---

## Create an e-invoice file template

Creates an e-invoice file templates for your billing documents, including invoices, credit memos, and debit memos.

Zuora provides default e-invoice file templates, so you can just customize them as needed. For example, some country specific fields like HSN (Harmonized System of Nomenclature) might be stored on product rate plan charges.

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

| contentrequired | stringThe content of the e-invoice file template, which must be encoded in Base64 format. |
| --- | --- |
| countryrequired | stringThe short name of a country or region where you must comply with e-invoicing requirements. For example, IN for India. For the full list of country names and codes, see View countries or regions. |
| documentTyperequired | stringThe type of billing documents, which the e-invoice file template is intended for.Enum: "Invoice" "CreditMemo" "DebitMemo" |
| namerequired | string <= 255 charactersThe name of the e-invoice file template. |
| providerrequired | stringThe name of an e-invoicing service provider that assists in generating e-invoice files.Value: "Sovos" |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/einvoice/templates

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "content": "base64 encoded content",

-   "country": "IN",

-   "documentType": "Invoice",

-   "name": "Sovos e-invoice service",

-   "provider": "Sovos"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "content": "base64 encoded content",

-   "country": "IN",

-   "documentType": "Invoice",

-   "id": "4028818484f483d20184f5006b97003f",

-   "name": "Sovos e-invoice service",

-   "provider": "Sovos",

-   "success": true,

-   "templateNumber": "EITEMP-00000003"


}`
