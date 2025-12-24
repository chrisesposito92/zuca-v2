---
title: "Script: JavaScript"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/script-javascript"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:53.863Z"
---

# Script: JavaScript

This reference describes the Script: JavaScript task.

The JavaScript task is a function that reads an input, the Data Payload, and generates logic in standard JavaScript syntax.

Note: JavaScript tasks are not readily available and must be enabled by Zuora for each tenant. You can access the JavaScript task once it is enabled for your tenant.

For example:

exports.step = function myFunction(input) { var executionDate = input\["Workflow"\]\["ExecutionDate"\]; return {executionDate}; };

Take the input parameter and assign the Workflow ExecutionDate key to the variable `executionDate` . Returning the `executionDate` adds it to the Data Payload for use by the next step in the Workflow.

The maximum execution time to process this task is limited to 20 seconds.
