---
title: "Join data across multiple tables"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/construct-sql-queries-in-data-query/join-data-across-multiple-tables"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:20.925Z"
---

# Join data across multiple tables

Learn how to construct your query by joining data across multiple tables:

1.  Choose the columns.
    `SELECT name, id, name`

2.  Choose the tables.
    `SELECT account.name, account.id, productrateplancharge.name`

3.  Determine which columns are used to join tables through DESCRIBE or SHOW COLUMNS statement.
    `Account.id = subscription.accountid`
    `Subscription.id = rateplan.subscriptionid`
    `Rateplan.id = rateplancharge.rateplanid`
    `Rateplancharge.id = productrateplancharge.rateplanchargeid`

4.  Add FROM before the first table, and then JOINs and ONs to the connecting columns in tables.
    `FROM Account JOIN Subscription ON Account.id = subscription.accountid`
    `JOIN RatePlan ON Subscription.id = rateplan.subscriptionid`
    `JOIN ProductRatePlan ON RatePlan.productrateplanid = ProductRatePlan.id`
    `JOIN ProductRatePlanCharge ON ProductRatePlan.id = ProductRatePlanCharge.productrateplanid`

5.  Add WHERE clause to narrow down the returned records.
    `WHERE productrateplancharge.updateddate >= timestamp '2019-01-01 -07:00'`

6.  Construct the whole SQL query.
    `SELECT account.name, account.id, productrateplancharge.name`
    `FROM Account JOIN Subscription ON Account.id = subscription.accountid`
    `JOIN RatePlan ON Subscription.id = rateplan.subscriptionid`
    `JOIN ProductRatePlan ON RatePlan.productrateplanid = ProductRatePlan.id`
    `JOIN ProductRatePlanCharge ON ProductRatePlan.id = ProductRatePlanCharge.productrateplanid`
    `WHERE productrateplancharge.updateddate >= timestamp '2019-01-01 -07:00'`


Deleted records are not included by default in Data Query Live queries. You can always filter deleted records using WHERE clause in Data Query Live. Note that you must add `deleted` in the SELECT clause as a selected column if you use the `deleted` column in the WHERE clause. For example:

-   The deleted records can be specifically found by querying against the `deleted` column in appropriate tables with the following syntax: SELECT name, deleted FROM Account, Subscription WHERE Account.deleted = TRUE

-   The deleted records can be filtered out with the following syntax: SELECT name, deleted FROM Account WHERE deleted = FALSE


Note that Data Query is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through Data Query.
