---
title: "RatePlanData"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/rateplandata"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:31.544Z"
---

# RatePlanData

The RatePlanData object is used to pass complex data to the subscribe() call.

Each RatePlanData identifies one [RatePlan](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplan) object and a list of one or more [RatePlanChargeData](/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/rateplanchargedata) objects.

## Supported Calls

RatePlanData supports the [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call.

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| RatePlan | Yes | An object of type RatePlan | A single RatePlan.Allowable values: A valid RatePlan (specified by a ProductRatePlanId that corresponds to an active product/rate plan). |
| RatePlanCharge | No | An object of type RatePlanCharge | A list of one or more RatePlanCharge objects.Valid through API 8.0. Deprecated in version 9.0.Allowable values: A valid RatePlanCharge. |
| RatePlanChargeData | No | An array of RatePlanChargeData objects | RatePlanChargeData is a wrapper object that groups a RatePlanCharge and its corresponding RatePlanChargeTiers. Pass this only if you are overriding pricing information. You only need to pass in RatePlanChargeTiers if you are using a tiered or volume based pricing model and you want to override the prices for the various tiers.This field is valid in version 9.0+ of the API.Allowable values: An array of RatePlanChargeData that belong the RatePlan. |
| SubscriptionProductFeatureList | No | An object type of SubscriptionProductFeatureList | A list of subscription product features for the subscription.This field is valid in version 58+ of the SOAP API with the Entitlements setting enabled for the tenant. |

## Examples

The following is an example of a rate plan that uses all the default values from the product catalog. This example is valid for all versions of API.

<!--- from subscribe() call --> <ns2:RatePlanData> <ns2:RatePlan> <ns1:ProductRatePlanId>4028e6991f863ecb011fb8b7904141a6</ns1:ProductRatePlanId> </ns2:RatePlan> </ns2:RatePlanData>

The following is an example of a rate plan that overrides the name and the price of one rate plan charge. This example is valid in versions 9.0+ of the API.

<!--- from subscribe() call --> <ns1:RatePlanData> <ns1:RatePlan xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:RatePlan"\> <!--- Specify the rate plan --> <ns2:ProductRatePlanId>ff808181227d1cdb01227d1d54100048</ns2:ProductRatePlanId> </ns1:RatePlan> <ns1:RatePlanChargeData> <ns1:RatePlanCharge xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:RatePlanCharge"\> <ns2:Name>\_Recurring\_Tiered\_</ns2:Name> <!--- Specify the rate plan charge and the quantity being purchased--> <ns2:ProductRatePlanChargeId>ff808181227d1cdb01227d1d571b004a</ns2:ProductRatePlanChargeId> <ns2:Quantity>19</ns2:Quantity> </ns1:RatePlanCharge> <!--- Specify any of the tiers by the tier #, override the price--> <!--- Any of the tiers not specified will be kept the same as outlined in product catalog--> <ns1:RatePlanChargeTier xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:RatePlanChargeTier"\> <ns2:Price>6.99</ns2:Price> <ns2:Tier>2</ns2:Tier> </ns1:RatePlanChargeTier> </ns1:RatePlanChargeData> </ns1:RatePlanData>

The following is an example of a rate plan that overrides the name and the price of one rate plan charge. This example is valid only in versions 5.0-8.0 of the API.

<!--- from subscribe() call --> <ns2:RatePlanData> <!--- Specify the rate plan --> <ns2:RatePlan> <ns1:ProductRatePlanId>4028e4852087296d0120d9373d807171</ns1:ProductRatePlanId> </ns2:RatePlan> <!--- Override the name, and specify which charge it is --> <ns2:RatePlanCharge> <ns1:ProductRatePlanChargeId>4028e4852087296d0120d9380e2c7177</ns1:ProductRatePlanChargeId> </ns2:RatePlanCharge> </ns2:RatePlanData>
