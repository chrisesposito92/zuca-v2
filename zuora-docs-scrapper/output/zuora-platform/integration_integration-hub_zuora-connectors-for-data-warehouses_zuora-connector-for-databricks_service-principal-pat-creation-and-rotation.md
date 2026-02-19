---
title: "Service principal PAT: Creation and rotation"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:56.755Z"
---

# Service principal PAT: Creation and rotation

Learn how to create a Databricks Personal Access Token (PAT) for a service principal on Azure Databricks, and rotate it safely for use with Databricks connections.

## Service principal types

Azure Databricks supports two types of service principals:

1.  Azure Databricks managed service principals: Created and managed directly within Databricks. Can create PATs through the Databricks UI.

2.  Microsoft Entra ID managed service principals: Created in Microsoft Entra ID, then imported into Databricks. Accessed via Azure API.


Learn how to create PATs for both Microsoft Entra ID managed service principals (option A in [Choose your service principal type](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/choose-your-service-principal-type)) and Databricks managed service principals (option B in [Choose your service principal type](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/choose-your-service-principal-type)).
