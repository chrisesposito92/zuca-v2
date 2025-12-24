---
title: "Compare datetimes with dates"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/special-datetime-features-in-export-zoql/compare-datetimes-with-dates"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:50.724Z"
---

# Compare datetimes with dates

Learn how to filter objects in Export ZOQL by comparing datetime and date values, including handling time zones and ISO 8601 format.

Export ZOQL provides the capability to filter objects by comparing a datetime value with a date value.

See the following comparison between filtering by datetime values and by a date value. These two queries retrieve the same data.

| Filter with a datetime value | Filter with a date value |
| --- | --- |
| SELECT * FROM Invoice WHERE UpdatedDate >= '2011-02-01T00:00:00' and UpdatedDate < '2011-02-02T00:00:00' | SELECT * FROM invoice WHERE UpdatedDate = '2011-02-01' |

If you specify only a date, Export ZOQL interprets it as to include any time within the 24-hour period specified by that date. If you have multiple invoices created at different times on 2011-02-01, this query will find all of them. Similar rules apply when using other comparison operators. For example, the following query returns every invoice that was created on or after 2011-02-02:

SELECT \* FROM invoice WHERE UpdatedDate > '2011-02-01'

Note that the datetime value must be the standard ISO 8601 format. If you do not specify the time zone in the datetime value, the default time zone is used. The default time zone differs according to the WSDL version. See [Before Changing Your Time Zone](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/actions-before-changing-time-zone) and [DateTime Field Behavior After Changing Your Time Zone](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone) for more information.

If you want to specify the time zone in the datetime value, you must specify time zones in standard ISO 8601 datetimes.

You cannot specify the time zone in a date value. When Export ZOQL interprets a date value, the default time zone is used.
