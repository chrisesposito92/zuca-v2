---
title: "InvoiceSplit"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplit"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:01.443Z"
---

# InvoiceSplit

An invoice split is one of multiple invoices that together formed one original invoice. Splitting a single invoice into multiple invoices lets you offer flexible payment schedules, especially when the original invoice balance is a large sum.

Split invoices lets a customer spread out payments for a single invoice multiple invoices. For example, a customer has an invoice that totals $100,000. You agree to let the customer make four payments spread across multiple billing periods on the invoice. You can split that invoice into four separate invoices, each for a specific percentage of the original amount. These percentages can be any amount that you want to set, as long as the collection of split invoices total 100% of the original invoice. In this example, you can set the first split invoice to 40% ($40,000), then each successive split invoice to 30% ($30,000), 20% ($20,000), and 10% ($10,000).

Use the InvoiceSplit object to hold two or more InvoiceSplitItem objects, which each represent a single split invoice. In the example, if you split the original $100,000 invoice into four split invoices, each of those split invoices is an individual InvoiceSplitItem object, which in turn go inside a single InvoiceSplit object. When you are finished creating individual InvoiceSplitItem objects, you use a create() call to collect them into an InvoiceSplit object, then use an execute() call with the InvoiceSplit object to split the original `Invoice` object into multiple new Invoice objects.

Note:

This feature is in the Early Adopter phase.

Your WSDL version must be 43.0+ to use this object.

The Invoice must be in draft status before you can split the invoice into multiple invoices. You can't split a posted or canceled invoice.

## Supported calls

You can use this object with the following call:

-   execute()

-   create()

-   query()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Spread an invoice across multiple billing periods by splitting the invoice into multiple invoices

-   Resplit the invoice into a different set of invoices


## Additional field details

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the InvoiceSplit object is InvoiceSplitId.
