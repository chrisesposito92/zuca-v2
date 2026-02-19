---
title: "InvoiceAdjustment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceadjustment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:29.316Z"
---

# InvoiceAdjustment

Describes the InvoiceAdjustment SOAP API object.

Note:

Invoice Adjustment is deprecated on Production in WSDL version 64.0. Zuora recommends that you use the Invoice Item Adjustment to adjust invoices. If you have the Invoice Settlement feature enabled, this object is deprecated and only available for backward compatibility.

An invoice adjustment modifies an existing invoice. You use an invoice adjustment to change the entire invoice. For example, you can apply a late fee to the invoice balance.

An invoice adjustment differs from an invoice item adjustment. An invoice item adjustment affects an individual charge or line item on an invoice. An invoice adjustment affects the invoice at the header-level.

Both adjustments can affect the invoice balance.

These are the characteristics of an invoice item adjustment:

-   Always for a charge in an invoice

-   Tied to all accounting and revenue recognition information associated with the charge

-   Only one invoice item adjustment to one charge

-   Named with prefix, IILA-


These are the characteristics of an invoice adjustment:

-   Always for an invoice

-   Only on accounting code for an invoice

-   Multiple adjustments to one invoice

-   Named with prefix, IA-


Use the `InvoiceAdjustment` object to apply an adjustment to an `Invoice` object.

## Supported calls

You can use this object with the following calls:

-   create() (WSDL 24.0+)

-   query()

-   update() (WSDL 24.0+)

-   delete() (WSDL 24.0+)
