---
title: "GetCacheConfiguration"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getCacheConfiguration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:43.269Z"
---

## Retrieve a cache configuration

Retrieves a single cache configuration.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Cache Configuration identifier |
| --- | --- |

Responses

200

OK

get/v3/cache-configurations/{id}

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

    -   "header_patterns": {

        -   "Content-Type": "^text/html"


        }


    },

-   "cache": {

    -   "origin": false,

    -   "decision_points": false


    },

-   "redirect": {

    -   "on": false,

    -   "target": "/some/path",

    -   "status": 301


    }


}`
