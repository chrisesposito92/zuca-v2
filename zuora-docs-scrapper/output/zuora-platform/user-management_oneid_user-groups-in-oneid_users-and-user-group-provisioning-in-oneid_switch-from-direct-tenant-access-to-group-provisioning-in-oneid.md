---
title: "Switch from Direct Tenant Access to Group Provisioning in OneID"
url: "https://docs.zuora.com/en/zuora-platform/user-management/oneid/user-groups-in-oneid/users-and-user-group-provisioning-in-oneid/switch-from-direct-tenant-access-to-group-provisioning-in-oneid"
product: "zuora-platform"
scraped_at: "2025-12-24T05:15:54.971Z"
---

# Switch from Direct Tenant Access to Group Provisioning in OneID

Learn how to switch from Direct Tenant Access to Group Provisioning in OneID by following specific steps for user-level and organization-wide transitions.

Switching from Direct Tenant Access to Group Provisioning in OneID: Direct Tenant Access is automatically enabled when a user account is created or imported in OneID.

Switching at User Level: To transition specific user accounts from Direct Tenant Access to Group Provisioning in OneID, follow these steps:

Enabling Group Provisioning for All Users: To implement Group Provisioning universally across your organization in OneID, adhere to the following guidelines:

1.  Navigate to the user details page for the specific user.
2.  Disable the Direct Tenant Access toggle for the user.
3.  Go to the Settings page.
4.  Choose Security Policies.
5.  Enable the toggle for Group Provisioning for all Users.

Managing Mixed Access Types: Administer certain users through Direct Tenant Access while others through Group Provisioning.

Handling User Import with Group Provisioning: If Group Provisioning is enabled in your OneID user account and your local user account is imported, your access will be suspended until assigned to the correct user groups with the same tenant access. When assigning the OneID user to User Groups, duplication of user creation in the local tenant is prevented.

Refer to the community table talk for more information about user groups and how to configure them in OneID.
