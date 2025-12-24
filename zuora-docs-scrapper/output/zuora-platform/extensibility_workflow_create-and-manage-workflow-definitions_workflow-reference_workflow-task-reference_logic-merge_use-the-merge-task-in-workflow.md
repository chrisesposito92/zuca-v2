---
title: "Use the Merge task in Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-merge/use-the-merge-task-in-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:48.863Z"
---

# Use the Merge task in Workflow

Learn how to use the Merge task in a workflow.

1.  Click the + button after the workflow Run card or on any task cards.
2.  Select the event on which the merge task is triggered: In the Logic task list, select the Merge task. A merge task will then be added to the workflow.
3.  Link the other upstream branches you want to connect to the merge task. Keep the following points in mind:

    -   The merge task is only triggered after all the upstream branches are completed. If the task in a branch fails, the merge task will not be triggered.
    -   There must be at least two upstream branches connected to the merge task.
    -   The merge task only allows you to merge flows, not data.
