---
title: "Using a Service Principal instead of your Personal Access Token"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/configure-access/using-a-service-principal-instead-of-your-personal-access-token"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:08.938Z"
---

# Using a Service Principal instead of your Personal Access Token

Using a Service Principal for authentication

You may prefer to create a Service Principal to use for authentication instead of using a Personal Access Token. To do so, use the following steps to create a Service Principal and generate an access token.

1.  In your Databricks workspace, click your username on top right, click Admin Settings, Identity and access, and click Manage next to the Service Principals options.
2.  Click the Add service principal button, click Add new in the modal, enter a display name > click Add.
3.  Click on the newly created Service Principal, and under Entitlements select Databricks SQL Access and Workspace Access. Click Update and make a note of the Application ID of your newly created Service Principal.
4.  Back in the Admin Settings menu, click the Advanced section (under the Workspace admin menu). In the Access Control section, next to the Personal Access Tokens row, click Permission Settings. Search for and select the Service Principal you created, select Can use permission, click Add, and Save.
5.  Navigate back to the SQL Warehouses section of your Workspace, click the SQL Warehouses tab, and select the SQL Warehouse you created in [Step 1](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-new-sql-warehouse-for-data-writing). Click Permissions on the top right, search for and select the Service Principal you created, select Can use permission, and click Add.
6.  Use your terminal to generate a Service Principal Access Token using your Personal Access Token generated above. Record the token value.

    This token can now be used as the access token for the connection.

    curl --request POST "https://<databricks-account-id>.cloud.databricks.com/api/2.0/token-management/on-behalf-of/tokens" \\ --header "Authorization: Bearer <personal-access-token>" \\ --data '{ "application\_id": "<application-id-of-service-principal>", "lifetime\_seconds": <token-lifetime-in-seconds-eg-31536000>, "comment": "<some-discription-of-this-token>" }'
