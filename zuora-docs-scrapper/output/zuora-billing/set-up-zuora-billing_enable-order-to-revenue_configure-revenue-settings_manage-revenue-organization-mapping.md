---
title: "Manage Revenue Organization Mapping"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/manage-revenue-organization-mapping"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:53.361Z"
---

# Manage Revenue Organization Mapping

Learn how to configure mappings from Billing tenants, entities, or organizations to a Revenue organization to enable data synchronization.

On the Manage Revenue Organization Mapping page, you can configure the mapping from Billing tenants, entities, or organizations to a Revenue organization. You must configure the mapping before transaction data can be synced to the Revenue organization.

To access the Manage Revenue Organization Mapping page, click your username at the top right and navigate to Revenue > Manage Revenue Organization Mapping .

## Mapping scenarios

The Order to Revenue feature supports the following mapping scenarios:

-   One-to-one:

    -   A single Billing tenant to a single Revenue organization.

    -   Each Billing entity in Multi-entity to a unique Revenue organization.

    -   Each Billing organization in Multi-org to a unique Revenue organization.

-   Multiple-to-one:

    -   Multiple Billing entities in Multi-entity to a single Revenue organization.

    -   Multiple Billing organizations in Multi-org to a single Revenue organization.


Note: If Multi-entity is enabled on your tenant, you must configure the Revenue organization mapping settings on the global tenant. All child entities share these mapping settings with the parent tenant.
