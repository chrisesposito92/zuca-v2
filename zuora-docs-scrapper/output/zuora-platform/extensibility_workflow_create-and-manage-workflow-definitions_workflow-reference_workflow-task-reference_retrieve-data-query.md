---
title: "Retrieve: Data Query"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-data-query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:54.948Z"
---

# Retrieve: Data Query

This reference explains the Retrieve: Data Query task.

This task exports data from your tenant by running SQL queries. Because of the flexibility of SQL, you can use a single SQL query to retrieve data from multiple data objects that are not pre-joined by Zuora.

The data query task runs the entered query and exports data in a ZIP or CSV file.

See [SQL queries in Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query) for the supported SQL syntax, the available tables, and sample queries.

## Task settings

-   File Format: Select the format for the exported file. Available formats are CSV, TSV, DSV, and JSON.

-   Mode: Select one of the following data sources to run the query for your task:

    -   Live - Run data queries against Zuora transactional database, which are updated in near real-time.

    -   Warehouse - run the query against Zuora Warehouse, which has better performance and fewer limitations than the Zuora transactional database. This option is available only if you have the Zuora Warehouse feature enabled in your tenant. For more information, see [Zuora Warehouse](/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview). If this option is selected, you can see your warehouse size below the drop-down list.

-   Stop when no result returned: Select this option if you want the workflow to stop at this task if the query returns no data.

-   Use index join: If you want to use index join in your query, select this option. For more information about using index join in a data query task, see [Use index join](/zuora-platform/data/data-query/best-practices-when-writing-data-queries/indexed-fields).

-   Compressed: Select whether you want to zip the output file. This option is selected by default. Use the unzip mode in the file operation task for decompression.

-   Read deleted: If selected, the query will only retrieve objects that are soft deleted. If not selected, only active objects will be retrieved. You cannot retrieve both soft-deleted and active data in a single data query task.

-   Obtain Fields: If selected, fields expressed by Liquid variables in the data query will be parsed during run time.


Note:

Some workflow tasks may require the Data Query to successfully process. By checking the Skip Validation checkbox, you may miss a few fields such as JSON Transform and CSV Translator.

![Retrieve: Data Query task setting](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/41a25891-c213-4b3f-aee3-f8c25bf70c95?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxYTI1ODkxLWMyMTMtNGIzZi1hZWUzLWY4YzI1YmY3MGM5NSIsImV4cCI6MTc2NjY0MDgzMiwianRpIjoiNDIzMmRmMTJkMmY3NDg3YmE3NjZhNDE0OTczNzAyMTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iEUzo-euXQo3Il08fYLdQ3j07Txr4ZVt4QzLvWItHLQ)
