---
title: "Add Zuora OneID app to JumpCloud"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-jumpcloud-using-saml-in-oneid/add-zuora-oneid-app-to-jumpcloud"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:49.580Z"
---

# Add Zuora OneID app to JumpCloud

Learn how to add the Zuora OneID app to JumpCloud by logging in as an administrator, navigating to the SSO Applications tab, and configuring the necessary SAML settings.

1.  Log in to JumpCloud as an administrator.
2.  Go to the SSO Applications tab and click Add New Application.
3.  Select Custom SAML App.
4.  In the General Info step, provide the following information:

    -   Enter the Display Label and Description for the app.

    -   Optional: Add an app logo.


5.  On the SSO tab, you can upload the Service Provider Metadata file from this URL: https://one.zuora.com/saml/metadata . You can also manually configure the following SAML settings:

    -   SP Entity ID: https://one.zuora.com/saml/metadata

    -   For the ACS URLs , add this URL: https://one.zuora.com/saml/SSO

    -   SAMLSubject NameID format: `emailAddress`

    -   SAMLSubject NameID: `email`

    -   Leave other fields at their default values.


6.  Click Save.
