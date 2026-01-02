---
title: "GetFeatureRuleVersions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getFeatureRuleVersions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:20.723Z"
---

## List the versions of a feature rule

Retrieves a lists of all the versions for a single feature rule.

Security**ZephrHmacHttp**

Request

##### path Parameters

| featureRuleIdrequired | stringUnique Feature Rule identifier |
| --- | --- |

Responses

200

OK

get/v3/feature-rules/{featureRuleId}/versions

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

    -   "last_updated": "2011-11-11T11:11:11.000"


    }


]`
