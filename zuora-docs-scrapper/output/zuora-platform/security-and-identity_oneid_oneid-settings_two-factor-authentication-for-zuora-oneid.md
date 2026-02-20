---
title: "Two-Factor Authentication for Zuora OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/oneid-settings/two-factor-authentication-for-zuora-oneid"
product: "zuora-platform"
scraped_at: "2026-02-20T17:44:18.021Z"
---

# Two-Factor Authentication for Zuora OneID

Learn how Two-Factor Authentication (2FA) in Zuora OneID enhances security by requiring a password and a time-based verification code.

Zuora OneID Two-factor authentication enhances account security by requiring a second form of authentication in addition to the password. This additional layer ensures that access to the account requires both your password and a verification code sent to your mobile. Two-factor authentication (2FA) enhances security by requiring two forms of verification:

-   A user-chosen password.
-   A time-based verification code (TOTP) received on a mobile device, either through text message or an authentication application.

You must enter the verification code within a certain timeframe for successful authentication.

MFA cannot be enabled in OneID for users who are configured with Single Sign-On (SSO). The reason is that the Identity Provider (IdP) is responsible for handling user authentication. Therefore, it is recommended to configure MFA directly at the IdP level where SSO is managed. Note that MFA in OneID can still be applied to users who do not use SSO for their login.

## Disable Two-Factor Authentication

By default, 2FA is disabled. If you choose to disable it, acknowledge the associated risks, including potential data loss or account compromise. Disable 2FA through your user profile to the right and select Settings > Security Policies by choosing Disabled in Two Factor Authentication and clicking Save.

## Change the Mobile Number

To change the registered mobile number for SMS-based MFA, users must contact the Zuora administrator or Zuora [support](https://support.zuora.com/hc/en-us).

## Prerequisites for Two-factor authentication

You must have one of the following to use two-factor authentication:

-   A mobile phone that can receive SMS messages
-   An authenticator application on a mobile phone or tablet
