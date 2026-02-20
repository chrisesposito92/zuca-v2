---
title: "User roles in OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-roles-in-oneid"
product: "zuora-platform"
scraped_at: "2026-02-20T17:43:21.875Z"
---

# User roles in OneID

A OneID user role aggregates tenant user roles to define permissions for various Zuora products within a specific tenant, allowing customization to meet business needs.

A OneID user role represents a user identity with permissions for Zuora products in a specific Zuora tenant.

A OneID user role consists of a group of tenant user roles in a Zuora tenant. This group of tenant user roles defines permissions for Zuora products such as Zuora Platform, Billing, Payments, Finance, Commerce, Reporting, and Insight. You can customize user roles in OneID to meet your business needs.

The following table shows three examples of OneID user roles and subordinate tenant user roles in a specific Zuora tenant:

-   User Role A: an administrator user role of this Zuora tenant

-   User Role B: a standard user role of this Zuora tenant

-   User Role C: a customized user role of this Zuora tenant


| Zuora product | User Role A | User Role B | User Role C |
| --- | --- | --- | --- |
| Zuora Platform | Administrator | Standard User | Customized Platform User |
| Billing | Zuora Billing Standard User | Zuora Billing Standard User | Zuora Billing Standard User |
| Payments | Zuora Payments Standard User | Zuora Payments Standard User | Zuora Payments Standard User |
| Finance | Zuora Finance Administrator | Zuora Finance Standard User | Zuora Finance Administrator |
| Commerce | Zuora Commerce Admin User | Zuora Commerce Standard User | Zuora Commerce Standard User |
| Reporting | Zuora Reporting Administrator | Zuora Reporting Standard User | Zuora Reporting Standard User |
| Insight | Zuora Insights Administrator | Zuora Insights Standard User | Zuora Insights Standard User |

For more information, see Manage user roles in OneID .

## Distinguish OneID user roles from tenant user roles

Tenant user roles are user roles created in a Zuora tenant. A tenant user role defines permission for a specific Zuora product. In contrast, a OneID user role contains a set of tenant user roles, which includes permissions for all Zuora products in that tenant.

In the above example, User Roles A, B, and C are of OneID. Zuora Billing Standard User, Zuora Payments Standard User, and Zuora Commerce Admin User are tenant user roles.

For more information about tenant user roles and permissions in Zuora tenants, see [User roles](/zuora-platform/security-and-identity/administrator-settings/user-roles).
