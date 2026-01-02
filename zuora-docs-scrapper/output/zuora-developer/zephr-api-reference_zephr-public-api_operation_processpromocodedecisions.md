---
title: "ProcessPromoCodeDecisions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/processPromoCodeDecisions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:26.647Z"
---

## Process promo code decisions

The Promo Code decision would execute the discount rule defined behind the given promo code, which is configured from the Zephr console. The decision request would require a list of relevant products with its pricing data, typically it would have come from a Dynamic Offer decision response. The Promo Code decision would generate decision response like a regular Dynamic Offer, but with the discount output according to the Promo Code's discount rule.

Alternatively, if configured and the feature is enabled, this api can execute a dynamic offer rule that is linked to this promo code. Selected products are not required for executing promo codes using this method. Parameters supplied to the dynamic offers decisions api can also be supplied to this api for this promo code flow (session, foreign\_keys, etc).

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| promo_code | stringThe Promo Code, generated from the Zephr console. |
| --- | --- |
| promo_code_definition | stringThe Definition ID of Promo Code, generated from the Zephr console. This is useful for previewing a draft promo code rule/offer as there won't be any downloadble/usable promo code generated. |
| selected_products | Array of objects or null (promo-code-decision-request-selected-product) |
| session | string or nullZephr Session ID, required for trials. Only relevant for executing promo code with a linked dynamic offer. |
| foreign_keys | object or nullForeign system and ID used to identify the user. Only relevant for executing promo code with a linked dynamic offer. |
| ip | string or nullClient IP address, defaults to request IP. Only relevant for executing promo code with a linked dynamic offer. |
| user_agent | string or nullClient user agent. Only relevant for executing promo code with a linked dynamic offer. |
| jwt | string or nullA Json Web Token, may include identity or product holding claims. Only relevant for executing promo code with a linked dynamic offer. |
| path | string or nullRequest path, required for trials if used. Only relevant for executing promo code with a linked dynamic offer. |
| content_id | stringContent ID, used to perform requests to a 3rd party API for additional content information used in making a decision. Only relevant for executing promo code with a linked dynamic offer. |

Responses

200

OK

400

Bad Request

404

Not Found

post/zephr/public/decisions/v1/promo-codes

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "promo_code": "string",

-   "promo_code_definition": "string",

-   "selected_products": [

    -   {

        -   "id": "product-a",

        -   "payment_plan": {

            -   "provider": "zuora-billing",

            -   "plan_id": "string",

            -   "charges": [

                -   {

                    -   "charge_definition_id": "string",

                    -   "currency": "string",

                    -   "price": 0


                    }


                ]


            }


        }


    ],

-   "session": "string",

-   "foreign_keys": { },

-   "ip": "string",

-   "user_agent": "string",

-   "jwt": "string",

-   "path": "string",

-   "content_id": "string"


}`

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "products": [

    -   {

        -   "id": "string",

        -   "label": "string",

        -   "description": "string",

        -   "features": [

            -   {

                -   "id": "string",

                -   "label": "string",

                -   "description": "string",

                -   "type": "string"


                }


            ],

        -   "sharingLimit": 0,

        -   "metadata": {

            -   "order": 0,

            -   "recommended": true


            },

        -   "paymentPlans": [

            -   {

                -   "planId": "string",

                -   "planData": { },

                -   "charges": [

                    -   {

                        -   "chargeId": "string",

                        -   "prices": [

                            -   { }


                            ],

                        -   "chargeDefinitionData": { },

                        -   "chargeData": { },

                        -   "discounts": [

                            -   null


                            ]


                        }


                    ]


                }


            ],

        -   "attributes": { }


        }


    ],

-   "tagline": "string",

-   "custom": { },

-   "outcomes": [

    -   {

        -   "ruleId": "string",

        -   "outcomeId": "string"


        }


    ],

-   "errors": [

    -   {

        -   "property": "string",

        -   "error": "string"


        }


    ]


}`
