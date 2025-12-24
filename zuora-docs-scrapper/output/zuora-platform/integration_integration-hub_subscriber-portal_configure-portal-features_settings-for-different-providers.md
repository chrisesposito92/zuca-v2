---
title: "Settings for different providers"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/configure-portal-features/settings-for-different-providers"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:19.714Z"
---

# Settings for different providers

Subscriber Portal supports various types of SSO providers.

## Settings

| Setting | auth0 and okta | jwt | saml |
| --- | --- | --- | --- |
| Client ID | RequiredThe Okta or Auth0 client ID. | N/A | N/A |
| URL | RequiredThe URL where your users should sign in. For example, https://{your-domain}.okta.com . | N/A | OptionalThe URL where your users should sign in. For example, https://{your-domain}.okta.com . |
| JWT Token Validator | N/A | OptionalEnter a JWT token and click Validate to validate your JWT token. It will indicate what fields are missing and what values might be incorrect. You must first save your JWT provider with your secret or public key before validating the JWT token.The validator can be used for both HS256 and RS256 tokens.Note: This form cannot indicate whether iat is expired or jti is an invalid value. It can only verify whether they are present in the token. | N/A |
| JWT Algorithm | N/A | RequiredYou can select from the following algorithms:HS256RS256 | N/A |
| Public Key | N/A | Required for RS256Must be in the PEM format. See jwt.io for more examples. | N/A |
| Secret Key | RequiredThe Auth0 or Okta client secret keyIf the secret key is base64 encoded, select the Is key base64 encoded checkbox. | Required for HS256The shared secret key used to verify your JWT.If the secret key is base64 encoded, select the Is key base64 encoded checkbox. | N/A |
| IDP Certificate | N/A | N/A | RequiredThis field is only available if you use the SAML provider. It is the signing certificate of your identity provider. Enter the certificate from your IDP's metadata. The certificate should be in the PEM format. |
| User Lookup Field | OptionalBy default, the provider searches for the email field as a top-level key in the authentication response. Then the email is compared against the UID of users in the portal to sign in the correct user.If you use something other than email for UID, or use a different field name in the auth response, you can specify which field in the auth response the provider should search for. This can be the name of any top-level key in the auth response. | OptionalBy default, the provider searches for the email field as a top-level key in the authentication response. Then the email is compared against the UID of users in the portal to sign in the correct user.If you use something other than email for UID, or use a different field name in the auth response, you can specify which field in the auth response the provider should look for. This can be the name of any top-level key in the auth response. | RequiredThis field is the name of the SAML auth response attribute that the provider will look for to log in users by matching the value of this field against the UID of users registered in the portal. In this setting, you should specify the name of the attribute containing this information in the name format used by the IDP, instead of its user-friendly name.For example, if your IDP uses the name format like urn:oasis:names:tc:SAML:2.0:attrname-format:uri , and you use the email address for UID, you should enter urn:oid:0.9.2342.19200300.100.1.3 . |
| Account ID Field | OptionalSince users can be associated with multiple accounts in Zuora, you can optionally specify a Zuora account ID in the auth response that users see upon logging in.To specify this setting, enter the field name the provider should search for. This can be the name of any top-level key in the auth response. | OptionalSince users can be associated with multiple accounts in Zuora, you can optionally specify a Zuora account ID in the auth response that a user should see upon logging in.To specify this setting, enter the name of the field in the JWT payload the provider should search for. This can be the name of any top-level key in the auth response. | OptionalSince users can be associated with multiple accounts in Zuora, you can optionally specify a Zuora account ID in the auth response that a user should see upon logging in.To specify this setting, enter the name of the field in the auth response attributes the provider should search for. Similar to User Lookup Field, this should be specified in the name format used by the IDP.After creating a SAML provider in the admin portal, you can access the Subscriber Portal metadata at <portal url>/auth/saml/metadata . |

## Additional information

-   If you use JWT SSO, the provider requires that the JWT payload contains the `iat` and `jti` fields for security purposes.

-   Once a secret or public key is saved on the provider, you must click the Replace button next to the field to clear and change it again.

-   If you use the SAML provider, after creating a SAML provider in the admin portal, you can access the Subscriber Portal metadata at `<portal url>/auth/saml/metadata` . Use it to configure your IDP to trust the portal as a service provider.


## Important links

-   `*<portal url>*/auth/*{provider_name}*/` starts the handshake on the portal side. The `*{provider_name}*` should be okta, auth0, or saml, and cannot be jwt.
-   `*<portal url>*/auth/*{provider_name}*/callback` is where the portal expects the authentication response. The `*{provider_name}*` should be okta, auth0, jwt, or saml. If you use jwt as the provider, the token must be passed as a query parameter or as form data (hidden field). The token parameter name can be either jwt or id\_token.
