---
title: "POST RegenerateBookingTransaction"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_RegenerateBookingTransaction/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:57.304Z"
---

## Regenerate booking transactions

Use this operation to generate booking transactions. This call is useful in the following two use cases:

-   During customer onboarding, there is a common scenario when customers perform data backfill or data fixes. To synchronize these changes from Billing to Revenue, use this API operation to regenerate booking transaction objects.
-   Customers choose to experiment with their use cases in the Sandbox environment before implementing them in the Production environment. During this experimentation phase, customers not only interact with data but also use this API operation to regenerate booking transaction objects.

Security**bearerAuth**

Request

##### query Parameters

| onlyReSend | booleanIf onlyReSend is true, existing booking transactions in the database will not be overridden and sent into Revenue for re-collecting, i.e. regenerate_flag is Y.If onlyReSend is false, existing booking transactions in the database will be overridden and sent into Revenue, no matter what is the value of reMigrate.Note: If onlyReSend is true, the reMigrate can't be true. |
| --- | --- |
| reMigrate | booleanIf reMigrate is true, existing booking transactions in the database will be overridden and sent into Revenue for re-collecting, i.e. regenerate_flag is Y.If reMigrate is false, existing booking transactions in the database will be overridden and sent into Revenue with regenerate_flag as N.Note: If onlyReSend is true, the reMigrate can't be true. |

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

| itemNumber | stringThe item number. |
| --- | --- |
| orderLineItemId | stringThe order line item ID. |
| orderNumber | stringThe order number. |
| subscriptionId | stringThe subscription ID. |
| subscriptionName | stringThe subscription name. |
| subscriptionVersion | integerThe subscription version. |
| ratePlanChargeId | stringThe rate plan charge ID of dynamic usage charge. |
| chargeNumber | stringThe charge number of dynamic usage charge. |
| type | stringThe type of business object for which you want to generate the transactions.Enum: "Subscription" "OrderLineItem" "DynamicUsageCharge" |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/uno-regenerate/booking-transaction

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "subscriptionName": "A-S00000001",

-   "subscriptionVersion": 1,

-   "type": "Subscription"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "idList": [

    -   "2c9890508ad035db018ad0d8d1685fef",

    -   "2c9890508ad035db018ad0d8d4ec6013"


    ],

-   "success": true


}`
