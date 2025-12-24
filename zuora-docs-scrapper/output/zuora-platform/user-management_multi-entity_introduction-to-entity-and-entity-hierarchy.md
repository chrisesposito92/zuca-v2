---
title: "Introduction to entity and entity hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/introduction-to-entity-and-entity-hierarchy"
product: "zuora-platform"
scraped_at: "2025-12-24T05:17:22.431Z"
---

# Introduction to entity and entity hierarchy

Explains the concepts of the entity and multi-entity hierarchy.

This article introduces the concepts of the entity and multi-entity hierarchy.

## Multi-entity hierarchy

Multi-entity hierarchy is a multi-layer entity structure that models your global enterprise organization. You can manage [multi-entity hierarchy](/zuora-platform/user-management/multi-entity/management-of-entity-and-entity-hierarchy/management-of-entity-and-entity-hierarchy)by adding, editing, removing, or provisioning entities. In a multi-entity hierarchy, users that are created in an entity, can be granted access to other entities or share business objects with other entities. You can only have a single multi-entity hierarchy within a multi-entity environment.

## Zuora tenant in Multi-entity

A Zuora tenant can only have a single multi-entity hierarchy, which contains one or multiple entities. Currently, Zuora does not support consolidating more than one tenant into a single multi-entity environment.

To find the tenant information, navigate to an entity and then click Administration > Manage Entity Profile .

Note:

Zuora employs a number of concurrent request limits to maximize the stability of its service. If the Multi-entity feature is enabled in your tenant, the concurrent API request limits apply to each entity separately. For more information about the concurrent request limits, see [Rate and concurrent request limits](https://developer.zuora.com/docs/guides/rate-limits/).

## Entity

An entity represents a business unit that operates independently and can sell products to multiple countries. Each entity has its own Zuora environment in which the entity users can perform business operations independent of the other entities. In a multi-entity hierarchy, an entity can share certain business objects with the other entities. Users that are created in an entity can be granted access to the other entities with different roles and permissions.

To manage entities, see [Management of Entity and Multi-entity Hierarchy](/zuora-platform/user-management/multi-entity/management-of-entity-and-entity-hierarchy/management-of-entity-and-entity-hierarchy) for more information.

A multi-entity hierarchy includes a global entity and sub-entities. For example:

-   Acme corporation

    -   Asia

        -   China

        -   Japan


The Acme corporation is the global entity of the entity hierarchy. The Asia, China, and Japan entities are all sub-entities in the multi-entity hierarchy.

## Name and display name

Each entity has a name and a display name. The name of the entity is the entity identifier, which must be unique across all entities in a multi-entity hierarchy. Only alphanumeric characters (letters A–Z and a–z, and digits 0–9), space, period, and hyphen are allowed to be used in entity names. The display name of the entity is the name shown in the Zuora UI and APIs. The maximum length of the name or the display name is 255 characters.

You can set or edit the entity name and display name in Administration > Manage Entity Hierarchy as a global entity administrator.

## Global entity

The global entity is the root entity of the entity hierarchy.

After Multi-entity is enabled for a tenant, the tenant is migrated from a single-entity environment to a multi-entity environment, in which the global entity is automatically provisioned. If you have data in the single-entity environment, all your tenant data is migrated to the global entity. By default, the global entity display name is the tenant name and the global entity name is "Global". All tenant users (administrators and standard users) are set to be the global entity users. You are not allowed to remove the global entity from the multi-entity hierarchy.

All the administrators of the global entity have permission to manage entities in the multi-entity hierarchy. By default, an administrator can only access the entities that are created by themselves and cannot access the entities that are created by the other administrators. So we recommend that you assign only one administrator to manage the entity hierarchy.

The difference between the global entity and sub-entities is that the global entity users have more permissions than the sub-entities users:

-   Global entity administrators can manage the entity hierarchy.

-   Global entity administrators can create, edit, provision, or remove entities.

-   Global entity users can share business objects with other entities.

-   Global entity administrators can configure the security policies.


## Unique sequence numbers

In a multi-entity hierarchy, each entity has unique sequence numbers for the following objects:

-   User name

-   SKU

-   Subscription number

-   Charge number

-   Invoice number

-   Payment number


Note:

You must set the SKU prefix to be unique across all entities. If the Multi-entity feature is enabled in Zuora for Salesforce , you must set the subscription number prefix to be unique across all entities.

We recommend that you also define the following number formats for each entity:

-   Account number

-   Charge number

-   Amendment number


See Define Numbering and SKU Formats for more information.

## Time zone and locale

Note:

The Time Zone feature is in Limited Availability. If you wish to have access to the feature for any entity, submit a request at [Zuora Support](https://www.zuora.com/support-center/).

Each entity can set its own time zone and locale in the Zuora UI.

-   If the entity is not provisioned in the multi-entity hierarchy, see [Edit the Unprovisioned Sub-entity Information](/zuora-platform/user-management/multi-entity/management-of-entity-and-entity-hierarchy/management-of-entity-and-entity-hierarchy/edit-the-global-entity-information-from-zuora-ui).

-   If the entity is provisioned in the multi-entity hierarchy, see [Edit the Provisioned Sub-entity Information](/zuora-platform/user-management/multi-entity/management-of-entity-and-entity-hierarchy/management-of-entity-and-entity-hierarchy/edit-the-provisioned-sub-entity-information-from-zuora-ui).


See Tenant Settings for more information about time zone and locales.

## Notification

Note:

Some of the notification events are in Limited Availability. If you wish to have access to the feature for any entity, submit a request at [Zuora Support](https://www.zuora.com/support-center/).

Each entity can configure notifications separately without affecting the other entities.

To identify which entity sends the notifications, you can:

-   Specify different values for the From Name and From Email fields in each entity when you create or edit an email template .

-   Use the entity ID and entity name merge fields for administrative notifications. See System merge fields for email and callout templates for more information.


## Custom fields

Each entity can continue to have separate custom field definitions that do not affect the other entities. However, if needed, custom field definitions can be shared between the global entity and its sub-entities. Custom field values are not copied between entities. You cannot delete a custom field while it is shared with sub-entities. See Custom fields for more information.

## Scope

When you manage your multi-entity hierarchy, pay attention to the following points:

-   Up to 512 entities can be created in a multi-entity hierarchy.

-   If an entity is provisioned, the entity cannot be removed from the multi-entity hierarchy.

-   If you want to use the Multi-entity feature with SOAP API, you must use WSDL 78 or higher version.
