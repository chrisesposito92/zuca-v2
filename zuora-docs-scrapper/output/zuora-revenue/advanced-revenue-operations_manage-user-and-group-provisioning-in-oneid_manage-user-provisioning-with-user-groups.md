---
title: "Manage user provisioning with user groups"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-user-and-group-provisioning-in-oneid/manage-user-provisioning-with-user-groups"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:40:36.762Z"
---

# Manage user provisioning with user groups

This guide explains how to manage user provisioning by adding, viewing, and editing user groups in OneID, specifically for organization admins.

This article describes how to add, view, or edit user groups in OneID. These operations apply only to organization admins.

A user group contains a group of Zuora tenants and the corresponding OneID user roles. For more information about user groups and priorities, see [OneID user groups](/zuora-revenue/advanced-revenue-operations/oneid-overview).

## Add user groups

To add a user group in OneID, take the following steps:

1.  Navigate to Admin Console > Groups.

2.  Click Add New Group. The New User Group page opens.

3.  Specify the basic information of the user group:

    1.  User Group Name: the name of the user group.

    2.  Description: optionally, the description of the user group.

4.  Click Next. The Edit User Group page opens.

5.  Define the permission and user role information for each tenant in the Set Tenant Permissions and Roles section:

    1.  Switch the toggle in the Permission column to indicate whether to add permissions for this tenant to the current user group.

    2.  If the toggle is switched to On, select a user role from the dropdown list in the User Role column.

    3.  Repeat steps a and b for each tenant.

6.  Optional: Add users to this user group:

    1.  Click the plus icon in the Users section. The Select the Available Users window opens.

    2.  Add users to the current user group by selecting the checkboxes.

    3.  Click Add Users. The selected users are listed in the Users section.


## View user groups

To view user group information in OneID, take the following steps:

1.  Navigate to Admin Console > Groups.All user groups in your organization are listed in the table, including the group name, tenant, and user role information of each user group.
2.  If a user group contains more than one tenant, click the icon at the beginning of a row to show all Zuora tenants and corresponding user roles in this group.

## Edit user groups

To edit a user group in OneID, take the following steps:

1.  Navigate to Admin Console > Groups.

2.  Click the pencil icon to the right of a user group. The Edit User Group page opens.

3.  Update the basic information:

    1.  Click Edit to make the User Group Name and Description fields editable.

    2.  Enter a new user group name and/or a new description.

    3.  Click Save to confirm the changes.

4.  Define the permission and user role information for each tenant in the Set Tenant Permissions and Roles section:

    1.  Switch the toggle in the Permission column to indicate whether to add permissions for this tenant to the current user group.

    2.  If the toggle is switched to On, select a user role from the dropdown list in the User Role column.

    3.  Repeat steps a and b for each tenant.

    4.  Click Save.

5.  Add users to this user group:

    1.  Click the plus icon in the Users section. The Select the Available Users window opens.

    2.  Add users to the current user group by selecting the checkboxes.

    3.  Click Add Users. The selected users are listed in the Users section.


## Add users to user groups

There is a many-to-many relationship between users and user groups. A user group can contain multiple users, and a user can belong to multiple user groups.

Here are some ways to add users to user groups in OneID:

-   Add a user to a user group when creating a user.
-   Add a user to multiple user groups when editing a user.
-   Add multiple users to a user group when creating or editing a user group.

The following table shows the operations and details of these approaches:

| Operation | How many users can be managed? | How many user groups can be managed? |
| --- | --- | --- |
| Adding a user | One | One |
| Editing a user | One | Multiple |
| Adding a user group | Multiple | One |
| Editing a user group | Multiple | One |

For example, when editing an existing user in OneID, you can add the current user to multiple user groups.
