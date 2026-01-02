---
title: "SaveProfile"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/saveProfile/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:04.406Z"
---

## Sets the attributes for an authenticated user in the Zephr user store.

Sets the attributes for an authenticated user in the Zephr user store. The provided attributes are saved for the user. Any existing attributes for the user are removed and replaced with this new set.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: blaize_session=57685913-7365-4dae-a425-1c2c2f72cc0 |
| --- | --- |
| Authorization | stringAn OAuth access token key that references a previously created OAuth token. Such a token can be created using the '/zephr/oauth2/token' endpoint and is expected to have the scope 'user.profile:update'.Example: Bearer AYjcyMzY3ZDhiNmJkNTYt0Zi |

##### Request Body schema: application/json

| property name*additional property | string or number or integer or boolean |
| --- | --- |

Responses

200

OK. The message 'User profile updated' is displayed to confirm that the user attributes were successfully saved.

400

Bad Request. The request body must be a single layer JSON object. All provided attributes must also pass any applicable attribute validation. All required attributes must be provided and be non-null. All provided attributes must be publicly writable.

401

Unauthorized. This endpoint will only return successfully for existing authenticated users.

put/blaize/profile

Request samples

-   Payload

application/json

Copy

`{

-   "property1": "string",

-   "property2": "string"


}`
