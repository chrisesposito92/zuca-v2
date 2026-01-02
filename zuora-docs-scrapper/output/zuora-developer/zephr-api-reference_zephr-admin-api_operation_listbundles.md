---
title: "ListBundles"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listBundles/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:43.664Z"
---

## List Bundles

Retrieves a list of bundles wrapped in the element "results". Each bundle contains a list of entitlements, meters, credits, and other bundles.

Security**ZephrHmacHttp**

Responses

200

OK

401

Unauthorized. Returned if no valid authentication was provided.

get/v3/bundles

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "tenantId": "company",

        -   "subTenantId": "company|demo",

        -   "type": "bundle",

        -   "id": "1163991e-d671-4695-9ac0-b3d63fecfc20",

        -   "label": "Test bundle",

        -   "description": "This is a bundle",

        -   "includes": {

            -   "entitlements": [ ],

            -   "meters": [ ],

            -   "credits": [ ],

            -   "bundles": [ ]


            },

        -   "auto_assign": "none"


        }


    ]


}`
