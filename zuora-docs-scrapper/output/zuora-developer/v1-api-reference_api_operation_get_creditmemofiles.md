---
title: "GET CreditMemoFiles"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_CreditMemoFiles/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:07.979Z"
---

## List all files of a credit memo

Retrieves the information about all PDF files of a specified credit memo.

Credit Memo PDF files are returned in reverse chronological order by the value of the `versionNumber` field. **Note**: This API only retrieves the PDF files that have been generated. If the latest PDF file is being generated, it will not be included in the response.

Security**bearerAuth**

Request

##### path Parameters

| creditMemoKeyrequired | stringThe unique ID or number of an credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172 or CM00000001. |
| --- | --- |

##### query Parameters

| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| --- | --- |
| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |

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

get/v1/credit-memos/{creditMemoKey}/files

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/credit-memos/{creditMemoKey}/files?pageSize=20&page=1' \\
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

-   "creditMemoFiles": [

    -   {

        -   "id": "8a90a24f8e128020018e12cf610f03f9",

        -   "pdfFileUrl": "/v1/files/8a90a24f8e128020018e12cf610903f8",

        -   "versionNumber": 1709712563443


        },

    -   {

        -   "id": "8a90b5148c6d127b018c6d1e3c6e022e",

        -   "pdfFileUrl": "/v1/files/8a90b5148c6d127b018c6d1e3c68022d",

        -   "versionNumber": 1702637739555


        }


    ],

-   "success": true


}`
