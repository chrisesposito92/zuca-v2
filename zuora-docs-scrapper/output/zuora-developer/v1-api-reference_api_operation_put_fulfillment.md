---
title: "PUT Fulfillment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Fulfillment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:55.638Z"
---

## Update a fulfillment

Updates a specified fulfillment. The `state` field of a fulfillment can only be updated when it is in a different state, to trigger the state transition. The other fields of a fulfillment can only be updated when the fulfillment is in the `Executing` state, or when the fulfillment is in the `Booked` state and the user has the "Allow Edit Of Booked Order Line Items" permission. The following tutorial demonstrates how to use this operation:

-   [Update or cancel a fulfillment](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/H_Update_a_fulfillment)

Security**bearerAuth**

Request

##### path Parameters

| keyrequired | string <UUID>The id or fulfillment number of the Fulfillment to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| billTargetDate | string <date>The target date for the Fulfillment to be picked up by bill run for billing. |
| --- | --- |
| carrier | stringThe carrier of the Fulfillment. The available values can be managed in the Fulfillment Settings page under Billing Settings. |
| customFields | object (FulfillmentCustomFields)Container for custom fields of a Fulfillment object. |
| description | stringThe description of the Fulfillment. |
| externalId | stringThe external id of the Fulfillment. |
| fulfillmentDate | string <date>The date of the Fulfillment. |
| fulfillmentLocation | stringThe fulfillment location of the Fulfillment. The available values can be managed in the Fulfillment Settings page under Billing Settings. |
| fulfillmentSystem | stringThe fulfillment system of the Fulfillment. The available values can be managed in the Fulfillment Settings page under Billing Settings. |
| quantity | numberThe quantity of the Fulfillment. |
| state | stringThe state of the Fulfillment. See Order Line Item states, Order states, and state transitions for more information.Enum: "Executing" "Booked" "SentToBilling" "Complete" "Cancelled" |
| trackingNumber | stringThe tracking number of the Fulfillment. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/fulfillments/{key}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "billTargetDate": "2022-01-01",

-   "fulfillmentDate": "2022-01-01",

-   "fulfillmentType": "Delivery",

-   "quantity": 5,

-   "state": "SentToBilling"


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
