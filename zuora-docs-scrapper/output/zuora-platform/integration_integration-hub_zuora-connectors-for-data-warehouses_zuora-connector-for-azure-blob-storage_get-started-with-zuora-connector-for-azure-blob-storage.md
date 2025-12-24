---
title: "Get started with Zuora Connector for Azure Blob Storage"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-azure-blob-storage/get-started-with-zuora-connector-for-azure-blob-storage"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:39.080Z"
---

# Get started with Zuora Connector for Azure Blob Storage

The prerequisites to get started with Zuora Connector for Azure Blob Storage

## Zuora connectors – Outbound IP whitelisting requirement

Zuora connectors require the destination to be accessible via the public internet. Please ensure that the following Zuora outbound IPs are whitelisted at your data destination:

-   Production tenants

    -   US Cloud1 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   US Cloud2 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

-   API Sandbox & Central Sandbox Tenants

    -   US Cloud1 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   US Cloud2 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)


If you are not sure whether to use US Cloud1 or Cloud2, see[Zuora Data Centers](/basics/environments/zuora-data-centers).

## Prerequisites

To begin the setup process for the Zuora Connector for Azure Blob Storage, ensure you have the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora. For guidance on finding your Tenant ID, refer to [Managing your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

-   Azure Blob Storage Container: Your Azure Blob Storage container should be pre-configured and ready for the connection. Ensure that you have the necessary permissions to manage and access the container within your Azure environment.

-   Azure Storage Account Credentials: You will need the account name and account key for an Azure Storage Account with appropriate permissions to access your Azure Blob Storage container. Ensure the storage account has roles that permit it to manage containers and blobs within Azure.


Once you have these prerequisites in place, you can proceed with the configuration steps to establish the link between your Zuora account and your Azure Blob Storage container. This enables streamlined data synchronization and enhances your data storage and analytics capabilities within Azure.

For the setup process of Aurora MySQL Server, see [Set up Zuora Connector for Azure Blob Storage](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-azure-blob-storage/set-up-the-zuora-connector-for-azure-blob-storage) .
