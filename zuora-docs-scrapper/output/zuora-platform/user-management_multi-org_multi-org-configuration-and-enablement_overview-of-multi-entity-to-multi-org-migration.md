---
title: "Overview of Multi-Entity to Multi-Org migration"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-enablement/overview-of-multi-entity-to-multi-org-migration"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:48.532Z"
---

# Overview of Multi-Entity to Multi-Org migration

The article provides an overview of migrating Multi-Entity setups to Multi-Org.

Zuora Multi-Org is designed to cater to the needs of various customers. These include customers who expect autonomy over settings and require hard segmentation of organizational or business boundaries. Especially when businesses do not need to be intermingled or need to run regionally. And that is why the coexistence of Multi-Org and the existing Multi-Entity framework becomes indispensable.

## Migrating from Multi-Entity to Multi-Org

There are 3 use cases where a business would want to migrate to Multi-Org from their existing multi-entity setup:

1.  Enabling Zuora Multi-Org for a leaf sub-entity in an existing Multi-Entity setup
2.  Collapsing all the entities (including the root) in a multi-entity setup into a single entity in Zuora Multi-Org
3.  Disconnecting a left sub-entity in a multi-entity setup after Zuora Multi-Org is enabled and running it as a standalone tenant.

Note: Use Case #2 does not follow an automatic process. Please contact the Zuora Global Support team to discuss the detailed data migration solution suitable for you.

Enabling Multi-Org for Use cases 1 and 3 can be categorized under one of the two upgrade scenarios as mentioned below:

| Upgrade to Zuora Multi-Org. with existing transactional data | If there is existing transactional data in the sub-entity being upgraded to Zuora Multi-Org., then you would need to upgrade the sub-entity by following the process mentioned in the Upgrade to Zuora Multi-Org with existing transactional data section below. |
| --- | --- |
| Upgrade to Zuora Multi-Org. with no transactional data | If the sub-entity to be upgraded is a new sub-entity or tenant then you can simply upgrade to Zuora Multi-Org. before using the tenant for any transaction. |

## Upgrade to Zuora Multi-Org with existing transactional data

This section explains use case 1 in detail on how a business has an existing Multi-entity environment can upgrade a leaf sub-entity within that Multi-Entity setup to Zuora Multi-Org.

Here are a few terms and concepts to familiarize before getting started:

| Zuora Multi-Entity | Zuora Multi-Org |
| --- | --- |
| RootThe root is referred to as the global entity (By default) but you can select a preferred root name. | RootRoot is referred to as the global organization (default parent) |
| Sub-EntityEach child entity under the global entity is referred to as a sub-entity. | Org. UnitsEach of the children under the root is referred to as an org. unit. |
