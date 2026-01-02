---
title: "ListEntitlements"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listEntitlements/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:01.709Z"
---

## List entitlements

Retrieves a list of entitlements wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/entitlements

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "label": "Test entitlement",

        -   "description": "This is an entitlement",

        -   "auto_assign": "none"


        }


    ]


}`
