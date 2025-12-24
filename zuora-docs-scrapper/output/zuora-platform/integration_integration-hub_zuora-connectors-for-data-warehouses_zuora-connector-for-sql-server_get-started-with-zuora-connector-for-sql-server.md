---
title: "Get started with Zuora Connector for SQL Server"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/get-started-with-zuora-connector-for-sql-server"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:00.441Z"
---

# Get started with Zuora Connector for SQL Server

The prerequisites to get started with Zuora Connector for SQL Server

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

To begin the setup process for the Zuora Connector for SQL Server, ensure you have the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora.

-   SQL Server Database: Ensure that your SQL Server database is pre-configured and ready for connection. Make sure you have the necessary permissions to manage and access the database.

-   SQL Server Credentials: You will need the username and password for your MySQL database to establish the connection.


Once you have these prerequisites in place, you can proceed with the configuration steps to establish the connection between your Zuora account and your SQL Server database. This enables streamlined data synchronization and enhances your data storage and analytics capabilities.

For the setup process of SQL Server, see [Set up Zuora Connector for SQL Server](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/set-up-zuora-connector-for-sql-server).
