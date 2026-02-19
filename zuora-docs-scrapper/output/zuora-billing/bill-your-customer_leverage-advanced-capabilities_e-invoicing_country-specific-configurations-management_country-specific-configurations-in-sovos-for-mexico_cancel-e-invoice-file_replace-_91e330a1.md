---
title: "Replace the e-invoice being cancelled with a new debit memo"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-mexico/cancel-e-invoice-file/replace-the-e-invoice-being-cancelled-with-a-new-debit-memo"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:03.558Z"
---

# Replace the e-invoice being cancelled with a new debit memo

Learn how to replace a canceled e-invoice with a new debit memo, ensuring compliance with tax authority requirements.

-   Create a business region for Mexico.

    Note:

    Mexico supports invoices, credit memos, and debit memos. However, if you're using a credit memo to reverse an invoice, it should not be submitted to the tax authorities.

    -   Set E-Invoice Process Clearance with Cancellation

    -   Billing Document Types selecting Invoice, Credit Memo, Debit Memo.

    -   Disable Use Default Rule to Match the Business Region for Credit Memo. Configure the filter to not send credit memos that are generated due to invoice reverse.

        Example Rule: `Account.SoldTo.Country = 'Mexico' AND CreditMemo.ReasonCode != 'Reversal Invoice'`.

-   Define a custom field named DocumentReferenceID\_\_c on the Debit Memo object..

-   The invoice INV1 has been posted and submitted to Tax Authorities via Sovos. Its e-invoice status is Success.


At times, customers who don't use invoice reversal operations because the invoice is not the latest invoice. Instead, they create a credit memo to offset the invoice and create a new debit memo to replace the previous invoice.

1.  The end customer reported an issue with the invoice (INV1) — the charge amount of a usage charge was incorrect due to missing usage recording. They’ve asked the supplier (Zuora customer) to resend a corrected invoice.
2.  The customer creates a credit memo to write-off INV1.
3.  The customer creates a new debit memo (DM1) from the invoice in Draft status.

    -   The customer updates DM1 to save the Transaction ID of INV1 in the custom field DocumentReferenceID\_\_c. This is to indicate the previous invoice to be replaced. Note: Transaction ID can be retrieved from the EInvoiceData object which stores country specific information.

    -   The request payload of DM1 needs to add an additional Node called “CFDIRelacionados” including the attributes UUID and schemeID. Use schemeID as ‘04’ to indicate the relationship between the current invoice (DM1) and the previous invoice (INV1).


4.  The customer posts DM1 and DM1 is submitted to the tax authority via the Sovos Connector, and its e-invoice status shows Success.
5.  The customer uses the “Cancel E-Invoice” operation in Zuora for INV1, entering the following:

    -   ID or key of INV1

    -   Cancellation reason: “01”

    -   ID or key of the replacement document DM1


6.  The e-invoice status of INV1 changes to Cancel Processing, and eventually to Canceled.

    Note: This can take up to 72 business hours.
