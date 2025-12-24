---
title: "Product"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:50.229Z"
---

# Product

A product is an item or service that your company sells.

In the subscription economy, a product is generally a service that your customers subscribe to rather than a physical item that they purchase one time. For example, customers subscribe to a service that provides them a car when and where they need a car rather than buying a car outright.

A Product object contains all of the items in a specific product, especially product rate plans and product rate plan charges. Each Product object can have multiple rate plans, which in turn can each have multiple rate plan charges. Each rate plan charge can have multiple tiers. Taken together, all of these items create a single product.

Customers subscribe to products that are in your product catalog. Product objects collectively compose your product catalog. You create your product catalog by creating products. As soon as you create your first product, you create your product catalog.

You use the Product object to identify what is in the product catalog, and to identify the product rate plan ID that you need for a subscribe() call to create a subscription.

The set of {Product objects, ProductRatePlan objects, ProductRatePlanCharge objects} is a defined set of products that a company sells, such as in the example, Family Plan, Topaz level.

The set of {Subscription object, ProductRatePlan objects, ProductRatePlanCharge objects} is an instance of a product with defined quantites, such as five-member Family Plan, Topaz level.

## Example

A cell phone family calling plan is a single product called Family Plan with the following characteristics:

-   Three rate plans

    -   Topaz: 500-minute rate plan

    -   Ruby: 800-minute rate plan

    -   Diamond: 1000-minute rate plan

-   Each rate plan has three rate plan charges

    -   One-time fees

    -   Monthly fees

    -   Usage fees

-   The rate plan charge for usage fees has rate plan charge tiers

    -   Topaz usage fees

        -   1-200 overage minutes: 60¢ per minute

        -   201-400 overage minutes: 30¢ per minute

        -   401+ overage minutes: 15¢ per minute

    -   Ruby usage fees

        -   1-200 overage minutes: 40¢ per minute

        -   201-400 overage minutes: 20¢ per minute

        -   401+ overage minutes: 10¢ per minute

    -   Diamond usage fees

        -   1-200 overage minutes: 20¢ per minute

        -   201-400 overage minutes: 10¢ per minute

        -   401+ overage minutes: 5¢ per minute


![product-diagram.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e49adc27-8900-4fbb-9340-d309c7a0de6a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU0OWFkYzI3LTg5MDAtNGZiYi05MzQwLWQzMDljN2EwZGU2YSIsImV4cCI6MTc2NjY0MTM2OCwianRpIjoiMWEyOTg0MjM2ZWMzNDE4YWIxNTdkMDEyZGU5MWIzM2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.I2umN_L6Kth_zpE45LcRiIJ7e6gS9E_sR7Z6hU905n8)

## Supported Calls

You can use this object with the following calls:

-   create()

-   query()

-   update()

-   delete()


## Additional field details

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `Product` object is `ProductId` .

SKU

The unique SKU for the product. If you don't supply a value, then Zuora sets the value automatically. Zuora starts with the value, SKU-00000001, and increments each time a product is created with no specified SKU field value.
