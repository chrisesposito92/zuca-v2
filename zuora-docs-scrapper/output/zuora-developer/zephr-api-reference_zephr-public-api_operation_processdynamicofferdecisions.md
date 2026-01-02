---
title: "ProcessDynamicOfferDecisions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/processDynamicOfferDecisions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:31.602Z"
---

## Process dynamic offer decisions

The Dynamic Offer Decision Engine can be invoked via the Public API to calculate a decision output response based upon each property rule under the Dynamic Offer created in the Zephr Console.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| dynamic_offerrequired | objectThe dynamic offer to evaluate, must specify the slug of the dynamic offer, and any custom input to be used in the rules. |
| --- | --- |
| session | stringZephr Session ID, required for trials |
| foreign_keys | objectForeign system and ID used to identify the user. |
| ip | stringClient IP address, defaults to request IP. |
| user_agent | stringClient user agent |
| jwt | stringA JSON Web Token, may include identity or product holding claims. |
| path | stringRequest path, required for trials if used. |
| content_id | stringContent ID, used to perform requests to a 3rd party API for additional content information used in making a decision. |

Responses

200

OK

400

Bad Request

post/zephr/public/decisions/v2/dynamic-offers

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "dynamic_offer": {

    -   "slug": "offerX",

    -   "inputs": { }


    },

-   "session": "xxx-xxx-xxx",

-   "foreign_keys": { },

-   "ip": "x.x.x.x",

-   "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11)...",

-   "jwt": "xxx-xxx-xxx",

-   "path": "/x.html",

-   "content_id": "xxx-xxx-xxx"


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
