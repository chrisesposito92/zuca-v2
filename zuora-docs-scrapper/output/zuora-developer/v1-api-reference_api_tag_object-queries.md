---
title: "Object Queries"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Object-Queries/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:04:58.294Z"
---

# Object Queries

The Object Query API contains GET operations that allow you to query objects in your Zuora tenant in an efficient, consistent, and flexible manner.

With the `expand[]` and `filter[]` query parameters, you have the flexibility to retrieve related object information in a single call and define the returned response that best suits your needs. You can also use the `fields[]` query parameter to define which fields are returned in the response for a given object. The `sort[]` query parameter allows you to sort the results in ascending or descending order based on the specified field.

These parameters are case-insensitive matching.

For general Object Queries limitations and comprehensive introduction to these query parameters, see [Expand, filter, fields, and sort](https://developer.zuora.com/docs/guides/expand-filter-fields-sort/).

For filterable, expandable, and sortable fields on each object, refer to the Query Parameters section for each API operation.
