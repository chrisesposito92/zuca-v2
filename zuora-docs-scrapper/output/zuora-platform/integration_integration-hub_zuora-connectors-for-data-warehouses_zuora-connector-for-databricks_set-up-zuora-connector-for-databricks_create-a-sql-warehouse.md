---
title: "Create a  SQL warehouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-sql-warehouse"
product: "zuora-platform"
scraped_at: "2026-02-20T21:12:33.842Z"
---

# Create a SQL warehouse

Learn how to create a new SQL warehouse for data writing

By default, this Databricks integration makes use of Unity Catalog data governance features. You will need Unity Catalog enabled on your Databricks Workspace.

1.  Log in to the Databricks account.
2.  In the navigation pane, click SQL Warehouses.
3.  In the SQL Warehouses console, click Create SQL Warehouse.
4.  In the New SQL Warehouse menu, choose a Name and configure the options for the new SQL warehouse.
5.  Under Advanced options, ensure Unity Catalog is in the On position and click Create.

    ![New SQL Warehouse Databricks](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f5c2b48d-cc3e-4663-adbc-3a3d3f6b0c6f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY1YzJiNDhkLWNjM2UtNDY2My1hZGJjLTNhM2QzZjZiMGM2ZiIsImV4cCI6MTc3MTcwODM1MiwianRpIjoiNTBiMDgzMWI3NDRhNGFkYzljNmE1M2RkMTA3NjIyYzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gD4jEW0t3WeG1KUXXf8AcLNZmbxTZxJnnbOjVNS00ik)

    You must then configure access. There are two options:

    -   Option A: Configuring access by using OAuth Secret (recommended) [Configure access: OAuth Secret (Recommended)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-oauth-secret-recommended)

    -   Option B: Personal Access Token (PAT) [Configure access: Personal Access Token (PAT)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat)



Next, depending on your option, go to [Configure access: OAuth Secret (Recommended)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-oauth-secret-recommended) or [Configure access: Personal Access Token (PAT)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat).
