---
title: "Obtain SAML federation metadata from AD FS"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/configure-single-sign-on-for-zuora/configure-active-directory-federation-services-for-sso-saml/obtain-saml-federation-metadata-from-ad-fs"
product: "zuora-platform"
scraped_at: "2026-02-20T17:40:10.892Z"
---

# Obtain SAML federation metadata from AD FS

Learn how to obtain SAML federation metadata from AD FS.

1.  In AD FS Management Console, navigate to to find your federation metadata URL.
2.  Browse to the metadata URL found in Step1.
3.  Export the metadata file. This file includes your SSO setting information such as the SSO server, protocols supported, and the public key.

    Note: If there is any change in your AD FS settings, you must re-generate the metadata file and submit the new metadata file to Zuora. Wait for a notification from Zuora before allowing your users to log in to Zuora via SSO.
