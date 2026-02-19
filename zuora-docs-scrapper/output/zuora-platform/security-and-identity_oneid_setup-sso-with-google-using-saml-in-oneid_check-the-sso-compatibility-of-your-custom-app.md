---
title: "Check the SSO compatibility of your custom app"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-google-using-saml-in-oneid/check-the-sso-compatibility-of-your-custom-app"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:00.254Z"
---

# Check the SSO compatibility of your custom app

Verify the SSO compatibility of your custom app by following the outlined steps.

To check if your custom app is working with SSO perform the following steps:

1.  Log in to the [Google Admin console](http://admin.google.com)as an administrator.
2.  Go to Menu and click Web and mobile apps from App . For more detailed information, see [Web and mobile apps](https://admin.google.com/ac/apps/unified).
3.  Select the custom SAML app created for OneID.
4.  Click Test SAML login from the top left menu bar. Note: Make sure Zuora OneID opens in a separate tab. If it fails, analyze the [SAML app error messages](https://support.google.com/a/answer/6301076) to make any necessary adjustments to your IdP and SP settings, then retry the SAML login.
