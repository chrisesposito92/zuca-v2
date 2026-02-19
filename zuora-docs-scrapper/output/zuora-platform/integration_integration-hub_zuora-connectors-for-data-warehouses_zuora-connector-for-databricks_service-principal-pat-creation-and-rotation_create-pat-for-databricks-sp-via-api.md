---
title: "Create PAT for Databricks SP via API"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-pat-for-databricks-sp-via-api"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:23.355Z"
---

# Create PAT for Databricks SP via API

Learn how to create PAT for Databricks SP via API

Ensure you have [configured token permissions for Databricks SP](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/configure-token-permissions-for-databricks-sp).

For Databricks managed service principals, you can create a PAT using the on-behalf-of tokens API with an admin user PAT.

To create a token on behalf of the service principal, you will need an existing admin Personal Access Token:

curl --request POST "https://<databricks-workspace-url>/api/2.0/token-management/on-behalf-of/tokens" \\ --header "Authorization: Bearer <admin-personal-access-token>" \\ --header "Content-Type: application/json" \\ --data '{ "application\_id": "<service-principal-application-id>", "lifetime\_seconds": 31536000, "comment": "Databricks data pipeline (service principal)" }'

Replace:

-   <databricks-workspace-url> with your workspace URL

-   <admin-personal-access-token> with a workspace admin’s PAT

-   <service-principal-application-id> with the Application ID from [Create Databricks managed service principal](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-databricks-managed-service-principal).


Alternative: UI approach:

Some Databricks managed service principals may also create PATs through Admin Settings > Identity and access > Service principals > click service principal > Access tokens > Generate new token, depending on workspace configuration.

Continue to [Use the PAT in your integration](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/use-the-pat-in-your-integration).
