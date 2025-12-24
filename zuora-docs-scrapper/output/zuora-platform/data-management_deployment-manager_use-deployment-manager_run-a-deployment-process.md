---
title: "Run a deployment process"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/use-deployment-manager/run-a-deployment-process"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:28.187Z"
---

# Run a deployment process

Learn how to run a deployment by comparing source and target tenant configurations, selecting components, and executing the deployment process.

To run a deployment after you have logged into the target tenant:

You can use the Show Difference toggle to quickly view the differences between the source tenant and the target tenant. The number of values that are different is highlighted with a red icon. Cannot be deployed, Only in target, and Feature disabled are disabled by default on the compare screen.

The compare screen contains a left and right navigation panel. The left panel has metadata configuration settings, and you can quickly select the components for deployment from this panel. Parameter comparison is displayed on the right panel. Click on the label of each parameter on the left navigation panel to understand the compare results on the right navigation panel.

1.  Click Deployment Run , then click the +New button.
2.  On the Basics step, provide the required Deployment Name , select a Source Tenant , leave Target Tenant as it is. Note that you have the option to create a source tenant at this point if the source tenant you have in mind is not on the existing list.
3.  Click Next .
4.  On the Select step, use the toggle to select the component(s) you want to migrate from the source tenant to the target tenant. Use the Quick Filter option to filter and select the component(s).
5.  Click Next .
6.  On the Compare and Deployment step, you can compare the source tenant values and the target tenant values.

    The table references the icons and their descriptions:

    | Compare result | UI Icon | Description |
    | --- | --- | --- |
    | No change |  | The source tenant values and the target tenant values are the same. |
    | Different |  | The source tenant values and the target tenant values are different. |
    | Only in target |  | The related feature is only enabled in the target tenant and cannot be disabled through deployment. You can contact Zuora Global Support to disable the feature in the target tenant. |
    | Feature disabled |  | The related feature is only enabled in the source tenant. You can contact Zuora Global Support to enable the feature in the target tenant. |
    | Cannot be reverted |  | The values in the target tenant cannot be reverted after the deployment. The following components cannot be reverted:CurrencyChart of AccountsThe name of the Chart of Accounts once it is in useThe Chart of Accounts under Accounts ReceivableThe parameters of custom fieldsGL Segments and Revenue Recognition Codes.Revenue Automation Date / Revenue Start Date.Custom fieldsHosted Payment Pages |
    | Cannot be deployed |  | The values cannot be deployed functionally. The following components cannot be deployed:The Data Access Control HierarchyThe Outbound Entity Connections setting under Multi-entity Settings .The labels of custom fields. |
    | Retry-able Error |  | The parameter values are not retrieved from the backend. You can try after sometime and if the error persists, contact Zuora Global Support . |

    You can use the Show Difference toggle to quickly view the differences between the source tenant and the target tenant. The number of values that are different is highlighted with a red icon. Cannot be deployed, Only in target, and Feature disabled are disabled by default on the compare screen.

    The compare screen contains a left and right navigation panel. The left panel has metadata configuration settings, and you can quickly select the components for deployment from this panel. Parameter comparison is displayed on the right panel. Click on the label of each parameter on the left navigation panel to understand the compare results on the right navigation panel.

    ![Result comparison](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1b44728f-d091-4b8e-82df-4293c6a85987?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFiNDQ3MjhmLWQwOTEtNGI4ZS04MmRmLTQyOTNjNmE4NTk4NyIsImV4cCI6MTc2NjYzOTQ4NiwianRpIjoiYjkyMjJhMDM4MDk3NGJjZWJjNTIzMDJiZTQ1ZTgxODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vRm2mozTCg1Pf8wWaaFI0xdgVMuPOyNHnTsIFVNv6VM)

7.  Select the checkboxes of the component(s) or the sub-components that you want to migrate from the source tenant to the target tenant.
8.  Click Deploy .
9.  Click Confirm on the validation message if you want to run the deployment.
10.  On the Deployment Setup dialog box, select whether you want to receive an email notification for the deployment result.
11.  Click Start Deployment .
12.  The deployment run will appear on the Deployment Run list with a status of Deploy in progress .
13.  Click Refresh to see the latest status.

Revert a deployment

After a deployment run is complete, you have the choice to revert the values of the target tenant to their previous values.

To revert a deployment run, click Revert under the Action column in the Deployment Run tab. Upon revert, the status of the deployment run will be changed to Reverted.

Note: Note that only deployment runs with Done status can be reverted.
