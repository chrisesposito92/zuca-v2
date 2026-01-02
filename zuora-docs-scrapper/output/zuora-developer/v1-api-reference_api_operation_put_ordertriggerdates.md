---
title: "PUT OrderTriggerDates"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_OrderTriggerDates/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:29.490Z"
---

## Update order action trigger dates

**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora [Subscribe and Amend](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend) customer, we recommend you enable [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization) to access the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders) feature. With Orders, you can access both existing functions for subscription and billing management and the [new features](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders) on Zuora Billing.

Updates the triggering dates for either of the following order actions:

-   CreateSubscription
-   AddProduct
-   UpdateProduct
-   RemoveProduct
-   RenewSubscription
-   TermsAndConditions

Security**bearerAuth**

Request

##### path Parameters

| orderNumberrequired | string <string>Order number of a pending order in which you are to update an order action's triggering dates. |
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

| subscriptions | Array of objects |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/orders/{orderNumber}/triggerDates

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "subscriptions": [

    -   {

        -   "subscriptionNumber": "A-S00000143",

        -   "orderActions": [

            -   {

                -   "sequence": 0,

                -   "triggerDates": [

                    -   {

                        -   "name": "CustomerAcceptance",

                        -   "triggerDate": "2024-07-22"


                        }


                    ]


                }


            ]


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

-   "success": true,

-   "orderNumber": "O-00000408",

-   "status": "Completed",

-   "accountNumber": "A00000097",

-   "subscriptions": [

    -   {

        -   "subscriptionNumber": "A-S00000143",

        -   "status": "Active"


        }


    ]


}`
