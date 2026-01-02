---
title: "ListFeatureRules"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listFeatureRules/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:21.065Z"
---

## List feature rules

Retrieves a list of feature rules.

Security**ZephrHmacHttp**

Request

##### query Parameters

| tags | stringA comma-separeted list of feature rule tags (Maximum 50 tags allowed)Example: tags=tag1,tag2,tag3 |
| --- | --- |

Responses

200

OK - Feature rules have been retrieved successfully

400

Bad Request - Tags size exceeded the limit of 50

get/v3/feature-rules

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "id": "featureRuleId",

    -   "version": 1,

    -   "tags": [ ],

    -   "label": "Test feature",

    -   "description": "Test feature",

    -   "last_updated": "2011-11-11T11:11:11.000",

    -   "request_type": "json",

    -   "target_name": "article",

    -   "match_operation": "equals",

    -   "target_value": "home_button"


    }


]`
