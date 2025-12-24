---
title: "Overview of Multi-entity"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/overview-of-multi-entity"
product: "zuora-platform"
scraped_at: "2025-12-24T05:17:19.581Z"
---

# Overview of Multi-entity

Zuora Multi-entity enables the creation and management of multiple entities within a single tenant, allowing for isolated business operations, centralized management, and shared resources across entities.

Zuora Multi-entity provides the capability to create and manage multiple entities within a single Zuora tenant. To model your global business organization, you can structure a multi-entity hierarchy. An entity represents a legal entity or an independently operated business unit. Each entity can manage its own business objects (such as subscription, invoice, and payment), settings, transactions, and features and . Entity users can be granted access to the other entities and share business objects across entities.

Zuora Multi-entity allows you to:

-   Log in a a corporate user to run reports and view data across entities
-   Model your enterprise organization in a multi-entity hierarchy
-   Keep the business operations isolated among entities
-   Limit data access within different entities
-   Grant user access across entities
-   Define business objects centrally in a single entity, and share with other entities
-   Share certain settings and business objects across entities

## Multi-entity hierarchy

Zuora Multi-entity hierarchy shows the structure of your entities. You can manage your multi-entity hierarchy to structure your global enterprise organization within a single tenant. New entities can be added or edited as company structure changes.

[See Introduction to Entity and Entity Hierarchy](/zuora-platform/user-management/multi-entity/introduction-to-entity-and-entity-hierarchy) and [Management of Entity and Entity Hierarchy](/zuora-platform/user-management/multi-entity/management-of-entity-and-entity-hierarchy/management-of-entity-and-entity-hierarchy) for more information.

## Business objects sharing across entities

Zuora offers sharing and central management options to make management across entities easier. You can define accounting periods centrally in a single entity and share with other entities. You can also share products within a multi-entity hierarchy, which allows entities to cross-sell products from other entities.

See [Business Objects Sharing Across Entities](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/business-objects-sharing-across-entities)for more information.

## User access across entities

Each entity is completely isolated from other entities. A user by default can only access the entity in which the user is created. To access the other entities, the user must be granted permission to access them. Only the entity administrators have permission to grant or deny user access.

See [User Access within Multi-entity hierarchy](/zuora-platform/user-management/multi-entity/user-access-within-multi-entity-hierarchy) for more information.

## Entity switcher

The entity switcher lists all the provisioned entities in the multi-entity hierarchy. After you logged in from the Zuora UI, you can switch to the entities that you have permission to access from the entity switcher.

The entity switcher is in the upper right of the page and next to your login user name. When you click the current entity display name, the multi-entity hierarchy is displayed. You can click an entity display name from the entity switcher to access the entity. Also, you can search for an entity display name in the entity search field. The entities that you do not have permission to access are grayed out.

![Entity switcher](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/60b36c74-09b2-45ad-ab5b-65a137264f1e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYwYjM2Yzc0LTA5YjItNDVhZC1hYjViLTY1YTEzNzI2NGYxZSIsImV4cCI6MTc2NjYzOTgzNywianRpIjoiN2YwZjNiZGQyM2U2NGIyOTljOGJkOWM1MzgwODg1ZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.E1WoaenXK9ke16ezB-7B-dRBV-XaVMYMR4gDwu5sIes)

## API user authentication

When making API calls, you can specify which entity you want to make the call to:

-   In the SOAP API, specify the Zuora-Entity-Ids in the login call.

-   In the REST API, specify the Zuora-Entity-Ids in the header for a request call.


## Multi-entity use case

The most common use case where multi-entity is required is for companies who sell products globally, but the pricing, tax, and accounting code are different per geographical region. In this use case, the Acme corporation sells products in the Americas, Europe, and Asia. The following figure gives you the multi-entity hierarchy of the Acme corporation:

![Multi-entity hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f71445e9-155a-4e98-aa08-305d3e586802?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3MTQ0NWU5LTE1NWEtNGU5OC1hYTA4LTMwNWQzZTU4NjgwMiIsImV4cCI6MTc2NjYzOTgzNywianRpIjoiNjc2YjU1ZGM0MjZiNDViNWFjYmU4MjU5NDkzNDFlOGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LsaCZSOz_5c4tmAPRK3BckpPQTPWJDzgdvC6A3qsTyw)

The Acme Corporation entity is the global entity of the entity hierarchy. As an administrator of the Acme Corporation entity, you can create and manage entities to organize your business regions. The following sub-entities are defined based on each region under the Acme Corporation entity:

-   Americas
    -   US
    -   Canada
-   Europe
    -   UK
    -   France
-   Asia
    -   China
    -   Japan

In a multi-entity environment, the Acme corporation can:

-   Manage business objects, settings, and transactions of all sub-entities with a single login as an administrator of the Acme Corporation entity. For example, after logging in as an administrator, you can switch to the US entity and then configure the settings of the US entity.
-   Each entity can have its own pricing, currency, tax, settings, and so on. For example, the US entity can use USD as its home currency while the Canada entity can use CAD as its home currency.
-   Define accounting periods in the Acme Corporation entity and share with other sub-entities.
-   Perform the accounting close process separately for each entity.
-   Operations such as bill runs, payment runs, and journal runs are kept separate for each entity. For example, if you created a bill run in the US entity, the other entities are not affected.
-   Each entity can create reports separately.
-   Each entity can have their own time zone settings.
-   Each entity can have their own custom field definitions. However, if needed, custom field definitions can be shared between the global entity and its sub-entities.
-   Each entity user can only see objects that they are allowed to see. For example, product rate plans created in the China entity are not viewable by Japan entity users unless they are given permission.
-   A sub-entity user can be granted access to other entities and assign different roles and permissions in other entities. For example, an administrator of the UK entity can be assigned as a standard user of the Europe entity.
-   The Acme Corporation entity can share products with its sub-entities. After receiving the shared products, the sub-entities can customize certain information of the shared products based on their own requirements.
-   The Acme Corporation entity administrators can configure the security policies. Sub-entities will inherit the security policies from it.
