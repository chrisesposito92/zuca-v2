---
title: "Manage single sign-on configurations"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/oneid-settings/manage-single-sign-on-configurations"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:21:10.340Z"
---

# Manage single sign-on configurations

This article describes how to manage your organization's single sign-on (SSO) configurations in OneID. For more information about SSO in OneID, see [Configure single sign-on for OneID](/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid)

## Manage SSO SAML metadata URL

In the SSO SAML solution, identity providers (IdPs) and service providers (SPs) use SAML metadata to exchange interaction information. The metadata is in XML format and secured. To enable SSO SAML for your IdP in OneID, you must submit your IdP's SAML metadata URL to OneID.

Obtaining the SAML metadata URL depends on which IdP you choose. For more information about how to get the SAML metadata URL of Okta, see [Configure Okta for SSO SAML with OneID](/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid/setup-sso-with-okta-using-saml-in-oneid).

To submit your IdP's SSO SAML metadata URL to OneID, take the following steps:

1.  Click your avatar in the upper right of the OneID portal and then click Settings. The Settings page opens.
2.  Click Manage SSO settings. The SSO Configuration page opens.
3.  Specify the SSO SAML metadata URL in the Metadata URL field.You can get the SAML metadata URL from your IdP.
4.  Click Save.

To remove the SSO SAML metadata URL in OneID, take the following steps:

1.  Click your avatar in the upper right of the OneID portal and then click Settings. The Settings page opens.
2.  Click Manage SSO settings. The SSO Configuration page opens.
3.  Click Remove Configuration. You can find the data in the Metadata URL field is deleted on the page.
