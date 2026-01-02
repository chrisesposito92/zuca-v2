---
title: "POST SequenceSets"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_SequenceSets/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:58:54.679Z"
---

## Create sequence sets

Creates sequence sets, allowing distinct numbering sequences for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.

You can create a maximum of 100 sequence sets in one single request. A sequence set comprises a set of custom prefixes and starting numbers that are used for billing documents to generate, and payments and refunds to create.

See [Prefix and Numbering Configuration for Billing Documents](https://knowledgecenter.zuora.com/CB_Billing/Billing_Settings/Prefix_and_Numbering_Configuration_for_Billing_Documents) for more information about limitations.

**Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

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

| sequenceSets | Array of objects (sequenceSets)Array of sequence sets configured for billing documents, payments, and refunds. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/sequence-sets

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "sequenceSets": [

    -   {

        -   "name": "FR",

        -   "creditMemo": {

            -   "prefix": "FCM",

            -   "startNumber": 10


            },

        -   "debitMemo": {

            -   "prefix": "FDM",

            -   "startNumber": 10


            },

        -   "invoice": {

            -   "prefix": "FINV",

            -   "startNumber": 10


            },

        -   "payment": {

            -   "prefix": "FP-",

            -   "startNumber": 10


            },

        -   "refund": {

            -   "prefix": "FR-",

            -   "startNumber": 10


            }


        }


    ]


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

-   "sequenceSets": [

    -   {

        -   "id": "402892c74c9193cd014c96bbe7c101f9",

        -   "name": "FR",

        -   "creditMemo": {

            -   "prefix": "FCM",

            -   "startNumber": 10


            },

        -   "debitMemo": {

            -   "prefix": "FDM",

            -   "startNumber": 10


            },

        -   "invoice": {

            -   "prefix": "FINV",

            -   "startNumber": 10


            },

        -   "payment": {

            -   "prefix": "FP-",

            -   "startNumber": 10


            },

        -   "refund": {

            -   "prefix": "FR-",

            -   "startNumber": 10


            }


        }


    ],

-   "success": true


}`
