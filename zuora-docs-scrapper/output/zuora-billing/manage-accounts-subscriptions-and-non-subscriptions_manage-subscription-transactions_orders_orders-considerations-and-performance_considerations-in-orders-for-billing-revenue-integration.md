---
title: "Considerations in Orders for Billing - Revenue Integration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/considerations-in-orders-for-billing---revenue-integration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:19.114Z"
---

# Considerations in Orders for Billing - Revenue Integration

This article outlines the known limitations in the Billing - Revenue Integration feature when the Orders feature is enabled, including unsupported order actions and potential mismatches between billing and booking values.

The table below describes known limitations in the Billing - Revenue Integration feature when the Orders feature is enabled.

| Feature | Limitations |
| --- | --- |
| Billing - Revenue Integration | Zuora Revenue does not support the Change Plan order action in Zuora Billing. When Billing - Revenue Integration is enabled, the Change Plan order action will no longer be applicable in Zuora Billing.Note that the new solution, the Order to Revenue feature does not have the preceding limitation. |
| Order action of removing products that happens in an already billed period cannot be supported for discount charges. It might cause a mismatch between billing and booking values.The order action for quantity upsell in Zuora Billing cannot be treated as a new revenue contract or a new POB in Zuora Revenue.Note that the new solution, the Order to Revenue feature does not have the preceding limitations. |  |
