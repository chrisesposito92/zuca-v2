---
title: "Setup SSO with Google using SAML in OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid/setup-sso-with-google-using-saml-in-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:41.975Z"
---

# Setup SSO with Google using SAML in OneID

This guide provides step-by-step instructions to set up SSO with Google using SAML in OneID, covering application creation, metadata configuration, app activation, and compatibility checks.

This article describes how to configure Azure AD to enable single sign-on with OneID. For more information about SSO in OneID, see [Configure single sign-on for OneID](/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid).

Follow the below steps that details setting up of SSO with Google using SAML in OneID.

-   [Step1: Create Zuora OneID application in Google SSO.](#concept-bevhu0sn__title-1724)

-   [Step 2: Configure Google SSO metadata in Zuora OneID.](#concept-bevhu0sn__title-1728)

-   [Step 3: Turn On Zuora OneID SAML app for the users.](#concept-bevhu0sn__title-1829)

-   [Step 4: Check the SSO compatibility of your custom app](#concept-bevhu0sn__title-1873).


## Step 1: Create Zuora OneID app in Google SSO

To create a Zuora OneID application in Google SSO, perform the following steps:

1.  Log in to the [Google Admin console](http://admin.google.com) as an administrator.
2.  Go to Menu and click [Web and mobile apps](https://admin.google.com/ac/apps/unified) from App.
3.  Click Add app and select Add custom SAML app from the drop-down menu.
4.  Configure the following settings on the app details page:
    1.  Enter the name of the custom app.
    2.  (Optional) Upload an app icon.Note: The app icon appears on the Web and mobile apps list, the app settings page, and the app launcher. If you don't upload an icon, an icon gets created from the first two letters of the app name you provide.
5.  Click Continue.
6.  Download the IDP metadata on the Google Identity Provider details page and click Continue. The Service Provider Details window opens.
7.  Configure the following details on the Service Provider Details page:
    1.  ACS URL: Enter the service provider's Assertion Consumer Service URL as [https://one.zuora.com/saml/SSO](https://one.zuora.com/saml/SSO).
    2.  Entity ID: Enter the unique SAML entity value as [https://one.zuora.com/saml/metadata](https://one.zuora.com/saml/metadata).
8.  Check the Signed Response box to ensure the entire SAML authentication response is signed.
9.  Update the Name ID format to email.
10.  Click Continue and select Finish.

## Step 2: Configure Google SSO metadata in Zuora OneID

To configure Google SSO metadata in Zuora OneID perform the following steps:

1.  Copy the metadata file that you downloaded in Step 1, point 6.
2.  Navigate to Settings in Zuora OneID and click Manage SSO Settings.
3.  Choose the Metadata Type as File.
4.  Paste the metadata content to enable the SSO.

## Step 3: Turn on Zuora OneID SAML app for the users

To enable Zuora OneID SAML app for users perform the following steps:

1.  Log in to the [Google Admin console](http://admin.google.com) as an administrator.
2.  Go to Menu and click [Web and mobile apps](https://admin.google.com/ac/apps/unified)from App.
3.  Select the custom SAML app created for OneID.
4.  Click User Access.
5.  To set the OneID app visible for everyone in your organization, toggle On for everyone and click Save.
6.  (Optional)To set the OneID app visible for an organizational unit, select the organizational unit to your left and change the Service status to On.
7.  Select an access group to turn on this OneID app for users across or within organizational units. For more details, see [Turn on a Service for a group.](https://support.google.com/a/answer/9050643)
8.  Make sure the email addresses used by your users to sign in to the SAML app match those they use to sign in to your Google domain.Note: Changes usually occur quickly but may take up to 24 hours. [Learn more](https://support.google.com/a/answer/7514107).

## Step 4: Check the SSO compatibility of your custom app

To check if your custom app is working with SSO perform the following steps:

1.  Log in to the [Google Admin console](http://admin.google.com) as an administrator.
2.  Go to Menu and click [Web and mobile apps](https://admin.google.com/ac/apps/unified)from App.
3.  Select the custom SAML app created for OneID.
4.  Click Test SAML login from the top left menu bar.Note: Make sure Zuora OneID opens in a separate tab. If it fails, analyze the [SAML app error messages](https://support.google.com/a/answer/6301076) to make any necessary adjustments to your IdP and SP settings, then retry the SAML login
