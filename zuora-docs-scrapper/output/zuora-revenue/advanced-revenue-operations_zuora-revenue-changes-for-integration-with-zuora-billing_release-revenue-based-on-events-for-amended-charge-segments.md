---
title: "Release revenue based on events for amended charge segments"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing/release-revenue-based-on-events-for-amended-charge-segments"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:41.007Z"
---

# Release revenue based on events for amended charge segments

Learn how to release revenue for amended charge segments in Zuora Revenue by using events based on specified percentages or quantities.

In Zuora Revenue, there is an option to release revenue based on events. For example, you can upload revenue events to release the revenue for a charge segment (SO line) based on the specified percentage or quantity. When the charge segment amendment occurs, a new charge segment might be created. In this case, Zuora Revenue can automatically release revenue for the new charge segment according to the release percentage of the previous charge segment.

Note:

Revenue for the amended charge segment can be automatically released only when the event to release revenue for the original charge segment is of one of the following types:

-   Percentage based revenue event Revenue is released based on the percentage that is specified in the uploaded event.

-   Quantify based revenue event Revenue is released based on the quantity that is specified in the uploaded event.


The most important thing to release revenue for the amended segment is to determine the release percentage for the new charge segment.

-   If the revenue of the previous charge segment is released based on percentage, the same percentage will be applied to the new charge segment.

-   If the revenue of the previous charge segment is released based on quantity, the release percentage to be applied to the new charge segment is calculated as follows. If the calculated percentage is greater than 100%, 100% will be applied. Quantity of previous charge segment \* Release percentage of previous charge segment / Quantity of the new charge segment


Examples are provided in the following sections to help you understand how to determine the release percentage in the two scenarios.

## Revenue release based on percentage

In this scenario, a subscription is created for 12 months with the following details. According to the event setup and POB template definition in Zuora Revenue, the revenue event for this charge segment is based on percentage.

| Subscription # | Subscription Version | Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-00001 | 1 | C-00001 | 1 | 10 | 12000 | 01-Jan-2019 | 31-Dec-2019 |

After the revenue event is uploaded and processed in Zuora Revenue, 50% of the revenue is released on this charge segment.

| Rate Plan Charge# | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date | Released Percentage | Released Revenue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 10 | 12000 | 01-Jan-2019 | 31-Dec-2019 | 50% | 6000 |

In the Mar-19 period, an amendment occurs to increase the quantity from 10 to 15. The previous charge segment will be updated and a new charge segment is created as follows:

| Subscription # | Subscription Version | Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-00001 | 2 | C-00001 | 1 | 10 | 2000 | 01-Jan-2019 | 28-Feb-2019 |
| S-00001 | 2 | C-00001 | 2 | 15 | 15000 | 01-Mar-2019 | 31-Dec-2019 |

The release percentage of the charge segment 1 (50%) will be applied to the charge segment 2. The released revenue for the two charge segments are as follows:

| Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date | Released Percentage | Released Revenue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 10 | 2000 | 01-Jan-2019 | 28-Feb-2019 | 50% | 1000 |
| C-00001 | 2 | 15 | 15000 | 01-Mar-2019 | 31-Dec-2019 | 50% | 7500 |

## Revenue Release based on quantity

In this scenario, a subscription is created for 12 months with the following details. According to the event setup and POB template definition in Zuora Revenue, the revenue event for this charge segment is based on quantity.

| Subscription # | Subscription Version | Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-00001 | 1 | C-00001 | 1 | 10 | 12000 | 01-Jan-2019 | 31-Dec-2019 |

After the revenue event is uploaded and processed in Zuora Revenue, the revenue is released for the quantity of 10 on this charge segment. The total quantity of charge segment 1 is 10, so the release percentage for charge segment 1 is 100%.

| Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date | Released Percentage | Released Revenue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 10 | 12000 | 01-Jan-2019 | 31-Dec-2019 | 100% | 12000 |

In the Mar-2019 period, an amendment occurs to increase the quantity from 10 to 15 for the original charge segment. The original charge segment will be updated and a new charge segment is created as follows:

| Subscription # | Subscription Version | Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-00001 | 2 | C-00001 | 1 | 10 | 2000 | 01-Jan-2019 | 28-Feb-2019 |
| S-00001 | 2 | C-00001 | 2 | 15 | 15000 | 01-Mar-2019 | 31-Dec-2019 |

The release percentage for charge segment 2 can be calculated based on charge segment 1:

Release Percentage = Quantity of previous charge segment \* Release percentage of previous charge segment / Quantity of the new charge segment

\= 10 \* 100% / 15 = 66.67%

| Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date | Released Quantity | Released Percentage | Released Revenue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 10 | 2000 | 01-Jan-2019 | 28-Feb-2019 | 10 | 100% | 2000 |
| C-00001 | 2 | 15 | 15000 | 01-Mar-2019 | 31-Dec-2019 |  | 66.67% | 10000 |

In the Jul-2019 period, another amendment occurs to decrease the quantity from 15 to 5. The previous charge segment will be updated and a new charge segment is created as follows:

| Subscription # | Subscription Version | Rate Plan Charge # | Rate Plan charge Segment | Quantity | Booked Amount | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-00001 | 2 | C-00001 | 1 | 10 | 2000 | 01-Jan-2019 | 28-Feb-2019 |
| S-00001 | 2 | C-00001 | 2 | 15 | 6000 | 01-Mar-2019 | 30-Jun-2019 |
| S-00001 | 2 | C-00001 | 3 | 5 | 3000 | 01-Jul-2019 | 31-Dec-2019 |

The release percentage for charge segment 3 can be calculated based on charge segment 2:

Release Percentage = Quantity of previous charge segment \* Release percentage of previous charge segment / Quantity of the new charge segment

\= 15 \* 66.67% / 5 = 200.01%

Because 200.01% is greater than 100%, the release percentage for charge segment 3 will be 100%. The released revenue for the three charge segments are as follows:

| Rate Plan Charge # | Rate Plan Charge Segment | Quantity | Booked Amount | Start Date | End Date | Released Quantity | Released Percentage | Released Revenue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 10 | 2000 | 01-Jan-2019 | 28-Feb-2019 | 10 | 100% | 2000 |
| C-00001 | 2 | 15 | 6000 | 01-Mar-2019 | 30-Jun-2019 |  | 66.67% | 4000 |
| C-00001 | 3 | 5 | 3000 | 01-Jul-2019 | 31-Dec-2019 |  | 100% | 3000 |
