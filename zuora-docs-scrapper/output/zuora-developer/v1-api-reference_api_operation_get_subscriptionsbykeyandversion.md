---
title: "GET SubscriptionsByKeyAndVersion"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_SubscriptionsByKeyAndVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:49.032Z"
---

## Retrieve a subscription by key and version

This REST API reference describes how to retrieve detailed information about a specified subscription in a specified version. When you create a subscription amendment, you create a new version of the subscription. You can use this method to retrieve information about a subscription in any version.

Security**bearerAuth**

Request

##### path Parameters

| subscription-keyrequired | stringSubscription number. For example, A-S00000135. |
| --- | --- |
| versionrequired | stringSubscription version. For example, 1. |

##### query Parameters

| charge-detail | stringThe segmented rate plan charges. When an amendment results in a change to a charge, Zuora creates a segmented rate plan charge. Use this field to track segment charges.Possible values are:last-segment: (Default) The last rate plan charge on the subscription, that is, the last segmented rate plan charge with the maximum start and end dates.current-segment: The segmented charge that is active on today’s date (effectiveStartDate <= today’s date <= effectiveEndDate).all-segments: All the segmented charges. The chargeSegments field is returned in the response. The chargeSegments field contains an array of the charge information for all the charge segments.specific-segment&as-of-date=date: The segmented charge that is active on a date you specified (effectiveStartDate <= specific date < effectiveEndDate). The format of the date is yyyy-mm-dd. |
| --- | --- |
| as-of-date | stringThe date for charge-detail. It is only available when charge-detail is specific-segment.The date should be in the format YYYY-MM-DD. |
| exclude-rate-plans-with-no-charges | booleanWhen a rate plan charge has multiple segments, the last segment is returned by default.If this charge has been removed before the start date of the last segment (the latest one), with this parameter set to true, this charge is excluded from the response; If all the charges under a rate plan are excluded, the rate plan is not returned in the response.The default value is false. |
| getDetailedMetrics | booleanDefault: falseIf the getDetailedMetrics field is true, contractedNetMrr, asOfDayGrossMrr, asOfDayNetMrr, and netTotalContractedValue will be in the response. The default value is false. |
| asOfDay | stringThe date for detailed metrics. Only available when getDetailedMetrics is true. The date should be in the format YYYY-MM-DD. The default value is the current date. |

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

get/v1/subscriptions/{subscription-key}/versions/{version}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/subscriptions/{subscription-key}/versions/{version}?charge-detail=string&as-of-date=string&exclude-rate-plans-with-no-charges=true&getDetailedMetrics=false&asOfDay=string' \\
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

-   "accountId": "2c9081a03c63c94c013c66688a2c00bf",

-   "accountName": "RestAPI",

-   "accountNumber": "RestAPI",

-   "autoRenew": false,

-   "contractEffectiveDate": "2012-02-01",

-   "contractedMrr": 26.67,

-   "contractedNetMrr": 26.67,

-   "asOfDayGrossMrr": 26.67,

-   "asOfDayNetMrr": 26.67,

-   "netTotalContractedValue": 26.67,

-   "currency": "USD",

-   "currentTerm": 12,

-   "currentTermPeriodType": "Week",

-   "customerAcceptanceDate": "2012-02-01",

-   "id": "2c9081a03c63c94c013c687b864e0195",

-   "initialTermPeriodType": "Week",

-   "invoiceGroupNumber": "N-0001",

-   "invoiceScheduleId": "ec6f0d5dc8af451ab95343fb3c588c1a",

-   "notes": "",

-   "ratePlans": [

    -   {

        -   "id": "2c9081a03c63c94c013c687b868901a4",

        -   "productId": "2c9081a03c63c94c013c66499ef0001b",

        -   "productName": "OneTime",

        -   "productRatePlanId": "2c9081a03c63c94c013c665102e5003a",

        -   "productSku": "SKU-00000022",

        -   "contractedNetMrr": 26.67,

        -   "contractedMrr": 26.67,

        -   "asOfDayGrossMrr": 26.67,

        -   "asOfDayNetMrr": 26.67,

        -   "netTotalContractedValue": 26.67,

        -   "ratePlanCharges": [

            -   {

                -   "applyDiscountTo": null,

                -   "billingDay": null,

                -   "billingPeriod": null,

                -   "billingPeriodAlignment": null,

                -   "billingTiming": null,

                -   "chargedThroughDate": "2012-02-02",

                -   "currency": "USD",

                -   "description": "",

                -   "discountAmount": null,

                -   "discountLevel": null,

                -   "discountPercentage": null,

                -   "dmrc": null,

                -   "done": true,

                -   "dtcv": 24,

                -   "effectiveEndDate": "2012-02-02",

                -   "effectiveStartDate": "2012-02-01",

                -   "endDateCondition": "One_Time",

                -   "id": "2c9081a03c63c94c013c687b868901a5",

                -   "includedUnits": null,

                -   "invoiceScheduleId": "8a8082c45aa81b51015ad68744240ff5",

                -   "listPriceBase": null,

                -   "model": "Tiered",

                -   "mrr": null,

                -   "name": "OT_Tiered",

                -   "number": "C-00000010",

                -   "numberOfPeriods": null,

                -   "originalChargeId": "2c9081a03c63c94c013c687a92d70175",

                -   "overageCalculationOption": null,

                -   "overagePrice": null,

                -   "overageUnusedUnitsCreditOption": null,

                -   "price": null,

                -   "priceChangeOption": null,

                -   "priceIncreasePercentage": null,

                -   "pricingSummary": "0 to 10 Each: USD20 flat fee; 11 Each or more: USD4/Each",

                -   "processedThroughDate": "2012-02-02",

                -   "productRatePlanChargeId": "2c9081a03c63c94c013c6651d677003c",

                -   "quantity": 11,

                -   "segment": 1,

                -   "smoothingModel": null,

                -   "specificBillingPeriod": null,

                -   "specificEndDate": null,

                -   "tcv": 24,

                -   "tiers": [

                    -   {

                        -   "endingUnit": 10,

                        -   "price": 20,

                        -   "priceFormat": "FlatFee",

                        -   "startingUnit": 0,

                        -   "tier": 1


                        },

                    -   {

                        -   "endingUnit": null,

                        -   "price": 4,

                        -   "priceFormat": "PerUnit",

                        -   "startingUnit": 11,

                        -   "tier": 2


                        }


                    ],

                -   "triggerDate": null,

                -   "triggerEvent": "ContractEffective",

                -   "type": "OneTime",

                -   "unusedUnitsCreditRates": null,

                -   "uom": "Each",

                -   "upToPeriods": null,

                -   "upToPeriodsType": null,

                -   "usageRecordRatingOption": null,

                -   "version": 1


                }


            ],

        -   "ratePlanName": "OT_Tiered"


        }


    ],

-   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

-   "renewalTerm": 0,

-   "renewalTermPeriodType": "Week",

-   "revision": "1.0",

-   "serviceActivationDate": "2012-02-01",

-   "status": "Active",

-   "subscriptionNumber": "A-S00000004",

-   "subscriptionStartDate": "2012-02-01",

-   "success": true,

-   "termEndDate": "2013-02-01",

-   "termStartDate": "2012-02-01",

-   "termType": "TERMED",

-   "totalContractedValue": 404,

-   "version": 1


}`
