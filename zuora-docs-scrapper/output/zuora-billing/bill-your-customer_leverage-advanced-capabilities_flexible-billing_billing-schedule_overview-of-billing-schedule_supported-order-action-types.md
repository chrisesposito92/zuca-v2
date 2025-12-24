---
title: "Supported order action types"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule/supported-order-action-types"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:41.340Z"
---

# Supported order action types

This topic outlines the supported order action types based on the status of associated invoice schedules.

For orders associated with invoice schedules, which types of order actions are supported depends on the status of the associated invoice schedule.

The following table lists the mapping between the types of supported order actions and the status of invoice schedules.

| Order action types | Invoice schedule status | Pending | Partially Processed | Fully Processed |
| --- | --- | --- | --- | --- |
| Pending | Partially Processed | Fully Processed |  |  |
| Creating a subscription | ✅ | ✅ | ✅ |  |
| Adding a product to a subscriptionNote: New products will not be included in the existing invoice schedule. | ✅ | ✅ | ✅ |  |
| Removing a product from a subscription | ✅ | ✅ | ✅ |  |
| Updating a product from the beginning of a rate plan charge | ✅ | 🚫 | 🚫 |  |
| Updating the price, including the unit price and quantity, from the middle of a rate plan charge | 🚫 | 🚫 | 🚫 |  |
| Updating custom fields from the middle of a rate plan chargeNote: The contract effective date must fall into the unbilled service period. If you want to update custom fields for a billed period, you must first reverse the invoices previously generated during the period. | ✅ | ✅ | 🚫 |  |
| Canceling a subscription | ✅ | ✅ | ✅ |  |
| Changing the owner of a subscriptionNote: If all charges within an invoice schedule have been fully billed, you can transfer a subset of subscriptions or all subscriptions associated with an invoice schedule to a new invoice owner account. However, if the charges haven't been fully billed, you must transfer all subscriptions as you did previously. | ✅ | ✅ | ✅ |  |
| Renewing a subscriptionNote:You must enable the Splitting Segments setting. | ✅ | ✅ | ✅ |  |
| Early renewals, covering the Remove Product, Add Product, and Update Terms and Conditions order actions | ✅ | ✅ | ✅ |  |
| Updating the terms and conditions but not extending recurring charges | ✅ | ✅ | ✅ |  |
| Extending recurring charges through the Update Terms and Conditions order actionNote:This order action is only supported in some cases, see Update subscription term start and service activation dates to align with GLD . | 🚫 | 🚫 | 🚫 |  |
| Removing a product before a future-dated removal | ✅ | ✅ | ✅ |  |
| Cancelling a subscription before a future-dated removal | ✅ | ✅ | ✅ |  |
| Updating a product before a future-dated removalNote: You can update a rate plan charge from the beginning. | ✅ | 🚫 | 🚫 |  |
| Suspending or resuming a subscription | 🚫 | 🚫 | 🚫 |  |
