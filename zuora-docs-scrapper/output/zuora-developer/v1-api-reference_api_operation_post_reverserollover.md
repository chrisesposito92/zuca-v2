---
title: "POST ReverseRollover"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_ReverseRollover/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:51:29.080Z"
---

## Reverse fund rollover

This REST API reference describes how to manually reverse fund rollover from source validity period to destination validity period. There are no path or query parameters.

**Note**: This API will not work if the associated prepayment charge has rollover enabled.

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

| destinationValidityPeriodrequired | object (destinationValidityPeriod)Date range of the destination validity period to which the funds are transferred. It should be close to the source validity period. |
| --- | --- |
| prepaymentUomrequired | stringSpecifies the units of measure for prepayment charge. Units of measure are configured in the web-based UI. Your values depend on your configuration in Billing Settings.Values: a valid unit of measure |
| sourceValidityPeriodrequired | object (sourceValidityPeriod)Date range of the source validity period from which the funds are transferred. It should be close to the destination validity period. |
| subscriptionNumberrequired | string <= 100 charactersThe unique identifier number of the subscription. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/ppdd/reverse-rollover

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "destinationValidityPeriod": {

    -   "endDate": "2024-01-01",

    -   "startDate": "2023-01-01"


    },

-   "prepaymentUom": "Each",

-   "sourceValidityPeriod": {

    -   "endDate": "2025-01-01",

    -   "startDate": "2024-01-01"


    },

-   "subscriptionNumber": "A-S00000009"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "message": "Reverse rollover is done",

-   "reverseRolloverFundCount": 1,

-   "success": true


}`
