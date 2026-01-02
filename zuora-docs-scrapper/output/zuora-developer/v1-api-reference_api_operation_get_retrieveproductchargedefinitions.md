---
title: "GET RetrieveProductChargeDefinitions"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveProductChargeDefinitions/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:58.141Z"
---

## List product charge definitions

Retrieves basic information about the product charge definitions.

**Note**: This operation requires the [Attribute-based Pricing](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute_based_pricing/AA_Overview_of_Attribute-based_Pricing) feature to be enabled, which is in the **Early Adopter** phase.

Security**bearerAuth**

Request

##### query Parameters

| charge | stringThe unique number or ID of the charge for which the product charge definitions are to be retrieved. |
| --- | --- |
| rateplan | stringThe unique number or ID of the product rate plan for which the product charge definitions are to be retrieved. |
| hide-inherited-values | booleanThe flag that controls whether the response will merge the default charge definition fields for those fields that are not overridden. |

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

500

Internal Server Error

4XX

Request Errors

get/v1/product-charge-definitions

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/product-charge-definitions?charge=string&rateplan=string&hide-inherited-values=true' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
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

-   "chargeDefinitions": [

    -   {

        -   "applyDiscountTo": null,

        -   "billingDay": "DefaultFromCustomer",

        -   "billingPeriod": "Month",

        -   "billingPeriodAlignment": "AlignToCharge",

        -   "billingTiming": "IN_ADVANCE",

        -   "chargeModel": "FlatFee",

        -   "defaultQuantity": 1,

        -   "deliverySchedule": null,

        -   "description": "",

        -   "discountClass": null,

        -   "discountLevel": null,

        -   "effectiveEndDate": "2023-10-13 09:00:00",

        -   "effectiveStartDate": "2022-10-07 09:00:00",

        -   "endDateCondition": "Subscription_End",

        -   "financeInformation": {

            -   "accountsReceivableAccountingCode": null,

            -   "accountsReceivableAccountingCodeType": null,

            -   "deferredRevenueAccountingCode": "",

            -   "deferredRevenueAccountingCodeType": null,

            -   "recognizedRevenueAccountingCode": "",

            -   "recognizedRevenueAccountingCodeType": null


            },

        -   "isDefault": true,

        -   "isStackedDiscount": false,

        -   "listPriceBase": "Per_Billing_Period",

        -   "numberOfPeriods": null,

        -   "overageCalculationOption": null,

        -   "overageUnusedUnitsCreditOption": null,

        -   "priceChangeOption": null,

        -   "priceIncreasePercentage": null,

        -   "prices": [

            -   {

                -   "currency": "EUR",

                -   "price": 10


                },

            -   {

                -   "currency": "JPY",

                -   "price": 20


                },

            -   {

                -   "currency": "USD",

                -   "price": 25


                }


            ],

        -   "productChargeDefinitionId": "2c9890f78b0d09d2018b0d13c7fd0004",

        -   "productChargeDefinitionNumber": "CD-00000201",

        -   "productDiscountApplyDetails": [ ],

        -   "productRatePlanChargeId": "2c9890f78b0d09d2018b0d13c7fd0004",

        -   "productRatePlanChargeNumber": null,

        -   "productRatePlanId": null,

        -   "productRatePlanName": null,

        -   "productRatePlanNumber": null,

        -   "ratingGroup": null,

        -   "revRecCode": null,

        -   "revRecTriggerCondition": null,

        -   "revenueRecognitionRuleName": "Recognize upon invoicing",

        -   "smoothingModel": null,

        -   "specificBillingPeriod": null,

        -   "specificListPriceBase": null,

        -   "taxCode": "",

        -   "taxMode": null,

        -   "taxable": false,

        -   "term": null,

        -   "termPeriodType": null,

        -   "termType": null,

        -   "triggerEvent": "ContractEffective",

        -   "uom": null,

        -   "upToPeriods": null,

        -   "upToPeriodsType": null,

        -   "usageRecordRatingOption": null,

        -   "useDiscountSpecificAccountingCode": null,

        -   "useTenantDefaultForPriceChange": true


        }


    ],

-   "success": true


}`
