---
title: "RefundInvoicePayment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refundinvoicepayment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:01.930Z"
---

# RefundInvoicePayment

A refund invoice payment represents a portion of the refund that's being made against a payment that was applied to an invoice.

Note:

If you have the Invoice Settlement feature enabled, this object is deprecated and only available for backward compatibility.

The RefundInvoicePayment object is automatically generated when you create a refund. This object works with the [Refund](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund) object and the [InvoicePayment](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicepayment) object that the refund applies to. The RefundInvoicePayment object ties the Refund and the InvoicePayment objects together.

## Supported calls

You can use this object in the following call:

-   query()
