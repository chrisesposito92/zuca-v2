---
title: "Add a user"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/users-in-oneid/add-a-user"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:46.318Z"
---

# Add a user

Learn how to add a new user in OneID by navigating through the Admin Console, entering user details, and saving the information.

As an organization admin, you can add both types of users, organization admin and standard user, to OneID. When user accounts are created in OneID, those users can activate their user accounts with activation emails by themselves.

To add a user in OneID, take the following steps:

1.  Navigate to Admin Console > Users .
2.  Click Add New User . The New User page opens.
3.  On the New User page, enter the required information in the Basic Information section. Pay attention to the following fields:

    -   User Type : Use this field to specify whether the user is an organization admin or a standard user.

    -   First Name: Enter a first name for the user.

    -   Last Name: Enter a last name for the user.

    -   Login Name : Enter the user name in OneID.

    -   Work Email: Enter a primary work email address. This email address must adhere to a specific format defined by the following regular expression (regex) pattern: `^(?!.\.\.)[a-zA-Z0-9_+&_-](?:.[a-zA-Z0-9_+&_-])@[a-zA-Z0-9-](.[a-zA-Z]{2,})$` This pattern ensures the entered email address conforms to a specific, validated structure accepted by the system. If the entered email address does not match this pattern, an "Invalid Email Address" error will be displayed at the top of the screen.

    -   Federated ID : Enter the single sign-on (SSO) federated ID of the user. The value must be in an email format, typically the user email of an identity provider (IdP) user. If the SSO SAML Enabled toggle is switched to the on position, this field is required.

    -   SSO Saml Enabled : Switch this toggle to indicate whether to enable SSO SAML for the user.


4.  Select a user group from the User group Preset list in the User Group section. For more information about user groups, see OneID user groups .
5.  Click Save . Then you can find the new user on the Users page.

The newly created user will be available after the owner activates the user account with the activation email . For more detailed information, see [Activate users with activation emails](/zuora-platform/security-and-identity/oneid/users-in-oneid/add-a-user/activate-users-with-activation-emails)

It is mandatory to migrate existing user accounts. If you already have an account in the local tenant, please refer to the guidelines here to import or map your existing local user account to the global OneID user account.
