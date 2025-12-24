---
title: "Workflow user interface"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/workflow-user-interface"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:55.877Z"
---

# Workflow user interface

Getting familiar with the Workflow user interface allows you to ramp up faster on Workflow.

## Workflow landing page

When you start Workflow, you will see the landing page of Workflow.

![Workflow landing page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0206061a-34f8-4734-bcce-ef9c2e1e57f5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyMDYwNjFhLTM0ZjgtNDczNC1iY2NlLWVmOWMyZTFlNTdmNSIsImV4cCI6MTc2NjY0MDY1NCwianRpIjoiMDA1OWNiZjM3ZDVlNDcyZjhhOTE4NDIyMWIzNDhjNzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.aVM-M5VqqVa0ApG2l1k9i-uZ2qmwqH5MycA4iz9fIJo)

The landing page of Workflow consists of six tabs.

-   Overview: The default tab of the landing page. It displays workflow and task information that is worth noting, including failed tasks, failed workflows, workflows of different priorities in the queue, and task usage metrics.

-   Workflows: Displays all workflows available in your Workflow instance. You can create, edit, run, and activate/deactivate workflows on this tab.

-   Run History: Displays all workflow runs. You can stop running workflow runs or delete completed workflow runs in this tab. For details about workflow runs, see "Monitor and troubleshoot a Workflow" .

-   Tasks: Displays all task runs. You can delete completed task runs, rerun failed task runs, or start the Swimlane to debug task runs in this tab. For details about task runs, see "Monitor and troubleshoot a workflow" .

-   Swimlane: Displays debug information of tasks in this tab. It is displayed only when you have clicked the Swimlane icon from the Tasks tab.
-   Settings: The global settings and maintenance utilities of the Workflow instance. For details about the global settings and maintenance utilities, see "Global constants of Workflow" and "Workflow maintenance utilities". .

-   Metrics: Displays the task usage and workflow usage of the current Workflow instance. For details, see "Workflow and task usage metrics" .


Note:

You can use the Category filter on the Workflows , Run History , and Tasks tabs to quickly filter out the related workflows, workflow runs, and tasks. The category of a workflow can be specified in the Workflow Information section on the Settings tab of the workflow definition. On the Workflows page, you can choose to display the category information as a column by clicking the Customize Columns icon and checking Category in the list.

![Workflows tab](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a975bd17-3b55-46c2-b0df-e9a89e8c00be?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5NzViZDE3LTNiNTUtNDZjMi1iMGRmLWU5YTg5ZThjMDBiZSIsImV4cCI6MTc2NjY0MDY1NCwianRpIjoiOGU4YjFlNTEwZmY5NDZlN2EyZjRiM2Q3NDE5YjQ3ZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.p-KtkuldBsv-PPFmGKbiGedN4j_DvAl3qfQbuiNcfU8)

The Workflows tab displays the information of existing workflows including active version, name, run information, and task status.

Select a time range from the Task Data Range dropdown to view the workflow Total Run and Task Total count details.

The following actions are available:

-   Run/Stop - Runs or stops this workflow.

-   Edit - Opens the workflow editing page, where you can design the flow of tasks and configure task parameters.

-   Export - Displays the JSON code of the workflow. You can copy the code and paste it into a blank workflow to create an exact copy of this workflow. For details, see "Export and import a workflow" .

-   Metrics - Views the execution time and runtime metrics for a selected period of time.

-   Activate/Deactivate - Activate or deactivate this workflow. If a workflow is in inactive status, the workflow is stopped and the queued items are removed. It cannot be executed by any means. It does not count against your license limits.

-   Delete - Deletes this workflow.


Use the icons in the control bar at the top of the table to add a workflow, configure the displayed fields, or filter workflows.

| Icon | Function |
| --- | --- |
|  | Click to add a blank workflow definition or a workflow definition template. |
|  | Click to select the data fields to be displayed. |
|  | Click to refresh the data being displayed. |
|  | Use the search field next to this icon to filter the results. |
