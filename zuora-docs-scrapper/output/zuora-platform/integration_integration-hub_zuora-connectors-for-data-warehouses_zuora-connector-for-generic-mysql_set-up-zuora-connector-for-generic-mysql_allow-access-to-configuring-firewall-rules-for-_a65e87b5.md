---
title: "Allow access to configuring firewall rules for MySQL data sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-mysql/set-up-zuora-connector-for-generic-mysql/allow-access-to-configuring-firewall-rules-for-mysql-data-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:02.984Z"
---

# Allow access to configuring firewall rules for MySQL data sync

Allow access

If your MySQL database is protected by security groups or other firewall settings, you must have the data-syncing service's static IP available to complete Step 1.

Create a rule in a security group or firewall settings to:

-   Whitelist incoming connections to your host and port (usually `3306`) from the static IP.

-   Whitelist outgoing connections from ports `1024` to `65535` to the static IP.
