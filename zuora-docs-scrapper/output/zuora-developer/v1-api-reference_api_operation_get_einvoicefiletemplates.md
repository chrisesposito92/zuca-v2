---
title: "GET EInvoiceFileTemplates"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_EInvoiceFileTemplates/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:57:35.425Z"
---

## List e-invoice file templates

Lists information about e-invoice file templates.

You can query e-invoice file templates by conditions. For example, if your service provider is Sovos, you can use the following example URL to retrieve information about a list of e-invoice file templates for invoices in India: `/v1/einvoice/templates?country=IN&documentType=Invoice&provider=Sovos`

**Note**: This operation is available only if you have the [E-Invoicing](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature in **Early Adopter** phase enabled.

Security**bearerAuth**

Request

##### query Parameters

| countryrequired | stringThe short name of a country or region where you must comply with e-invoicing requirements. For example, IN for India. For the full list of country names and codes, see View countries or regions. |
| --- | --- |
| documentTyperequired | stringThe type of billing documents for which the e-invoice file template is intended.Enum: "Invoice" "CreditMemo" "DebitMemo" |
| providerrequired | stringThe name of the e-invoicing service provider that assists in generating e-invoice files. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/einvoice/templates

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/einvoice/templates?country=string&documentType=Invoice&provider=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "success": true,

-   "templates": [

    -   {

        -   "country": "SA",

        -   "documentType": "Invoice",

        -   "id": "402833ec89d46b390189d51402d937b0",

        -   "name": "EInvoice Template Name",

        -   "provider": "Sovos",

        -   "templateNumber": "EITEMP-00000006"


        },

    -   {

        -   "country": "SA",

        -   "documentType": "CreditMemo",

        -   "id": "402833ec89d46b390189d514030537b2",

        -   "name": "EInvoice Template Name",

        -   "provider": "Sovos",

        -   "templateNumber": "EITEMP-00000008"


        },

    -   {

        -   "country": "SA",

        -   "documentType": "DebitMemo",

        -   "id": "402833ec89d46b390189d514032037b4",

        -   "name": "EInvoice Template Name",

        -   "provider": "Sovos",

        -   "templateNumber": "EITEMP-00000009"


        }


    ]


}`
