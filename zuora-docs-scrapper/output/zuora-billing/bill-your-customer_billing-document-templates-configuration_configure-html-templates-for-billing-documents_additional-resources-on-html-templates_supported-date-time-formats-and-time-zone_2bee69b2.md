---
title: "Supported date time formats and time zones in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/supported-date-time-formats-and-time-zones-in-html-templates"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:17.689Z"
---

# Supported date time formats and time zones in HTML templates

Details of the supported date time formats and time zones in HTML templates, including usage of the `Format` and `ConvertTz` functions.

This article introduces the supported data time formats and time zones (short names and long names) in HTML templates for you to use the `Format` function and the `ConvertTz` function.

For more information about descriptions and examples of the two functions, see Format function and ConvertTz function.

## Supported date time patterns

This section illustrates supported date time patterns in HTML templates.

| Letter | Meaning | Presentation | Examples |
| --- | --- | --- | --- |
| G | Era | Text | AD |
| u | Year | Year | 2008; 08 |
| y | Year in era | Year | 2008; 08 |
| D | Day in year | Number | 206 |
| M/L | Month in year | Number/Text | 9; 09; Sep; September; S |
| d | Day in month | Number | 11 |
| Q/q | Quarter in year | Number/Text | 4; 04; Q4; 4th quarter |
| Y | Week year | Year | 2001; 01 |
| w | Week in week year | Number | 22 |
| W | Week in month | Number | 2 |
| E | Day in week | Text | Wed; Wednesday; W |
| e/c | Localized day in week | Number/Text | 3; 03; Wed; Wednesday; W |
| F | Day of week in month | Number | 4 |
| a | Am/pm marker | Text | AM |
| h | Hour in am/pm (1-12) | Number | 12 |
| K | Hour in am/pm (0-11) | Number | 11 |
| k | Hour in am/pm (1-24) | Number | 24 |
| H | Hour in day (0-23) | Number | 20 |
| m | Minute in hour | Number | 29 |
| s | Second in minute | Number | 31 |
| S | Millisecond | Fraction | 998 |
| A | Milli in day | Number | 1111 |
| n | Nano in second | Number | 123456789 |
| N | Nano in day | Number | 1234567890 |
| V | Time zone ID | ZoneId | Asia/Hong_Kong; Z; -08:00 |
| z | Time zone name | General time zone | Pacific Standard Time; PST |
| O | Localized time zone | General time zone | GMT+08:00; UTC+8 |
| X | Time zone ('Z' for zero) | ISO 8601 time zone | Z; -08:30; -0800 |
| x | Time zone | ISO 8601 time zone | -0830; -0800 |
| Z | Time zone | RFC 822 time zone | -0800; +0000; -08:00 |
|  | Escape for text/id | Delimiter |  |
| ' | Single quote | Literal |  |

The count of pattern letters determines the format.

-   Text: For formatting, if the number of pattern letters is 4 or more, the full form is used; otherwise a short or abbreviated form is used if available.

-   Number: For formatting, the number of pattern letters is the minimum number of digits, and shorter numbers are zero-padded to this amount.

-   Number/Text: If the count of pattern letters is 3 or greater, use the Text rules above. Otherwise use the Number rules above.

-   Fraction: Outputs the nano-of-second field as a fraction-of-second. The nano-of-second value has nine digits, thus the count of pattern letters is from 1 to 9. If it is less than 9, then the nano-of-second value is truncated, with only the most significant digits being output.

-   Year: The count of letters determines the minimum field width below which padding is used. If the count of letters is two, then a reduced two-digit form is used.

-   ZoneId: This outputs the time-zone ID, such as 'Europe/Paris'. If the count of letters is two, then the time-zone ID is output. Any other count of letters throws IllegalArgumentException.

-   General time zone: Time zones are interpreted as text if they have names. For time zones representing a GMT offset value, the following syntax is used:

    GMTOffsetTimeZone: GMT Sign Hours : Minutes Sign: one of + - Hours: Digit Digit Digit Minutes: Digit Digit Digit: one of 0 1 2 3 4 5 6 7 8 9

    Hours must be between 0 and 23, and Minutes must be between 00 and 59. The format is locale-independent and digits must be taken from the Basic Latin block of the Unicode standard.

-   RFC 822 time zone: For formatting, the RFC 822 4-digit time zone format is used:

    RFC822TimeZone: Sign TwoDigitHours Minutes TwoDigitHours: Digit Digit

    TwoDigitHours must be between 00 and 23. Other definitions are as for general time zones.

-   ISO 8601 Time zone: The number of pattern letters designates the format for both formatting and parsing as follows:

    ISO8601TimeZone: OneLetterISO8601TimeZone TwoLetterISO8601TimeZone ThreeLetterISO8601TimeZone OneLetterISO8601TimeZone: Sign TwoDigitHours Z TwoLetterISO8601TimeZone: Sign TwoDigitHours Minutes Z ThreeLetterISO8601TimeZone: Sign TwoDigitHours : Minutes Z

    Other definitions are as for general time zones or RFC 822 time zones. For formatting, if the offset value from GMT is 0, "Z" is produced. If the number of pattern letters is 1, any fraction of an hour is ignored. For example, if the pattern is "X" and the time zone is "GMT+05:30", "+05" is produced. If the number of pattern letters is 4 or more, IllegalArgumentException is thrown when constructing a SimpleDateFormat or applying a pattern.
