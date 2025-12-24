---
title: "Obtain Azure AD IDP metadata URL"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid/set-up-sso-with-azure-active-directory-using-saml-in-oneid/obtain-azure-ad-idp-metadata-url"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:37.950Z"
---

# Obtain Azure AD IDP metadata URL

Learn how to obtain Azure AD IDP metadata URL

To retrieve the identity provider metadata from Azure AD, provide the metadata URL specific to Azure AD to the Zuora OneID application.

1.  Log in to Azure AD and navigate to the Enterprise Applications tab.
2.  Click the application added for Zuora OneID SSO.
3.  Click the Single Sign On tab.
4.  In the SAML Signing Certificates section, copy the App Federation Metadata URL.
5.  Navigate to Settings in Zuora OneID and click Manage SSO Settings.
6.  Paste the App Federation Metadata URL to enable the SSO.
