---
title: "Configurations for shared products in target entities"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/configurations-for-shared-products-in-target-entities"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:40.937Z"
---

# Configurations for shared products in target entities

Learn how to configure settings for shared products in target entities.

Before sharing products or updating the shared products, you must configure certain settings in the target entities. Zuora only allows you to share products if the configurations of the shared products in the source entity and the target entity are consistent. Also, you can update the source entity controlled information of the shared products after sharing. Only the changes that have the related settings and features configured in the target entities can be shared.

Perform the following configurations that are related to the shared products in target entities:

-   Configure the settings, such as taxation codes, charge types or models, and revenue recognition codes.

-   Get the features enabled from [Zuora Global Support](https://www.zuora.com/support-center/) , such as usage rating by groups , prepayment .


For example, the discount charge type is enabled in the source entity but it is not enabled in the target entity. You must enable the discount charge type in the target entity before sharing the product.

## Product Feature Configuration

Product features can be shared with the target entities based on the feature codes. If the target entity has the same feature codes with the shared product in the source entity, the product features with these feature codes are synchronized to the target entity. You need to enable certain settings to get the product feature available.

See Manage Product Features for more information.

## Custom Field Configuration

You can share custom fields of the shared products with the target entities. The settings of the custom fields, such as field name and type in the target entities must be consistent with the settings in the source entity. You cannot delete a custom field while it is shared with sub-entities.

See How do I use custom fields? for more information about custom field configuration.
