---
title: "UpdateProfilePatch"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/updateProfilePatch/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:03.302Z"
---

## Updates the attributes for an authenticated user in the Zephr user store.

Updates the attributes for an authenticated user in the Zephr user store. The behaviour for the POST and PATCH methods on this endpoint is identical. The provided attributes are saved for the user. Any new attributes are added. Any existing attributes with the same keys are updated. Any existing attributes with different keys remain unchanged. The request can also include an optional 'blaize-validator' property to authenticate a previously partially registered user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: blaize_session=57685913-7365-4dae-a425-1c2c2f72cc0 |
| --- | --- |

##### Request Body schema: application/json

| blaize-validator | stringAn optional password that can be used to validate an outstanding partial registration. |
| --- | --- |
| property name*additional property | string or number or integer or boolean |

Responses

200

OK. The message 'User profile updated', to confirm that the user attributes were successfully saved.

400

Bad Request. The request body must be a single layer JSON object. All provided attributes must also pass any applicable attribute validation. All provided required attributes must be non-null. All provided attributes must be publicly writable.

401

Unauthorized. This endpoint will only return successfully for existing authenticated users.

patch/blaize/profile

Request samples

-   Payload

application/json

Copy

`"Blow"`
