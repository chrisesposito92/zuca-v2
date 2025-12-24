---
title: "Example: Sort by Charge Number and Amount without Tax"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/the-sort-order-control-on-a-table/example-sort-by-charge-number-and-amount-without-tax"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:35.133Z"
---

# Example: Sort by Charge Number and Amount without Tax

This example demonstrates how to sort invoice items by charge number and amount without tax in descending order.

The following example template sorts invoice items by their charge number (descending) and then by amount without tax (descending).

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| <<TableStart:InvoiceItem>> <<TableSort:InvoiceItem.ChargeNumber DESC>> <<InvoiceItem.AmountWithoutTax DESC>> | <<InvoiceItem.ChargeNumber>> | <<InvoiceItem.ServiceStartDate>><<TableEnd:InvoiceItem>> |

The template produces the following table.

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| 8.00 | C-00000001 | 2009-01-01 |
| 1.00 | C-00000002 | 2009-02-01 |
| 5.20 | C-00000002 | 2009-03-01 |
