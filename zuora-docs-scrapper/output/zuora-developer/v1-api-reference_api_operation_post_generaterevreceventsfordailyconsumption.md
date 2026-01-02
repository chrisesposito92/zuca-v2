---
title: "POST GenerateRevRecEventsForDailyConsumption"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_GenerateRevRecEventsForDailyConsumption/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:58.795Z"
---

## Regenerate revenue recognition events transactions for Daily Consumption

Use this operation to generate Daily Consumption based revenue recognition events transactions when the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown) feature is enabled.

Security**bearerAuth**

Request

##### query Parameters

| forRevenueRecollect | booleanIndicates whether the data regenerated is for Zuora Revenue to recollect. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| chargeSegmentNumber | stringRate plan charge number. |
| --- | --- |
| fundId | stringFund ID. For more information about fund, see Prepaid with Drawdown. |
| originalChargeIdrequired | stringOriginal rate plan charge ID. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/uno-regenerate/rev-rec-events/daily-consumption

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "chargeSegmentNumber": "1",

-   "fundId": "2c9890508ad035db018ad0d8d1685fef",

-   "originalChargeId": "2c9890508ad035db018ad0d8d1685fef"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true


}`
