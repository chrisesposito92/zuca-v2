---
title: "CreateProduct"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createProduct/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:21.733Z"
---

## Create a product with plans and charges

Create a product in the Product Catalog with one or more plans and charges. Charges can be usage (per-unit), recurring (flat fee), or other supported models.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

| namerequired | stringProduct name. |
| --- | --- |
| start_daterequired | string <date>Product effective start date (UTC, YYYY-MM-DD). |
| end_daterequired | string <date>Product effective end date (UTC, YYYY-MM-DD). |
| categoryrequired | stringProduct category.Enum: "base" "add_on" "other" |
| plansrequired | Array of objects non-emptyProduct rate plans to create under the product. |

Responses

200

OK

400

Bad Request

post/commerce/products

Request samples

-   Payload
-   cURL

application/json

Product with one plan and one recurring flat-fee chargeProduct with one plan and one recurring flat-fee charge

Copy

Expand allCollapse all

`{

-   "name": "New prod",

-   "start_date": "2024-01-01",

-   "end_date": "2050-12-31",

-   "category": "base",

-   "plans": [

    -   {

        -   "name": "Consumer Bronze Monthly",

        -   "start_date": "2024-01-01",

        -   "end_date": "2050-12-31",

        -   "active_currencies": [

            -   "USD"


            ],

        -   "charges": [

            -   {

                -   "name": "Flat PRPC",

                -   "charge_type": "recurring",

                -   "charge_model": "flat_fee",

                -   "default_quantity": 10,

                -   "min_quantity": 1,

                -   "max_quantity": 999999,

                -   "price_increase_percentage": 0,

                -   "price_change_option": "no_change",

                -   "use_tenant_default_for_price_change": true,

                -   "discount_options": {

                    -   "discount_class": "",

                    -   "discount_level": "rate_plan",

                    -   "stacked_discount": false,

                    -   "apply_to": [

                        -   "one_time",

                        -   "recurring",

                        -   "usage"


                        ],

                    -   "apply_to_billing_period_partially": false,

                    -   "reflect_discount_in_net_amount": false,

                    -   "rollover": false,

                    -   "specific_accounting_codes": false,

                    -   "apply_details": [ ]


                    },

                -   "pricing": {

                    -   "flat_amounts": {

                        -   "USD": 100


                        }


                    },

                -   "bill_cycle": {

                    -   "type": "specific_day_of_month",

                    -   "day_of_month": 5,

                    -   "period_alignment": "align_to_charge",

                    -   "period": "bill_cycle_period_month",

                    -   "timing": "in_advance"


                    },

                -   "trigger_event": "contract_effective",

                -   "end_date_condition": "subscription_end",

                -   "up_to_periods_type": "billing_periods",

                -   "up_to_periods": 0,

                -   "list_price_base": "Per_Billing_Period",

                -   "specific_list_price_base": 0,

                -   "accounting": {

                    -   "accounting_code": "PRPC-REV-002",

                    -   "accounts_receivable_account": "Accounts Receivable",

                    -   "deferred_revenue_account": "Deferred Revenue",

                    -   "recognized_revenue_account": "Recognized Revenue",

                    -   "adjustment_liability_account": "adjustL-2",

                    -   "adjustment_revenue_account": "adjustRev-2",

                    -   "contract_asset_account": "CA-3",

                    -   "contract_liability_account": "CL-3",

                    -   "contract_recognized_revenue_account": "Contract Recognized Revenue",

                    -   "unbilled_receivables_account": "unbilledR-2"


                    }


                }


            ]


        }


    ]


}`

Response samples

-   200
-   400

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "allowFeatureChanges": false,

-   "category": "base",

-   "contextFilters": [ ],

-   "createdBy": "53c162482f054f3ca08e1ec82dccfec9",

-   "createdTime": "2025-10-17T04:02:54.621-07:00",

-   "customFields": { },

-   "customObjects": null,

-   "description": "",

-   "endDate": "2050-12-31",

-   "features": [ ],

-   "id": "7ec58fadb6f84bc18e59c7529058d941",

-   "legacyFeatures": [ ],

-   "name": "New prod",

-   "netsuite": null,

-   "organizationLabels": [ ],

