---
title: "Commerce roles"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/user-roles/commerce-roles"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:14.343Z"
---

# Commerce roles

This reference describes the user roles and permissions associated with the Commerce role.

## Commerce user roles

Your Zuora tenant has two Commerce user roles by default:

-   Zuora Commerce Standard User

-   Zuora Commerce Admin User


Users in the Zuora Commerce Standard User role can do the following things:

-   Configure 360 Sync credentials.

-   Start and cancel 360 Sync sessions between Zuora and Salesforce.

-   View Sync History.


Users in the Zuora Commerce Admin User role can do the following things:

-   Configure 360 Sync credentials.

-   Start and cancel 360 Sync sessions between Zuora and Salesforce.

-   View Sync History.

-   Run 360 Sync Clean Up.


By default, all users initially receive the Zuora Commerce Admin User role. You cannot edit the system default roles, but you can create or edit custom roles. You can also assign users different roles, including system default roles or custom roles.

An error message returns if a user tries to perform an action for which the user does not have permission. This applies to both the Zuora UI users and the Zuora API users.

## Commerce permissions

The following table describes the Commerce user permissions, and shows whether each permission is enabled for Zuora Commerce Standard Users.

| Area | Permission | Description | Granted to standard user? |
| --- | --- | --- | --- |
| 360 Sync | Manage 360 Sync | Modify Salesforce credentials.Run 360 Sync between Zuora and Salesforce.Cancel 360 Sync sessions.View Sync History. | Yes |
| 360 Sync | Allow Clean Up | Run 360 Sync Cleanups of Accounts between Zuora and Salesforce.Run 360 Sync Cleanups of Product Catalog. | No |
