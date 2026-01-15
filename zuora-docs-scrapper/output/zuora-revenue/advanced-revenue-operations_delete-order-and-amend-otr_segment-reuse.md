---
title: "Segment reuse"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/segment-reuse"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:09.812Z"
---

# Segment reuse

This reference details scenarios of segment reuse when product update orders modify service periods or pricing, including the creation, deletion, and reapplication of updates.

This scenario occurs when:

-   A product update order modifies service periods or CCVs.

-   The update order is deleted, and a new update order is created with different pricing.


Scenario:

-   Version V1 with SO line C1.1 for the full year.

-   Version V2 splits the year into two SO lines (C1.1 & C1.2).


The below example illustrates a scenario when you update the product order and apply a new update with new pricing.

Create subscription and Update the product.

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C1.1 | 2025-01-01 | 2025-06-30 | 600 | Active |  |
| V2 | C1.2 | 2025-07-01 | 2025-12-31 | 1800 | Active |  |

Delete the update product order and reupdate the product with a different price

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V2→V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active | Y |
| V2→V1 | C1.2 | 2025-01-01 | 2025-01-01 | 0 | Void | Y |
| V2 | C1.1 | 2025-01-01 | 2025-06-30 | 600 | Active |  |
| V2 | C1.2 | 2025-07-01 | 2025-12-31 | 2400 | Active |  |

Outcome in Revenue:

-   Previously updated segments revert to V1 and are marked Deleted = Y.

-   A segment with zero CCV and voided status represents outdated/redundant periods.

-   New segments reflect updated pricing for the re-update.
