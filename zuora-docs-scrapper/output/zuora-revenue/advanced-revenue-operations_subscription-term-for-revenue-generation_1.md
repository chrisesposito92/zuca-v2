---
title: "Subscription term for revenue generation"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/subscription-term-for-revenue-generation_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:15.846Z"
---

# Subscription term for revenue generation

The subscription term for revenue defines the revenue start and end dates, distinct from the subscription term, and is crucial in Billing - Revenue Integration environments.

The subscription term for revenue is the term that determines the revenue start and end dates. It is not the same as the subscription term , which determines the subscription start and end dates.

In the Billing - Revenue Integration environment, whenever a subscription is created or renewed in Zuora Billing, a new subscription term for revenue will be created in Zuora Revenue. The subscription term for revenue has the following characteristics:

-   The subscription term for revenue can overlap with each other.
-   After a subscription term for revenue is created, it will not change unless the terms and conditions of a subscription are changed in Zuora Billing, which results in a change in the subscription start and/or end date.
-   The subscription term for revenue must have a start date but not necessarily an end date.
-   The subscription term for revenue has a renewal date, which cannot be changed after being created.

## Charge segment and subscription term for revenue

As a fundamental principle in Billing - Revenue Integration environments, one charge segment belongs to a specific subscription term for revenue. Multiple charge segments can belong to the same subscription term for revenue. This relationship does not change no matter what operation is done to the charge segment.

In the scope of Zuora Billing, when a subscription is renewed, the existing charge segment is extended. However, this behavior will result in several issues when Billing data is collected by Zuora Revenue. To resolve the issues, a property called split\_segment\_by\_term is introduced for Billing - Revenue Integration. When this property is enabled, the charge segment processing logic is changed. Instead of updating the original charge segment, the original charge segment is split into new segments in the following circumstances:

-   When a subscription is renewed
-   When a product is added to the subscription
-   When a product is updated (either for price or quantity)

Note:

When migration is required for historical subscriptions in your Billing - Revenue Integration environments, the generation of subscription term in Zuora Revenue might not be accurate for migration data.

## Use cases

Use cases are provided below to explain how charge segment splitting happens in Billing - Revenue Integration environments.

## Case 1: Renew Subscription

In this use case, a subscription is created starting from 2019-01-01. In Zuora Billing, the key data points that matter to Zuora Revenue are as follows:

| Rate Plan Charge | Subscription |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |

On 2020-01-01, this subscription is renewed. In Billing - Revenue Integration environments, instead of extending the original charge segment, the original charge segment in subscription version 1 is split into two segments in subscription version 2. One is from 2019-01-01 to 2019-12-31 for the previous subscription term, and the other is from 2020-01-01 to 2020-12-31 for the renewed subscription term.

| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 2 | 2020-01-01 | 2021-01-01 |
| C-00001563 | 2 | 2020-01-01 | 2021-01-01 | A-S00000625 | 2 | 2020-01-01 | 2021-01-01 |

## Case 2: Change terms and conditions

In this use case, a subscription is created starting from 2019-01-01. In Zuora Billing, the key data points that matter to Zuora Revenue are as follows:

| Rate Plan Charge | Subscription |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |

Then, the subscription term is extended for six months from 2020-01-01 to 2020-07-01. The subscription term has changed, so the original charge segment in subscription version 1 is updated to version 2 with the new subscription term.

| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |
| C-00001563 | 1 | 2019-01-01 | 2020-07-01 | A-S00000625 | 2 | 2019-01-01 | 2020-07-01 |

## Case 3: Add a product

In this use case, a subscription is created starting from 2019-01-01. In Zuora Billing, the key data points that matter to Zuora Revenue are as follows:

| Rate Plan Charge | Subscription |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |

On 2019-10-01, a new charge is added to the subscription. The original charge segment is identified as the parent segment and then is split into two new segments in subscription version 2. One is from 2019-01-01 to 2020-01-01 as the original segment, and the other is from 2019-10-01 to 2020-01-01 for the new charge.
| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 2 | 2019-01-01 | 2020-01-01 |
| C-00001564 | 1 | 2019-10-01 | 2020-01-01 | A-S00000625 | 2 | 2019-01-01 | 2020-01-01 |

## Case 4: Update a product

In this use case, a subscription is created starting from 2019-01-01. In Zuora Billing, the key data points that matter to Zuora Revenue are as follows:

| Rate Plan Charge | Subscription |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |

On 2019-10-01, the charge price is changed from $100 to $200. The original charge segment is identified as the parent segment and then is split into two new segments in subscription version 2. One is from 2019-01-01 to 2019-10-01 for the previous price, and the other is from 2019-10-01 to 2020-01-01 for the new price. If the product is updated for quantity, the original charge segment will be split in the same way.

| Charge Number | Segment | Effective Start Date | Effective End Date | Name | Version | Term Start Date | Term End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001563 | 1 | 2019-01-01 | 2020-01-01 | A-S00000625 | 1 | 2019-01-01 | 2020-01-01 |
| C-00001563 | 1 | 2019-01-01 | 2019-10-01 | A-S00000625 | 2 | 2019-01-01 | 2020-01-01 |
| C-00001563 | 2 | 2019-10-01 | 2020-01-01 | A-S00000625 | 2 | 2019-01-01 | 2020-01-01 |
