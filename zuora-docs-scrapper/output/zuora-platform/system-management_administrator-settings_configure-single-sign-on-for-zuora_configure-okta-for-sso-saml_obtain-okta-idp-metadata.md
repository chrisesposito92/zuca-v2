---
title: "Obtain Okta IDP metadata"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/configure-single-sign-on-for-zuora/configure-okta-for-sso-saml/obtain-okta-idp-metadata"
product: "zuora-platform"
scraped_at: "2025-12-24T05:02:45.864Z"
---

# Obtain Okta IDP metadata

Learn how to obtain Okta IDP metadata.

As an SSO provisioning step, you need to provide the Okta identity provider metadata to Zuora. This metadata is specific to your Okta account.

If there is any change in your Okta settings that results in your metadata updates, you must re-submit the new metadata file to Zuora. Wait for a notification from Zuora before allowing your users to log in to Zuora via SSO.

1.  Log in to Okta and go to the Applications tab.
2.  Click the application that you added for Zuora SSO.
3.  Click the Sign On tab.
4.  Click Identity Provider metadata to download the Okta metadata file.
5.  Provide the downloaded IDP metadata to Zuora.
