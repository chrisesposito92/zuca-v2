---
title: "CreateProductSharingInviteViaEmail"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createProductSharingInviteViaEmail/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:50.704Z"
---

## Create a product sharing invite via Email

Creates a new user product share and send it via email. The exact contents of this email are configurable in the admin console. The email may include a link composed of the required attribute `base_url` and an additional path parameter `sharing_id`. It is expected that the specified `base_url` will direct invite recipients to a page that allows them to accept the invite and register/login. Custom metadata can also be passed to this method, which will be made available in the invitation email template and any later calls to access the publicly available share data. This metadata can be used, for example, to include the product owner's first name and a personalised message that is shown to the recipient in the invitation email and in a screen that allows the recipient to accept the invite. Invoking this method will reduce the number of shares that the user has available for the given product. The specified product must be shareable, the current user must have active grants for the product and must not have already exceeded the configured maximum number of shares for the product.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| product_idrequired | stringThe ID of the product that is being shared. |
| --- | --- |
| email_addressrequired | stringThe email address to send the invite to. |
| base_urlrequired | stringThe invite link destination URL. The path parameter 'sharing_id=xxx' will be added to this URL. Other path parameters and anchors are accepted. |
| meta_data | objectExtra information for the user product share, which can be included in the sent email. |

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

post/zephr/public/products/v1/shares/invitations/emails

Request samples

-   Payload

application/json

Copy

`{

-   "product_id": "product-1",

-   "email_address": "name@domain.com",

-   "base_url": "[https://example.com/accept-invite](https://example.com/accept-invite)"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "sharing_id": "0nasdj-aso25-6454"


}`
