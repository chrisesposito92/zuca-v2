---
title: "Add Zuora application to Okta"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-okta-for-sso-saml/add-zuora-application-to-okta"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:43.547Z"
---

# Add Zuora application to Okta

Learn how to add Zuora application to Okta.

1.  Log in to Okta as the user who has the application administration permission.
2.  Go to the Applications tab and click Add application > Create new app .
3.  In the dialog, select SAML 2.0 as the sign-on method and click Create .
4.  In the General Settings step, enter the application name and an optional application. Click Next .
5.  Enter the SAML settings.

    -   Single sign-on URL: The Assertion Consumer Service (ACS) endpoints where the Zuora application receives the SAML assertion. The value to enter depends on the Zuora environment in which you are enabling SSO.

        -   US Cloud 1 Production - `https://na.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   US Cloud 1 API Sandbox - `https://sandbox.na.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   US Cloud 2 Production - `https://www.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   US Cloud 2 API Sandbox - `https://apisandbox.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   US Central Sandbox - `https://test.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   US Performance Test - `https://pt1.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   EU Cloud Production - `https://eu.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   EU Cloud API Sandbox - `https://sandbox.eu.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   EU Central Sandbox - `https://test.eu.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   APAC Central Sandbox - `https://test.ap.zuora.com/apps/saml/SSO/alias/defaultAlias`

        -   APAC Cloud Production `- https://ap.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   Audience URI : Enter the Entity ID of this Zuora application. The value to enter depends on the Zuora environment in which you are enabling SSO.

        -   US Cloud 1 Production - `na.zuora.com`

        -   US Cloud 1 API Sandbox - `sandbox.na.zuora.com`

        -   US Cloud 2 Production - `www.zuora.com`

        -   US Cloud 2 API Sandbox - `apisandbox.zuora.com`

        -   US Performance Test - `pt1.zuora.com`

        -   US Central Sandbox - `test.zuora.com`

        -   EU Cloud Production - `eu.zuora.com`

        -   EU Cloud API Sandbox - `sandbox.eu.zuora.com`

        -   EU Central Sandbox - `test.eu.zuora.com`

        -   APAC Central Sandbox - `test.ap.zuora.com`

        -   APAC Cloud Production `- ap.zuora.com`

    -   Default RelayState: Leave this field blank.

    -   ​ Name ID format: Set to EmailAddress.

    -   Default username: Set to Email.

    -   Leave all other fields at their default values.


6.  Click Next .
7.  Click Finish .
