---
title: "Add an entity to an entity hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/management-of-entity-and-entity-hierarchy/management-of-entity-and-entity-hierarchy/add-an-entity-to-an-entity-hierarchy"
product: "zuora-platform"
scraped_at: "2025-12-24T05:17:27.692Z"
---

# Add an entity to an entity hierarchy

Learn to add entities to a multi-entity hierarchy using Zuora UI or REST API.

You can add entities to a multi-entity hierarchy from Zuora UI and REST API. Only the global entity administrators have permission to add entities. We recommend that you assign only one administrator to manage the entity hierarchy. Because an administrator of the global entity by default can only access to the entities that are created by themselves.

Note:

Entities can only be created in Zuora Production and API Sandbox environments. In Central Sandbox and Developer Sandbox environments, your associated Production entity is treated as the master record of entities. To add a new entity in these environments, first add it in Production and then perform a sandbox refresh.

To add an entity to a multi-entity hierarchy from the Zuora UI:

1.  Log in as a global entity administrator.
2.  Navigate to the global entity from the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity).
3.  Click your user name at the top right and navigate to Administration \> Manage Entity Hierarchy .
4.  On the Manage Hierarchy of Entities page, click Add next to the entity that you want to add an entity under it.
5.  In the Add New Entity dialog, specify the following information:

    -   [Name](/zuora-platform/user-management/multi-entity/introduction-to-entity-and-entity-hierarchy)

    -   [Display Name](/zuora-platform/user-management/multi-entity/introduction-to-entity-and-entity-hierarchy)

    -   Locale

    -   Time Zone


6.  Click save.

After you add an entity to the multi-entity hierarchy, the entity is automatically displayed under its parent entity. Note that the newly added entity is not set up in your Zuora environment until you provision it.

To add an entity to a multi-entity hierarchy from REST API, see [Create entity](https://developer.zuora.com/v1-api-reference/older-api/operation/POST_Entities/).
