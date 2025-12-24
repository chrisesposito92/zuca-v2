---
title: "API endpoints and modes for triggering a workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/introduction-to-workflow-api/api-endpoints-and-modes-for-triggering-a-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:06.181Z"
---

# API endpoints and modes for triggering a workflow

Introduces the API endpoints and supported modes for each authentication method.

You can run a workflow via an API call. Depending on the authentication methods you use, the API endpoints and supported modes are different.

## OAuth

You can also call a standard Zuora API operation to run a workflow. You need to generate a bearer token first, and use the token to call this endpoint:

`https://<base_url>/workflows/<workflow_id>/run`

Based on the environment you are using, `<base_url>` is different. For the base URL for each environment, see the REST API entries in [Zuora data centers](/basics/environments/zuora-data-centers). For example, for Central Sandbox for US Cloud Data Center, the base URL is `https://rest.test.zuora.com`.

If you do not know the workflow ID, you can use the "List workflows" operation to retrieve all workflows first and find the ID of the workflow in the payload of the response.

To learn about all available Workflow APIs, see [Workflow APIs](https://developer.zuora.com/v1-api-reference/api/tag/Workflows/) in the API Reference.

## API-token or basic authentication

Before you start, ensure that the Callout trigger is enabled for the workflow that you want to run.

To run a workflow using API-token or basic authentication, send GET or POST request to the endpoints listed below. The API endpoint can be the standard API endpoint displayed in the settings of the workflow, or the responsive API endpoint. Use the responsive API endpoint only when you are familiar with the "responsive mode" of Workflow.

Standard API endpoint:

`<base_url>/api/v1/workflows/{workflow_id}/run`

Responsive API endpoint:

`<base_url>/api/v1/workflows/{workflow_id}/sync`

Where `{workflow_id}` is different for each workflow.

For API-token authentication, you need to place the key pair in the header. The key must be "API-Token". The actual token is displayed on the settings page of the workflow.

For basic authentication, the username and password are also displayed on the settings page of the workflow.
