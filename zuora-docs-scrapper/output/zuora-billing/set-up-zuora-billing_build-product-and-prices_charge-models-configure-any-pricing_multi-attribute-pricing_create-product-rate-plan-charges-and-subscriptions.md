---
title: "Create product rate plan charges and subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/create-product-rate-plan-charges-and-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:28.542Z"
---

# Create product rate plan charges and subscriptions

Note:

The Multi-Attribute Pricing charge model for one-time and recurring charges is available to all customers.

After the lookup table is defined, you can start creating product rate plan charges and subscriptions.

To create product rate plan charges and subscriptions, complete the following steps:

1.  Create a product in the product catalog through the Zuora UI or by calling the CRUD: Create product operation.
2.  Create a product rate plan for the product through the Zuora UI or by calling the CRUD: Create product rate plan operation.
3.  Navigate to the product rate plan that you want to edit.
4.  Within the product rate plan, click \+ add new under Usage Charges/UOM .
5.  On the New Component (Usage) dialog that is displayed, configure the following fields to create a new usage charge with the Multi-Attribute Pricing charge model:
    1.  In the Charge Name field, enter the name of the new usage charge. In this scenario, enter CarRental Pricing .
    2.  In the Charge Amount area, select Multi-Attribute Pricing from the Charge Model list.
    3.  From the UOM list, select Each .
    4.  In the Price Formula field, enter (please use the Price Formula Reference ): usageQuantity() \* objectLookup("CarRental", "multiplier\_\_c", \["type\_\_c"= fieldLookup("usage.type\_\_c"), "state\_\_c"= fieldLookup("usage.state\_\_c")\])
    5.  In the Timing of Charge area, configure the desired charge timing information.
6.  Click save to save the usage charge configurations.
7.  Create a subscription to subscribe to the usage charge.

The subscription associated with the predefined multi-attribute lookup table is created.
