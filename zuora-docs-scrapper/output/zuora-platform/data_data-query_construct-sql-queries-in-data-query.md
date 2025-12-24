---
title: "Construct SQL Queries in Data Query"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/construct-sql-queries-in-data-query"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:18.457Z"
---

# Construct SQL Queries in Data Query

Here is an overview of constructing SQL queries in Data Query, including supported SQL syntax and sample queries for retrieving data from your Zuora tenant.

This article summarizes the supported SQL syntax in Data Query and provides sample queries.

## Supported SQL syntax

Data Query only supports SQL statements that retrieve data from your Zuora tenant. You cannot use SQL queries to create, update, or delete data in your Zuora tenant. Data Query supports the following SQL statements:

-   SHOW TABLES - For retrieving a list of the available tables in your Zuora tenant
-   SHOW COLUMNS and DESCRIBE - For retrieving metadata about a table in your Zuora tenant
-   SHOW FUNCTIONS- For retrieving a complete list of the functions that you can use in SELECT statements
-   SELECT - Includes support for joins, subqueries, unions, groupings, orderings, and so o

Note: Data Query uses Trino version 351.

## SHOW TABLES statement

The `SHOW TABLES` statement retrieves a list of the available tables in your Zuora tenant. It will list all the objects in your tenant. You can use this statement to understand Zuora Data Model as it applies to your tenant.SHOW TABLES Table account accountingcode accountingperiod amendment billingrun ...

You can find all the available tables in the "Available Tables" section below. Once you know the tables that you can query from, check out the available fields.

## SHOW COLUMNS and DESCRIBE Statements

The following statements retrieve metadata about tables in your Zuora tenant:

-   `SHOW COLUMNS FROM|IN {table}`
-   `DESCRIBE {table}`
-   `DESC {table}`

The different statements are functionally equivalent.

Each row in the exported data describes a column in the specified table. When constructing SQL queries, you need to know the table columns to be retrieved. Columns are also helpful when using SQL JOINs. When two tables share a column, for example, the column `ID` in the `Account` table can be found in other tables and is called `AccountID`, you can use JOIN to discover insights across objects.SHOW COLUMNS FROM Account Column,Type,Extra,Comment accountnumber,varchar,,AccountNumber additionalemailaddresses,varchar,,AdditionalEmailAddresses allowinvoiceedit,boolean,,AllowInvoiceEdit autopay,boolean,,AutoPay baddebt\_\_c,varchar,,BadDebt\_\_c balance,"decimal(18,6)",,Balance

The possible column types are:

-   `bigint`
-   `boolean`
-   `date`
-   `decimal(18,6)`
-   `timestamp with time zone`
-   `varchar`

To learn more about the available tables, see the "Available Tables" section below.

## SHOW FUNCTIONS statement

To retrieve the complete list of the functions that you can use in `SELECT` statements, you can use the `SHOW FUNCTIONS` statement. You can view the list of functions in the [Data Query Functions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/04c06c7d-5c07-4a27-b403-6c404275c28a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA0YzA2YzdkLTVjMDctNGEyNy1iNDAzLTZjNDA0Mjc1YzI4YSIsImV4cCI6MTc2NjY4ODAxNiwianRpIjoiMzk4MWE1NmY4YzU5NDgyNWE1OTdlZmQ4NDZiM2U2MTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qgUUYm7zoq0GhdxXkKmxSIiDmQcJkFHX2Am3gD_9u8A&response-content-disposition=attachment%3B+filename%3D%22Data_Query_Functions.csv%22) file.

Note:

This file contains the list of all the functions that are currently available. However, as the list of functions is frequently updated, you can get the latest set of available functions from the application by running the`SHOW` `FUNCTION` query.

1.  Navigate to Extension Studio > Data Query.
2.  On the top-right, click Create New Data Query.
3.  Type `SHOW FUNCTION` and click Run Query. The latest list of available functions is displayed.
4.  Click Download to download the .csv of the available functions.

