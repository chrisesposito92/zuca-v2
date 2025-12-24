---
title: "Manage users in OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-users-in-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:01.014Z"
---

# Manage users in OneID

This guide explains how organization admins can manage users in OneID, including viewing, editing, deactivating, and reactivating user accounts.

This article describes how to view, edit, deactivate or reactivate users in OneID. These operations apply only to organization admins.

For more information about users and user capabilities in OneID, see [OneID users](/zuora-revenue/advanced-revenue-operations/oneid-overview) .

## Add users

For more information, see [Add users to OneID](/zuora-revenue/advanced-revenue-operations/add-users-to-oneid) .

## View users

To view user information in OneID, take the following steps:

1.  Navigate to Admin Console > Users.All users in your organization are listed in the table, including the basic information of each user, such as first name, last name, work email, and user groups.
2.  If a user belongs to multiple user groups, click the plus icon (for example, `+2`) in the User Group column to view all user groups.
3.  Click the First Name or Last Name of a user to view the detailed page.

## Edit users

To edit user information in OneID, take the following steps:

1.  Navigate to Admin Console > Users.

2.  Click the First Name or Last Name of a user. The detailed page of this user opens.

3.  Update the user's basic information:

    1.  Click Edit in the Basic Information section.

    2.  Update the user information fields based on your requirements.

    3.  Click Save. Then you can find the updated information on the page.

4.  Update the user group information:

    1.  Open the Add User Group window:

        1.  If this user has been added to one or more user groups, click Edit in the User Groups section.

        2.  If this user does not belong to any user group, click + New User Group in the User Groups section.

    2.  In the Add User Group window, add this user to user groups by selecting the checkboxes.

    3.  Optional: Customize user group priorities by dragging and changing the order of selected user groups.

    4.  Verify tenants and user roles information.

        All the tenants and user roles that the current user has are listed in the table on the right side of the window. The user inherits the user roles from the user group with the highest priority (priority 1) by default. If that user group does not contain a user role for a tenant, but a user group with a lower priority does, the user inherits the user role from the lower-priority user group.

        For more information about user groups and priorities, see [OneID user groups](/zuora-revenue/advanced-revenue-operations/oneid-overview/user-groups-in-oneid).

    5.  Click Save. Then you can find the updated user group information on the page.


## Deactivate or reactivate users

A deactivated user cannot log in to OneID, regardless through the OneID portal or an identity provider via single sign-on, until the user account is reactivated in OneID by organization admins.

To deactivate or reactivate a user in OneID, take the following steps:

1.  Navigate to Admin Console > Users.
2.  Click the First Name or Last Name of a user. The detailed page of this user opens.
3.  Click Deactivate User or Reactivate User. The confirmation dialog opens.
4.  Click Confirm in the dialog. Then you can find the status of this user changes to `INACTIVE` or `ACTIVE` on the detailed page.
