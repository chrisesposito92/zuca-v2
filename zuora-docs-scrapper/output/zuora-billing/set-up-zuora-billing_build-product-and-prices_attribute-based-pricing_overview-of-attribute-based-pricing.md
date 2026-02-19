---
title: "Overview of attribute-based pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/overview-of-attribute-based-pricing"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:48.511Z"
---

# Overview of attribute-based pricing

The Attribute-based Pricing (ABP) feature in Zuora offers flexibility for complex business needs by refining pricing based on customer context, while maintaining existing product catalog integrity.

Pricing has become increasingly complex nowadays. To stay competitive in the market, most B2C and B2B businesses need to refine their pricing based on the context of their customers and subscribers. The context can be sourced in from the country where the customer is from, the franchise they are buying from, the currency they are buying in, or the payment term they want to sign up for.

The current Zuora product catalog has powered the monetization strategies of subscription and non-subscription-based products. To provide the required flexibility to increasingly complex business needs and market trends in recent years, Zuora now provides the Attribute-based Pricing (ABP) feature. This new feature will help migrate the administration overhead that leads to needing a longer time for a product to go to the market. It can also ease the development work of integrating the Zuora product catalog with external systems.

To use the Attribute-based Pricing (ABP) feature, you must have either Orders or Orders Harmonization enabled.

Note:

Attribute-Based Pricing is planned for deprecation and is no longer recommended for new implementations. We do not recommend adopting this approach going forward. For guidance on supported alternatives, such as the Enhanced Dynamic Pricing framework, please reach out to your Zuora representative.

## Supported charge models

The Attribute-based Pricing feature supports the rate plan charges on the following charge models:

-   Flat Fee

-   Per Unit

-   Tiered Pricing

-   Volume Pricing

-   Discount - Fixed Amount

-   Discount - Percentage

-   Delivery Pricing


Note:

We are actively soliciting feedback during the Early Adopter phase. If you are interested in using a Zuora charge model that is not listed above, contact your Zuora account team.

## Attribute-based Pricing object model

The Attribute-based Pricing feature adds more objects to the existing Zuora product catalog data model to bring more flexibility to defining price points. Currently, the Product Rate Plan Definition and Product Charge Definition objects are available after this feature is enabled. The following graphic illustrates the relationship between these new objects and other existing product catalog objects.

![ABP-object-model.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b64bc9e3-ba6a-4bd1-9665-8e7803cb86e2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2NGJjOWUzLWJhNmEtNGJkMS05NjY1LThlNzgwM2NiODZlMiIsImV4cCI6MTc3MTU1Njk4NCwianRpIjoiOGEzZDQ5ZGVkMTUzNDE0MDg0YmUwYzI1MjUwMDIxZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.pkqVhgeyFAQqgRHTZOshVNAePjpXUvJ6YE5Hq-kDXLQ)

From the above diagram, you can see that the Product Rate Plan Definition object decouples product rate plans and product rate plan charges after the Attribute-based Pricing feature is enabled. You can use this object to associate product rate plan charges with any existing or new product rate plans.

In the object model with Attribute-based Pricing enabled, one product rate plan charge can have multiple product charge definitions. You use product charge definitions to define the attributes that impact pricing for the charge. The pricing information is stored in the Product Rate Plan Charge Tier object, which is the same as before.

## Impact on existing product catalog

The experience of enabling the Attribute-based Pricing feature for your existing product catalog is seamless. The following things happen to your current product catalog after enabling this feature:

-   The existing products and product rate plans are intact.

-   Existing APIs, data retrieval mechanisms, and subscriptions continue to function as is.

-   One product charge definition is automatically created as default for each product rate plan charge to store its current information about billing, pricing, accounting, and taxation.

-   The product rate plan charge object is updated to store only the basic information such as charge name, charge number, charge type, and charge model.

-   When linked to other product rate plans, the default product charge definition of the linked charge will apply to that product rate plan as well.


After the Attribute-based Pricing feature is enabled, you can do the following to enhance your product catalog:

-   Add more product charge definitions for a single product rate plan charge to have an attribute-based pricing structure, with each charge definition containing different attribute values and pricing.

-   Adopt the changes in the APIs to include product charge definitions.
