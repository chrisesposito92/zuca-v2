---
title: "Workflow helper objects for retrieving data"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:21.877Z"
---

# Workflow helper objects for retrieving data

This reference lists the Workflow helper objects you can use to query related data within a workflow.

Workflow provides the following helper objects for you to query the related data within a workflow:

-   [WorkflowInstance](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data/workflowinstance): Data of the current workflow run

-   [WorkflowSetup](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data/workflowsetup): Setup data of the workflow version

-   [TaskInstance](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data/taskinstance): Data of the workflow task instance

-   [Credentials.zuora](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-helper-objects-for-retrieving-data/credentials.zuora): Information about the user who issued the workflow run


You can use Liquid to query against the above objects.

For example, the following query can be used in a [Retrieve: Data Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-data-query) task to retrieve the result of the current workflow run:

Select \* from workflow\_task where workflowid = {{ WorkflowInstance.id }}

This query leverages `{{ WorkflowInstance.id }}` to retrieve the current Workflow run ID.
