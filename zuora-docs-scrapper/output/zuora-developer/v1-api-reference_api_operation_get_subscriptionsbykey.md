---
title: "GET SubscriptionsByKey"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_SubscriptionsByKey/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:49.905Z"
---

## Retrieve a subscription by key

This REST API reference describes how to retrieve detailed information about a specified subscription in the latest version.

Security**bearerAuth**

Request

##### path Parameters

| subscription-keyrequired | stringPossible values are:a subscription numbera subscription ID |
| --- | --- |

##### query Parameters

| charge-detail | stringThe segmented rate plan charges. When an amendment results in a change to a charge, Zuora creates a segmented rate plan charge. Use this field to track segment charges.Possible values are:last-segment: (Default) The last rate plan charge on the subscription, that is, the last segmented rate plan charge with the maximum start and end dates.current-segment: The segmented charge that is active on today’s date (effectiveStartDate <= today’s date <= effectiveEndDate).all-segments: All the segmented charges. The ratePlans > ratePlanCharges >chargeSegments nested field is returned in the response. The chargeSegments field contains an array of the charge information for all the charge segments.specific-segment: Use this value together with as-of-date={specificDate}. The segmented charge that is active on a date you specified ((specific date = effectiveStartDate) OR (effectiveStartDate < specific date < effectiveEndDate)) is returned. The format of the date is yyyy-mm-dd. |
| --- | --- |
| as-of-date | stringThe date for charge-detail. It is only available when charge-detail is specific-segment.The date should be in the format YYYY-MM-DD. |
| exclude-rate-plans-with-no-charges | booleanWhen a rate plan charge has multiple segments, the last segment is returned by default.If this charge has been removed before the start date of the last segment (the latest one), with this parameter set to true, this charge is excluded from the response; If all the charges under a rate plan are excluded, the rate plan is not returned in the response.The default value is false. |
| getDetailedMetrics | booleanDefault: falseIf the getDetailedMetrics field is true, contractedNetMrr, asOfDayGrossMrr, asOfDayNetMrr, and netTotalContractedValue will be in the response. The default value is false. |
| asOfDay | stringThe date for detailed metrics. Only available when getDetailedMetrics is true. The date should be in the format YYYY-MM-DD.The default value is the current date. |
| getInvoiceOwnerDetails | booleanRetrieves the invoice owner of a subscription. If this parameter is set to true, the invoice owner account details invoiceOwnerAccountDetails will be in the response. |
| getSubscriptionOwnerDetails | booleanRetrieves the owner of a subscription. If this parameter is set to true, the subscription owner account details accountOwnerDetails will be in the response. |

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

