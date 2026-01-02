---
title: "QueryPurchaseOptionsbyPRPID"
url: "https://developer.zuora.com/v1-api-reference/api/operation/queryPurchaseOptionsbyPRPID/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:57.530Z"
---

## Query purchase options by PRP ID

Retrieves one or more product rate plans (PRPs) from the Product Catalog based on specified filters such as product ID or PRP ID. You can optionally expand related product rate plan charges (PRPCs) in the response.

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| filters | Array of objectsDefines the filtering criteria for querying purchase options or product rate plans. Each filter includes a target field, an operator, and a value. |
| --- | --- |
| expand | objectOptional flags to include related entities in the query results. |
| product_rate_plan_charge_key | stringOptional identifier for a specific Product Rate Plan Charge (PRPC) to query. Can be either a PRPC ID or a PRPC number/key. |
| attributes | Array of objectsOptional attributes used for evaluating Dynamic Pricing. Required when the queried PRPC is configured to depend on contextual attributes. |

Responses

200

OK

400

Bad Request

401

Unauthorized

post/commerce/purchase-options/list

Request samples

-   Payload
-   cURL

application/json

Filter by PRP ID and expand chargesFilter by Product IDFilter by PRP ID and expand charges

Copy

Expand allCollapse all

`{

-   "filters": [

    -   {

        -   "field": "prp_id",

        -   "operator": "EQ",

        -   "value": {

            -   "string_value": "8a90f5088799c8ed01879cb4b47a3b1a"


            }


        }


    ],

-   "expand": {

    -   "product_rate_plan_charges": true


    }


}`

Response samples

-   200
-   400
-   401

application/json

Successful response with one PRP (matches the request above)Successful response with one PRP (matches the request above)

Copy

Expand allCollapse all

`{

-   "error": null,

-   "productRatePlans": [

    -   {

        -   "description": "",

        -   "endDate": "2026-04-20",

        -   "id": "8a90f5088799c8ed01879cb4b47a3b1a",

        -   "name": "New Rate Plan",

        -   "product": {

            -   "allowFeatureChanges": false,

            -   "category": "base",

            -   "contextFilters": [ ],

            -   "createdTime": "2023-04-19T20:28:08.000-07:00",

            -   "customFields": {

                -   "prd_text_c__c": "a"


                },

            -   "customObjects": null,

            -   "description": "",

            -   "endDate": "2026-04-20",

            -   "features": [ ],

            -   "id": "8a90f5088799c8ed01879cb481d83b18",

            -   "legacyFeatures": [ ],

            -   "name": "ztax-product",

            -   "netsuite": null,

            -   "organizationLabels": [ ],

            -   "productNumber": "PC-00000037",

            -   "productRatePlans": [ ],

            -   "sku": "SKU-00000043",

            -   "startDate": "2022-04-04",

            -   "state": "product_active"


            },

        -   "productId": "8a90f5088799c8ed01879cb481d83b18",

        -   "productRatePlanCharges": [

            -   {

                -   "accounting": {

                    -   "accountsReceivableAccount": "Accounts Receivable",

                    -   "accountsReceivableAccountType": "AccountsReceivable"


                    },

                -   "attributes": [ ],

                -   "billCycle": {

                    -   "period": "bill_cycle_period_month",

                    -   "periodAlignment": "align_to_charge",

                    -   "timing": "in_advance",

                    -   "type": "default_from_customer"


                    },

                -   "chargeModel": "flat_fee",

                -   "chargeType": "recurring",

                -   "createdById": "2c92c8fb7a2d26b6017a2eaa64c72dea",

                -   "customFieldId": "3687818732",

                -   "customFields": {

                    -   "IncludeTowardsMinimumCommitmentAmount__c": null,

                    -   "ProductType__c": null,

                    -   "TrueUpChargeLevel__c": null,

                    -   "TrueUpCharge__c": null,

                    -   "aaa__c": null


                    },

                -   "deliverySchedule": {

                    -   "frequency": "delivery_frequency_unspecified",

                    -   "friday": false,

                    -   "monday": false,

                    -   "saturday": false,

                    -   "sunday": false,

                    -   "thursday": false,

                    -   "tuesday": false,

                    -   "wednesday": false


                    },

                -   "description": "",

                -   "discountOptions": {

                    -   "applyDetails": [ ],

                    -   "applyTo": [ ],

                    -   "applyToBillingPeriodPartially": false,

                    -   "reflectDiscountInNetAmount": false,

                    -   "rollover": false,

                    -   "stackedDiscount": false,

                    -   "drawdown": { },

                    -   "endDateCondition": "subscription_end",

                    -   "upToPeriodsType": "billing_periods",

                    -   "upToPeriods": 0,

                    -   "listPriceBase": "Per_Billing_Period",

                    -   "specificListPriceBase": 0


                    },

                -   "id": "8a90876c8799b81801879cb516f8400b",

                -   "name": "New Component",

                -   "pricing": {

                    -   "adjustments": { },

                    -   "discountAmounts": { },

                    -   "discountPercentages": { },

                    -   "flatAmounts": {

                        -   "USD": 100


                        },

                    -   "maxAmounts": { },

                    -   "metadata": { },

                    -   "minAmounts": { },

                    -   "percentages": { },

                    -   "tiers": [ ],

                    -   "unitAmounts": { }


                    },

                -   "pricingSummary": [

                    -   "USD100"


                    ],

                -   "revenue": {

                    -   "excludeItemBillingFromRevenueAccounting": false,

                    -   "excludeItemBookingFromRevenueAccounting": false,

                    -   "legacyReporting": false,

                    -   "revenueRecognitionCode": "USD",

                    -   "revenueRecognitionRuleName": "Recognize upon invoicing"


                    },

                -   "taxMode": "tax_exclusive",

                -   "taxable": true,

                -   "triggerEvent": "contract_effective",

                -   "updatedTime": "2023-04-19T20:28:46.000+00:00"


                }


            ],

        -   "productRatePlanNumber": "PRP-00000001",

        -   "startDate": "2022-04-20",

        -   "state": "active"


        }


    ]


}`
