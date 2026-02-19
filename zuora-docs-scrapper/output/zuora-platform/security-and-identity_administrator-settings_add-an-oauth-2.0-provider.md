---
title: "Add an OAuth 2.0 provider"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/add-an-oauth-2.0-provider"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:10.975Z"
---

# Add an OAuth 2.0 provider

Learn how to add an OAuth 2.0 provider for callout notifications, external SMTP servers, and so on.

1.  Navigate to .
2.  Click New OAuth 2.0 Provider on the All OAuth 2.0 Providers page.
3.  Fill in the fields on the New OAuth 2.0 Provider page.

    See the table below for the descriptions of the fields.

    | Field | Description |
    | --- | --- |
    | Name (required) | Name of the new OAuth 2.0 provider. |
    | Grant Type (required) | OAuth 2.0 grant type. Supported grant types:Client CredentialsRefresh TokenAuthorization Code |
    | Client ID (required) | The client ID that your callout service uses to identify Zuora application. |
    | Client Secret (required) | The client secret that your callout service uses to authenticate the identity of Zuora application. The character limit for this field is 16,000. |
    | Refresh Token (applicable only when the grant type is Refresh Token) | The refresh token that you get from your callout service. It allows the client to obtain a new access token without prompting the user authentication. |
    | Authorization Endpoint (applicable only when the grant type is Authorization Code) | The authorization endpoint that is used to interact with the resource owner and get the authorization to access the protected resource. In the Authorization Code flow, Zuora exchanges the authorization code it got from the authorization endpoint for an access token. |
    | Access Token Endpoint (required) | The endpoint that the client uses to obtain an access token given an authorization code. |
    | Revoke Endpoint (optional) | The endpoint used by the authenticated client to revoke access and refresh token. |
    | Test Endpoint (optional) | The endpoint that you can use to test your configuration. |
    | Scope (optional) | A space-delimited or comma-delimited list of permissions that Zuora requires. |
    | Additional Parameters (optional) | Click Add Parameter to add any information you want to send in the OAuth 2.0 requests, such as the audience of the access token. |

4.  Click Save .
