---
title: "Send database query from the user interface"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/send-database-query-from-the-user-interface"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:07.398Z"
---

# Send database query from the user interface

The Data Query Utility allows users to run, save, and log queries directly from the user interface without accessing the database.

You can use the Data Query Utility feature to run basic queries to query the data from the tables instead of logging into the database. This utility takes input as a query and displays the result set in the grid. You can create new data queries, save data queries, and view the query log from the Data Query Utility UI.

## Overview

To access the Data Query Utility page, navigate to Reports > Data Query Utility from the main menu. The UI page opens with multiple tabs.

From this UI page, you can do the following things:

-   Create and execute a query
-   Save a query
-   View the query logs

## Send database query

In the Query Data tab, you can create new data queries and execute them to get the result. You can export the query data from your database.

In the Query Data tab, you can create new data queries and execute them to get the result. You can export the query data from your database.

To create a new data query, complete the following steps:

1.  Navigate to Reports > Data Query Utility.

2.  In the Query Data tab, enter a query on the query field and click the execute icon (green save icon). Upon success, the result is displayed in the lower half of the UI.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b90add5a-2979-41a8-bb52-e6d9f4356762?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5MGFkZDVhLTI5NzktNDFhOC1iYjUyLWU2ZDlmNDM1Njc2MiIsImV4cCI6MTc2NjYzNzI0NSwianRpIjoiNzRhNTJmMzE3NTU0NDc4ZTlkN2Y3Njk5MGE3ZGE2OWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0_tBH95rXjvN651CPdBbrppC-5Zi0v6grohCggd3zq0)

3.  (Optional): To filter the result at the column level, click the Toggle Row Filter icon icon-toggle-row-filter.png and then type the keyword in the target column.

4.  (Optional): To export the queried data, click the Export All Data icon icon-export-all-data.png. The data will be exported to a file and downloaded to your local system.


## Save a query

When you create a query, you can save the query. You can then re-run the saved query in the future without constructing the query again. You can access all the saved queries in the saved query tab.

To save your query, complete the following steps:

1.  In the Query Data tab, construct the new query and click the save icon .

2.  In the Save Query dialog, enter a name for the query in the name field and then click the save icon.

3.  To re-run the saved query, select the query from the Saved Query dropdown list in the Query Data tab.


All the saved queries are also displayed in the Saved Query tab.

## View the query log

You can use the Query Log tab to view the data queries that are submitted in the Query Data UI. This tab displays all the queries that are entered in the Query Data tab.

![View_Query_log.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/03ded3c2-45af-4a44-97d5-4cf4eac3257a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAzZGVkM2MyLTQ1YWYtNGE0NC05N2Q1LTRjZjRlYWMzMjU3YSIsImV4cCI6MTc2NjYzNzI0NSwianRpIjoiMTQyMTU3MmI1YjZjNDlmZjkzN2MyZDc0ODA4NWVjNDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.BbTVB5oYTCjydZ3W8anBYQZukkC7X5ZaK3WZNlIVW9g)

## Limitations

Be aware of the following limitations when you work with the Data Query Utility:

-   Only specific SQL queries or functions can be supported. For example, the functions should contain aliases and no DMLs. Sequence objects are not allowed in the queries.
-   Use proper aliases to query tables, views, functions, and expressions.
-   The UI session timeout is set to one minute. The timeout duration can be extended to a maximum of two minutes only by requesting [Zuora Global Support](https://www.zuora.com/support-center/).
-   A maximum of 5000 records can be exported and viewed in the UI. Exceeding this limit results in performance issues in the UI.
-   Export functionality works only if the query is run successfully. Unsuccessful queries might show incorrect column names in the exported data.
