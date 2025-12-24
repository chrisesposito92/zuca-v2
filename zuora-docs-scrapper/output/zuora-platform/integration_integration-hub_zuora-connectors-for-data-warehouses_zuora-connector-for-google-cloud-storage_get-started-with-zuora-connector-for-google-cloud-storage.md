---
title: "Get started with Zuora Connector for Google Cloud Storage"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/get-started-with-zuora-connector-for-google-cloud-storage"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:34.571Z"
---

# Get started with Zuora Connector for Google Cloud Storage

The prerequisites to get started with Zuora Connector for Google Cloud Storage

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

To begin the setup process for the Zuora Connector for Google Cloud Storage, ensure you have the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora. For more information on Tenant ID, see [Managing your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

-   Google Cloud Storage Bucket: Your Google Cloud Storage bucket should be pre-configured and ready for the connection. Ensure that you have the necessary permissions to manage and access the bucket within your Google Cloud environment.

-   Google Cloud Service Account Credentials: You will need the JSON key file for a Google Cloud service account with appropriate permissions to access your Google Cloud Storage bucket. Ensure the service account has roles that permit it to manage storage buckets and objects within Google Cloud.


Once you have these prerequisites in place, you can proceed with the configuration steps to establish the link between your Zuora account and your Google Cloud Storage bucket.

This enables streamlined data synchronization and enhances your data storage and analytics capabilities within Google Cloud.

For the setup process of Google Cloud Storage, see [Set up Zuora Connector for Google Cloud Storage](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage).
