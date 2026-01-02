---
title: "GET SystemHealthBillingDocVolumeSummary"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_SystemHealthBillingDocVolumeSummary/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:17:21.130Z"
---

## List billing document volume summary records

Returns a summary of billing documents generated within a specified time range, including invoices and credit memos, and the total number of accounts that failed to process.

Security**bearerAuth**

Request

##### query Parameters

| startTimerequired | string <date-time>Start time of the volume summary.Format: yyyy-MM-dd'T'HH:mmZ Example: 2022-09-22T09:07+0800. |
| --- | --- |
| endTimerequired | string <date-time>End time of the volume summary.Format: yyyy-MM-dd'T'HH:mmZ Example: 2022-09-22T09:07+0800. |

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

400

Bad Request

get/system-health/billing-documents/volume-summary

Request samples

-   Curl

Copy

curl \-i \-X GET \\
  'https://rest.zuora.com/system-health/billing-documents/volume-summary?startTime=2022-09-22T09:07-0800&endTime=2022-09-24T09:07-0800' \\
  \-H 'Authorization: Bearer 7la16f1afa6f48099dc0605d7a175846'

Response samples

-   200
-   400

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "totalFailedAccounts": 10,

        -   "totalGeneratedCreditMemos": 50,

        -   "totalGeneratedInvoices": 100


        }


    ]


}`
