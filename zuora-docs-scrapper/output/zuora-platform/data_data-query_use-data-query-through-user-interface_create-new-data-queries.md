---
title: "Create new data queries"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/use-data-query-through-user-interface/create-new-data-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:46.564Z"
---

# Create new data queries

Learn how to create new data queries through Data Query UI to export data from your Zuora tenant.

The Data Query feature enables you to export data from your Zuora tenant by performing asynchronous, read-only SQL queries. You can create new data queries, save data queries, and view the query history through Data Query UI.

1.  Navigate to Extension Studio > Data Query in the left navigation menu.
2.  Click CREATE NEW DATA QUERY on the Data Query page.
3.  Enter a SQL query into the text box on the Create Data Query page. See [Constructing SQL Queries in Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query) for the supported SQL syntax, the available tables, and sample queries.
4.  Set the query options on the Create Data Query page:

    -   USE INDEX JOIN: Select the USE INDEX JOIN checkbox if you want to use Index Join in your query. Index join is useful when you have a specific reference value in your WHERE clause to index another large table by. See [Use Index Join](/zuora-platform/data/data-query/best-practices-when-writing-data-queries/general-best-practices#concept-ac-1682__title-2026) for more information.

    -   READ DELETED: Select the READ DELETED checkbox if you want to retrieve only the deleted records. If you do not select the READ DELETED checkbox, the query retrieves only the non-deleted records. Note that if you select the `deleted` column in the SQL query, both non-deleted and deleted records will be retrieved regardless of whether you select this checkbox or not.

    -   COMPRESSION: Select the compression format for the returned query result from the picklist. The supported values are:

        -   NONE

        -   GZIP

        -   ZIP

    -   OUTPUT FORMAT: Select the output format for the returned query result from the picklist. The supported values are:

        -   JSON - Each row in the query results is a JSON object. The format of the query result files is [JSON Lines](https://jsonlines.org/) .

        -   CSV - Each row in the query results is a comma-separated list of values.

        -   TSV - Each row in the query results is a tab-separated list of values.

        -   DSV - Each row in the query results is a list of values separated by your custom delimiter. When you select DSV from the picklist, the COLUMN SEPARATOR field is displayed on the right side of the OUTPUT FORMAT field. Input your custom delimiter character into the COLUMN SEPARATOR field.

    -   SOURCE: Select the source that you query against. The possible values are:

        -   LIVE - run the query against Zuora transactional databases, which are updated in near real-time.

        -   ZUORA WAREHOUSE - run the query against Zuora Warehouse, which has better performance and fewer limitations than the Zuora transactional database. This option is available only if you have the Zuora Warehouse feature enabled in your tenant. For more information, see [Zuora Warehouse](/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview) . If this option is selected, you can see your warehouse size to the right of the drop-down list.

    -   Click RUN QUERY to submit your new query. Upon completion of the new query, you can click DOWNLOAD to download the query result. To save your new query, click SAVE QUERY .
