---
title: "ProductRatePlanCharge"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:13.342Z"
---

# ProductRatePlanCharge

A product rate plan charge represents a charge model or a set of fees associated with a product rate plan.

## About the ProductRatePlanCharge object

A product rate plan charge represents a charge model or a set of fees associated with a product rate plan, which is the part of a product that your customers subscribe to. Each product rate plan can have multiple product rate plan charges.

Do not confuse a product rate plan charge with a rate plan charge. A product rate plan charge is a charge that's part of a product in your product catalog. A rate plan charge is the specific charge in a subscription.

Use the ProductRatePlanCharge object to define the charges for the ProductRatePlan objects that customers subscribe to.

Product rate plan charges can be of three types: one-time fees, recurring fees, and usage fees. For example, the $50 activation fee for the Topaz product rate plan is a one-time product rate plan charge.

![Diagram of the ProductRatePlan Object and Fields](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/90e37902-c0bd-4db5-b6f6-ca849107e0a8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkwZTM3OTAyLWMwYmQtNGRiNS1iNmY2LWNhODQ5MTA3ZTBhOCIsImV4cCI6MTc2NjY0MTM5MSwianRpIjoiMzQ1NjUwZjdjOWVjNDgwMmI4Zjc0ZjU1NWVkODQxZWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oLDyZCRnMeaGIpNZOp5RfY1nZyYDzSRfoOUCEj5qgMk)

For more information on this example, review the [Product](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product) object.

The set of {Product objects, ProductRatePlan objects, ProductRatePlanCharge objects} is a defined set of products that a company sells, such as in the Family Plan example.

## Supported calls

You can use this object with the following calls:

-   create() (WSDL version 22.0+)

-   query()

-   update()

-   delete()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Set up an activation fee for a product rate plan

-   Apply multiple discount charges

-   Total charges inclusive of taxes
