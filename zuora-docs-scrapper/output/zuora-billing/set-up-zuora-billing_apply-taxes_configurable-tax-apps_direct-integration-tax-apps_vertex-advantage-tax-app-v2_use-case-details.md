---
title: "Use case details"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/vertex-advantage-tax-app-v2/use-case-details"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:31.124Z"
---

# Use case details

This article outlines various use cases for handling tax transactions, including reconciliation, compensation, and vendor switching, with a focus on managing refunds and credits.

| Use Case | Description | v1 | v2 |
| --- | --- | --- | --- |
| Reconciliation | In the event of a failed posting document but a successful tax submission, an orphan tax transaction may be generated. The Vertex side must revert to this orphan transaction. For instance, when a payment failure causes an order transaction to fail. | Refund items are not manageable. | Capable of reversing all charges. |
| Compensation | Multiple refunds for the same charge can happen if multiple removals or subscription cancellations occur before the removal date. Let’s consider a subscription that lasts 12 months and is billed annually. After ten months, the price changes, resulting in a two-month credit and a charge at the new price for the remaining two months. Canceling the subscription right away will result in the cancellation of the 2-month credit as well as the full 12-month credit. | Not suitable for addressing such scenarios. | Refunds can be processed by sending negative charges. |
| Cancel Charges with Discount | The Tax App initiates separate refund calls for each credit item, handled independently from the main tax transaction request sent to Taxamo. | In the current v1 integration, an extra refund call is needed to credit items for past transactions. | Integration and customization are made simpler, reducing complexity. |
| Switch Vendors | Transitioning from tax vendor A to Vertex Advantage Tax can be difficult when generating credit charges from past invoices. Nonetheless, Vertex Advantage Tax allows for processing credits as negative charges. | Previous transactions may not exist in Vertex Advantage Tax. | Capable of handling credits by processing them as negative charges. |

Note:

Credit representation differs in the Vertex system, while the total reporting amount remains consistent.
