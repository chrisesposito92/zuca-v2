---
title: "Multiple billing organizations in multi-org to a single revenue organization"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/manage-revenue-organization-mapping/mapping-table-examples/multiple-billing-organizations-in-multi-org-to-a-single-revenue-organization"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:06.211Z"
---

# Multiple billing organizations in multi-org to a single revenue organization

An example of how multiple billing organizations can be mapped to a single revenue organization, highlighting the role of the Multi-org feature and specific organizational mappings.

| Billing Org Name | Enable | Revenue Org Name |
| --- | --- | --- |
| Parent Org | N |  |
| Child Org 1 | Y | REV Org 1 |
| Child Org 2 | Y | REV Org 1 |

-   The Multi-org feature is enabled.

-   The global entity called Parent Org is not mapped to any Revenue organization.

-   The child Billing organization called Child Org 1 is mapped to a Revenue organization called REV Org 1.

-   The child Billing organization called Child Org 2 is also mapped to the same Revenue organization.
