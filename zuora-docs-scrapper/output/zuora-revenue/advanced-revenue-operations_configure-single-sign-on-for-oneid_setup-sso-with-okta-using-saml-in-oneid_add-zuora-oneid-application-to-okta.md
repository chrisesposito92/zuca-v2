---
title: "Add Zuora OneID application to Okta"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid/setup-sso-with-okta-using-saml-in-oneid/add-zuora-oneid-application-to-okta"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:48.155Z"
---

# Add Zuora OneID application to Okta

To add Zuora OneID application to Okta, take the following steps:

1.  Log in to Okta as the user who has the application administration permission.
2.  Go to the Applications tab and click Create App Integration .
3.  Select SAML 2.0 as the sign-in method in the dialog and click Next .
4.  In the General Settings step, provide the following information:

    -   Enter an app name.

    -   Optional: add an app logo.


5.  Click Next .
6.  Configure the following SAML settings:

    -   Single sign on URL: `https://one.zuora.com/saml/SSO`

    -   Use this for Recipient URL and Destination URL: select this checkbox

    -   Audience URI: `https://one.zuora.com/saml/metadata`

    -   Default RelayState: leave this field blank

    -   Name ID format: `Unspecified`

    -   Application username: `Email`

    -   Leave other fields at their default values


7.  Click Next .
8.  Click Finish .

For more information, see Create SAML app integrations .