get/v1/subscriptions/{subscription-key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/subscriptions/{subscription-key}?charge-detail=string&as-of-date=string&exclude-rate-plans-with-no-charges=true&getDetailedMetrics=false&asOfDay=string&getInvoiceOwnerDetails=true&getSubscriptionOwnerDetails=true' \\
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

-   "accountId": "8a8082c45aa81b51015ad64396090f5c",

-   "accountName": "ABCD",

-   "accountNumber": "A00002641",

-   "accountOwnerDetails": {

    -   "accountNumber": "A00000001",

    -   "batch": "Batch1",

    -   "communicationProfileId": "303d186840e611df817c002185d714e1",

    -   "crmId": "",

    -   "id": "402892c74c9193cd014c91d35b0a0132",

    -   "invoiceTemplateId": null,

    -   "name": "Test",

    -   "notes": "",

    -   "partnerAccount": false,

    -   "profileNumber": "CP-00000012",

    -   "salesRep": "",

    -   "sequenceSetId": null,

    -   "status": "Active",

    -   "summaryStatementTemplateId": null,

    -   "purchaseOrderNumber": ""


    },

-   "invoiceOwnerAccountDetails": {

    -   "accountNumber": "A00000001",

    -   "batch": "Batch1",

    -   "communicationProfileId": "303d186840e611df817c002185d714e1",

    -   "crmId": "",

    -   "id": "402892c74c9193cd014c91d35b0a0132",

    -   "invoiceTemplateId": null,

    -   "name": "Test",

    -   "notes": "",

    -   "partnerAccount": false,

    -   "profileNumber": "CP-00000012",

    -   "salesRep": "",

    -   "sequenceSetId": null,

    -   "status": "Active"


    },

-   "autoRenew": true,

-   "contractEffectiveDate": "2017-01-01",

-   "contractedMrr": 8.33,

-   "contractedNetMrr": 8.33,

-   "asOfDayGrossMrr": 8.33,

-   "asOfDayNetMrr": 8.33,

-   "netTotalContractedValue": 8.33,

-   "currency": "USD",

-   "currentTerm": 12,

-   "currentTermPeriodType": "Month",

-   "customerAcceptanceDate": "2017-01-01",

-   "id": "8a8082c45aa81b51015ad68743ec0fdb",

-   "initialTerm": 12,

-   "initialTermPeriodType": "Month",

-   "invoiceGroupNumber": "N-0001",

-   "invoiceOwnerAccountId": "8a8082c45aa81b51015ad64396090f5c",

-   "invoiceOwnerAccountName": "ABCD",

-   "invoiceOwnerAccountNumber": "A00002641",

-   "invoiceScheduleId": "ec6f0d5dc8af451ab95343fb3c588c1a",

-   "invoiceSeparately": false,

-   "invoiceTemplateId": "2c9081a03c638994013c63978baf002b",

-   "invoiceTemplateName": "InvoiceTemplateName",

-   "notes": "",

-   "paymentTerm": "Net 30",

-   "ratePlans": [

    -   {

        -   "id": "8a8082c45aa81b51015ad68744030fe3",

        -   "productId": "8a8082c45aa81b51015ad5a2d07d0e89",

        -   "productName": "ABC",

        -   "productRatePlanId": "8a8082c45aa81b51015ad5a473fb0e8d",

        -   "productSku": "SKU-00000987",

        -   "contractedNetMrr": 8.33,

        -   "contractedMrr": 8.33,

        -   "asOfDayGrossMrr": 8.33,

        -   "asOfDayNetMrr": 8.33,

        -   "netTotalContractedValue": 8.33,

        -   "ratePlanCharges": [

            -   {

                -   "applyDiscountTo": null,

                -   "billingDay": "DefaultFromCustomer",

                -   "billingPeriod": "Annual",

                -   "billingPeriodAlignment": "AlignToCharge",

                -   "billingTiming": "IN_ADVANCE",

                -   "chargedThroughDate": null,

                -   "currency": "USD",

                -   "description": "",

                -   "discountAmount": null,

                -   "discountApplyDetails": null,

                -   "discountClass": null,

                -   "discountLevel": null,

                -   "discountPercentage": null,

                -   "dmrc": 8.333333,

                -   "done": false,

                -   "dtcv": 100,

                -   "effectiveEndDate": "2018-01-01",

                -   "effectiveStartDate": "2017-01-01",

                -   "endDateCondition": "Subscription_End",

                -   "id": "8a8082c45aa81b51015ad68744160fe4",

                -   "includedUnits": null,

                -   "invoiceScheduleId": "8a8082c45aa81b51015ad68744240ff5",

                -   "listPriceBase": "Per_Billing_Period",

                -   "model": "FlatFee",

                -   "mrr": 8.333333,

                -   "name": "Annual Charge",

                -   "number": "C-00032238",

                -   "numberOfPeriods": null,

                -   "originalChargeId": "8a8082c45aa81b51015ad68744160fe4",

                -   "overageCalculationOption": null,

                -   "overagePrice": null,

                -   "overageUnusedUnitsCreditOption": null,

                -   "price": 100,

                -   "priceChangeOption": "NoChange",

                -   "priceIncreasePercentage": null,

                -   "pricingSummary": "USD100",

                -   "processedThroughDate": null,

                -   "productRatePlanChargeId": "8a8082c45aa81b51015ad5a655c00e8f",

                -   "quantity": 1,

                -   "segment": 1,

                -   "smoothingModel": null,

                -   "specificBillingPeriod": null,

                -   "specificEndDate": null,

                -   "tcv": 100,

                -   "tiers": null,

                -   "triggerDate": null,

                -   "triggerEvent": "ContractEffective",

                -   "type": "Recurring",

                -   "unusedUnitsCreditRates": null,

                -   "uom": null,

                -   "upToPeriods": null,

                -   "upToPeriodsType": null,

                -   "usageRecordRatingOption": null,

                -   "version": 1


                },

            -   {

                -   "applyDiscountTo": "ONETIMERECURRINGUSAGE",

                -   "billingDay": "DefaultFromCustomer",

                -   "billingPeriod": "Month",

                -   "billingPeriodAlignment": "AlignToCharge",

                -   "billingTiming": null,

                -   "chargedThroughDate": null,

                -   "currency": "USD",

                -   "description": "",

                -   "discountAmount": 10,

                -   "discountApplyDetails": [

                    -   {

                        -   "appliedProductName": "ABC",

                        -   "appliedProductRatePlanChargeId": "8a8082c45aa81b51015ad5a655c00e8f",

                        -   "appliedProductRatePlanChargeName": "Annual Charge",

                        -   "appliedProductRatePlanId": "8a8082c45aa81b51015ad5a473fb0e8d",

                        -   "appliedProductRatePlanName": "RatePlan 1"


                        }


                    ],

                -   "discountClass": "VIP Discount",

                -   "discountLevel": "subscription",

                -   "discountPercentage": null,

                -   "dmrc": 0,

                -   "done": false,

                -   "dtcv": 0,

                -   "effectiveEndDate": "2018-01-01",

                -   "effectiveStartDate": "2017-01-01",

                -   "endDateCondition": "Subscription_End",

                -   "id": "8a8082c45aa81b51015ad68744240fe5",

                -   "includedUnits": null,

                -   "invoiceScheduleId": "8a8082c45aa81b51015ad68744240ff5",

                -   "listPriceBase": null,

                -   "model": "DiscountFixedAmount",

                -   "mrr": 0,

                -   "name": "Discount-Fixed 10",

                -   "number": "C-00032239",

                -   "numberOfPeriods": null,

                -   "originalChargeId": "8a8082c45aa81b51015ad68744240fe5",

                -   "overageCalculationOption": null,

                -   "overagePrice": null,

                -   "overageUnusedUnitsCreditOption": null,

                -   "price": null,

                -   "priceChangeOption": null,

                -   "priceIncreasePercentage": null,

                -   "pricingSummary": "USD10 fixed amount discount",

                -   "processedThroughDate": null,

                -   "productRatePlanChargeId": "8a8082c45aa81b51015ad683bc590fd8",

                -   "quantity": null,

                -   "segment": 1,

                -   "smoothingModel": null,

                -   "specificBillingPeriod": null,

                -   "specificEndDate": null,

                -   "tcv": 0,

                -   "tiers": null,

                -   "triggerDate": null,

                -   "triggerEvent": "ContractEffective",

                -   "type": "Recurring",

                -   "unusedUnitsCreditRates": null,

                -   "uom": null,

                -   "upToPeriods": null,

                -   "upToPeriodsType": null,

                -   "usageRecordRatingOption": null,

                -   "version": 1


                },

            -   {

                -   "amendedByOrderOn": null,

                -   "applyDiscountTo": null,

                -   "billingDay": "DefaultFromCustomer",

                -   "billingPeriod": "Month",

                -   "billingPeriodAlignment": "AlignToCharge",

                -   "billingTiming": "IN_ADVANCE",

                -   "chargeModelConfiguration": null,

                -   "chargedThroughDate": null,

                -   "currency": "USD",

                -   "description": "",

                -   "discountAmount": null,

                -   "discountApplyDetails": null,

                -   "discountClass": null,

                -   "discountLevel": null,

                -   "discountPercentage": null,

                -   "dmrc": 38.571428571,

                -   "done": false,

                -   "dtcv": 468,

                -   "effectiveEndDate": "2026-01-01",

                -   "effectiveStartDate": "2024-12-31",

                -   "endDateCondition": "Subscription_End",

                -   "id": "4028818386ba85070186bab54f99573d",

                -   "includedUnits": null,

                -   "inputArgumentId": null,

                -   "invoiceScheduleId": "8a8082c45aa81b51015ad68744240ff5",

                -   "listPriceBase": "Per_Billing_Period",

                -   "model": "Delivery",

                -   "mrr": 38.571428571,

                -   "name": "Delivery Charge",

                -   "number": "C-00032240",

                -   "numberOfDeliveries": 52,

                -   "numberOfPeriods": null,

                -   "originalChargeId": "4028818386ba85070186bab54f065731",

                -   "originalOrderDate": "2023-01-01",

                -   "overageCalculationOption": null,

                -   "overagePrice": null,

                -   "overageUnusedUnitsCreditOption": null,

                -   "price": 9,

                -   "priceChangeOption": null,

                -   "priceIncreasePercentage": null,

                -   "pricingSummary": "",

                -   "processedThroughDate": null,

                -   "productRatePlanChargeId": "4028818386b61be50186b6293eb30017",

                -   "quantity": 1,

                -   "ratingGroup": null,

                -   "segment": 3,

                -   "smoothingModel": null,

                -   "specificBillingPeriod": null,

                -   "specificEndDate": null,

                -   "subscriptionChargeDeliverySchedule": {

                    -   "dayOfMonth": null,

                    -   "frequency": "Weekly",

                    -   "friday": false,

                    -   "monday": false,

                    -   "monthOfYear": null,

                    -   "saturday": false,

                    -   "sunday": true,

                    -   "thursday": false,

                    -   "tuesday": false,

                    -   "wednesday": false


                    },

                -   "subscriptionChargeIntervalPricing": [

                    -   {

                        -   "duration": 365,

                        -   "price": 5,

                        -   "sequence": 1,

                        -   "subscriptionChargeIntervalPriceTiers": [ ],

                        -   "type": "Day"


                        },

                    -   {

                        -   "duration": 365,

                        -   "price": 7,

                        -   "sequence": 2,

                        -   "subscriptionChargeIntervalPriceTiers": [ ],

                        -   "type": "Day"


                        },

                    -   {

                        -   "duration": null,

                        -   "price": 9,

                        -   "sequence": 3,

                        -   "subscriptionChargeIntervalPriceTiers": [ ],

                        -   "type": "Infinity"


                        }


                    ],

                -   "tcv": 468,

                -   "tiers": null,

                -   "triggerDate": null,

                -   "triggerEvent": "ContractEffective",

                -   "type": "Recurring",

                -   "unusedUnitsCreditRates": null,

                -   "uom": null,

                -   "upToPeriods": null,

                -   "upToPeriodsType": null,

                -   "usageRecordRatingOption": null,

                -   "version": 1


                }


            ],

        -   "ratePlanName": "RatePlan 1"


        }


    ],

-   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

-   "renewalTerm": 12,

-   "renewalTermPeriodType": "Month",

-   "revision": "1.0",

-   "sequenceSetId": "6abcc30846de11e990900242ac1f0003",

-   "sequenceSetName": "DEFAULT",

-   "serviceActivationDate": "2017-01-01",

-   "billToContact": {

    -   "address1": "",

    -   "address2": "",

    -   "city": "",

    -   "country": null,

    -   "county": null,

    -   "fax": "",

    -   "firstName": "Test",

    -   "homePhone": "",

    -   "id": "2c9081a03c6d7b51013c6d7e46c80a17",

    -   "lastName": "Test",

    -   "mobilePhone": "",

    -   "nickname": "",

    -   "otherPhone": "",

    -   "otherPhoneType": null,

    -   "personalEmail": "",

    -   "state": "",

    -   "taxRegion": null,

    -   "workEmail": "contact@example.com",

    -   "workPhone": "",

    -   "zipCode": ""


    },

-   "soldToContact": {

    -   "address1": "",

    -   "address2": "",

    -   "city": "",

    -   "country": null,

    -   "county": null,

    -   "fax": "",

    -   "firstName": "Test",

    -   "homePhone": "",

    -   "id": "2c9081a03c6d7b51013c6d7e46c80a17",

    -   "lastName": "Test",

    -   "mobilePhone": "",

    -   "nickname": "",

    -   "otherPhone": "",

    -   "otherPhoneType": null,

    -   "personalEmail": "",

    -   "state": "",

    -   "taxRegion": null,

    -   "workEmail": "contact@example.com",

    -   "workPhone": "",

    -   "zipCode": ""


    },

-   "status": "Active",

-   "subscriptionNumber": "A-S00007412",

-   "subscriptionStartDate": "2017-01-01",

-   "success": true,

-   "termEndDate": "2018-01-01",

-   "termStartDate": "2017-01-01",

-   "termType": "TERMED",

-   "totalContractedValue": 100,

-   "version": 1


}`
