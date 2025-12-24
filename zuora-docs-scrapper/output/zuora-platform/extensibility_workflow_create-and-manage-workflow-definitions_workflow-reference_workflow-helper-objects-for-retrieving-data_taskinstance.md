---
title: "TaskInstance"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data/taskinstance"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:30.863Z"
---

# TaskInstance

This reference lists the fields of the TaskInstance helper object.

The `TaskInstance` object contains the following fields:

| Field Name | Description | Example |
| --- | --- | --- |
| id | Task ID | {{ TaskInstance.id }} |
| iterate_row_reference | The unique row number that occurred from iterate sequence |  |
| name | Tasks name |  |
| created_at | The time when the task is created |  |
| updated_at | The last updated time of the task |  |
| start_time | The time the task is started |  |
| original_task_id | The original ID of the task from workflow setup configuration |  |
| status | The status of the task |  |
| error | The error message of the task |  |
| data | The data passed into this task |  |
| error_details | The log of the error |  |
| error_class | The error class |  |
