---
title: "Add users to OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/add-users-to-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:58.415Z"
---

# Add users to OneID

This guide explains how organization admins can add and activate users in OneID using activation emails.

This article describes how to add users, and activate new users with activation emails in OneID. The adding operation applies only to organization admins.

As an organization admin, you can add both types of users, organization admin and standard user, to OneID. When user accounts are created in OneID, those users can activate their user accounts with activation emails by themselves.

For more information about user types and capabilities in OneID, see OneID users .

## Add a user

To add a user in OneID, take the following steps:

1.  Navigate to Admin Console > Users.
2.  Click Add New User. The New User page opens.
3.  On the New User page, enter the required information in the Basic Information section. Pay attention to the following fields:
    -   User Type: Use this field to specify whether the user is an organization admin or a standard user.
    -   Login Name: Enter the user name in OneID.
    -   Federated ID: Enter the single sign-on (SSO) federated ID of the user. The value must be in an email format, typically the user email of an identity provider (IdP) user. If the SSO SAML Enabled toggle is switched to the on position, this field is required.
    -   SSO Saml Enabled: Switch this toggle to indicate whether to enable SSO SAML for the user.
4.  Select a user group from the User group Preset list in the User Group section.For more information about user groups, see [OneID user groups](/zuora-revenue/advanced-revenue-operations/oneid-overview).
5.  Click Save. Then you can find the new user on the Users page.

## Activate users with activation emails

When the administrator creates a new user in OneID, the new user will receive an activation email in the working email.

Click the activation link in the email or copy and paste the link in the browser to reset the password and activate the user account.

If the activation is successful, that user gains access to the OneID portal ([one.zuora.com](https://one.zuora.com/) ).
