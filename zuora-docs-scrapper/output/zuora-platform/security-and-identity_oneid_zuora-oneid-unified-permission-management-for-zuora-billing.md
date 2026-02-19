---
title: "Zuora OneID unified permission management for Zuora Billing"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/zuora-oneid-unified-permission-management-for-zuora-billing"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:00.785Z"
---

# Zuora OneID unified permission management for Zuora Billing

Introduces the centralized management of user roles, permissions, and access controls across Zuora Billing tenants from Zuora OneID

Unified Permission Management in OneID provides a centralized and streamlined approach to managing user roles, permissions, and access controls across Zuora Billing tenants from Zuora OneID. This capability ensures a consistent and secure framework for defining and enforcing permissions, reducing complexity and improving compliance.

Note: Unified Permission Management in OneID supports Zuora Billing tenants only.

Unified Permission management helps you create global roles and manage permissions from within OneID for various tenants and modules including Zuora Platform, Billing, Payment, Finance, Commerce and Reporting.

Unified Permission management offers the following benefits:

-   Centralized Interface: Manage permissions for Zuora Billing tenants from a single, intuitive UI within OneID.

-   Create and Manage Global Roles: You no longer need to manually recreate the same role and permission configurations across multiple tenants. With this module, you can create a global role once, and it will automatically be available across all your Billing tenants—including Production, Sandbox, and Central Sandbox.

-   Granular Controls: Define and customize user roles with precise access rights tailored to specific business needs, clone and copy the permissions easily

-   Audit Trail Integration: Track and monitor permission changes with a detailed, time-stamped log for compliance and audit purposes.

-   Scalable Design: Support for dynamic business environments, enabling seamless updates to roles and permissions as organizational needs evolve.


## Unified Permission management activation

Before your organization can use this feature, you must reach out to [Zuora Global Support](https://zuora.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fsupport.zuora.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=825826&auth_origin=825826%2Ctrue%2Ctrue) for activation. Our support team will help enable Unified Permission management feature for your organization. Once our team enables this feature, you will find the User roles and permissions menu option in the left hand navigation of the OneID dashboard.

While your organization is still using the current roles mapped to your users either directly or via user groups, will still continue to work along with this new unified permission management module. You can also import the roles to this new permission management module to create the Global roles.

## Unified Permission Management working

Within this permission management module, you can create global user roles by either setting up a new role with custom permissions, importing roles from an existing tenant-level setup, or cloning an existing global role and modifying its permissions as needed.

Once global roles are created, they become automatically available across all tenants. You can assign them directly to users using Direct Tenant Access provisioning or through user groups using Group Provisioning mode.

Note: Currently, if a feature isn't enabled in a Billing tenant, assigning a role associated with that feature will have no effect—the user's experience will remain unchanged upon login.
