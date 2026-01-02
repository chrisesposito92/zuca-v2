---
title: "ListStripeSubscriptions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listStripeSubscriptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:21.721Z"
---

## List the user's Stripe subscriptions

Lists the user's Stripe subscriptions.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

OK

401

Unauthenticated

get/blaize/payment/stripe/subscriptions

Response samples

-   200

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "billingFrequency": 0,

    -   "billingFrequencyUnit": "DAY",

    -   "blaizeProduct": {

        -   "description": "string",

        -   "id": "string",

        -   "label": "string",

        -   "subTenantId": "string",

        -   "tenantId": "string"


        },

    -   "currencyCode": "string",

    -   "discountsApplied": true,

    -   "ended": "2019-08-24T14:15:22Z",

    -   "ends": "2019-08-24T14:15:22Z",

    -   "externalId": "string",

    -   "managedBy": "string",

    -   "multiphasePlan": true,

    -   "nextBillingTime": "2019-08-24T14:15:22Z",

    -   "paidThroughDate": "2019-08-24T14:15:22Z",

    -   "planId": "string",

    -   "planName": "string",

    -   "preDiscountPrice": 0,

    -   "state": "string",

    -   "taxRates": [

        -   {

            -   "active": true,

            -   "displayName": "string",

            -   "isTaxInclusive": true,

            -   "taxPercent": 0


            }


        ],

    -   "transactionRecords": [

        -   {

            -   "cents": 0,

            -   "currency": {

                -   "currencyCode": "string"


                },

            -   "cycle": "string",

            -   "cycleCount": 0,

            -   "humanReadableAmount": "string",

            -   "taxRate": {

                -   "active": true,

                -   "displayName": "string",

                -   "isTaxInclusive": true,

                -   "taxPercent": 0


                },

            -   "time": "2019-08-24T14:15:22Z"


            }


        ]


    }


]`
