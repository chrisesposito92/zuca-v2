---
title: "StartPasswordReset"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/startPasswordReset/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:55.382Z"
---

## Start a password reset

Starts a password reset.

**IMPORTANT**: To reset a user password, first is required to send a POST to request an email to be sent to the user’s email with a link for the user to click on, so as to verify that they requested this password change.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| siteSlugrequired | stringThe slug of the site where the user account is registered. |

Responses

200

OK - The password reset flow has been started successfully

400

Bad Request - Incorrect payload was submitted

404

Not Found - Site not found with the supplied `siteSlug`, or user not found with the supplied email address

post/v4/users/reset

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "siteSlug": "my-site"


}`
