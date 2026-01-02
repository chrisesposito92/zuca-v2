---
title: "Object POSTImport"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTImport/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:40.522Z"
---

## CRUD: Create an import

Creates a data import.

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: multipart/form-data
required

| Filerequired | string <binary>The data to import. |
| --- | --- |
| ImportTyperequired | stringThe type of data to import.Enum: "Usage" "Payment" "Quote" "TaxationDetail" "UpdateAccountingCode" "CreateRevenueSchedule" "UpdateRevenueSchedule" "DeleteRevenueSchedule" "ImportFXRate" |
| Namerequired | stringA descriptive name for the import. |

Responses

200

OK

401

Unauthorized

post/v1/object/import

Request samples

-   Curl

Copy

curl \-X POST \-H "Authorization: Bearer f21f017e4724445d8647b1f0de7ed6f1" \-F "ImportType=Usage" \-F "Name=UsageData.csv" \-F "File=@UsageData.csv" "https://rest.zuora.com/v1/object/import"

Response samples

-   200
-   401

application/json

responseresponse

Copy

`{

-   "Id": "2c92c0f8601fab5701601fee2bf67056",

-   "Success": true


}`
