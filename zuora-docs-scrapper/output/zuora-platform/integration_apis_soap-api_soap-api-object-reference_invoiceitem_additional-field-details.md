---
title: "Additional field details"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceitem/additional-field-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:43.627Z"
---

# Additional field details

Additional details of the fields of the InvoiceItem object.

## ChargeId

The ID of the rate plan charge that is associated with this invoice item upon object creation. When an InvoiceItem object is created, the object reference ID of its associated RatePlanCharge object is stored in both ChargeId and RatePlanChargeId fields.

When an amendment is performed, the value of `RatePlanChargeId` can change to point to a different RatePlanCharge object. `ChargeId` is protected from changes by amendments, and will always refer to the original RatePlanCharge object.

Note:

Zuora recommends that you use ChargeId instead of RatePlanChargeId when obtaining charge data from InvoiceItem.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the InvoiceItem object is `InvoiceItemId` .
