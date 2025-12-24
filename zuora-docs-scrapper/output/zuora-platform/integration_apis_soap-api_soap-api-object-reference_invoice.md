---
title: "Invoice"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoice"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:15.400Z"
---

# Invoice

The Invoice object provides information about customers' accounts for invoices, including dates, status, and amounts.

An invoice represents a bill to a customer. You generate invoices from a bill run, then email them as PDFs to your customers in batches or individually, or print them and send them to customers through postal mail. You can also generate a preview of an invoice before you activate a new subscription or amendment.

The Invoice object is created at the account level, and can include all of the charges for multiple subscriptions for an account.

## Supported calls

You can use this object with the following calls:

-   generate()

-   update()

-   delete() (WSDL 11.0+)

-   query()


## Walkthroughs and use cases

Here are some common ways to use this object:

-   Generating an invoice

-   Regenerating an invoice

-   Splitting an invoice
