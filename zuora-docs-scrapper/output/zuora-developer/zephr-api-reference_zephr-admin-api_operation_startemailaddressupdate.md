---
title: "StartEmailAddressUpdate"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/startEmailAddressUpdate/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:29.468Z"
---

## Start an email address update

Starts an email address update. If the Require Email Verification configuration flag is set, to update a user's email address, first they need to verify their new address. If the Email Change Override feature flag is enabled, the an email with a link to verify the address will be sent to the new address. Otherwise the email will be sent to the old address. If the Require Email Verification configuration flag is not set, this endpoint sets the new email address immediately. If the user has a username and the provided email address is blank, the email address is deleted. If the user does not have a username and the provided email address is blank, a 400 is returned.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |

##### Request Body schema: application/json

| new_identifiersrequired | object |
| --- | --- |
| siteSlugrequired | stringTenant and site identifier in the format <tenantid>\|<site>. |

Responses

201

OK. The process to update email started and is potentially already completed, depending on the Email Verification configuration flag. See endpoint description for more information.

400

Bad Request

404

User ID not Found

409

Email address already in use

post/v3/users/{user\_id}/update-email

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "new_identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "siteSlug": "<tenantid>|<site>"


}`
