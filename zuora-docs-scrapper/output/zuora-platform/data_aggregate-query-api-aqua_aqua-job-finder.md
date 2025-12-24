---
title: "AQuA job finder"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-job-finder"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:11.748Z"
---

# AQuA job finder

The AQuA Job Finder provides access to recent AQuA requests and results within your tenant, with automatic purging of results older than 72 hours.

The AQuA Job Finder allows you to view all AQuA requests and results executed in your tenant within the past 72 hours. AQuA results older than 72 hours are automatically purged from the system.

Note:

-   Zuora highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices.

-   Completed AQuA jobs that were created more than 180 days ago are permanently deleted from Zuora and cannot be queried through the API or the AQuA Job Finder.
