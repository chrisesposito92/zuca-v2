---
title: "Non-summable metrics"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-copilot-for-analytics/work-with-prompts-in-zuora-copilot-for-analytics/non-summable-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:40.116Z"
---

# Non-summable metrics

Non-summable metrics are metrics that cannot be calculated by simply summing their constituent columns. They are crucial for accurately analyzing data in scenarios such as subscription businesses, where a subscriber may subscribe to multiple products simultaneously. This document provides an overview of non-summable metrics supported by Zuora Copilot.

Non-summable metrics cannot be calculated by summing up their constituent columns.

For example, when you run a subscription business with three products, the total number of subscribers cannot be calculated by adding all the subscribers of those three products.

A subscriber could subscribe to two or three products simultaneously.

If you use the Active Subscribers metric in your dataset, you can filter the data by product (Product.Name = "A"). The dataset will return the number of subscribers for product A.

Zuora Copilot supports the following non-summable metrics:

| Non-summable metric | Description |
| --- | --- |
| Net Retention Rate (Gross MRR, Annual) | The rate at which recurring revenue has been retained from a cohort of subscribers one year ago based on Gross MRR. You need to have at least one year of data in your Zuora tenant before this metric is available for use. |
| Net Retention Rate (Net MRR, Annual) | The rate at which recurring revenue has been retained from a cohort of subscribers one year ago based on Net MRR. You need to have at least one year of data in your Zuora tenant before this metric is available for use. |
| Churned Subscriber Count | The total number of subscribers with no effective rate plan charges at the end of a given time period who had one or more effective rate plan charges in the prior time period. |
| Churn Rate (Subscribers, Monthly) | The proportion of active accounts that became inactive during the month. Calculated as the unique count of accounts that had an effective rate plan charge in the previous month but no longer have one, divided by the number of accounts that were active at the end of the previous period. |
| New Subscriber Count | The total number of subscribers with one or more effective rate plan charges at the end of a given time period who had no effective rate plan charges in the prior time period. |
| Average Gross ARR per Subscriber | The total Gross ARR divided by the total number of Active Subscribers. |
| Average Gross MRR per Subscriber | The total Gross MRR divided by the total number of Active Subscribers. |
| Average Net ARR per Subscriber | The total Net ARR divided by the total number of Active Subscribers. |
| Average Net MRR per Subscriber | The total Net MRR divided by the total number of Active Subscribers. |
| Active Subscriber Count | The total number of subscribers with one or more effective rate plan charges in a given period. |
