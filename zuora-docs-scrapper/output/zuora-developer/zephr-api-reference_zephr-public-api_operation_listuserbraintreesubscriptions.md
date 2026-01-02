---
title: "ListUserBraintreeSubscriptions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listUserBraintreeSubscriptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:13.729Z"
---

## List the Braintree subscriptions of a user

Lists all Braintree subscriptions for the logged-in user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

401

Unauthorized

404

Not Found

get/blaize/payment/braintree/subscriptions

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "managed-by": "Braintree",

-   "external-id": "abc123",

-   "next-billing-time": "2021-05-17T04:31:33Z",

-   "blaize-product": {

    -   "id": "one-month-one-off",

    -   "label": "One month access",

    -   "description": "One month access",

    -   "entitlement": {

        -   "id": "191f6d00-b8d4-46f1-a22d-2bf53f4f8fa3",

        -   "type": "bundle"


        },

    -   "mapping": {

        -   "recurring": {

            -   "plans": {

                -   "id": "cxtr",

                -   "label": null,

                -   "archived": false,

                -   "billingCycles": 1,

                -   "paymentProvider": "braintree"


                },

            -   "multiPhasedPlans": [ ]


            },

        -   "oneOff": {

            -   "plans": {

                -   "id": "3mkb",

                -   "label": null,

                -   "archived": false,

                -   "billingCycles": null,

                -   "paymentProvider": "braintree",

                -   "accessDuration": {

                    -   "duration": 5,

                    -   "unit": "MONTHS"


                    }


                }


            },

        -   "braintree_one_off": {

            -   "price_points": [ ]


            },

        -   "rate_plans": [ ],

        -   "jwt": {

            -   "claim_value": ""


            }


        },

    -   "sharingLimit": 0


    },

-   "transaction-history": {

    -   "time": "2021-05-17T04:31:33Z",

    -   "currency": "GBP",

    -   "cents": 234,

    -   "cycle": "month",

    -   "cycleCount": 1,

    -   "currencyCode": "GBP",

    -   "human-readable-amount": "£2.34"


    },

-   "subscription-state": "Active",

-   "paid_through_date": "2021-05-17T04:31:33Z",

-   "plan_id": "plan-123",

-   "plan_name": "monthly-plan",

-   "billing_frequency_unit": "MONTH",

-   "billing_frequency": 1,

-   "currency_code": "GBP",

-   "pre_discount_price": 2,

-   "multiphase_plan": false,

-   "discounts_applied": true


}`
