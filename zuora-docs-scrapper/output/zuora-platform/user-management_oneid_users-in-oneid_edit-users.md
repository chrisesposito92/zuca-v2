---
title: "Edit Users"
url: "https://docs.zuora.com/en/zuora-platform/user-management/oneid/users-in-oneid/edit-users"
product: "zuora-platform"
scraped_at: "2025-12-24T05:15:30.088Z"
---

# Edit Users

Learn how to edit user information in OneID.

To edit user information in OneID, take the following steps:

1.  Navigate to Admin Console > Users .
2.  Click the First Name or Last Name of a user. The detailed page of this user opens.
3.  Update the user’s basic information:
    1.  Click Edit in the Basic Information section.
    2.  Update the user information fields based on your requirements.
    3.  Click Save . Then you can find the updated information on the page.
4.  Update the user group information:
    1.  Open the Add User Group window:

        -   If this user has been added to one or more user groups, click Edit in the User Groups section.

        -   If this user does not belong to any user group, click \+ New User Group in the User Groups section.


    2.  In the Add User Group window, add this user to user groups by selecting the checkboxes.
    3.  Optional: Customize user group priorities by dragging and changing the order of selected user groups.
    4.  Verify tenants and user roles information. All the tenants and user roles that the current user has are listed in the table on the right side of the window. The user inherits the user roles from the user group with the highest priority (priority 1) by default. If that user group does not contain a user role for a tenant, but a user group with a lower priority does, the user inherits the user role from the lower-priority user group. For more information about user groups and priorities, see OneID user groups .
    5.  Multi-org support for OneID users: To change the organizational units of a user as an administrator:

        1.  Navigate to your user profile > Administration > Manage Users.

        2.  Select the user and click on Edit to enable the multi-org feature. For more information, see Multi-Org .


5.  Click Save . Then you can find the updated user group information on the page.
