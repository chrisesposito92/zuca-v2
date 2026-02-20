---
title: "Data Source Exports"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone/data-source-exports"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:24.458Z"
---

# Data Source Exports

Use this reference to learn how changing the time zone affects Data Source Exports.

Example field: Subscription.CreatedDate

| Value in SOAP Response | Value in CSV File | Explanation |
| --- | --- | --- |
| 2015-01-01T16:00:00+01:00 | 2015-01-01T16:00:00+01:00 | DateTime fields always have your tenant time zone offset. |
| 2015-01-01T09:00:00+01:00 | 2015-01-01 | If the field value is midnight in Zuora system time, the CSV file only has the date part of the field value.In this example, 2015-01-01T09:00:00+01:00 is equal to 2015-01-01T00:00:00-08:00, which is midnight in Zuora system time, so only 2015-01-01 is included in the CSV file.Note: If you are using WSDL 68 or earlier, the CSV file only has the date part of the field value even if the field value is not midnight in Zuora system time. |

When you perform a data source export from the Zuora UI, the date format will be localized based on the Locale configured in . See [Managing your tenant profile](/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile) for more information.
