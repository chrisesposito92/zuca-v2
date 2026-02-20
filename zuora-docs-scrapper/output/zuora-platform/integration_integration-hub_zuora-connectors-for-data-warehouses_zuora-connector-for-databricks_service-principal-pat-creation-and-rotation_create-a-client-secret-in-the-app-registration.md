---
title: "Create a client secret in the app registration"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-a-client-secret-in-the-app-registration"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:03.492Z"
---

# Create a client secret in the app registration

Learn how to create a client secret in the app registration in Microsoft Entra ID

Ensure you have [created the app registration in Microsoft Entra ID](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id).

1.  In the app registration, go to Certificates & secrets > Client secrets > New client secret.
2.  Enter a Description and select an Expires duration (for example, 12 months).
3.  Click Add.
4.  Copy and securely store the Value.

    Note:

    It is important to note that this is your client secret and will not be shown again.


You must [Add Entra ID Service Principal (Import)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/add-entra-id-service-principal-import).
