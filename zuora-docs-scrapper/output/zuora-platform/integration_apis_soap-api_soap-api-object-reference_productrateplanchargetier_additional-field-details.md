---
title: "Additional field details"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplanchargetier/additional-field-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:31.202Z"
---

# Additional field details

Additional details of the fields of the ProductRatePlanChargeTier object.

## EndingUnit

The end number of a range of units for the tier. For example, if the tier stipulates 101 - 200 minutes, then the value for the `EndingUnit` field is `200` .

This field is required if `ProductRatePlanCharge.ChargeModel` is `Tiered Pricing` or `Tiered with Overage Pricing`.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `InvoiceItem` object is `InvoiceItemId`.

## StartingUnit

The starting number of a range of units for the tier. For example, if the tier stipulates 101 - 200 minutes, then the value for the `StartingUnit` field is `101` .

This field is required if `ProductRatePlanCharge.ChargeModel` is `Tiered Pricing` or `Tiered with Overage Pricing`.
