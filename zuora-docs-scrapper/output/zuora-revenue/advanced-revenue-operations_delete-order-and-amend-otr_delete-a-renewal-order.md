---
title: "Delete a renewal order"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/delete-a-renewal-order"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:34.172Z"
---

# Delete a renewal order

This reference explains how to delete a renewal order, reverting a subscription to its prior state and voiding the renewal segment.

This scenario occurs when:

-   A subscription has been renewed.
-   The renewal order must be deleted, reverting the subscription to its prior state.

Scenario:

-   V1: SO line C1.1 active for 2025.
-   V2: Renewal (C1.2) for 2026.

Create subscription and Renew.

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C1.2 | 2026-01-01 | 2026-12-31 | 1200 | Active |  |

Delete a Renew order

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V2→V1 | C1.2 | 2026-01-01 | 2026-01-01 | 0 | Void | Y |

Outcome in Revenue:

-   The renewal segment (C1.2) is voided with zero CCV.
-   The subscription reverts to the original version.
