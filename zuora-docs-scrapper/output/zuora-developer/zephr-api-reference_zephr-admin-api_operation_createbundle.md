---
title: "CreateBundle"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createBundle/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:43.704Z"
---

## Create a Bundle

Creates a Bundle.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Bundle identifier |
| --- | --- |

##### Request Body schema: application/json

| label | string |
| --- | --- |
| description | string |
| includes | object |
| auto_assign | string |

Responses

201

Created

400

Bad Request

put/v3/bundles/{id}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "label": "Test bundle",

-   "description": "This is a bundle",

-   "includes": {

    -   "entitlements": [ ],

    -   "meters": [ ],

    -   "credits": [ ],

    -   "bundles": [ ]


    },

-   "auto_assign": "none"


}`
