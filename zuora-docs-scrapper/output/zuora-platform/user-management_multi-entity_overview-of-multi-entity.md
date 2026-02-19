---
title: "Overview of Multi-entity"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/overview-of-multi-entity"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:12.155Z"
---

# Overview of Multi-entity

This topic provides an overview of Zuora Multi-entity, which enables you to create and manage multiple entities within a single Zuora tenant.

Multi-entity supports isolated business operations for each entity while allowing centralized administration and controlled sharing of users, settings, and business objects across entities.

An entity represents a legal entity or an independently operated business unit. By organizing entities into a multi-entity hierarchy, you can model your global enterprise structure within a single tenant and adapt it as your organization evolves. Each entity manages its own data, settings, and features, while users can be granted cross-entity access to share business objects as needed.

## Key capabilities

-   Model a global enterprise organization using a multi-entity hierarchy

-   Isolate business operations by entities

-   Limit data access within different entities

-   Grant users controlled access across multiple entities

-   Define and manage certain business objects centrally and share them across entities

-   Share selected settings and configurations across entities


## Multi-entity hierarchy

The multi-entity hierarchy represents the structural relationship between entities in a tenant. It supports parent and sub-entity relationships that reflect your organizational or legal structure. You can create, edit, or reorganize entities in the hierarchy as business needs change. The hierarchy enables centralized governance while maintaining operational independence for each entity.

See [See Introduction to Entity and Entity Hierarchy](/zuora-platform/user-management/multi-entity/multi-entity-hierarchy-management/introduction-to-entity-and-entity-hierarchy) and [Management of Entity and Entity Hierarchy](/zuora-platform/user-management/multi-entity/multi-entity-hierarchy-management/management-of-entity-and-entity-hierarchy) for more information.

## Multi-entity use case

Multi-entity is commonly used by organizations that operate globally and require different pricing, tax, accounting, or regulatory configurations by region.

In this use case, Acme Corporation uses Multi-entity to manage operations across multiple regions, including the Americas, Europe, and Asia.

![Multi-entity hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f71445e9-155a-4e98-aa08-305d3e586802?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3MTQ0NWU5LTE1NWEtNGU5OC1hYTA4LTMwNWQzZTU4NjgwMiIsImV4cCI6MTc3MTU1Nzg0NiwianRpIjoiYTRjNTEyNWI4MjRmNDE1OTk4YTk5ODhlYmRmMGI4NTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.PTOCLCSo-hXRn0Vdgn4trq0eIL8gSdQHrNXf7CADUqc)

In this model:

-   The Acme Corporation entity serves as the global parent entity.

-   Regional and country-level entities operate independently under the hierarchy.

-   Each entity maintains its own currency, pricing, tax rules, time zone, and operational settings.

-   Accounting periods can be defined centrally and shared.

-   Operations such as bill runs, payment runs, and journal runs are performed separately per entity. For example, if you created a bill run in the US entity, the other entities are not affected.

-   Each entity maintains its own reports, time zone settings, custom fields, and user access controls, with optional sharing of custom field definitions from the global entity. Users can only view objects they have permission to access across entities. ​

-   A sub-entity user can be granted access to other entities and assign different roles and permissions in other entities. For example, an administrator of the UK entity can be assigned as a standard user of the Europe entity.
-   The Acme Corporation entity can share products with its sub-entities. After receiving the shared products, the sub-entities can customize certain information of the shared products based on their own requirements.
-   The Acme Corporation entity administrators can configure the security policies. Sub-entities will inherit the security policies from it.
