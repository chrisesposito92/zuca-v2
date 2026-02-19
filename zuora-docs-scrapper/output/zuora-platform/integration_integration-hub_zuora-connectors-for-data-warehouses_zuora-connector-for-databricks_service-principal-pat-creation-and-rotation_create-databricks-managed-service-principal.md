---
title: "Create Databricks managed service principal"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-databricks-managed-service-principal"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:21.671Z"
---

# Create Databricks managed service principal

Learn how to create Databricks managed service principal

Ensure you have [chosen your service principal type](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/choose-your-service-principal-type) (option B).

1.  In your Databricks workspace, click your username > Settings.
2.  Go to Identity and access > Service principals > Manage.
3.  Click Add service principal > Add new.
4.  Enter a Display name and click Add.
5.  Click on the newly created service principal and under Entitlements, enable:

    -   Workspace access

    -   Databricks SQL access (if needed for SQL Warehouse access)


6.  Click Update and make a note of the Application ID.

Now you must [configure token permissions for Databricks SP](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/configure-token-permissions-for-databricks-sp).
