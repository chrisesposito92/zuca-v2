---
title: "CreateCredits"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createCredits/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:41.653Z"
---

## Create Credit

Create an Credit

Security**ZephrHmacHttp**

Request

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

post/v3/credits

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
