---
title: "CreateUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:17.048Z"
---

## Create a user

Creates a new user.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| validators | object (legacy-validators)Validators are not required for user creation, users created without validators won't be able to sign into Zephr unless they follow a password reset flow, or being mapped as shadow users identified by a JWT. |
| --- | --- |
| identifiersrequired | object (identifiers) |
| attributes | object (attributes) |
| accountMembershipCode | string |
| email_verified | boolean |
| last_login | string |
| tracking_id | string |
| registered | string |
| registration_state | object |
| registration_tenant | string |
| session_limit | integer |
| foreign_keys | Array of objects |
| product_sharing_id | string |
| created_at | string |

Responses

201

Created

400

Bad Request

post/v3/users

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "user_id": "123456789ABCD",

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "attributes": {

    -   "first_name": "Joe",

    -   "surname": "Blow",

    -   "email_verified": true


    }


}`

Response samples

-   201

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": {

    -   "user_id": "123456789ABCD",

    -   "identifiers": {

        -   "email_address": "joe.blow@company.com"


        },

    -   "attributes": {

        -   "first_name": "Joe",

        -   "surname": "Blow"


        },

    -   "email_verified": true


    }


}`
