---
title: "Use a Service Principal with Service Account PAT"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat/use-a-service-principal-with-service-account-pat"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:03.664Z"
---

# Use a Service Principal with Service Account PAT

Learn how to a Service Principal & a Personal Access Token (PAT) tied to the Service Account

When you [configure access with a Personal Access Token (PAT)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat), you may prefer to create a Service Principal with a PAT to use for authentication instead of using your account's PAT. You can create a Service Principal and generate a PAT on behalf of the Service Principal.

1.  In your Databricks workspace, click your username or icon in the top right, click Settings, Identity and access, and next to the Service Principals option, click Manage.
2.  Click the Add service principal button, click Add new in the modal, enter a display name and click Add.
3.  Click on the newly created Service Principal, and under Entitlements select Databricks SQL Access and Workspace Access. Click Update, and make a note of the Application ID of your newly created Service Principal.
4.  Back in the Admin Settings menu, click the Advanced section (under the Workspace admin menu). In the Access Control section, next to the Personal Access Tokens row, click Permission Settings. Search for and select the Service Principal you created, select the Can use permission, click Add, and then Save.
5.  Navigate back to the SQL Warehouses section of your Workspace, click the SQL Warehouses tab, and select the SQL Warehouse you created in [Create a SQL warehouse](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-sql-warehouse). Click Permissions in the top right, search for and select the Service Principal you created, select the Can use permission, and click Add.
6.  Use your terminal to generate a Service Principal Access Token using your Personal Access Token generated above. Record the token value. This token can now be used as the access token for the connection.

    curl --request POST "https://<databricks-account-id>.cloud.databricks.com/api/2.0/token-management/on-behalf-of/tokens" \\ --header "Authorization: Bearer <personal-access-token>" \\ --data '{ "application\_id": "<application-id-of-service-principal>", "lifetime\_seconds": <token-lifetime-in-seconds-eg-31536000>, "comment": "<some-description-of-this-token>" }'

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


Refer to [Configure access: Personal Access Token (PAT)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access-personal-access-token-pat).
