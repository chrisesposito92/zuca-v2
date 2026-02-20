---
title: "Finance roles"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/user-roles/finance-roles"
product: "zuora-platform"
scraped_at: "2026-02-20T17:40:31.992Z"
---

# Finance roles

This reference lists the user roles and permissions associated with the Finance role.

See [User roles](/zuora-platform/security-and-identity/administrator-settings/user-roles) for general information about user roles.

## Finance user roles

Your Zuora tenant has two Finance roles by default.

-   Zuora Finance Administrator : Users with this role is given access to all Finance functionality and can manage all Finance processes.

-   Zuora Finance Standard User : Users with this role have more limited access. They cannot manage the close process, or delete or reopen accounting periods.


You can also create custom Finance user roles as needed by clicking Add new role .

## Finance permissions

The following table describes the Finance user permissions and shows whether each permission is enabled for Zuora Finance Standard Users.

| Area | Permission | Description | Granted to standard user? |
| --- | --- | --- | --- |
| Finance | Finance Access | Allows users to access Finance. | Yes |
| Accounting Periods | Create Accounting Period | Allows users to create and edit accounting periods . | Yes |
| Delete Accounting Period | Allows users to delete accounting periods . | No |  |
| Manage Close Process | Allows users to change the status of accounting periods to Pending Close and close accounting periods. See Accounting Periods . | No |  |
| Reopen Accounting Period | Allows users to reopen accounting periods . | No |  |
| Run Trial Balance | Allows users to run trial balances . | Yes |  |
| Chart of Accounts | Create Accounting Code | Allows users to create accounting codes . | Yes |
| Delete Unused Accounting Code | Allows users to delete accounting codes . | Yes |  |
| Manage Accounting Code | Allows users to create, edit, delete, activate, and deactivate accounting codes. See Set Up Chart of Accounts . | Yes |  |
| Revenue Recognition Rules | Create Revenue Recognition Rule | Allows users to create revenue recognition rules . | Yes |
| Manage Revenue Recognition Rule | Allows users to create, edit, delete, activate, and deactivate revenue recognition rules. See Manage a Revenue Rule . | Yes |  |
| Revenue Schedules | Create Custom Revenue Schedule | Allows users to manually create revenue schedules . | Yes |
| Change Revenue Distribution | Allows users to manually distribute revenue . | Yes |  |
| Delete Custom Revenue Schedule | Allows users to delete revenue schedules that use a custom unlimited recognition rule. | Yes |  |
| Segments | Create Segment | Allows users to create segments . | Yes |
| Manage Segment | Allows users to create, edit, and delete segments. See Segments . | Yes |  |
| GL Segmentation Rules | Create GL Segmentation Rule | Allows users to create GL segmentation rules . | Yes |
| Manage GL Segmentation Rule | Allows users to create, edit, delete, activate, and deactivate GL segmentation rules. See GL Segmentation Rules . | Yes |  |
| Journal Runs | Create Journal Run | Allows users to create journal runs . | Yes |
| Cancel Journal Run | Allows users to cancel journal runs . | Yes |  |
| Delete Cancelled Journal Run | Allows users to delete journal runs that have been canceled. | Yes |  |
| Journal Entries | Create Journal Entry | Allows users to manually create journal entries using the REST API. | Yes |
| Edit Journal Entry | Allows users to edit journal entries . | Yes |  |
| Cancel Journal Entry | Allows users to cancel journal entries . | Yes |  |
| Delete Cancelled Journal Entry | Allows users to delete journal entries that have been canceled. | Yes |  |
| Override Transferred to Accounting | Allows users to change Transferred to Accounting of a journal entry from Yes to a different value. | No |  |
| Admin | Manage Finance Settings | Allows users to access Finance Settings. | Yes |
