---
title: "GetBundle"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getBundle/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:43.188Z"
---

## Retrieve a Bundle

Retrieves a single bundle. Each bundle contains a list of entitlements, meters, credits, and other bundles.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Bundle Identifier. |
| --- | --- |

Responses

200

OK

401

Unauthorized. Returned if no valid authentication was provided.

404

Not Found. Returned if the ID is invalid. No bundle found.

get/v3/bundles/{id}

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

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


}`
