---
title: "GET RampMetricsByOrderNumber"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RampMetricsByOrderNumber/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:21.283Z"
---

## List ramp metrics by order number

**Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information coming October 2020.

Retrieves key ramp metrics about a specified order, including the following metrics:

-   TCB, TCV in the Ramp level
-   TCB, TCV in the Interval level
-   TCB, TCV, Quantity, and MRR in Interval Metrics
-   Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics

See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.

Security**bearerAuth**

Request

##### path Parameters

| orderNumberrequired | stringThe number of the existing order. |
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

get/v1/orders/{orderNumber}/ramp-metrics

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/orders/{orderNumber}/ramp-metrics' \\
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

-   "rampMetrics": [

    -   {

        -   "description": "",

        -   "discountTcb": 0,

        -   "discountTcv": 0,

        -   "grossTcb": 240,

        -   "grossTcv": 240,

        -   "intervals": [

            -   {

                -   "description": "",

                -   "discountTcb": 0,

                -   "discountTcv": 0,

                -   "endDate": "2020-12-31",

                -   "grossTcb": 120,

                -   "grossTcv": 120,

                -   "intervalDeltaMetrics": [

                    -   {

                        -   "chargeNumber": "C-00000204",

                        -   "deltaDiscountTcb": 0,

                        -   "deltaDiscountTcv": 0,

                        -   "deltaGrossTcb": 120,

                        -   "deltaGrossTcv": 120,

                        -   "deltaMrr": [

                            -   {

                                -   "discount": 0,

                                -   "endDate": "2020-12-31",

                                -   "gross": 10,

                                -   "net": 10,

                                -   "startDate": "2020-01-01"


                                }


                            ],

                        -   "deltaNetTcb": 120,

                        -   "deltaNetTcv": 120,

                        -   "deltaQuantity": [

                            -   {

                                -   "amount": 1,

                                -   "endDate": "2020-12-31",

                                -   "startDate": "2020-01-01"


                                }


                            ],

                        -   "productRatePlanChargeId": "40289f7b7115832f0171158e6dd906cd",

                        -   "subscriptionNumber": "A-S00000289"


                        }


                    ],

                -   "intervalMetrics": [

                    -   {

                        -   "chargeNumber": "C-00000204",

                        -   "discountTcb": 0,

                        -   "discountTcv": 0,

                        -   "endDate": "2020-12-31",

                        -   "grossTcb": 120,

                        -   "grossTcv": 120,

                        -   "mrr": [

                            -   {

                                -   "discount": 0,

                                -   "endDate": "2020-12-31",

                                -   "gross": 10,

                                -   "net": 10,

                                -   "startDate": "2020-01-01"


                                }


                            ],

                        -   "netTcb": 120,

                        -   "netTcv": 120,

                        -   "productRatePlanChargeId": "40289f7b7115832f0171158e6dd906cd",

                        -   "quantity": 1,

                        -   "ratePlanChargeId": "40289f7b7322a15901732392a904000a",

                        -   "startDate": "2020-01-01",

                        -   "subscriptionNumber": "A-S00000289"


                        }


                    ],

                -   "name": "Year 1",

                -   "netTcb": 120,

                -   "netTcv": 120,

                -   "startDate": "2020-01-01"


                },

            -   {

                -   "description": "",

                -   "discountTcb": 0,

                -   "discountTcv": 0,

                -   "endDate": "2021-12-31",

                -   "grossTcb": 120,

                -   "grossTcv": 120,

                -   "intervalDeltaMetrics": [

                    -   {

                        -   "chargeNumber": "C-00000204",

                        -   "deltaDiscountTcb": 0,

                        -   "deltaDiscountTcv": 0,

                        -   "deltaGrossTcb": 120,

                        -   "deltaGrossTcv": 120,

                        -   "deltaMrr": [

                            -   {

                                -   "discount": 0,

                                -   "endDate": "2021-12-31",

                                -   "gross": 10,

                                -   "net": 10,

                                -   "startDate": "2021-01-01"


                                }


                            ],

                        -   "deltaNetTcb": 120,

                        -   "deltaNetTcv": 120,

                        -   "deltaQuantity": [

                            -   {

                                -   "amount": 1,

                                -   "endDate": "2021-12-31",

                                -   "startDate": "2021-01-01"


                                }


                            ],

                        -   "productRatePlanChargeId": "40289f7b7115832f0171158e6dd906cd",

                        -   "subscriptionNumber": "A-S00000289"


                        }


                    ],

                -   "intervalMetrics": [

                    -   {

                        -   "chargeNumber": "C-00000204",

                        -   "discountTcb": 0,

                        -   "discountTcv": 0,

                        -   "endDate": "2021-12-31",

                        -   "grossTcb": 120,

                        -   "grossTcv": 120,

                        -   "mrr": [

                            -   {

                                -   "discount": 0,

                                -   "endDate": "2021-12-31",

                                -   "gross": 10,

                                -   "net": 10,

                                -   "startDate": "2021-01-01"


                                }


                            ],

                        -   "netTcb": 120,

                        -   "netTcv": 120,

                        -   "productRatePlanChargeId": "40289f7b7115832f0171158e6dd906cd",

                        -   "quantity": 1,

                        -   "ratePlanChargeId": "40289f7b7322a15901732392a904000a",

                        -   "startDate": "2021-01-01",

                        -   "subscriptionNumber": "A-S00000289"


                        }


                    ],

                -   "name": "Year 2",

                -   "netTcb": 120,

                -   "netTcv": 120,

                -   "startDate": "2021-01-01"


                }


            ],

        -   "name": "Two Years Ramp",

        -   "netTcb": 240,

        -   "netTcv": 240,

        -   "number": "R-00000270"


        }


    ],

-   "success": true


}`
