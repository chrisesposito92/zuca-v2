---
title: "Summable metrics"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-copilot-for-analytics/work-with-prompts-in-zuora-copilot-for-analytics/summable-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:37.628Z"
---

# Summable metrics

Learn about summable metrics that aggregate values, such as Gross ARR and MRR, to provide insights into revenue changes and trends.

Summable metrics include the metrics that produce an aggregation value on summing up the column values. For example, you run a subscription business with three products, and each product generates a revenue of a, b, and c per month. The Gross ARR of each product would be the product of their revenue per month. The Gross ARR for the company would be the sum of the ARR of the three products.

Zuora Copilot supports the following summable metrics:

| Summable metric | Description |
| --- | --- |
| Gross ARR Changes | Total increase or decrease in annual recurring revenue (ARR) across all accounts, excluding discount charges. Use the Business Impact field to break down changes into new, expansion, contraction, and churn categories. |
| Gross MRR Changes | Total increase or decrease in monthly recurring revenue (MRR) across all accounts, excluding discount charges. Use the Business Impact field to break down changes into new, expansion, contraction, and churn categories. |
| Net ARR Changes | Total increase or decrease in annual recurring revenue (ARR), including discount charges, across all accounts. Use the Business Impact field to break down changes into new, expansion, contraction, and churn categories. |
| Net MRR Changes | Total increase or decrease in monthly recurring revenue (MRR), including discount charges, across all accounts. Use the Business Impact field to break down changes into new, expansion, contraction, and churn categories. |
| Discount ARR | Total amount of discounted annual recurring revenue (ARR). |
| Discount MRR | Total amount of discounted monthly recurring revenue (MRR). |
| Gross ARR | Total annual recurring revenue (ARR) across all accounts, not including discount charges. |
| Gross MRR | Total monthly recurring revenue (MRR) across all accounts, not including discount charges. |
| Net ARR | Total annual recurring revenue (ARR) across all accounts, including discount charges. Calculated as Gross ARR - Discount ARR = Net ARR. |
| Net MRR | Total monthly recurring revenue (MRR) across all accounts, including discount charges. Calculated as Gross MRR - Discount MRR = Net MRR. |
| Net Billing | The sum of all billing transactions in a particular time period. |
| Net Payments | The sum of all payment transactions in a particular time period. |
