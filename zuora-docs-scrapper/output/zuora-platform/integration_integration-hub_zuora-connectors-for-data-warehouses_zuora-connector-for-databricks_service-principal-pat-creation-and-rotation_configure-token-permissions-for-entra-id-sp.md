---
title: "Configure token permissions for Entra ID SP"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/configure-token-permissions-for-entra-id-sp"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:23.246Z"
---

# Configure token permissions for Entra ID SP

Learn how to configure token permissions for Entra ID SP

Ensure you have [granted workspace entitlements to service principal](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/grant-workspace-entitlements-to-service-principal).

Enable PAT usage for the service principal.

Configure token permissions via API using an existing admin PAT:

Note:

Databricks has updated the API endpoint on the PATCH call to no longer include `/preview`:

curl --request PATCH 'https://adb-<workspace-id>.<region>.azuredatabricks.net/api/2.0/permissions/authorization/tokens' \\ --header 'Authorization: Bearer <admin-personal-access-token>' \\ --header 'Content-Type: application/json' \\ --data-raw '{ "access\_control\_list": \[ { "service\_principal\_name": "<application-id>", "permission\_level": "CAN\_USE" } \] }'

Replace <application-id> with your service principal's Application (client) ID from [Create the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).

PAT workspace setting: If PAT authentication is disabled at the workspace level, users and service principals cannot create or use PATs until re-enabled. For more information, refer to [Microsoft Learn](https://learn.microsoft.com/en-us/azure/databricks/admin/access-control/tokens).

Continue to [Generate Microsoft Entra ID access token](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/generate-microsoft-entra-id-access-token).
