---
title: "Allow access"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-postgres/set-up-zuora-connector-for-generic-postgres/allow-access"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:19.251Z"
---

# Allow access

Allow access

If your Postgres database is protected by security groups or other firewall settings, you will need to have the data-syncing service's static IP available to complete Step 1.

Create a rule in a security group or firewall settings to:

-   Whitelist incoming connections to your host and port (usually `5432`) from the static IP.
-   Whitelist outgoing connections from ports `1024` to `65535` to the static IP.
