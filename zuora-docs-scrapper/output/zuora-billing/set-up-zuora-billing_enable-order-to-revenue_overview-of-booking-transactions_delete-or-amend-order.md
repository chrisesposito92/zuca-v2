---
title: "Delete or Amend Order"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-booking-transactions/delete-or-amend-order"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:42.119Z"
---

# Delete or Amend Order

This document explains how to delete or amend an activated order in Zuora Billing.

It is possible to delete or amend an order after it has been activated. Below, we explain the implications of deleting or amending an activated order, particularly how Zuora Billing communicates these changes to Revenue:

When an order is deleted or amended, Zuora Billing sends the previous version's Sales Order (SO) line ID information to Revenue. If the relevant segment does not exist in the previous version, the charge status for the SO line ID will be marked as "void." Revenue treatment for processing a delete action is always retrospective/cumulative catch-up.

Note that all actions are supported, even though the examples below cover only a few scenarios.

## Scenario 1: Delete cancel order

To handle an order that was canceled for a future date but needs to be renewed, the cancellation must first be deleted.

| Version | SO Line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C1.1 | 2025-01-01 | 2025-11-31 | 1100 | Cancel |  |

Delete the cancel order (cancellation date: 2025-12-01) and renew.

| Version | SO Line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V2→V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active | Y |
| V2 | C1.2 | 2026-01-01 | 2026-12-31 | 1200 | Active |  |

## Scenario:2 Segment reuse

Create subscription and Update the product

| Version | SO Line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C1.1 | 2025-01-01 | 2025-06-30 | 600 | Active |  |
| V2 | C1.2 | 2025-07-01 | 2025-12-31 | 1800 | Active |  |

Delete the Update product order and Re-update the product with a different price

| Version | SO Line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V2→V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active | Y |
| V2→V1 | C1.2 | 2025-01-01 | 2025-01-01 | 0 | Void | Y |
| V2 | C1.1 | 2025-01-01 | 2025-06-30 | 600 | Active |  |
| V2 | C1.2 | 2025-07-01 | 2025-12-31 | 2400 | Active |  |

## Scenario 3: Delete Renew

Create subscription and Update the product

| Version | SO line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V1 | C1.1 | 2025-01-01 | 2025-12-31 | 1200 | Active |  |
| V2 | C1.2 | 2026-01-01 | 2026-12-31 | 1200 | Active |  |

Delete the Renew Order

| Version | SO Line | SD | ED | CCV | Status | Deleted |
| --- | --- | --- | --- | --- | --- | --- |
| V2→V1 | C1.2 | 2026-01-01 | 2026-01-01 | 0 | Void | Y |
