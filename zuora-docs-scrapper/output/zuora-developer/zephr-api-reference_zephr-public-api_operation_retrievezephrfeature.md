---
title: "RetrieveZephrFeature"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveZephrFeature/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:23.351Z"
---

## Retrieve the Zephr Feature

Retrieves the Zephr browser features by default, or optionally with query parameter ?ruleType returns the given type, they can be HTML, browser, JSON, SDK.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| ruleType | stringType of the feature ruleEnum: "browser" "html" "json" "sdk" |
| --- | --- |

Responses

200

OK. The response will be an array of features.

get/zephr/features

Response samples

-   200

application/json

COMMENT\_TAGCSS\_SELECTORCOMMENT\_TAG

Copy

Expand allCollapse all

`[

-   {

    -   "id": "feature-live",

    -   "targetType": "COMMENT_TAG",

    -   "label": "feature-label",

    -   "slug": "feature-slug"


    }


]`
