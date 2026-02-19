---
title: "Open invoice fields for merge field mapping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/open-invoice-fields-for-merge-field-mapping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:48.687Z"
---

# Open invoice fields for merge field mapping

This document provides guidance on building open invoice tables in HTML templates and mapping open invoice fields between Word and HTML invoice templates.

To build an open invoice table in the HTML template editor, follow the procedure described in How to configure open invoice tables in HTML invoice templates .

The following table lists the mapping for Open Invoice fields in Word invoice templates and HTML invoice templates.

| Merge field in Word template | Equivalent in HTML template |
| --- | --- |
| Invoice.InvoiceDate | Invoice.InvoiceDate |
| Invoice.InvoiceNumber | Invoice.InvoiceNumber |
| Invoice.DueDate | Invoice.DueDate |
| Invoice.Total | Invoice.Amount |
| Invoice.Balance | Invoice.Balance |
