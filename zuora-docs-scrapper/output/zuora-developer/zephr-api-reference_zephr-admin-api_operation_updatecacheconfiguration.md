---
title: "UpdateCacheConfiguration"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateCacheConfiguration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:03.042Z"
---

## Update a cache configuration

Updates a cache configuration.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Cache Configuration identifier |
| --- | --- |

##### Request Body schema: application/json

| label | string |
| --- | --- |
| conditions | object |
| cache | object |

Responses

200

OK

400

Bad Request

put/v3/cache-configurations/{id}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "label": "Test",

-   "conditions": {

    -   "url_pattern": "^/forum",

    -   "header_patterns": {

        -   "Content-Type": "^text/html"


        }


    },

-   "cache": {

    -   "origin": false,

    -   "decision_points": false


    }


}`
