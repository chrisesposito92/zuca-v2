---
title: "Logic: Lambda"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-lambda"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:21.886Z"
---

# Logic: Lambda

This reference explains the Logic: Lambda task.

The Lambda task feeds data in the workflow payload into a predefined AWS Lambda function, triggers the function, and fetches the data in the result when the function completes. A Lambda function is a piece of AWS Lambda code that processes the data in the payload and returns the results to the workflow.

Note:

The Lambda task is in Limited Availability. If you wish to enable this task, submit a request at [Zuora Global Support](https://support.zuora.com/).

The Lambda task provides endless possibilities of what you can achieve and greatly extends the use scenarios of Workflow. For example, you can automate product price adjustments based on regional labor cost inflation by parsing data from source websites with the Beautiful Soup library in Python.

Zuora does not support debugging the Lambda codes developed by Zuora customers. All Lambda functions should include complete error handling logic so that errors can be captured in Workflow API calls. This is important for troubleshooting. For more information about how to debug your code with the logs, see [Monitor and troubleshoot a workflow](/zuora-platform/extensibility/workflow/monitor-and-troubleshoot-workflow/monitor-workflows).

Before you add a Lambda task, ensure that:

-   You have access to the Lambda task in Workflow.

-   You have built a Lambda function. You can start with the Lambda starter package that is provided in the custom code upload window. To learn about where to download the starter package, see step 3 in [Upload a Lambda function in a workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-lambda/upload-a-lambda-function-to-workflow#task-ac-1130__upload-lambda-step3). To learn about implementation details and use cases of AWS Lambda, see the [AWS Lambda introduction](https://aws.amazon.com/lambda/).

-   You have uploaded your Lambda function to Workflow. To learn about how to upload your Lambda function, see [Upload a Lambda function to a workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-lambda/upload-a-lambda-function-to-workflow).


## Task settings

You need to select a function to run from the list of uploaded Lambda functions for your organization.

Note:

AWS Lambda function only returns the last 4 KB of the execution log in the response, which means the Log Result response section will be truncated if it is larger than 4 KB.

![Logic: Lambda task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/41d8e32f-f7bb-4fca-8115-39b5d4a89e59?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxZDhlMzJmLWY3YmItNGZjYS04MTE1LTM5YjVkNGE4OWU1OSIsImV4cCI6MTc2NjY0MDg1OSwianRpIjoiMzc5NWViN2YyMTEzNDdjODg5NDY2NDdlZjE2ZDZhODUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EhTVQyp2N1willLvaIErCdGORRWLWc-t2B-lcVcMZAc)
