---
title: "Obtain Microsoft Entra ID IDP metadata URL"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-microsoft-entra-id-using-saml-in-oneid/obtain-microsoft-entra-id-idp-metadata-url"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:15.238Z"
---

# Obtain Microsoft Entra ID IDP metadata URL

Learn how to obtain and use the Microsoft Entra ID IDP metadata URL for configuring SSO in Zuora OneID.

To retrieve the identity provider metadata from Microsoft Entra ID, provide the metadata URL specific to Microsoft Entra ID to the Zuora OneID application.

1.  Log in to Microsoft Entra ID and navigate to the Enterprise Applications tab.
2.  Click the application added for Zuora OneID SSO.
3.  Click the Single Sign On tab.
4.  In the SAML Signing Certificates section, copy the App Federation Metadata URL.
5.  Navigate to Settings in Zuora OneID and click Manage SSO Settings.
6.  Paste the App Federation Metadata URL to enable the SSO.
