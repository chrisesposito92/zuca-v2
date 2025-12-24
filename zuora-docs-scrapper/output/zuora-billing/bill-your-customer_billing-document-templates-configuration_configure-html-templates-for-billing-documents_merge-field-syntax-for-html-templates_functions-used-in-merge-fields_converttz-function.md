---
title: "ConvertTz function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/converttz-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:53.541Z"
---

# ConvertTz function

The ConvertTz function allows conversion of date time field values from the tenant's default time zone to a specified time zone, supporting both short and long time zone names.

This function is used to convert the values of date time fields from the tenant default time zone to a specified time zone.

## Syntax

`ConvertTz(Value)`

## Remarks

The supported time zone names include short names and long names. For example, the short name "PST" is mapping the time zone "America/Los\_Angeles." The long name "America/Los\_Angeles" means that the time zone is "UTC-07:00."

For more information about supported time zone short names and mapping, see Supported date time formats and time zones in HTML templates .

For more information about supported time zone long names, see Supported date time formats and time zones in HTML templates .

## Examples

You can use `{{Invoice.CreatedDate|ConvertTz(IST)|Format(dd.MMMM.yyyy HH:mm:ss a z)}}` to format a date time field as "20.April.2021 16:32:52 PM IST." You can also use `{{Invoice.CreatedDate|ConvertTz(AST)|Localise(ar_SA)}}` to format a date time field as "2021-04-20T02:02:52-09:00\[America/Anchorage\]."

The following table lists more formatting examples:

| {{Invoice.CreatedDate\|ConvertTz(IST)}} | 2021-04-20T16:32:52+05:30[Asia/Kolkata] |
| --- | --- |
| {{Invoice.CreatedDate\|ConvertTz(America/Anchorage)}} | 2021-04-20T02:02:52-09:00[America/Anchorage] |
| {{Invoice.CreatedDate\|ConvertTz(IST)\|Localise}} | 2021-04-20T16:32:52+05:30[Asia/Kolkata] |
| {{Invoice.CreatedDate\|ConvertTz(IST)\|Format(dd MMM yyyy HH:mm:ss z)}} | 20 Apr 2021 16:32:52 IST |
| {{Invoice.CreatedDate\|ConvertTz(AST)\|Format(dd MMM yyyy HH:mm:ss z)}} | 20 Apr 2021 02:02:52 AST |
