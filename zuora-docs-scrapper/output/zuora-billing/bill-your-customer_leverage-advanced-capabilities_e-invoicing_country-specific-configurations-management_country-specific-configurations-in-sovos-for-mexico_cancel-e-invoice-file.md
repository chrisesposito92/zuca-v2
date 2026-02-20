---
title: "Cancel E-Invoice file"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-mexico/cancel-e-invoice-file"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:56.225Z"
---

# Cancel E-Invoice file

Learn about the controlled process for canceling E-Invoices in Mexico, including the required reasons and scenarios for cancellation.

Mexico's CFDI cancellation workflow is a controlled, regulated process governed by the SAT. Issuers must submit a cancellation request, specifying one of four official reasons.

-   01 – Invoice issued with error regarding relationship

-   02 – Invoice issued with unrelated error.

-   03 – The operation was not carried out.

-   04 – Nominative transaction related to a global invoice.


## Supported Cancellation Reasons

Reason 01: Invoice issued with error regarding relationship

Use this reason when you need to replace a faulty invoice (Invoice A) with a corrected one (Invoice B). This requires a specific process:

1.  Issue the new, correct invoice (Invoice B).

2.  In Invoice B, add the CfdiRelacionados node.

3.  Specify the relationship type as "04" (Substitution of previous CFDI) within this node.

4.  Include the Fiscal Folio (UUID) of the original, faulty invoice (Invoice A).

5.  After the replacement invoice is certified, you can cancel the original Invoice A, referencing the new invoice.


Reason 02: Invoice issued with errors, not replaced

Use this reason when an invoice contains errors, but you do not need to issue a new, replacement invoice. You can proceed directly with the cancellation of the incorrect invoice.

Reason 03: Transaction not carried out

Select this reason when an invoice was issued for a transaction that was ultimately never completed. You can cancel the invoice directly, without issuing a replacement.

Reason 04: Nominative operation related to a global invoice

This reason is used in specific scenarios involving sales to the general public. It is not typically used for standard business-to-business transactions. For most of our business operations, this reason will not apply.

## E-Invoice cancellation scenarios

Common scenarios for managing the cancellation and replacement of electronic invoices:

Scenario 1: Replace an invoice with errors

If you need to replace an invoice that contains errors (e.g., in the product key, price, or tax amount), you need to issue a new, corrected invoice and cancel the original, erroneous invoice. Mexico's SAT regulations require using cancellation reason code "01" (Invoice issued with error regarding relationship).

Scenario 2: Cancel an invoice without replacement

If an invoice was created in error and no replacement is needed, you can cancel it directly. This is a standard procedure supported by Mexico and many other countries. Mexico requires the cancellation reason code "02" (Invoice issued with errors, not replaced) or "03" (Transaction not carried out), depending on the specific situation.

Scenario 3: Replace an invoice with a debit memo

In some cases, you may need to cancel an invoice and replace it with a debit memo.
