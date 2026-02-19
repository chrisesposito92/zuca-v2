---
title: "Configure access: OAuth Secret (Recommended)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-oauth-secret-recommended"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:56.767Z"
---

# Configure access: OAuth Secret (Recommended)

Learn how to configure access with Option A - OAuth Secret (recommended for most users)

Ensure you have [created a SQL warehouse.](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-sql-warehouse)

1.  In your Databricks workspace, click your username or icon in the top right, click Settings, Identity and access, and next to the Service Principals option, click Manage.
2.  Click the Add service principal button, click Add new in the modal, enter a display name and click Add.
3.  Click on the newly created Service Principal, and under the Secrets tab, click Generate secret.
4.  Enter a lifetime for the secret (e.g., 90 days, 180 days, or 365 days), click Generate and make a note of the Secret value and Client ID.
5.  Navigate back to the SQL Warehouses section of your Workspace, click the SQL Warehouses tab, and select the SQL Warehouse you created in [Create a SQL warehouse](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-sql-warehouse). Click Permissions in the top right, search for and select the Service Principal you created, select the Can use permission, and click Add.
6.  In the Databricks UI, select the Catalog tab, and select the target Catalog. Within the catalog Permissions tab, click Grant. In the following modal, select the Service principal for which you generated the OAuth token, select `USE CATALOG`, and click Grant.
7.  Under the target Catalog, select the target schema (for example, `main.default`, or create a new target schema). Within the schema Permissions tab, click Grant. In the following modal, select the principal for which you generated the access token, and select either `ALL PRIVILEGES` or the following nine privileges and then click Grant:

    -   `USE SCHEMA`
    -   `APPLY TAG`
    -   `MODIFY`
    -   `READ VOLUME`
    -   `SELECT`
    -   `WRITE VOLUME`
    -   `CREATE MATERIALIZED VIEW`
    -   `CREATE TABLE`
    -   `CREATE VOLUME`


You must [add the destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/add-destination-for-databricks).
