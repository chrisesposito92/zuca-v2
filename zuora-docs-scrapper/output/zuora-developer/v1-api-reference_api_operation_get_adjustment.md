---
title: "GET Adjustment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Adjustment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:56.999Z"
---

## Retrieve a delivery adjustment

Describes how to retrieve detailed information about a delivery adjustment.

**Note**: The Delivery Adjustments feature is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. To manage and access this feature through the self-service interface, see [Enable billing features by yourself](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Settings/Manage_Features) in the Knowledge Center.

Security**bearerAuth**

Request

##### path Parameters

| adjustment-keyrequired | stringThe delivery adjustment ID or number to retrieve. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/adjustments/{adjustment-key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/adjustments/{adjustment-key}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "adjustmentId": "4028818886a2149b0186a2404f67003c",

-   "adjustmentNumber": "ADJ-00000001",

-   "amount": -5,

-   "billingDate": "2023-02-26",

-   "chargeNumber": "C-00000001",

-   "creditMemoNumber": "CM00000001",

-   "deferredRevenueAccountingCode": "string",

-   "deliveryDate": "2023-02-26",

-   "deliveryDay": "sunday",

-   "reason": "string",

-   "recognizedRevenueAccountingCode": "string",

-   "revenueRecognitionRuleName": "string",

-   "status": "Billed",

-   "subscriptionNumber": "A-S00000001"


}`
