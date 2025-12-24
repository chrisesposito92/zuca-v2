---
title: "View deployment task details, history, and status"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/use-deployment-manager/view-deployment-task-details-history-and-status"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:33.372Z"
---

# View deployment task details, history, and status

Learn how to view deployment task details, history, and status, including sorting options and status descriptions.

## View deployment history and status

On the Deployment Run tab, you can view a history of previous deployment runs and their statuses. In addition, you can sort the list view by clicking on the column names.

A deployment run can have the following status.

| Status | Description |
| --- | --- |
| In progress | The deployment is in progress. |
| Done | The deployment is successful. All select component(s) are migrated from the source tenant to the target tenant. |
| Failed | The deployment is unsuccessful. None of the selected component(s) is migrated from the source tenant to the target tenant. |
| Reverted | The revert is successful, meaning that all updated values of the target tenant have been reverted to their previous values before the deployment. |
| Rollback failed | The revert is completely failed, meaning that none of the updated values of the target tenant have been reverted to their previous values before the deployment. |
| Partial revert | The revert is partially successful because some of the components cannot be reverted. For example, assume you try to revert 10 components and 3 of them cannot be reverted. When the revert is done, a Partial Revert status is displayed, meaning that 7 components that can be reverted have been reverted successfully while the other 3 components were not reverted. If any of the 7 components were not reverted successfully, then the status would be Rollback Failed. |
| Partially done | The status is applicable when a section of the total selected components is deployed. For example, if 47 components are selected for deployment but 27 components are successfully deployed, whereas the remaining 20 components are not deployed. The details of the components can be referred to in View Logs. |

## View deployment task details

To view the task details of a deployment run, you can click the name of the Deployment Run to open a task detail page or click the View Logs link to download the task log.

![View deployment run page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9da4e81b-babd-4896-852b-7bc59acc1ead?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlkYTRlODFiLWJhYmQtNDg5Ni04NTJiLTdiYzU5YWNjMWVhZCIsImV4cCI6MTc2NjYzOTQ5MSwianRpIjoiMjI3MzI4NGUxOTJiNDZiN2I5ZjZiNzFjZjQxZTU5YTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3gg1qJd58OiRDC1yIUEnPU2W1kUBR1B70hHFcRTZdVA)

On the task detail page, the Old Value refers to values in the target tenant before the deployment, and the New Value refers to values in the target tenant after the deployment. You can also download an audit report in the csv format.

![View deployment run page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2f4245a9-b071-45a9-97c5-11731a4fbc36?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJmNDI0NWE5LWIwNzEtNDVhOS05N2M1LTExNzMxYTRmYmMzNiIsImV4cCI6MTc2NjYzOTQ5MSwianRpIjoiZTdiYTE5Y2FkZGU4NGI1OWJkODMxNjIyM2IxYjFkNzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.k1yWS6BmEuC7atsTRz7wmWcFack1uhIkTn3umyfq3lY)

Note:

-   If you click the name of a Reverted deployment run, the values displayed on the task detail page are the result of the original Deployment action, not the Revert action.
-   If you want to know the reason for a failed deployment run, click View Log to download the log.
