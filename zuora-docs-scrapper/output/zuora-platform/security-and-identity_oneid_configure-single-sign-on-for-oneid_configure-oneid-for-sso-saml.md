---
title: "Configure OneID for SSO SAML"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/configure-single-sign-on-for-oneid/configure-oneid-for-sso-saml"
product: "zuora-platform"
scraped_at: "2026-02-20T17:42:01.382Z"
---

# Configure OneID for SSO SAML

Learn how to configure OneID for SSO SAML, enabling seamless user authentication by mapping IdP users to OneID users and managing SAML metadata.

Enable SSO SAML for OneID users

In the SSO SAML solution, a user in your IdP should map to a user in OneID. When logging in to OneID via SSO SAML, your IdP redirects you to the OneID portal, and keeps you logged in as the corresponding OneID user. You need not to enter your credentials in OneID again.

To enable SSO SAML for a OneID user and link it to an IdP user, Add a user to OneID or Edit a user in OneID as usual with the following information:

-   Federated ID: Specify the SSO federated ID of the user. The value must be in an email format, typically the user email of the corresponding IdP user.
-   SSO Saml Enabled: Switch this toggle to the on position to enable SSO SAML.

Submit IdP’s SAML metadata URL to OneID

IdPs and SPs use SAML metadata to exchange interaction information. The metadata is in XML format and secured.

To enable SSO SAML for your IdP in OneID, you must submit your IdP’s SAML metadata URL to OneID. For more information about how to submit the URL to OneID, see Manage SSO SAML metadata URL.

Enable SSO for large user groups

This section details the procedure for enabling Single Sign-On (SSO) for a significant number of users in your organization. This method is particularly advantageous when your company has integrated with OneID, as it allows you to enable SSO for a large number of users efficiently, without the need for manual updates to each user’s settings.

As a OneID administrator, follow these steps to enable Single Sign-On (SSO) for all users with a specific email domain:

1.  Log in to the Zuora OneID application as an administrator.
2.  Navigate to your user profile on the right and select Settings > Manage SSO Settings.
3.  Click Edit and enter the desired email domain in the Single Sign-On Domain field. For instance, for Zuora the email domain that needs to be provided will be zuora.com
4.  Click Enable SSO for all Users and then click Save.

Now, all users with the email domain specified in the Single Sign-On Domain will have SSO enabled. The federated ID will be automatically copied from the user's work email.
