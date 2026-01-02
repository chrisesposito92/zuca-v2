---
title: "ProcessMultipleDecisions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/processMultipleDecisions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.752Z"
---

## Process multiple decisions

Processes multiple decisions. The SDK Feature Decision Engine can be invoked via the Public API to calculate a decision output response based upon Feature SDK Rules created in the Zephr Console.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| featuresrequired | Array of anyThe list of features to evaluate. This must be contain at least one element. Features are evaluated sequentially, in the order they are provided. |
| --- | --- |
| session | stringZephr Session ID, required for trials. |
| foreign_keys | objectForeign system and ID used to identify the user. |
| ip | stringClient IP address, defaults to request IP. |
| user_agent | stringClient user agent |
| jwt | stringA Json Web Token, may include identity or product holding claims. |
| dry_run_mode | booleanDefault: falseA flag to indicate where the decision request would persist states such as user entitlement, segments, test groups, etc. |

Responses

200

OK

400

Bad Request

post/zephr/decide

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "features": [

    -   {

        -   "slug": "featureX",

        -   "path": "/x.html",

        -   "content_id": "xxx-xxx-xxx",

        -   "inputs": { }


        }


    ],

-   "session": "xxx-xxx-xxx",

-   "foreign_keys": { },

-   "ip": "x.x.x.x",

-   "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11)...",

-   "jwt": "xxx-xxx-xxx"


}`

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "sdkFeatureSlug": "featureX",

        -   "outputType": "ENUM",

        -   "outputValue": "YES",

        -   "error": "500: Internal error ..."


        }


    ]


}`
