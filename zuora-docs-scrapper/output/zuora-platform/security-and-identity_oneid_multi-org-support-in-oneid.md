---
title: "Multi-Org Support in OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/multi-org-support-in-oneid"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:00.929Z"
---

# Multi-Org Support in OneID

The Multi-Org support in OneID allows administrators to manage users and organizational units from a unified interface.

The Multi-Org support in OneID enables administrators to manage users and organizational units (OUs) from the OneID interface. For tenants with the Multi-Org feature enabled, administrators can assign both tenant roles and organizational unit (OU) access to a user directly from the same interface in OneID.

You can assign and manage organizational units (OUs) for users directly at the user level within OneID. However, you must create and maintain the OU hierarchy at the billing level before assigning users to specific units.

After you grant access, you can log in to OneID, view the tenant on your My Apps page, and manage or switch between your organizational units within that tenant. All organizational unit assignments made through this process are tracked in audit logs and user management reports for compliance and auditing purposes.

## Migrating your existing Multi-Org Setup to OneID

If your organization currently manages Multi-Org (MO) configurations in the Billing tenant, no additional migration activities are required when adopting Multi-Org support in OneID. Existing organizational unit (OU) assignments are automatically recognized by OneID once the feature is enabled, ensuring continuity and consistency across both systems.

Before OneID can display or manage OU assignments, the Multi-Org feature must be activated at the OneID level. To enable Multi-Org in OneID, contact Zuora Support.

After Multi-Org is enabled in both Billing and OneID:

-   The Organizational Unit section becomes available on the user details page in OneID.

-   All previously configured OU assignments from the Billing tenant are automatically displayed for each user.

-   Administrators are not required to reassign or reconfigure OUs in OneID.


This process ensures a seamless transition for tenants already using Multi-Org while allowing future OU management tasks to be performed directly from OneID.
