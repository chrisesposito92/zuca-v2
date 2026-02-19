---
title: "Post-onboarding flow for Aurora MySql"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/post-onboarding-flow-for-aurora-mysql"
product: "zuora-platform"
scraped_at: "2026-02-19T03:31:43.651Z"
---

# Post-onboarding flow for Aurora MySql

Know about the post-onboarding flow for Aurora MySQL

When onboarding is complete, the connector status will change to Active.

You will start seeing sync details in the Status tab after the first data transfer. The onboarding time depends on the total data volume in your tenant. The first transfer may take longer, as it includes a historical sync of all selected objects.

You can monitor the progress in the UI as the status moves from In Progress to Active when provisioning is complete.

## Network access and whitelisting

Zuora connectors require the destination to be accessible over the public internet. Whitelist the appropriate Zuora outbound IP addresses in your Aurora MySQL environment based on your tenant’s environment.

For the list of IPs to whitelist, refer to [Get started with Zuora Connector for Aurora MySQL](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/get-started-with-zuora-connector-for-aurora-mysql).

## Integration Hub access

You must have access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

-   To link your Zuora and Connect accounts, refer to [Link your connect account to your Zuora account](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/link-your-connect-account-to-your-zuora-account).

-   If you do not have access, raise a support ticket and loop in your Zuora representative to request access.
