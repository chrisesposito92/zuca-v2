---
title: "E-invoice files generation for billing documents"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:55.482Z"
---

# E-invoice files generation for billing documents

The e-invoicing process automatically generates e-invoice files for billing documents when specific conditions are met, or through REST API operations.

The e-invoicing process is triggered automatically when billing documents are posted. During the process, the billing documents are submitted to a third-party e-invoicing service provider to generate e-invoice files if the following conditions are met:

-   The account must be configured to generate e-invoice files for billing documents.

-   The billing documents must be in Posted status.

-   A business region must be created for the billing country contact, and be linked to an e-invoicing service provider.


You can also use the following REST API operations to trigger the generation of e-invoice files for billing documents, including invoices, credit memos, and debit memos:

-   Generate an e-invoice file for an invoice

-   Generate an e-invoice file for a credit memo

-   Generate an e-invoice file for a debit memo
