---
title: "Best practices when loading data into your data warehouse"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/best-practices-when-loading-data-into-your-data-warehouse"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:32.494Z"
---

# Best practices when loading data into your data warehouse

Learn best practices for loading data into your data warehouse, including initial extracts, incremental updates, and table management.

You can load data into your data warehouse using an initial historical extract and load, followed by incremental data updates using AQuA.

Each of your incremental extractions only contains records that were created, updated or deleted during the time interval specified by the `WHERE` clause of each query. To load the extracted data into your data warehouse, you must merge the incremental data with previously loaded data.

## Query and staging tables

To perform the merge, you need two tables for each Zuora data source in your data warehouse:

-   A staging table for loading the incremental data. Each time you load an incremental extraction, you must truncate this table and insert the incremental data into this table.

-   A query table containing the full replica of the data source. Data from the staging table is merged into the query table as part of each load operation.


## Naming convention of the query and staging tables

Define a consistent naming convention of the query and staging tables for all the data sources. For example:

| Data source | Query table name | Staging table name |
| --- | --- | --- |
| Account | account | account_staging |
| InvoiceItem | invoiceitem | invoiceitem_staging |

## Table schema

To facilitate data loading, Zuora recommends that:

-   The query and staging tables of each data source should have exactly the same schema.

-   You should use exactly the same column order in both the table schema and the ZOQL query.

-   The first column of the query or staging table should be of `boolean` or `integer` type and named `is_deleted` , to capture rows associated with objects that have been deleted in Zuora.
