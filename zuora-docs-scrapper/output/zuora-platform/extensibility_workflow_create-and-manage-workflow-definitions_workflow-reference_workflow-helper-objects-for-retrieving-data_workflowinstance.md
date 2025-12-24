---
title: "WorkflowInstance"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data/workflowinstance"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:24.873Z"
---

# WorkflowInstance

This reference lists the fields of the WorkflowInstance helper object.

The `WorkflowInstance` object contains the following fields:

| Field Name | Description | Example |
| --- | --- | --- |
| id | ID of the workflow run | {{ WorkflowInstance.id }} |
| name | Name of the workflow run |  |
| status | Status of the workflow run |  |
| run_time | Total run time of the workflow run |  |
| started_at | The starting time of the workflow run |  |
| finished_at | The finish time of the workflow run |  |
| created_at | The creation time of the workflow run |  |
| updated_at | The last updated time of the workflow run |  |
| TotalTaskCount | The total task count of the workflow run | {{ WorkflowInstance.TotalTasksCount }} |
| QueuedTaskCount | The queued task count of the workflow run |  |
| ProcessingTaskCount | The processing task count of the workflow run |  |
| PendingTaskCount | The pending task count of the workflow run |  |
| StoppedTaskCount | The stopped task count of the workflow run |  |
| SuccessTaskCount | The successful task count of the workflow run |  |
| ErrorTaskCount | The errored task count of the workflow run |  |
| LastExecution | The last execution workflow run object | {{ WorkflowInstance.LastExecution.PendingTaskCount }}{{ WorkflowInstance.LastExecution.started_at }} |
| PendingTasks | The pending tasks (limit 15) | {{ WorkflowInstance.PendingTasks.size }}{{ WorkflowInstance.PendingTasks \| map: "error" }}{% for task in WorkflowInstance.PendingTasks %}{{ task.status }}{% endfor %} |
| ErrorTasks | The errored tasks (limit 15) |  |
| SuccessTasks | The successful tasks (limit 15) |  |
| ErrorMessages | Messages for errored tasks in array (limit 15) | {% for message in WorkflowInstance.PendingMessages %}{{ message }}{% endfor %} |
| PendingMessages | Messages for pending tasks in array(limit 15) |  |
