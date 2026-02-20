---
title: "Manage user roles in OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-user-roles-in-oneid"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:21:09.542Z"
---

# Manage user roles in OneID

This guide explains how to manage user roles in OneID, including adding, editing, importing, and deleting roles for organization admins.

This article describes how to add, edit, import, or delete user roles in OneID. These operations apply only to organization admins.

A user role in OneID represents a user identity with permissions to Zuora products in a specific Zuora tenant. For more information about user roles in OneID, tenant user roles, and permissions, see [OneID user roles](/zuora-revenue/advanced-revenue-operations/get-started-with-oneid).

## Add user roles

To add user role in oneID, take the following steps:

1.  Navigate to Admin Console > User Roles.
2.  From the View Role List list, select a tenant for the new user role.All the Zuora tenants in your organization are listed here.
3.  Click Add New Role. A settings window opens.
4.  In the settings window, specify the name and description of the new user role.
5.  Click Save. You can find the new user role on the User Roles page.

## Edit user roles

1.  Navigate to Admin Console > User Roles.
2.  Click the pencil icon to the right of a user role. The settings window opens.
3.  In the settings window, update the user role information, such as the name, description, or permissions, as needed.
4.  Click Save. Then you can find the changes on the User Roles page.

## Import user roles

OneID allows you to import user roles from a Zuora tenant to OneID. To import Zuora tenant user roles to OneID, take the following steps:

1.  Navigate to Admin Console > User Roles.

2.  From the View Role List list, select a tenant that the imported user roles belong to. All the Zuora tenants of your organization are listed here.

3.  Click Import User Role. The Import User Roles window opens.

4.  In the window, select the user roles you want to import. Each row in the table represents a possible OneID user role with tenant user roles of each Zuora product.

    1.  Select the checkbox to the left of a user role.

    2.  Optional: Rename the user role:

        1.  Click the pencil icon edit.png to the right of this user role to make the Role Name column editable.

        2.  Enter a new name in the Role Name column. Click the disk icon save.png to the right of this user role to confirm the change.

        3.  Repeat steps a and b as needed.

5.  Click Import. You can find the imported user roles on the User Roles page.

## Delete user roles

To delete a user role in OneID, take the following steps:

1.  Navigate to Admin Console > User Roles.
2.  From the View Role List list, select a tenant that you want to delete a user role from. All the Zuora tenants in your organization are listed here.
3.  Click the trash can icon to the right of the user role you want to delete. The user role now gets removed from the User Roles page.
