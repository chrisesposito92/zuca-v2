---
title: "GetEinvoiceMandates"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getEinvoiceMandates/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:57:43.568Z"
---

## List mandates for downloading files

Fetches mandates for downloading files based on the country code, category, and process type selection. This API operation returns the the list of file formats in which the document can be downloaded.

**Note**: This operation is available only if you have the [E-Invoicing](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature for Avalara in **Early Availabiltiy** phase enabled.

Security**bearerAuth**

Request

##### query Parameters

| countryCode | string2-digit country code.Example: countryCode=AU |
| --- | --- |
| processType | stringThe process type of the e-invoicing business region.If the service provider is Sovos, the process type is Clearance or ClearanceWithCancellation.If the service provider is Avalara, the process type is Clearance or PEPPOLNetwork.If the service provider is PEPPOL, the process type is Unknown.Enum: "Clearance" "ClearanceWithCancellation" "PEPPOLNetwork" "Unknown"Example: processType=PEPPOLNetwork |
| provider | stringThe service provider that is associated with the country and process type.Example: provider=8ad093788ea359ca018ea75fb12a6348 |

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

get/v1/e-invoice/mandates

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/e-invoice/mandates?countryCode=AU&processType=PEPPOLNetwork&provider=8ad093788ea359ca018ea75fb12a6348' \\
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

SuccessValidation Error#1Success

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "countryCode": "AU",

        -   "fileFormats": [

            -   "OASIS_UBL_XML",

            -   "XML"


            ],

        -   "category": "B2B",

        -   "processType": "PEPPOLNetwork",

        -   "defaultFileFormats": "null"


        },

    -   {

        -   "countryCode": "AU",

        -   "fileFormats": [

            -   "OASIS_UBL_XML",

            -   "XML"


            ],

        -   "category": "B2G",

        -   "processType": "PEPPOLNetwork",

        -   "defaultFileFormats": "null"


        }


    ],

-   "success": true


}`
