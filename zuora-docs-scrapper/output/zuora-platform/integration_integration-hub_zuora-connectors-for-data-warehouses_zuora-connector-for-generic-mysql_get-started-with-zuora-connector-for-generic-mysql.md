---
title: "Get started with Zuora Connector for Generic MySQL"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-mysql/get-started-with-zuora-connector-for-generic-mysql"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:57.649Z"
---

# Get started with Zuora Connector for Generic MySQL

The prerequisites to get started with Zuora Connnector for Generic MySQL

Note:

MySQL Version Support Disclaimer

Effective September 2025:

-   Standard support for MySQL 5.7 is ending.

-   Minimum supported version: MySQL 8.0 (Aurora v3).

-   The MySQL connector will continue to run on 5.7, but treated as best-effort only. New features and enhancements are not guaranteed to work. Issues on 5.7 will receive best-effort support, but fixes may not include backward compatibility.


Related Cloud EOL Notices:

MySQL ([MySQL 5.7 EOL](https://www.mysql.com/support/eol-notice.html), [AWS Aurora v2 / MySQL 5.7 EOL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.MySQL57.EOL.html), [Azure MySQL version policy](https://learn.microsoft.com/en-us/azure/mysql/concepts-version-policy))

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

To begin the setup process for the Zuora Connector for Generic MySQL, ensure you have the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora. For guidance on finding your Tenant ID, refer to [Managing your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

-   Generic MySQL Database: Ensure that your Generic MySQL database is pre-configured and ready for connection. Make sure you have the necessary permissions to manage and access the database.

-   MySQL Database Credentials: You will need the username and password for your MySQL database to establish the connection.


Once you have these prerequisites in place, you can proceed with the configuration steps to establish the connection between your Zuora account and your Generic MySQL database. This enables streamlined data synchronization and enhances your data storage and analytics capabilities.

For the setup process of Generic MySQL Server, see [Set up Zuora Connector for Generic MySQL](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-mysql/set-up-zuora-connector-for-generic-mysql).
