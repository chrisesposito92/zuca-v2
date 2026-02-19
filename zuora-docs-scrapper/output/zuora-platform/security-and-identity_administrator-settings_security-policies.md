---
title: "Security Policies"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/security-policies"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:25.533Z"
---

# Security Policies

The Security Policies setting allows administrators to manage and configure Zuora security policies.

This article describes security and password policies and considerations, including password restrictions and login lockout policies for all users.

## Security Considerations

Your company's Billing Administrators can configure your Billing password expiration rules for a higher level of application security.

Administrators can configure your company's password expiration rules by navigating to Settings > Administration \> Security Policies . From here, administrators can choose to have passwords "never expire" or to expire every 30, 60 or 90 days. When the user password expires, the user is prompted to reset password during login.

If you have the Multi-entity feature enabled, you can only configure the security policies in the global entity. Sub-entities inherit the security policies of the global entity. See Introduction to entity and entity hierarchy for more information about the multi-entity feature.

## API logins

To prevent your order processing from being interrupted unnecessarily, password expiration does not apply to API logins.

If you have enabled a password policy that requires that users change passwords after a period of time, any user ID that is used in the Zuora UI will trigger the password expiration notice and force a change. Because of this policy, Zuora recommends that you create a user ID with a recognizable name (for example, `APIuser@mycompany.com` ) for API integrations, and never use that user ID to log in to the Zuora UI. As long as you don't log into the UI with that user ID, you will not be asked to reset the password, and your API integration will remain unaffected by the expiration policy.

## Security policies

You can configure the following security policies:

| Setting | Description |
| --- | --- |
| Password complexity requirement | Specify the complexity requirement for user passwords. You can select one of the following:None: No requirement is enforced.Must mix upper and lower case charactersMust mix 3 of upper case, lower case, numeric, and special characters for password. A special character for password is one of !"#$%&'()*+,-./:;<=>?@[\]^_`{\|}~ |
| Enforce password history | Select whether to enforce a password history. Users cannot re-use passwords in the password history. |
| Password expiration | Specify the expiration period for user passwords. |
| Minimum password length | Specify the minimum required length of user passwords. |
| Maximum invalid login attempts | Specify the maximum number of times that a user can enter an invalid password. If the user enters an incorrect password after reaching this limit, the user account will be locked out for the period defined in Lockout effective period . |
| Lockout effective period | Specify the amount of time that a user will be locked out after reaching the maximum number of invalid login attempts. |
| Session timeout | Specify the timeout period for a Zuora session. After this period, the user must log in again. The default value is 15 minutes.This value also controls the session timeout of the API login() call. |
| Two-Factor Authentication | Specify that two different forms of user identification are required to log in. A user must enter a user-selected password and a randomly generated code delivered to a mobile device through SMS or an authentication application. |

## Security keys

In the Security Keys section, you can retrieve or regenerate your public and private keys. You use the keys when you implement Payment Pages 2.0.

See Obtain the public key for Payment Pages 2.0 about retrieving or re-generating your security keys in this section.