For example:SHOW FUNCTIONS Function,Return Type,Argument Types,Function Type,Deterministic,Description ... min,E,E,aggregate,true,Returns the minimum value of the argument min,array(E),"E, bigint",aggregate,true,Returns the minimum values of the argument min\_by,V,"V, K",aggregate,true,"Returns the value of the first argument, associated with the minimum value of the second argument" min\_by,array(V),"V, K, bigint",aggregate,true,Returns the values of the first argument associated with the minimum values of the second argument minute,bigint,interval day to second,scalar,true,minute of the hour of the given interval minute,bigint,time,scalar,true,minute of the hour of the given time minute,bigint,time with time zone,scalar,true,minute of the hour of the given time minute,bigint,timestamp,scalar,true,minute of the hour of the given timestamp minute,bigint,timestamp with time zone,scalar,true,minute of the hour of the given timestamp ...

To maximize the utility of Data Query, Zuora has made a large number of functions available for use in ​ `SELECT` ​ statements. For these functions to complete successfully, their usage must conform to the limitations described in ​ [Limitations ​](/zuora-platform/data/data-query/overview-of-data-query#concept-rdxhe0o6__title-1738) ​.

## Accessing Billing and Revenue objects in Data Query

Depending on where you access Data Query, the way you reference Billing and Revenue objects differs slightly:

-   In Zuora Billing UI (Platform Data Query)

    -   Use Billing, Payments, and Platform objects as is.

    -   Use Revenue objects with the prefix `revenuelive.<rev_object_name>`

-   In Zuora Revenue UI (Revenue Data Query)

    -   Use Revenue objects as is.

    -   Use Billing, Payments, and Platform objects with the prefix `live.<billing_object_name>`


These prefixes help Data Query identify whether an object belongs to the Billing (Platform) or Revenue data model when both are available in the same environment.

## SELECT statements

You can use `SELECT` statements to retrieve object data from your Zuora tenant.

Data Query supports SQL-92 syntax for SELECT statements, including (but not limited to) joins, subqueries, unions, groupings, and orderings. Data Query also supports operators and functions such as `min`, `max`, `avg`, `count`, `year`, and so on. See the "Examples" section below for some sample queries.

## Select data from one table

`SELECT {column name, ..., ...} FROM {table}`

When querying from one table, you can list column names with or without type indicators.For example:

-   SELECT name FROM Account
-   SELECT account.name FROM Account

If the table contains more than 1,000,000 records, the query will fail because it reaches the input limit of Data Query.

If the table contains less than 1,000,000 records but more than 100,000 records, the query will fail because it reaches the output limit of Data Query. You can add a WHERE clause to narrow down the output records. See [Best practices of Data Query](/zuora-platform/data/data-query/best-practices-when-writing-data-queries) for more information.

## Select data from multiple tables

`SELECT {column name, ..., ...} FROM {table name, ..., ...}`

When querying from one table, you must list column names with type indicators. For example:SELECT account.name, subscription.id FROM Account, Subscription

Note that the Data Query processing limitations are applicable.

For information on joining data across multiple tables, see [Join data across multiple tables](/zuora-platform/data/data-query/construct-sql-queries-in-data-query/join-data-across-multiple-tables).

## Filter deleted records using WHERE clause

Deleted records are not included by default in Data Query Live queries. You can always filter deleted records using WHERE clause in Data Query Live. Note that you must add `deleted` in the SELECT clause as a selected column if you use the `deleted` column in the WHERE clause. For example:

-   The deleted records can be specifically found by querying against the `deleted` column in appropriate tables with the following syntax:

    SELECT name, deleted FROM Account, Subscription WHERE Account.deleted = TRUE
-   The deleted records can be filtered out with the following syntax:

    SELECT name, deleted FROM Account WHERE deleted = FALSE

Note that Data Query is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through Data Query.
