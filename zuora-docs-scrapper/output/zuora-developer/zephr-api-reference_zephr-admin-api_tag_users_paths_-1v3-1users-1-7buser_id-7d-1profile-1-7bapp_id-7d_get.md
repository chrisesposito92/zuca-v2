---
title: "Get"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/tag/Users/paths/~1v3~1users~1%7Buser_id%7D~1profile~1%7Bapp_id%7D/get/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:36.512Z"
---

## Retrieve Extended User Profiles

Extended Profile is used to store additional user information that is not part of the core profile. This endpoint is designed to be used for retrieving the user's Extended Profile. The body can be any valid JSON.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User Identifier |
| --- | --- |
| app_idrequired | stringUnique App Identifier |

Responses

200

OK

400

Bad Request. Thrown when app\_id starts with \_restricted.

401

Unauthorized. The user is not authorized to fetch the profile.

404

Not Found. The provided user does not exist.

get/v3/users/{user\_id}/profile/{app\_id}

Response samples

-   200

application/json

Copy

`{

-   "message": "User extended profile"


}`
