---
title: "E-Invoice cancellation flow for Poland"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-poland/e-invoice-cancellation-flow-for-poland"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:20.895Z"
---

# E-Invoice cancellation flow for Poland

This section describes how e-invoice cancellations are handled in Poland, including the use of correction invoices and mandatory reference requirements under KSeF.

Under Polish e-invoicing regulations, the Krajowy System e-Faktur (KSeF) does not support hard cancellation (voiding) of an invoice once it has been cleared and assigned a KSeF ID.

-   Cancellation mechanism: To nullify or modify a legally valid e-invoice, you must issue a Correction Invoice, either as a Credit Note or a Debit Note, depending on the business scenario.

-   Reference requirement: The correction invoice must include a reference to the original KSeF ID (reference number) of the invoice being corrected. This reference establishes the legal linkage between the original invoice and its correction.

-   Clearance procedure: Submit the correction invoice through the standard KSeF clearance process. Once the correction invoice is successfully validated by KSeF and assigned its own KSeF ID, it becomes the legally recognized amendment to the original invoice.
