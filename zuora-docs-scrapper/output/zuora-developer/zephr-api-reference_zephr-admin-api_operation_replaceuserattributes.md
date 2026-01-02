---
title: "ReplaceUserAttributes"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/replaceUserAttributes/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:16.909Z"
---

## Update all user attributes

Replaces a user's attributes. This will replace any existing attributes for the user with the attributes in the payload. To leave existing attributes in place, use PATCH.

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

put/v3/users/{user\_id}/attributes

Request samples

-   Payload

application/json

Copy

`{

-   "first_name": "Joe",

-   "surname": "Blow"


}`
