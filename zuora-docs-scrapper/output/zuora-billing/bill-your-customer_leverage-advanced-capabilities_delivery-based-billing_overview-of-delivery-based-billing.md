---
title: "Overview of Delivery-based Billing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/overview-of-delivery-based-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:06.547Z"
---

# Overview of Delivery-based Billing

The Delivery-based Billing feature includes the Delivery Pricing charge model and Delivery Adjustments, available for tenants with Orders or Orders Harmonization enabled.

The Delivery-based Billing feature comprises the Delivery Pricing charge model and Delivery Adjustments .

You can use the Delivery-based Billing feature with the Percentage Discount , Scheduled orders , Flexible Billing , and Prevent over-crediting features and functions to customize your billing solutions.

## Feature Availability

The Delivery Pricing charge model and Delivery Adjustments feature are available only for tenants with Orders or Orders Harmonization enabled.

To access the Delivery Pricing charge model, enable the charge model in Billing Settings. For information, see Enable charge types and charge models .

## Key concepts

To get an overall understanding of the Delivery-based billing feature, keep the following key concepts in mind:

-   Delivery Pricing charge model: The delivery pricing charge model applies only to recurring charges. In this model, you define a single list price per delivery and specify a delivery schedule that indicates the frequency of the delivery. Zuora Billing will use the list price per delivery and the specified delivery schedule to calculate the total charge for a billing period. This charge model is used to bill your end customers in advance for a termed subscription that includes goods delivered on a recurring basis. For more information, see Delivery Pricing charge model .

-   Delivery Adjustments: Delivery Adjustments are used for handling end customer delivery complaints for the Delivery Pricing charge model. The Delivery Adjustments feature is only available to the delivery pricing recurring charge with Billing Timing as Billing in Advance . For more information, see Delivery Adjustments .


## Work with other features

The following diagram lists the Delivery-based Billing standard and advanced use cases where you can use the Delivery Pricing charge model and Delivery Adjustments feature with other features and functions.

![delivery-based billing use cases](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a2c0fa8b-78c8-4dee-aa63-262cbdabe890?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEyYzBmYThiLTc4YzgtNGRlZS1hYTYzLTI2MmNiZGFiZTg5MCIsImV4cCI6MTc2NjY1MTk0NCwianRpIjoiMDhhOTdkOTFjYjY0NGI4NWEwNDIzMDI2YTI5MDdjY2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q-QILzZ_7fG2dSXiiUcEUQzHemWoKfhdBh8w1PtQk4Y) In the Delivery-based Billing standard use case, you can apply a percentage discount and delivery adjustment to a delivery pricing charge. For more information, see Delivery-based billing standard use case .

In the Delivery-based Billing advanced use case, you complete the following tasks:

-   Apply a percentage discount to a delivery pricing charge. For more information, see Percentage Discount .
-   Schedule a change to the delivery pricing charge with scheduled orders and the Flexible Billing feature. For more information, see Scheduled orders and Flexible Billing .
-   Enable a billing setting to prevent over-crediting for the delivery pricing charge. For more information, see Prevent over-crediting .

You can also enable the Order to Revenue feature for revenue recognition.

Note:

If your tenant has the Order to Revenue feature enabled, the delivery pricing charge does not support the following settings:

-   Tax inclusive tax mode
-   Evergreen subscriptions
