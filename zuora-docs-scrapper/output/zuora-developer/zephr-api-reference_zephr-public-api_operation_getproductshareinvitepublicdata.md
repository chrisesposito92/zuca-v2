---
title: "GetProductShareInvitePublicData"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getProductShareInvitePublicData/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.293Z"
---

## Retrieve the product share invite public data

Retrieves the publicly accessible data relating to a user product share invite. This can be used to inform the invitee of the details of the product that is being shared, and any meta\_data added at the point of invite creation, such as the name of the user that sent the invite. This endpoint is not authenticated. The information provided by this endpoint is available to anyone with a valid `sharing_id`. Invoking this endpoint too rapidly will result in a 429 error response.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| sharing_idrequired | stringThe ID of the user product sharing invite.Example: 0nasdj-aso25-6454 |
| --- | --- |

Responses

200

OK

404

Not Found - No product share invite found with the supplied `sharing_id`.

429

Too Many Requests

get/zephr/public/products/v1/shares/invitations/{sharing\_id}

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "product_id": "product-1",

-   "product_label": "Gold Product",

-   "meta_data": { }


}`
