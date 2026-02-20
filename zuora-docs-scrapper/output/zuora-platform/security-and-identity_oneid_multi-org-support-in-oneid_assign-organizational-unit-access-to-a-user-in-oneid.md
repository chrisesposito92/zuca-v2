---
title: "Assign Organizational Unit access to a user in OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/multi-org-support-in-oneid/assign-organizational-unit-access-to-a-user-in-oneid"
product: "zuora-platform"
scraped_at: "2026-02-20T17:44:37.643Z"
---

# Assign Organizational Unit access to a user in OneID

This task guides administrators on assigning organizational unit (OU) access to users in a multi-org tenant using the OneID interface.

-   Ensure that the Multi-Org feature is activated for your billing tenant. For more detailed information, see[Overview of Multi-Org](/zuora-platform/user-management/multi-org/overview-of-multi-org).

-   Verify that the organizational unit hierarchy already exists at the billing level before assigning users to OUs in OneID.


This task outlines how administrators can assign organizational unit (OU) access to users within a multi-org tenant directly through the OneID interface:

1.  Navigate to Admin Console > Users .
2.  Click the First Name or Last Name of a user. The detailed page of this user opens.
3.  In the User provisioning section:
    1.  Click Edit . The Manage user provisioning page appears.
    2.  From the User Role drop-down list, select a role for the tenant.
    3.  From the Organizational Unit drop-down list, select the organizational units for the tenant.
4.  Click Save.

All organizational unit (OU) assignment activities are tracked in the audit trail and included in user management reports. You can download these reports to review details of OU assignments. You can also perform audits directly through the audit trail, which records specific changes such as new OUs assigned to users within a tenant. For example, if you add five OUs where none previously existed, the audit trail displays those changes for easy tracking.
