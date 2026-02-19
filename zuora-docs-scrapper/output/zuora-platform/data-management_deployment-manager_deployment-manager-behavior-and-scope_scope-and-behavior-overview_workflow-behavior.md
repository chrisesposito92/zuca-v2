---
title: "Workflow  behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/workflow-behavior"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:55.935Z"
---

# Workflow behavior

This document outlines the behavior of workflow deployment and scope.

-   When the source tenant and the target tenant have workflows with the same name but different versions, the result of deployment is an incremental active version of the same workflow in the target tenant. Version increment is based on the last version present in the target. For example, if a workflow is present in both the source and the target, the source has versions 0.0.3, 0.0.2, and 0.0.1, while the target has versions 0.0.2 and 0.0.1. Following deployment, an incremental version of 0.0.3 will be created regardless of whether the user selected only 0.0.2 or 0.0.1.
-   When a workflow is configured in the source tenant but missing in the target tenant, the result of deployment is a new workflow created in the target tenant with the same version as present in the source tenant. In the newly provisioned tenant, "Retryable Error" label is displayed on the Compare screen. Click on any configured workflows and try again; this issue will be resolved.
-   Cleanup Policy migrations are not supported.
-   Deployment Manager does not support comparing and deploying Workflow Tasks.
-   Deployment Manager displays only the 10 most recent versions of a workflow. If a workflow has more that 10 versions, older versions will not appear in the version selection list and cannot be selected for comparison or deployment.

## Define Workflow Version State

You can define the state of a workflow version as Active or Inactive during deployment by selecting the Deployment Preferences on the Compare screen.

-   If you do not select an option, Deployment Manager will deploy the workflow version in the same state as it exists in the source tenant.
-   On selecting Inactive, all workflow versions included in the deployment will be deployed as Inactive, regardless of their state in the source tenant.

    ![Workflow deployment preferences](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9dbbf8eb-94f2-4103-be36-f8807dc19545?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlkYmJmOGViLTk0ZjItNDEwMy1iZTM2LWY4ODA3ZGMxOTU0NSIsImV4cCI6MTc3MTU1NzUzMCwianRpIjoiZjdiOGZhMTcyODU3NDcxNWIwOGI2YTdlOTFmMDU2ZGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gDzxduUMsJM3Dqim8O25Ukd8GPdrAhK9CnYAtwXZb-s)


For more information, see [Workflows](/zuora-platform/extensibility/workflow/workflow-overview)
