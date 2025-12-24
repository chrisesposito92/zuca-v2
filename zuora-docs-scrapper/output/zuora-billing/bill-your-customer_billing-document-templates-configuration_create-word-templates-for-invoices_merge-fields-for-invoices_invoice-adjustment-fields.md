---
title: "Invoice Adjustment Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/invoice-adjustment-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:16.258Z"
---

# Invoice Adjustment Fields

This reference details the fields related to invoice adjustments, including accounting codes, applied amounts, dates, descriptions, unique identifiers, and types.

| Merge Field | Description | Sort Order |
| --- | --- | --- |
| Adjustment.AccountingCode | The accounting code for the invoice item. Accounting codes group transactions that contain similar accounting attributes.Values: inherited from InvoiceItem.AccountingCode |  |
| Adjustment.AppliedAmount | The amount of the invoice item adjustment.Values: a valid currency amountExample: $4.00 |  |
| Adjustment.Date | The date when the invoice item adjustment is applied. This date must be the same as the invoice's date or later.Values: a valid date and time value | 2 |
| Adjustment.Description | A description of the invoice adjustment. |  |
| Adjustment.Number | A unique string to identify an individual invoice item adjustment.Values: automatically generatedThis field cannot be translated. | 3 |
| Adjustment.Type | The type of invoice adjustment. | 1 |
