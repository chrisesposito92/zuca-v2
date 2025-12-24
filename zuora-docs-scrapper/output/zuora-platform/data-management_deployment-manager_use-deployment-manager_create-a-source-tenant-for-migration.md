---
title: "Create a source tenant for migration"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/use-deployment-manager/create-a-source-tenant-for-migration"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:25.809Z"
---

# Create a source tenant for migration

Learn how to create a source tenant to host metadata objects for migration using the Deployment Manager.

To run a deployment, you need to create a source tenant that hosts the metadata objects you want to migrate to other tenants. There are two ways to create a source tenant:

-   From the Source Tenants tab on the landing screen of the Deployment Manager

-   When a new deployment run is created. For more information (See [Run a deployment](/zuora-platform/data-management/deployment-manager/use-deployment-manager/run-a-deployment-process) for information)


Note: On the source list view interface, the new source tenant's record appears as read-only. You can delete the source tenant ID after authentication.

1.  Click Source Tenants , then click the \+ New button.
2.  In the Add New Tenant dialog box, provide the required information on Client ID , Secret , and Environment.

    -   Refer to [this page](https://trust.zuora.com/) to know the environment of the source tenant from its URL.

3.  Click Authenticate to validate the source tenant.

The source tenant appears on the Source Tenants list with an Active status.
