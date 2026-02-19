---
title: "OneID process overview"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/oneid-process-overview"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:45.304Z"
---

# OneID process overview

Zuora OneID is a centralized user and role management service that streamlines user access and provisioning across Zuora tenants, enhancing security and compliance.

Zuora OneID, hosted on [one.zuora.com](https://one.zuora.com/), is a centralized user and role management service that helps you manage user access and provisioning across Zuora tenants in your organization. You can use Zuora OneID as a single entry point to access different Zuora tenants with one click.

The following key configurations are necessary to set up Zuora OneID:

1.  Contact the support team and provide your[Zuora tenant access through OneID](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/oneid/access_zuora_tenants_with_oneid.dita)to map them to your organization.

2.  Activate your user account using the activation email sent to you. For more details on account activation, see[Activate OneID for your organization](/zuora-platform/security-and-identity/oneid/activate-oneid-for-your-organization)

3.  Contact your IT team to create a custom SAML app for Zuora OneID in your Identity Provider (IdP). Zuora OneID supports both IdP-initiated SSO and Service Provider-initiated SSO

4.  To configure Single Sign-On (SSO) with Zuora OneID, refer to the SSO for OneID documentation. This applies if you are using Okta, Google,JumplCloud, PingOne or Microsoft Entra ID as your Identity Provider (IdP).

5.  After creating the custom SAML app for Zuora OneID in your IdP, copy the metadata URL and paste it into the OneID settings. Refer to Manage single sign-on configurationsfor more information.

6.  Map the federated ID of users for SSO to work.
