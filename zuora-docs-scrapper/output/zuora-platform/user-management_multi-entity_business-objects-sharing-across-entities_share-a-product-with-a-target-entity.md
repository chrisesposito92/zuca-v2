---
title: "Share a product with a target entity"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/business-objects-sharing-across-entities/share-a-product-with-a-target-entity"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:07.985Z"
---

# Share a product with a target entity

Learn how to share products with a target entity in Zuora using the Zuora UI or REST API.

You can create a product in the source entity and then share them with the target entities. Currently, only the global entity can be the source entity to share products with the other entities.

1.  Set up a connection from a source entity to a target entity.
2.  Set the prefix for SKU to be unique across all entities.

    For example, set GLOBAL- as the SKU prefix for the global entity and set UK- as the SKU prefix for the UK entity.

3.  Customize currencies in the source entity.
4.  Create products, product rate plans, and product rate plan charges in the source entity. You must specify a price for each currency type in the product rate plan charge and then activate all the currencies for the product rate plans.

    Note that if you are using the Rolling Window overage smoothing charge model and enabled the following options when creating or updating charges:

    -   Apply overage as soon as it occurs
    -   Credit unused units at rate of

    You need to specify the prices for all the currency types that are specified in the List Price field. If you activate other currency types later, you also need to specify the prices for the newly activated currencies in the Credit unused units at rate of field. This should be applied for both the source entity and target entities.

5.  Configure the settings and enable the features that are related to the shared products in the target entity. See Configurations for Sharing in Target Entities.
6.  Configure Product Attribute Control Setting.

If you use the same tenant user, which created the connection between the source and target entities, to share products, ensure this account meets the following requirements in both the source and target entities:

-   This account has the Manage Product Catalog billing permission.
-   If you have the Data Access Control feature enabled, assign the Top Level tag to this account. For more information, see Data Access Control.Note that an account has the Top Level tag by default if you do not assign a specific tag.

If you use a different tenant user to share products, ensure both this user and the one who created the connection meet these requirements in both the source and target entities.

Note: If the currency for the rate plan is not activated, the value in the price for the currency will not be shared with the target entity. Instead, the information in the default currency is shown for other currencies in the target entity.

You can only share a product with one entity at a time.

To share products with a target entity from the Zuora UI:

1.  Log in as a source entity administrator.
2.  Navigate to the entity from the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) .
3.  Go to Products > Product Catalog .
4.  Click the products you want to share with from the product list.
5.  On the product detail page, click share .
6.  In the Share this product to other Entities dialog, select the check box next to the target entity. You can only share products to the entities that are connected with you. All the other entities that are not connected with you are grayed out.
7.  Click save .

To share a product with a target entity from REST API, see Share a [Product with an Entity](https://developer.zuora.com/v1-api-reference/older-api/operation/POST_Catalog/).
