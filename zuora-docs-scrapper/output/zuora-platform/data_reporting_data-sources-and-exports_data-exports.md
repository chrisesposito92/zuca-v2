---
title: "Data Exports"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-exports"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:50.257Z"
---

# Data Exports

Learn about Data Exports

The Data Exports feature enables users to export predefined data from your Zuora tenant. Zuora platform administrators can enable the following exports for users:

-   Invoice PDF

-   All Users List CSV. This export is available to Zuora platform administrators only.


To enable these exports for a user, assign the user a Reporting role that has the Enable Exports permission. For more information, see [Reporting roles](/zuora-platform/system-management/administrator-settings/user-roles/reporting-roles).

For more information about the retention period of exported data, see the retention period of "Legacy Export Result Files" in [Zuora data retention policy](/support-and-policies/policies/file-retention-policy).

Note:

Zuora previously supported other data exports in addition to Invoice PDF and All Users List CSV. The other data exports are deprecated and may not be available in your Zuora tenant. This article provides information about Invoice PDF, All Users List CSV, and the deprecated data exports.

As an alternative to data exports, Zuora data sources provide more powerful reporting and export capabilities. See [Introduction to Data sources](/zuora-platform/data/reporting/data-sources-and-exports/introduction-to-data-sources) and [Generate a data source export](/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export) for more information.

To know about the available exports, refer to [Available exports](/zuora-platform/data/reporting/data-sources-and-exports/data-exports/available-exports).

To know about export links, refer to [Export links](/zuora-platform/data/reporting/data-sources-and-exports/data-exports/export-links).

## Limits

Size per ZIP file

Of the following export data types, the size of the ZIP file in one data export cannot exceed 2 GB by default.

-   Invoice PDF

-   CustomerAccounts Zip

-   MRR (As of Day) Trend

-   MRR (Contracted) Changes

-   Subscriptions Zip

-   Orders Zip

-   Object Sharing Exceptions

-   All Users List CSV


## Working with object data

In programming languages, customer accounts, subscriptions, products, and other parts of your subscription business are called objects. Each object has a number of fields contained within it, such as names, dates, and payment methods.

When you see fields in the Zuora user interface, very often those fields are using information from these internal fields. When you export data from the Zuora user interface, you export all of the data contained within those objects. You can then use that data in any reporting tool that accepts CSV-formatted files.

## Export date formats

When using WSDL 68 or earlier, the output format of dates and times in data source exports depends on the value. If a time is stored with the date, the resulting data is displayed as a date and time. If no time is stored with the date or the time is `00:00:00` , in some cases the result is displayed as a date with no time component. Depending on how data is entered into Zuora, applications that use data source exports may need to accommodate both date and dateTime output formats for the same field.

From WSDL 69 and later, the output format of dates and times depends on the field type. The output from dateTime fields is a dateTime and the output from date fields is a date. For example:

-   A value of `2015-02-` `13T` `23` `:18:00-08:00` is exported from a dateTime field as `2015-02-13T23:18:00-08:00`

-   A value of `2015-02-13` or `2015-02-` `13T` `23` `:18:00-08:00` is exported from a date field as `2015-02-13`
