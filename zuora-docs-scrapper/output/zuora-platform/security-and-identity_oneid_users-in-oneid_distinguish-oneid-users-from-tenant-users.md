---
title: "Distinguish OneID users from tenant users"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/users-in-oneid/distinguish-oneid-users-from-tenant-users"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:46.284Z"
---

# Distinguish OneID users from tenant users

This reference explains how to distinguish between OneID users and tenant users in Zuora, detailing the process of linking these identities for seamless access.

Tenant users refer to users created in Zuora tenants. Similar to OneID users, a tenant user represents a specific identity in your Zuora tenant.

To access a Zuora tenant with OneID, you need to link a tenant user in that tenant to your OneID user. Then, you can access the tenant on your OneID portal.

The following table shows examples of common identities in OneID and your Zuora tenants, and the relationships between these identities.

| Employee | Responsibility | Identity (user type) in OneID | Identity in Zuora tenants |
| --- | --- | --- | --- |
| Employee A | Running your organization | Organization admin | Administrator |
| Employee B | Managing user accounts in OneID | Organization admin | N/A |
| Employee C | Managing user accounts in your Zuora tenants | Standard user | Administrator |
| Employee D | Managing transaction data in your Zuora tenants | Standard user | Operator |
| Employee E | Developing transaction system for your organization | Standard user | Developer |

In this example, the only task for employee B is managing user accounts in OneID; this employee does not need to log in to your Zuora tenants. So the identity of this employee in OneID is organization admin, and there is no corresponding tenant user in your Zuora tenants.

However, employee C, who manages tenant user accounts, is a standard user in OneID, and an administrator in your Zuorate tenants.

For more information, see [Access Zuora tenants with OneID.](/zuora-platform/security-and-identity/oneid/access-zuora-tenants-through-the-oneid-portal)
