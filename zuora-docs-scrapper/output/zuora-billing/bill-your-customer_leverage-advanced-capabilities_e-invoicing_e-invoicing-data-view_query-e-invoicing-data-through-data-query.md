---
title: "Query e-invoicing data through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-data-view/query-e-invoicing-data-through-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:10.797Z"
---

# Query e-invoicing data through Data Query

Understand how to query e-invoicing data using Data Query, including accessing specific objects and fields related to E-Invoicing.

You can perform queries on the objects and fields related to this feature through Data Query , including the E-Invoice Business Region, E-Invoice Profile, E-Invoice Data, Account, Invoice, Credit Memo, and Debit Memo objects. For information about the basic usage of Data Query, see Constructing SQL Queries in Data Query .

## E-Invoicing specific objects

The E-Invoicing feature introduces the following objects and the fields that are defined on these objects:

-   E-Invoice Business Region

-   E-Invoice Data

-   E-Invoice Profile


You can access these objects and all their fields through Data Query and the E-Invoicing API operations.

## E-Invoicing specific fields on existing objects

The following table lists the E-Invoicing specific fields that are defined on existing objects. You can access these objects and all their fields through Data Query and related API operations.

| Object | Field | Type |
| --- | --- | --- |
| Account | EInvoiceProfileId | string |
| InvoiceCredit MemoDebit Memo | EInvoiceStatus | string |
| EInvoiceFileId | string |  |
| EInvoiceErrorCode | string |  |
| EInvoiceErrorMessage | string |  |

## Construct SQL queries about E-Invoicing objects and fields

To query the objects and fields related to the E-Invoicing feature, you can construct SQL queries by referring to the following SQL examples:

-   Query the e-invoicing status based on the invoice number:

    SELECT inv.EInvoiceStatus,inv.EInvoiceFileId,inv.EInvoiceErrorCode,inv.EInvoiceErrorMessage FROM invoice as inv WHERE inv.InvoiceNumber='INVCA00000096' The sample request queries the invoice schedule associated with the specified order. The sample query result is as follows:
    | EInvoiceStatus | EInvoiceFileId | EInvoiceErrorCode | EInvoiceErrorMessage |
    | --- | --- | --- | --- |
    | Failed |  | RE-400-BR-CO-15 | Invoice total amount with VAT (BT-112) |
