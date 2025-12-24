---
title: "Overview of Revenue Recognition Events Transaction"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-revenue-recognition-events-transaction"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:10.259Z"
---

# Overview of Revenue Recognition Events Transaction

The Revenue Recognition Event Transaction object captures data for daily consumption, delivery, and unbilled usage, supporting features like Delivery Pricing and Prepaid with Drawdown in Zuora Billing.

The Revenue Recognition Event Transaction object is available in the data source and data query . Revenue recognition event transactions capture data for daily consumption, daily delivery, and unbilled usage.

Revenue recognition event transactions are generated for the following features in Zuora Billing:

-   Delivery Pricing

-   Prepaid with Drawdown

-   Minimum Commitment

-   Unbilled Usage for both termed and evergreen subscriptions


Revenue recognition events transactions are generated in the following cases:

-   When a Delivery Pricing charge is activated, a revenue recognition event transaction of the `Delivery Schedule` type is generated. For more information, see Revenue Recognition Events Transaction object fields and Data Query .

-   When you use the Advanced Consumption Billing feature and upload usage, revenue recognition event transactions of the `Daily Rated Usage` type and the `Unbilled Usage` type are generated.


For Order to Revenue customers, when the Advanced Consumption Billing feature is enabled, the preceding transactions are consumed by Zuora Revenue for revenue recognition .
