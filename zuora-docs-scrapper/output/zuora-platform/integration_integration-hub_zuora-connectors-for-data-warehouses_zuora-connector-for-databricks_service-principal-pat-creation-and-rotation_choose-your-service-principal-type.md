---
title: "Choose your service principal type"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/choose-your-service-principal-type"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:56.638Z"
---

# Choose your service principal type

Learn how to choose your service principal type

-   You have Azure admin access to create app registrations in Microsoft Entra ID.

-   You have Azure Databricks workspace admin access to manage service principals and token permissions.


You know your workspace URL (for example, `https://adb-<workspace-id>.<region>.azuredatabricks.net`).

Option A: Microsoft Entra ID managed service principal (for cross-Azure authentication)

If you need to authenticate with both Azure Databricks and other Azure resources, create a Microsoft Entra ID service principal. If you already have one with the Application (client) ID, Directory (tenant) ID, and client secret, you can skip to [Add Entra ID Service Principal (Import)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/add-entra-id-service-principal-import).

Option B: Databricks managed service principal (Databricks-only)

If you only need Databricks access, you can create a Databricks managed service principal directly in the UI. This approach is commonly used for destination setups. Skip to [Grant workspace entitlements to service principal](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/grant-workspace-entitlements-to-service-principal) for this flow.
