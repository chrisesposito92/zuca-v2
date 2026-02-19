---
title: "User groups in OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-groups-in-oneid"
product: "zuora-platform"
scraped_at: "2026-02-19T03:22:00.121Z"
---

# User groups in OneID

User groups in OneID manage access permissions, enhance security, and streamline administrative tasks by organizing Zuora tenants and user roles.

A OneID user group contains a group of Zuora tenants and the corresponding OneID user roles. You can add a user to one or multiple user groups. The first group a user is added to has the highest priority by default. The administrator can adjust the priority manually.

If a specific tenant is defined in multiple groups which contain the same user, the user inherits user roles and permissions from the highest-priority group. If a specific tenant is not defined in the highest-priority group, but defined in a user group with a lower priority, the user inherits user roles and permissions from the lower-priority group.

Zuora OneID provides an efficient way to manage access permissions, enhance security, and streamline administrative tasks through user groups.

Permissions are assigned to groups rather than individual users, allowing dynamic updates to access permissions by adding or removing users from a group.

Dynamic updates to access permissions occur when users are added or removed from a security group, ensuring consistency and reducing the risk of human error.

Uniform security policies are enforced across user groups, facilitating compliance audits and ensuring adherence to organizational security policies.

User groups simplify the management of user accounts throughout their lifecycle, allowing administrators to globally apply changes and ensure consistent security policies across the organization.

-   Billing Manager / Billing Operations Specialist - Oversees the billing processes, ensuring accuracy, timeliness, and efficiency in invoicing customers.

-   Subscription Manager - Manages the subscription lifecycle, including customer acquisition, retention, and upgrades.

-   Revenue Operations Manager \- Focuses on optimizing revenue-related processes, aligning sales and marketing efforts, and ensuring accurate financial reporting.

-   Billing Analyst - Analyzes billing data, identifies trends, and provides insights to improve billing processes.

-   Subscription Analyst - Analyzes subscription data, monitors customer behavior, and recommends strategies for improving subscription metrics.

-   Revenue Analyst - Examines revenue streams, analyzes financial data, and provides insights to optimize revenue generation.

-   Billing Specialist - Handles day-to-day billing tasks, resolves customer billing inquiries, and ensures billing accuracy.


The following table shows two examples of user groups and subordinate user roles:

| OneID user group | OneID user role | User group priority |
| --- | --- | --- |
| Group 1: Billing Manager | Billing Manager Role for Prod Tenant | 1 |
| Group 2: Billing User | Billing User Role for Prod TenantBilling User Role for SBX Tenant | 2 |

In this example, if a user is added to both Group 1 and Group 2 (Group 1 has a higher priority), this user gets the following user roles:

-   Billing Manager Role for Prod Tenant Because both groups contain a user role for Prod Tenant, the user inherits this user role from a higher-priority group (Group 1).

-   Billing User Role for SBX Tenant Because only Group 2 contains a user role for SBX Tenant, the user inherits this user role from a lower-priority user group (Group 2).
