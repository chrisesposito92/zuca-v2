---
title: "GetRequestRuleVersion"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getRequestRuleVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:37.339Z"
---

## Retrieve a particular version of a request rule

Retrieves a request rule version.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Request Rule identifier |
| --- | --- |
| versionIdrequired | integerUnique Request Rule version number |

Responses

200

OK

get/v3/request-rules/{id}/versions/{versionId}

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "label": "Test",

-   "description": "This rule tests for authenticated users",

-   "priority": 1,

-   "version": 1,

-   "last_updated": "2011-11-11T11:11:11.000",

-   "conditions": {

    -   "url_pattern": "^/forum",

    -   "method": "GET"


    },

-   "lastUpdatedAt": "2022-06-01 00:00:00",

-   "requirements_script": "return []",

-   "action_script": "return \"this is a test\"",

-   "script_type": "javascript",

-   "graph_state": "{\"property1\": \"value1\"}",

-   "editing_mode": "manual"


}`
