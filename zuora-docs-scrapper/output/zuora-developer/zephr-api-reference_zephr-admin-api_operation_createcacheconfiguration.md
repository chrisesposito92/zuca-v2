---
title: "CreateCacheConfiguration"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createCacheConfiguration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:44.467Z"
---

## Create a cache configuration

Creates a Cache Configuration.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| label | string |
| --- | --- |
| conditions | object |
| cache | object |

Responses

201

Created

400

Bad Request

post/v3/cache-configurations

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
