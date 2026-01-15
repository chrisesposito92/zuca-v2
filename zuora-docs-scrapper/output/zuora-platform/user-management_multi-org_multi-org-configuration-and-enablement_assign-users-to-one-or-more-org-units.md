---
title: "Assign users to one or more Org units"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/assign-users-to-one-or-more-org-units"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:12.418Z"
---

# Assign users to one or more Org units

Learn how to assign users to one or more Org Units within an organization, including understanding the differences between Beta and EA behaviors.\`

\- This step is mandatory since the associated org unit must be specified during user creation.

There is a change in the behavior between the Beta and EA user creation and the associated visibility the user has once said user is active.

Beta behavior

-   Users can be assigned to one and only one Org Unit (may it be a root, branch or leaf Org Unit) by the Org Security/IT Admin
-   By default, users added to the root-level / parent organization or at the branch level will automatically inherit access controls to all the org units that are children of that root or branch in the Multi-Org hierarchy.

EA Behavior – Compared to the Beta, the following changes apply

Users can be assigned to one or more Org Units by the Org Security/IT Admin and there is no default inheritance. That is, a user can have disparate access in the following ways:

-   A parent and one or more leaf Org Units (e.g. Acme Corp. & France Org Unit -

-   A branch and some leaf Org Units (e.g. Western Europe, France Org Unit & Germany Org Unit)
-   A parent, a branch, and one leaf (e.g. Acme Corp., Central Europe Org Unit & Austria Org Unit)

Once you have created the org hierarchy, you can assign users to one or more Org Units which includes the root organization.

Note: Your Org IT Admin should normally perform this operation. As the Org Security/IT Admin, you can work jointly with the security and operation teams to determine the list of users that should be given access to the various org units, including the root org or other branch or leaf-level org.

1.  Click your username at the top right and navigate to Administration > Manage Users.
2.  Click Add Single User.
3.  On the new user creation page, fill in the basic information along with the fields mentioned below:

    -   Company (For Multi-Org enabled accounts): From the dropdown, select all the preferred org units to which you want to add the user. You can select multiple org units here.
    -   Zuora Platform Role: You can select a Zuora Platform Role and other roles for the user. You define and manage user roles on the [https://knowledgecenter.zuora.com/Zuora\_Platform/System\_Management/Administrator\_Settings/User\_Roles](https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/User_Roles) settings page.

    See for more information about the fields that you can set when creating a user.

4.  Click Save.
    The user has been added to the list of users with Pending Activation status.
