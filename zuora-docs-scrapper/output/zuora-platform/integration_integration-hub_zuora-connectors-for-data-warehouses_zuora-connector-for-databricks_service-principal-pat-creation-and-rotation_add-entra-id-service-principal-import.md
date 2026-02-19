---
title: "Add Entra ID Service Principal (Import)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/add-entra-id-service-principal-import"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:36.522Z"
---

# Add Entra ID Service Principal (Import)

Learn how to add Entra ID service principal to Databricks by importing the service principal

Ensure you have [created the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).

1.  In your Databricks workspace, click your username > Settings.
2.  Go to Identity and access > Service principals > Add service principal.
3.  Select Import service principal.
4.  Paste the Application (client) ID from [Create the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).
5.  Click Add.

You must [Grant workspace entitlements to service principal](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/grant-workspace-entitlements-to-service-principal).
