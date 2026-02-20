---
title: "Service Principal PAT: Troubleshooting"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/service-principal-pat-troubleshooting"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:20.291Z"
---

# Service Principal PAT: Troubleshooting

Know about troubleshooting for service principal PAT

## 403 / not authorized when creating PAT

PATs may be disabled for the workspace, or the service principal/group lacks the CAN USE permission. Check Admin Settings > Access control > Personal access tokens. For more information, refer to [Microsoft Learn.](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/access-control/tokens)

## Invalid scope when requesting Entra token

Use the exact scope `2ff814a6-3304-4ab8-85cb-cd0e6f879c1d/.default`. For more information, refer to [Microsoft Learn.](https://learn.microsoft.com/en-us/azure/databricks/dev-tools/auth/service-prin-aad-token)

## Account-level APIs failing with PAT

PATs are for workspace-level auth. Account-level automation requires Entra/OAuth tokens. For more information, refer to [Microsoft Learn.](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/access-control/tokens)
