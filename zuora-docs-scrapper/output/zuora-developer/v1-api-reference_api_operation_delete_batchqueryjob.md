---
title: "DELETE BatchQueryJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/DELETE_BatchQueryJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:02.449Z"
---

## Cancel a running aggregate query job

Cancels the current AQuA job, only if the job is not complete. If the job is complete, an error is thrown.

Security**bearerAuth**

Request

##### path Parameters

| jobidrequired | stringInternal identifier of the query job. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

delete/v1/batch-query/jobs/{jobid}

Request samples

-   cURL

Copy

curl \-i \-X DELETE \\
  'https://rest.test.zuora.com/v1/batch-query/jobs/{jobid}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "batches": [

    -   {

        -   "batchId": "e20b07474688ad5001468daf10ea01df",

        -   "batchType": "zoqlexport",

        -   "fileId": "e20b07474688ad5001468daf155f01f5",

        -   "message": "",

        -   "name": "InvoiceItemAdjustment",

        -   "query": "select AccountingCode,CancelledDate,CreatedDate,Id,InvoiceId,InvoiceItemName, InvoiceNumber,SourceType,AdjustmentNumber,ServiceStartDate,ServiceEndDate,AdjustmentDate, Amount,Status,AccountId,SourceId,Type,ReasonCode, UpdatedDate from InvoiceItemAdjustment",

        -   "recordCount": 1580,

        -   "status": "completed"


        },

    -   {

        -   "batchId": "e20b07474688ad5001468daf10ec01e0",

        -   "batchType": "zoqlexport",

        -   "fileId": "e20b07474688ad5001468daf166601f6",

        -   "message": "",

        -   "name": "InvoiceAdjustment",

        -   "query": "select AccountingCode,CancelledOn,CreatedDate,Id,ImpactAmount,Invoice.Id, InvoiceNumber,AdjustmentNumber,AdjustmentDate,Amount,Status,Account.Id,Type,ReasonCode, UpdatedDate from InvoiceAdjustment",

        -   "recordCount": 411,

        -   "status": "completed"


        }


    ],

-   "encrypted": "none",

-   "format": "CSV",

-   "id": "e20b07474688ad5001468daf10e501de",

-   "name": "June10",

-   "sourceData": "LIVE",

-   "status": "cancelled",

-   "version": "1.1"


}`
