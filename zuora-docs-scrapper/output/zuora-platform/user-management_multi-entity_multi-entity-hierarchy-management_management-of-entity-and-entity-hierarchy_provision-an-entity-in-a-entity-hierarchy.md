---
title: "Provision an entity in a entity hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-hierarchy-management/management-of-entity-and-entity-hierarchy/provision-an-entity-in-a-entity-hierarchy"
product: "zuora-platform"
scraped_at: "2026-02-20T17:46:34.050Z"
---

# Provision an entity in a entity hierarchy

Learn how to provision an entity in a multi-entity hierarchy within Zuora.

After you [added an entity to the multi-entity hierarchy](/zuora-platform/user-management/multi-entity/multi-entity-hierarchy-management/management-of-entity-and-entity-hierarchy/add-an-entity-to-an-entity-hierarchy), you need to provision the entity to set up it in your Zuora environment. You can only provision an entity if its parent entity is provisioned. Only the global entity administrators have permission to provision entities.

Zuora does not allow you to remove a provisioned entity from the multi-entity hierarchy. So before you provision an entity, make sure that you put the entity in the correct place in the multi-entity hierarchy.

To provision an entity from the Zuora UI:

1.  Log in as a global entity administrator.
2.  Navigate to the global entity from the [entity switcher](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/user_management/multi_entity/overview_multi-entity.ditamap).
3.  Click your user name at the top right and navigate to Administration \> Manage Entity Hierarchy .
4.  On the Manage Hierarchy of Entities page, click Provision next to the entity.

If an entity is provisioned successfully, you can find this entity in the multi-entity hierarchy from the [entity switcher](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/user_management/multi_entity/overview_multi-entity.ditamap).

To provision an entity from REST API, see [Provision entity](https://developer.zuora.com/v1-api-reference/older-api/operation/PUT_ProvisionEntity/).
