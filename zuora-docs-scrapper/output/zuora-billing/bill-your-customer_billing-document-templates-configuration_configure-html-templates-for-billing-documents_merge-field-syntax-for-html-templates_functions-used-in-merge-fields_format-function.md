---
title: "Format function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/format-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:50.747Z"
---

# Format function

The Format function is used to apply pattern letters to date and date time fields, allowing for customized formatting such as "3 Dec 2011" or "20.April.2021 04:02:52 AM -07:00."

This function is used to format the values of date and date time fields with pattern letters.

## Syntax

`Format(Value)`

## Remarks

Pattern letters are used to create a formatter. For example, "d MMM yyyy" can serve as pattern letters, and such pattern letters format 2011-12-03 as "3 Dec 2011."

For more information about supported pattern letters, see Supported date time formats and time zones in HTML templates .

## Examples

You can use `{{Invoice.CreatedDate|Format(dd.MMMM.yyyy HH:mm:ss a z)}}` to format a date time field as "20.April.2021 04:02:52 AM -07:00."

The following table lists more formatting examples:

| {{Invoice.InvoiceDate\|Format(dd MMM yyyy)}} | 20 Jun 2021 |
| --- | --- |
| {{Invoice.InvoiceDate\|Format(dd MM yyyy)}} | 20 06 2021 |
| {{Invoice.InvoiceDate\|Format(dd.MM.yyyy)}} | 20.06.2021 |
| {{Invoice.InvoiceDate\|Format(MM/dd/yyyy)}} | 06/20/2021 |
| {{Invoice.InvoiceDate\|Format(dd-MMM-yyyy)}} | 20-06-2021 |
| {{Invoice.DueDate\|Format(dd-MMM-yy)}} | 05-Nov-21 |
| {{Invoice.DueDate\|Format(dd-MMMM-yyyy)}} | 05-November-2021 |
| {{Invoice.DueDate\|Format(dd.MMMM.yyyy)}} | 05.November.2021 |
| {{Invoice.CreatedDate\|Format(dd-MMM-yyyy HH:mm:ss z)}} | 20-Apr-2021 04:02:52 -07:00 |
