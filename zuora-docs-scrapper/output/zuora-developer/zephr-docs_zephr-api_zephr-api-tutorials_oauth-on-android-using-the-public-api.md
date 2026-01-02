---
title: "OAuth on Android using the Public API"
url: "https://developer.zuora.com/zephr-docs/zephr-api/zephr-api-tutorials/oauth-on-android-using-the-public-api/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:47.062Z"
---

#

OAuth on Android using the Public API

This guide is for an app developer who needs to integrate with Zephr’s OAuth social sign-in.

##

Prerequisites

Configure the OAuth client ID and secret for the providers you are using, details on how to can be found on the [OAuth 2.0 page](https://knowledgecenter.zuora.com/Zephr/Zephr_Classic_User_Guide/G_Integrations/OAuth_2.0 "OAuth 2.0").

Add the Android redirect URI to your Zephr Site (UI for this pending).

This should be either:

-   An app-claimed https URL redirection e.g.  [https://myapp.com/oauthredirect](https://myapp.com/oauthredirect)
-   A custom URL scheme e.g.  `app://myappname/oauthredirect`

Add the Zephr OAuth callback address to your OAuth providers allowed redirects list.
`GET https://mysite.com/blaize/oauth/<provider>/android/callback`

The documentation for the Zephr Public API can be found on the Zephr Support Site.

##

Implementation

Start the OAuth flow by opening a custom chrome tab with the following Public API call:
`GET https://mysite.com/blaize/oauth/<provider>?client_type=android`

This will redirect the browser to the provider’s OAuth page for the user to authenticate, and will redirect back to the Zephr OAuth callback endpoint upon completion.

A list of providers and how to configure them can be found on the [OAuth with the Public API](https://developer.zuora.com/zephr-docs/zephr-api/zephr-api-tutorials/on-site-oauth-with-the-public-api/ "On-site OAuth with the Public API") page.

There are 3 possible outcomes from the OAuth flow callback:

-   Login successful
-   Partial Registration
-   Failure

###

Login successful

If the user either already exists in the Zephr User store or if there are no required registration fields, a user will be successfully logged in and a Zephr session ID will be returned.

Example response:
`<redirecturi>?action=login&status=success&tracking_id=1234&session_id=1234`

###

Partial Registration

If the user accepts the authentication request but Zephr does not have all the information to create the account in the Zephr User store, a partial registration will return a state key that can be used to fully register a user with the missing registration fields.

Example response:
`<redirecturi>?action=register&status=partial&state_key=1234&identifier=user@example.com`

Using the state\_key returned by the callback, the required fields can be sent to fully register a user.

```text
POST https://mysite.com/blaize/register
{
    "validators": {
        "token\_exchange": "<state\_key>"
    },
    "attributes": {
        "first-name": "Example",
        ...
    }
}
```

###

Failure

The user denied the authentication request or something went wrong.

Example response:
`<redirecturi>?action=login&status=failure&message=...`

An example login Android project is available [here](https://bitbucket.org/blaizeinc/zephr-android-oauth-example) for reference.
