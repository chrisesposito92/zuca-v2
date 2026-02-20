---
title: "Manage users"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-users"
product: "zuora-platform"
scraped_at: "2026-02-20T17:40:28.806Z"
---

# Manage users

Administrators can create and edit user accounts, reset passwords, activate users, and deactivate users.

Administrators can manage Zuora user accounts in your tenant. An inactive user cannot access your Zuora tenant.

For the specific steps to create an API role, an API user, and an OAuth Client for an API user, see [Create an API user](/zuora-platform/security-and-identity/administrator-settings/manage-users/create-an-api-user/create-an-api-user-process-flow).

## Use the last login date to manage user accounts

The table of users on the All Users page includes a Last Login Attempt column, which gives you better visibility into user activity in your Zuora tenant.

Zuora recommends performing a regular review of all user accounts in your Zuora tenant. Deactivate user accounts that no longer need access to your tenant. Administrators of Zuora can use this page to review all user accounts that have been provisioned. Rows having a Status of Active represent users who currently have access to your tenant.

From this page, you can identify and deactivate any user accounts that are no longer needed. Use the Last Login Attempt column to this page. In general, users who have not logged into your Zuora tenant for a long time often represent good candidates for deactivation. You should also deactivate users who have left your company, or who have transitioned to other roles and no longer need to access your Zuora tenant.
