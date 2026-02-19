---
title: "Get started with Zuora Connector for Generic ClickHouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/get-started-with-zuora-connector-for-generic-clickhouse"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:46.519Z"
---

# Get started with Zuora Connector for Generic ClickHouse

Summarizes the prerequisites to get started with Zuora Connector for Generic ClickHouse

Access to the Generic ClickHouse connector may require purchasing a paid add-on. To get started, please reach out to your Zuora account representative for more information about the product. For confidentiality, Zuora recommends not publicly sharing pricing details and other terms.

Note:

Connectors are licensed on a tenant basis, regardless of the environment (production, central sandbox, or sandbox).

## Zuora connectors – Outbound IP whitelisting requirement

Zuora connectors require the destination to be accessible via the public internet. Please ensure that the following Zuora outbound IPs are whitelisted at your data destination:

-   Production tenants

    -   US Cloud1 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   US Cloud2 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

-   API Sandbox & Central Sandbox Tenants

    -   US Cloud1 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   US Cloud2 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)


If you are not sure whether to use US Cloud1 or Cloud2, see [Zuora Data Centers](/basics/environments/zuora-data-centers).

## Prerequisites

The following is the required Information for setting up Zuora connector for Generic ClickHouse:

1.  Zuora Tenant ID: Provide the tenant ID of the Zuora tenant from which you want to share [data](/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile).
2.  Entity (Optional): If the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature is enabled in your Zuora tenant, specify the entity from which to share data.

With the above details, Zuora will enable a UI for you where you can access the Generic ClickHouse connector setup tab and complete the setup process yourself.

To guide you through the setup process for Generic ClickHouse, see [Setup Zuora Connector for Generic ClickHouse](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/set-up-zuora-connector-for-generic-clickhouse).
