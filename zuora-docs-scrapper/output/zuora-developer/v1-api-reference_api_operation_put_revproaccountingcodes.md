---
title: "PUT RevProAccountingCodes"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_RevProAccountingCodes/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:31:22.443Z"
---

## Update a Zuora Revenue accounting code

Update the Zuora Revenue accounting code that corresponds to a specific Product Rate Plan Charge Id in Zuora Billing.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| adjustmentLiabilityAccountrequired | string <= 100 charactersThe name of the account where the Account Type is "Adjustment Liability". |
| --- | --- |
| adjustmentRevenueAccountrequired | string <= 100 charactersThe name of the account where the Account Type is "Adjustment Revenue". |
| contractAssetAccountrequired | string <= 100 charactersThe name of the account where the Account Type is "Contract Asset". |
| contractLiabilityAccountrequired | string <= 100 charactersThe name of the account where the Account Type is "Contract Liability". |
| productRatePlanChargeIdrequired | stringThe ID of your product rate plan charge. |
| recognizedRevenueAccountrequired | string <= 100 charactersThe name of the account where the Account Type is "Recognized Revenue". |
| unbilledReceivablesAccountrequired | string <= 100 charactersThe name of the account where the Account Type is "Unbilled Receivables". |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/revpro-accounting-codes

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "adjustmentLiabilityAccount": "adjustL-1",

-   "adjustmentRevenueAccount": "adjustRev-1",

-   "contractAssetAccount": "CA-2",

-   "contractLiabilityAccount": "CL-2",

-   "productRatePlanChargeId": "2c92c0f962470b8101624b869fcd45fc",

-   "recognizedRevenueAccount": "ContractRevRec-1",

-   "unbilledReceivablesAccount": "unbilledR-1"


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
