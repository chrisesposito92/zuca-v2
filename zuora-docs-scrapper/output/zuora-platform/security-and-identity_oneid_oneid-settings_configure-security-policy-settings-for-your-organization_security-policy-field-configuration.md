---
title: "Security policy field configuration"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/oneid-settings/configure-security-policy-settings-for-your-organization/security-policy-field-configuration"
product: "zuora-platform"
scraped_at: "2026-02-20T17:44:17.109Z"
---

# Security policy field configuration

Configure security policies in Zuora to enhance organizational security by setting password complexity, history, expiration, and more.

Strengthen your organization's security by implementing password protection measures with Zuora's security policies. Set password history, length, and complexity requirements. Additionally, establish password reset procedures for enhanced security.

The following security policies are available within OneID for administrators to implement at the organizational level:

| Field Name | Description |
| --- | --- |
| Password complexity | Strong: Requires at least three of the following character combination types:uppercase letterslowercase lettersnumbersnon-alphanumeric ASCII charactersMedium: Requires at least two of the character types mentioned above.Weak: Requires a minimum length of six characters. This setting mandates all users to reset their passwords during their next login attempt. |
| Enforce password history | No Passwords Remembered: Users are allowed to reset their immediate previous passwords.2 to 10 Passwords: Users cannot reset passwords from the past 2 to 10 instances set by the administrator. |
| Password Expiration | Never: Passwords do not expire.30 Days: Passwords expire every 30 days from user activation or the date of change in this setting.60 Days: Passwords expire every 60 days from user activation or the date of change.90 Days: Passwords expire every 90 days from user activation or the date of change. |
| Minimum password length | Admins can define the minimum password length for the organization, prompting users to reset their password during their next login.8 Characters (Default)10 Characters12 Characters14 Characters |
| Maximum invalid login attempts | The value can range between 3 and 10, with a default of 3 attempts. |
| Lockout effective period | Admins can set the lockout period for users to reach the maximum number of invalid login attempts, which include 5, 10, 20, 30, or 60 minutes. |
| Reset password for all users (Non SSO customers) | This feature enables the organization to reset passwords for all users with security threats or for security reasons. It forces all users to reset their passwords during their subsequent login attempts. |
| Enable Group For All Users | This option sets the provisioning mode to Group for all users within your organization, allowing access to Zuora applications based on the specific User Groups to which each user belongs. To know more see, Enable Group Provisioning for All Users. |
| Two-Factor Authentication | Enables SMS-based two-factor authentication (2FA) for all non-SSO users in your organization. |
