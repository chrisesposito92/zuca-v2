---
title: "Turn On Zuora OneID SAML app for the users"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-google-using-saml-in-oneid/turn-on-zuora-oneid-saml-app-for-the-users"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:00.219Z"
---

# Turn On Zuora OneID SAML app for the users

Enable the Zuora OneID SAML app for users by following a series of steps in the Google Admin console.

To enable Zuora OneID SAML app for users perform the following steps:

1.  Log in to the [Google Admin console](http://admin.google.com) as an administrator.
2.  Go to Menu and click Web and mobile apps from App . Fort more detailed information, see [Web and mobile apps](https://admin.google.com/ac/apps/unified).
3.  Select the custom SAML app created for OneID.
4.  Click User Access.
5.  To set the OneID app visible for everyone in your organization, toggle On for everyone and click Save .
6.  (Optional)To set the OneID app visible for an organizational unit, select the organizational unit to your left and change the Service status to On .
7.  Select an access group to turn on this OneID app for users across or within organizational units. For more details, see [Turn on a Service for a group](https://support.google.com/a/answer/9050643).
8.  Make sure the email addresses used by your users to sign in to the SAML app match those they use to sign in to your Google domain. Note: Changes usually occur quickly but may take up to 24 hours. [Learn more](https://support.google.com/a/answer/7514107).
