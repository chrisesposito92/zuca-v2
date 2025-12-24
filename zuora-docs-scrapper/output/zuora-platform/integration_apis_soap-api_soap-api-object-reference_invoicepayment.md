---
title: "InvoicePayment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicepayment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:53.895Z"
---

# InvoicePayment

An invoice payment is a mechanism that ties a payment to an invoice and indicates how much of the payment was applied to the invoice.

Note:

If you have the Invoice Settlement feature enabled, this object is deprecated and only available for backward compatibility.

You can use the Zuora API or UI to apply a payment to a single invoice or to multiple invoices.

Note:

You can only apply a payment to multiple invoices in a single SOAP API call if you use WSDL 64 or later.

If you use the UI to apply payments and then query using the Zuora API, multiple InvoicePayment objects are returned. Each returned InvoicePayment object has one invoice and one payment.

For API examples of applying single and multiple invoice payments, see "Payment".

## Supported calls

You can use this object with the following calls

-   create()

-   query()
