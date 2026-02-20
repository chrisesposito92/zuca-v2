---
title: "Use the PAT in your integration"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/use-the-pat-in-your-integration"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:19.810Z"
---

# Use the PAT in your integration

Learn how to use the PAT in your integration

Ensure you have [created PAT for Databricks SP via API](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-pat-for-databricks-sp-via-api).

Use this token value in your Databricks connection configuration (Personal access token).

1.  Create a new PAT for the service principal (repeat Steps 4-5).
2.  Update your integration’s Databricks configuration with the new PAT.
3.  Revoke the old PAT using the UI or API:

    `# CLI: delete by token ID`

    `databricks tokens delete <TOKEN_ID>`

    Or, use the Token Management API to delete a token by ID. For more information, refer to [Microsoft Learn](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/access-control/tokens) and [Databricks documentation](https://docs.databricks.com/en/dev-tools/api/latest/token-management.html).
