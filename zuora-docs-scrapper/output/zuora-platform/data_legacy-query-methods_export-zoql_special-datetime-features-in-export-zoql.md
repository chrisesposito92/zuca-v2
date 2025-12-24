---
title: "Special date/time features in Export ZOQL"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/special-datetime-features-in-export-zoql"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:48.236Z"
---

# Special date/time features in Export ZOQL

Explore special date and time features in Export ZOQL to simplify querying with timestamps, including relative date expressions and time zone specifications.

Zuora stores all dates as timestamps, but using timestamps in a query can be difficult - for example, setting the start time to be 00:00:00-08:00 and the ending time to be 23:59:59-08:00. For this reason, Export ZOQL has several features designed to simplify the use of dates in queries.

Note:

Export ZOQL is used for creating exports from Zuora data sources, and uses a different syntax than standard ZOQL. These special date/time features are not supported in standard ZOQL.

## Use relative date expressions

Relative date expressions are an alternative way to specify dates and times. You can specify a time relative to now, or a date relative to today.

## Format

The general form of a relative date expression is:

`now/today +/- quantity unit-of-time (time zone)`

where `now/today` is the keyword, `quantity unit-of-time` is the offset, `time zone` indicates the time zone that datetime value represents and is optional. If the `time zone` is not specified in the date expression, the datetime value represents the time in the time zone of your tenant.

You can specify the following units of time:

-   second

-   minute

-   hour

-   day

-   week

-   month

-   year


## Keywords

Use the `now` keyword to specify the current timestamp. Use the `today` keyword to specify the current day.

## Now

Use the `now` keyword to specify the current timestamp. Any expression starting with `now` is a datetime type, and will only match other datetimes exactly.

The following query will return all invoices equal to the current timestamp minus 24 hours. For example, if the current time is 6 PM on January 15, `now - 1 day` will return all invoices generated at 6 PM on January 14.

SELECT \* FROM invoice WHERE UpdatedDate = 'now - 1 day'

To show all invoices generated in the last 24 hours, use `>='now - 1 day'` . For example:

SELECT \* FROM invoice WHERE UpdatedDate >= 'now - 1 day'

If daylight savings started or ended within the previous day, this could include the previous 23 or 25 hours, respectively, depending on the time zone.

## Today

The `today` keyword specifies the current day. An expression starting with `today` is a date, and will match a range of datetimes.

The following query will return all invoices from the previous calendar day, regardless of the time stamp (in other words, all invoices from 00:00 to 23:59).

SELECT \* FROM invoice WHERE UpdatedDate = 'today - 1 day'

Use the following query to find all of the invoices created earlier than 30 days ago:

SELECT \* FROM invoice WHERE UpdatedDate < 'today - 30 days'

## Offsets

See the following examples on how to use `+/- quantity unit-of-time` to specify a time period with an offset.

-   Query the data created later than 30 days ago. SELECT Invoice.InvoiceNumber, Account.Name FROM Invoice WHERE UpdatedDate > 'today - 30 days'

-   Query the invoices whose due dates are within the coming week. SELECT \* FROM invoice WHERE duedate >= 'today' AND duedate < 'today + 1 week'


## Specify time zones

The value of a datetime or relative date expression will change if the time zone changes. For example, 2011-02-01T09:00:00 is a different time when the time zone is America/New\_York or America/Los\_Angeles. Similarly, `today` is a different range of datetimes, because midnight comes at different times depending on your time zone.

Because of this, you must consider time zones when writing Export ZOQL queries.

If you do not specify a time zone offset, the time zone of a query differs according to the WSDL version. If you use WSDL 69 or later, the default time zone of a query is the time zone of your tenant. If you use an earlier WSDL version, the default time zone of a query is Zuora system time zone. See [Before Changing Your Time Zone](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/actions-before-changing-time-zone) and [DateTime Field Behavior After Changing Your Time Zone](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone) for more information.

The format that you specify the time zone for a datetime value is different, depending on whether you use ISO 8601 format or the relative expression.

## Specify time zones in standard ISO 8601 datetimes

If you use ISO 8601 datetime format in your export ZOQL query filter, you must specify the time zone as follows:

