---
title: "Example: Sort by Charge Number and Service Start Date"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/the-sort-order-control-on-a-table/example-sort-by-charge-number-and-service-start-date"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:32.110Z"
---

# Example: Sort by Charge Number and Service Start Date

This example demonstrates how to sort invoice items by charge number in descending order and service start date in ascending order.

The following example template sorts invoice items by their charge number (descending) and then by service start date (ascending).

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| <<TableStart:InvoiceItem>><<TableSort:InvoiceItem.ChargeNumber DESC, InvoiceItem.ServiceStartDate ASC>><<InvoiceItem.AmountWithoutTax>> | <<InvoiceItem.ChargeNumber>> | <<InvoiceItem.ServiceStartDate>><<TableEnd:InvoiceItem>> |

The template produces the following table.

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| 1.00 | C-00000002 | 2012-02-01 |
| 5.20 | C-00000002 | 2012-03-01 |
| 8.00 | C-00000001 | 2012-01-01 |
