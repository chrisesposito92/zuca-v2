---
title: "GET MassUpdater"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_MassUpdater/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:13:39.206Z"
---

## List all results of a mass action

Describes how to get information about the result of a mass action through the REST API.

Security**bearerAuth**

Request

##### path Parameters

| bulk-keyrequired | stringString of 32 characters that identifies a mass action. You get the bulk-key after performing a mass action through the REST API. |
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

get/v1/bulk/{bulk-key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/bulk/{bulk-key}' \\
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

`{

-   "actionType": "UpdateAccountingCode",

-   "endedOn": "2015-04-07 14:32:01",

-   "errorCount": 1,

-   "inputSize": 354,

-   "outputSize": 350,

-   "outputType": "(url:.csv.zip)",

-   "outputURL": "[https://rest.zuora.com/v1/files/402892c84c9285b1014c9293f5320007](https://rest.zuora.com/v1/files/402892c84c9285b1014c9293f5320007)",

-   "processedCount": 3,

-   "startedOn": "2015-04-07 14:22:11",

-   "status": "Completed",

-   "success": true,

-   "successCount": 2,

-   "totalCount": 3,

-   "uploadedBy": "smith@example.com",

-   "uploadedOn": "2015-04-07 14:22:09"


}`
