---
title: "Provision SSO for your tenant"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/provision-sso-for-your-tenant"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:26.922Z"
---

# Provision SSO for your tenant

Learn how to enable SSO for your Zuora tenant.

1.  Submit a request at [Zuora Global Support](https://support.zuora.com/) to provide your Zuora contact with the provider metadata and logout URL. The logout URL is the URL to which your users are re-directed upon logging out of the Zuora application. The logout URL must conform to the format: `scheme://domain:port/path?query_string#fragment_id`.
    If you use AD FS as your identity provider, the logout URL is typically the AD FS login page at `https://adfs_domain_name/adfs/ls/IdpInitiatedSignon.aspx`.

2.  Download [Zuora service provider metadata](/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora#concept-ac-824__saml-federation-metadata) from:

    -   US Cloud 1 Production: `https://na.zuora.com/apps/saml/metadata`

    -   US Cloud 1 API Sandbox: `https://sandbox.na.zuora.com/apps/saml/metadata`

    -   US Cloud 2 Production: `https://www.zuora.com/apps/saml/metadata`

    -   US Cloud 2 API Sandbox: `https://apisandbox.zuora.com/apps/saml/metadata`

    -   Performance Test: `https://pt1.zuora.com/apps/saml/metadata`

    -   EU Production: `https://eu.zuora.com/apps/saml/metadata`

    -   EU Sandbox: `https://sandbox.eu.zuora.com/apps/saml/metadata`

    -   Central Sandbox US: `https://test.zuora.com/apps/saml/metadata`

    -   Central Sandbox EU: `https://test.eu.zuora.com/apps/saml/metadata`

    -   APAC Central Sandbox: `https://test.ap.zuora.com/apps/saml/metadata`

    -   APAC Cloud Production: `https://ap.zuora.com/apps/saml/metadata`


3.  Add Zuora as a service provider to your identity provider, using the metadata that you downloaded from Zuora.

    -   If you are using AD FS as your identity provider, see [Add Zuora service provider to AD FS](/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-active-directory-federation-services-for-sso-saml) for the steps to add Zuora as a trusted relying party.

    -   If you are using Okta as your identity provider, see [Add Zuora service provider to Okta](/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-okta-for-sso-saml) for the steps to add Zuora as a SAML SSO application.


4.  Retrieve your identity provider metadata and send it to your Zuora contact. The identify provider federation metadata must be fully compliant with the [Metadata for the OASIS Security Assertion Markup Language (SAML) V2.0 specification](http://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).

    -   For information about how to locate and retrieve provider metadata from AD FS, see [Obtain SAML Federation Metadata from AD FS](/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-active-directory-federation-services-for-sso-saml/obtain-saml-federation-metadata-from-ad-fs).

    -   For information about how to locate and retrieve provider metadata from Okta, see [Obtain SAML Federation Metadata from Okta](/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-okta-for-sso-saml/obtain-okta-idp-metadata).


5.  Your Zuora contact uploads your identity provider metadata to the Zuora application environment.
6.  Your Zuora contact notifies you of a successful SSO tenant enablement.
7.  Configure your Zuora users to use SSO. See [Enable SSO for a Zuora user](/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/enable-sso-for-a-zuora-user) for more information.
