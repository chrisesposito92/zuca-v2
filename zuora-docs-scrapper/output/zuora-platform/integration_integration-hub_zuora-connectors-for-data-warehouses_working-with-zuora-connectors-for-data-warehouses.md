---
title: "Working with Zuora Connectors for Data Warehouses"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/working-with-zuora-connectors-for-data-warehouses"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:04.967Z"
---

# Working with Zuora Connectors for Data Warehouses

Describes the working of Zuora Data connectors and its usage guidelines

## Zuora Connectors - Process overview

Note:

The Zuora Connector for Data Warehouses feature is in the Early availability phase. This is a paid add-on. If you are interested in joining our early availability program, please reach out to your Zuora Representative for further details.

Zuora Connectors provide a seamless bridge between your Zuora account and your chosen data destination. This one-time setup process allows you to configure your destination credentials, enabling automatic syncing of your Zuora data to the selected destination based on the latency configuration you defined. These connectors support a variety of commonly used data warehouses, databases, and object storage providers, offering flexibility and ease of integration into your existing data ecosystem.

Note:

The connector setup between Zuora and your chosen destination may take up to 21 days , depending on the type of destination and necessary configurations, such as whitelisting IPs or host addresses.

For some destinations, the setup may be completed in just a few days. Additionally, the initial onboarding and first data transfer time can vary based on the tenant's data volume. Once the connection is successfully established, the connector will follow the selected latency configuration and sync data at the scheduled time, ensuring seamless and ongoing data transfer.

## CSBX Refresh and Destination Sync

The CSBX (Central Sandbox) refresh process is fully automated. When a CSBX tenant is refreshed, the corresponding destination is automatically refreshed with the latest data from the tenant.

This process involves removing and re-onboarding all previously synced tables and data. The destination refresh will only begin after the CSBX tenant refresh is fully completed within Zuora Billing.

For the following reasons, please allow for additional buffer time beyond the actual CSBX refresh completion:

-   The destination refresh duration depends on the tenant's data volume.
-   This process is equivalent to a full initial onboarding. All historical data is reloaded again.

For an exact ETA, please contact the [Zuora Global Support](https://support.zuora.com/).
