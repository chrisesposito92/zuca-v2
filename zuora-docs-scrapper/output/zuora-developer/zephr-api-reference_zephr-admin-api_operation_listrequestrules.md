---
title: "ListRequestRules"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listRequestRules/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:37.366Z"
---

## List request rules

Retrieves a list of request rules wrapped in the element "results".

Security**ZephrHmacHttp**

Request

##### query Parameters

| tags | stringA comma-separeted list of request rule tags (Maximum 50 tags allowed)Example: tags=tag1,tag2,tag3 |
| --- | --- |

Responses

200

OK - Request rules have been retrieved successfully

400

Bad Request - Tags size exceeded the limit of 50

get/v3/request-rules

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "label": "Test",

        -   "conditions": {

            -   "url_pattern": "^/forum",

            -   "method": "GET"


            },

        -   "requirements_script": "return []",

        -   "action_script": "return \"this is a test\"",

        -   "script_type": "javascript",

        -   "graph_state": "{\"property1\": \"value1\"}",

        -   "editing_mode": "manual",

        -   "version": 1,

        -   "description": "Test description",

        -   "priority": 1,

        -   "last_updated": "2011-11-11T11:11:11.000"


        }


    ]


}`
