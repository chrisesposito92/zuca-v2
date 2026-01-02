---
title: "GetFeatureRuleVersion"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getFeatureRuleVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:19.425Z"
---

## Retrieve a feature rule version

Retrieves a version for a single feature rule.

Security**ZephrHmacHttp**

Request

##### path Parameters

| featureRuleIdrequired | stringUnique Feature Rule identifier |
| --- | --- |
| versionIdrequired | stringUnique Version identifier |

Responses

200

OK

get/v3/feature-rules/{featureRuleId}/versions/{versionId}

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "featureRuleId",

-   "version": 1,

-   "tags": [ ],

-   "label": "Test feature",

-   "description": "Test feature",

-   "requirements_script": "return []",

-   "action_script": "return \"this is a test\"",

-   "script_type": "javascript",

-   "graph_state": "{\"property1\": \"value1\"}",

-   "editing_mode": "manual",

-   "last_updated": "2011-11-11T11:11:11.000"


}`
