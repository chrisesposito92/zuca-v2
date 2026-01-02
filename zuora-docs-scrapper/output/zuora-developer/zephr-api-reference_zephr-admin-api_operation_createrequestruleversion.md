---
title: "CreateRequestRuleVersion"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createRequestRuleVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:52.359Z"
---

## Create a request rule version

Create a request rule version

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Request Rule identifier |
| --- | --- |

Responses

200

OK

400

Bad Request

post/v3/request-rules/{id}/versions

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "label": "Test",

-   "conditions": {

    -   "url_pattern": "^/forum",

    -   "method": "POST"


    },

-   "requirements_script": "return []",

-   "action_script": "return \"this is a test\"",

-   "script_type": "javascript",

-   "graph_state": "{\"property1\": \"value1\"}",

-   "editing_mode": "manual"


}`
