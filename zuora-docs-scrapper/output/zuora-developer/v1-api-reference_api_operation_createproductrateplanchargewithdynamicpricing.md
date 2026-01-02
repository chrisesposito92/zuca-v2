---
title: "CreateProductRatePlanChargeWithDynamicPricing"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createProductRatePlanChargeWithDynamicPricing/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:22.528Z"
---

## Create a product rate plan charge with Dynamic Pricing

Create a product rate plan charge (PRPC) in the Product Catalog. Use this endpoint to configure Dynamic Pricing, including default pricing at the charge level and conditional rate cards evaluated by attribute values.

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

| chargerequired | objectProduct rate plan charge (PRPC) definition including pricing model, billing settings, trigger event, and attribute-based rate cards for Dynamic Pricing. |
| --- | --- |

Responses

200

OK

400

Bad Request

401

Unauthorized

post/commerce/charges

Request samples

-   Payload
-   cURL

application/json

Per-unit charge exampleTiered charge examplePer-unit charge example

Copy

Expand allCollapse all

`{

-   "charge": {

    -   "charge_model": "per_unit",

    -   "charge_type": "recurring",

    -   "description": "description",

    -   "name": "charge with dimensional price 1",

    -   "unit_of_measure": "Each",

    -   "default_quantity": 10,

    -   "bill_cycle": {

        -   "period": "bill_cycle_period_month",

        -   "period_alignment": "align_to_charge",

        -   "timing": "in_advance",

        -   "type": "default_from_customer"


        },

    -   "trigger_event": "contract_effective",

    -   "product_rate_plan_id": "f5cf096c5ca94443f76446a981e50000",

    -   "end_date_condition": "subscription_end",

    -   "up_to_periods_type": "billing_periods",

    -   "up_to_periods": 0,

    -   "list_price_base": "Per_Billing_Period",

    -   "specific_list_price_base": 0,

    -   "formula": "price + 1",

    -   "tax_mode": "non_taxable",

    -   "tax_code": "TAX_EXEMPT",

    -   "accounting": {

        -   "accounting_code": "PRPC-REV-001",

        -   "accounts_receivable_account": "Accounts Receivable",

        -   "deferred_revenue_account": "Deferred Revenue",

        -   "recognized_revenue_account": "Recognized Revenue",

        -   "contract_asset_account": "Contract Asset",

        -   "contract_liability_account": "Contract Liability",

        -   "contract_recognized_revenue_account": "Contract Recognized Revenue",

        -   "unbilled_receivables_account": "Unbilled Receivables",

        -   "adjustment_liability_account": "Adjustment Liability",

        -   "adjustment_revenue_account": "Adjustment Revenue"


        },

    -   "revenue": {

        -   "revenue_recognition_rule_name": "Recognize upon invoicing",

        -   "exclude_item_billing_from_revenue_accounting": false,

        -   "exclude_item_booking_from_revenue_accounting": false


        },

    -   "custom_fields": {

        -   "region__c": "US",

        -   "channel__c": "Online"


        },

    -   "netsuite": {

        -   "SubsidiaryNS": "US",

        -   "RecognizedRevAccountNS": 4000,

        -   "DeferredRevAccountNS": 2500


        },

    -   "attributes": [

        -   {

            -   "name": "Age",

            -   "type": "Integer",

            -   "mapping": {

                -   "object": "account",

                -   "field": "age__c"


                }


            }


        ],

    -   "rate_cards": [

        -   {

            -   "attributes": [

                -   {

                    -   "name": "Age",

                    -   "operator": "<=",

                    -   "value": 12


                    }


                ],

            -   "pricing": {

                -   "unit_amounts": {

                    -   "USD": 90


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


                    }


                ],

            -   "pricing": {

                -   "unit_amounts": {

                    -   "USD": 100


                    }


                }


            },

        -   {

            -   "attributes": [

                -   {

                    -   "name": "Age",

                    -   "operator": ">=",

                    -   "value": 60


                    }


                ],

            -   "pricing": {

                -   "unit_amounts": {

                    -   "USD": 80


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

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "accounting": {

    -   "accountingCode": "PRPC-REV-001",

    -   "accountsReceivableAccount": "Accounts Receivable",

    -   "accountsReceivableAccountType": "AccountsReceivable",

    -   "deferredRevenueAccount": "Deferred Revenue",

    -   "deferredRevenueAccountType": "DeferredRevenue",

    -   "recognizedRevenueAccount": "Recognized Revenue",

    -   "recognizedRevenueAccountType": "Recognized Revenue",

    -   "adjustmentLiabilityAccount": "adjustL-1",

    -   "adjustmentLiabilityAccountType": "AdjustmentLiability",

    -   "adjustmentRevenueAccount": "adjustRev-1",

    -   "adjustmentRevenueAccountType": "AdjustmentRevenue",

    -   "contractAssetAccount": "CA-2",

    -   "contractAssetAccountType": "ContractAsset",

    -   "contractLiabilityAccount": "CL-2",

    -   "contractLiabilityAccountType": "ContractLiability",

    -   "contractRecognizedRevenueAccount": "Contract Recognized Revenue",

    -   "contractRecognizedRevenueAccountType": "RecognizedRevenue",

    -   "unbilledReceivablesAccount": "unbilledR-1",

    -   "unbilledReceivablesAccountType": "UnbilledReceivables",

    -   "productRatePlanChargeId": "ad95b694d2b8442b84dc8ad26561c7d7"


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

-   "specificListPriceBase": 0,

-   "mergedRateCards": [ ],

-   "name": "Flat PRPC 1",

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

-   "taxMode": "non_taxable",

-   "taxCode": "TAX_EXEMPT",

-   "taxable": false,

-   "triggerEvent": "contract_effective",

-   "updatedById": "53c162482f054f3ca08e1ec82dccfec9",

-   "updatedTime": "2025-10-13T07:46:02.000+00:00",

-   "useTenantDefaultForPriceChange": true


}`
