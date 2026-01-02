---
title: "CreateFeatureRule"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createFeatureRule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:20.101Z"
---

## Create a feature rule version

Creates a feature rule version.

Security**ZephrHmacHttp**

Request

##### path Parameters

| featureRuleIdrequired | stringUnique Feature Rule identifier |
| --- | --- |

##### Request Body schema: application/json

| label | string |
| --- | --- |
| description | string |
| requirements_script | string |
| action_script | string |
| script_type | string |
| graph_state | string |
| editing_mode | string |

Responses

200

OK

201

Created

400

Bad Request

post/v3/feature-rules/{featureRuleId}/versions

Request samples

-   Payload

application/json

Copy

`{

-   "label": "Test feature",

-   "description": "Test feature",

-   "requirements_script": "return []",

-   "action_script": "return \"this is a test\"",

-   "script_type": "javascript",

-   "graph_state": "{\"property1\": \"value1\"}",

-   "editing_mode": "manual"


}`

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "message": "Feature Rule created successfully",

-   "uri": "[http://host/v3/feature-rules/featureRuleId/versions](http://host/v3/feature-rules/featureRuleId/versions)"


}`
