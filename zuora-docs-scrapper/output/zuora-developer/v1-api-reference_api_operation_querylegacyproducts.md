---
title: "QueryLegacyProducts"
url: "https://developer.zuora.com/v1-api-reference/api/operation/queryLegacyProducts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:58.176Z"
---

## Query legacy products from the Product Catalog

This operation is functionally equivalent to the "Query products from the Product Catalog" operation, except that it returns results in the **V1 response format**. It is primarily intended for customers migrating from older V1 integrations who want to use new Commerce capabilities — such as **Dynamic Pricing**—without refactoring their existing integrations.

Unlike the "Query products from the Product Catalog" operation, this operation does not retrieve a different set of products.
It returns the same product catalog data as the newer operation, but formatted in a flattened V1-style response structure that:

-   Uses **flattened fields** instead of grouped objects such as `discount_options`, `revenue`, or `bill_cycle`.
-   Retains **V1 field names** for easier migration from existing V1 operations, for example:
    -   [Retrieve a product rate plan charge](https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveProductRatePlanCharge/).
    -   [Retrieve a product rate plan](https://developer.zuora.com/v1-api-reference/api/operation/queryProductRatePlanByKey/).
    -   [Retrieve a product](https://developer.zuora.com/v1-api-reference/api/operation/queryProductByKey/).
-   Keeps certain objects, such as `netsuite` and `customFields`, as grouped structures instead of flattening them.

**Recommended Usage**

-   Use this operation if you are migrating from V1 APIs and need to maintain compatibility with existing integrations.
-   For new integrations, use the "Query products from the Product Catalog" operation instead, as it returns structured responses optimized for the **Commerce** feature.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

| filters | Array of objectsFilter conditions for querying legacy products. Each filter defines a field, an operator, and a value to match against. Common filter fields include id, name, product_number, or category. |
| --- | --- |
| expand | objectDefines whether to include related entities such as Product Rate Plans (PRPs) and Product Rate Plan Charges (PRPCs) in the response. Each key corresponds to an entity type that can be expanded. |

Responses

200

Successful query

400

Bad Request

401

Unauthorized

post/commerce/legacy/products/list

Request samples

-   Payload
-   cURL

application/json

Query product by ID and expand plans and chargesQuery product by ID and expand plans and charges

Copy

Expand allCollapse all

`{

-   "filters": [

    -   {

        -   "field": "id",

        -   "operator": "EQ",

        -   "value": "7228c9e6fd814e3a9e59bcdf0117e34f"


        }


    ],

-   "expand": {

    -   "product_rate_plans": true,

    -   "product_rate_plan_charges": true


    }


}`

Response samples

-   200
-   400
-   401

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "values": [

    -   {

        -   "id": "ee2d1ce1036c4dd6ae9d6945565ff7a0",

        -   "name": "New prod",

        -   "state": "active",

        -   "effectiveStartDate": "2024-01-01",

        -   "effectiveEndDate": "2050-12-31",

        -   "customFields": {

            -   "InexedCFTest__c": "Test1",

            -   "nonidxpicklist__c": "nidx1"


            },

        -   "productRatePlans": [

            -   {

                -   "id": "c3a52dd029704b7e89274c9e7e8fd99c",

                -   "name": "Demo Rate Plan",

                -   "state": "active",

                -   "activeCurrencies": [

                    -   "USD"


                    ],

                -   "productRatePlanCharges": [

                    -   {

                        -   "id": "ebcd93dc77b34d20912dbfae5881acff",

                        -   "name": "Charge with state 2",

                        -   "type": "Recurring",

                        -   "model": "PerUnit",

                        -   "uom": "Each",

                        -   "billingPeriod": "Month",

                        -   "billingTiming": "IN_ADVANCE",

                        -   "listPriceBase": "Per_Billing_Period",

                        -   "pricing": [

                            -   {

                                -   "currency": "USD",

                                -   "price": 101,

                                -   "tiers": [ ]


                                }


                            ],

                        -   "attributes": [

                            -   {

                                -   "name": "State",

                                -   "type": "String",

                                -   "mapping": {

                                    -   "object": "account",

                                    -   "field": "state__c"


                                    }


                                },

                            -   {

                                -   "name": "EffectiveDate",

                                -   "type": "Datetime"


                                }


                            ]


                        },

                    -   {

                        -   "id": "5b8ec92e6af64e8fa2d8b9756b9fed10",

                        -   "name": "Charge with state 1",

                        -   "type": "Recurring",

                        -   "model": "PerUnit",

                        -   "uom": "Each",

                        -   "billingPeriod": "Month",

                        -   "billingTiming": "IN_ADVANCE",

                        -   "listPriceBase": "Per_Billing_Period",

                        -   "pricing": [

                            -   {

                                -   "currency": "USD",

                                -   "price": 100,

                                -   "tiers": [ ]


                                }


                            ]


                        }


                    ]


                }


            ]


        }


    ]


}`
