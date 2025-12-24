---
title: "Set up Zuora Connector for Aurora MySQL"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:28.188Z"
---

# Set up Zuora Connector for Aurora MySQL

Detailed instructions for setting up the Zuora Connector for Aurora MySQL

Note:

MySQL Version Support Disclaimer

Effective September 2025:

-   Standard support for MySQL 5.7 is ending.

-   Minimum supported version: MySQL 8.0 (Aurora v3).

-   The MySQL connector will continue to run on 5.7, but treated as best-effort only. New features and enhancements are not guaranteed to work. Issues on 5.7 will receive best-effort support, but fixes may not include backward compatibility.


Related Cloud EOL Notices:

MySQL ([MySQL 5.7 EOL](https://www.mysql.com/support/eol-notice.html), [AWS Aurora v2 / MySQL 5.7 EOL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.MySQL57.EOL.html), [Azure MySQL version policy](https://learn.microsoft.com/en-us/azure/mysql/concepts-version-policy))

Configuring your Aurora MySQL destination within the Zuora Connector includes steps for setting up Aurora MySQL database credentials, managing permissions, configuring access to the database, and other necessary configurations to facilitate a smooth data transfer process from Zuora to Aurora MySQL:

-   [Configure the security group](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/configure-the-security-group)

-   [Configure network ACLs (access control list)](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/configure-network-acls-access-control-list)

-   [Create writer user](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/create-writer-user)

-   [Add your destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/add-your-destination)

-   [Verification and data transfer](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/verification-and-data-transfer)
