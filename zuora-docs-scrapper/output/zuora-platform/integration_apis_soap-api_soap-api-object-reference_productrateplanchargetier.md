---
title: "ProductRatePlanChargeTier"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplanchargetier"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:01.669Z"
---

# ProductRatePlanChargeTier

Use the ProductRatePlanChargeTier object to represent a tier of charges in a ProductRatePlanCharge object.

A product rate plan charge tier holds the prices for a product rate plan charge. Each product rate plan charge has at least one tier associated with it.

Don't confuse a product rate plan charge tier with tiered pricing. Tiered pricing is a charge model in which you create different charges or tiers for different quantites of an item. The tiers of usage fees in the Product: Family Plan example diagram represented tiered pricing. Each product rate plan charge in the diagram has at least one tier.

![Sample product rate plan charge tier diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/41efc48f-c911-4b01-a3bb-285ad903e0e1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxZWZjNDhmLWM5MTEtNGIwMS1hM2JiLTI4NWFkOTAzZTBlMSIsImV4cCI6MTc3MTU1ODEzNSwianRpIjoiMWRlOWRkN2Q5MjAwNGYzMjg1OTM5ODVjNDQwNGU3ZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vK_0JhjdTD5bkKWIqVY915tmT0Y-BdVRNYcnQWpbpr8)

## Supported calls

You can use this object with the following calls:

-   create() (WSDL 22.0+)

-   query()

-   update()


## Limitations

You can't create a ProductRatePlanChargeTier object independently of an associated ProductRatePlanCharge object.

You can use only one of the following fields in an API query of the ProductRatePlanChargeTier object:

-   Price

-   DiscountAmount

-   DiscountPercentage


The following is a query that will result in an error:

select id, discountPercentage, price from ProductRatePlanChargeTier where ProductRatePlanChargeId = '402892a338501b82013850ca211f002c'

The following `INVALID_VALUE` error message:

`Can only use Price or DiscountAmount or DiscountPercentage in one ProductRatePlanChargeTier query.`

## Walkthroughs and use cases

Here are some common ways to use this object:

-   Set up a tiered pricing charge model

-   Create a charge

-   Update a product rate plan charge tier
