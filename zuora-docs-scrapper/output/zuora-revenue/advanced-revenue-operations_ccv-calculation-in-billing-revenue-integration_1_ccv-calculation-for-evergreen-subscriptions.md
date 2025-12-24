---
title: "CCV calculation for evergreen subscriptions"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/ccv-calculation-in-billing---revenue-integration_1/ccv-calculation-for-evergreen-subscriptions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:30.710Z"
---

# CCV calculation for evergreen subscriptions

Learn how the CCV amount is calculated for evergreen subscriptions, including the determination of estimated end dates and the impact of billing cycles.

Billing - Revenue Integration supports the unbilled revenue recognition for evergreen subscriptions upon booking. It means that the CCV amount is generated for evergreen subscriptions upon subscription creation.

## How CCV is calculated

Since evergreen subscriptions do not have end dates, CCV for evergreen subscriptions is calculated based on the estimated end date on the subscription level. Billing - Revenue Integration determines the estimated subscription end date by comparing the following dates and using the latest one:

-   The current date
-   Effective start date of all regular charges
-   Effective end date of all regular charge if it is present
-   Charged through date of all regular charges

The dates on discount charges and usage charges are not taken into consideration.

For example, suppose that the current date (today) is 2020-04-29. The following table showcases the key information on a sample evergreen subscription that contains two regular charges (C-1 and C-2), and explains how CCV is calculated.

|  | Regular Charge C-1 | Regular Charge C-2 |
| --- | --- | --- |
| Effective start date | 2020-01-01 | 2020-01-01 |
| Effective end date | N/A | N/A |
| Billing period | Month | Quarter |
| Amount | 100 | 300 |
| Subscription start date | 2020-01-01 | 2020-01-01 |
| Current billing period end date | 2020-04-30 | 2020-06-30 |
| Charged through date | 2020-04-30 | 2020-06-30 |
| After CCV processing: |  |  |
| Estimated subscription end date used for CCV | 2020-06-30 | 2020-06-30 |
| CCV | 600 | 600 |

The latest date on this subscription is the Charged through date of C-2 (2020-06-30). Therefore, 2020-06-30 is used as the estimated end date for CCV calculation. If a new product is added to this subscription later than 2020-06-30, the effective start date of the newly added product will be used as the estimated subscription end date. CCV for all charges will then be recalculated.

Note that after the bill run, unposting billing documents will not revert the CCV amount.

## CCV Calculation examples

## Example 1 - create an evergreen subscription

Your customer AOB creates a subscription, A-S0000001, for your software service on 2019-01-10. The bill cycle day (BCD) is the default setting of the customer account, which is the 1st day of every month.

The subscription includes the following rate plan charges:

-   A regular charge of $100/month.
-   A 10% discount charge at the subscription level.

The original rate plan charge data is as below:

| Charge | Type | Billing period | Amount (/month) | Segment | Start Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | Regular | Month | 100 | 1 | 2019-01-10 |
| C-0000002 | Discount (10%) | Month | 10% | 1 | 2019-01-10 |

The CCV service will add 1 day to the current billing period end date as the estimated end date for CCV calculation. Because the billing period is monthly, the current billing period is Jan 2019 and the billing period end date is 2019-1-31. So the CCV end date will be set to 2019-02-01 (exclusive).

Therefore, the CCV data is as below:

| Charge | Segment | CCV | Applied to | Start date | End date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 100*22/31 = 70.97 |  | 2019-01-10 | 2019-02-01 |
| C-0000002 | 1 | (7.10) | C-0000001 | 2019-01-10 | 2019-02-01 |

Note that this end date is named as `ESTIMATE_EVERGREEN_END_DATE` and is only displayed on the CCV result. The end date of the actual rate plan charge is still`Null`.

Because the CCV end date is exclusive of the estimated CCV end date, the end date for SO lines are 1 day earlier than the estimated CCV end date:

| SO ID | Type | EXT_SLL_PRC | Applied to | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001.1 | SO | 70.97 |  | 2019-01-10 | 2019-01-31 |
| C-0000002.1 | SO | (7.10) | C-0000001-1 | 2019-01-10 | 2019-01-31 |

On 2019-02-01, a scheduled job for the CCV service is triggered to set the estimated CCV end date to the current billing period end date + 1 day. In this case, the estimated CCV end date is updated to 2019-03-01. CCV is then recalculated to:

| Charge | Segment | CCV | Applied to | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 170.97 |  | 2019-01-10 | 2019-03-01 |
| C-0000002 | 1 | (17.10) | C-0000001 | 2019-01-10 | 2019-03-01 |

## Example 2 - Create a bill run

After creating the subscription A-S0000001, AOB creates a bill run for this subscription on the same day (2019-01-10). The target date is set to 2019-02-28.

The generated invoice items are listed as below:

| ID | Charge | Amount | Applied to | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| II-1-1 | C-0000001 | 70.97 |  | 2019-01-10 | 2019-01-31 |
| II-2-1 | C-0000002 | (7.10) | C-0000001-1 | 2019-01-10 | 2019-01-31 |
| II-1-2 | C-0000001 | 100 |  | 2019-02-01 | 2019-02-28 |
| II-2-2 | C-0000002 | (10) | C-0000001-2 | 2019-02-01 | 2019-02-28 |

When creating the evergreen subscription, the estimated CCV end date was supposed to be 2019-02-01. However, because the bill run target date is later than the estimated CCV end date, CCV will be recalculated based on the bill run end date. Thus, the CCV for each charge is adjusted as below:

| Charge | Segment | CCV | Applied To | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 170.97 |  | 2019-01-10 | 2019-03-01 |
| C-0000002 | 1 | (17.10) | C-0000001-1 | 2019-01-10 | 2019-03-01 |

The following table lists the SO lines for these charges in Zuora Revenue:

| SO ID | Type | EXT_SLL_PRC | Applied to | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001.1 | SO | 170.97 |  | 2019-01-10 | 2019-02-28 |
| C-0000002.1 | SO | (17.10) | C-0000001-1 | 2019-01-10 | 2019-02-28 |

On 2019-03-01, the estimated CCV end date is adjusted to 2019-04-01. CCV is then recalculated to:

| Charge | Segment | CCV | Applied to | Start Date | End Date |
| --- | --- | --- | --- | --- | --- |
| C-0000001 | 1 | 270.97 |  | 2019-01-10 | 2019-04-01 |
| C-0000002 | 1 | (27.10) | C-0000001 | 2019-01-10 | 2019-04-01 |
