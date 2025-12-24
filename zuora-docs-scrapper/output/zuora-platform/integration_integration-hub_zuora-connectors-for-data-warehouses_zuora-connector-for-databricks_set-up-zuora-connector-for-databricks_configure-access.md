---
title: "Configure access"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:06.759Z"
---

# Configure access

Detailed instructions for setting up the Zuora Connector for Databricks

Collect connection information and create an access token for the data transfer service. In the pop up that follows, copy the token and securely save the token.

1.  In the SQL Warehouses console, select the SQL warehouse you created in [Step 1](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-new-sql-warehouse-for-data-writing).

    ![databricks-endpoints-console-3](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/21fcb90f-12f1-4947-8e6d-83c7703a9606?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIxZmNiOTBmLTEyZjEtNDk0Ny04ZTZkLTgzYzc3MDNhOTYwNiIsImV4cCI6MTc2NjY4NzQ2NSwianRpIjoiZTJkMTg3ZDZlZDc4NDdhNTljZDM5MDZjNWIyNDE4MjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FleLIpGG0Zm7EAXfJyYklCSv3Q-s2XcC0aTm7aUqjig)

2.  Click the Connection Details tab, and make a note of the Server hostname, Port, and HTTP path.

    ![databricks-server-port-path-4](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6bd78ab7-5d0a-4f2a-b0b9-7d1664a1e618?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZiZDc4YWI3LTVkMGEtNGYyYS1iMGI5LTdkMTY2NGExZTYxOCIsImV4cCI6MTc2NjY4NzQ2NSwianRpIjoiOWI3MDNhNGVmMjQ2NGUxNmIwZDg5ZmE5YTQ0YzM5ZDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._84mQhXbi_wONSlSpM0ugFz0-rlIFujyWYcMIIjJNZ0)

3.  Click the link to Create a personal access token.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/964768bd-fc33-4489-a8e0-044757b2f132?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk2NDc2OGJkLWZjMzMtNDQ4OS1hOGUwLTA0NDc1N2IyZjEzMiIsImV4cCI6MTc2NjY4NzQ2NSwianRpIjoiMjZhNDdmOWJhNGJmNGNiZDkxNzE5NzQzMmVjN2VlZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.39DzrV_aBFL_mVrftONx5KeIHXcDe-pngydp55KiqTI)

4.  Click Generate New Token.

    ![databricks-generate-new-token-6](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/814e50e2-cf49-454c-858e-6eab654e8465?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxNGU1MGUyLWNmNDktNDU0Yy04NThlLTZlYWI2NTRlODQ2NSIsImV4cCI6MTc2NjY4NzQ2NSwianRpIjoiOGE3MzBmMGU2OThhNGI0YjhlMTJlNmRmZmI0OGVjMTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.F2HjHyPk74JYg1FgpzbPqQae3JCtWGtYAu3iJ3qOqpE)

5.  Name the token with a descriptive comment and assign the token lifetime. A longer lifetime will ensure you do not have to update the token as often. Click Generate.
6.  In the Databricks UI, select the Catalog tab, and select the target Catalog. Within the catalog Permissions tab, click Grant. In the following modal, select the principal for which you generated the access token, select `USE CATALOG`, and click Grant.
7.  Under the target Catalog, select the target schema (e.g., `main.default`, or create a new target schema). Within the schema Permissions tab, click Grant. In the following modal, select the principal for which you generated the access token, and select either `ALL PRIVILEGES` or the following 9 privileges and click Grant:

    -   `USE SCHEMA`
    -   `APPLY TAG`
    -   `MODIFY`
    -   `READ VOLUME`
    -   `SELECT`
    -   `WRITE VOLUME`
    -   `CREATE MATERIALIZED VIEW`
    -   `CREATE TABLE`
    -   `CREATE VOLUME`

    To know about using a Service Principal for authentication, see [here](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access/using-a-service-principal-instead-of-your-personal-access-token).
