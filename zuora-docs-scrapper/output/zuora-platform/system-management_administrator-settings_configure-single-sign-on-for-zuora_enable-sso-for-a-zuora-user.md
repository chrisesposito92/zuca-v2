---
title: "Enable SSO for a Zuora user"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/configure-single-sign-on-for-zuora/enable-sso-for-a-zuora-user"
product: "zuora-platform"
scraped_at: "2025-12-24T05:02:25.218Z"
---

# Enable SSO for a Zuora user

Learn how to enable SSO for a Zuora user.

Before you enable SSO for a user, that user must have a user account in Zuora. If this is a new user, [create this user](/zuora-platform/system-management/administrator-settings/manage-users/add-a-user) in Zuora first.

1.  Log into the Zuora application as a tenant administrator, and navigate to .
2.  In the user list, click the user for whom you want to enable SSO. The user details page opens.
3.  In the Basic Information section, select the SSO SAML Enabled field.
4.  In the Federated ID field, enter the unique SSO federated ID of this user. The federated ID must be in an email format, for example, `username@domain.com`.
5.  Click Save .

New Zuora users for whom SSO is enabled do not receive the activation email from Zuora. The user is automatically activated upon the first successful login to Zuora. If SSO needs to be disabled for this user, the tenant administrator needs to use the Resend Activation Email feature to convert this user to a local Zuora user.
