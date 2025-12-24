---
title: "Export ZOQL Filter Statements"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/export-zoql-filter-statements"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:43.241Z"
---

# Export ZOQL Filter Statements

Learn how to use Export ZOQL filter statements to create exports from Zuora data sources, including the use of logical operators and null values.

Export ZOQL supports multiple filter statements that you can use when building queries. Use Export ZOQL for creating exports from Zuora data sources. Export ZOQL uses a different syntax than standard ZOQL.

## Using null in Filter Statements

You can use `null` as a value in a filter statement.

For example you can use the following query to find all accounts with a purchase order number:

select AccountNumber from account where PurchaseOrderNumber != null

Similar to SQL, Export ZOQL also supports the use of `is null` and `is not null` .

## Filter Relationship Operators

Export ZOQL supports the filter relationship operators `and` , `or` , and `not` .

## AND Relationship Operator

The `and` relationship operator is a logical operator that requires both specified items to be true.

For example, the following query will return IDs only for accounts where `AutoPay` is set to `true` and `Status` is `Active` .

select AccountNumber from account where AutoPay = true and Status='Active'

## OR Relationship Operator

The `or` relationship operator is a logical operator that requires one or both items to be true.

For example, the following query will return IDs for all accounts whose status is either `Draft` or `Active` (or both).

select AccountNumber from account where Status='Draft' or Status='Active'

## NOT Relationship Operator

The `not` relationship operator is a logical operator that requires the specified item to be false.

For example, the following query will return information from all accounts with the name Jill, a variation that includes Jack, and that were not created on January 1, 2011.

select \* from Account where name = 'Jill' or name like 'Jack%' or not createdDate = '2011-01-01'

## Using Parentheses with OR and NOT

You can use parentheses to nest OR and NOT conditions. For example:

select id from Account where (name like 'Adam %' and (status = 'Active' or status = 'Canceled'))

## Comparing fields in filter statements

You can compare Zuora fields using binary operators in the filter statements. For example:

select Account.Id, Invoice.Id from Invoice where Invoice.Balance >= Account.Balance select Id from Subscription where ContractEffectiveDate != ServiceActivationDate select Id from Subscription where ServiceActivationDate = DateCustomField\_\_c

You can compare the DateTime Field with the Date Field. For example:

select Id from Subscription where CreatedDate = DateCustomField\_\_c

Note:

This query will find all the records created within the entire day of DateCustomField\_\_c.
