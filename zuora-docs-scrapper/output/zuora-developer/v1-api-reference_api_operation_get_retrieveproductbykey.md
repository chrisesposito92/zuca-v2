---
title: "GET RetrieveProductByKey"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveProductByKey/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:57.893Z"
---

## Retrieve a product by key

Retrieves detailed information about a specific product by its unique product number or ID.

Security**bearerAuth**

Request

##### path Parameters

| product_keyrequired | stringThe unique number or ID of the product to be retrieved. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/commerce/products/{product\_key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/commerce/products/{product\_key}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "7228c9e6fd814e3a9e59bcdf0117e34f",

-   "createdBy": "53c162482f054f3ca08e1ec82dccfec9",

-   "createdTime": "2025-10-13T07:44:55.000-07:00",

-   "updatedBy": "53c162482f054f3ca08e1ec82dccfec9",

-   "updatedTime": "2025-10-13T07:44:55.000-07:00",

-   "name": "New prod",

-   "description": "Example product description",

-   "productNumber": "PC-00000103",

-   "sku": "SKU-00000133",

-   "startDate": "2024-01-01",

-   "endDate": "2050-12-31",

-   "category": "base",

-   "customFields": { },

-   "customObjects": null,

-   "allowFeatureChanges": false,

-   "productRatePlans": [

    -   {

        -   "id": "38660706ef2f48cfb5222f7dde491895",

        -   "createdBy": "53c162482f054f3ca08e1ec82dccfec9",

        -   "createTime": "2025-02-24T01:21:23.000+00:00",

        -   "updatedBy": "53c162482f054f3ca08e1ec82dccfec9",

        -   "updateTime": "2025-02-24T01:21:23.000+00:00",

        -   "name": "Bronze Plan",

        -   "displayName": "Bronze Plan",

        -   "description": "Basic version of our software service",

        -   "productId": "7228c9e6fd814e3a9e59bcdf0117e34f",

        -   "startDate": "2025-09-10",

        -   "endDate": "2027-01-01",

        -   "state": "active",

        -   "status": "ACTIVE",

        -   "activeCurrencies": [

            -   "USD"


            ],

        -   "productRatePlanNumber": "PRP-00000172",

        -   "productRatePlanCharges": [

            -   {

                -   "id": "fe9b0e764dca4178a11c0e471e5dc0d8",

                -   "productRatePlanChargeNumber": "PRPC-00000279",

                -   "name": "prepay_currency",

                -   "description": "Prepaid recurring software fee",

                -   "chargeType": "recurring",

                -   "chargeModel": "flat_fee",

                -   "listPriceBase": "Per_Billing_Period",

                -   "specificListPriceBase": 1,

                -   "triggerEvent": "contract_effective",

                -   "endDateCondition": "subscription_end",

                -   "upToPeriodsType": "billing_periods",

                -   "upToPeriods": 1,

                -   "billCycle": {

                    -   "period": "bill_cycle_period_quarter",

                    -   "periodAlignment": "align_to_term_start",

                    -   "timing": "in_advance",

                    -   "type": "term_start_day"


                    },

                -   "pricing": {

                    -   "flatAmounts": {

                        -   "USD": 30


                        },

                    -   "tiers": [ ]


                    },

                -   "pricingSummary": [

                    -   "USD30"


                    ],

                -   "taxMode": "non_taxable",

                -   "taxable": false,

                -   "createdById": "53c162482f054f3ca08e1ec82dccfec9",

                -   "createdTime": "2025-02-24T01:21:23.000+00:00",

                -   "updatedById": "53c162482f054f3ca08e1ec82dccfec9",

                -   "updatedTime": "2025-02-24T01:21:23.000+00:00"


                }


            ]


        }


    ],

-   "features": [ ],

-   "netsuite": null,

-   "organizationLabels": [ ],

-   "contextFilters": [ ],

-   "legacyFeatures": [ ],

-   "dacTag": {

    -   "id": "1234567890abcdef",

    -   "name": "Example DAC Tag"


    },

-   "error": null


}`
