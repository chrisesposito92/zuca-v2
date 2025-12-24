---
title: "Avoid complex invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/avoid-complex-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:01.418Z"
---

# Avoid complex invoice templates

Avoid using complex invoice templates with intricate programming logic or large tables to ensure efficient PDF generation and easy comprehension of key information.

A complex template either uses complex MS Word programming logic or displays too many items. An invoice template is complex if it uses:

-   Two or more levels of IF condition. For example:


{ IF { evaluateNotUsage } = 1 { IF { firstRec } = 0 " { SET table " { table } Contract Invoicing } { SET firstRec = 1 }" "" } "" }

-   Too many variable definitions, comparisons, and so on. For example:


{ SET evaluateUsage {= AND ( { COMPARE { last\_location } <> { last\_location1 } }, { COMPARE { InvoiceItem.ChargeType } = "Usage" } ) } } { SET isUsage { = AND ( { COMPARE { last\_location } = { last\_location } }, { COMPARE { InvoiceItem.ChargeType } <> "Usage" { ) } }

-   Any of the following tables which might include hundreds of items or more in one PDF: Templates get even more complex when the programming logic is used in the above tables because the logic will run through each item in the table.

    -   InvoiceItem

    -   TaxItem

    -   Usage

    -   Subscription


## Why Avoid Complex Templates

Complex templates take a long time to generate invoice PDF, which can be as long as hours. When many PDFs are in the generation process, all new requests will be in pending status. The ultimate effect is the viewers cannot see the PDFs promptly. Simpler logic can greatly shorten the generation time. Avoid using large tables that yield ten or more pages can also help viewers quickly and easily understand the key information.

## How to Verify Complex Templates

You need to verify the template when uploading an invoice template to generate invoice PDF smoothly. You can preview the template with an invoice that has enough relevant data. Relevant data is the data that MS Word programming logic will run through.

Generally, for a template that the MS Word programming logic is used in a table ( including InvoiceItem, TaxItem, Usage, Subscription, Transaction, and so on; excluding Invoice and Account ), the verification requires an invoice to include up to 1000 items of that table. For example, for an IF control used inside the InvoiceItem table, you should prepare an invoice which has at least 1000 invoice items for verification. The template is acceptable if the preview operation successfully gets a viewable PDF.

Note that the Usage, InvoiceItem, and TaxItem table are the easiest ones to produce an invoice PDF of tens of pages. So avoid using them if the invoice has data at that size.

## Alternatives

In most cases, a complex template with many programming controls is created for accommodating multiple use cases into one. Separating use cases into dedicated templates can remarkably speed up the PDF generation and is good for maintenance. This allows you to make changes as needed without breaking every customer.

Zuora provides a table for the Usage, InvoiceItem, and TaxItem table respectively for aggregation:

-   UsageSummary for Usage

-   Invoice for InvoiceItem. Zuora also provides a feature to [Summarize Invoice Items](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/summarize-invoice-items).

-   TaxSummary for TaxItem


If the item-level data is needed, you can rely on Zuora’s Data Source Export feature which can provide data in greater detail and more flexible format. See [Data Source Export](/zuora-platform/data/reporting/data-sources-and-exports) for more information.
