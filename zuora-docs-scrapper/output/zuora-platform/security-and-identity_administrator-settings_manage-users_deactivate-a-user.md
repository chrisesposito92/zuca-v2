---
title: "Deactivate a user"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-users/deactivate-a-user"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:00.005Z"
---

# Deactivate a user

Learn how to deactivate users

Zuora recommends that you deactivate any user that is no longer associated with your organization, or any user that no longer needs to access your tenant. You will not lose historical information by deactivating a user account.

Zuora recommends that you explicitly cancel all the scheduled jobs initiated by the user that you are deactivating and recreate these jobs. Otherwise, Zuora transfers all the scheduled jobs initiated by the deactivated user to the earliest active user in the tenant. However, this active user might not have the required permissions, and the scheduled jobs might fail.

1.  Click your username at the top right, and navigate to .
2.  Click the user's First Name, Last Name, or User Name. Zuora displays the user's basic information.
3.  Click Deactivate User.
4.  Confirm the user deactivation:

    -   If your tenant does not have the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature enabled, click Yes in the pop-up confirmation dialog.

    -   If your tenant has the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature enabled and the selected account is the owner of any entity connections, click Yes in the pop-up confirmation dialog. Then select a new owner for the entity connection from the dropdown list and click Save And Deactivate The User.



If you accidentally deactivated a user, or need to restore the user at a later time, you can revisit this page and click the Reactivate user button.
