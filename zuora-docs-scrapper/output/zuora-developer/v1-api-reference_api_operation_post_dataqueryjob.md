---
title: "POST DataQueryJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_DataQueryJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:18:32.325Z"
---

## Submit a data query

Submits a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) to be executed by Zuora, creating a new query job. Use the [Retrieve a data query job](https://developer.zuora.com/v1-api-reference/api/operation/GET_DataQueryJob/) endpoint to monitor the job status and access the results once complete.

**Note:** The request must include the `Content-Type: application/json` header. If this header is missing, the request will fail with the following error: `{"code":415,"message":"HTTP 415 Unsupported Media Type"}`

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
| Content-Typerequired | stringSpecifies the media type of the request payload. You must include the Content-Type: application/json header when submitting a data query.Value: "application/json" |

##### Request Body schema: application/json
required

| columnSeparator | stringThe column separator. Only applicable if the outputFormat is DSV. |
| --- | --- |
| compressionrequired | stringSpecifies whether Zuora compresses the query results.Enum: "NONE" "GZIP" "ZIP" |
| encryptionKey | string <byte>Base-64 encoded public key of an RSA key-pair.Note that Data Query only supports 1024-bit RSA keys.If you set this field, Zuora encrypts the query results using the provided public key. You must use the corresponding private key to decrypt the query results. |
| outputrequired | objectAdditional information about the query results. |
| outputFormatrequired | stringSpecifies the format of the query results.JSON - Each row in the query results will be a JSON object. The format of the query result file is JSON Lines.CSV - Each row in the query results will be a comma-separated list of values.TSV - Each row in the query results will be a tab-separated list of values.DSV - Pass any character as your custom delimiter into the columnSeparator field.Enum: "JSON" "CSV" "TSV" "DSV" |
| queryrequired | stringThe query to perform. See SQL Queries in Data Query for more information. |
| readDeleted | booleanDefault: falseIndicates whether the query will retrieve only the deleted record. If readDeleted is set to false or it is not included in the request body, the query will retrieve only the non-deleted records. If it is set to true, only the deleted records will be retrieved.If you select the deleted column in the query field, both non-deleted and deleted records will be retrieved regardless of the value in the readDeleted field.Note that Data Query is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through Data Query. |
| sourceData | stringSpecify the source that data queries run against:LIVE represents the live transactional databases at Zuora (Data Query Live).WAREHOUSE represents Zuora Warehouse, which has better performance and fewer limitations than the live transactional database. This option is available only if you have the Zuora Warehouse feature enabled in your tenant. For more information, see Zuora Warehouse.If this option is selected, you can specify warehouse size in warehouseSize.If this field is not specified, the default value LIVE will be used.Enum: "LIVE" "WAREHOUSE" |
| useIndexJoin | booleanIndicates whether to use Index Join. Index join is useful when you have a specific reference value in your WHERE clause to index another large table by. See Use Index Join for more information. |
| warehouseSize | stringSpecify the size of Zuora Warehouse. This field is available only if the sourceData is WAREHOUSE.If this field is not specified or set to NULL, the default value xsmall will be used.Enum: "xsmall" "NULL" |

Responses

200

OK

400

Bad Request

415

Unsupported Media Type. This error is returned when the request is missing the required `Content-Type: application/json` header.

post/query/jobs

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "query": "SELECT accountnumber, balance FROM Account WHERE Account.balance > 100",

-   "compression": "NONE",

-   "output": {

    -   "target": "S3"


    },

-   "outputFormat": "CSV"


}`

Response samples

-   200
-   400
-   415

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": {

    -   "id": "5948abde-b875-4d06-ad07-c2138853d8bc",

    -   "query": "SELECT accountnumber, balance FROM Account WHERE Account.balance > 100",

    -   "useIndexJoin": false,

    -   "sourceData": "LIVE",

    -   "queryStatus": "accepted",

    -   "remainingRetries": 3,

    -   "retries": 3,

    -   "updatedOn": "2024-07-09T09:47:49.675Z",

    -   "createdOn": "2024-07-09T09:47:49.675Z",

    -   "createdBy": "514f3ea1-6716-4f44-b6e0-9a8f0cf44bd2",

    -   "createdByUserEmail": "amy@mycompany.com"


    }


}`
