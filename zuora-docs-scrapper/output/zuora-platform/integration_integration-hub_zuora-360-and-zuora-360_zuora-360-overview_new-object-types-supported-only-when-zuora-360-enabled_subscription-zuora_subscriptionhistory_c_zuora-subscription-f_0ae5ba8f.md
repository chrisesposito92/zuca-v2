---
title: "Zuora Subscription fields synced with different values in Zuora 360 and in Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/new-object-types-supported-only-when-zuora-360-enabled/subscription-zuora_subscriptionhistory_c/zuora-subscription-fields-synced-with-different-values-in-zuora-360-and-in-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:35:42.713Z"
---

# Zuora Subscription fields synced with different values in Zuora 360 and in Zuora 360+

The Zuora Subscription fields are synced in both Zuora 360 and Zuora 360+, but the field values differ between Zuora\_\_Subscription\_\_c and Zuora\_\_SubscriptionHistory\_\_c.

The following Zuora Subscription fields are synced in both Zuora 360 and in Zuora 360+. However, the field values synced to Zuora\_\_Subscription\_\_c by Zuora 360 are different from the values synced to Zuora\_\_SubscriptionHistory\_\_c by Zuora 360+. See the following table for examples.

| Zuora Subscription Field Name | Field Value Synced in Zuora 360 | Field Value Synced in Zuora 360+ |
| --- | --- | --- |
| Current Term | 12 Months | 12 |
| Current Term Period Type | Month | Month (s) |
| Initial Term | 12 Months | 12 |
| Initial Term Period Type | Month | Month (s) |
| Renewal Term | 6 Months | 6 |
| Renewal Term Period Type | Month | Month (s) |
