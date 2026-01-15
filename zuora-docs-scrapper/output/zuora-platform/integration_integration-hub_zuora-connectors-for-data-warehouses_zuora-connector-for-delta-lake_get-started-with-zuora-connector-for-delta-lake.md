---
title: "Get started with Zuora Connector for Delta Lake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/get-started-with-zuora-connector-for-delta-lake"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:19.564Z"
---

# Get started with Zuora Connector for Delta Lake

The prerequisites to get started with Zuora Connector for Delta Lake

Note:

-   Access to the Delta Lake connector may require purchasing a paid add-on. To get started, reach out to your Zuora account representative for more information about the product. For confidentiality, Zuora recommends not to publicly share pricing details and other terms.

-   Connectors are licensed on a tenant basis, regardless of the environment (production, central sandbox, or sandbox).


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

The following is the required information for the setup:

1.  Zuora Tenant ID: Provide the tenant ID of the Zuora tenant from which you want to share [data](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).
2.  Entity (Optional): If the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature is enabled in your Zuora tenant, specify the entity from which to share data.

With the above details, Zuora will enable a UI for you where you can access the Delta Lake connector setup tab and complete the setup process yourself.

To guide you through the setup process for Delta Lake, see [Set up Zuora Connector for Delta Lake](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake).
