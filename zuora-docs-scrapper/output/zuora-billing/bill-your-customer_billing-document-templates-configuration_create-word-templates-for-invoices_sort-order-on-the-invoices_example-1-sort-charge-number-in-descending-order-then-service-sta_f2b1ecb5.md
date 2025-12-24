---
title: "Example 1: Sort Charge Number in Descending Order, Then Service Start Date in Ascending Order"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/sort-order-on-the-invoices/example-1-sort-charge-number-in-descending-order-then-service-start-date-in-ascending-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:03.842Z"
---

# Example 1: Sort Charge Number in Descending Order, Then Service Start Date in Ascending Order

This example demonstrates sorting a table by Charge Number in descending order and Service Start Date in ascending order using a specific command.

The following command “«TableSort:InvoiceItem.ChargeNumber DESC, InvoiceItem.ServiceStartDate ASC» between «TableStart:InvoiceItem» and «TableEnd:InvoiceItem»” will sort the table as follows:

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| 8.00 | C-00000001 | 2009-01-01 |
| 1.00 | C-00000002 | 2009-02-01 |
| 5.20 | C-00000002 | 2009-03-01 |
