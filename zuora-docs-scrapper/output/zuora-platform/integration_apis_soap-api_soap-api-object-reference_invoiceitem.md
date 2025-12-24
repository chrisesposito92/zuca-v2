---
title: "InvoiceItem"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceitem"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:38.558Z"
---

# InvoiceItem

Use the InvoiceItem object to manage charges in an Invoice object.

An invoice item is an individual line item in an invoice. Invoice items are charges, such as a monthly recurring charge.

## Supported calls

You can use this object with the following call:

-   query()

-   update(): Only custom fields on posted invoices are updatable.


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Apply a discount to an invoice item

-   Change the taxes for an invoice item


You don't typically use this object itself to perform actions. Instead, you use this object with another object, such as the InvoiceItemAdjustment object.
