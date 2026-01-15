---
title: "Delete a cancel order"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/delete-a-cancel-order"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:20.822Z"
---

# Delete a cancel order

Learn how to delete a future-dated cancel order to renew a subscription and restore its original version.

This use case applies when:

-   A subscription has been canceled with a future-dated cancellation order.

-   The cancellation must be removed so the subscription can continue.


Scenario:

-   Subscription V1 has SO line C1.1 active for 2025-01-01 to 2025-12-31 with CCV = 1200.

-   A cancel order (V2) shortens the end date to 2025-11-30 with CCV = 1100.


The below example illustrates that if you want to cancel on a future date, you have to delete the cancel order and renew the subscription.

Cancel on future date, need to delete cancel and renew the subscription
| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C1.1 | 2025-01-01 | 2025-11-31 | 1100 | Cancel |  |

Outcome in Revenue:

-   Version V1 is restored.

-   The canceled version (V2→V1) is marked as Deleted = Y.

-   Renewal (C1.2) becomes active for 2026-01-01 to 2026-12-31.
