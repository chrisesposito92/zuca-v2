---
title: "Handle overpayments"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/handle-overpayments"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:32.100Z"
---

# Handle overpayments

Introduces how to use the Payment SOAP API to handle overpayments.

At times, customers will overpay the amount due on their invoices. With Zuora's credit balance feature, you can track overpayments, and store credit on a customers account, which can then be later used to pay for future charges or refunded back to the customer. Zuora tracks all payments, invoices, and refunds.

## Overpayment use cases

There are two primary use cases for overpayments:

-   A customer makes a payment against an invoice (or invoices), and also overpays.

-   A customer makes a payment for future charges, but no funds are applied to invoices at the time of payment.
