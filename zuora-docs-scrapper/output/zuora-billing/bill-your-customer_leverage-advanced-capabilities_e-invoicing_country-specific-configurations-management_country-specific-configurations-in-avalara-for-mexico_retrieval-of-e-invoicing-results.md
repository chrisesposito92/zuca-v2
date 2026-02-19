---
title: "Retrieval of e-invoicing results"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-avalara-for-mexico/retrieval-of-e-invoicing-results"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:34.488Z"
---

# Retrieval of e-invoicing results

Understand how to retrieve e-invoicing results using the operation to access billing document IDs and understand the fields specific to different countries, such as Mexico.

You can use the Retrieve e-invoicing results operation to retrieve e-invoice results according to the ID of a billing document. The document ID can be the ID of an invoice, a credit memo, or a debit memo.

The e-invoicing result fields might be different by country.

The e-invoicing result fields on `EInvoiceData` include the following fields for Mexico:

-   `QrCode` : This field is empty for Mexico by default


-   `ReferenceNumber` : This field is empty for Mexico by default


-   `DocumentId` : This field stores the ID of the billing document, for which the e-invoice file is generated.


-   `DocumentType` : This field indicates the type of the billing document, for which the e-invoice file is generated.


If you define the response field mapping for Mexico, you can access those fields via `EInvoiceData` . See details about E-invoicing response field mapping for Avalara .

The `eInvoiceFileId` field on the Invoice object stores the ID of the e-invoice file that is returned by tax authority.
