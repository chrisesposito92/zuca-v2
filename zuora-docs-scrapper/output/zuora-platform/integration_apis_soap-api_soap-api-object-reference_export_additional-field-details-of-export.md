---
title: "Additional field details of Export"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/export/additional-field-details-of-export"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:12.302Z"
---

# Additional field details of Export

Additional details of the fields of the Export object.

## Encrypted

Exports a secure version of encrypted data source fields. such as the `AchAccountNumber` field of the `PaymentMethod` object and the `DefaultPaymentMethod` data souce objects.

To use this feature, set the `Encrypted` field value to `true` when you create an `Export` object.

Values: true, false

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send a `query()` call to query the import, then you need to include the specific `Export` object's ID with the call.

The ID for the `Export` object is `ExportId` .
