---
title: "Configurable Payment Retry dashboard FAQs"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/system-health-faqs/configurable-payment-retry-dashboard-faqs"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:42.148Z"
---

# Configurable Payment Retry dashboard FAQs

The many frequently asked questions about the Configurable Payment Retry dashboard

This article lists many frequently asked questions about the Configurable Payment Retry dashboard. Questions are categorized into the following types:

-   [Data metrics questions](#concept-t74w4q7d__data_metrics_questions)

-   [Graphs and stat cards questions](#concept-t74w4q7d__graph_stat_card)

-   [Payments update questions](#concept-t74w4q7d__payment_update)

-   [Gateway error response questions](#concept-t74w4q7d__gateway_error_response)

-   [Retry log questions](#concept-t74w4q7d__retry_log)


## Data metrics questions

The following questions are frequently asked about the Configurable Payment Retry dashboard data metrics.

Q: How to view Year on Year (YoY) data metrics?

A: Year on Year (YoY) data is currently unavailable. You can see a maximum of three months of data for now.

Q: How will I know if the metrics are performing better or worse compared to previous timelines?

A: There is a trend line shown on the right-hand bottom corner of every stat card. This will show how the metric is performing compared to previous stats. On hovering over the stat card, you can see the actual values of the metric in the previous periods.

## Graphs and stat cards questions

The following questions are frequently asked about the Configurable Payment Retry dashboard graphs and stat cards.

Q: Why is no data being populated in the Amount Collected graph?

A: The dashboard converts the data from all currencies into the Home Currency set in your tenant. This is then aggregated and displayed in the Amount Collected graph.

Q: My company transacts in multiple currencies, why does the Amount Collected graph only show one currency?

A: You must set your Home Currency as that is used as the base currency in which all transactions are displayed.

## Payments update questions

The following questions are frequently asked about the Configurable Payment Retry dashboard payments.

Q: How can I identify the payments made by CPR?

A: In the Payments tab, you can see a list of payments and their attempt number. If there is no value in the attempt number column, this means that the payment was not made by the CPR. In all other cases, the attempt number depicts that the payment was made by CPR.

Q: How do I know if any payments have failed in CPR?

A: In the Payments tab, you can see a list of all payments. If you filter the entries based on Status, you can see all entries that have failed in CPR, along with the reason.

## Gateway error response questions

The following questions are frequently asked about the Configurable Payment Retry dashboard Gateway Error Response.

Q: What is the difference between the Count and Number of Invoice columns in the Gateway Error Response table?

A: Count gives the total number of failed payments with a given error. The Number of Invoices gives the total number of unique invoices that failed on their first attempt with the given error.

Q: How do I interpret the DSR in the gateway Error Response table?

A: The DSR in this table helps you understand the collection rate of an invoice that failed initially with a particular error. This information will help you spot the errors that have higher chances of eventual collection. DSR = (# of invoices = Complete) / (# of Inv = Complete + Failure) \[this is a count of invoices that initially failed with a specific error code\]

## Retry log questions

The following questions are frequently asked about the Configurable Payment Retry dashboard retry log.

Q: How do I know the retry status of each of the documents in CPR?

A: In the Retry Log tab, you can see a list of documents that you can filter based on document status.
