---
title: "Create a new SQL warehouse for data writing"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-new-sql-warehouse-for-data-writing"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:04.579Z"
---

# Create a new SQL warehouse for data writing

Detailed instructions for setting up the Zuora Connector for Databricks

This Databricks integration uses Unity Catalog data governance features by default. You will need to enable Unity Catalog on your Databricks Workspace.

To configure your Databricks destination within the Zuora Connector you must first set up service account credentials, manage permissions, configure dataset access, and other necessary configurations to ensure a seamless data transfer process from Zuora to Databricks.

1.  Log in to your Databricks account.
2.  In the navigation pane, click into the workspace dropdown and select SQL.
3.  In the SQL console, in the SQL navigation pane, click Create > SQL warehouse.

    -   ![databricks-sql-endpoint-1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8036c02c-fc83-4ef3-8db0-1e88afd8a42b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgwMzZjMDJjLWZjODMtNGVmMy04ZGIwLTFlODhhZmQ4YTQyYiIsImV4cCI6MTc2NjY4NzQ2MiwianRpIjoiNjAyODY0OGMwYjQzNGQwNWI5YjdmOThmMGFhMGM2YzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.E--KHZqggwrBlx4a1eNac0UDhuG6uCeQ1h3-R4k6a2Q)


4.  In the New SQL Warehouse menu, choose a name and configure the options for the new SQL warehouse. Under Advanced options turn Unity Catalog to On. Select the Preview channel, and click Create.

    -   ![databricks-new-sql-endpoint-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4c1255f5-e93f-4dfc-9dcb-117109ccb96e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRjMTI1NWY1LWU5M2YtNGRmYy05ZGNiLTExNzEwOWNjYjk2ZSIsImV4cCI6MTc2NjY4NzQ2MiwianRpIjoiNTIwZDRhYWFlNDI1NDQyNmFkYjRmMWQwYzQ3N2YxMjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EeBynbkJ1lMJnsKuBa4vVGjVmJJ_f7HU4-11J0C15Cc)
