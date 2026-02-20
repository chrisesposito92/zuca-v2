---
title: "ProductRatePlan"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplan"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:18.899Z"
---

# ProductRatePlan

Use the ProductRatePlan object to define the services that make up the Product objects that can be associated with Subscription objects.

A product rate plan is the part of a product that your customers subscribe to. Each product can have multiple product rate plans, and each product rate plan can have multiple product rate plan charges, which are fees for products and their product rate plans.

Don't confuse a product rate plan and a rate plan. A product rate plan is a rate plan that's part of a product in your product catalog. A rate plan is the specific rate plan in a subscription.

Topaz, Ruby, and Diamond are examples of product rate plans in the following diagram:

![Sample product rate plan diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/41efc48f-c911-4b01-a3bb-285ad903e0e1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxZWZjNDhmLWM5MTEtNGIwMS1hM2JiLTI4NWFkOTAzZTBlMSIsImV4cCI6MTc3MTcwODE1NywianRpIjoiZjE5YzZhZDMxOGQyNDcyM2I3ZWMwOGMyNWE3ZDM3ZmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.3dZyik5jzToqi-Hb5F8zu6jn-jtJ8tttLZjPJsNxaa4)

For more information on this example, review the Product object.

The set of {Product objects, ProductRatePlan objects, ProductRatePlanCharge objects} is a defined set of products that a company sells, such as in the example, Family Plan, Topaz level.

## Supported calls

You can use this object with the following calls:

-   delete()

-   create()

-   query()

-   update()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Add a product rate plan to a product.

-   Modify a product rate plan in a product.

-   Subscribe customers to different product rate plans in the same product,
