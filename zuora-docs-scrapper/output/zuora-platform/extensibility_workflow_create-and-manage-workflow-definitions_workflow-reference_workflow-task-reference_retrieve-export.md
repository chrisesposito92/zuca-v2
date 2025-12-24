---
title: "Retrieve: Export"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-export"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:57.868Z"
---

# Retrieve: Export

This reference explains the Retrieve: Export task.

This task exports data from your Zuora data source based on the conditions you define. The exported data is saved in a CSV file and available for use by subsequent tasks.

When you create a new data export task, you need to select a data object as the main object to export data from. All data objects that are pre-joined with this data object are also available for export.

The export task uses Export ZOQL for building queries.

The task supports five aggregate functions (Min, Max, Count, Average, and Sum). Average and Sum are only available for some data fields.

You can have up to 4 concurrent query tasks in your Workflow instance.

Note:

-   Once a data export task is created, you cannot change the data object, but you can adjust the data fields and modify the conditions at any time.

-   The order of the columns in the CSV file cannot be specified explicitly in this data export task.


## Difference between Export and Object Query

Both the export and query tasks can be used for data retrieval.

The export task retrieves data asynchronously. It initiates the request and checks the status of the data retrieval process later. When the status indicates that all data is retrieved, it exports the data in a CSV file. The export task does not have a limit on the amount of data entries in the result. You can select multiple data objects (the main object and the pre-joined objects) to export data from. The data export task uses Export ZOQL for building queries.

The query task retrieves data synchronously. It initiates the request and waits for the data to be returned. The maximum amount of data entries in a query task is 2000. You can only select one data object to query data from.

If your workflow requires synchronous data retrieval or runs multiple times per minute, consider using the [Data Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-data-query) task. Frequent export requests may degrade the performance significantly.
