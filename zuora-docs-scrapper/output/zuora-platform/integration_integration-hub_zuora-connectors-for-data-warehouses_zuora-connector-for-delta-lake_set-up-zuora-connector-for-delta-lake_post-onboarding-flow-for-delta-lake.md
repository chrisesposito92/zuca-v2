---
title: "Post-onboarding flow for Delta Lake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/post-onboarding-flow-for-delta-lake"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:36.266Z"
---

# Post-onboarding flow for Delta Lake

Know about the post-onboarding flow for Zuora Connector for Delta Lake

When onboarding is complete, the connector status will change to Active.

You will start seeing sync details in the Status tab after the first data transfer. Since this connector is configured with a 24-hour latency, please allow up to one day for the initial sync to appear.

## Network access and whitelisting

Zuora connectors require the destination to be accessible over the public internet. Whitelist the appropriate Zuora outbound IP addresses in your Delta Lake environment based on your tenant’s environment.

For the list of IPs to whitelist, refer to [Get started with Zuora Connector for Delta Lake](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/get-started-with-zuora-connector-for-delta-lake).

## Integration Hub access

You must have access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

-   To link your Zuora and Connect accounts, refer to [Link your connect account to your Zuora account](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/link-your-connect-account-to-your-zuora-account).

-   If you do not have access, raise a support ticket and loop in your Zuora representative to request access.
