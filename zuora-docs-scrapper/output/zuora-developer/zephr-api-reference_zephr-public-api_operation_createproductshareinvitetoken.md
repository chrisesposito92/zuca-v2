---
title: "CreateProductShareInviteToken"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createProductShareInviteToken/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:44.010Z"
---

## Create a product share invite token

Creates a new user product share. Invoking this method will reduce the number of shares that the user has available for the given product. The returned token sharing ID can later be passed to the accept invite method. Custom metadata can also be passed to this method, which will be made available in later calls to access the publicly available share data. This metadata can be used, for example, to include the product owner's first name and a personalised message that is shown to the recipient in a screen that allows the recipient to accept the invite. Invoking this method will reduce the number of shares that the user has available for the given product. The specified product must be shareable, the current user must have active grants for the product and must not have already exceeded the configured maximum number of shares for the product.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| product_idrequired | stringThe ID of the product that is being shared. |
| --- | --- |
| meta_data | objectExtra information for the user product share. |

Responses

200

OK

400

Bad Request. Also returned if the product is not shareable.

403

Forbidden

404

Product ID not found.

409

Conflict. There already is a sharing invite for this product and email.

post/zephr/public/products/v1/shares/invitations/tokens

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "product-1"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "sharing_id": "0nasdj-aso25-6454"


}`
