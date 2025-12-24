---
title: "Update Revenue End Date for evergreen subscriptions"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing/update-revenue-end-date-for-evergreen-subscriptions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:48.407Z"
---

# Update Revenue End Date for evergreen subscriptions

Learn how Zuora Revenue updates the revenue end date and booked amount for evergreen subscriptions based on collected invoices.

In Zuora Billing, you can create evergreen subscriptions, which have no revenue end dates. A termed subscription can also be configured to automatically change to an evergreen subscription when it is renewed. An evergreen subscription can also be updated to a termed subscription at a later time. However, when the Billing - Revenue Integration feature is enabled, only the initial evergreen subscription can be supported by Zuora Revenue for revenue recognition, which means the subscription must be initially created as an evergreen subscription.

## Overview

When an evergreen subscription is initially created in Zuora Billing and then collected by Zuora Revenue, the end date of the SO line is empty and the booked amount is zero. To recognize revenue for evergreen subscriptions, the end date and booked amount will be incrementally updated based on the invoices that are collected for the subscription in the following way:

-   The revenue end date is updated to the latest end date of the invoices that are collected.

-   The booked amount is the sum of all the collected invoices.


An example is provided to explain how Zuora Revenue will update the SO line for the initial evergreen subscription.

## Initial evergreen subscription

In this example, the subscription is created as an evergreen subscription in Zuora Billing. After data collection is completed in Zuora Revenue, the following SO line will be created for this evergreen subscription.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Booked Amount | Start Date | End Date | SO Line Id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-0001 | 1 | C-0001 | 1 | 1 | 0 | 01-Jan-2019 |  | C-0001.1 |

This evergreen subscription is billed annually. The following invoice is collected in Zuora Revenue for the first year.
| Transaction type | Subscription# | Subscription Version | Charge# | RPC Version | RPC Segment | Invoice Amount | Start Date | End Date | SO Line Id | Invoice Line Id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INV | S-0001 | 1 | C-0001 | 1 | 1 | 1200 | 01-Jan-2019 | 31-Dec-2019 | C-0001.1 | INV1.1 |

Zuora Revenue will update the booked amount and end date of the evergreen subscription based on the INV1.1 invoice as follows:

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Booked Amount | Start Date | End Date | SO Line Id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-0001 | 1 | C-0001 | 2 | 1 | 1200 | 01-Jan-2019 | 31-Dec-2019 | C-0001.1 |

Then, another invoice is collected for the second year.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Invoice Amount | Start Date | End Date | SO Line Id | Invoice Line Id |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INV | S-0001 | 1 | C-0001 | 1 | 1 | 1200 | 01-Jan-2020 | 31-Dec-2020 | C-0001.1 | INV2.1 |

The end date of the subscription will be updated to the latest end date of the invoices. The booked amount will be the sum of all the billed amount.

| Transaction Type | Subscription # | Subscription Version | Charge # | RPC Version | RPC Segment | Booked Amount | Start Date | End Date | SO Line ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | S-0001 | 1 | C-0001 | 3 | 1 | 2400 | 01-Jan-2019 | 31-Dec-2020 | C-0001.1 |

Note: Let's say you enroll for a gym membership on 1 July 2025. The recurring Rateplan Charge "Monthly Fee" is expected to be charged from 1 July 2025 for 1 month at $15 USD, with CCV as 15 and an end date of 31 July 2025. Another recurring Rateplan Charge, the 'Annual Fee, ' starts 45 days after the join date, from 8/15/2025 to 8/14/2026. As a result, the Annual fee is expected to be charged from 15th Aug 2025 to 14th Aug 2026 with a CCV of $45.
