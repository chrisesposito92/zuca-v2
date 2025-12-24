---
title: "Orders performance guidance"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-performance-guidance"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:21.487Z"
---

# Orders performance guidance

This topic provides guidance on Orders performance, including expected response times and factors affecting latency.

Provides performance data and a reference on the expected response times.

This article provides a reference on the expected response times when you create and manage subscriptions via Orders. The data was generated in Zuora Release 227.

The Orders API timeout limit is 120 seconds. As the following tables show, a number of factors can contribute to increased latency in Orders:

-   Number of subscriptions in one Create order call

-   Number of order actions in one subscription

-   Number of charges processed by one order action

-   Number of tiers in one charge (applicable only to the tiered pricing charge model)


The following tables provide a summary of performance data for Orders. The summary is also available for downloads as a CSV file: Zuora\_performance\_data\_summary.csv . For a complete set of the performance data, download Zuora\_performance\_data\_complete\_datasheet.csv .

Note:

The performance data is the guidance of performance under ideal testing scenarios. Depending on your tenant situation, your results may vary from below.

Since the third-party tax engine and payment gateway are not under our control, integration with the following entities is not included in the testing scenario where the performance data is collected.

-   A third-party tax engine or configurable Tax app

-   A third-party payment gateway


Therefore, the payment collection and tax calculation due to the integration are not included.

## Limits on Orders API

The limit of orders allowed on a subscription is 1000.

The limit of order actions allowed on a rate plan charge is 1000. However, Zuora recommends that you create at most 100 order actions on a rate plan charge to ensure the performance of the subscription. If you create more than 100 order actions, the performance might be degraded, depending on the products and charges set up in your subscription.

The limit of order line items allowed in an order is 100.

Zuora has the following limits on the Orders synchronous API to prevent performance degradation:

-   Up to 50 subscriptions are allowed in a single Create order or Preview order operation call.

-   Up to 50 order actions are allowed in a single Create order or Preview order operation call.

-   Up to 50 order actions are allowed on a single subscription in a Create order or Preview order operation call.


If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:

-   Preview order asynchronously

-   Create order asynchronously


Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:

-   Up to 300 subscriptions are allowed in a single Create order asynchronously or Preview order asynchronously operation call.

-   Up to 300 order actions are allowed in a single Create order asynchronously or Preview order asynchronously operation call.

-   Up to 300 order actions are allowed on a single subscription in a Create order asynchronously or Preview order asynchronously operation call.
