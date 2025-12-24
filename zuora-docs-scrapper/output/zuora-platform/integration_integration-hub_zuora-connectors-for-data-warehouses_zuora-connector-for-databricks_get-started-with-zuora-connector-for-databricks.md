---
title: "Get started with Zuora connector for Databricks"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/get-started-with-zuora-connector-for-databricks"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:01.584Z"
---

# Get started with Zuora connector for Databricks

The prerequisites to get started with Zuora Connector for Databricks

Access to the Databricks connector may require purchasing a paid add-on. To get started, please reach out to your Zuora account representative for more information about the product. For confidentiality, Zuora recommends not publicly sharing pricing details and other terms.

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


If you are not sure whether to use US Cloud1 or Cloud2, see[Zuora Data Centers](/basics/environments/zuora-data-centers).

## Prerequisites

Required information to set up Zuora connector for Databricks:

1.  Zuora Tenant ID: Provide the tenant ID of the Zuora tenant from which you want to share [data](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).
2.  Entity (Optional): If the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature is enabled in your Zuora tenant, specify the entity from which to share data.

With the above details, Zuora will enable a UI for you where you can access the Databricks connector setup tab and complete the setup process yourself.

To guide you through the setup process for Databricks, see [Setup Zuora Connector for Databricks](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/create-a-new-sql-warehouse-for-data-writing).
