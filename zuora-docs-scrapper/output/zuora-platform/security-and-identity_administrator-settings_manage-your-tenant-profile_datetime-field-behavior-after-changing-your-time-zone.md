---
title: "DateTime field behavior after changing your time zone"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:28.498Z"
---

# DateTime field behavior after changing your time zone

Describes the behavior of dateTime fields after you change your time zone.

This topic provides example values of dateTime fields for the SOAP API, Data Source Exports, and Export ZOQL.

For more information about changing your time zone, see "Before changing your time zone" .

## Fields affected when time zone is changed

-   If you are using WSDL 69 or later, the behavior of all dateTime fields is affected when you change your time zone. The behavior of date fields does not change when you change your time zone.

-   If you are using WSDL 68 or earlier, the behavior of all dateTime fields is affected except for the fields listed in Date field changes in the SOAP API . The fields listed in that article became date fields in WSDL 69 and later, and changing your time zone does not affect how they behave.


## Example DateTime field values

The following sections show example values for dateTime fields in the SOAP API, Data Source Exports, and Export ZOQL. The examples all assume that:

-   You have changed your time zone to Europe, Paris (GMT+01:00).

-   Zuora system time is Pacific Standard Time (GMT-08:00). Note that Zuora system time might also be Pacific Daylight Time (GMT-07:00) depending on the time of the year. See [Date and DateTime format](/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/date-and-datetime-formats) for more information.
