---
title: "GetProduct"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getProduct/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:18.291Z"
---

## Retrieve a product

Retrieves a single product. The product is identified by the `id` path parameter.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Product identifier. |
| --- | --- |

Responses

200

OK. Returns the product details.

401

Unauthorized. Returned if no valid authentication was provided.

404

Not Found. The product does not exist.

get/v3/products/{id}

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "tenantId": "company",

-   "subTenantId": "company|demo",

-   "id": "gold",

-   "label": "Gold Subscription",

-   "description": "The most premium subscription.",

-   "entitlement": {

    -   "id": "gold-bundle",

    -   "type": "bundle",

    -   "entitlementTenant": "company"


    },

-   "mapping": {

    -   "braintree_one_off": {

        -   "price_points": [

            -   {

                -   "id": "ten",

                -   "label": "Ten Dollars",

                -   "price": 10


                }


            ]


        }


    },

-   "sharingLimit": 5


}`
