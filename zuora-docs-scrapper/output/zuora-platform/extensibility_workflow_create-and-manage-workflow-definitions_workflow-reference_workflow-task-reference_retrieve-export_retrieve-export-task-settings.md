---
title: "Retrieve: Export - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export/retrieve-export---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:24.159Z"
---

# Retrieve: Export - Task settings

Explains the settings for the Retrieve: Export task.

## Fields Tab

-   Object - Select the main data object to export data from. Objects that are pre-joined with this data object are also available for selection.

-   Click a data object from the left panel to display all available data fields in that object.

-   Tick the Enabled checkbox to include a data field.

-   Optionally, select an aggregate function to return aggregated data for a data field. Click the Aggregation button to change the aggregate function to be used. The available aggregate functions include Min, Max, Count, Average, and Sum.

    -   Min - Returns the minimum value in the set of results for a data field.

    -   Max - Returns the minimum value in the set of results for a data field.

    -   Count - Returns the number of results (entries) for a data field.

    -   Average - Returns the average of all values in the set of results for a data field.

    -   Sum - Returns the sum of all values in the set of results for a data field.


## Conditions Tab

Enter a query in the query text field. The two dropdown lists are intended to help you enter object fields and workflow data fields in your query. To learn more about Export ZOQL, click the links to the Zuora Export Filter Statement Guide and Zuora Export Dates/Times Guide.

If a query returns no results, the subsequent tasks in the workflow will have no data to process. If you want the workflow to stop in this case, select Stop subsequent tasks if query returns no records .

You can use the Encrypted and Zipped options to define the encryption and compression support for the exported files. It is recommended to keep the zipped format to stay under Zuora limits for Data Source Exports.
