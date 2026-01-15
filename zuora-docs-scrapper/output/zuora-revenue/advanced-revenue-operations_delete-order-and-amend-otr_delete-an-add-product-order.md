---
title: "Delete an add-product order"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/delete-order-and-amend-otr/delete-an-add-product-order"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:34.221Z"
---

# Delete an add-product order

This reference details the process of deleting an add-product order from a subscription, reverting the subscription to its base version, and voiding the added product segment.

This scenario occurs when

-   A subscription has an added product.

-   The add-product order needs to be removed.


Scenario:

-   V1: Base subscription product (C1.1).

-   V2: Added product C2.1 from March 2025 to year end.


Create Subscription and add a new product

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C2.1 | 2025-03-01 | 2025-12-31 | 1000 | Active |  |

Delete the add product order

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V2→V1 | C2.1 | 2025-03-01 | 2025-03-01 | 0 | Void | Y |

Outcome in Revenue:

-   The added product segment is voided with zero CCV.

-   The subscription reverts to version V1.
