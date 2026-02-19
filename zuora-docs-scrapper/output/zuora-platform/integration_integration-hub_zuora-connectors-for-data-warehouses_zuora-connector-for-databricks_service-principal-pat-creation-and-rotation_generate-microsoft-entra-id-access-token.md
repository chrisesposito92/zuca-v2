---
title: "Generate Microsoft Entra ID access token"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/generate-microsoft-entra-id-access-token"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:23.170Z"
---

# Generate Microsoft Entra ID access token

Learn how to generate Microsoft Entra ID access token

Ensure you have [configured token permissions for Entra ID SP](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/configure-token-permissions-for-entra-id-sp).

Use the service principal credentials to request an Entra ID token:

\# Replace values in <>. Token expires in ~1 hour. curl -X POST "https://login.microsoftonline.com/<tenant-id>/oauth2/v2.0/token" \\ -H 'Content-Type: application/x-www-form-urlencoded' \\ -d 'client\_id=<application-id>' \\ -d 'client\_secret=<client-secret>' \\ -d 'grant\_type=client\_credentials' \\ -d 'scope=2ff814a6-3304-4ab8-85cb-cd0e6f879c1d%2F.default'

Replace:

-   <tenant-id> with the Directory (tenant) ID from [Create the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).

-   <application-id> with the Application (client) ID from [Create the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).

-   <client-secret> with the client secret Value from [Create the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).


The `2ff814a6-3304-4ab8-85cb-cd0e6f879c1d/.default` scope identifies Azure Databricks and is not workspace-specific. Do not change it. Refer to [Microsoft Learn](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/auth/service-prin-aad-token).

Token lifetime: Entra tokens are short-lived (~1 hour). Use immediately to create the PAT, or automate with CLI/SDK tools. Refer to [Microsoft Learn.](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/auth/service-prin-aad-token)

Now continue to [Create PAT for Entra ID SP via API](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-pat-for-entra-id-sp-via-api).
