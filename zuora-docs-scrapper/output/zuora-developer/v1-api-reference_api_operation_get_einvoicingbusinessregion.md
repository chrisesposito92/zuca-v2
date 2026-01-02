---
title: "GET EInvoicingBusinessRegion"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_EInvoicingBusinessRegion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:57:09.760Z"
---

## Retrieve an e-invoicing business region

Retrieves information about an e-invoicing business region.

You can search for an e-invoicing business region by key. The key can be the unique ID or number of an e-invoicing business region.

**Note**: This operation is available only if you have the [E-Invoicing](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature in **Early Adopter** phase enabled.

Security**bearerAuth**

Request

##### path Parameters

| keyrequired | stringThe unqiue ID or number of the e-invoicing business region that you want to retrieve information about. |
| --- | --- |

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

get/v1/einvoice/business-regions/{key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/einvoice/business-regions/{key}' \\
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

`[

-   {

    -   "id": "8ad083528ee62fe1018eea6c5dd11e01",

    -   "country": "AU",

    -   "businessName": "Avalara Inc.",

    -   "businessNumber": "74004085818",

    -   "businessNumberSchemeId": "0151",

    -   "tradeName": "Test trade",

    -   "endpointId": "74004085818",

    -   "endpointSchemeId": "0151",

    -   "taxRegisterNumber": "1577240348",

    -   "state": "",

    -   "city": "",

    -   "postalCode": "",

    -   "addressLine1": "",

    -   "addressLine2": "",

    -   "contactName": "",

    -   "phoneNumber": "",

    -   "email": "",

    -   "serviceProviderId": "8ad093788ea359ca018ea75fb12a6348",

    -   "businessRegionNumber": "EIBR-00000010",

    -   "digitalSignatureEnable": "false",

    -   "digitalSignatureBoxEnable": "false",

    -   "digitalSignatureBoxPosX": "0",

    -   "digitalSignatureBoxPosY": "0",

    -   "responseMapping": "{}",

    -   "processType": "PEPPOLNetwork",

    -   "invoiceEnabled": "true",

    -   "creditMemoEnabled": "true",

    -   "debitMemoEnabled": "true",

    -   "invoiceFilters": "null",

    -   "creditMemoFilters": "null",

    -   "debitMemoFilters": "null",

    -   "fileFormat": {

        -   "B2B": [

            -   "XML"


            ],

        -   "B2C": [

            -   ""


            ],

        -   "B2G": [

            -   "XML"


            ]


        }


    }


]`
