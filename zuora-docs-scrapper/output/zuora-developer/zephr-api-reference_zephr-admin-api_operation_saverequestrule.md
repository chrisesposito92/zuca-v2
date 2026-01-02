---
title: "SaveRequestRule"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveRequestRule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:37.795Z"
---

## Save a request rule

Saves a request rule.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| label | string |
| --- | --- |
| conditions | object |
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

put/v3/request-rules

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "label": "Test",

-   "conditions": {

    -   "url_pattern": "^/forum",

    -   "method": "GET"


    },

-   "requirements_script": "return []",

-   "action_script": "return \"this is a test\"",

-   "script_type": "javascript",

-   "graph_state": "{\"property1\": \"value1\"}",

-   "editing_mode": "manual"


}`
