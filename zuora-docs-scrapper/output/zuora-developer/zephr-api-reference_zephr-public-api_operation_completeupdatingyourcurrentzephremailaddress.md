---
title: "CompleteUpdatingYourCurrentZephrEmailAddress"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/completeUpdatingYourCurrentZephrEmailAddress/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.539Z"
---

## Complete updating the current email address

Completes updating the user's email address. The user must provide the OTP received in the email to verify the new email address. The difference between this endpoint and the */blaize/users/update-email/* endpoint is that this endpoint requires the extra layer of authentication through the required validator.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| otprequired | stringThe one-time password (OTP) received in the email. |
| --- | --- |

##### Request Body schema: application/json

| current_identifiersrequired | object (identifiers) |
| --- | --- |
| validatorsrequired | object (validators) |

Responses

200

OK. The email address was updated successfully.

400

Bad Request. Returned if the provided OTP is invalid.

401

Unauthorized. Returned if the provided validator is invalid.

post/zephr/users/update-email/{otp}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "current_identifiers": {

    -   "email_address": "john.doe@company.com"


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

-   "message": "User Email updated"


}`
