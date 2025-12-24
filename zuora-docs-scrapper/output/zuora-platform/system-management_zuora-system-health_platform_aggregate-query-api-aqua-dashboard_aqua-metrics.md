---
title: "AQuA metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/platform/aggregate-query-api-aqua-dashboard/aqua-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:06.474Z"
---

# AQuA metrics

AQuA metrics provide detailed insights into query job statuses, execution times, and performance, including usage, failures, and top executed queries.

The following table provides descriptions of the AQuA metrics:

| Metric | Description |
| --- | --- |
| AQuA Usage | The number and detailed information of processed AQuA query jobs within a specified time range, including jobs with the following status types:Completed: query jobs that are processed successfully.Error: query jobs that failed before being processed. For example, the ones with validation errors.Aborted: query jobs that failed during the processing.Cancelled: query jobs that are canceled by users.When hovering over each time interval bar, you can view the breakdown data of that time range.The table below the chart presents the following metrics for each query job:Job ID: the ID of this query job.Mode: the execution mode of this query job, Stateless or Stateful.Status: the status of this query job, such as Completed or Error.Total Tasks: the number of query tasks in this query job.Job Execution Time: the execution time of this query job. |
| AQuA Failures | The number and detailed information of failed AQuA query jobs within a specified time range, including jobs with the following status types:Error: query jobs that failed before being processed. For example, the ones with validation errors.Aborted: query jobs that failed during the processing.When hovering over each time interval bar, you can view the breakdown data of that time range.The table below the chart presents the following metrics for each failed query job:Job ID: the ID of this query job.Mode: the execution mode of this query job, Stateless or Stateful.Status: the status of this query job, such as Error or Aborted.Total Tasks: the number of query tasks in this query job.Error Message: the error message that describes the reason for failure. |
| AQuA Performance | The execution time and detailed information of processed AQuA query jobs within a specified time range, including jobs with the following status types:Completed: query jobs that are processed successfully.Error: query jobs that failed before being processed. For example, the ones with validation errors.When hovering over each time interval bar, you can view the breakdown data of that time range.The table below the chart presents the following metrics for each query job:Job ID: the ID of this query job.Mode: the execution mode of this query job, Stateless or Stateful.Status: the status of this query job, such as Completed or Error.Total Tasks: the number of query tasks in this query job.Job Execution Time: the execution time of this query job |
| Processing Jobs | The detailed information of AQuA query jobs that are pending or being processed:Submitted: query jobs that are submitted successfully and not being processed yet.Executing: query jobs that are being processed.The table presents the following metrics for each query job:Job ID: the ID of this query job.Mode: the execution mode of this query job, Stateless or Stateful.Status: the status of this query job, such as Completed or Error.Total Tasks: the number of query tasks in this query job.Job Execution Time: the execution time of this query job. |
| Top Executed Queries | The detailed information of the top ten executed queries within a specified time range.The table presents the following metrics for each query:Execution Count: the number of executions of this query.Percentage: the percentage of execution count of this query compared to the total number of queries executed.Query: the query expression that is used by query jobs to export data. |
