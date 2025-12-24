---
title: "High Water Mark Approach for AQuA Stateless Queries"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/high-water-mark-approach-for-aqua-stateless-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:27.169Z"
---

# High Water Mark Approach for AQuA Stateless Queries

This article explains the high water mark approach for AQuA stateless queries, recommended for efficient bulk data extraction in Zuora.

While AQuA supports stateful queries, customers prefer to use the high water mark approach described in this article. Zuora highly recommends that you use the stateless mode for bulk data extraction. This is the approach that Zuora plans to evolve in future APIs.

-   Use AQuA stateless queries. Make sure that you set

    `version` to `1.0` in your AQuA request. See Stateless and Stateful Modes for more information.
-   Track your own high water mark for data replication.


The high water mark is a timestamp that specifies the latest update time for each extraction. That is, the `WHERE` clause for every query should be in the following format:

WHERE UpdatedDate >= {last high water mark} and UpdatedDate < {new high water mark}

Each time you run your query job, set the new high water mark to at least 2 hours earlier than the current time. It might take a long time for some transactions to be completed. By offsetting the high water mark, you will be sure to include any updates that have not been completed at the time your query is executed.

For example, if the current time is 2019-05-11T06:30:00, you can issue a query with the following `WHERE` clause:

WHERE UpdatedDate >= '2019-05-10T04:00:00' AND UpdatedDate < '2019-05-11T04:00:00'

For the initial extract, choose a date earlier than you started using Zuora as the last high water mark, such as 2000-01-01.
