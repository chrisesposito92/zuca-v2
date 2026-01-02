---
title: "GET ProductRatePlans"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_ProductRatePlans/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:29:41.946Z"
---

## List all product rate plans of a product

Retrieves information about all product rate plans of a specific product.

Security**bearerAuth**

Request

##### path Parameters

| product-keyrequired | stringThe unique ID or SKU of a product. For example, 2c92c0f96487e16a016487f663c71a61 or SKU-00000987. |
| --- | --- |

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| show-charge-definitions | booleanSpecifies whether to include the product charge definitions of this rate plan in the response.Note: This parameter is applicable only if the Attribute Based Pricing feature is enabled. To access this feature, submit a request at Zuora Global Support. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/products/{product-key}/product-rate-plans

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/products/{product-key}/product-rate-plans?page=1&pageSize=20&show-charge-definitions=true' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
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

-   "productRatePlans": [

    -   {

        -   "description": "",

        -   "effectiveEndDate": "2020-07-31",

        -   "effectiveStartDate": "2016-07-01",

        -   "grade": 3,

        -   "id": "40289f466464127601646473d6f7000f",

        -   "name": "New Rate Plan",

        -   "productRatePlanCharges": [

            -   {

                -   "applyDiscountTo": null,

                -   "billingDay": "DefaultFromCustomer",

                -   "billingPeriod": "Month",

                -   "billingPeriodAlignment": "AlignToCharge",

                -   "billingTiming": "IN_ADVANCE",

                -   "defaultQuantity": null,

                -   "description": "",

                -   "discountClass": null,

                -   "discountLevel": null,

                -   "endDateCondition": "Subscription_End",

                -   "financeInformation": {

                    -   "deferredRevenueAccountingCode": "",

                    -   "deferredRevenueAccountingCodeType": null,

                    -   "recognizedRevenueAccountingCode": "",

                    -   "recognizedRevenueAccountingCodeType": null


                    },

                -   "id": "40289f4664641276016464740dd0001c",

                -   "listPriceBase": "Per_Billing_Period",

                -   "model": "FlatFee",

                -   "name": "New Component",

                -   "numberOfPeriods": null,

                -   "overageCalculationOption": null,

                -   "overageUnusedUnitsCreditOption": null,

                -   "priceChangeOption": null,

                -   "priceIncreasePercentage": null,

                -   "pricing": [

                    -   {

                        -   "currency": "USD",

                        -   "discountAmount": null,

                        -   "discountPercentage": null,

                        -   "includedUnits": null,

                        -   "overagePrice": null,

                        -   "price": 100,

                        -   "tiers": null


                        }


                    ],

                -   "pricingSummary": [

                    -   "USD100"


                    ],

                -   "productChargeDefinitions": "[https://rest.zuora.com/v1/product-charge-definitions?charge=8a80808e8aaf3b0a018aaf3f2beb022b&rateplan=8a80808e8aaf3b0a018aaf3ed4cf021e](https://rest.zuora.com/v1/product-charge-definitions?charge=8a80808e8aaf3b0a018aaf3f2beb022b&rateplan=8a80808e8aaf3b0a018aaf3ed4cf021e)",

                -   "productDiscountApplyDetails": [ ],

                -   "productRatePlanChargeNumber": "PRPC-00000001",

                -   "revRecCode": "",

                -   "revRecTriggerCondition": "ContractEffectiveDate",

                -   "revenueRecognitionRuleName": "Recognize upon invoicing",

                -   "smoothingModel": null,

                -   "specificBillingPeriod": null,

                -   "specificListPriceBase": null,

                -   "taxCode": "",

                -   "taxMode": null,

                -   "taxable": false,

                -   "triggerEvent": "ContractEffective",

                -   "type": "Recurring",

                -   "unusedIncludedUnitPrice": null,

                -   "uom": null,

                -   "upToPeriods": null,

                -   "upToPeriodsType": null,

                -   "usageRecordRatingOption": null,

                -   "useDiscountSpecificAccountingCode": null,

                -   "useTenantDefaultForPriceChange": null


                }


            ],

        -   "productRatePlanNumber": "PRP-00000001",

        -   "status": "Active"


        }


    ],

-   "success": true


}`
