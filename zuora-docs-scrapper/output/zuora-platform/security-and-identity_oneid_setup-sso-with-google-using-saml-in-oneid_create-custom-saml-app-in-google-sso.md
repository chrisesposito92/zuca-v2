---
title: "Create custom SAML app in Google SSO"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-google-using-saml-in-oneid/create-custom-saml-app-in-google-sso"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:00.517Z"
---

# Create custom SAML app in Google SSO

Learn how to create a Zuora OneID application in Google SSO by following a series of steps, including logging into the Google Admin console, configuring app settings, and updating SAML details.

1.  Log in to the [Google Admin console](http://admin.google.com) as an administrator.
2.  Go to Menu and click Web and mobile apps from App. For more detailed information, see [Web and mobile apps](https://admin.google.com/ac/apps/unified).
3.  Click Add app and select Add custom SAML app from the drop-down menu.
4.  Configure the following settings on the app details page:
    1.  Enter the name of the custom app.
    2.  (Optional) Upload an app icon. Note: The app icon appears on the Web and mobile apps list, the app settings page, and the app launcher. If you don't upload an icon, an icon gets created from the first two letters of the app name you provide.
5.  Click Continue.
6.  Download the IDP metadata on the Google Identity Provider details page and click Continue. The Service Provider Details window opens.
7.  Configure the following details on the Service Provider Details page:
    1.  ACS URL: Enter the service provider's Assertion Consumer Service URL as [https://one.zuora.com/saml/SSO](https://one.zuora.com/saml/SSO).
    2.  Entity ID: Enter the unique SAML entity value as [https://one.zuora.com/saml/metadata](https://one.zuora.com/saml/metadata).
8.  Check the Signed Response box to ensure the entire SAML authentication response is signed.
9.  Update the Name ID format to email.
10.  Click Continue and select Finish.
