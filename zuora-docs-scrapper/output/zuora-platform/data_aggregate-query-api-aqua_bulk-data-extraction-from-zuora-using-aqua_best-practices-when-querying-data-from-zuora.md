---
title: "Best practices when querying data from Zuora"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/best-practices-when-querying-data-from-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:19.875Z"
---

# Best practices when querying data from Zuora

Learn the recommended steps for querying data from Zuora using AQuA, including querying each data source individually, batching queries, filtering by updated date, using stateless queries, and extracting deleted data.

To extract data using AQuA, Zuora recommends the following steps:

-   Query each data source individually

-   Batch multiple queries into a single job

-   Filter by `UpdatedDate` only

-   Use AQuA stateless queries and track your own high water mark

-   Extract deleted data in each query
