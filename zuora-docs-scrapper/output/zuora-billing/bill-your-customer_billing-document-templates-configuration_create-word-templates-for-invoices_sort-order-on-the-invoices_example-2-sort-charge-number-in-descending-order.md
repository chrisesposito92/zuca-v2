---
title: "Example 2: Sort Charge Number in Descending Order"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/sort-order-on-the-invoices/example-2-sort-charge-number-in-descending-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:07.013Z"
---

# Example 2: Sort Charge Number in Descending Order

This example demonstrates how to sort charge numbers in descending order.

The following table entries:

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| «TableStart:InvoiceItem» «TableSort:InvoiceItem.ChargeNumber DESC »«InvoiceItem.AmountWithoutTax» | «InvoiceItem.ChargeNumber» | «InvoiceItem.ServiceStartDate»«TableEnd:InvoiceItem» |

will result in the following order:

| Amount Without Tax | Charge Number | Service Start Date |
| --- | --- | --- |
| 1.00 | C-00000002 | 2009-02-01 |
| 5.20 | C-00000002 | 2009-03-01 |
| 8.00 | C-00000001 | 2009-01-01 |
