---
title: "Hard Bundle support"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/hard-bundle-support"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:00.402Z"
---

# Hard Bundle support

A hard bundle is a product rate plan that consolidates multiple component products and their rate plans into a single entity, streamlining invoicing and order processing.

A hard bundle is a specific type of product rate plan that groups multiple component products and their rate plans into a single entity instead of adding multiple separate rate plans and charges. You can subscribe to a hard bundle rate plan similar to the normal rate plans. It allows you to process invoicing and order creation much faster. It can also include optional component charges, which can be added or removed according to defined hard bundle rules.

When you subscribe to a hard bundle rate plan in an order, all non‑optional component charges in that bundle are subscribed automatically. When viewing a subscription with hard bundles on the Orders and Subscriptions detail page, the hard bundle is displayed in the same way as a normal rate plan.

Hard bundles support all the standard order actions similar to the regular rate plans. In addition, the Update Product order action allows you to add charges that were not previously included in the subscription, or remove optional component charges that were already subscribed.

Note:

The Hard Bundle feature is in the Early Adopter phase.
