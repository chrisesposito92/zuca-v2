---
title: "Allow access"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-gcp-postgres/set-up-zuora-connector-for-gcp-postgres/allow-access"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:24.237Z"
---

# Allow access

Allow access

If your Postgres database is protected by security groups or other firewall settings, you will need to have the data-syncing service's static IP available to complete Step 1.

1.  In your Google Cloud Console > SQL instances list, click the PostgreSQL instance you want to send data to.
2.  On the Instance page, click the Connections tab on the left. Note the Public IP address. Use `5432` as the port.
3.  In the Networking tab, ensure that the InstanceIP assignment setting is set to Public IP to ensure that the destination is accessible from outside your VPC.
4.  In the Authorized networks section, click Add a network. Enter a descriptive name like data transfer service and the data-syncing service's static IP and click Done.
5.  Click Save.
