---
title: "Get DebitMemoPdfStatus"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Get_DebitMemoPdfStatus/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:30.409Z"
---

## Retrieve the PDF file generation status of debit memos

Retrieves the PDF generation statuses of a batch of debit memos.

Security**bearerAuth**

Request

##### query Parameters

| debitMemoKeysrequired | stringThe IDs or numbers of the debit memos separated by commas. For example - ?debitMemoKeys=2c92c8955bd63cc1015bd7c151af02ab,4b65b8605bd63cc1015bd7c151af02cd,DM0000001. A maximum of 50 keys can be entered in this field. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

400

Invalid input

401

Unauthorized

403

Forbidden

500

Internal Server Error

4XX

Request Errors

get/v1/debit-memos/pdf-status

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/debit-memos/pdf-status?debitMemoKeys=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   400
-   401
-   403
-   500
-   4XX

1 more4XX1 more

application/json

Copy

Expand allCollapse all

`{

-   "debitMemoFiles": [

    -   {

        -   "debitMemoId": "402824aa8cc894d5018cc8a120576881",

        -   "debitMemoNumber": "DM00000003",

        -   "pdfGenerationStatus": "Generated",

        -   "createdOn": "2024-01-01 11:32:19",

        -   "updatedOn": "2024-01-01 11:32:19",

        -   "pdfFileUrl": "/v1/files/2c98901f62d7d83d0162d7facea6262d"


        },

    -   {

        -   "debitMemoId": "2c98908a904dfc2601904e6e14090241",

        -   "debitMemoNumber": "DM00000004",

        -   "pdfGenerationStatus": "Error",

        -   "createdOn": "2024-01-02 10:14:13",

        -   "updatedOn": "2024-01-02 10:14:13",

        -   "errorCode": "INVALID_TEMPLATE",

        -   "errorMessage": "Unknown merge filed chargeNumber__c"


        },

    -   {

        -   "debitMemoId": "623935cc6ee105f7341ee1d453809214",

        -   "debitMemoNumber": "DM00000005",

        -   "pdfGenerationStatus": "Pending",

        -   "createdOn": "2024-01-01 11:35:56",

        -   "updatedOn": "2024-01-01 11:35:56"


        }


    ],

-   "success": true


}`
