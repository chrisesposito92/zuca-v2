---
title: "Segment changes with Billing - Revenue Integration enabled"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/use-cases-of-mapping-order-actions-or-amendments/segment-changes-with-billing---revenue-integration-enabled"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:07.721Z"
---

# Segment changes with Billing - Revenue Integration enabled

New segment created upon subscription renewal and segment splitting for amendments

## New segment created upon subscription renewal

In the scope of Zuora Billing, when you renew a subscription, the existing rate plan charge segment is extended. This behavior can result in several issues when relevant data is collected by Zuora Revenue, so the subscription renewal logic is changed in Zuora Billing if you enable the Zuora Billing - Revenue Integration feature. With this feature enabled, when you renew a subscription, a new rate plan charge segment is created. The original charge segment is thus split into two segments.

However, historical charge segments will not be split by term. It is because Charge Segment is a fundamental object in Zuora Billing, which not only is used by Billing - Revenue Integration, but can impact other downstream functions like rating and invoicing. Therefore, to mitigate the risk of duplicating rated or billed charge segments, the segments for historical charges cannot be split by the time the Billing - Revenue Integration is enabled.

## Segment splitting for amendments

Billing - Revenue Integration uses the combination of original charge ID and charge segment to identify the granular transactions within the booking and billing data. When you create a new termed subscription associated with a rate plan charge, Zuora Billing creates a new charge segment that starts from the subscription term start date until the term end date. For evergreen subscriptions, no end date is set for this segment. If you amend the price or quantity during the subscription term, the initial charge segment will be split into two segments - the existing segment and the new segment.

-   For the existing segment: the start date remains the original term start date, and the end date is updated to the amendment date.

-   For the new segment: the start date is the amendment date and the end date remains the original subscription term end date. No end date is set for evergreen subscriptions.
