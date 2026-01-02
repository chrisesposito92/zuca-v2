---
title: "QueryCommerceProductRatePlans"
url: "https://developer.zuora.com/v1-api-reference/api/operation/queryCommerceProductRatePlans/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:47:22.879Z"
---

## Query product rate plan details

Retrieve details of a **single** product rate plan (PRP) from the Product Catalog. You can expand associated product rate plan charges for each plan. This operation is a **strict lookup** and **requires** `product_rate_plan_key`. It does **not** support `attributes` or other list-style filters. To browse or filter plans (including by `attributes`), use the "Query product rate plans" operation (`POST /commerce/plans/list`).

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

| product_rate_plan_key | stringUnique identifier (key) of the Product Rate Plan (PRP) to query. This can be the PRP ID or the PRP number configured in your system. |
| --- | --- |
| expand | objectOptional flags to expand related resources in the response. |
| attributes | Array of objectsOptional attribute values to use when evaluating Dynamic Pricing for the PRP or its charges. All required attributes must be supplied if the PRP or PRPC is configured to require them. |
| evaluation_level | stringControls how pricing is evaluated for the charge. Supported values: - LIST_PRICE: evaluate pricing at the list-price level. - EXTENDED_PRICE: evaluate pricing at the extended-price level. If not specified, the default is LIST_PRICE.Enum: "LIST_PRICE" "EXTENDED_PRICE" |

Responses

200

OK

400

Bad Request

401

Unauthorized

post/commerce/plans/query

Request samples

-   Payload
-   cURL

application/json

Query a single PRP by key and expand chargesQuery a single PRP by key (no expansion)Query a single PRP by key and expand charges

Copy

Expand allCollapse all

`{

-   "product_rate_plan_key": "572a2efe711b449e80cbef94419bc050",

-   "expand": {

    -   "product_rate_plan_charges": true


    }


}`

Response samples

-   200
-   400
-   401

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
