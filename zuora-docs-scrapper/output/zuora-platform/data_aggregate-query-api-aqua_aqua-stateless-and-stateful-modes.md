---
title: "AQuA: Stateless and stateful modes"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-stateless-and-stateful-modes"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:56.422Z"
---

# AQuA: Stateless and stateful modes

The Aggregate Query API (AQuA) supports two execution modes: stateless and stateful.

-   Stateless mode executes each query independently without maintaining a session.

-   Stateful mode maintains a continuous session across multiple calls, allowing incremental data extraction.

    Note:

    Zuora strongly recommends using stateless mode for most bulk data extractions. For continuous integrations that require incremental data loads, use stateful mode. See Bulk Data Extraction from Zuora using AQuA for more information.


The AQuA Job Finder enables you to view all AQuA requests and results executed on your tenant within the last 72 hours. Older results are automatically purged. Excessive usage of full, non-stateful queries is discouraged; use stateful AQuA for recurring, incremental data extractions.
