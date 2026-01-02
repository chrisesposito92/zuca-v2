---
title: "UpdateUserAttribute"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateUserAttribute/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:12.283Z"
---

## Update user attributes

Updates a user's attributes. Any of the user's existing attributes not specified in the payload will be left in-place.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |

##### Request Body schema: application/json

| first_name | string |
| --- | --- |
| surname | string |

Responses

200

OK

400

Bad Request

404

Not Found

patch/v3/users/{user\_id}/attributes

Request samples

-   Payload

application/json

Copy

`{

-   "first_name": "Joe",

-   "surname": "Blow"


}`
