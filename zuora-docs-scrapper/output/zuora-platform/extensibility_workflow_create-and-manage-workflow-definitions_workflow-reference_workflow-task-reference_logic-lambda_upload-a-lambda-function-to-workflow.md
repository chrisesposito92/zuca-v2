---
title: "Upload a Lambda function to Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-lambda/upload-a-lambda-function-to-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:28.215Z"
---

# Upload a Lambda function to Workflow

Learn how to upload a Lambda function to Workflow.

Ensure you have access to the Lambda task. Otherwise, you cannot upload a Lambda task.

1.  On the home page of Workflow, click the Settings tab.
2.  In the Custom Code Executable section, click New .
3.  Configure the basic settings for your code and upload the code.

    -   Function Name - A name to identify the function. Letters and underscore are accepted. Space is not accepted.

    -   Handler - The handler is a function in your code that AWS Lambda can invoke when the service executes your code. See [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/) to learn more about handler syntax structures for different languages.

    -   Runtime - The runtime for the programming language that you use.

    -   Code Upload - A Lambda starter package is provided in the window to help you get started. You need to implement at least one function that comes with the starter package and can import as many functions as you want.


4.  Optionally configure the environmental settings.
5.  Click Create to upload your function. Uploaded Lambda functions can be used by all users in the same organization.
