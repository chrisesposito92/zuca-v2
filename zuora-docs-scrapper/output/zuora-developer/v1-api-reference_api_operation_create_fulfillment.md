---
title: "Create Fulfillment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Create_Fulfillment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:55.424Z"
---

## Create fulfillments

Creates one or multiple Fulfillment objects. You can also generate invoices or memos for these Fulfillment objects in this API call. The following tutorials demonstrate how to use this operation:

-   [Create a sales order line item with fulfillments](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AD_Create_a_sales_order_line_item_with_fulfillments)
-   [Create a return order line item with fulfillments](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/Create_a_return_order_line_item_with_fulfillments)

Security**bearerAuth**

Request

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

| fulfillments | Array of objects (FulfillmentPost) |
| --- | --- |
| processingOptions | object (ProcessingOptions)Processing options for generating billing documents. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/fulfillments

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "fulfillments": [

    -   {

        -   "billTargetDate": "2022-01-01",

        -   "fulfillmentDate": "2022-01-01",

        -   "fulfillmentType": "Delivery",

        -   "orderLineItemId": "4028828c82819b740182821bb23e15c4",

        -   "quantity": 5,

        -   "state": "SentToBilling"


        },

    -   {

        -   "billTargetDate": "2022-01-01",

        -   "fulfillmentDate": "2022-01-01",

        -   "fulfillmentType": "Delivery",

        -   "orderLineItemId": "4028828c82819b740182821bb23e15c4",

        -   "quantity": 5,

        -   "state": "SentToBilling"


        }


    ],

-   "processingOptions": {

    -   "billingOptions": {

        -   "documentDate": "2022-01-01",

        -   "targetDate": "2022-01-01"


        },

    -   "collectPayment": true,

    -   "runBilling": true


    }


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

-   "creditMemoNumbers": null,

-   "fulfillments": [

    -   {

        -   "fulfillmentNumber": "F-00000001",

        -   "id": "4028828c82819b740182821bb3b415c6"


        },

    -   {

        -   "fulfillmentNumber": "F-00000002",

        -   "id": "4028828c82819b740182821bb3bc15c7"


        }


    ],

-   "invoiceNumbers": [

    -   "INV00000001"


    ],

-   "paidAmount": 100,

-   "paymentNumber": "P-00000001",

-   "success": true


}`
