---
title: "Embed images into invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/embed-images-into-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:08.990Z"
---

# Embed images into invoice templates

Learn how to embed images into invoice templates using custom merge fields in Zuora.

Zuora now supports embedding images in addition to barcodes into invoice files. To achieve this, you can add a custom merge field with size specified to any invoice template.

Use the following format for your custom image merge field: { MERGEFIELD Image:{Merge field} \\d\\\* HxW in (inches/pixels) }

For example:

{ MERGEFIELD Image:Invoice.qrCode\_c \\d\\\* 50x50 px }

To embed an image into an invoice file, perform the following steps:

1.  [Create a custom field](/zuora-platform/extensibility/custom-fields/custom-field-overview) for an object the supports custom fields, for example, the Account object.
2.  Add the custom image merge filed to the invoice template.
3.  When creating a customer account, specify a valid image URL for the custom image merge field.
4.  Generate PDF or Word files for an invoice.
