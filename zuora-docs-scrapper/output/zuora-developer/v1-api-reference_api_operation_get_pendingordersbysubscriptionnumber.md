---
title: "GET PendingOrdersBySubscriptionNumber"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PendingOrdersBySubscriptionNumber/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:29.409Z"
---

## List pending orders by subscription number

**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.

Retrieves the detailed information about all pending orders for a specified subscription.

Security**bearerAuth**

Request

##### path Parameters

| subscription-keyrequired | stringSubscription number. For example, A-S00000135. |
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

get/v1/orders/subscription/{subscription-key}/pending

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/orders/subscription/{subscription-key}/pending' \\
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

-   "orders": [

    -   {

        -   "createdBy": "2c989028622282520162235ab0f603ba",

        -   "createdDate": "2018-03-14 15:12:55",

        -   "currency": "USD",

        -   "existingAccountNumber": "accountA_Num",

        -   "invoiceScheduleId": "ec6f0d5dc8af451ab95343fb3c588c1a",

        -   "orderDate": "2017-01-01",

        -   "orderNumber": "O-00000001",

        -   "status": "Pending",

        -   "subscriptions": [

            -   {

                -   "baseVersion": null,

                -   "customFields": {

                    -   "sub_cf_picklist__c": "sub123"


                    },

                -   "newVersion": 1,

                -   "orderActions": [

                    -   {

                        -   "createSubscription": {

                            -   "subscribeToRatePlans": [

                                -   {

                                    -   "chargeOverrides": [

                                        -   {

                                            -   "chargeNumber": "C-00000001",

                                            -   "pricing": {

                                                -   "recurringVolume": {

                                                    -   "listPriceBase": "Per_Billing_Period",

                                                    -   "quantity": 12,

                                                    -   "tiers": [ ]


                                                    }


                                                },

                                            -   "productRateplanChargeId": "2c989028622282520162235aca7a05b9"


                                            }


                                        ],

                                    -   "customFields": { },

                                    -   "newRatePlanId": "2c989028622282520162235acd1b05d2",

                                    -   "productRatePlanId": "2c989028622282520162235ac91605b3"


                                    }


                                ],

                            -   "subscriptionOwnerAccountNumber": "accountA_Num",

                            -   "terms": {

                                -   "autoRenew": false,

                                -   "initialTerm": {

                                    -   "period": 12,

                                    -   "periodType": "Month",

                                    -   "startDate": "2017-01-01",

                                    -   "termType": "TERMED"


                                    },

                                -   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

                                -   "renewalTerms": [

                                    -   {

                                        -   "period": 0,

                                        -   "periodType": "Month"


                                        }


                                    ]


                                }


                            },

                        -   "customFields": {

                            -   "order_cf_date__c": "2017-01-01"


                            },

                        -   "sequence": 0,

                        -   "triggerDates": [

                            -   {

                                -   "name": "ContractEffective",

                                -   "triggerDate": "2017-01-01"


                                },

                            -   {

                                -   "name": "ServiceActivation",

                                -   "triggerDate": "2017-01-01"


                                }


                            ],

                        -   "type": "CreateSubscription"


                        }


                    ],

                -   "subscriptionNumber": "A-S00000001"


                }


            ],

        -   "success": true,

        -   "updatedBy": "2c989028622282520162235ab0f603ba",

        -   "updatedDate": "2018-03-14 15:12:55"


        }


    ]


}`
