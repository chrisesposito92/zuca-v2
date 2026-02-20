---
title: "Create product rate plan charges and subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/create-product-rate-plan-charges-and-subscriptions"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:39.028Z"
---

# Create product rate plan charges and subscriptions

Create product rate plan charges and subscriptions using the Multi-Attribute Pricing charge model.

Note:

The Multi-Attribute Pricing charge model for one-time and recurring charges is available to all customers.

After the lookup table is defined, you can start creating product rate plan charges and subscriptions.

To create product rate plan charges and subscriptions, complete the following steps:

1.  Create a product in the [product catalog](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-a-product-in-product-catalog) through the Zuora UI or by calling the [CRUD: Create product operation](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProduct/).
2.  Create a [product rate plan](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/set-effective-start-dates-and-end-dates) for the product through the Zuora UI or by calling the [CRUD: Create product rate plan](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlan/) operation.
3.  Navigate to the product rate plan that you want to edit.
4.  Within the product rate plan, click \+ add new under Usage Charges/UOM .
5.  On the New Component (Usage) dialog that is displayed, configure the following fields to create a new usage charge with the Multi-Attribute Pricing charge model:
    1.  In the Charge Name field, enter the name of the new usage charge. In this scenario, enter CarRental Pricing .
    2.  In the Charge Amount area, select Multi-Attribute Pricing from the Charge Model list.
    3.  From the UOM list, select Each .
    4.  In the Price Formula field, enter ( use the [Price Formula Reference](/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/price-formula-for-multi-attribute-pricing-charge-model)): usageQuantity() \* objectLookup("CarRental", "multiplier\_\_c", \["type\_\_c"= fieldLookup("usage.type\_\_c"), "state\_\_c"= fieldLookup("usage.state\_\_c")\])
    5.  In the Timing of Charge area, configure the desired charge timing information.
6.  Click save to save the usage charge configurations.
7.  [Create a subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions) to subscribe to the usage charge.

The subscription associated with the predefined multi-attribute lookup table is created.
