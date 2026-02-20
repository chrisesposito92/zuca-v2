---
title: "GetQueryResultsForEventStore"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getQueryResultsForEventStore/"
product: "zuora-developer"
scraped_at: "2026-02-20T21:21:28.506Z"
---

## Retrieve the results for an event store query

Retrieves paginated result rows and column metadata for a previously submitted Event Store query using its `queryId`, including total row count, row-level field values, and readiness status. Query execution is asynchronous.

Security**bearerAuth**

Request

##### path Parameters

| queryIdrequired | stringID of the query. |
| --- | --- |

##### query Parameters

| pageSize | integer <int32> <= 50Default: 20Page size for pagination. |
| --- | --- |
| page | integer <int32>Default: 1The page number. |

##### header Parameters

| Content-Typerequired | stringDefault: application/jsonSpecify the content type of the request body. Use application/json. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

OK

400

Bad Request

500

Internal Server Error

get/meters/event-store-queries/{queryId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/meters/event-store-queries/{queryId}?pageSize=20&page=1' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   500

application/json

Successful query resultsFailed query executionSuccessful query results

Copy

Expand allCollapse all

`{

-   "success": true,

-   "data": {

    -   "totalCount": 1,

    -   "columns": [

        -   {

            -   "name": "value 1",

            -   "logicalType": {

                -   "type": "VARCHAR",

                -   "nullable": true,

                -   "length": 2147483647


                },

            -   "comment": null


            },

        -   {

            -   "name": "value 2",

            -   "logicalType": {

                -   "type": "VARCHAR",

                -   "nullable": true,

                -   "length": 2147483647


                },

            -   "comment": null


            }


        ],

    -   "rows": [

        -   {

            -   "kind": "INSERT",

            -   "fields": [

                -   10,

                -   "20%"


                ]


            }


        ],

    -   "ready": true


    }


}`
