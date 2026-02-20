---
title: "Aggregator operators"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/aggregator-processor/aggregator-operators"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:15.332Z"
---

# Aggregator operators

The Aggregator processor supports several standard operators for computing aggregate values over events in each partition, including sum, avg, min, max, count, and delta.

Consider the following example of a single partition where CustomerID is CUST1 and the events are ordered by timestamp:

| CustomerID | Timestamp | API_Calls |
| --- | --- | --- |
| CUST1 | 2025-10-01 10:01 | 5 |
| CUST1 | 2025-10-01 10:15 | 3 |
| CUST1 | 2025-10-01 10:45 | 7 |

The following table describes the operators and their output based on the example data:

| Operator | Description | Example output (for CUST1) | Processing logic |
| --- | --- | --- | --- |
| sum | Adds all values in the partition | 15 | 5 + 3 + 7 = 15 |
| avg | Computes the average (mean) | 5 | (5 + 3 + 7) ÷ 3 = 5 |
| min | Finds the lowest value | 3 | Minimum API call count is 3 |
| max | Finds the highest value | 7 | Maximum API call count is 7 |
| count | Counts the number of records | 3 | Three records for CUST1 |
| delta | Computes the difference between consecutive values | 1st row = – ,2nd = 3-5 = -2,3rd = 7-3 =4 | Shows change in API_Calls compared to the previous record |
