---
title: "Accounting periods sharing across entities"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/accounting-periods-sharing-across-entities"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:15.760Z"
---

# Accounting periods sharing across entities

Learn how to define and share accounting periods across entities in Zuora.

You can define accounting periods in the source entity and then share them with target entities. Zuora synchronizes the shared accounting periods to each of the target entities. Currently, only the global entity can be the source entity to share accounting periods with the other entities.

## prerequisites

Before sharing accounting periods with a target entity, you must finish the following tasks:

1.  [Set up a connection between a source entity and a target entity](/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/set-up-an-entity-connections-for-object-sharing).
2.  [Configure sharing settings in the target entity](/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/configurations-for-shared-products-in-target-entities).
3.  [Set up accounting periods in the source entity.](/accounts-receivable/finance/accounting-periods/set-up-accounting-periods)
4.  If you want to share custom fields of the accounting periods, configure the custom fields in the target entity.

    The settings of the custom fields, such as field name and type in the target entity must be consistent with the settings in the source entity. See How do I use custom fields?(/


If accounting periods have already been created in a target entity, Zuora does not allow the target entity to receive shared accounting periods. In such cases, you must remove the accounting periods from the target entity before configuring shared accounting period settings. Only the [Z-Finance administrators](/zuora-platform/security-and-identity/administrator-settings/user-roles/finance-roles) of this target entity have permission to remove the accounting periods.

## Accounting Periods Sharing in the Source Entity

After you finished the [prerequisites](#concept-qvhfsc30__section-7245) , all the accounting periods in the source entity are automatically synchronized to each target entity. If you perform the following operations after sharing in the source entity:

-   Create new accounting periods

-   Edit the shared accounting periods information that is controlled by the source entity


All the changes are also automatically synchronized to the target entities. To make sure all the updates of the accounting periods in the source entity are synchronized to the target entities, we recommend that the accounting periods that you want to update in the target entities are in `Open` status.

After sharing with the target entities, you are not allowed to remove the shared accounting periods from the source entity.

## Data Control on the Shared Accounting Periods

For the shared accounting periods, some information is controlled by the source entity while some information is controlled by the target entities. For example, the name of the shared accounting periods is controlled by the source entity. You are not allowed to edit the name in the target entities. You can only edit the name in the source entity. The changes are then synchronized to the target entities. For more information about how data is controlled on the shared objects, see [Business Objects Sharing Across Entities](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/user_management/multi_entity/topics/data_control_on_the_shared_products.dita) .

The target entity only controls the note information of the shared accounting periods. All the other information is controlled by the source entity.

## Management of Shared Accounting Periods in Target Entities

In each target entity, you can see the shared accounting periods are displayed in the accounting periods list in Finance > Accounting Periods in the left-hand navigation section.

You are not allowed to do the following operations for the shared accounting periods in the target entities:

-   Create new accounting periods

-   Delete received accounting periods

-   Edit the source entity controlled information


You can do all the other operations for the shared accounting periods, such as:

-   Add custom fields

-   Edit the target entity controlled information

-   Change the status of the accounting periods

-   Close the accounting periods

-   Run trial balances

-   Generate journal entries


Each target entity can manage its received accounting periods independent of the other target entities. You can perform the supported operations in a target entity without affecting the other entities.
