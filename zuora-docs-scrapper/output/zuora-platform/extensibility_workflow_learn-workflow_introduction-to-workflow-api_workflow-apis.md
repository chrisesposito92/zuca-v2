---
title: "Workflow APIs"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/introduction-to-workflow-api/workflow-apis"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:03.840Z"
---

# Workflow APIs

Introduces the available Workflow API operations.

## Available API operations

You can use Workflow REST APIs to complete most of the basic tasks for Workflow. Workflow REST APIs are part of the Zuora REST APIs and use OAuth to authenticate to the API gateway.

To learn about how to make authenticated calls, see [Get started tutorial](https://developer.zuora.com/docs/get-started/introduction/) in the Developer Center.

The following API operations are supported. For details about these operations, see the [Workflows](https://developer.zuora.com/v1-api-reference/api/tag/Workflows/) section in the API Reference.

| API operation | Required access permission |
| --- | --- |
| List workflows | Workflow View Access |
| Retrieve a workflow | Workflow View Access |
| Delete a workflow | Workflow Manage Access |
| Update a workflow | Workflow Manage Access |
| Run a workflow | Workflow Run Access |
| Export a workflow version | Workflow Manage Access |
| Import a workflow definition | Workflow Manage Access |
| Import a workflow version | Workflow Manage Access |
| Delete a workflow version | Workflow Manage Access |
| List all versions of a workflow definition | Workflow View Access |
| Retrieve a workflow run | Workflow View Access |
| List workflow tasks | Workflow View Access |
| Retrieve a workflow task | Workflow View Access |
| Rerun a workflow task | Workflow Run Access |
| Update workflow tasks | Workflow Run Access |
| Retrieve workflow task usage | Workflow View Access |
| Stop a workflow run | Workflow View Access |

## Find workflow ID or task ID

To find a workflow ID, you can make a request to the [List workflows](https://developer.zuora.com/v1-api-reference/api/operation/GET_Workflows/) operation. In the data payload of the response, you can find the ID for your workflow.

Finding the ID of a task is similar. Make a request to the [List workflow tasks](https://developer.zuora.com/v1-api-reference/api/operation/GET_WorkflowsTasks/) operation and locate the ID of the task in the data payload of the response.

![Workflow id in response](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a95ed66b-754d-43de-82f7-9b4de2b37132?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5NWVkNjZiLTc1NGQtNDNkZS04MmY3LTliNGRlMmIzNzEzMiIsImV4cCI6MTc2NjY0MDY2MSwianRpIjoiMmI0OTZiODA0M2EwNGMzMmFjMmQ1MDdkZTYwYTkwM2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.klZQvDGAj8a7lXOM8uOy08bx_SvHp6Z030MJ2r0a2Qg)
