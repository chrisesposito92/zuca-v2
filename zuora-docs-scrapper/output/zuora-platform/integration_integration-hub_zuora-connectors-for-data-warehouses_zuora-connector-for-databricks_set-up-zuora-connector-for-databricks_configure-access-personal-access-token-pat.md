---
title: "Configure access: Personal Access Token (PAT)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:56.388Z"
---

# Configure access: Personal Access Token (PAT)

Learn how to configure access with Option B - Personal Access Token (PAT)

Ensure you have [created a SQL warehouse](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-sql-warehouse).

Collect connection information and create an access token for the data transfer service.

1.  In the SQL Warehouses console, select the SQL warehouse you created in [Create a SQL warehouse](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-sql-warehouse).
2.  Click the Connection Details tab, and make a note of the Server hostname, Port, and HTTP path.

    ![PAT Databricks 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/63272d13-3ce0-48a1-9370-81e1c60c9f7e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzMjcyZDEzLTNjZTAtNDhhMS05MzcwLTgxZTFjNjBjOWY3ZSIsImV4cCI6MTc3MTU1ODM2NCwianRpIjoiZjdiODg2YjE4ZDU0NDRiOWEzY2FlNGI3MjU5M2QwNjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ui9uqDtheZz_UtmDfXrCx7CHKtNmfAawWIHDJbP6ij0)

3.  Click the link to create a personal access token.

    ![PAT Databricks 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d2ab4c5f-8f3c-4105-9de0-ebd2dd2076d4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQyYWI0YzVmLThmM2MtNDEwNS05ZGUwLWViZDJkZDIwNzZkNCIsImV4cCI6MTc3MTU1ODM2NCwianRpIjoiYmI3ODA4Y2VmYTI4NDUxYmFjMTM5YTQ1MzliNjI1YzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gE1CwXLu6QtXs0y9j_39-DNInYliByiwcsVT1nrHSgw)

4.  Click Generate New Token.
5.  Name the token with a descriptive comment and assign the token lifetime. A longer lifetime will ensure you do not have to update the token as often. Click Generate.
6.  In the pop up that follows, copy the token and securely save the token.

    You may prefer to create a Service Principal with a PAT to use for authentication instead of using your account's Personal Access Token. For more information, refer to [Use a Service Principal with Service Account PAT](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat/use-a-service-principal-with-service-account-pat).

7.  In the Databricks UI, select the Catalog tab, and select the target Catalog. Within the catalog Permissions tab, click Grant. In the following modal, select the principal for which you generated the access token, select `USE CATALOG`, and click Grant.
8.  Under the target Catalog, select the target schema (for example, `main.default`, or create a new target schema). Within the schema Permissions tab, click Grant. In the following modal, select the principal for which you generated the access token, and select either `ALL PRIVILEGES` or the following nine privileges and then click Grant:

    -   `USE SCHEMA`
    -   `APPLY TAG`
    -   `MODIFY`
    -   `READ VOLUME`
    -   `SELECT`
    -   `WRITE VOLUME`
    -   `CREATE MATERIALIZED VIEW`
    -   `CREATE TABLE`
    -   `CREATE VOLUME`

    Note: IP Access Lists (optional)

    If your workspace enforces Databricks IP Access Lists, allowlist the static egress IP(s) used by the data transfer service so connections and test sessions can open successfully. See Databricks documentation: [Databricks IP Access Lists](https://learn.microsoft.com/en-us/azure/databricks/security/network/front-end/ip-access-list).

    -   Cloud Hosted (US): `35.192.85.117/32`

    -   Cloud Hosted (EU): `104.199.49.149/32`


    If private-cloud or self-hosted, contact support for the static egress IP.


You must [add the destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/add-destination-for-databricks).
