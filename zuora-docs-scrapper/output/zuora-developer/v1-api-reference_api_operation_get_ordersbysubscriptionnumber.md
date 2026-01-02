---
title: "GET OrdersBySubscriptionNumber"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_OrdersBySubscriptionNumber/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:06.469Z"
---

## List orders by subscription number

**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.

Retrieves the detailed information about all orders for a specified subscription. You can set the `status` query parameter to an order status to retrieve orders in that order status. If you do not set a value for this query parameter, the query parameter has a default value `all`, and orders of all statuses are returned.

Security**bearerAuth**

Request

##### path Parameters

| subscriptionNumberrequired | stringThe subscription number. |
| --- | --- |

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| dateFilterOption | stringThe date type to filter on. This field value can be 'orderDate' or 'updatedDate'. Default is orderDate. |
| startDate | string <date>The result will only contain the orders with the date of 'dateFilterOption' later than or equal to this date. |
| endDate | string <date>The result will only contain the orders with the date of 'dateFilterOption' earlier than or equal to this date. |
| status | stringThe status of orders.Enum: "all" "cancelled" "completed" "draft" "executing" "failed" "pending" "scheduled" |

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

get/v1/orders/subscription/{subscriptionNumber}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/orders/subscription/{subscriptionNumber}?page=1&pageSize=20&dateFilterOption=string&startDate=2019-08-24&endDate=2019-08-24&status=all' \\
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

        -   "createdDate": "2018-03-14 15:12:58",

        -   "currency": "USD",

        -   "customFields": {

            -   "order_cf_date__c": "2017-01-01"


            },

        -   "description": "This is a description for the Order.",

        -   "existingAccountNumber": "accountA_Num",

        -   "invoiceScheduleId": "ec6f0d5dc8af451ab95343fb3c588c1a",

        -   "orderDate": "2017-03-01",

        -   "orderNumber": "O-00000002",

        -   "status": "Completed",

        -   "subscriptions": [

            -   {

                -   "baseVersion": 1,

                -   "customFields": {

                    -   "sub_cf_picklist__c": null


                    },

                -   "newVersion": 2,

                -   "orderActions": [

                    -   {

                        -   "customFields": {

                            -   "oa_cf_text__c": null


                            },

                        -   "sequence": 0,

                        -   "triggerDates": [

                            -   {

                                -   "name": "ContractEffective",

                                -   "triggerDate": "2017-03-01"


                                },

                            -   {

                                -   "name": "ServiceActivation",

                                -   "triggerDate": "2017-03-01"


                                },

                            -   {

                                -   "name": "CustomerAcceptance",

                                -   "triggerDate": "2017-03-01"


                                }


                            ],

                        -   "type": "UpdateProduct",

                        -   "updateProduct": {

                            -   "chargeUpdates": [

                                -   {

                                    -   "billing": {

                                        -   "billingPeriodAlignment": null


                                        },

                                    -   "chargeNumber": "C-00000001",

                                    -   "customFields": {

                                        -   "srpc_cf_picklist__c": null


                                        },

                                    -   "description": null,

                                    -   "effectiveDate": {

                                        -   "specificTriggerDate": null


                                        },

                                    -   "newRatePlanChargeId": "2c989028622282520162235adabc0651",

                                    -   "pricing": {

                                        -   "recurringVolume": {

                                            -   "priceChangeOption": null,

                                            -   "priceIncreasePercentage": null,

                                            -   "quantity": 7,

                                            -   "tiers": [ ]


                                            }


                                        },

                                    -   "uniqueToken": null


                                    }


                                ],

                            -   "customFields": { },

                            -   "newRatePlanId": "2c989028622282520162235ada870649",

                            -   "ratePlanId": "2c989028622282520162235acd1b05d2",

                            -   "specificUpdateDate": null,

                            -   "uniqueToken": null


                            }


                        }


                    ],

                -   "subscriptionNumber": "A-S00000001"


                }


            ],

        -   "updatedBy": "2c989028622282520162235ab0f603ba",

        -   "updatedDate": "2018-03-14 15:12:58"


        },

    -   {

        -   "createdBy": "2c989028622282520162235ab0f603ba",

        -   "createdDate": "2018-03-14 15:12:55",

        -   "currency": "USD",

        -   "customFields": {

            -   "order_cf_date__c": "2017-01-01"


            },

        -   "existingAccountNumber": "accountA_Num",

        -   "orderDate": "2017-01-01",

        -   "orderNumber": "O-00000001",

        -   "status": "Completed",

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

                            -   "invoiceSeparately": null,

                            -   "notes": null,

                            -   "subscribeToRatePlans": [

                                -   {

                                    -   "chargeOverrides": [

                                        -   {

                                            -   "billing": {

                                                -   "billCycleDay": 1,

                                                -   "billCycleType": null,

                                                -   "billingPeriod": null,

                                                -   "billingPeriodAlignment": null,

                                                -   "billingTiming": null,

                                                -   "specificBillingPeriod": null,

                                                -   "weeklyBillCycleDay": null


                                                },

                                            -   "chargeNumber": "C-00000001",

                                            -   "customFields": {

                                                -   "srpc_cf_picklist__c": null


                                                },

                                            -   "description": null,

                                            -   "endDate": {

                                                -   "endDateCondition": null,

                                                -   "specificEndDate": null,

                                                -   "upToPeriods": null,

                                                -   "upToPeriodsType": null


                                                },

                                            -   "pricing": {

                                                -   "recurringVolume": {

                                                    -   "listPriceBase": "Per_Billing_Period",

                                                    -   "priceChangeOption": null,

                                                    -   "priceIncreasePercentage": null,

                                                    -   "quantity": 12,

                                                    -   "tiers": [ ]


                                                    }


                                                },

                                            -   "productRateplanChargeId": "2c989028622282520162235aca7a05b9",

                                            -   "startDate": {

                                                -   "specificTriggerDate": null


                                                },

                                            -   "uniqueToken": null


                                            }


                                        ],

                                    -   "customFields": { },

                                    -   "newRatePlanId": "2c989028622282520162235acd1b05d2",

                                    -   "productRatePlanId": "2c989028622282520162235ac91605b3",

                                    -   "uniqueToken": null


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

                            -   "oa_cf_text__c": "oa cf test"


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


                                },

                            -   {

                                -   "name": "CustomerAcceptance",

                                -   "triggerDate": "2017-01-01"


                                }


                            ],

                        -   "type": "CreateSubscription"


                        }


                    ],

                -   "subscriptionNumber": "A-S00000001"


                }


            ],

        -   "updatedBy": "2c989028622282520162235ab0f603ba",

        -   "updatedDate": "2018-03-14 15:12:55"


        }


    ],

-   "success": true


}`
