---
title: "Aggregate Queries"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Aggregate-Queries/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:01.916Z"
---

# Aggregate Queries

The Aggregate Query API (AQuA) is a REST API that executes multiple [Export ZOQL](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Query/Export_ZOQL) or [ZOQL](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Query/ZOQL) queries. The queries are performed in a sequential order and in a single read-only database transaction.

AQuA enforces the following limits:

-   The maximum processing time per query is 3 hours. If a query in an AQuA job is executed for longer than 3 hours, this job will be killed automatically. See the [best practices for bulk data extraction with AQuA](https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/AB_Aggregate_Query_API/Bulk_data__extraction_from_Zuora_using_AQuA).

-   AQuA enforces limits on both the stateful concurrent AQuA jobs and the stateless concurrent AQuA jobs per tenant:

    -   The maximum number of stateful concurrent AQuA jobs per tenant is 50. - The maximum number of stateless concurrent AQuA jobs per tenant is 50. AQuA jobs in the following status are counted towards your concurrent AQuA job limits:
    -   Submitted - Executing Zuora system will reject the subsequent stateful or stateless job requests once the corresponding concurrent job limit is reached.

For more information about the Aggregate Query API(AQuA), see [Aggregate Query](https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/AB_Aggregate_Query_API).
