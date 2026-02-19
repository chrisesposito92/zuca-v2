---
title: "Edit Users in OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/users-in-oneid/edit-users-in-oneid"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:45.240Z"
---

# Edit Users in OneID

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
    4.  Verify tenants and user roles information. All the tenants and user roles that the current user has are listed in the table on the right side of the window. The user inherits the user roles from the user group with the highest priority (priority 1) by default. If that user group does not contain a user role for a tenant, but a user group with a lower priority does, the user inherits the user role from the lower-priority user group. For more information about user groups and priorities, see [OneID user groups](/zuora-platform/security-and-identity/oneid/user-groups-in-oneid).
    5.  Multi-org support for OneID users: To change the organizational units of a user as an administrator:

        1.  Navigate to your user profile > Administration > Manage Users.

        2.  Select the user and click on Edit to enable the multi-org feature. For more information, see [Multi-OrgNo Content found for /db/organizations/zuora/repositories/prod-sitemap/\_\_sandbox/documents/\_MT\_Content\_Migration/Zuora\_Platform/User\_Management/Multi\_Org/Multi\_Org\_Overview\_and\_Basic\_Setup/01\_Overview\_of\_Multi-Org/overview\_of\_multi-org.dita](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/User_Management/Multi_Org/Multi_Org_Overview_and_Basic_Setup/01_Overview_of_Multi-Org/overview_of_multi-org.dita).


5.  Click Save . Then you can find the updated user group information on the page.
