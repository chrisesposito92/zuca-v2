---
title: "GET LastBatchQueryJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_LastBatchQueryJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:02.603Z"
---

## Retrieve the last completed aggregate query job

Returns the details of the last completed job.

The completed AQuA jobs that were created 180 days ago are deleted permanently from Zuora, so you cannot query these jobs through API or AQuA job finder.

Security**bearerAuth**

Request

##### path Parameters

| partnerrequired | stringThe unique ID of a data integration partner. |
| --- | --- |
| projectrequired | stringThe unique ID of a data integration project for a particular partner. |

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

get/v1/batch-query/jobs/partner/{partner}/project/{project}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/batch-query/jobs/partner/{partner}/project/{project}' \\
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

        -   "apiVersion": "60.0",

        -   "batchId": "402881824835bb2a01483c1e678c025b",

        -   "batchType": "zoqlexport",

        -   "fileId": "402881824835bb2a01483c1e67c7025d",

        -   "full": false,

        -   "message": "",

        -   "name": "AccountingPeriod",

        -   "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod",

        -   "recordCount": 0,

        -   "status": "completed"


        }


    ],

-   "encrypted": "none",

-   "format": "CSV",

-   "id": "402881824835bb2a01483c1e678a025a",

-   "name": "Example",

-   "partner": "salesforce",

-   "project": "00170000011K3Ub",

-   "sourceData": "LIVE",

-   "startTime": "2014-09-03 08:24:58",

-   "status": "completed",

-   "version": "1.1"


}`
