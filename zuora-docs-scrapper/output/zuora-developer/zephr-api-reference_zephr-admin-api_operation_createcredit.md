---
title: "CreateCredit"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createCredit/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:39.758Z"
---

## Create a credit

Creates a credit.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Credit identifier |
| --- | --- |

##### Request Body schema: application/json

| label | string |
| --- | --- |
| description | string |
| delivers | Array of any |
| unit | string |
| quantity | number |
| auto_assign | string |

Responses

201

Created

400

Bad Request

post/v3/credits/{id}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "label": "Test credit",

-   "description": "This is an credit",

-   "delivers": [

    -   "ENTITLEMENT_ID"


    ],

-   "unit": "views",

-   "quantity": 5,

-   "auto_assign": "none"


}`
