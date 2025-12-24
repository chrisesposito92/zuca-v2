---
title: "RatePlanChargeData"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/rateplanchargedata"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:28.923Z"
---

# RatePlanChargeData

The RatePlanChargeData object is used to pass complex data to the subscribe() call.

Each RatePlanChargeData object identifies one [RatePlanCharge](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplancharge) object and a list of one or more [RatePlanChargeTiers](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplanchargetier).

The [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call does not require you to include RatePlanChargeData. Use this to override the price, override the description, or set quantities.

## Supported Calls

This object supports the [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call.

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| RatePlanCharge | Yes | An object of type RatePlanCharge | A single RatePlanCharge. If you are not working with volume or tiered pricing model (such as Flat Fee and Per Unit), can override the price and set quantity with the RatePlanCharge object.Allowable values: A valid RatePlanCharge (specified by a ProductRatePlanChargeId) that corresponds to an active product or rate plan charge. |
| RatePlanChargeTier | No | An array of RatePlanChargeTier objects | Only valid for tiered and volume pricing models. You only need to pass in the tiers whose price you want to override. Specify the tier and price, such as Tier=2 and Price=$4.99, Tier=3 and Price $3.99. You cannot override the starting units, endings units or price format.Allowable values: An array of RatePlanChargeTier that belongs to the RatePlanCharge. |

## Example

The following is an example of a rate plan that overrides the price of one rate plan charge.

<ns1:RatePlanChargeData> <ns1:RatePlanCharge xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:RatePlanCharge"\> <!--- Specify the product rate plan charge and the quantity being purchased--> <ns2:ProductRatePlanChargeId>ff808181227d1cdb01227d1d571b004a</ns2:ProductRatePlanChargeId> <ns2:Quantity>19</ns2:Quantity> </ns1:RatePlanCharge> <!--- Specify any of the tiers by the tier #, override the price--> <!--- Any of the tiers not specified will be kept the same as outlined in product catalog--> <!--- In this example, tier 1 is not changed, so it will use its default settings in the product catalgo--> <ns1:RatePlanChargeTier xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:RatePlanChargeTier"\> <ns2:Price>6.99</ns2:Price> <ns2:Tier>2</ns2:Tier> </ns1:RatePlanChargeTier> <ns1:RatePlanChargeTier xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:RatePlanChargeTier"\> <ns2:Price>5.99</ns2:Price> <ns2:Tier>3</ns2:Tier> </ns1:RatePlanChargeTier> </ns1:RatePlanChargeData> </ns1:RatePlanData>
