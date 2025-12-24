---
title: "InvoiceItemAdjustment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceitemadjustment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:46.070Z"
---

# InvoiceItemAdjustment

An invoice item adjustment modifies a specific line item invoice. You use an invoice item adjustment to change a line item's details, such as its taxes or discounts.

Note:

If you have the Invoice Settlement feature enabled, this object is deprecated and only available for backward compatibility.

Adjustments are automatically tied to the accounting code and revenue recognition code that are associated with the item's charge.

These are the characteristics of an invoice item adjustment:

-   Always for a charge in an invoice

-   Tied to all accounting and revenue recognition information associated with the charge

-   Only one invoice item adjustment to one charge

-   Named with the prefix, IILA-


Use the `InvoiceItemAdjustment` object to apply an adjustment to an `InvoiceItem` object in an `Invoice` object.

## Supported calls

You can use this object with the following calls:

-   create() (WSDL 23.0+)

-   query() (WSDL 23.0+)

-   update() (WSDL 23.0+)

-   delete() (WSDL 23.0+)


## Additional Field Detail

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `InvoiceItemAdjustment` object is `InvoiceItemAdjustmentId` .

Type

Indicates whether the adjustment credits or debits the invoice item amount. Set the value to `Credit` to create a credit memo, which gives a credit on the invoice item or lowers its charge. Set the value to `Charge` to create a debit memo, which increases the invoice item's charge.