`YYYY-MM-DDThh:mm:ssTZD`

where:

`YYYY = four-digit year MM = two-digit month (01=January, etc.) DD = two-digit day of month (01 through 31) hh = two digits of hour (00 through 23) (am/pm NOT allowed) mm = two digits of minute (00 through 59) ss = two digits of second (00 through 59) TZD = time zone designator (Z or +hh:mm or -hh:mm)`

This profile defines two ways of handling time zone offsets:

-   Times are expressed in UTC (Coordinated Universal Time), with a special UTC designator ("Z").

-   Times are expressed in local time, together with a time zone offset in hours and minutes. A time zone offset of "+hh:mm" indicates that the date/time uses a local time zone which is "hh" hours and "mm" minutes ahead of UTC. A time zone offset of "-hh:mm" indicates that the date/time uses a local time zone which is "hh" hours and "mm" minutes behind UTC.


For example:

`2019-11-05T08:15:30-05:00` corresponds to November 5, 2019, 8:15:30 am, US Eastern Standard Time. `2019-11-05T13:15:30Z` corresponds to the same instant.

## Specify time zones in relative date expressions

If you use the relative date expressions in your query filter and you want to specify the time zone offset, you must include the offset in parentheses at the end of the expression as described in Format of relative date expressions.

For example:

SELECT \* FROM invoice WHERE UpdatedDate < 'today - 30 days (-08:00)'

Because relative date expressions can span daylight savings start and end dates, you can encounter a case where the GMT offset changes within the relative range of the expression. To solve this problem, you can specify the time zone offset with the [time zone database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). The following query uses the time zone database name `America/Los_Angeles` as the time zone offset.

SELECT \* FROM invoice WHERE UpdatedDate < 'today - 30 days (America/Los\_Angeles)'

In addition, the Zuora system supports the city name containing spaces instead of underscores when you specify a time zone name. For example, the following query is the same as the previous:

SELECT \* FROM invoice WHERE UpdatedDate < 'today - 30 days (Los Angeles)'

The GMT offset based on daylight savings time is automatically adjusted when you specify the time zone with a time zone database name or the corresponding city name.

## Query with datetime functions

In Export ZOQL queries, you can use the following functions to extract information about datetimes:

-   `DATE() -` interprets a datetime value as a numerically expressed date without hour, minutes, or seconds.

-   `YEAR() -` returns only the year value of a timestamp. Example: `YEAR(2011-02-01T08:52:13)` returns `2011`

-   `MONTH() -` returns only the numeric value of the month from a timestamp. Example: `MONTH(CreatedDate)` returns `2` if the `CreatedDate` timestamp value in a record was `2011-02-01T08:52:13`

-   `WEEK() -` returns only the numeric value of the week (values 0-53 from a timestamp depending on the year and the date). Example: `WEEK(2015-01-01T00:00:01)` returns 0 and in the year 2015 `WEEK(2015-01-04T00:01:01)` returns 1 because after Saturday midnight (formally: Sunday) the new week begins.

-   `WEEKOFYEAR() -` ISO 8601 compliant version of `WEEK()` , where the first week of the year (01) is defined to start on Monday 00:00:01 and contains the first Thursday of the year. `WEEKOFYEAR()` , returns only the numeric value of the week (values 0-53 from a timestamp depending on the year and the date). Example: In the year 2015, `WEEKOFYEAR(2015-01-01T00:01:01)` returns 01. In the year 2016, `WEEKOFYEAR(2016-01-01T00:00:01)` returns 53.

-   `QUARTER() -` makes a standard interpretation of a datetime value as a numeric quarter value ( `1-4` ). This function defines quarters by a traditional three-month calendar quarters starting on January 1, April 1, July 1, and October 1. Offset quarters are not supported.


For example:

SELECT YEAR(UpdatedDate) FROM Invoice SELECT SUM(Amount),QUARTER(UpdatedDate) FROM Invoice GROUP BY QUARTER(UpdatedDate) SELECT SUM(UnitPrice) FROM InvoiceItem GROUP BY SKU,UpdatedDate HAVING YEAR(UpdatedDate)=2017

You cannot use datetime functions in `WHERE` clauses.
