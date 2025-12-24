---
title: "Query statement examples"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/zoql/query-statement-examples"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:58.578Z"
---

# Query statement examples

Examples of query statements, including simple queries, queries with filter statements using WHERE, and the order of operation in ZOQL for SOAP queries.

## Simple Queries

The following query returns the account numbers and names for all accounts.

select AccountNumber, Name from Account

The following query returns the account IDs and first (personal) and last (family) names for all contacts.

select AccountId, FirstName, LastName from Contact

## Queries with Filter Statements using WHERE

The following query finds all accounts with a purchase order number.

select AccountNumber from account where PurchaseOrderNumber != null

The following query finds all accounts where AutoPay has been set to yes (true) and the status of those accounts is active.

select AccountNumber from account where AutoPay = true and Status='Active'

The following query finds all accounts where AutoPay has been set to no (false).

select AccountNumber from account where AutoPay != true

## Order of Operation

ZOQL for SOAP queries does not support parentheses in `query()` calls. The `and` operator takes priority over the `or` operator. This example shows the difference in filter statement logic.

Example Contacts:

| firstName | lastName | fax |
| --- | --- | --- |
| Willie | A | 2 |
| Willie | B | 3 |
| Jason | B | 3 |
| Jason | A | 1 |
| James | A | 2 |
| James | B | 2 |
| Billy | A | 4 |
| Billy | B | 2 |
| Jerome | A | 5 |
| Jerome | B | 6 |

Filter Statement 1

`SELECT firstName,lastName,fax FROM Contact WHERE firstName='Billy' or lastName='A' and firstName='Jason' or fax='6' or fax='5';`

Returns:

| firstName | lastName | fax |
| --- | --- | --- |
| Jason | A | 1 |
| Billy | A | 4 |
| Billy | B | 2 |
| Jerome | A | 5 |
| Jerome | B | 6 |

Notice that `lastName='A' and firstName='Jason'` is evaluated first.

The equivalent filter statement using parentheses (not supported) would be:

`SELECT firstName,lastName,fax FROM Contact WHERE firstName='Billy' or (lastName='A' and firstName='Jason') or fax='6' or fax='5';`

Filter Statement 2

`SELECT firstName,lastName,fax FROM Contact WHERE fax='2' or firstName='Billy' and lastName='A' or fax='5' and firstName='Jerome';`

Returns:

| firstName | lastName | fax |
| --- | --- | --- |
| Willie | A | 2 |
| James | A | 2 |
| James | B | 2 |
| Billy | A | 4 |
| Billy | B | 2 |
| Jerome | A | 5 |

In this case, `firstName='Billy' and lastName='A'` as well as `fax='5' and firstName='Jerome'` are evaluated first.

The equivalent filter statement using parentheses (not supported) would be:

`SELECT firstName,lastName,fax FROM Contact WHERE fax='2' or (firstName='Billy' and lastName='A') or (fax='5' and firstName='Jerome');`
