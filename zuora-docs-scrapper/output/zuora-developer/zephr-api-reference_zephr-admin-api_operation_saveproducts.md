---
title: "SaveProducts"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveProducts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:18.021Z"
---

## Save a product with the given ID

This endpoint both saves and updates a product. The product is identified by the `id` path parameter. If the product ID does not exist, then a new product with the corresponding ID will be created. Otherwise, the existing product will be modified.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Product identifier. |
| --- | --- |

##### Request Body schema: application/json

| labelrequired | stringThe product label. This is the human-readable name of the product. |
| --- | --- |
| description | stringThe product description. This is a human-readable description of the product. |
| entitlementrequired | object (product.entitlement) |
| mappingrequired | object (product.mapping) |
| sharingLimit | numberThe number of other users that the purchaser of this product can share the product with. |

Responses

200

OK. The product was updated.

201

Created. The product was created.

400

Bad Request. Returned if the request body is invalid.

401

Unauthorized. Returned if no valid authentication was provided.

409

Conflict. Returned when missing a reference to the entitlement.

put/v3/products/{id}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

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

Response samples

-   200
-   201

application/json

Copy

`{

-   "message": "Product updated successfully",

-   "uri": "[https://company.api.zephr.com/v3/products/gold](https://company.api.zephr.com/v3/products/gold)"


}`
