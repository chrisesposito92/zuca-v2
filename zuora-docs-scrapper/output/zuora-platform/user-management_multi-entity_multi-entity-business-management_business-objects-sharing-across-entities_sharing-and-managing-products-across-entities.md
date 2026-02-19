---
title: "Sharing and managing products across entities"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/sharing-and-managing-products-across-entities"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:41.175Z"
---

# Sharing and managing products across entities

This guide explains how to share and manage products across multiple entities using Zuora.

Multi-entity allows you to define products in the source entity and then share them with target entities. Zuora synchronizes the shared products to each target entities after sharing. The target entities can edit certain information of the shared products or perform certain operations for the shared products. Currently, only the global entity can share products with the other entities.

To share products across entities, you must be assigned the API Write Access platform permission. See User Roles for more information.

## Products Sharing in the Source Entity

After you followed the [procedures](/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/share-a-product-with-a-target-entity) to share a product with a target entity, the following information of the shared product is automatically synchronized to the target entity:

-   Product information

-   Product rate plans

-   Product rate plan charges


Zuora synchronizes the prices of the shared products to the target entities based on the currency types. The price can be shared with a target entity if the following conditions are all met:

-   The currency type of the shared products is activated in the source entity

-   A price is specified with this currency type in the source entity

-   This currency type is also activated in the target entity


You can also activate currency types of the shared products after sharing:

-   Activate currency types in the source entity: The prices are then synchronized to the target entities that have the same currency types activated.

-   Activate currency types in the target entity: If the shared products contain the prices with these currency types, the prices are then synchronized to the target entity.


For example, in a source entity, you activate the US Dollar, Euro, and Pound Sterling currency types of the shared products. In a target entity, you only activate the Euro currency type. When you share products with the target entity, only the price with the Euro currency type is synchronized to the target entity. You can activate the Pound Sterling currency type in the target entity later. The price with the Pound Sterling currency type is then synchronized to the target entity.

## Management of the Shared Products in the Source Entity

After sharing the products, you can create custom fields on the shared products in the source entity, but you are not allowed to do the following operations for the shared products:

-   Change the billing timing

-   Change the charge model

-   Remove the shared products, product rate plans, or product rate plan charges


You can update the shared products in the source entity after sharing in the following ways:

-   Create product rate plans

-   Create product rate plan charges

-   Edit certain information of the shared products that are controlled by the source entity


All the updates are automatically synchronized to the target entities.

All the settings and features that are related to the updates of the shared products in the target entity must be consistent with the ones in the source entity. For example, after sharing the product, you change the UOM value of the shared product to Each in the source entity. The UOM update will not be synchronized to the target entity if the Each unit is not activated in the target entity. See [Configurations for Sharing in Target Entities](/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/configurations-for-shared-products-in-target-entities) for more information.

If you configure the related setting or get the feature enabled after updating the shared products in the source entity, the updates are still not synchronized to the target entity. To synchronize the missing shared information to the target entity, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).

## Data Control on the Shared Products

After sharing products with other entities, you can configure how data is controlled on the shared products in the Product Attribute Control Level Setup setting from the Zuora UI. You can only configure this setting in the global entity.

To apply the control setting to your shared products, you must configure this setting before sharing the products. The setting is applied to all the shared products and all the entities in the entity hierarchy. If you change the setting later, the new setting is then applied to all the shared products. The new setting can only be applied to the product updates that are after the setting configuration. All the product updates that are before the setting configuration will not be applied.

For example,

1.  The product category of a shared product is controlled by the target entity.
2.  After sharing the product, change the product category in the source entity.
3.  Change the control level of the product category to the source entity.

The change of the product category in the source entity is not synchronized to the target entity. Because the change of the product category is before the control level change. If you update the product category after the control level change, the update in the source entity is synchronized to the target entity.

This setting allows you to configure the product attributes control in the following product levels:

-   Product
-   Product Rate Plan
-   Product Rate Plan Charge
-   Product Rate Plan Charge Tier

Two options of the control level are provided in the setting. Either the source entity or the target entity can control the shared product attributes. The following product attributes can only be controlled by the source entity:

-   Product Rate Plan Charge: Charge Type
-   Product Rate Plan Charge: Charge Model
-   Product Rate Plan Charge: Billing Timing
-   Product Rate Plan Charge Tier: Currency

You can configure the control level for all the other product attributes based on your requirements.

By default:

-   SKU is controlled by the source entity.
-   All the other product attributes are controlled by the target entity.

For more information about how data is controlled on the shared products, see [Data Control on Shared Objects](https://knowledgecenter.zuora.com/Zuora_Platform/User_Management/Multi-entity/C_Business_Objects_Sharing_Across_Entities#Data_Control_on_Shared_Objects). For more information about how to configure the Product Attribute Control Level Setup setting, see [Configure Product Attribute Control Setting](https://knowledgecenter.zuora.com/Zuora_Platform/User_Management/Multi-entity/C_Business_Objects_Sharing_Across_Entities/Configure_Product_Attribute_Control_Setting).

## Product Attribute Control Groups

The settings of some product attributes are related to each other. So the control level of the correlated product attributes must be consistent. For example, if the product effective start date is controlled by the source entity, the product effective end date must be controlled by the source entity too.

The following table shows the correlated product attributes in groups. You must set the same control level for each group. An error message is displayed if the product attributes in a group are set to different control levels.

| Group | Product Level | Attribute Name |
| --- | --- | --- |
| Product effective start and end dates | Product | Effective End DateEffective Start Date |
| Product rate plan effective start and end dates | Product Rate Plan | Effective End DateEffective Start Date |
| Billing cycle type and date | Product Rate Plan Charge | Bill Cycle DayBill Cycle TypeWeekly Bill Cycle Day |
| Billing period | Product Rate Plan Charge | Billing PeriodSpecific Billing Period |
| End date condition | Product Rate Plan Charge | End Date ConditionUp To How Many PeriodsUp To Periods Type |
| Price change | Product Rate Plan Charge | Price Change OptionPrice Increase OptionPrice Increase PercentageUse Tenant Default For Price Change |
| Taxation | Product Rate Plan Charge | Tax CodeTax ModeTaxable |
| Overage Smoothing | Product Rate Plan Charge | Smoothing ModelNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionUnused Included Unit Price |
| Charge tier unit | Product Rate Plan Charge Tier | Ending UnitIncluded UnitsStarting Unit |

## Management of Shared Products in Target Entities

In each target entity, you can see the shared products are displayed in the product list in Product > Product Catalog in the left-hand navigation section.

You can do the following operations for the received products:

-   Clone

-   Export

-   Create custom fields

-   Create subscriptions

-   Create subscription amendments, such as changing the price of the received product.

-   Edit the target entity controlled information

-   Deactivate the currencies for the rate plans


But you are not allowed to do the following operations for the received products:

-   Delete

-   Edit the source entity controlled information


Each target entity can manage its received products independent of the other subscriber entities. You can perform the supported operations in a target entity without affecting the other entities.
