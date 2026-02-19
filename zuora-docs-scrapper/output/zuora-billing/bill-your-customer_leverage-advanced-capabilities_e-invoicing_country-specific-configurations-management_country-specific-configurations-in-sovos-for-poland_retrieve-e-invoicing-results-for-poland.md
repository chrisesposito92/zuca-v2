---
title: "Retrieve e-invoicing results for Poland"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-poland/retrieve-e-invoicing-results-for-poland"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:08.710Z"
---

# Retrieve e-invoicing results for Poland

This topic describes how to retrieve the status and official identifiers for e-invoicing documents submitted to Poland KSeF.

You can use the Retrieve e-invoicing results operation to check the processing status of submitted documents and obtain the official identifiers returned by the tax authority.

For Poland, the following fields are returned in the `EInvoiceData` object:

-   `ReferenceNumber`: The unique KSeF ID assigned by the Polish tax authority to the cleared document.

-   `DocumentId`: The identifier of the corresponding billing document in Zuora.

-   `DocumentType`: The type of the billing document, such as Invoice or Credit Memo.

-   `eInvoiceFileId`: The identifier of the cleared XML document retrieved from Sovos/KSeF.
