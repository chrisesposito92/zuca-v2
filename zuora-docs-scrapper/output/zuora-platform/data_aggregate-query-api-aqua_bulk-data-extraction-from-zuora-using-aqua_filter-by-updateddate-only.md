---
title: "Filter by UpdatedDate only"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/filter-by-updateddate-only"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:24.878Z"
---

# Filter by UpdatedDate only

Learn how to efficiently filter data using the indexed UpdatedDate column to improve query performance and avoid full table scans.

If you include either of the following column types in a `WHERE` clause, the query may require a full scan of your data:

-   An unindexed column

-   A column in a join table


If you include either of these column types in a `WHERE` clause, the response time is unpredictable.

The `UpdatedDate` column is indexed in all data sources. By filtering on the `UpdatedDate` column, Zuora's system can efficiently extract just the rows required by the query without scanning a full table.

You can add needed columns to perform additional filtering after you load data into your external data warehouse.

For example:

| Not recommended ( filter with un-indexed columns) | Recommended (filter with the indexed column - UpdatedDate ) |
| --- | --- |
| SELECT ... FROM RatePlanChargeTier WHERE RatePlanCharge.Name = 'Discount' AND (Subscription.Status = 'Active' OR Subscription.Status = 'Cancelled') AND RatePlanCharge.EffectiveEndDate > 'today - 2 day' | SELECT ... FROM RatePlanChargeTier WHERE UpdatedDate >= {startTime} and UpdatedDate < {endTime} |
