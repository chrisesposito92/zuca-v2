---
title: "ListCacheConfigurations"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listCacheConfigurations/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:43.161Z"
---

## List cache configurations

Retrieves a list of cache configurations wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/cache-configurations

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


        }


    ]


}`
