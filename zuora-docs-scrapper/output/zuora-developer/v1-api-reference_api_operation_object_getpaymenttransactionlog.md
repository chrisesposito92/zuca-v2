---
title: "Object GETPaymentTransactionLog"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_GETPaymentTransactionLog/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:47.822Z"
---

## CRUD: Retrieve a payment transaction log

Retrieves information about a specific payment transaction log.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of a payment transaction log. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

401

Unauthorized

404

get/v1/object/payment-transaction-log/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/object/payment-transaction-log/{id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   401
-   404

application/json

responseresponse

Copy

`{

-   "Gateway": "TEST gateway name1476935063101",

-   "GatewayReasonCode": "approve",

-   "GatewayReasonCodeDescription": "This transaction has been approved by Test gateway.",

-   "GatewayState": "Submitted",

-   "GatewayTransactionType": "Sale",

-   "Id": "2c93808457d787030157e030b2703dcd",

-   "PaymentId": "2c93808457d787030157e030b2673dcc",

-   "TransactionDate": "2016-10-20T05:44:30.000+02:00",

-   "TransactionId": "874200.071357285"


}`
