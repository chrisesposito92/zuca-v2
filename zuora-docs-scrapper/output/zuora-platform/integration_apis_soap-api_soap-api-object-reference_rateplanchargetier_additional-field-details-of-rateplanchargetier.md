---
title: "Additional field details of RatePlanChargeTier"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplanchargetier/additional-field-details-of-rateplanchargetier"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:17.305Z"
---

# Additional field details of RatePlanChargeTier

Additional details of the fields of the RatePlanChargeTier object.

## EndingUnit

The end number of a range of units for the tier. For example, if the tier stipulates 101 - 200 minutes, then the value for the `EndingUnit` field is `200` .

This field is required if `RatePlanCharge.ChargeModel` is `Tiered Pricing` or `Tiered with Overage Pricing`. Use this field only for tiered pricing models.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the RatePlanChargeTier object is `RatePlanChargeTierId` .

## StartingUnit

The start number of a range of units for the tier. For example, if the tier stipulates 101 - 200 minutes, then the value for the `StartingUnit` field is `101`.

This field is required if `RatePlanCharge.ChargeModel` is `Tiered Pricing` or `Tiered with Overage Pricing`. Use this field only for tiered pricing models.
