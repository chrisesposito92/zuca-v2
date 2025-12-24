---
title: "General best practices"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/best-practices-when-writing-data-queries/general-best-practices"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:33.772Z"
---

# General best practices

To query data using Data Query, Zuora recommends the following best practices.

## Familiarize yourself with the business objects

Zuora recommends that you use the following statement to get familiar with Zuora objects and object schemas before you start using Data Query to retrieve data.

`SHOW TABLES`

`SHOW COLUMNS FROM|IN {table}`

`DESCRIBE {table}`

`DESC {table}`

## SQL Dialect

Zuora’s Data Query engine is powered by Trino. For advanced syntax and knowledge, refer to the Trino documentation [here](https://trino.io/docs/current/).

Note:

Query help on other sites, such as StackOverflow, might not be compatible with Trino. For example, postgres offers nuanced syntax compared to Trino.

## Reference all new variables with a table and variable declaration

Zuora recommends that you add a table and variable declaration when you reference new variables in the SELECT statement. For example:
| Recommended | Not recommended |
| --- | --- |
| 1 SELECT sub.id, a.accountnumber 2 FROM Subscription sub, Account a 3 WHERE sub.initialterm > 12 AND a.balance > 0 | 1 SELECT sub.id, a.accountnumber 2 FROM sub, a 3 WHERE sub.initialterm > 12 AND a.balance > 0 |

## Use JOINs effectively - Table order

For better query performance, Zuora recommends that you keep the smaller table on the left and the bigger one on the right when using JOIN, including INNER JOIN and Index JOIN. See the syntax below:1 SELECT \* 2 FROM smaller\_left\_table 3 INNER JOIN bigger\_right\_table ON smaller\_left\_table.bigger\_right\_id = bigger\_right\_table.id

In the following example, Rateplan is the smaller table and Rateplancharge is the larger table. You should place Rateplan to the left of the INNER JOIN and Rateplancharge to the right.
| Recommended | Not recommended |
| --- | --- |
| 1 SELECT c.* 2 FROM Rateplan rp 3 INNER JOIN Rateplancharge c on c.rateplanid = rp.id 4 WHERE rp.subscriptionid = 'xxxxx000001' ​ | 1 SELECT c.* 2 FROM Rateplancharge c 3 INNER JOIN Rateplan rp on c.rateplanid = rp.id 4 WHERE rp.subscriptionid = 'xxxxx000001' |

## Use JOINs effectively - Index JOIN

Enable Index Join for data sets that you can narrow down with unique identifiers.

Index Join is an addition to LEFT, RIGHT, OUTER, and/or INNER JOINs and can be enabled whenever a JOIN is used. Index join is a useful addition to other joins when you have a specific reference value in your WHERE clause to index another large table by.

For example, you want to get Account and Subscription information tied to a specific ProductRatePlanCharge. The ProductRatePlanCharge table is one of the largest tables in your query. However, you only need the ProductRatePlanCharge that matches the specific ID in your WHERE clause. You can use the Index Join in your query as follows:

1 SELECT Account.AccountNumber, Subscription.Name 2 FROM ProductRatePlanCharge PRPC 3 JOIN RatePlanCharge RPC ON PRPC.id = RPC.productrateplanchargeid 4 JOIN RatePlan RP ON RP.id = RPC.rateplanid 5 JOIN Subscription ON Sub.id = RP.subscriptionid 6 JOIN Account ON Account.id = Subscription.accountid 7 WHERE PRPC.id = '1375'

Note that when using Index Join, the field used in your WHERE clause must be found in the table that you are indexing (the table in your FROM statement). This field should narrow down the set of records returned from the indexed-table to be less than the query processing limit . In this example, ProductRatePlanCharge table will be indexed by the `id` , which is `1375` , to narrow down the ProductRatePlanCharges that the query JOINs with RatePlanCharges.

Index Join does not apply to non-indexed fields. When utilizing non-indexed fields in the WHERE clause, all table rows are considered input records, which can raise the chances of reaching the query processing limit. For more information about indexed fields of Zuora objects, see Indexed fields .

You can use Index Join through the following ways:

-   Make a Submit data query API call with `useIndexJoin` set to `true` in the request body.

-   Tick the Use index join checkbox on Retrieve: Data Query Workflow task UI.


In general, it is safe to use and helpful when you have a lot of data to scan, although sometimes you might experience problems for certain object types, usually in the case where data does not fit the format expected for the join.

## Use LIMIT to sample your query results

Before your first time running a full query, Zuora recommends that you add LIMIT statement to get a quick snapshot of the first few entries. See the syntax below.

1 SELECT balance, accountId, invoiceDate 2 FROM Invoice 3 WHERE accountId = '123-456-7890' AND balance > 0 4 ORDER BY invoiceDate 5 DESC LIMIT 1

Once you ensure the result is desirable and meaningful, you can run the full query.

Note that the LIMIT function only affects the output records limitation.

## Filter efficiently

A SQL filter allows you to narrow down the query result set to only the rows that you are interested in. Zuora recommends the following rules to make your filter efficient.

-   [Define clear date ranges](#concept-ac-1682__title-86)

-   [Avoid using six digits of second precision for timestamp fields](#concept-ac-1682__title-101)

-   [Separate a large query into smaller ones](#concept-ac-1682__title-307)

-   [Use exact strings instead of strings containing a wildcard](#concept-ac-1682__title-811)

-   [Avoid using NULL in your filter](#concept-ac-1682__title-116)

-   [Avoid using functions on the left-hand side of the comparison operator](#concept-ac-1682__title-1127)

-   [Filter on fields with subsets of unique values](#concept-ac-1682__title-1267)

-   [Avoid using LIKE filters](#concept-ac-1682__title-120)


## Define clear date ranges

Define clear date ranges with updateDate, createDate, effectiveStartDate, and so on.
| Recommended | Not recommended |
| --- | --- |
| 1 SELECT a.accountnumber 2 FROM Rateplancharge rpc 3 ... 4 WHERE rpc.effectivestartdate >= DATE('2019-01-01') 5 AND rpc.effectivestartdate <= DATE('2019-08-01') | 1 SELECT a.accountnumber 2 FROM Rateplancharge rpc 3 ... 4 WHERE rpc.effectivestartdate <= CURRENT_DATE |

## Avoid using six digits of second precision for timestamp fields

To avoid input row limits in Data Query when filtering on indexed timestamp fields, make sure to define your timestamp filter values as TIMESTAMP(3) WITH TIME ZONE (millisecond precision) values and do not use TIMESTAMP(6) WITH TIME ZONE (six digits of second precision).
| Recommended | Not recommended |
| --- | --- |
| 1 SELECT count(*) 2 FROM payment 3 WHERE updateddate >= TIMESTAMP '2023-01-02 00:00:00.000 +00:00' and 4 updateddate < TIMESTAMP '2023-01-03 00:00:00.000 +00:00' | 1 SELECT count(*) 2 FROM payment 3 WHERE updateddate >= TIMESTAMP '2023-01-02 00:00:00.000000 +00:00' and 4 updateddate < TIMESTAMP '2023-01-03 00:00:00.000000 +00:00' |

## Separate a large query into smaller ones

See the following example that separates a big query into smaller ones by date ranges. Data Query can simultaneously process a maximum of 5 queries per tenant.
| Date range | Separated query |
| --- | --- |
| January - March | SELECT a.accountnumber FROM Rateplancharge rpc ... WHERE rpc.effectivestartdate >= DATE('2019-01-01') AND rpc.effectivestartdate <= DATE('2019-03-31') |
| April - June | SELECT a.accountnumber FROM Rateplancharge rpc ... WHERE rpc.effectivestartdate >= DATE('2019-04-01') AND rpc.effectivestartdate <= DATE('2019-06-30') |
| July - Aug | SELECT a.accountnumber FROM Rateplancharge rpc ... WHERE rpc.effectivestartdate >= DATE('2019-07-01') AND rpc.effectivestartdate <= DATE('2019-08-01') |

## Use exact strings instead of strings containing a wildcard

| Recommended | Not recommended |
| --- | --- |
| 1 SELECT a.name 2 FROM Account a 3 WHERE a.accountnumber = 'A00000977' | 1 SELECT a.name 2 FROM Account a 3 WHERE a.accountnumber LIKE 'A%' |
| 1 SELECT a.name 2 FROM Account a 3 WHERE a.accountnumber LIKE 'A%' | 1 SELECT a.name 2 FROM Account a 3 WHERE a.accountnumber LIKE 'A0000097%' |

A custom picklist field can be created with the exact values and then leveraged by the query in addition to the free text field. For example:

| Original field ProductName__c | New additional custom field ProductCategory__c |
| --- | --- |
| Annual SiliDog Basic | SiliDog |
| Annual SiliDog Premium | SiliDog |
| Monthly SiliDog Basic | SiliDog |
| ArctiCat Basic | ArctiCat |

Original clause: `where ProductName__c LIKE '%SiliDog%'`

Updated clause: `where ProductCategory__c = 'SiliDog'`

## Avoid using NULL in your filter

The following filter is NOT recommended.

1 SELECT rpct.includedunits 2 FROM Rateplanchargetier rpct 3 WHERE rpct.discountamount IS NULL 4 AND rpct.discountpercentage IS NULL

## Avoid using functions on the left-hand side of the comparison operator

| Recommended | Not recommended |
| --- | --- |
| 1 SELECT a.accountnumber 2 FROM Rateplancharge rpc 3 ... 4 WHERE rpc.effectivestartdate > DATE('2019-01-01') | 1 SELECT a.accountnumber 2 FROM Rateplancharge rpc 3 ... 4 WHERE DATE_DIFF('MONTH', rpc.effectivestartdate, DATE('2019-01-01')) < 0 |

## Filter on fields with subsets of unique values

The following table lists the commonly used large tables and the fields with subsets of unique values. Zuora recommends that you use these fields to optimize your filter.
| Zuora business object | Fields with subsets of unique values |
| --- | --- |
| RatePlanCharge | createdDate, updatedDate, effectiveStartDate: used to filter by date rangebillingDay: used for unique days (for example, not the 1st, 15th, or 30/31st) |
| RatePlanChargeTier | createdDate, updatedDate: used to filter by date rangestartingUnit, endingUnit: used for batch jobs |
| InvoiceItem | chargeDate, createdDate, revRecStartDate, serviceStartDate, serviceEndDate, updatedDate: used to filter by date range |
| TaxationItem | createdDate, taxDate, updatedDate: used to filter by date rangelocationCode, jurisdiction: used to filter location-specific data for objects like Tax |
| JournalEntry | accountPeriodId: used to group setscreatedDate, journalEntryDate, transferDate, updatedDate: used to filter by date rangenotes: used as the unique information to filter bystatus: used to filter journal entries |
| Usage | createdDate, startDateTime, endDateTime, submissionDateTime, updatedDate: used to filter by date range |

## Avoid using LIKE filters

LIKE filters will not be pushed down for optimization and they usually decrease the query performance. The following example is NOT recommended.

SELECT SourceType FROM usage WHERE Id LIKE '8a28b7f57cc19b8d017cc352976b7%'
