---
title: "Supported e-invoice file status for PEPPOL"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/supported-e-invoice-file-status-for-peppol"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:34.160Z"
---

# Supported e-invoice file status for PEPPOL

This topic covers information about the supported e-invoice file statuses for PEPPOL in Zuora, including Processing, Generated, and Failed, and how they indicate the status of e-invoice files.

When you have PEPPOL integrated and enabled PEPPOL e-invoicing for a custom account, Zuora will auto-generate the e-invoice files once billing documents for this account are posted. The `EInvoiceStatus` field on the billing document objects (Invoice, Credit Memo, and Debit Memo) indicates the e-invoice file status.

The following table lists all supported e-invoice file statuses for PEPPOL.

| Status | Description |
| --- | --- |
| Processing | The e-invoice file is being generated. |
| Generated | The e-invoice file is generated successfully.You can retrieve the e-invoice file ID and extract the file through the REST API once the status is Generated. |
| Failed | The e-invoice file cannot be generated because of an error.For more information about error types and resolutions, see View e-invoice file status and error information through the Zuora UI. |
