---
title: "Additional field details of InvoiceAdjustment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceadjustment/additional-field-details-of-invoiceadjustment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:29.165Z"
---

# Additional field details of InvoiceAdjustment

Additional details of the fields of the InvoiceAdjustment object.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `InvoiceAdjustment` object is `InvoiceAdjustmentId` .

## Type

Indicates whether the adjustment credits or debits the invoice amount. Set the value to `Credit` to create a credit memo, which gives a credit on the invoice balance or lowers its total. Set the value to `Charge` to create a debit memo, which increases the balance.
