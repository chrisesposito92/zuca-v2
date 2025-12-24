---
title: "Business objects sharing across entities"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/business-objects-sharing-across-entities"
product: "zuora-platform"
scraped_at: "2025-12-24T05:17:48.009Z"
---

# Business objects sharing across entities

This document explains how business objects can be shared across entities.

The business objects (such as subscription, invoice, and payment) by default are only available in the entity in which the business objects are created. Only the users who have permission to access the entities can access these objects. However, Multi-entity allows you to share certain business objects across entities. After sharing, all the shared objects are available in the entities that you shared with. Currently, only the following business objects can be shared with other entities:

-   [Accounting periods](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/accounting-periods-sharing-across-entities)

-   [Products](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/sharing-and-managing-products-across-entities)


## Source Entity

An entity in which the objects are shared with is called Source Entity. You can define certain objects in the source entity and then share them with other entities. Before sharing objects, you need to [set up a connection](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/set-up-an-entity-connections-for-object-sharing) with the receiving entities. Currently, only the global entity can be the source entity to share objects.

## Target Entity

An entity that receives the shared objects from the source entity is called Target Entity. After sharing, the shared objects are synchronized to each target entity. For certain object sharing, you need to [configure shared object settings](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/configure-shared-object-settings-in-a-target-entity) in the source entity to accept or reject the shared objects. Zuora allows you to update certain information or perform certain operations on the received objects in each target entity. Currently, all the entities except the global entity can be the target entity to receive shared objects.

## Data Control on Shared Objects

After sharing objects with other entities, you might need to update information of the shared objects. The updates of the shared objects in the source and target entities depend on how data is controlled:

-   If the data is controlled by the source entity, the data can only be edited in the source entity. You are not allowed to edit the data in the target entities. All the changes in the source entity after sharing are automatically synchronized to the target entities.

-   If the data is controlled by the target entities, the data can be edited in the target entities. You can edit the data in the source entity, but the changes in the source entity will not override the data in the target entity. Even if the data is controlled by the target entities, the shared objects in the target entities are all initially synchronized from the source entity.


Each target entity has their own control on the received objects. The updates of the received objects in a target entity do not affect the other entities.

For more information about how data is controlled on the shared objects, see [Data Control on the Shared Accounting Periods](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/accounting-periods-sharing-across-entities#concept-qvhfsc30) and [Data Control on the Shared Products](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/sharing-and-managing-products-across-entities#concept-f9vdjzpv__section-6622).

## Connection Management

The data within an entity is completely isolated from other entities. To share objects between entities, you must set up a connection between the source entity and the target entity first. You can establish the connection in Administration > Manage Entity Connections. See [Set Up a Connection](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/set-up-an-entity-connections-for-object-sharing) for more information.

Any changes of the shared objects in the source entity will not affect the objects in the target entities. You can perform any operations for the shared objects in the target entities.

After you have set up a connection, you cannot disconnect the connection via the Zuora UI. You can only disconnect connections via the [REST API](https://developer.zuora.com/v1-api-reference/older-api/operation/PUT_EntityConnectionsDisconnect/). If you disconnect a connection, the data of the shared objects in the target entities are totally controlled by the target entities. Note that if you have shared objects from a global entity to a target entity, disconnecting the connection will break the mapping relationship between these entities and cannot be recovered later.

## Shared Object Settings

For certain objects sharing, you need to configure the shared object settings to accept or reject the shared objects. The following options are provided to configure a supported shared object in the target entities:

Note:

To sync the accounting period, you must Create a New Accounting Period on the source entity. The earliest transaction/subscription start date in the target entity should be later than the start date of the first accounting period in the source entity.

-   Auto-accept : The target entity automatically receives all the data of a shared object. Beware of enabling acceptance. Zuora strongly recommends that you do not switch back to not accepting the shared objects.

-   Don't accept : The target entity rejects all the data of a shared object. This option is used by default.


You can configure the shared objects setting in Administration > Manage Entity Sharing Settings .

Currently, you only need to configure the shared object settings for accounting periods sharing. For products sharing, the target entities automatically receive all the data of the shared products.

See [Configure Shared Object Settings in a Target Entity](/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/configurations-for-shared-products-in-target-entities) for more information.
