---
title: "Create a source tenant for deployment"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/create-a-source-tenant-for-deployment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:10.323Z"
---

# Create a source tenant for deployment

Learn how to create a source tenant to host metadata objects for migration using the Deployment Manager.

To run a deployment, you must first create a source tenant. The source tenant contains the metadata objects you want to migrate to other tenants. There are two ways to create a source tenant:

-   From the Source Tenants tab on the Deployment Manage landing screen.

-   When creating a a new deployment. For more information, see [Run a deployment](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/run-a-deployment-process).


Note: On the source list view interface, the newly added source tenant appears as read-only. After authentication, you can delete the source tenant ID if needed.

1.  From the main menu, navigate to Administration > Deployment Manager.
2.  Select Source Tenants, and then select \+ New button.
3.  In the Add New Tenant dialog box, enter the Tenant Description, Client ID, Secret, and select an Environment.

    -   To obtain the required Client ID and Secret, log into the source tenant and refer to [Create an OAuth Client for a User](/zuora-platform/security-and-identity/administrator-settings/manage-users/create-an-oauth-client-for-a-user) .

    -   To know the environment of the source tenant from its URL, refer to [system page](https://trust.zuora.com/) .


4.  Select Authenticate to validate the source tenant.

After successful authentication, the source tenant appears in the Source Tenants list with an Active status.
