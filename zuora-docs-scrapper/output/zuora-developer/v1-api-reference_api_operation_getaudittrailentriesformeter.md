---
title: "GetAuditTrailEntriesForMeter"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getAuditTrailEntriesForMeter/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:33.721Z"
---

## Retrieve the audit trail entries for a meter

Retrieves the audit trail entries for a specific meter in Zuora Mediation. The API provides detailed, record-level information about what happened during processing, including Payload and error details, operator information, and the trace ID/event ID.

Security**bearerAuth**

Request

##### path Parameters

| meterIdrequired | integer <int64>ID of the meter. |
| --- | --- |

##### query Parameters

| exportTyperequired | stringType of the export. SAMPLE indicates an export of success records, ERROR indicates an export of error records.Enum: "SAMPLE" "ERROR" |
| --- | --- |
| runTyperequired | stringSpecifies the type of run. DEBUG indicates a test run, NORMAL indicates a live run.Enum: "DEBUG" "NORMAL" |
| sessionId | stringA specific session ID.Example: sessionId=R-000001 |
| queryFromTimerequired | stringThe minimum timestamp of the audit trail data. The standard used is ISO 8601 with timezones.Example: queryFromTime=2025-07-18 T00:00:00Z |
| queryToTimerequired | stringThe maximum timestamp of the audit trail data. The standard used is ISO 8601 with timezones.Example: queryToTime=2025-07-18 T00:00:00Z |
| operatorId | stringThe ID of the operator. The Operator ID is displayed for each operator node, for both current meters and historic runs. On the Mediation UI, click on a test ID or session ID to see the details of the run. |
| pageSize | integer <int32> <= 500Default: 30Page size for pagination. |
| cursor | stringnextPage token from previous response.Example: cursor=W3sib3JkZXJ= |

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

get/meters/{meterId}/auditTrail/entries

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/meters/{meterId}/auditTrail/entries?exportType=SAMPLE&runType=DEBUG&sessionId=string&queryFromTime=string&queryToTime=string&operatorId=string&pageSize=30&cursor=string' \\
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

Copy

Expand allCollapse all

`{

-   "success": true,

-   "data": [

    -   {

        -   "errorTime": "1753296408775",

        -   "errorCode": "",

        -   "errorMessage": "",

        -   "payload": {

            -   "event time": "2025-07-01",

            -   "charge number": "C-00000017",

            -   "qty": 10,

            -   "ratedAmount": "10.0"


            },

        -   "eventId": "601f65ca-67f5-11f0-9e3a-5d9d6cbeef3e|0",

        -   "traceId": "601f65ca-67f5-11f0-9e3a-5d9d6cbeef3e|0_a_b_e_d_o7normal",

        -   "operatorType": "BILLING-RATING",

        -   "operatorName": "Rating",

        -   "operatorId": "15004c16-6242-4f50-9faf-cb1a0fe6e0f5"


        }


    ],

-   "previousPage": null,

-   "nextPage": "eyJjdXJzb3IiOi4uLn0="


}`
