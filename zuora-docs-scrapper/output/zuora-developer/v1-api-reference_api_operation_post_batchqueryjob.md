---
title: "POST BatchQueryJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_BatchQueryJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:01.598Z"
---

## Submit an aggregate query job

Submits an AQuA job that contains an aggregated list of ZOQL and Export ZOQL queries.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| dateTimeUtc | booleanWhen using WSDL 69 and later you can ensure that the exported output of dateTime records are rendered according to ISO-8601 generic UTC form by setting dateTimeUtc to true.When dateTimeUtc is set to true, exports of dateTime data types will be rendered in the following generic format: YYYY-MM-DDThh:mm:ss-hhmm or YYYY-MM-DDThh:mm:ss+hhmm.Note: Regardless of what batchType query is used (zoql or zoqlexport), the query response output for datetime data types can be standardized by setting dateTimeUtc to true. When true, the results will display datetime types with the format: YYYY-MM-DDThh:mm:ss+/-hhmm. |
| --- | --- |
| format | stringThe format of the query. The default value is csv.Enum: "csv" "zip" "gzip" |
| incrementalTime | string <dateTime>Allows you to override the time from which a Stateful AQuA job incrementally retrieves records that have been created or modified, using the incrementalTime parameter. For example, if you set incrementalTime = 2015-01-21 10:30:01, AQuA will retrieve records that have created or modified beginning at 10:30:01. If this parameter is not set, AQuA continues to use the Start Time of the last AQuA session to retrieve records incrementally.The time zone of incrementalTime depends on which Zuora data center you use. For US Data Center customers, the time zone of incrementalTime is Pacific Time. For EU Data Center customers, the time zone of incrementalTime is UTC. If the time zone of your system is different from the time zone of incrementalTime, you will need to convert to the appropriate time zone before setting incrementalTime.Note: This field can only be used in Stateful AQuA mode. |
| name | stringThe name of the job. 32 character limit. |
| notifyUrl | stringIf URL is provided, the AQuA job will call this notifyUrl once the job has completed. The value of notifyUrl needs to have ${JOBID} and ${STATUS} placeholders. These placeholders will be replaced by the actual job ID and status when returned in the response. Status will be Completed after the AQuA job is done.If you submit an AQuA query with notifyUrl specified, the value of notifyUrl will be ignored if your organization has already configured a callout notification through the Zuora user interface. |
| nullReplacement | stringThe string used to represent null values in the query results. If you do not set this parameter, null values are represented by the empty string in the query results. |
| offset | integerDefault: 0This field specifies the time offset for AQuA queries in stateful mode. It is an integer in the range 0 to 3,600 seconds.For example, if you set this field to 600 seconds and you post a query in stateful mode at 2:00 AM, it will query against data created or updated between the completion time of the previous query and 1:50 AM.The value of this field will override the value you configured in Settings > Administration > AQuA API Stateful Mode Time Offset. |
| partner | stringThe partner field indicates the unique ID of a data integration partner. The dropdown list of this field displays partner IDs for the past thirty days. It must be used together with "project" field to uniquely identify a data integration target.For example, if a continuous AQuA session is to retrieve data incrementally for a Salesforce.com Org 00170000011K3Ub, you can use partner as "Salesforce", and "project" as "00170000011K3Ub." This field is required only if you are using AQuA in stateful mode. Otherwise, if you are using AQuA in stateless mode, partner field can be null.Note: Zuora highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices. Note: Submit a request at Zuora Global Support to obtain a partner ID. |
| project | stringThe project field contains the unique ID of a data integration project for a particular partner. The dropdown list of this field displays project IDs for the past thirty days.This field must be used together with partner field to uniquely identify a data integration target.This field is required only if you are using AQuA in stateful mode. Otherwise, if you are using AQuA in stateless mode, partner field can be null. |
| queries | Array of objects (query)A JSON array object that contains a list of batch objects. |
| sourceData | stringSpecify the source this aggregate query runs against:LIVE represents the live transactional databases at Zuora (Data Query Live). If this field is not specified, the default value LIVE will be used.Value: "LIVE" |
| useQueryLabels | booleanWhen this optional flag is set to true the request will use object and field API names for the CSV header output instead of the field labels. Data integration projects should set useQueryLabels to true so that API names remain the same.By default useQueryLabels is false, so that output CSV headers display the more user-friendly object and field labels. |
| version | number <float>The API version you want to use.The supported versions are as follows:1.1. It supports both modes1.0. Default. It supports stateless modes only.See Stateless and stateful modes for more information. |

Responses

200

OK

post/v1/batch-query

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "queries": [

    -   {

        -   "query": "select AccountNumber, BillCycleDay from Account",

        -   "type": "zoql"


        }


    ]


}`

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "8ad08f06909293cd01909613f23549e4",

-   "status": "submitted",

-   "version": 1,

-   "format": "CSV",

-   "batches": [

    -   {

        -   "batchId": "8ad08f06909293cd01909613f23549e5",

        -   "status": "pending",

        -   "localizedStatus": "pending",

        -   "apiVersion": "145.0",

        -   "recordCount": 0,

        -   "batchType": "zoql",

        -   "full": true,

        -   "query": "select AccountNumber, BillCycleDay from Account"


        }


    ],

-   "encrypted": "none",

-   "useLastCompletedJobQueries": false,

-   "offset": 0


}`
