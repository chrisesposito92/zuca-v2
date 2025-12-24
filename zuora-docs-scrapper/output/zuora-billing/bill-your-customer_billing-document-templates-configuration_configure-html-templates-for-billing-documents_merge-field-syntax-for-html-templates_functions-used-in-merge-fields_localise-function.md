---
title: "Localise function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/localise-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:35.444Z"
---

# Localise function

The Localise function formats data according to specified locale settings, allowing for customization of language and regional standards in billing documents.

The Localise function formats input data according to a specified locale. For instance, you can use `Invoice.Balance|Localise(en_US)` to format invoice balances according to US English standards. To display fields or templates in a local language, ensure that you create a new communication profile with the desired locale and associate this profile with the customer account linked to the billing document (e.g., Invoice, Credit Memo, Debit Memo, Summary Statement, and so on). For more information about how to create communication profiles and configure the locale setting, see Communication profiles.

## Syntax

`Localise(locale_NAME)`

localise\_NAME defines a language country code that is composed of two arguments separated by an underscore. For example, fr\_CA indicates French Canadian.

-   The first argument is a valid ISO Language Code. These codes are the lower-case two-letter codes as defined by ISO-639.

-   The second argument to both constructors is a valid ISO Country Code. These codes are the upper-case two-letter codes as defined by ISO-3166.


For an example list of locale names, see Supported languages in HTML templates.

## Remarks

This function works only for date, datetime, and numeric fields.

The localise\_NAME input parameter is optional.

If no input parameter is specified, the default locale is determined based on the following order:

-   Locale of the Communication Profile

-   Locale in the tenant setting


## Examples

You can specify the locale name to override the default locale. The default locale is determined based on the following order:

-   Use the locale specified in the communication profile

-   Use the tenant locale if the communication profile specifies the locale as DEFAULT LOCALE.


For example, if the default locale is de\_DE, the merge field examples and their outputs are as follows:

-   `{{Invoice.InvoiceDate|Localise}}` : 16/12/2021

-   `{{Invoice.InvoiceDate|Localise(it_IT}}` : 16.12.2021

-   `{{Invoice.CreatedDate|Localise}}` : 16.09.2021 02:26:07+08:00


You can specify the locale name to override the default locale. For example, if the default locale is de\_DE, the merge field examples and their outputs are as follows:

-   `{{Amount|Localise}}:` 1,234,567.89

-   `{{Amount|Localise(fr_FR)}}` : 1.234.567,89
