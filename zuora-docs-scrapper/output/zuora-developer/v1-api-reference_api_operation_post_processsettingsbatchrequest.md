---
title: "POST ProcessSettingsBatchRequest"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_ProcessSettingsBatchRequest/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:14.197Z"
---

## Submit settings requests

Submit a batch of settings requests by this single API operation.

See a [200 response sample in CSV format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.csv) that lists all available settings.

See a [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json) that lists all available parameters of each setting.

By default, one batch settings request can contain a maximum of 100 single operation requests, including:

-   All the single requests in the process batch settings request.
-   All the children requests of the single requests.

This maximum value is configurable.

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

| requests | Array of objects (settingsRequest) |
| --- | --- |

Responses

200

OK

post/settings/batch-requests

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "requests": [

    -   {

        -   "id": "1",

        -   "method": "GET",

        -   "url": "/billing-rules"


        },

    -   {

        -   "id": "2",

        -   "method": "GET",

        -   "url": "/accounting-rules"


        }


    ]


}`

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "responses": [

    -   {

        -   "children": [ ],

        -   "id": "1",

        -   "method": "GET",

        -   "response": {

            -   "body": {

                -   "allowAutoPostBillRun": true,

                -   "autoPostBillRunDefaultValue": true,

                -   "availableToCreditValidationLevel": "HeaderLevel",

                -   "billToTermEndWhenAutoRenew": true,

                -   "daysInMonth": "UseActualDays",

                -   "includeChildUsage": true,

                -   "includeNegativeInvoice": true,

                -   "invoicePastEndOfTerm": false,

                -   "legalDocumentGeneratingRule": "GroupByOriginalSRPC",

                -   "notSendZeroItemsForTax": false,

                -   "oneTimeCreditBack": false,

                -   "preGenerateInvoicePdf": false,

                -   "proratePeriodOfRecurringCharge": true,

                -   "prorateRecurringMonthlyCharges": true,

                -   "prorateRecurringWeeklyCharges": true,

                -   "prorateUsageMonthlyCharges": true,

                -   "prorateUsageWeeklyCharges": true,

                -   "prorationUnit": "ProrateByDay",

                -   "rateUsageIndividually": true,

                -   "recurringChargeStyle": "Advanced",

                -   "takeContactSnapshot": true,

                -   "taxAddressOwner": "SubscriptionOwner",

                -   "taxInclusiveRoundingRule": "RoundingNetAmount",

                -   "taxRateChangeOption": "OneTaxItem",

                -   "timeOfDailyInvoice": 0,

                -   "transactionOnSubscription": true,

                -   "zuoraTaxRoundingDiffDispersion": false


                },

            -   "status": "200 OK"


            },

        -   "url": "/billing-rules"


        },

    -   {

        -   "children": [ ],

        -   "id": "2",

        -   "method": "GET",

        -   "response": {

            -   "body": {

                -   "allowBlankAccountingCodes": true,

                -   "allowCreationInClosedPeriod": true,

                -   "allowRevenueScheduleNegativeAmounts": true,

                -   "allowUsageInClosedPeriod": true,

                -   "differentCurrencies": false


                },

            -   "status": "200 OK"


            },

        -   "url": "/accounting-rules"


        }


    ]


}`
