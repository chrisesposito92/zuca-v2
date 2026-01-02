---
title: "GET DataQueryJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_DataQueryJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:02.502Z"
---

## Retrieve a data query job

Retrieves a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job. You can use this operation to track the status of the query job and obtain the URL of the query results.

If you are an administrator, you can retrieve every query job in your tenant.

If you are a non-admin user and try to retrieve a query job that you are not the owner of, you will get a 403 response indicating that you are forbidden from viewing this job. As a non-admin user, you can only retrieve your own query job.

Security**bearerAuth**

Request

##### path Parameters

| job-idrequired | string <uuid> = 36 charactersInternal identifier of the query job. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

403

Forbidden

404

Not Found

get/query/jobs/{job-id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/query/jobs/{job-id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   403
-   404

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": {

    -   "createdBy": "514f3ea1-6716-4f44-b6e0-9a8f0cf44bd2",

    -   "dataFile": "[https://example.s3.us-west-2.amazonaws.com/3a3e85c4-96e7-486b-ae02-827120104301_24921638725108715.json?X-Amz-Security-Token=...](https://example.s3.us-west-2.amazonaws.com/3a3e85c4-96e7-486b-ae02-827120104301_24921638725108715.json?X-Amz-Security-Token=...)",

    -   "id": "3a3e85c4-96e7-486b-ae02-827120104301",

    -   "outputRows": 24516,

    -   "processingTime": 9212,

    -   "query": "SELECT accountnumber, balance FROM Account WHERE Account.balance > 100",

    -   "queryStatus": "completed",

    -   "remainingRetries": 3,

    -   "sourceData": "LIVE",

    -   "updatedOn": "2018-08-17T13:14:19.17Z",

    -   "useIndexJoin": false


    }


}`
