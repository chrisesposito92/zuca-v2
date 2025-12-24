---
title: "Supported languages in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/supported-languages-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:45:01.225Z"
---

# Supported languages in HTML templates

Describes the supported languages in HTML templates for billing documents, including invoices, credit memos, and debit memos.

If you operate a global business with customers in multiple languages, you can create HTML templates in multiple languages. HTML templates support multibyte characters, such as Japanese, Chinese, and Russian characters.

-   Inputting multibyte characters in HTML templates are supported. For example, you can input Japanese characters as field names or table header names in HTML templates.

-   The values rendered from merge fields support multibyte characters. For example, if the bill to contact addresses or charge names are in Japanese, they can be displayed correctly in generated PDF files.


You can enable the dynamic generation of PDF files for billing documents in your customers' preferred languages using one template. See Enable multilingual support in HTML billing document templates for more information.

In addition to multiple languages, you can also define date and numeric formats based on locales. For more information see, the Localise function.

## Supported languages

The language country codes are comprised of two arguments separated by an underscore, for example, fr\_CA is French Canadian:

-   The first argument is a valid ISO Language Code. These codes are the lower-case two-letter codes as defined by ISO-639.

-   The second argument to both constructors is a valid ISO Country Code. These codes are the upper-case two-letter codes as defined by ISO-3166.


HTML templates support the following languages:

-   English

-   German

-   Chinese

-   French

-   Spanish

-   Arabic

-   [Other Languages](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/supported-languages-in-html-templates/other-languages)
