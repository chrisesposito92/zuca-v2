---
title: "What happens after changing  time zone"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/what-happens-after-changing-time-zone"
product: "zuora-platform"
scraped_at: "2026-02-20T17:41:24.179Z"
---

# What happens after changing time zone

Use this reference to learn what happens after you change your time zone.

## Operations will be based on your new time zone

After you change your time zone, all UI and API operations will be based on the new time zone. For example, if you change your time zone to EST (Eastern Standard Time, GMT-05:00):

-   Times on the Zuora UI will be converted to EST. A time previously displayed as 12:30 PST (Pacific Standard Time, GMT-08:00) will now be displayed as 15:30 EST.​ For example:

    -   A recurring Bill Run or Payment Run that was scheduled for 12:30 PST will continue to be executed at 12:30 PST, but the execution time displayed on the Zuora UI will be 15:30 EST.

    -   When you schedule a new recurring Bill Run or Payment Run, the time of day you select will be based on EST.

-   DateTime values will be converted to EST. For example:

    -   Through the REST API: If a field returns a value of `2015-01-01T09:00:00` before you change your time zone, it will return `2015-01-01T12:00:00` after you change your time zone.

    -   Through the SOAP API: If a field returns a value of `2015-01-01T09:00:00-08:00` before you change your time zone, it will return `2015-01-01T12:00:00-05:00` after you change your time zone.

-   Values passed into and returned from the SOAP API and REST API will be based on EST. For example, if you pass in 2016-01-01 as the contract effective date of a subscription, the subscription will become effective on 2016-01-01 at 00:00 EST.


## Reports and Data Exports will be based on your new time zone

After you change your time zone, all reports and data exports will be based on the new time zone.

For example, if you change your time zone to EST, when you perform a data source export for all invoices created on 2015-01-01, the export will contain all invoices created on 2015-01-01 from 00:00 to 23:59 EST.

You should take the time shift into consideration when creating reports and data exports for dates close to the date that you changed your time zone. You can see when you changed your tenant time zone by navigating to and looking under Change History.

Note:

The dates and times on the Reporting page UI will still be displayed in Pacific Time, even after you have changed to a new time zone. However, all reports generated through Reporting will be correctly based on your new time zone.

## DateTime field behavior will change to reflect your new time zone

After you change your time zone, the behavior of dateTime fields in the SOAP API, Data Source Exports, and Export ZOQL will change to reflect your new time zone. See DateTime field behavior after changing your time Zone for more information and example dateTime field values.
