---
title: "Query each data source individually"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/query-each-data-source-individually"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:22.170Z"
---

# Query each data source individually

Learn how to query each data source individually by focusing on base object fields and parent object IDs to optimize performance and reconstruct relationships in an external repository.

You should restrict your query to only include the fields from the base object of the data source and the IDs of the parent objects. Once loaded into your external repository, you can use the query language of the external repository to reconstruct the dependent relationships.

For example:

| Not recommended | Recommended |
| --- | --- |
| SELECT id, rateplancharge.id, rateplan.id AS rateplanid, tier, subscription.status FROM RatePlanChargeTier WHERE ... | SELECT id, rateplancharge.id, ... FROM RatePlanChargeTier WHERE ... SELECT id, rateplan.id, ... FROM RatePlanCharge WHERE ... SELECT id, subscription.id, ... FROM RatePlan WHERE ... |

You can use the [Describe an object](https://developer.zuora.com/v1-api-reference/api/operation/GET_Describe/) API operation to determine the fields of an object.

With the `showRelationships` query parameter in this operation set to `true` , you can obtain additional information indicating whether a field is a joined field. Including joined fields in the query might result in performance degradation for the AQuA query. Therefore, we recommend that you avoid querying joined fields if the performance of the AQuA query is important or mission-critical.

## Batch multiple queries into a single job

AQuA allows you to submit multiple queries in a single job. All queries in a job are performed in a single database transaction, against a consistent snapshot of your transactional data. This ensures referential integrity between data sources even though you are querying each data source individually.
