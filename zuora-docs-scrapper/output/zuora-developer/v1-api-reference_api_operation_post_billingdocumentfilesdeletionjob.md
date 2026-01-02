---
title: "POST BillingDocumentFilesDeletionJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_BillingDocumentFilesDeletionJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:53:22.423Z"
---

## Create a job to hard delete billing document files

Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts.

After the deletion job is completed, all billing document PDF files are permanently deleted. To retrieve the status of a deletion job, call [Retrieve a job of hard deleting billing document files](https://developer.zuora.com/api-references/api/operation/GET_BillingDocumentFilesDeletionJob).

**Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled.

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

| accountIds | Array of stringsContainer for the IDs of the accounts that you want to create the billing document files deletion job for.Note: When creating jobs to delete billing document PDF files, you must specify either set of accountIds or accountKeys in the request body. |
| --- | --- |
| accountKeys | Array of stringsContainer for the IDs and/or numbers of the accounts that you want to create the billing document files deletion job for.Note: When creating jobs to delete billing document PDF files, you must specify either set of accountIds or accountKeys in the request body. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/accounts/billing-documents/files/deletion-jobs

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountIds": [

    -   "4028905558b483220158b48983dd0015",

    -   "6028905558b483220158b68983dd0016"


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "2c92c8f83dc4f752013dc72c24ee016c",

-   "status": "Pending",

-   "success": true


}`
