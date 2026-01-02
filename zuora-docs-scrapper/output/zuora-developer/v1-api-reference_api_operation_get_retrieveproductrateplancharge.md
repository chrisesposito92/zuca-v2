---
title: "GET RetrieveProductRatePlanCharge"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveProductRatePlanCharge/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:09.847Z"
---

## Retrieve a product rate plan charge

Retrieves basic information about a product rate plan charge.

Security**bearerAuth**

Request

##### path Parameters

| product-rate-plan-charge-keyrequired | stringThe unique number or ID of the product rate plan charge to be retrieved. |
| --- | --- |

##### query Parameters

| show-charge-definitions | booleanSpecifies whether to include the product charge definitions of this charge in the response.Note: This parameter is applicable only if the Attribute-based Pricing feature is enabled. The Attribute-based Pricing feature in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters. If you are interested, please reach out to your CSM. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

get/v1/product-rate-plan-charges/{product-rate-plan-charge-key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/product-rate-plan-charges/{product-rate-plan-charge-key}?show-charge-definitions=true' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "edca018c566983fa11f6d38381b10000",

-   "name": "Attribute based pricing charge with formula",

-   "type": "Recurring",

-   "model": "FlatFee",

-   "uom": null,

-   "pricingSummary": [

    -   "USD60"


    ],

-   "pricing": [

    -   {

        -   "currency": "USD",

        -   "price": 60,

        -   "tiers": null,

        -   "includedUnits": null,

        -   "overagePrice": null,

        -   "discountPercentage": null,

        -   "discountAmount": null


        }


    ],

-   "defaultQuantity": null,

-   "applyDiscountTo": null,

-   "discountLevel": null,

-   "discountClass": null,

-   "applyToBillingPeriodPartially": false,

-   "productDiscountApplyDetails": [ ],

-   "endDateCondition": "Subscription_End",

-   "upToPeriods": null,

-   "upToPeriodsType": null,

-   "billingDay": "DefaultFromCustomer",

-   "listPriceBase": "Per_Billing_Period",

-   "specificListPriceBase": null,

-   "billingTiming": "IN_ADVANCE",

-   "ratingGroup": null,

-   "billingPeriod": "Month",

-   "billingPeriodAlignment": "AlignToCharge",

-   "specificBillingPeriod": null,

-   "smoothingModel": null,

-   "numberOfPeriods": null,

-   "overageCalculationOption": null,

-   "overageUnusedUnitsCreditOption": null,

-   "unusedIncludedUnitPrice": null,

-   "usageRecordRatingOption": null,

-   "priceChangeOption": null,

-   "priceIncreasePercentage": null,

-   "useTenantDefaultForPriceChange": true,

-   "taxable": false,

-   "taxCode": "",

-   "taxMode": null,

-   "isPrepaid": false,

-   "prepaidOperationType": null,

-   "prepaidUom": null,

-   "prepaidQuantity": null,

-   "prepaidTotalQuantity": null,

-   "validityPeriodType": "SUBSCRIPTION_TERM",

-   "drawdownRate": null,

-   "drawdownUom": null,

-   "creditOption": "TimeBased",

-   "isRollover": false,

-   "rolloverPeriods": 0,

-   "rolloverPeriodLength": 0,

-   "rolloverApply": "ApplyLast",

-   "triggerEvent": "ContractEffective",

-   "description": "",

-   "revRecCode": null,

-   "revRecTriggerCondition": null,

-   "revenueRecognitionRuleName": "Recognize upon invoicing",

-   "useDiscountSpecificAccountingCode": null,

-   "excludeItemBookingFromRevenueAccounting": false,

-   "excludeItemBillingFromRevenueAccounting": false,

-   "financeInformation": {

    -   "deferredRevenueAccountingCode": "",

    -   "deferredRevenueAccountingCodeType": null,

    -   "recognizedRevenueAccountingCode": "",

    -   "recognizedRevenueAccountingCodeType": null,

    -   "accountsReceivableAccountingCode": "Accounts Receivable",

    -   "accountsReceivableAccountingCodeType": "AccountsReceivable",

    -   "contractAssetAccountingCode": null,

    -   "contractAssetAccountingCodeType": null,

    -   "contractLiabilityAccountingCode": null,

    -   "contractLiabilityAccountingCodeType": null,

    -   "adjustmentLiabilityAccountingCode": null,

    -   "adjustmentLiabilityAccountingCodeType": null,

    -   "unbilledReceivablesAccountingCode": null,

    -   "unbilledReceivablesAccountingCodeType": null,

    -   "adjustmentRevenueAccountingCode": null,

    -   "adjustmentRevenueAccountingCodeType": null,

    -   "contractRecognizedRevenueAccountingCode": null,

    -   "contractRecognizedRevenueAccountingCodeType": null


    },

-   "deliverySchedule": null,

-   "isStackedDiscount": false,

-   "productRatePlanChargeNumber": null,

-   "formula": "lookup(\"soldToRegion__c\" = fieldLookup(\"subscription\", \"soldToRegion__c\"))",

-   "productChargeDefinitions": "[https://rest-staging2.zuora.com/apps/v1/product-charge-definitions?charge=edca018c566983fa11f6d38381b10000](https://rest-staging2.zuora.com/apps/v1/product-charge-definitions?charge=edca018c566983fa11f6d38381b10000)",

-   "success": true


}`
