---
title: "Automatic switch between full load and incremental load"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-stateless-and-stateful-modes/automatic-switch-between-full-load-and-incremental-load"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:02.612Z"
---

# Automatic switch between full load and incremental load

AQuA automatically switches between full and incremental data loads based on session identifiers and query changes.

When you first call AQuA in stateful mode, AQuA uses the combination of `partner` and `project` as the unique identifier of a new session. The results file of the first call contains a full load of data for each of the requested queries. If you make subsequent calls with the same values of `partner` and `project`, either requesting the same queries or without any queries specified, the results file contains an incremental load of data for each query.

However, while you keep `partner` and `project` the same as previous calls, the results file will contain a full load of data for the query on which you make any of the following changes:

-   You change the SQL of the query

-   You introduce a deleted column into the query

-   You drop a deleted column from the query

-   You change the name or type of a deleted column in the query


If you introduce an additional query into the AQuA call while keeping `partner` and `project` the same, AQuA initially returns a full load of data for the new query.

In every AQuA job status response, the field `full` indicates whether the returned data for a query is a full load or an incremental load.
