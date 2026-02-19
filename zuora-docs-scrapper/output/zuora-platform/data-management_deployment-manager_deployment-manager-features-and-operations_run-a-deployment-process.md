---
title: "Run a deployment process"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/run-a-deployment-process"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:10.218Z"
---

# Run a deployment process

This topic describes the steps to run a deployment and to revert a deployment.

1.  From the main menu, navigate to Administration > Deployment Manager.
2.  From the Deployment screen, select the +New button.
3.  On the Basics step, enter the Deployment Name and an optional Description.
4.  Select a Source Tenant. The Target Tenant is populated automatically and cannot be modified.

    Note: If the required source tenant is not listed, you can create one by selecting \+ Add New Source Tenant. For more information, see [Create a Source Tenant](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/create-a-source-tenant-for-deployment).

5.  Select Next .
6.  On the Select step, use the toggle to select the component(s) to migrate from the source tenant to the target tenant. Use the Quick Filter option to filter and select the component(s). Fore more information, see [use quick filters.](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-configuration-templates)
7.  Select Next.
8.  On the Compare and Deployment step, you can compare the source tenant values and the target tenant values.

    You can use the Show Difference toggle to quickly view the differences between the source tenant and the target tenant. The components that are different are displayed in red. For more information about each status, see [Icons and description](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-icons-and-their-status).

    The compare screen contains a left and right navigation panel. The left panel has metadata configuration settings, and you can quickly select the components for deployment from this panel. Parameter comparison is displayed on the right panel. Click on the label of each parameter on the left navigation panel to understand the compare results on the right navigation panel.

    ![Result comparison](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1b44728f-d091-4b8e-82df-4293c6a85987?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFiNDQ3MjhmLWQwOTEtNGI4ZS04MmRmLTQyOTNjNmE4NTk4NyIsImV4cCI6MTc3MTU1NzQ4NiwianRpIjoiYzRmZDRiNTY1MzlmNDRkMWIzMWFkOTg0MzVjYzg0ODgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.5t9L2rZbLXteGchopPfD_mkVzcMBTH19CRCQwg7Q87E)

9.  Select the checkboxes of the component(s) or the sub-components that you want to migrate from the source tenant to the target tenant, and then select Deploy.
10.  Select Confirm on the confirmation screen. In the Deployment Setup dialog box, select whether you want to receive an email notification for the deployment result, and then select Start Deployment. For more information on email configuration, see [Configure email list.](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/configure-email-notification-recipients-list)
     The deployment run will appear on the Deployment Run list with a status of Deploy in progress.

11.  Select Refresh to see the latest status.

     After a deployment run is complete, you can revert the target tenant values to their previous state. To do this, go to the Deployment tab and select Revert in the Action column. Once the revert is successful, the deployment run status changes to Reverted.
     Note: Only Deployment with a Done status can be reverted.
     .
