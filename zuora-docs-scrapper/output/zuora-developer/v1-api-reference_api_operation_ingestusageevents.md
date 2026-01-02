---
title: "IngestUsageEvents"
url: "https://developer.zuora.com/v1-api-reference/api/operation/ingestUsageEvents/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:57.394Z"
---

## Ingest usage events for a meter

Ingests usage events directly into Zuora Mediation in real time. You can send a single event or batch multiple events in a JSON array to optimize throughput. Each event must conform to the meter's event schema.

Security**bearerAuth**

Request

##### path Parameters

| meterGlobalIdrequired | stringThe global ID of the meter. |
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

A JSON object or an array of objects representing usage events. Each event must conform to the event schema defined in your meter.

One of:

StreamingEventStreamingEvent

A usage event to be ingested into Zuora Mediation.

| CustomerIdrequired | stringUnique identifier for the customer. |
| --- | --- |
| UsageIdentifierrequired | stringIdentifier for the usage type. |
| UsageDaterequired | string <date-time>Date and time when the usage occurred. |
| Quantityrequired | numberQuantity of usage. |

Responses

200

Usage event(s) ingested successfully.

400

Bad request due to validation or business logic errors.

401

Unauthorized request.

404

Resource not found.

413

Payload too large.

429

Too many requests.

500

Internal server error.

post/usage/bulk/{meterGlobalId}

Request samples

-   Payload
-   cURL

application/json

StreamingEventStreamingEvent

Copy

`[ ]`

Response samples

-   200
-   400
-   401
-   404
-   413
-   429
-   500

2 more4295002 more

application/json

Copy

`{

-   "success": true,

-   "message": "string"


}`
