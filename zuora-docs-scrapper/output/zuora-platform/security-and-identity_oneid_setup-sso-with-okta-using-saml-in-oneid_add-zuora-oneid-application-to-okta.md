---
title: "Add Zuora OneID application to Okta"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-okta-using-saml-in-oneid/add-zuora-oneid-application-to-okta"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:15.425Z"
---

# Add Zuora OneID application to Okta

Learn how to add the Zuora OneID application to Okta using SAML 2.0 integration.

1.  Log in to Okta as the user who has the application administration permission.
2.  Go to the Applications tab and click Create App Integration.
3.  Select SAML 2.0 as the sign-in method in the dialog and click Next.
4.  In the General Settings step, provide the following information:

    -   Enter an app name.

    -   Optional: add an app logo.


5.  Click Next.
6.  Configure the following SAML settings:

    -   Single sign on URL: `https://one.zuora.com/saml/SSO`

    -   Use this for Recipient URL and Destination URL: select this checkbox

    -   Audience URI: `https://one.zuora.com/saml/metadata`

    -   Default RelayState: leave this field blank

    -   Name ID format: `Unspecified`

    -   Application username: `Email`

    -   Leave other fields at their default values


7.  Click Next.
8.  Click Finish.

For more information, see [Create SAML app integrations](https://help.okta.com/oie/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SAML.html).
