---
title: "User access within Multi-entity hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-user-management/user-access-within-multi-entity-hierarchy"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:40.814Z"
---

# User access within Multi-entity hierarchy

Explains how users can request and gain access to other entities through administrator approval and manage roles via the entity switcher.

By default, you can only access the entity in which your user account is created. To access other entities, you must be given permission to access them. If you are given permission to access other entities, you can access these entities with a single login. After login, you can access the each entity through the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity).

If an entity user wants to access other entities, the administrator of the entity in which the user is created, needs to send access requests to the other entities. Then the user is put in `Pending Review` status in the entity that the user wants to access. The administrator of the entity that the user wants to access can either accept or deny the request.

-   If the entity administrator who sends the access request is also the administrator of the entity that the user wants to access, the access request will be automatically accepted. The user is then put in `Active` status.

-   If the administrator accepts the user access request, the user is then put in `Active` status.

-   If the administrator denies the user access request, the user is then put in `Access Denied` status.


Only the entity administrators have permission to manage user access. See [Grant User Access to Other Entities](/zuora-platform/user-management/multi-entity/multi-entity-user-management/user-access-within-multi-entity-hierarchy/grant-user-access-to-other-entities) and [Deny User Accesses](/zuora-platform/user-management/multi-entity/multi-entity-user-management/user-access-within-multi-entity-hierarchy/deny-user-accesses) for more information.

By default, all the users are assigned to the Standard User role in the entities that they are given permission to access. You can edit the roles and permissions for users in Administrator Settings. Also, you can assign users to one of the following user roles:

-   Standard Zuora roles

-   User roles you created


Only the entity administrators have permission to manage roles and permissions of the users.
