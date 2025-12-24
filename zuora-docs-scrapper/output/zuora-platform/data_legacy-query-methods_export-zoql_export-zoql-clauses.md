---
title: "Export ZOQL Clauses"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/export-zoql-clauses"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:32.906Z"
---

# Export ZOQL Clauses

Learn about the ZOQL clauses such as order by, group by, having, and limit, which are used to sort, group, filter, and restrict query results.

Export ZOQL supports the `order by` , `group by` , and `having` clauses.

## Order By

Use the `order by` clause to sort results in ascending (ASC) or descending (DESC) in the order by clause.

By default, the ZOQL sorts results in ascending order if you do not specify ASC or DESC in the `order by` clause.

You can specify multiple fields in the `order by` clause.

For example, the following two statements will return results in ascending order:

select \* from Account order by ID asc; select \* from Account order by ID;

The following example demonstrates how to use multiple fields with `order by` :

select id from account order by ID, name;

## Group By

You can use the `group by` clause to combine rows that have the same values in particular columns. For example:

select Subscription.Id, count(Account.Id) from RatePlanCharge group by Subscription.Id

In the results of the above query, each row will have a different value of `Subscription.Id` .

You can specify up to 5 fields in the `group by` clause. For example:

select Subscription.Id, Account.Id from RatePlanCharge group by Subscription.Id, Account.Id

When you use the `group by` clause, each field in the select statement must be aggregated or must appear in the `group by` clause. For example:

select Subscription.Id, count(Account.Id) from RatePlanCharge group by Subscription.Id

In the above example, the `Account.Id` field is aggregated by the `count()` function, so `Account.Id` does not need to appear in the `group by` clause.

If a field is not aggregated or does not appear in the `group by` clause, you will receive the following error when you run the query: "One or more columns in the SELECT statement does not appear in the GROUP BY statement."

## Having

Use the `having` clause to return only rows where aggregate values meet the conditions that you specify.

For example, you can use a `having` clause as a filter on a `group by` result.

select A.a, avg(A.b) from A where B.name is null group by A.a having max(B.c)>0 or (max(B.c) = 0 and (not (A.a >0));

## Limit

Use the `limit` clause to restrict the results returned by a query.

You can use the `limit` clause to return the first five rows of a query:

select \* from account limit 5;

You can use the `limit` clause to return the 100 rows of a result after the fiftieth row. In this example, the query will return rows 50 through 149.

select \* from account limit 50,100;
