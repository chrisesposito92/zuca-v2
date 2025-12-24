---
title: "Apply payments to an invoice"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/apply-payments-to-an-invoice"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:24.596Z"
---

# Apply payments to an invoice

As of API version 22, Zuora offers an improved, streamlined method of creating a payment and applying a payment to an invoice with a single API call.

If you are using an API version earlier than 22.0, or if you want to apply a single payment to multiple invoices, use the original method.

Note that the process described in this topic will create a payment, apply it to an invoice, and send it to the gateway. However, it does not validate the results from the gateway; the success result from the final query only signifies that the status of the payment was updated to "Processed." You must query against the `GatewayResponseCode` for that payment to determine whether the payment was approved or declined by the gateway.

Note:

The method of using SOAP API to create InvoicePayment object is not recommended anymore.
