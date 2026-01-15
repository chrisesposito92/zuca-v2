---
title: "Workflow deployment behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/workflow-deployment-behavior"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:56.348Z"
---

# Workflow deployment behavior

This document outlines the behavior of workflow deployment and limitations.

-   When the source tenant and the target tenant have workflows with the same name but different versions, the result of deployment is an incremental active version of the same workflow in the target tenant. Version increment is based on the last version present in the target. For example, if a workflow is present in both the source and the target, the source has versions 0.0.3, 0.0.2, and 0.0.1, while the target has versions 0.0.2 and 0.0.1. Following deployment, an incremental version of 0.0.3 will be created regardless of whether the user selected only 0.0.2 or 0.0.1.
-   When a workflow is configured in the source tenant but missing in the target tenant, the result of deployment is a new workflow created in the target tenant with the same version as present in the source tenant. In the newly provisioned tenant, "Retryable Error" label is displayed on the Compare screen. Click on any configured workflows and try again; this issue will be resolved.
-   Cleanup Policy migrations are not supported.
-   Deployment Manager does not support comparing and deploying Workflow Tasks.

## Configuring Workflow Version State in Deployment Manager

You can define the state of a workflow version as Active or Inactive during deployment by selecting the Deployment Preferences on the Compare screen.

-   If you do not select an option, Deployment Manager will deploy the workflow version in the same state as it exists in the source tenant.
-   On selecting Inactive, all workflow versions included in the deployment will be deployed as Inactive, regardless of their state in the source tenant.

    ![Workflow deployment preferences](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9dbbf8eb-94f2-4103-be36-f8807dc19545?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlkYmJmOGViLTk0ZjItNDEwMy1iZTM2LWY4ODA3ZGMxOTU0NSIsImV4cCI6MTc2ODYwMDczMiwianRpIjoiMjVlMzQ3YWEyYjNmNGU4Yjk3MTAxMzk2OTdiM2NkZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.ebeB8MyzrGKa-raOdpxayvRzULU1Do9Da2xe5CofkA8)
