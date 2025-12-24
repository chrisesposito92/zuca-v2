---
title: "Multiple billing entities in multi-entity to a single revenue organization"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/manage-revenue-organization-mapping/mapping-table-examples/multiple-billing-entities-in-multi-entity-to-a-single-revenue-organization"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:01.221Z"
---

# Multiple billing entities in multi-entity to a single revenue organization

Example for mapping of multiple billing entities, including a global entity and child entities, to a single revenue organization.

| Billing Entity Name | Enable | Revenue Org Name |
| --- | --- | --- |
| Global Entity | Y | REV Org 1 |
| Child Entity 1 | Y | REV Org 1 |
| Child Entity 2 | N |  |

-   The Multi-entity feature is enabled.

-   The global entity called Global Entity is mapped to a Revenue organization called REV Org 1.

-   The child entity called Child Entity 1 is also mapped to the same Revenue organization.

-   The child entity called Child Entity 2 is not mapped to any Revenue organization.