-   "plans": [

    -   {

        -   "activeCurrencies": [

            -   "USD"


            ],

        -   "attributes": [ ],

        -   "contextFilters": [ ],

        -   "createTime": "2025-10-17T04:02:54.655-07:00",

        -   "createdBy": "53c162482f054f3ca08e1ec82dccfec9",

        -   "customFields": { },

        -   "description": "",

        -   "displayName": "",

        -   "endDate": "2050-12-31",

        -   "entitlements": [ ],

        -   "externalIdSourceSystem": "",

        -   "externalRateplanId": [ ],

        -   "id": "572a2efe711b449e80cbef94419bc050",

        -   "name": "Consumer Bronze Monthly",

        -   "netsuite": null,

        -   "organizationLabels": [ ],

        -   "productId": "7ec58fadb6f84bc18e59c7529058d941",

        -   "productRatePlanCharges": [

            -   {

                -   "accounting": {

                    -   "accountingCode": "Accounts Receivable",

                    -   "accountsReceivableAccount": "Accounts Receivable",

                    -   "deferredRevenueAccount": "Accounts Receivable",

                    -   "recognizedRevenueAccount": "Recognized Revenue"


                    },

                -   "attributes": [ ],

                -   "billCycle": {

                    -   "dayOfMonth": 5,

                    -   "period": "bill_cycle_period_month",

                    -   "periodAlignment": "align_to_charge",

                    -   "timing": "in_advance",

                    -   "type": "specific_day_of_month"


                    },

                -   "chargeFunction": "charge_function_standard",

                -   "chargeModel": "flat_fee",

                -   "chargeType": "recurring",

                -   "createdById": "53c162482f054f3ca08e1ec82dccfec9",

                -   "createdTime": "2025-10-17T04:02:54.719-07:00",

                -   "customFields": { },

                -   "discountOptions": {

                    -   "applyDetails": [ ],

                    -   "applyTo": [ ],

                    -   "applyToBillingPeriodPartially": false,

                    -   "reflectDiscountInNetAmount": false,

                    -   "rollover": false,

                    -   "stackedDiscount": false


                    },

                -   "drawdown": { },

                -   "endDateCondition": "subscription_end",

                -   "upToPeriodsType": "billing_periods",

                -   "upToPeriods": 0,

                -   "extendedPrice": { },

                -   "id": "42db6ead399a4521bae91b3af469c074",

                -   "isChargeLevelMinCommit": false,

                -   "isCommitted": false,

                -   "labels": { },

                -   "listPriceBase": "Per_Billing_Period",

                -   "specificListPriceBase": 0,

                -   "mergedRateCards": [ ],

                -   "name": "Flat PRPC",

                -   "negotiatedRateCards": [ ],

                -   "ocmJsonByCurrency": { },

                -   "organizationLabels": [ ],

                -   "overageOptions": {

                    -   "includedUnits": 0,

                    -   "unusedUnitsCreditRates": { }


                    },

                -   "prepaid": false,

                -   "prepayment": {

                    -   "rollover": false,

                    -   "rolloverApply": "apply_last",

                    -   "rolloverPeriodLength": 0,

                    -   "rolloverPeriods": 0


                    },

                -   "priceChangeOption": "no_change",

                -   "pricing": {

                    -   "adjustments": { },

                    -   "discountAmounts": { },

                    -   "discountPercentages": { },

                    -   "flatAmounts": {

                        -   "USD": 100


                        },

                    -   "maxAmounts": { },

                    -   "minAmounts": { },

                    -   "percentages": { },

                    -   "tiers": [ ],

                    -   "unitAmounts": { }


                    },

                -   "pricingSummary": [ ],

                -   "pricingWaterfalls": { },

                -   "productChargeDefinitions": [ ],

                -   "productRatePlanChargeNumber": "PRPC-00000283",

                -   "productRatePlanId": "572a2efe711b449e80cbef94419bc050",

                -   "prorationOption": "default_from_tenant_setting",

                -   "rateCards": [ ],

                -   "revenue": {

                    -   "excludeItemBillingFromRevenueAccounting": false,

                    -   "excludeItemBookingFromRevenueAccounting": false,

                    -   "legacyReporting": false,

                    -   "revenueRecognitionRuleName": "Recognize upon invoicing"


                    },

                -   "taxable": false,

                -   "triggerEvent": "contract_effective",

                -   "updatedById": "53c162482f054f3ca08e1ec82dccfec9",

                -   "updatedTime": "2025-10-17T04:02:54.719-07:00",

                -   "useTenantDefaultForPriceChange": true


                }


            ],

        -   "productRatePlanNumber": "PRP-00000198",

        -   "startDate": "2024-01-01",

        -   "state": "active",

        -   "updateTime": "2025-10-17T04:02:54.655-07:00",

        -   "updatedBy": "53c162482f054f3ca08e1ec82dccfec9"


        }


    ],

-   "productNumber": "PC-00000105",

-   "sku": "SKU-00000135",

-   "startDate": "2024-01-01",

-   "state": "product_active",

-   "updatedBy": "53c162482f054f3ca08e1ec82dccfec9",

-   "updatedTime": "2025-10-17T04:02:54.621-07:00"


}`
