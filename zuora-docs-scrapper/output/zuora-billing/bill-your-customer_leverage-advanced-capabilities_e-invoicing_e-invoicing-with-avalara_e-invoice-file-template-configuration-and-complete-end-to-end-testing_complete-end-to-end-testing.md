---
title: "Complete end-to-end testing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/complete-end-to-end-testing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:09.854Z"
---

# Complete end-to-end testing

Ensure successful submission of invoices, credit memos, and debit memos to the Avalara sandbox environment by following the outlined steps.

After creating e-invoice file templates for billing documents, you must ensure that invoices, credit memos, and debit memos can be successfully submitted to the Avalara sandbox environment.

To submit an invoice to the Avalara sandbox environment, perform the following steps:

1.  Create a draft invoice with taxation items that comply with the country's tax laws. For more information, see [Create subscriptions and invoices](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing).
2.  Post the invoice.
3.  Ensure the e-invoice file status of the invoice is Success. For more information, see [View e-invoice file status and error information through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents/view-e-invoice-file-status-and-error-information-through-the-zuora-ui).

    The procedure for submitting credit memos or debit memos is similar to the preceding procedure.

    Zuora recommends that you perform the following operations to ensure the billing documents are automatically submitted to the Avalara sandbox environment under different circumstances. It is optional to perform all operations listed below. You can tailor the operations according to your business needs.

    | Billing document | Operations |
    | --- | --- |
    | Invoice | Post an invoice. |
    | Credit Memo | Post a credit memo generated from canceling a subscription.Create and post an ad-hoc credit memo from an invoice.Create and post a standalone credit memo from a product rate plan charge.Reverse an invoice to create a credit memo from the invoice.Write off an invoice to create a credit memo from the invoice. |
    | Debit Memo | Create and post an ad-hoc debit memo from an invoice.Create and post a standalone debit memo from a product rate plan charge.Reverse a credit memo generated from a bill run. It creates a debit memo from the credit memo.Write off a credit memo to create a debit memo from the credit memo. |
