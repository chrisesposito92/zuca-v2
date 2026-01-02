---
title: "CreatePlan"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createPlan/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:22.778Z"
---

## Create a product rate plan

Create a product rate plan (Plan) under an existing product. A plan includes one or more **charges**. Each charge **must** include:

-   `name`
-   `charge_model`
-   `charge_type`
-   `bill_cycle`
-   `trigger_event`
-   `end_date_condition`
-   `pricing`

Optional charge fields include: `unit_of_measure`, `list_price_base`, and `accounting` (with `accounting_code`, `deferred_revenue_account`, `recognized_revenue_account`).

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

| product_keyrequired | stringThe unique identifier of the product under which the plan is created. |
| --- | --- |
| namerequired | stringThe name of the rate plan. |
| start_daterequired | string <date>Plan effective start date (UTC, YYYY-MM-DD). |
| end_daterequired | string <date>Plan effective end date (UTC, YYYY-MM-DD). |
| active_currenciesrequired | Array of strings non-emptyISO currency codes enabled for this plan. |
| chargesrequired | Array of objects non-emptyThe list of product rate plan charges to create under the plan. |

Responses

200

OK

400

Bad Request

post/commerce/plans

Request samples

-   Payload
-   cURL

application/json

Create a plan with two recurring flat-fee chargesCreate a plan with two recurring flat-fee charges

Copy

Expand allCollapse all

`{

-   "product_key": "6b14067136304e64b090daccae6680cb",

-   "name": "New plan",

-   "start_date": "2024-01-01",

-   "end_date": "2049-12-31",

-   "active_currencies": [

    -   "USD"


    ],

-   "charges": [

    -   {

        -   "name": "Flat PRPC 1",

        -   "charge_model": "flat_fee",

        -   "charge_type": "recurring",

        -   "pricing": {

            -   "flat_amounts": {

                -   "USD": 100


                }


            },

        -   "bill_cycle": {

            -   "type": "specific_day_of_month",

            -   "day_of_month": 5,

            -   "period_alignment": "align_to_charge",

            -   "period": "bill_cycle_period_month"


            },

        -   "end_date_condition": "subscription_end",

        -   "up_to_periods_type": "billing_periods",

        -   "up_to_periods": 0,

        -   "list_price_base": "Per_Billing_Period",

        -   "specific_list_price_base": 0,

        -   "trigger_event": "contract_effective",

        -   "accounting": {

            -   "accounting_code": "PRPC-REV-001",

            -   "accounts_receivable_account": "Accounts Receivable",

            -   "deferred_revenue_account": "Deferred Revenue",

            -   "recognized_revenue_account": "Recognized Revenue",

            -   "adjustment_liability_account": "adjustL-1",

            -   "adjustment_revenue_account": "adjustRev-1",

            -   "contract_asset_account": "CA-2",

            -   "contract_liability_account": "CL-2",

            -   "contract_recognized_revenue_account": "Contract Recognized Revenue",

            -   "unbilled_receivables_account": "unbilledR-1"


            }


        },

    -   {

        -   "name": "Flat PRPC 2",

        -   "charge_model": "flat_fee",

        -   "charge_type": "recurring",

        -   "pricing": {

            -   "flat_amounts": {

                -   "USD": 100


                }


            },

        -   "bill_cycle": {

            -   "type": "specific_day_of_month",

            -   "day_of_month": 5,

            -   "period_alignment": "align_to_charge",

            -   "period": "bill_cycle_period_month"


            },

        -   "end_date_condition": "subscription_end",

        -   "trigger_event": "contract_effective",

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


}`

Response samples

-   200
-   400

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "activeCurrencies": [

    -   "USD"


    ],

-   "attributes": [ ],

-   "contextFilters": [ ],

-   "createTime": "2025-10-13T07:46:02.314-07:00",

-   "createdBy": "53c162482f054f3ca08e1ec82dccfec9",

-   "customFields": { },

-   "description": "",

-   "displayName": "",

-   "endDate": "2049-12-31",

-   "entitlements": [ ],

-   "externalIdSourceSystem": "",

-   "externalRateplanId": [ ],

-   "id": "ee2d1ce1036c4dd6ae9d6945565ff7a0",

-   "name": "New plan",

-   "netsuite": null,

-   "organizationLabels": [ ],

-   "productId": "7228c9e6fd814e3a9e59bcdf0117e34f",

-   "productRatePlanCharges": [

    -   {

        -   "accounting": {

            -   "accountingCode": "PRPC-REV-001",

            -   "accountsReceivableAccount": "Accounts Receivable",

            -   "accountsReceivableAccountType": "AccountsReceivable",

            -   "deferredRevenueAccount": "Deferred Revenue",

            -   "deferredRevenueAccountType": "DeferredRevenue",

            -   "recognizedRevenueAccount": "Recognized Revenue",

            -   "recognizedRevenueAccountType": "RecognizedRevenue",

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

        -   "createdTime": "2025-10-13T07:46:02.375-07:00",

        -   "customFields": { },

        -   "discountOptions": {

            -   "applyToBillingPeriodPartially": false,

            -   "reflectDiscountInNetAmount": false,

            -   "rollover": false,

            -   "stackedDiscount": false


            },

        -   "drawdown": { },

        -   "endDateCondition": "subscription_end",

        -   "upToPeriodsType": "billing_periods",

        -   "upToPeriods": 0,

        -   "listPriceBase": "Per_Billing_Period",

        -   "specificListPriceBase": 0,

        -   "extendedPrice": { },

        -   "id": "ad95b694d2b8442b84dc8ad26561c7d7",

        -   "isChargeLevelMinCommit": false,

        -   "isCommitted": false,

        -   "labels": { },

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

        -   "taxable": false,

        -   "triggerEvent": "contract_effective",

        -   "updatedById": "53c162482f054f3ca08e1ec82dccfec9",

        -   "updatedTime": "2025-10-13T07:46:02.375-07:00",

        -   "useTenantDefaultForPriceChange": true


        }


    ],

-   "productRatePlanNumber": "PRP-00000195",

-   "startDate": "2024-01-01",

-   "state": "active",

-   "updateTime": "2025-10-13T07:46:02.314-07:00",

-   "updatedBy": "53c162482f054f3ca08e1ec82dccfec9"


}`
