---
title: "Troubleshooting custom Word invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/troubleshooting-custom-word-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:58.024Z"
---

# Troubleshooting custom Word invoice templates

Addresses common issues with custom Word invoice templates in Zuora, including file format requirements, data field visibility, and custom field display.

## Zuora Requires .doc Files

If you are using Word 2007 with Windows Vista, you must save the template with a `.doc` extension. Zuora does not register templates that have a `.docx` extension.

## Data Does Not Appear in a Field

If you changed a merge field but data does not appear in the field, you may have modified the field without using Edit Field.

1.  Select the field (highlight the text).
2.  Right-click the field and select Edit Field.

## Additional Fields are Displayed

If there is an additional field displayed on the invoice, it is possible that a merge field is hidden. Press ALT + F9 to display all merge fields, and then remove the hidden field.

## Contact Information is Not Displayed

If you see `<<``BillToContact.Description>>` or `<<SoldToContact.County>>` and not the merge field, Zuora Tax is not enabled in your tenant.

## Custom Fields are Not Displayed

-   If the Custom field permission is disabled after the invoice template is loaded, custom fields will not be displayed in the invoice.
-   If custom fields are removed after the invoice template is loaded, custom fields will not be displayed in the invoice.
