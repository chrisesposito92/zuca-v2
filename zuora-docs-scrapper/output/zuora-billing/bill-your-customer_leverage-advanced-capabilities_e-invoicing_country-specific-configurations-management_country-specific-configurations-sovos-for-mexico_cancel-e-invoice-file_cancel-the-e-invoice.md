---
title: "Cancel the e-invoice"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-sovos-for-mexico/cancel-e-invoice-file/cancel-the-e-invoice"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:35.120Z"
---

# Cancel the e-invoice

Learn canceling an e-invoice using Zuora operations, including reversing the invoice and updating its status.

-   Create a business region for Mexico.

    -   Set E-Invoice Process Clearance with Cancellation

    -   Billing Document Types selecting Invoice, Credit Memo, Debit Memo.

-   The invoice INV1 has been posted and submitted to Tax Authorities via Sovos. Its e-invoice status is Success.


1.  The end customer reported an issue with the invoice (INV1) — They should not be billed with the service as they already canceled the subscription a month ago. They’ve asked the supplier (Zuora customer) to cancel the invoice.
2.  The customer uses the Reverse Invoice operation in Zuora to reverse INV1.
3.  The customer uses the Cancel E-Invoice operation in Zuora for INV1, entering the following:

    -   ID or key of INV1

    -   Cancellation reason: it’s a free text


4.  The e-invoice status of INV1 changes to Cancel Processing, and eventually to Canceled.
