---
title: "Overview of Data Query"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/overview-of-data-query"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:13.352Z"
---

# Overview of Data Query

The Data Query feature allows exporting data from Zuora using asynchronous, read-only SQL queries, supporting multiple objects and providing API and UI access.

The Data Query feature enables you to export data from your Zuora tenant by performing asynchronous, read-only SQL queries. Because of the flexibility of SQL, you can use a single data query to retrieve data from multiple objects that have not been pre-joined by Zuora. See the following features of Data Query:

-   Data Query supports the SQL-based job to query all your tenant’s data.

-   Data Query provides easy-to-use POST and GET API.

-   Data Query provides User Interface for you to submit queries through the simple text box under Extension Studio > Data Query.

-   Data Query supports the encryption feature when using personal RSA key pairs.

-   Data Query does not support synchronous queries. All queries are asynchronous.

-   Data Query only supports the read-only SQL statements. It does not support non-read only SQL statements such as UPDATE, DELETE, INSERT, ALTER TABLE, and so on.


Typically you can use Data Query in case that you:

-   Query from tables that are not available in other data extraction applications

-   Make more JOINs than Data Source Exports or Reporting can support

-   Prefer using SQL functions rather than ZOQL

-   Create Workflows that need to work with data


## Using Data Query

You can use Data Query through API, User Interface, and Workflow tasks.

When you submit a data query, you can select one of the following data sources to run the query:

-   Live: Zuora transactional databases, which are updated in near real-time.

-   Zuora Warehouse: the high-performance data warehouse provided by Zuora. This option is available only if you have the Zuora Warehouse feature enabled. For more information, see [Zuora Warehouse](/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview).


You can use Data Query through API. For information, see [Use Data Query through API](/zuora-platform/data/data-query/overview-of-data-query/use-data-query-through-api).

Data Query returns timestamps in different time zones depending on the data source:

-   Live: Uses tenant's preferred timezone

-   Zuora Warehouse: Uses PST (America/Los\_Angeles)


This behavior is expected and consistent across US, EU, APAC regions. If comparing results between Live and Warehouse, convert timestamps to a common timezone (recommended: UTC).

Helpful snippets:

-   UTC: SELECT at\_timezone(createddate, 'UTC') AS created\_utc

-   Pacific: SELECT at\_timezone(createddate, 'America/Los\_Angeles') AS created\_pacific


Here are a few examples:

Convert to UTC

SELECT at\_timezone(createddate, 'UTC') AS created\_utc FROM payment;

Convert to Pacific Time (DST-aware)

SELECT at\_timezone(createddate, 'America/Los\_Angeles') AS created\_pacific FROM payment;

## Using Data Query through user interface

You can create new data queries, save data queries, and view the query history through Data Query UI. See [Using Data Query through User Interface](/zuora-platform/data/data-query/use-data-query-through-user-interface/create-new-data-queries) for the details.

## Using Data Query through workflow tasks

Export data from your Zuora tenant through workflow tasks. For more information see [Retrieve: Data Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-data-query).

## Notes and limitations

Note:

Data Query has been adapted from Trino [v351](https://trino.io/docs/current/functions.html).

## Query processing limitations

See the query processing limitations in the table below.
| Definition of limitation | Limitation value for Data Query Live | Limitation value for Zuora Warehouse |
| --- | --- | --- |
| The maximum number of input records per table after filters have been applied | 10,000,000 | Unlimited |
| The maximum number of output records | 500,000 | 50,000,000 |
| The maximum number of simultaneous queries per tenantThe Data Query jobs in the in_progress status are counted towards the simultaneous query limit per tenant. However, you will not immediately get a failure when you submit a query after you reach the simultaneous query limit. This query is added to the queue if the queue is not full. See the queued query limitation below for more information.This is a tenant-level limitation, regardless of whether the Multi-entity feature is enabled or not.The number of queries against each data source is calculated separately. For example, you can have three running queries against live transactional databases and 14 queries against Zuora Warehouse at the same time. | 5 | 15 |
| The maximum number of queued queries after reaching the limitation of simultaneous queries per tenantThe Data Query jobs submitted after you reach the simultaneous query limit are added to the queue. You will encounter failures in submitting the query when you exceed the limit of queued queries. The Data Query jobs in the accepted status are counted towards the queued query limit.This is a tenant-level limitation, regardless of whether the Multi-entity feature is enabled or not.The number of queries against each data source is calculated separately. For example, you can have eight queued queries against live transactional databases and 28 queries against Zuora Warehouse at the same time. | 10 | 30 |
| The maximum processing time for each query in hours | 4 (One hour for the first attempt and three hours for three retries.) | 4 (One hour for the first attempt and three hours for three retries.) |
| The maximum size of memory allocated to each query in GB | 2 | 2 |
| The maximum number of characters in a query string submitted through API or Workflow | 1,000,000 | 1,000,000 |
| The maximum number of characters in a query string submitted through Data Query UI | 20,000 | 20,000 |
| Maximum number of stages in a query | 200 | 200 |

Note:

When querying large transactional tables such as `InvoiceItem`, `CreditMemoItem`, `DebitMemoItem`, and `TaxationItem`, you should include additional filtering logic in the `WHERE` clause to ensure that the number of input records is less than 10 million. If the number of input records is greater than 10 million, the query will fail.

## Examples for Query Processing Limitations in Data Query Live

For example, suppose that the `InvoiceItem` table contains a total of 10,200,000 records and the `Subscription` table contains a total of 100,000 records, and you submit the following data queries:

-   `SELECT * FROM InvoiceItem`

    -   Number of input records: 10,200,000

    -   Number of output records: 0


    This query will fail.

-   `SELECT * FROM InvoiceItem`

    `WHERE UpdatedDate >= TIMESTAMP '2018-06-02 18:17:07 -07:00'`

    -   Number of input records: 600,000

    -   Number of output records: 600,000


    This query will fail.

-   `SELECT * FROM InvoiceItem`

    `WHERE UpdatedDate >= TIMESTAMP '2018-06-02 18:17:07 -07:00' LIMIT 100000`

    -   Number of input records: 600,000

    -   Number of output records: 100,000


    This query will succeed.

-   SELECT \* FROM InvoiceItem, Subscription

    WHERE InvoiceItem.id = 'c92c8f9-61e3-1799-0161-e4d0317a088e'

    -   Number of input records in `InvoiceItem` table: 1

    -   Number of input records in `Subscription` table: 100,000

    -   Number of output records: 100,000


    This query will succeed.

-   SELECT \* FROM InvoiceItem

    JOIN Subscription ON Subscription.id = InvoiceItem.subscriptionid

    WHERE InvoiceItem.id = 'c92c8f9-61e3-1799-0161-e4d0317a088e'

    -   Number of input records in `InvoiceItem` table: 1

    -   Number of input records in `Subscription` table: 100,000

    -   Number of output records: 1


    This query will succeed.


For another example, suppose that you have [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) enabled in your tenant, and five query jobs in your Entity A are in the `in_progress` status. After switching to Entity B, if you submit another query job, the job will be in the `accepted` status because the maximum number of simultaneous queries for a tenant is five. This limitation applies at the tenant level.

## Functionality Limitations

Data Query does not support currency rounding for billing objects. It returns raw data without rounding.

## Retry behavior

Non-retryable queries are marked as failed if the query process is not successful.

Data Query makes up to three retries for retryable queries. If the first attempt and three retries all fail, the query is considered failed.

Note that the maximum processing time for each attempt is one hour.
