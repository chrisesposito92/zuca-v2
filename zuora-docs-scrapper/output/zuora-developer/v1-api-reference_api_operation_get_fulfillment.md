---
title: "GET Fulfillment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Fulfillment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:54.219Z"
---

## Retrieve a fulfillment

Retrieves the detailed information about a specified fulfillment. The following tutorial demonstrates how to use this operation:

-   [View details of a fulfillment](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/H_View_details_of_a_fulfillment)

Security**bearerAuth**

Request

##### path Parameters

| keyrequired | string <UUID>The id or fulfillment number of the Fulfillment to retrieve. |
| --- | --- |

##### query Parameters

| fulfillment-items | booleanDefault: falseReturn the related fulfillment items or not. |
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

get/v1/fulfillments/{key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/fulfillments/{key}?fulfillment-items=false' \\
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

Expand allCollapse all

`{

-   "fulfillment": {

    -   "billTargetDate": "2022-01-01",

    -   "carrier": "carrier",

    -   "customFields": {

        -   "priority__c": "Hight"


        },

    -   "description": "description",

    -   "externalId": "9dc1a064-b5d1-4d7b-bd0b-ca26a1be8e01",

    -   "fulfillmentDate": "2022-01-01",

    -   "fulfillmentItems": [

        -   {

            -   "customFields": {

                -   "category__c": "Old"


                },

            -   "description": "description",

            -   "fulfillmentId": "4028828c82819b74018281a69d3f0d93",

            -   "id": "4028828c82819b74018281a69d680d98",

            -   "itemIdentifier": "87309cf0-10c7-4130-8da2-439c96daa1ff"


            }


        ],

    -   "fulfillmentLocation": "location",

    -   "fulfillmentNumber": "F-00000001",

    -   "fulfillmentSystem": "fulfillment system",

    -   "fulfillmentType": "Delivery",

    -   "id": "4028828c82819b74018281a69d3f0d93",

    -   "orderLineItemId": "4028828c82819b74018281a69adf0d4e",

    -   "quantity": 1,

    -   "state": "SentToBilling",

    -   "trackingNumber": "T-00091912"


    },

-   "success": true


}`
