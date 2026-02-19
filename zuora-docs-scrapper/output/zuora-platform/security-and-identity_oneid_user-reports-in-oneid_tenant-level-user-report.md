---
title: "Tenant-level user report"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-reports-in-oneid/tenant-level-user-report"
product: "zuora-platform"
scraped_at: "2026-02-19T03:22:31.033Z"
---

# Tenant-level user report

The Tenant-level user report offers comprehensive insights into user access and roles across Zuora applications, integrating OneID and tenant-specific data for detailed analysis.

## Notes

The Tenant-level user report provides detailed insights into user access and roles at the tenant level within Zuora applications. It enables the selection of specific tenants before generating reports. Each selected tenant will have a separate report displaying both OneID fields and tenant-specific user data.

The tenant-level report combines OneID-level fields with tenant-specific user data, offering a detailed view of each user's access and permissions within Zuora tenants.

-   Inclusion: The report includes both OneID-level and tenant-specific fields, allowing for a seamless transition to OneID.
-   User scope: Includes users migrated to OneID and those managed locally within the tenant.
-   Deprecation notice: Billing tenant-level reporting will eventually be phased out, consolidating user reporting at the OneID level.

## Fields in tenant-level user report

The Tenant-Level User Report includes both tenant-specific and OneID fields, providing a complete view of each user's access and permissions within a particular tenant.

## Global fields in tenant-level reports

The global fields included in the Tenant-Level Report section provide core OneID data for each user, ensuring that tenant and global-level attributes are accessible for a comprehensive user overview.

1.  SSO Enabled: Indicates if SSO is enabled in OneID.
2.  Federated ID: Managed identity by a Federated Identity Management system.
3.  Created On: Date of user account creation in OneID.
4.  Activated On: Date of account activation in OneID.
5.  Deactivated On: Date of account deactivation in OneID.
6.  Last Login Time: Last successful login date and time for OneID.
7.  OneID Role Name: Specifies access rights at the tenant level; includes modular roles.
8.  OneID User ID: Globally unique identifier for OneID users, accessible in audit and tenant-level reports.
9.  OneID User Name: Unique identifier for login within OneID.
10.  OneID Work Email: Email address for OneID communications.
11.  OneID User Type: Specifies whether the user has Administrator or Standard privileges.
12.  OneID User Status: The user status in OneID can be Active, Inactive, Pending Activation, or a Pending Setup(Similar to Pending Activation but allows account activation directly from the Billing application using local credentials).
13.  OneID Enabled: Indicates if the user is managed at the OneID level or locally within the tenant.
14.  OneID First Name & Last Name: User's name as registered in OneID.
15.  API User: Indicates if the user is an API user at the local tenant which has 'API write access' but no 'UI Access' platform permissions within the local tenant. And this filed appears only for the Billing tenant-level report.

## Billing tenant-level fields

The fields in the Billing tenant-level section outline specific identifiers and roles assigned to users at the tenant level in the Billing application.

1.  Tenant ID: Unique identifier for the Zuora tenant.
2.  Tenant Name: The name of the Zuora tenant in the report.
3.  Entity ID: Identifies the organization's specific entities or business units if multi-entity is enabled.
4.  Tenant User ID: Unique user identifier at the tenant level, specific to each Zuora tenant.
5.  Tenant User Name: Formerly used for tenant-level login.
6.  Tenant Work Email: Email address for tenant-level communications.
7.  Tenant First Name & Last Name: User's name as registered in the tenant.
8.  Tenant User Status: Reflects the user's status within the tenant following the transition to OneID. When a global account is deactivated in OneID, associated local accounts are also deactivated.
9.  Platform Role: User role for the Platform module within the Billing application.
10.  Billing Role: User role for the Billing module.
11.  Payments Role: User role for the Payments module.
12.  Finance Role: User role for the Finance module.
13.  Commerce Role: User role for the Commerce module.
14.  Reporting Role: User role for the Reporting module.

## Revenue tenant-level fields

The Revenue Tenant-Level Fields section provides data on identifiers and roles assigned to users within Revenue tenants, supporting tenant-specific access control and role management.

1.  Tenant ID: Unique identifier for the Zuora tenant.
2.  Tenant Name: The name of the Zuora tenant in the report.
3.  Entity ID: Identifies the organization's specific entities or business units if multi-entity is enabled.
4.  Revenue Role ID: Unique identifier for the user roles in Revenue tenants.
5.  Role Name: Indicates the user access level in the Revenue tenant; synchronized with the OneID role post-transition.
6.  Role Start Date & Role End Date: The local role validity period within the Revenue tenant.
7.  Revenue User ID: Unique user identifier at the tenant level.
8.  Revenue Username: Formerly used for tenant-level login.
9.  Revenue Work Email: Email address for tenant-level communications.
10.  Revenue Full Name: User's name as registered in the tenant.
11.  Revenue User Status: Reflects the user's status within the Revenue tenant following the transition to OneID.
