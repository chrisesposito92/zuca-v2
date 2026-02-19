---
title: "Create PAT for Entra ID SP via API"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-pat-for-entra-id-sp-via-api"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:23.398Z"
---

# Create PAT for Entra ID SP via API

Learn how to create PAT for Entra ID SP via API

Ensure you have [generated Microsoft Entra ID access token](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/generate-microsoft-entra-id-access-token).

Microsoft Entra ID service principals can create PATs only through API calls, not through the Databricks UI. This is because they are API-only identities that cannot log into the workspace interface. Refer to [Microsoft Learn.](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/auth/pat)

Call the Databricks Tokens API using the workspace URL and Entra access token from [Create PAT for Databricks SP via API](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-pat-for-databricks-sp-via-api) and [Generate Microsoft Entra ID access token](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/generate-microsoft-entra-id-access-token):

\# Create a PAT for the service principal identity curl -X POST "https://adb-<workspace-id>.<region>.azuredatabricks.net/api/2.0/token/create" \\ -H "Authorization: Bearer <entra\_access\_token>" \\ -H "Content-Type: application/json" \\ -d '{ "lifetime\_seconds": 31536000, "comment": "Databricks data pipeline (service principal)" }'

The response includes a token\_value that starts with dapi.... Copy and store it securely; you will not see it again. Refer to [Databricks documentation](https://docs.databricks.com/en/dev-tools/api/latest/tokens.html).

Alternative: Databricks CLI approach: You can also create the PAT with the Databricks CLI (databricks tokens create) after authenticating the service principal via OAuth M2M or Entra SP auth. For more information, refer to [Microsoft Learn](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/cli/authentication).
