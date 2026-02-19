---
title: "Managing users in a multi-entity environment"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-user-management/managing-users-in-a-multi-entity-environment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:40.919Z"
---

# Managing users in a multi-entity environment

Explains how entity admins manage users within their entities, while global admins control security policies across all entities.

In each entity, only the entity administrators can manage user accounts of the entity. As an entity administrator of an entity, you can manage:

-   The users that are created in the entity

-   The users that are created in other entities, but are given permission to access the entity


An entity user can have different user roles and permissions in each entity that the user has permission to access. For example, an administrator of the entity A can be assigned as a standard user of the entity B.

For detailed information about managing users for an entity:

-   To create and edit user accounts, and reset user passwords in an entity, see Manage Users .

-   To manage user roles and permissions in an entity, see User Roles .

-   All the entity users can edit their own user profile and change passwords, see Personal Settings .

-   Only the global entity administrators can configure security policy. The security setting applies to all entities within the multi-entity hierarchy. See Security Policies .


## Deactivate users of multi-entity-enabled tenants

The procedure of deactivating users of multi-entity-enabled tenants varies depending on whether you want to do it via the administrator settings in the Zuora UI or [Zuora OneID:](/zuora-platform/security-and-identity/oneid/oneid-overview):

-   Administrator settings: See Deactivate users .

-   Zuora OneID: Submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).
