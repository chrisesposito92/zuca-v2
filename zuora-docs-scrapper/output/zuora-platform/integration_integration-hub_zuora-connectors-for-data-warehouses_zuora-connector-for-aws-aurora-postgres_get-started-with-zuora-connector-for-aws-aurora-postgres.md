---
title: "Get started with Zuora Connector for AWS Aurora Postgres"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/get-started-with-zuora-connector-for-aws-aurora-postgres"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:05.225Z"
---

# Get started with Zuora Connector for AWS Aurora Postgres

The prerequisites to get started with Zuora Connector for AWS Aurora Postgres

Please see the section "Zuora connectors – Outbound IP whitelisting requirement" on this page.

To begin the setup process for the Zuora Connector for AWS Aurora Postgres, please ensure you have the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora. For guidance on finding your Tenant ID, refer to [Managing your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

-   AWS Aurora Postgres Database: Ensure that your AWS Aurora Postgres database is pre-configured and ready for connection. Make sure you have the necessary permissions to manage and access the database.

-   AWS Aurora Postgres Database Credentials: You will need the username and password for your AWS Aurora Postgres database to establish the connection.


Once you have these prerequisites in place, you can proceed with the configuration steps to establish the connection between your Zuora account and your AWS Aurora Postgres database. This enables streamlined data synchronization and enhances your data storage and analytics capabilities.

To guide you through the setup process for AWS Aurora Postgres, see [Set up Zuora Connector for AWS Aurora Postgres](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres)

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
