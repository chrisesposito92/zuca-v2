---
title: "StartUpdatingYourCurrentZephrEmailAddress"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startUpdatingYourCurrentZephrEmailAddress/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.452Z"
---

## Start updating the current email address

Updates the user's email address. The user will receive an email with a one-time password (OTP) to verify the new email address. In order to finish the process, the user must provide the OTP to the */zephr/users/update-email/{otp}* endpoint. The difference between this endpoint and the */blaize/users/update-email* endpoint is that this endpoint requires the extra layer of authentication through the required validator.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| current_identifiersrequired | object (identifiers) |
| --- | --- |
| new_identifiersrequired | object (identifiers) |
| validatorsrequired | object (validators) |

Responses

200

OK. The confirmation email was sent successfully.

400

Bad Request. Returned if the provided email is invalid.

401

Unauthorized. Returned if the provided validator is invalid.

404

Not Found. Returned if the user is not found.

post/zephr/users/update-email

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "current_identifiers": {

    -   "email_address": "john.doe@company.com"


    },

-   "new_identifiers": {

    -   "email_address": "doe.john@company.com"


    },

-   "validators": {

    -   "password": "mysecurepassword123"


    }


}`

Response samples

-   200

application/json

Copy

`{

-   "message": "Email with OTP sent to verify new email address"


}`
