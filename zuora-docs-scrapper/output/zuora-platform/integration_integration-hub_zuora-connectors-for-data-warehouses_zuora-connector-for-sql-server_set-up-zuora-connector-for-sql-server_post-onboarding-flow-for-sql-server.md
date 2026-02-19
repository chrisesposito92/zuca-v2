---
title: "Post-onboarding flow for SQL Server"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/set-up-zuora-connector-for-sql-server/post-onboarding-flow-for-sql-server"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:01.592Z"
---

# Post-onboarding flow for SQL Server

Know about the post-onboarding flow for Zuora Connector for SQL Server

When onboarding is complete, the connector status will change to Active.

You will start seeing sync details in the Status tab after the first data transfer. The onboarding time depends on the total data volume in your tenant. The first transfer may take longer, as it includes a historical sync of all selected objects.

You can monitor progress in the UI as the status moves from In Progress to Active once provisioning is complete.

## Network access and whitelisting

Zuora connectors require the destination to be accessible over the public internet. Whitelist the appropriate Zuora outbound IP addresses in your SQL Server environment based on your tenant’s environment.

For the list of IPs to whitelist, refer to [Get started with Zuora Connector for SQL Server](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/get-started-with-zuora-connector-for-sql-server).

## Integration Hub access

You must have access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

-   To link your Zuora and Connect accounts, refer to [Link your connect account to your Zuora account](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/link-your-connect-account-to-your-zuora-account).

-   If you do not have access, raise a support ticket and loop in your Zuora representative to request access.
