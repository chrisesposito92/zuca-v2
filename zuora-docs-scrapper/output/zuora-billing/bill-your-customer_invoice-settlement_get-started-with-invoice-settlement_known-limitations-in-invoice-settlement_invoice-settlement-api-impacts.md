---
title: "Invoice Settlement API impacts"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/known-limitations-in-invoice-settlement/invoice-settlement-api-impacts"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:13.886Z"
---

# Invoice Settlement API impacts

After the Invoice Settlement feature is enabled, certain Actions and API operations are deprecated. Instead, you can use the alternative REST API operations specific to the Invoice Settlement feature to perform the corresponding transactions.

| Deprecated APIs | Alternative Invoice Settlement APIs |
| --- | --- |
| Actions / SOAP API calls The Actions deprecation is only specific to the objects related to credit memos and debit memos. You can still perform operations on the objects unrelated Invoice Settlement. The Generate action does not support generating credit memos.CreateDeleteExecuteGenerateQueryQueryMoreSubscribeUpdateSOAP and CRUD operations specific to InvoiceItemAdjustment, CreditBalanceAdjustment, InvoiceAdjustment, InvoicePayment, and RefundInvoicePayment | Credit Memos operationsDebit Memos operationsCreate credit memo from invoiceCreate debit memo from invoiceGenerate billing documents by accountWrite off invoicePayments operationsRefunds operationsGet revenue recognition rule by product rate plan charge (not recommended)Revenue Schedules operations specific to credit or debit memos (not recommended) |
