---
title: "GetCredit"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getCredit/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:41.925Z"
---

## Retrieve a credit

Retrieves a single credit.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Credit identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/credits/{id}

Response samples

-   200

application/json

responseresponse

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
