---
title: "DeleteUserProductSharing"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/deleteUserProductSharing/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:19:49.762Z"
---

## Delete the product sharing by ID

Deletes a user product share by ID. Pending invites and accepted shares can be deleted. Invoking this method will increase the number of shares that the user has available for the given product. If the sharing\_id corresponds to an accepted share, the member will immediately lose access to the product unless they have separate access. The member will receive an email notification about their removal. This email can be configured in the Admin Console.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| sharing_idrequired | stringThe ID of the user product share to delete.Example: 0nasdj-aso25-6454 |
| --- | --- |

Responses

200

OK

404

Product share ID not found

delete/zephr/public/products/v1/shares/{sharing\_id}
