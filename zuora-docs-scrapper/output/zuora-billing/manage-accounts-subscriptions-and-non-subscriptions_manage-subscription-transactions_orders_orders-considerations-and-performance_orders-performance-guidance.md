---
title: "Orders performance guidance"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-performance-guidance"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:58.947Z"
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


The following tables provide a summary of performance data for Orders. The summary is also available for downloads as a CSV file: [Zuora\_performance\_data\_summary.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/388ad704-e57a-4d16-b124-a5316a46b2a5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM4OGFkNzA0LWU1N2EtNGQxNi1iMTI0LWE1MzE2YTQ2YjJhNSIsImV4cCI6MTc3MTY5NTA1NiwianRpIjoiYTc5Yjc3ZDY4YTUxNGEwOThlNjA3YWI1NjcxZDJkZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.joEMkprxIvzbreA7Z7QQT13LkeEv2MWwyAXlFVYjGJo&response-content-disposition=attachment%3B+filename%3D%22Zuora_performance_data_summary.csv%22) . For a complete set of the performance data, download [Zuora\_performance\_data\_complete\_datasheet.csv](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f71d9ade-2523-4cdf-a625-b35b2fa86468?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3MWQ5YWRlLTI1MjMtNGNkZi1hNjI1LWIzNWIyZmE4NjQ2OCIsImV4cCI6MTc3MTY5NTA1NiwianRpIjoiMzQxZTVmZWVmMzNkNDhiOGFhOTQzZjllODdjNWUyMTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.c78ELwTaZIPM3mmclnxEt9mfcjG8H4Qvw-IILZWvTKU&response-content-disposition=attachment%3B+filename%3D%22Zuora_performance_data_complete_datasheet.csv%22) .

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
