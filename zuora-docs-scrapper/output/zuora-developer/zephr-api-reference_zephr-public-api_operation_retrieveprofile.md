---
title: "RetrieveProfile"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveProfile/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:03.707Z"
---

## Retrieves the attributes for an authenticated user in the Zephr user store.

Retrieves the attributes for an authenticated user in the Zephr user store. In addition to the standard authenticators, this endpoint also accepts an OAuth bearer token through the Authorization header. The response will only include publicly accessible user attributes.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| Cookie | stringThe session cookie.Example: blaize_session=57685913-7365-4dae-a425-1c2c2f72cc0 |
| --- | --- |
| Authorization | stringAn OAuth access token key that references a previously created OAuth token. Such a token can be created using the '/zephr/oauth2/token' endpoint and is expected to have the scope 'user.profile:update'.Example: Bearer AYjcyMzY3ZDhiNmJkNTYt0Zi |

Responses

200

OK. The user attributes were successfully retrieved. Returns a single layer JSON object of this user's attributes.

401

Unauthorized. This endpoint will return successfully for existing authenticated users only.

get/blaize/profile

Response samples

-   200

application/json

NameAttributesNameAttributes

Copy

`{

-   "first_name": "Joe",

-   "surname": "Blow"


}`
