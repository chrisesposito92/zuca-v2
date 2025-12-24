---
title: "Zuora Subscription Fields Synced with Different Values in Zuora 360 and in Zuora 360+ (Subscription)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/sync-field-mapping-of-subscription-and-related-objects-for-zuora-360/zuora-subscription-fields-synced-with-different-values-in-zuora-360-and-in-zuora-360-subscription"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:23.844Z"
---

# Zuora Subscription Fields Synced with Different Values in Zuora 360 and in Zuora 360+ (Subscription)

The Zuora Subscription fields are synced in both Zuora 360 and Zuora 360+, but the field values differ between Zuora\_\_Subscription\_\_c and Zuora\_\_SubscriptionHistory\_\_c.

Following Zuora Subscription fields are synced in both Zuora 360 and in Zuora 360+. However, the field values synced to Zuora\_\_Subscription\_\_c by Zuora 360 are different from the values synced to Zuora\_\_SubscriptionHistory\_\_c by Zuora 360+. See the following table for examples:

| Zuora Subscription Field Name | Field Value Synced in Zuora 360 | Field Value Synced in Zuora 360+ |
| --- | --- | --- |
| Current Term | 12 Months | 12 |
| Current Term Period Type | Month | Month (s) |
| Initial Term | 12 Months | 12 |
| Initial Term Period Type | Month | Month (s) |
| Renewal Term | 6 Months | 6 |
| Renewal Term Period Type | Month | Month (s) |
