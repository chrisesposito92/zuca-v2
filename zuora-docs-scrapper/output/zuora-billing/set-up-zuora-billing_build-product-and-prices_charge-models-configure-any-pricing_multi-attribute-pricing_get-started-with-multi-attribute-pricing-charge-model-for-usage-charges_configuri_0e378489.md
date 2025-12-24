---
title: "Configuring a multi-attribute pricing charge model"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/get-started-with-multi-attribute-pricing-charge-model-for-usage-charges/configuring-a-multi-attribute-pricing-charge-model"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:13.210Z"
---

# Configuring a multi-attribute pricing charge model

Demonstrates configuring a Multi-Attribute Pricing charge model for a car rental company, focusing on creating custom fields, defining custom objects, and generating usage records.

The following guide provides an example configuration of a Multi-Attribute Pricing charge model, by creating custom fields, defining custom objects, and then creating usage records with the custom fields. In this example, a car rental company wants to charge its registered users based on vehicle type and rental location. To achieve this goal, the company has to go through the following steps:

1.  Create custom fields for the Usage object
2.  Create a custom object with multi-attribute data
    1.  Create a custom object as the lookup table definition
    2.  Add records to the lookup table
3.  Create product rate plan charges and subscriptions
4.  Create usage records with the Usage custom fields
5.  View the status and details of the created usage records

    The example lookup table used by the car rental company is as follows:

    | type | state | price multiplier |
    | --- | --- | --- |
    | compact | California | 2 |
    | compact | New York | 3 |
    | full-size | California | 3 |
    | full-size | New York | 4 |

    The actual car rental price for each usage record is calculated based on the following prototype formula (the actual Price Formula will be different): `Usage Quantity * Price Multiplier`

    See Price Formula Reference for more information.
