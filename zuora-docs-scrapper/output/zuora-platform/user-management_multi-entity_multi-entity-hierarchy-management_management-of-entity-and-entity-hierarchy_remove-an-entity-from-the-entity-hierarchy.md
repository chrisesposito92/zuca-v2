---
title: "Remove an entity from the entity hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-hierarchy-management/management-of-entity-and-entity-hierarchy/remove-an-entity-from-the-entity-hierarchy"
product: "zuora-platform"
scraped_at: "2026-02-20T17:46:33.641Z"
---

# Remove an entity from the entity hierarchy

Learn how to remove unprovisioned entities from the multi-entity hierarchy in Zuora.

You can only remove unprovisioned entities from the multi-entity hierarchy. When you remove an unprovisioned entity, the child entities of this entity are all removed too. You are not allowed to remove the global entity and provisioned entities from the multi-entity hierarchy. Only the global entity administrators have permission to remove unprovisioned entities.

To remove an unprovisioned entity from the Zuora UI:

1.  Log in as a global entity administrator.
2.  Navigate to the global entity from the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity).
3.  Click your username at the top right and navigate to Administration \> Manage Entity Hierarchy .
4.  On the Manage Hierarchy of Entities page, click Remove next to the entity.
5.  Click OK on the pop-up window.

To remove unprovisioned entities from REST API, see [Delete entity](https://developer.zuora.com/v1-api-reference/older-api/operation/DELETE_Entities/).
