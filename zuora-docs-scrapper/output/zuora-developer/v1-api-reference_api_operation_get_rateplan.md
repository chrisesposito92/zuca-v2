---
title: "GET RatePlan"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RatePlan/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:51:43.327Z"
---

## Retrieve a rate plan

Retrieves the detailed information about a specific subscription rate plan.

-   If you have the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders) feature enabled, this operation retrieves information about a subscription rate plan and the related order that has amended the rate plan.

-   If you have the [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders_Harmonization) feature enabled, this operation retrieves information about a subscription rate plan and the related order and amendment that have amended the rate plan. The returned objects may be different since amendment, order, and order action are generated asynchronously.

    -   If all are generated, the related amendment and order, including the order action, are returned.
    -   If not, only the related amendment may be returned before generating the order and order action.
-   If you are an existing Zuora Subscribe and Amend customer, this operation retrieves information about a subscription rate plan and the related amendment that has amended the rate plan.


**Note:** Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders_Harmonization/A_Overview_of_Orders_Harmonization) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).

**Note:** You can only retrieve information about the following order actions:

-   `addProduct`
-   `updateProduct`
-   `removeProduct`
-   `changePlan`

Security**bearerAuth**

Request

##### path Parameters

| ratePlanIdrequired | string <string>The ID of the subscription rate plan to be retrieved. |
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

get/v1/rateplans/{ratePlanId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/rateplans/{ratePlanId}' \\
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

-   "amendment": {

    -   "code": "A-AM00000047",

    -   "contractEffectiveDate": "2021-12-29",

    -   "createdBy": "2c9890207c9649c0017c969bc6330002",

    -   "createdDate": "2021-10-29 19:44:16",

    -   "customerAcceptanceDate": "2021-12-29",

    -   "description": null,

    -   "effectiveDate": "2021-12-29",

    -   "id": "402880e47ccbaca1017ccbdd63c818cb",

    -   "name": "update",

    -   "serviceActivationDate": "2021-12-29",

    -   "type": "UpdateProduct",

    -   "updatedBy": "2c9890207c9649c0017c969bc6330002",

    -   "updatedDate": "2021-10-29 19:44:16"


    },

-   "id": "402880e47ccbaca1017ccbdd63aa18c8",

-   "lastChangeType": "Update",

-   "order": {

    -   "id": "402880e47ccbaca1017ccbdd7b0e18fd",

    -   "orderActions": [

        -   {

            -   "contractEffectiveDate": "2021-12-29",

            -   "customerAcceptanceDate": "2021-12-29",

            -   "id": "402880e47ccbaca1017ccbdd7b1418ff",

            -   "serviceActivationDate": "2021-12-29",

            -   "type": "UpdateProduct",

            -   "updateProduct": {

                -   "chargeUpdates": [ ],

                -   "customFields": { },

                -   "newRatePlanId": "402880e47ccbaca1017ccbdd63aa18c8",

                -   "productRatePlanId": "2c9890207c9649c0017c96a0f11001a4",

                -   "ratePlanId": "402880e47ccbaca1017ccbdd620818ba",

                -   "specificUpdateDate": null,

                -   "uniqueToken": null


                }


            }


        ],

    -   "orderNumber": "O-00000037"


    },

-   "productId": "2c9890207c9649c0017c96a0588201a2",

-   "productName": "MMORPG game",

-   "productRatePlanId": "2c9890207c9649c0017c96a0f11001a4",

-   "productSku": "SKU-00000001",

-   "ratePlanName": "Rate Plan 1",

-   "subscriptionId": "402880e47ccbaca1017ccbdd644d18d0",

-   "subscriptionVersion": 5,

-   "success": true


}`
