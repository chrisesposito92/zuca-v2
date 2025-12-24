---
title: "Logic: Merge"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-merge"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:45.857Z"
---

# Logic: Merge

This reference describes the Logic: Merge task.

Note: The Logic: Merge task is only available in the Sandbox environments for you to test.

The Logic: Merge task enables you to merge multiple upstream branches of tasks into a single subsequent branch based on the completion of all pre-merge branches.

For workflows with branches that can be run at the same time, you can use the merge task to make them run simultaneously. When all branches are completed, the merge task is triggered and the subsequent branch is run.

Data from the upstream branches will be merged into a single payload and passed to the subsequent branch. This payload can be processed by tasks in the subsequent branch.

The maximum size of the merged payload is 5MB.

This task simplifies configuring branched processes that complete before a workflow completes. It also improves the performance by allowing upstream branches to run simultaneously.

## Task settings

You can add the merge task after any event triggers, e.g., on Start, on Finish, on Success, etc. For more information, see Use the merge task in a workflow.
