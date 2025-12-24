---
title: "Simple query"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-record-management/query-syntax-of-custom-object-records/simple-query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:57.965Z"
---

# Simple query

The simple query syntax that can be used to retrieve custom object records through the List records for a custom object API operation.

## Field Existence

Check existence of a field by querying with `_exists_:[FieldName]`.

-   Search for custom fields data where the `title` field has non-null value (the field exists and the value of it is not null). \_exists\_:title


## Field Equality

Check whether the value of a field equals to a certain value by querying with `[FieldName]:[ExpectedValue]`

-   Search for custom fields data with field `status` is `active`. status:active

-   Search for custom fields data with field `author` identical to phrase `"john smith"`. author:"John Smith"


## Ranges

Ranges can be specified for date and numeric fields. See the following statement syntax:

-   Less than: `[FieldName]:<[Upperbound]`

-   Less than or equal to: `[FieldName]:<=[Upperbound]`

-   Greater than: `[FieldName]:>[Lowerbound]`

-   Greater than or equal to: `[FieldName]:>=[Lowerbound]`


## Number

-   Search for custom fields data with field `age` less than `5`. age:<5


## Date

When you query with ranges for date fields, you must use the `\` (backslash) as an escape character for every colon (`\:`) in the date bounds as colon (`:`) is an operator in the query syntax.

-   Search for custom fields data with field `activeDate` less than `2018-01-01T00:00:00.001Z`. activeDate:<2018-01-01T00\\:00\\:00.001Z

-   Search for custom fields data with field `activeDate` less than `2018-01-01T00:00:00Z`. activeDate:<2018-01-01T00\\:00\\:00Z

-   Search for custom fields data with field `activeDate` less than `2018-01-01T00:00:00-08:00`. activeDate:<2018-01-01T00\\:00\\:00-08\\:00

-   Search for custom fields data with field `activeDate` less than `2018-01-01`. activeDate:<2018-01-01

-   Search for custom fields data with field `activeDate` less than `2018-01` (same as `2018-01-01`). activeDate:<2018-01

-   Search for custom fields data with field `activeDate` less than `2018` (same as `2018-01-01`). activeDate:<2018

-   Search for custom fields data with field `activeDate` less than `1514764800000` (`2018-01-01` in milliseconds). activeDate:<1514764800000


Note:

-   Range query by a number on a date field compares field values as a timestamp in milliseconds except that the number is a 4-digit number. In that case, the field values will be considered as the value of a year.

    -   `activeDate:<1` will return custom fields data with `activeDate` less than `1970-01-01T00:00:00.001Z (0000000000001)`.

    -   `activeDate:<2001` will return custom fields data with `activeDate` less than `2001-01-01`.

-   Range query by date only (without time) on date field with full date (with time) compares only their date part.

    -   `activeDate:>2018` will not return custom fields data with `activeDate` has value `2018-01-01T23:59:59Z` since their dates are equal. But it will return custom fields data with `activeDate` is `2018-01-02`.

-   Range query by year only works the same as by the first day of that year. Range query by year-month works the same as by the first day of the month.

    -   `activeDate:>2018` works the same as `activeDate:>2018-01-01`.

    -   `activeDate:>2018-05` works the same as `activeDate:>2018-05-01`.

-   Range query by full date (with time) on date field with date only (without time) will assume the time of the date field is `00:00:00.000Z`.

    -   `activeDate:<2018-01-01T00\:00\:00.001Z` will return custom fields data with `activeDate` value as `2018-01-01`.
