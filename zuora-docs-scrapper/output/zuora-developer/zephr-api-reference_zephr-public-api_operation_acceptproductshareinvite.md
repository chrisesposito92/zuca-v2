---
title: "AcceptProductShareInvite"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/acceptProductShareInvite/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.671Z"
---

## Accept a product share invite

Accepts a product sharing invite. The current user will gain access to the product linked to the sharing invite. The user that send the invite must have an active grant for the product at the point of acceptance. If the current user already has a product share for the same product from the same product owner, an error code 409 will be returned and the invite will not be accepted.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| sharing_idrequired | stringThe ID of the user product sharing invite.Example: 0nasdj-aso25-6454 |
| --- | --- |

Responses

200

OK

400

Bad request

404

Product share ID or product ID not found.

409

Conflict. The current user already has a product share for the same product from the same product owner.

put/zephr/public/products/v1/shares/invitations/{sharing\_id}
