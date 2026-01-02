---
title: "RegisterUsers"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/registerUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:45.681Z"
---

## Register a user

This endpoint enables clients to initiate the creation of a new user account. If a contact with an identical email address already exists, that contact will be elevated to the status of a registered user. Essential attributes like `identifiers.email_address` and `validators.password` are mandatory for this endpoint. If any of these attributes are absent, registration attempts will trigger an error. Upon a successful request, session cookies like blaize\_session and blaize\_tracking\_id are generated and included in the response header.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| identifiersrequired | object (identifiers) |
| --- | --- |
| validatorsrequired | object (validators) |
| attributes | object (attributes) |

Responses

200

OK. The user was registered successfully.

400

Bad Request. The request included invalid syntax or was missing required parameters. This could alternatively be attributed to the absence of a user email address in the request body.

post/blaize/register

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "validators": {

    -   "password": "mysecurepassword123",

    -   "use_sso": true


    },

-   "attributes": {

    -   "property1": "string",

    -   "property2": "string"


    }


}`

Response samples

-   200

application/json

Copy

`{

-   "cookie": "string",

-   "message": "string",

-   "tracking_id": "string"


}`
