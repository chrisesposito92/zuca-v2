---
title: "Data Source Export metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/data-source-export-dashboard/data-source-export-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:21.813Z"
---

# Data Source Export metrics

Descriptions of the Data Source Export metrics

The following table provides descriptions of the Data Source Export metrics:

| Metric | Description |
| --- | --- |
| DSE Usage | The number and detailed information of processed DSE query jobs within a specified time range, including jobs with the following status types:Completed: query jobs that are processed successfully.Failed: query jobs that are unable to be processed.When hovering over each time interval bar, you can view the breakdown data of that time range. The table below the chart presents the following metrics for each query job:Job ID: the ID of this query job.Job Status: the status of this query job, such as Completed or Failed.Query: the query expression this query job uses to export data.Record Counts: the number of records in the query result of this query job.Execution Time: the execution time of this query job. |
| DSE Failures | The number and detailed information of failed DSE query jobs within a specified time range. When hovering over each time interval bar, you can view the breakdown data of that time range. The table below the chart presents the following metrics for each failed query job:Job ID: the ID of this query job.Job Status: the status of this query job.Error Message: the error message that describes the reason for failure. |
| DSE Performance | The execution time and detailed information of processed DSE query jobs within a specified time range. When hovering over each time interval bar, you can view the breakdown data of that time range. The table below the chart presents the following metrics for each query job:Job ID: the ID of this query job.Job Status: the status of this query job, such as Completed or Failed.Query: the query expression this query job uses to export data.Record Counts: the number of records in the query result of this query job.Execution Time: the execution time of this query job. |
| Processing Jobs | The detailed information of DSE query jobs that are pending or being processed:Pending: query jobs that are submitted successfully and not being processed yet.Processing: query jobs that are being processed.The table presents the following metrics for each query job:Job ID: the ID of this query job.Job Status: the status of this query job, such as Pending or Processing.Query: the query expression this query job uses to export data.Record Counts: the number of records that have been exported. |
| Top Executed Queries | The detailed information of the top ten executed queries within a specified time range. The table presents the following metrics for each query:Execution Count: the number of executions of this query.Percentage: the percentage of execution count of this query compared to the total number of queries executed.Query: the query expression that is used by query jobs to export data. |
