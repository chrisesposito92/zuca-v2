---
title: "InvoiceSplitItem"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplititem"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:06.726Z"
---

# InvoiceSplitItem

An invoice split is one of multiple invoices that together formed one original invoice. Splitting a single invoice into multiple invoices lets you offer flexible payment schedules, especially when the original invoice balance is a large sum.

Splitting invoices lets a customer spread out payments for a single invoice across multiple invoices. For example, a customer has an invoice that totals $100,000. You agree to let the customer make four payments spread across multiple billing periods on the invoice. You can split that invoice into four separate invoices, each for a specific percentage of the original amount. These percentages can be any amount that you want to set, as long as the collection of split invoices total 100% of the original invoice. In this example, you can set the first split invoice to 40% ($40,000), then each successive split invoice to 30% ($30,000), 20% ($20,000), and 10% ($10,000).

Use the InvoiceSplitItem object to split an original Invoice object into multiple Invoice objects. Each InvoiceSplitItem object represents a single split invoice. In the example, if you split the original $100,000 invoice into four split invoices, each of those split invoices is an individual InvoiceSplitItem object, which in turn go inside a single InvoiceSplit object.

Use a create() call to create each InvoiceSplitItem object that you need to create multiple invoices from the original invoice. When you are finished creating individual InvoiceSplitItem objects, you use a create() call to collect them into an InvoiceSplit object, then use an execute() call with the InvoiceSplit object to split the original Invoice object into multiple new Invoice objects.

The Invoice must be in draft status before you can split the invoice into multiple invoices. You can't split a posted or canceled invoice.

WSDL version 43.0+ is required to use this object.

## Supported calls

When the `invoiceSplit` field is set to false , which is the default value, the following call is supported:

-   query()


When the `invoiceSplit` field is set to true , the following calls are supported:

-   create()

-   query()

-   update()

-   delete()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Spread an invoice across multiple billing periods by splitting the invoice into multiple invoices

-   Resplit the invoice into a different set of invoices


To walk through these use cases, take a look at Splitting an invoice to use flexible payment terms .
