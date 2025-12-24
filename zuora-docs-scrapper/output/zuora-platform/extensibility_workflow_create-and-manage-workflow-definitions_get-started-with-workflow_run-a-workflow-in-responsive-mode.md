---
title: "Run a Workflow in Responsive Mode"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/get-started-with-workflow/run-a-workflow-in-responsive-mode"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:35.572Z"
---

# Run a Workflow in Responsive Mode

Running a workflow in responsive mode allows you to get results immediately.

Workflows run asynchronously by default. If you want to run a workflow and get results immediately, you can consider using the responsive mode. Not all workflows are suitable for running in the responsive mode. You may need to revise the tasks in the workflow or redesign the workflow.

Note: The responsive mode of Workflow is in Limited Availability.

## Responsive mode requirements

The responsive mode has a timeout value of 110 seconds. If a responsive workflow does not complete within the time frame, the workflow will switch to the standard mode and continue to run. Because of the timeout, you need to use a [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-query) task for data retrieval.

In addition, if you do not want the whole data payload in the response to be directly fed into your system, you need to reformat and filter the data in the response before pushing it to your system, or add a [Response Formatter](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-response-formatter) task at the end of your workflow.

## Run a workflow in responsive mode

You need to turn on the responsive mode for a workflow before you can run this workflow in the responsive mode.

To turn on the responsive mode, go to the Settings tab of the workflow and select Responsive in the Workflow Triggers section.

After the mode is turned on, you can run the workflow in the responsive mode from the user interface or via API calls.

To run a workflow in the responsive mode via API calls, ensure that Callout is turned on as a trigger of the workflow, and send a request to the standard API endpoint of the workflow. You can use either API token or basic authentication (username and password) to authenticate to the workflow.

The responsive API endpoint of a workflow is replacing "run" in the standard API endpoint with "sync". The standard API endpoint of a workflow can be found in the Settings tab of the workflow.

Responsive API endpoint

`https://workflow.apps.zuora.com/api/v1/workflows/{workflow_id}/sync`
Note: {workflow\_id} is different for each workflow.

Authentication

-   Option 1: API Token in Headers

    API-Token: {token\_shown\_in\_settings}

-   Option 2: Basic Authentication

    Use the username and password shown in the Basic Auth section of the settings.


## Response codes for the responsive mode

After you send an API request to the responsive API endpoint of a workflow, you can use the code in the response header to determine the status of the workflow.

See the following table for a list of possible response codes for the responsive mode of Workflow.

| Response code | Response body | Result description |
| --- | --- | --- |
| 200 | Data payload from the last task. | The workflow runs successfully and returns the data payload as expected. |
| The code that is defined in the response formatter task of the workflow. The default code is 200. | Data payload from the response formatter task. | The workflow runs successfully and returns the data that is reformatted or extracted from the upstream data payload. |
| 211 | The metadata of the workflow run.Example:{ "id": 406, "name": "WF-100-00000006", "originalWorkflowId": 100, "type": "Workflow::Instance", "status": "Queued", "runTime": null, "cpuTime": "00:01:15", "createdAt": "2019-05-01 03:08:21 UTC", "updatedAt": "2019-05-01 03:08:21 UTC" } | The workflow contains a task that does not support the responsive mode. The workflow is switched to the standard mode and placed in the queue. |
| 212 | The metadata of the workflow run. | The Zuora concurrent API request limit is reached. The workflow is switched to the standard mode and placed in the queue. |
| 403 | An error message.Example:{ "error_class" : "response_task.error_class", "message" : "response_task.error" } | The workflow fails because of a task configuration error. |
| 408 | An error message. | The API request times out. |
