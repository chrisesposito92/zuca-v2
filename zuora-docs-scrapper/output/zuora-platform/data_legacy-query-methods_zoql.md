---
title: "ZOQL"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/zoql"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:53.581Z"
---

# ZOQL

The Zuora Object Query Language (ZOQL) is a SQL-like language used in the SOAP API to construct queries, requiring basic SQL knowledge. It has specific syntax and limitations, such as no support for complex queries or sorting results.

The Zuora Object Query Language (ZOQL) is a simple SQL-like query language used to construct query calls in the SOAP API. The query responses returned by ZOQL do not have a guaranteed sort order.

Basic knowledge and experience with SQL is required to work with ZOQL.

## Syntax

The basic query syntax is:

select field\_names from object where filter\_statements

Use lower case for all keywords.

## ZOQL Limitations

The following limitations apply to ZOQL statements:

-   ZOQL for SOAP queries do not support parentheses to indicate order of operation to retrieve data with multiple combined conditions in query() calls. The `and` operator takes priority in the order of operation over the `or` operator. Users must take this into account when creating `query()` calls.

-   Zuora does not support complex queries, IN operator, and joining for query().

-   Nested aggregate functions are not supported for query().

-   You cannot use the asterisk wild card (\*) for field names with a query() call. You must explicitly specify a field name.

-   ZOQL does not support sorting results in ascending or descending order.


## Conditions Allowed

A maximum of 200 conditions are allowed in a `WHERE` clause of a query() call. For example, you can have up to 200 distinct AND or OR clauses.

## Number of Records Returned

The query() call allows the following number of records to be returned:

-   For versions lower than 6.0: 100 records

-   For versions 6.0 and higher: 2,000 records


Use the [queryMore()](/zuora-platform/integration/apis/soap-api/soap-api-calls/querymore) call to page through additional results.

## Case Sensitivity

In general, queries are not case sensitive. However, explicit string values are case-sensitive, such as pick-list values. For example `Batch1` for Batch field.

## Field Names

The field\_names placeholder represents a list of one or more fields that exist in the object. You cannot use single or double quotation marks on the field names. Use a comma to separate one value from the next.

For example:

select AccountId, FirstName, LastName from contact where State = 'California'

## Objects

The object placeholder represents an object from the Zuora API. Each query can name only one object. To select data from related objects in a single operation, use an Export ZOQL query instead of a ZOQL query.

## Filter Statements

The filter\_statements placeholder represents comparisons being made on different types of data in order to find items matching specified criteria. A filter statement takes the following form:

`field_name​ operator value`

For example, in the following query AutoPay is a filter statement:

select AccountNumber from account where AutoPay !=true

You may need to perform a separate ZOQL query to determine the value of a filter statement. For example, to select all child accounts of an account, you need specify the account ID in a filter statement:

select AccountNumber,Name from Account where ParentId = '2c92c0f95be68649015bf14e001f2760'

To determine the account ID from the account number, use a separate ZOQL query:

select Id from Account where AccountNumber = 'A00000079'

You can also use custom fields in filter statements. Make sure that the custom field you specified in the filter statement is included in the WSDL file. For example:

select AccountNumber from account where Subsidiary\_\_c='US'

You cannot use `null` on date-type custom fields..

## Date and dateTime Values in Filter Statements

Before R190, Zuora ignored time zone offset components in dateTime values for queries. From R190 and later, if you use a time zone offset component in your query, it will be applied when making a query.

Note:

-   In WSDL 68 and earlier, there are 56 date fields in the Zuora SOAP API that Zuora treats as dateTime fields. From WSDL 69, Zuora treats these fields as date fields. These fields are no longer compatible with dateTime values. The data type of the filter value must match the field type in the filter statement. See [Date Field Changes in the SOAP API](/zuora-platform/integration/apis/soap-api/date-field-changes-in-the-wsdl) for more information.

-   Using an unsupported dateTime format in ZOQL may cause performance issues. See [Date and dateTime Formats](/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/date-and-datetime-formats) for format requirements.


## Valid Filter Statements in WSDL 68 and Earlier

Zuora treats date fields as dateTime fields. You can filter date or dateTime fields with date or dateTime values. For example:

select AutoRenew from subscription where ContractEffectiveDate = '2015-02-28T23:54:01-08:00'

DateTimes with a time zone offset that is not Pacific Time (GMT-7/-8) are converted to Pacific Time (GMT-7/-8). This could shift the date of items returned from a query of date fields. For example, the following query will return subscriptions with a contract effective date of `2014-11-30` even though the query is for `2014-12-01` :

select AutoRenew from subscription where ContractEffectiveDate = '2014-12-01T01:30:00+00:00'

The reason for this date shift is that Zuora converts the dateTime value `2014-12-01T01:30:00+00:00` to `2014-11-30T05:30-08:00` before the query is completed. The date component of the converted value is the value used to complete the query.

## Valid Filter Statements in WSDL 69 and Later

Date fields are strictly treated as date fields and dateTime fields are strictly treated as dateTime fields. For example:

select AutoRenew from subscription where ContractEffectiveDate = '2015-02-28'

Incorrect formatting will return an `INVALID_VALUE` error.

## Automatic Filtering of RatePlan Objects

When you select data from RatePlan objects, Zuora automatically filters the data by applying the following filter statement:

AmendmentType = null or AmendmentType != 'RemoveProduct'

You can override this automatic filter statement by specifying the following filter statement:

AmendmentType = null or AmendmentType != null

This workaround is not necessary in Export ZOQL queries.

## Examples

-   The following query selects all RatePlan objects, except any RatePlan objects with AmendmentType equal to RemoveProduct: select Id from RatePlan To select all RatePlan objects, use the following query instead: select Id from RatePlan where AmendmentType = null or AmendmentType != null

-   The following query selects a single RatePlan object: select Id from RatePlan where Id = '2c92c0f946f58862014719c525752fec' However, if the RatePlan object has AmendmentType equal to RemoveProduct, the query results will be empty. To ensure that the query always returns data about the specified RatePlan object, use the following query instead: select Id from RatePlan where AmendmentType = null and Id = '2c92c0f946f58862014719c525752fec' or AmendmentType != null and Id = '2c92c0f946f58862014719c525752fec'
