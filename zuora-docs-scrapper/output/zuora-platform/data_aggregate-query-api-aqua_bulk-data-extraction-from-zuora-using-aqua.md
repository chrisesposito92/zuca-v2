---
title: "Bulk data  extraction from Zuora using AQuA"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:17.611Z"
---

# Bulk data extraction from Zuora using AQuA

This task outlines best practices for extracting data from Zuora using AQuA and loading it into an external data warehouse.

The following steps are recommended:

1.  Initial data extract:
    1.  Query historical data
    2.  Load historical data into the external data warehouse
2.  Incremental data extracts:
    1.  Query changed data
    2.  Load changed data into the external data warehouse
