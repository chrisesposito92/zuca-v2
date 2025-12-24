---
title: "Replace the e-invoice being cancelled with a new invoice"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-sovos-for-mexico/cancel-e-invoice-file/replace-the-e-invoice-being-cancelled-with-a-new-invoice"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:32.658Z"
---

# Replace the e-invoice being cancelled with a new invoice

This task guides you through the process of replacing a canceled e-invoice with a new invoice, including creating a business region, defining custom fields, and updating invoice statuses.

-   Create a business region for Mexico.

    Note: Mexico supports invoices, credit memos, and debit memos. However, if you're using a credit memo to reverse an invoice, it should not be submitted to the tax authorities.
    -   Set E-Invoice Process Clearance with Cancelation.

    -   Billing Document Types selecting Invoice, Credit Memo, Debit Memo.

    -   Disable Use Default Rule to Match the Business Region for Credit Memo. Configure the filter to not send credit memos that are generated due to invoice reverse. Example Rule: `Account.SoldTo.Country = ‘Mexico’ AND CreditMemo.ReasonCode != ‘Reversal Invoice’`.

-   Define a custom field named DocumentReferenceID\_\_c on the Invoice object. This is to store a reference to the original document being replaced.

-   The invoice INV1 has been posted and submitted to Tax Authorities via Sovos. Its e-invoice status is Success.


1.  The end customer reported an issue with the invoice (INV1) — the Sold To Contact was incorrect, which led to incorrect tax being applied. They’ve asked the supplier (Zuora customer) to resend a corrected invoice.
2.  The customer uses the Reverse Invoice operation in Zuora to reverse INV1.
3.  The customer updates the Sold To Contact and generates a new invoice (INV2) in Draft status.

    -   The customer updates INV2 to save the Transaction ID of INV1 in the custom field DocumentReferenceID\_\_c. This is to indicate the previous invoice to be replaced. Note: Transaction ID can be retrieved from the EInvoiceData object which stores country specific information.

    -   The request payload of INV2 needs to add an additional Node called “CFDIRelacionados” including the attributes UUID and schemeID. Use schemeID as ‘04’ to indicate the relationship between the current invoice (INV2) and the previous invoice (INV1).


4.  The customer posts INV2 and INV2 is submitted to the tax authority via the Sovos Connector, and its e-invoice status shows Success.
5.  The customer uses the “Cancel E-Invoice” operation in Zuora for INV1, entering the following:

    -   ID or key of INV1

    -   Cancellation reason: “01”

    -   ID or key of the replacement invoice INV2


6.  The e-invoice status of INV1 changes to Cancel Processing, and eventually to Canceled. Note: this can take up to 72 business hours.
