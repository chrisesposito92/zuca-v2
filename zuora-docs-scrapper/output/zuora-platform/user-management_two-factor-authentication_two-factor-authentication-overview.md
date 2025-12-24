---
title: "Two-factor authentication overview"
url: "https://docs.zuora.com/en/zuora-platform/user-management/two-factor-authentication/two-factor-authentication-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:20:32.968Z"
---

# Two-factor authentication overview

Two-factor authentication is a system which uses two different forms of user authentication, providing a higher level of authentication.

Traditional user authentication consists of a general username and password. This provides minimal security since passwords may be easy to guess and users tend to re-use the same password across multiple accounts.

Two-factor authentication (2FA) is a system that uses two different forms of user authentication, which provides a higher level of authentication that consists of the following:

-   A user-selected password

-   A randomly generated code delivered to a mobile device through SMS or an authentication application


Users must enter the code within a certain timeframe for successful authentication.

## Prerequisites

Tenant users must have one of the following to use two-factor authentication:

-   SMS enabled mobile phone

-   Authentication application for mobile phone or tablet


## Recommended authentication applications

Zuora recommends the following authentication applications:

| Authentication application | Tested by Zuora | Supporte |
| --- | --- | --- |
| Google Authenticator | Yes | Yes |
| Duo Mobile | Yes | Yes |
| Amazon AWS MFA (Android only) | Yes | Yes |
| Microsoft Authenticator | No | No |

## Two-factor authentication setup

To log in all UI users, the Zuora administrators need to complete the following steps:

-   Authentication setup

-   Re-authentication


Users have the option of receiving the authentication code in two ways:

-   SMS

-   Authentication application


The following cases require re-authentication:

-   User logs in to Zuora UI after the Remember me for 30 days period has expired.

-   User logs in from another machine or browser where the Remember me for 30 days option has not been enabled.


## Reset two-factor authentication

Tenant administrators can disable or reset two-factor authentication for a tenant or specific user.

If an individual user loses their phone or their phone crashes, they will not be able to use two-factor authentication. If this occurs, you can disable 2FA access for a specific user in .

If you disable two-factor authentication for a tenant or a specific user level, all user tenants or specific users will only have to enter their Zuora username and password when logging in to Zuora.

When two-factor authentication is re-enabled, all user tenants or specific users have to set up 2FA from the beginning.

Note:

If you are a Zuora administrator and you lose your phone, contact [Zuora Global Support](https://support.zuora.com/) to disable or enable two-factor authentication. Zuora recommends having at least two Zuora administrators, in case one loses their phone.
