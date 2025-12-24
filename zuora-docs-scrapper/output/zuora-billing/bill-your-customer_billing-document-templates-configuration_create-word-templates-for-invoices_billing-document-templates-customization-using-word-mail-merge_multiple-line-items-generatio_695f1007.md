---
title: "Multiple line items generation using Mail Merge table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/billing-document-templates-customization-using-word-mail-merge/multiple-line-items-generation-using-mail-merge-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:58.102Z"
---

# Multiple line items generation using Mail Merge table

This topic covers information about how to generate multiple line items in billing documents using mail merge tables, including setup and customization options.

To generate multiple line items in a billing document, use the mail merge tables.

-   To mark the beginning of a mail merge table, insert a mail merge field with the name `TableStart:MyObject` , where `MyObject` corresponds to the name of a multi-line object.

-   To mark the end of the mail merge table, insert another mail merge field with the name `TableEnd:MyObject` .

-   Between the `TableStart` and `TableEnd` marking fields, place the merge fields that correspond to the fields of your table columns. These merge fields will be populated with data from the first row of the multi-line object, then the following rows will be populated with the data from the object.


For example, to generate multiple line items on an invoice item, create `TableStart:InvoiceItem` and `TableEnd.InvoiceItem` merge fields in your template, where `InvoiceItem` is a multi-line object. You can create this merge field just like any other merge field, but this field specifies which region will be repeated for each of the Invoice Items.

Multi-line items can be displayed within a table and cannot be displayed in other areas of billing document templates. The following objects are multi-line items that you can use with `TableStart` and `TableEnd`

-   [OpenInvoice](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices): The Invoice multi-line fields correspond to open invoices. This differs from the [Invoice](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices) fields which are associated with the current invoice.

-   InvoiceItem

-   TaxationItem

-   TaxSummary

-   Usagelines

-   UsageSummary

-   Adjustment

-   Payment

-   Subscription

-   [Transaction](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices)

-   CreditMemoItem

-   DebitMemoItem


Use the sort order described [Changing the Sort Order on a Table](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/the-sort-order-control-on-a-table) when defining products if you have specific ordering requirements.

Note: Use the advanced mail merge functionality to further customize your billing document template by [defining the format for date and number fields](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/define-date-and-numeric-formats-for-mail-merge-fields/format-merge-fields-using-mail-merge-switches).
