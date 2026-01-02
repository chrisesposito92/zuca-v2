---
title: "OAuth on iOS using the Swift SDK"
url: "https://developer.zuora.com/zephr-docs/zephr-sdk/zephr-sdk-tutorials/oauth-on-ios-using-the-swift-sdk/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:48.692Z"
---

#

OAuth on iOS using the Swift SDK

This guide is for an app developer who needs to integrate with Zephr’s OAuth social sign-in.

##

Prerequisites

Configure the OAuth client ID and secret for the providers you are using, details on how to can be found on the [OAuth 2.0 page](https://knowledgecenter.zuora.com/Zephr/Zephr_Classic_User_Guide/G_Integrations/OAuth_2.0 "OAuth 2.0").

Add the iOS redirect URI to your Zephr Site (UI for this pending).

This should be either:

-   An app-claimed https URL redirection e.g. [https://myapp.com/oauthredirect](https://myapp.com/oauthredirect "https://myapp.com/oauthredirect")
-   A custom URL scheme e.g.  `my-app:/oauthRedirect`

Add the Zephr OAuth callback address to your OAuth providers allowed redirects list.
`GET https://mysite.com/zephr/oauth/<provider>/ios/callback`

The Zephr Swift SDK can be used to make integration with the Zephr Public API simpler in your app. The SDK can be found on BitBucket [here](https://bitbucket.org/blaizeinc/swift-sdk).

##

Implementation

Start the OAuth flow by retrieving the authentication URL for your chosen provider.

A list of providers and how to configure them can be found on the [OAuth with the Public API page](https://developer.zuora.com/zephr-docs/zephr-api/zephr-api-tutorials/on-site-oauth-with-the-public-api/ "On-site OAuth with the Public API").

Example startOAuthFlow call:

```swift
BlaizePublic.client.startOAuthFlow(provider: AuthProvider) { result in
    switch result {
    case .success(let locationUrl):
        // Trigger OAuth flow
    case .failure:
        // Handle failure
    }
}
```

Using the location URL returned by `startOAuthFlow`, start an `ASWebAuthenticationSession`.

Details can be found at [ASWebAuthenticationSession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession).

This will cause the app to launch a webview with the providers OAuth page for the user to authenticate and will return a `callbackURL` when the configured `callbackURLScheme` is found.

There are 3 possible outcomes from the OAuth flow callback:

-   Login successful
-   Partial Registration
-   Failure

###

Login Successful

If the user either already exists in the Zephr User store or if there are no required registration fields, a user will be successfully logged in and a Zephr session ID will be returned.

Example response:
`<redirecturi>?action=login&status=success&tracking_id=1234&session_id=1234`

###

Partial Registration

If the user accepts the authentication request but Zephr does not have all the information to create the account in the Zephr User store, a partial registration will return a state key that can be used to fully register a user with the missing registration fields.

Example response:
`<redirecturi>?action=register&status=partial&state_key=1234&identifier=user@example.com`

Using the state\_key returned by the callback, the required fields can be sent to fully register a user.

```swift
BlaizePublic.client.register(token: token, attributes: \[...\]) { result in
    switch result {
    case .success(let sessionId):
        print("Registration successful")
        // Save the sessionId
    case .userAlreadyExists:
        print("Error: user already exists")
    case .emailDomainBlacklisted:
        print("Error: email domain blacklisted")
    case .badRequest:
        print("Error: bad registration request")
    }
}
```

###

Failure

The user denied the authentication request or something went wrong.

Example response:
`<redirecturi>?action=login&status=failure&message=...`

An example of how to handle the Zephr OAuth callback responses in Swift follows:

```swift
switch callbackURL?.queryItems\["status"\] {
case "success":
    print("Login successful")
    setUserSessionId(sessionId: queryItems\["session\_id"\])
case "partial":
    print("Partial registration successful")
    triggerPartialRegistration(token: queryItems\["state\_key"\])
case "failure":
    print("Auth response error")
    print(queryItems\["message"\] ?? "")
default:
    print("Unknown auth response status")
    print (callbackURL!)
}
```

An example login Swift project is available [here](https://bitbucket.org/blaizeinc/zephr-ios-oauth-example) for reference.
