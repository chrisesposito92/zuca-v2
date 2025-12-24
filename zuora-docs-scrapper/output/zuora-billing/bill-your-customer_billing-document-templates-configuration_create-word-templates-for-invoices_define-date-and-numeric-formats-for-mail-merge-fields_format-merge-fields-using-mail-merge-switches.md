---
title: "Format merge fields using Mail Merge switches"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/define-date-and-numeric-formats-for-mail-merge-fields/format-merge-fields-using-mail-merge-switches"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:19.804Z"
---

# Format merge fields using Mail Merge switches

Learn how to format merge fields using Mail Merge switches for numeric, date, and currency fields in your template documents.

To format a merge field, complete the following steps:

1.  In the template document, while the merge field is selected, do the following to display the field code:

    -   Press Shift + F9 on Windows.

    -   Press Fn + Shift + F9 on Mac.


2.  Remove " `\*` `MERGEFORMAT` " from the field code.
3.  Enter the switch in the field code. For example:
    1.  Original field code: `{MERGEFIELD myObject.myField \*MERGEFORMAT` `}`
    2.  Updated field code: `{MERGEFIELD` `myObject.myField \# ###,###,###,#00.0}`
4.  Update the field:

    -   Press F9 on Windows.

    -   Press Fn + F9 on Mac.


    To format a numeric merge field, use the `\#` switches. For example, to display a currency field as "$125.23", the merge field should be defined as `{ MERGEFIELD myObject.myField \# $#,##0.00 }` .

    To format a date merge field, use the \\@ switches. For example, to display a date field as "03/30/2010", the merge field should be defined as `{ MERGEFIELD myObject.myField \@ MM/dd/yyyy }` .

    To generate billing documents with specific currency symbols, you must create separate billing document templates for each currency and include the MERGEFORMAT using examples described in the following table. See How do I handle Multi-currency in Zuora for more information.

    For merge fields in date formats, `yyyy` and `YYYY` might be different for the same date or timestamp. `yyyy` represents the calendar year of the date while `YYYY` represents the year of the week.

    For example, the calendar year of date 2020–12–28 is 2020; on the other hand, the date is Monday, the first day and first week of the year 2021. For the date, the year of the week is 2021. If you use `yyyy` as the date format, the displayed year for 2020–12–28 is 2020. If you use `YYYY` as the date format, the displayed year for 2020–12–28 is 2021.

    Therefore, It is best practice to always use as the `yyyy` format for date merge fields.

    The following table includes formatting examples for the date and number types mail merge fields.

    | Field format | Merge field syntax |
    | --- | --- |
    | To use standard date formatting: 10/26/2012 | {MERGEFIELD Invoice.InvoiceDate} |
    | To use simple date formatting: 20121026 | {MERGEFIELD Invoice.InvoiceDate \@ yyyyMMdd} |
    | To use text date formatting: OCT 2012 | {MERGEFIELD Invoice.InvoiceDate \@ MMM yyyy}The rendering result of the MMM date format is the corresponding month in locale format, and might vary according to different communication profile locales. For example, the rendering result of 23 May 2023 in text date format of dd-MMM-yyyy is as follows:If the locale is en_US, the display result is 23-May-2023.If the locale is fr_FR, the display result is 23-mai-2023.If the locale is it_IT, the display result is 23-mag-2023.If the locale is zh_CN, the display result is 23-五月-2023.If the locale is ja_JP, the display result is 23-5-2023. |
    | To use standard percentage formatting: 0.08 | {MERGEFIELD TaxItem.TaxRate} |
    | To use percentage symbol formatting: 8% | {MERGEFIELD TaxItem.TaxRate \# ##%} |
    | To specify a label for a quantity: 3.0000kg | {MERGEFIELD Usage.Quantity \# #,##0.0000kg} |
    | To specify a symbol for a currency: €12,13.8 | {MERGEFIELD Invoice.Total \# €#,#0.0} |
