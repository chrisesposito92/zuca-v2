---
title: "Overview of Invoice Item Settlement"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/invoice-item-settlement/overview-of-invoice-item-settlement"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:58.297Z"
---

# Overview of Invoice Item Settlement

Invoice Item Settlement allows you to specify explicitly how payments and credit memos are applied at the item level on invoices or debit memos. After that, you can track precisely how outstanding balances are settled for every billed item.

Use the Invoice Item Settlement feature to specify explicitly how payments and credit memos are applied at the item level on invoices or debit memos. After that, you can track precisely how outstanding balances are settled for every billed item.

Without this feature, payments and credits are applied only at the document header level and allocated automatically across items. In the case of partial payments or settlement by different types of transactions, the system uses this automated mechanism to settle item-level balances.

The Invoice Item Settlement feature allows all the following settlement transactions at the line item level:

-   Payments

-   Refunds

-   Credit memos


Note:

Invoice Item Settlement must be used with other [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) features, including Unapplied Payments and Credit and Debit memos.

## Key features

You can do the following operations at the line-item level from Zuora UI and REST API:

-   Apply credit memo items to invoice items and debit memo items (REST API only)

-   Unapply credit memo items from invoice items and debit memo items (REST API only)

-   Retrieve credit memo of a specific part item or all part items (REST API only)

-   [Finance integration with invoice item settlement](/accounts-receivable/finance/get-started-with-zuora-finance/integration-with-invoice-settlement)


To perform the following operations, you must have Invoice Item Settlement enabled.

-   Create payments on invoice items and debit memo items (REST API only)

-   Apply unapplied payments to invoice items and debit memo items (UI and REST API)

-   Unapply payments from invoice items and debit memo items (UI and REST API)

-   Retrieve payments of a specific part item or all part items (REST API only)

-   Refund on credit memo items (REST API only)

-   Retrieve refunds of a specific part item or all part items (REST API only)
