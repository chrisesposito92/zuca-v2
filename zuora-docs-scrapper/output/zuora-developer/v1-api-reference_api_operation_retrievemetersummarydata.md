---
title: "RetrieveMeterSummaryData"
url: "https://developer.zuora.com/v1-api-reference/api/operation/retrieveMeterSummaryData/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:32.745Z"
---

## Retrieve summary data for a meter

Retrieves summary data for a specific meter in Zuora Mediation, providing a rolled-up view of a meter run or time window. The API supports grouping by Operator ID, Error Code, or Session ID, and allows optional filters such as Query From Time, Query To Time, Operator IDs, and Session IDs. The API returns aggregated output and error counts per group and includes validation with detailed error responses for invalid parameters or formats.

Security**bearerAuth**

Request

##### path Parameters

| meterIdrequired | integer <int64>The ID of the meter. |
| --- | --- |

##### header Parameters

| Content-Typerequired | stringDefault: application/jsonSpecify the content type of the request body. Use application/json. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

| runType | stringSpecifies the type of run. |
| --- | --- |
| sessionIds | Array of stringsA list of specific run IDs to export. |
| operatorIds | Array of stringsA list of operator IDs to filter by. |
| groupBy | Array of stringsSpecifies the fields used to group the summary results. |
| queryFromTime | stringThe minimum timestamp for the data to be exported. |
| queryToTime | stringThe maximum timestamp for the data to be exported. |

Responses

200

OK

400

Bad Request - Invalid or missing parameters.

401

Unauthorized - Authentication failed.

500

Internal Server Error - Unexpected error.

post/meters/{meterId}/summary

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "runType": "NORMAL",

-   "queryFromTime": "2025-10-01T0000+0000",

-   "queryToTime": "2025-11-17T23:59:59+0000",

-   "operatorIds": [

    -   "4610a876-61ee-4e5e-a634-152e7a635f75"


    ],

-   "sessionIds": [

    -   "R-00002247",

    -   "R-00002293"


    ],

-   "groupBy"": [

    -   "errorCode",

    -   "processorId",

    -   "sessionId"


    ]


}`

Response samples

-   200
-   400
-   401
-   500

application/json

Copy

Expand allCollapse all

`{

-   "success": true,

-   "data": {

    -   "requestId": "91d46fea-67de-4abe-9cc3-6ef076bbb7ea",

    -   "requestTime": "2025-11-20T16:41:27.858661268Z",

    -   "query": {

        -   "runType": "NORMAL",

        -   "sessionIds": null,

        -   "operatorIds": null,

        -   "groupBy": [

            -   "sessionId"


            ],

        -   "queryFromTime": null,

        -   "queryToTime": null


        },

    -   "output": [

        -   {

            -   "dimensions": {

                -   "sessionId": "R-00002283"


                },

            -   "output": 10000000,

            -   "totalErrorCount": 0


            },

        -   {

            -   "dimensions": {

                -   "sessionId": "R-00002340"


                },

            -   "output": 10000000,

            -   "totalErrorCount": 0


            }


        ]


    },

-   "previousPage": null,

-   "nextPage": null


}`
