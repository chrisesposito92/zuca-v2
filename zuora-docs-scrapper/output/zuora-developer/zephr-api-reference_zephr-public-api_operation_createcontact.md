---
title: "CreateContact"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createContact/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:45.547Z"
---

## Create or Update a Contact User

This endpoint creates a new contact user or updates the attributes of an existing contact user if one exists with the supplied email address. To use this endpoint, 'contact users' must be enabled in the identity settings page in the console. A contact user is a type of user that has no validators and so no ability to create authenticated sessions. Contact users can be created to capture user information, such as email addresses, without fully registering users. This endpoint cannot be used to update the attributes of a registered user. Attempting to do so will return a 409 response. After creating a contact with an anonomyous session, the session is updated to include a flag to identify that this has happened. In the rules builder, the 'Contact Capture' decision node can be used to test this flag value and so determine if the current anonymous session was used to create a contact. This can be used, for example, to prevent showing a contact form to anonymous users that have already filled in such a form.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| identifiersrequired | object (identifiers) |
| --- | --- |
| attributes | object (attributes) |

Responses

200

Created or updated a contact user

400

Bad Request

Returned if a request is missing an email identifier, or if some user attributes are invalid.

403

Contact creation not enabled

409

User {email} already exists

Returned when attempting to update the attributes of an already registered user.

post/zephr/createContact

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "attributes": {

    -   "property1": "string",

    -   "property2": "string"


    }


}`

Response samples

-   200

application/json

Create-New-ContactUpdate-Existing-ContactCreate-New-Contact

Copy

`{

-   "tracking_id": "0014fdc8-55d1-4916-bbde-5b83b5846766",

-   "message": "Creating contact successful"


}`
