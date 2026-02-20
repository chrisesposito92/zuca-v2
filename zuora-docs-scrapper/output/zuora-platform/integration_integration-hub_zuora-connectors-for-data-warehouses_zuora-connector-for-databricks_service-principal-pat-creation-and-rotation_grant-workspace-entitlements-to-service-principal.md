---
title: "Grant workspace entitlements to service principal"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/grant-workspace-entitlements-to-service-principal"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:19.840Z"
---

# Grant workspace entitlements to service principal

Learn how to grant workspace entitlements to the newly created service principal

Ensure you have [added Entra ID Service Principal (Import)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/add-entra-id-service-principal-import).

1.  Click on the newly created service principal.
2.  Under Entitlements, enable:

    -   Workspace access

    -   Databricks SQL access (if needed for SQL Warehouse access)


3.  Click Update.

Now continue to [Configure token permissions for Entra ID SP](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/configure-token-permissions-for-entra-id-sp).
