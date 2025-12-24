---
title: "Allow access"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/set-up-zuora-connector-for-sql-server/allow-access"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:05.895Z"
---

# Allow access

Allow access

-   If your SQL Server database is protected by security groups or other firewall settings, you will need to have the data-syncing service's static IP available to
-   Confirm that your SQL Server database is configured to allow TCP/IP connections.

Create a rule in a security group or firewall settings to whitelist:

-   Incoming connections to your host and port (usually `1433`) from the static IP.

-   Outgoing connections from ports `1024` to `65535` to the static IP.
