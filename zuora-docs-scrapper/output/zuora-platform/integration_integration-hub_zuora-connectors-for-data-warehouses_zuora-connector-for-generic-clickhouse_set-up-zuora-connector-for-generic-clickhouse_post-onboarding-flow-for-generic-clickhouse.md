---
title: "Post-onboarding flow for Generic ClickHouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/set-up-zuora-connector-for-generic-clickhouse/post-onboarding-flow-for-generic-clickhouse"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:40.900Z"
---

# Post-onboarding flow for Generic ClickHouse

Know about the post-onboarding flow for Zuora Connector for Generic ClickHouse

When onboarding is complete, the connector status will change to Active.

You will start seeing sync details in the Status tab after the first data transfer. The onboarding time depends on the total data volume in your tenant. The first transfer may take longer, as it includes a historical sync of all selected objects.

You can monitor progress in the UI as the status moves from In Progress to Active once provisioning is complete.

## Network access and whitelisting

Zuora connectors require the destination to be accessible over the public internet. Whitelist the appropriate Zuora outbound IP addresses in your Generic ClickHouse environment based on your tenant’s environment.

For the list of IPs to whitelist, refer to [Get started with Zuora Connector for Generic ClickHouse](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/get-started-with-zuora-connector-for-generic-clickhouse).

## Integration Hub access

You must have access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

-   To link your Zuora and Connect accounts, refer to [Link your connect account to your Zuora account](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/link-your-connect-account-to-your-zuora-account).

-   If you do not have access, raise a support ticket and loop in your Zuora representative to request access.
