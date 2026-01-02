---
title: "SaveProduct"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveProduct/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:17.988Z"
---

## Save a product

This endpoint saves a product with the given details specified in the body of the request. The product ID is randomyly generated and provided as part of the URI path parameter response returned on success.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| labelrequired | stringThe product label. This is the human-readable name of the product. |
| --- | --- |
| description | stringThe product description. This is a human-readable description of the product. |
| entitlementrequired | object (product.entitlement) |
| mappingrequired | object (product.mapping) |
| sharingLimit | numberThe number of other users that the purchaser of this product can share the product with. |

Responses

201

Created. The product was created.

400

Bad Request. Returned if the request body is invalid.

401

Unauthorized. Returned if no valid authentication was provided.

409

Conflict. Returned when missing a reference to the entitlement.

post/v3/products

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

-   201

application/json

Copy

`{

-   "message": "Product created successfully",

-   "uri": "[https://company.api.zephr.com/v3/products/63b68935-c996-4e90-b88a-dd6a133a7a3](https://company.api.zephr.com/v3/products/63b68935-c996-4e90-b88a-dd6a133a7a3)"


}`
