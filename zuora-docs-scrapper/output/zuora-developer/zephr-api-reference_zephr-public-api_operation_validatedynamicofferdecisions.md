---
title: "ValidateDynamicOfferDecisions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/validateDynamicOfferDecisions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:31.436Z"
---

## Validate dynamic offer decisions

The Dynamic Offer Decision Engine can be tested via this endpoint to calculate a decision output response based on the criteria of the provided validation ID. Validation criteria is configured on the Zephr Console and determines the version of the dynamic offer being used.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| offerIdrequired | stringThe dynamic offer ID. |
| --- | --- |
| validationIdrequired | stringThe dynamic offer validation ID. |

Responses

200

OK

400

Bad Request

404

Not Found

get/zephr/public/decisions/v2/dynamic-offers/{offerId}/validations/{validationId}

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
