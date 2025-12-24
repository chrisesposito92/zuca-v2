---
title: "Define date and numeric formats in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/define-date-and-numeric-formats-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:01.758Z"
---

# Define date and numeric formats in HTML templates

Learn how to define date and numeric formats in HTML templates using merge fields, with examples for invoices, credit memos, and debit memos.

With the HTML templates feature, you can use merge fields to define date and numeric formats. This tutorial takes invoices as an example; the configuration is similar for credit memos and debit memos.

By default, dates are displayed as plain text, without the localization based on locale; the value of a numeric field is displayed as a number without the localization.

To format the values of date and date time fields with pattern letters, use the `Format(Value)` function. For more information about this function, see Format function.

Assume that you want to list some date fields for how the date of November 05, 2021 is displayed in different formats, you can refer to examples listed in the following table:

| Merge field | Display on PDF files |
| --- | --- |
| {{Invoice.InvoiceDate\|Format(dd MMM yyyy)}} | 05 Nov 2021 |
| {{Invoice.DueDate\|Format(dd-MMM-yy)}} | 05-Nov-21 |
| {{Invoice.DueDate\|Format(dd-MMMM-yyyy)}} | 05-November-2021 |
| {{Invoice.DueDate\|Format(dd.MMMM.yyyy)}} | 05.November.2021 |
| {{Invoice.CreatedDate\|Format(dd-MMM-yyyy HH:mm:ss z)}} | 05-Nov-2021 05:07:44 -07:00 Note that this is an example for you to display the dates with more detailed time on PDF files. |

To convert the values of date time fields from the tenant default time zone to a specified time zone, use the `ConvertTz(Value)` function. For more information about this function, see ConvertTz function.

Assume that the default time zone of a tenant is IST, and the time is 16:32:52 April 20, 2021. The following table lists some date field examples for what the given time is displayed in a different time zone.

| Merge field | Display on PDF files |
| --- | --- |
| {{Invoice.CreatedDate\|ConvertTz(America/Anchorage)}} | 2021-04-20T02:02:52-09:00[America/Anchorage] |
| {{Invoice.CreatedDate\|ConvertTz(AST)\|Format(dd MMM yyyy HH:mm:ss z)}} | 20 Apr 2021 02:02:52 AST |

To format date fields or numeric fields per locale, use the `Localise(locale_NAME)` function. For more information about this function, see Localise function .

Assume that an account uses the communication profile with the locale English (United States). The following table lists some date field examples for how the date of February 14, 2021 is localized according to different locales.

| Merge field | Display on PDF files | Notes |
| --- | --- | --- |
| {{Invoice.InvoiceDate}} | 2021-02-14 | Without the localization. |
| {{Invoice.InvoiceDate\|Localise}} | 02/14/2021 | Localized per the default locale (English - United States) from the communication profile |
| {{Invoice.InvoiceDate\|Localise(fr_FR)}} | 14/02/2021 | Localized per locale fr_FR |
| {{Invoice.InvoiceDate\|Localise(it_IT)}} | 14/02/2021 | Localized per locale it_IT |
| {{Invoice.InvoiceDate\|Localise(de_DE)}} | 14.02.2021 | Localized per locale de_DE |

The following table lists some numeric field examples with localization according to different locales:

| Merge field | Display on PDF files | Notes |
| --- | --- | --- |
| {{Invoice.Amount}} | 12430.64 | Without the localization. |
| {{Invoice.Account.Currency\|Symbol}} {{Invoice.Amount\|Localise}} {{Invoice.Account.Currency}}Or{{#Invoice}}{{Account.Currency\|Symbol}} {{Amount\|Localise}} {{Account.Currency}}{{/Invoice}} | $ 12,430.64 USD | Localized per the default locale (English - United States) from the communication profile |
| {{Invoice.Account.Currency\|Symbol}} {{Invoice.Amount\|Localise(de_DE)}}Or{{#Invoice}}{{Account.Currency\|Symbol}} {{Amount\|Localise(de_DE)}}{{/Invoice}} | €1.234.567,89 | Localized per locale German - GERMANY. Currency is European. |
| {{Invoice.Amount\|Localise(it_IT)}} {{Invoice.Account.Currency}}Or{{#Invoice}}{{Amount\|Localise(it_IT)}} {{Account.Currency}}{{/Invoice}} | 12.430,64 EUR | Localized per locale Italian - ITALY. Currency is European. |
| {{Invoice.Account.Currency\|Symbol}} {{Invoice.Amount\|Localise(fr_FR)}} {{Invoice.Account.Currency}}Or{{#Invoice}}{{Account.Currency\|Symbol}} {{Amount\|Localise(fr_FR)}} {{Account.Currency}}{{/Invoice}} | €1.234.567,89 EUR | Localized per locale French - FRANCE. Currency is European. |
| {{#Wp_Eval}}{{ChargeAmount}} + {{TaxAmount}}\|Round(2)\|Localise{{/Wp_Eval}} | 1.234.567,89 | When the number is calculated in HTML templates (A + B), you can format the calculation result.Localized per locale French - FRANCE. Currency is European. |
