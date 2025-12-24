---
title: "Execute: Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/execute-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:46.396Z"
---

# Execute: Workflow

This reference describes the Execute: Workflow task.

You can initiate a Workflow from the Execute: Workflow task.

## Task settings

-   Target Workflow : Select the Workflow to be executed from the list. A target Workflow is only valid if its terminal task is a [ResponseFormatter](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-response-formatter). The ResponseFormatter may not return a response object greater than 10KB. It is recommended not to include Approval or Delay tasks in the target Workflow.

-   Payload Placement : Use this field to specify the location where the data generated from this task will be stored. The default placement is ExecuteWorkflow. If multiple ExecuteWorkflow tasks use the same payload placement, the data for each task will be appended to the same array as a separate object. If you want the data from a downstream task to replace the data from an upstream task, select the Replace Payload option.

-   Target Workflow Response : Select how the payload response from the target workflow is returned.

    -   Last Task of Target Workflow - Return the response from the last task of the target Workflow.

    -   Last Response Formatter Task of Target Workflow - Return the formatted response from the last Logic: ResponseFormatter task of the target Workflow. This is the default option.


Note: When selecting Last Response Formatter Task of Target Workflow , you need to ensure there is at least one ResponseFormatter task in the target Workflow. Otherwise, an error would pop up.

-   Wait for Completion : If this option is selected, this ExecuteWorkflow task will not be executed until the target Workflow completes.
