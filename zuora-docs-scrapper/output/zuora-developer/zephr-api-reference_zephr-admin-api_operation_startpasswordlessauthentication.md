---
title: "StartPasswordlessAuthentication"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/startPasswordlessAuthentication/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:54.936Z"
---

## Start a passwordless authentication

Starts a passwordless authentication.

**IMPORTANT**: For passwordless authentication, first is required to send a POST to request an email to be sent to the user’s email with a link for the user to click on to verify his email.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| deliveryrequired | object |

Responses

201

Created

400

Bad Request

post/v3/users/token-exchange

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "delivery": {

    -   "method": "email",

    -   "destination": "joe.blow@company.com",

    -   "action": "login",

    -   "redirect": "/"


    }


}`
