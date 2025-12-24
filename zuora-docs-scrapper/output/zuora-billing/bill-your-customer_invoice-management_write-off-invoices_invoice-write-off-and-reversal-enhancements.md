---
title: "Invoice write-off and reversal enhancements"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-and-reversal-enhancements"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:44.149Z"
---

# Invoice write-off and reversal enhancements

Enhancements to invoice write-off and reversal operations include automatic credit memo generation, aligning credit memo item quantities with the original invoice, and improved tracking of quantities sold and purchased.

During invoice write-off and reversal, a credit memo is automatically generated and applied to the incorrect invoice to reduce the invoice balance to zero.

Previously, the Quantity field of credit memo items was always set to 1 , and the value of the Unit Price field was calculated based on the following formula:

`Unit Price = Amount Without Tax / Quantity`

As of Zuora Release 2022.04.R2, the invoice write-off and reversal operations have been enhanced to align the quantity of credit memo items with the original invoice. The credit memo duplicates the Quantity and Unit Price fields from the corresponding invoice items of the original invoice. Therefore, you can generate credit memo reports to track the quantity sold and purchased.

The following use cases are presented to showcase how the invoice write-off and reversal operations are enhanced.
