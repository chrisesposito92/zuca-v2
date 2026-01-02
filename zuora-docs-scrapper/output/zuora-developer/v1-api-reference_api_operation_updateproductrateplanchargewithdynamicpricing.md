---
title: "UpdateProductRatePlanChargeWithDynamicPricing"
url: "https://developer.zuora.com/v1-api-reference/api/operation/updateProductRatePlanChargeWithDynamicPricing/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:22.748Z"
---

## Update a product rate plan charge with Dynamic Pricing

Update an existing product rate plan charge (PRPC). Use this API to update default pricing and/or conditional rate cards.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

##### Request Body schema: application/json
required

| chargerequired | objectFields to update on the product rate plan charge (PRPC). Only the properties provided will be considered for update (patch semantics). Unsupported updates are ignored by the service. |
| --- | --- |

Responses

200

OK

400

Request Errors or Unauthorized

401

Unauthorized

500

Internal Server Error

put/commerce/charges

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "charge": {

    -   "id": "9c4867ed55db43a89731605d5654d4ed",

    -   "pricing": {

        -   "unit_amounts": {

            -   "USD": 175


            }


        },

    -   "rate_cards": [

        -   {

            -   "attributes": [

                -   {

                    -   "name": "Age",

                    -   "operator": "<=",

                    -   "value": 12


                    },

                -   {

                    -   "name": "EffectiveDate",

                    -   "operator": ">=",

                    -   "value": "2025-02-01T00:00:00+00:00"


                    }


                ],

            -   "pricing": {

                -   "unit_amounts": {

                    -   "USD": 180


                    }


                }


            },

        -   {

            -   "attributes": [

                -   {

                    -   "name": "Age",

                    -   "operator": "between",

                    -   "value": [

                        -   12,

                        -   60


                        ]


                    },

                -   {

                    -   "name": "EffectiveDate",

                    -   "operator": ">=",

                    -   "value": "2025-02-01T00:00:00+00:00"


                    }


                ],

            -   "pricing": {

                -   "unit_amounts": {

                    -   "USD": 200


                    }


                }


            },

        -   {

            -   "attributes": [

                -   {

                    -   "name": "Age",

                    -   "operator": ">=",

                    -   "value": 60


                    },

                -   {

                    -   "name": "EffectiveDate",

                    -   "operator": ">=",

                    -   "value": "2025-02-01T00:00:00+00:00"


                    }


                ],

            -   "pricing": {

                -   "unit_amounts": {

                    -   "USD": 160


                    }


                }


            }


        ]


    }


}`

Response samples

-   200
-   400
-   401
-   500

application/json

Copy

Expand allCollapse all

`{

-   "accounting": {

    -   "accountsReceivableAccount": "Accounts Receivable",

    -   "accountsReceivableAccountType": "AccountsReceivable",

    -   "deferredRevenueAccount": "Accounts Receivable",

    -   "deferredRevenueAccountType": "AccountsReceivable",

    -   "recognizedRevenueAccount": "Accounts Receivable",

    -   "recognizedRevenueAccountType": "AccountsReceivable"


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

-   "createdTime": "2025-10-13T07:46:02.000+00:00",

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

-   "id": "ad95b694d2b8442b84dc8ad26561c7d7",

-   "isChargeLevelMinCommit": false,

-   "isCommitted": false,

-   "labels": { },

-   "listPriceBase": "Per_Billing_Period",

-   "mergedRateCards": [ ],

-   "name": "Flat PRPC 1",

-   "negotiatedRateCards": [ ],

-   "netsuite": { },

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

-   "pricingSummary": [

    -   "USD100"


    ],

-   "pricingWaterfalls": { },

-   "productChargeDefinitions": [ ],

-   "productRatePlanChargeNumber": "PRPC-00000279",

-   "productRatePlanId": "ee2d1ce1036c4dd6ae9d6945565ff7a0",

-   "prorationOption": "default_from_tenant_setting",

-   "rateCards": [ ],

-   "revenue": {

    -   "excludeItemBillingFromRevenueAccounting": false,

    -   "excludeItemBookingFromRevenueAccounting": false,

    -   "legacyReporting": false,

    -   "revenueRecognitionRuleName": "Recognize upon invoicing"


    },

-   "taxCode": "TAX_EXEMPT",

-   "taxMode": "non_taxable",

-   "taxable": false,

-   "triggerEvent": "contract_effective",

-   "unitOfMeasure": "Each",

-   "updatedById": "53c162482f054f3ca08e1ec82dccfec9",

-   "updatedTime": "2025-10-13T07:46:02.000+00:00",

-   "useTenantDefaultForPriceChange": true


}`
