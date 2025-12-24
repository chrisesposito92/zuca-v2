---
title: "Limitations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/enable-multilingual-support-in-html-billing-document-templates/limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:12.349Z"
---

# Limitations

Learn about the limitations and known issues when localizing billing document PDFs.

The localization of billing documents in PDF has the following limitations:

-   A Zuora tenant can contain 5,000 translations for billing document PDF files. If you upload multiple translation profiles, the sum of all the translated merge field values should be less than 5,000 rows.

-   Translations cannot be removed.

-   Translation messages cannot be updated directly through the Zuora UI. To update a translation, you have to upload a new translation file with the updated message.


## Known issues

-   Do not use Excel on Mac systems to create a translation profile file for multi-byte languages. The characters may not be saved correctly.

-   We recommend Google Spreadsheet or a plain text editor, such as Sublime, to create a translation profile on Mac.
